import { Octokit } from '@octokit/core'
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import prettier from 'prettier'

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
})

async function fetchUser(username) {
  // more detail about github user: https://docs.github.com/en/rest/reference/users#get-a-user
  const response = await octokit.request('GET /users/{username}', {
    username,
  })
  return response.data
}

async function fetchUserRepos(username, numberOfRepos) {
  const perPage = 100
  const numberOfPages = Math.floor(numberOfRepos / perPage) + 1
  const pages = Array.from({ length: numberOfPages })
    .fill(1)
    .map((page, i) => page + i)
    .map((page) => async () => {
      // more detail about @octokit: https://github.com/octokit/core.js
      // more detail about github repos: https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
      const response = await octokit.request('GET /users/{username}/repos', {
        username,
        per_page: perPage,
        page,
      })
      return response.data
    })

  const responses = await Promise.allSettled(pages.map((page) => page()))

  const repos = responses
    .filter((resp) => resp.status === 'fulfilled')
    .map((resp) => resp.value)
    .reduce((acc, repos) => [...acc, ...repos])
    .filter((repo) => repo.stargazers_count > 0 || repo.forks_count > 0)
    .sort(
      // prioritize stars in the list
      (a, b) =>
        b.stargazers_count * 3 +
        b.forks_count -
        (a.stargazers_count * 3 + a.forks_count)
    )

  return repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    htmlUrl: repo.html_url,
    homepage: repo.homepage,
    description: repo.description,
    language: repo.language,
    forksCount: repo.forks_count,
    stargazersCount: repo.stargazers_count,
    topics: repo.topics,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
  }))
}

async function writeFiles(data) {
  const prettierConfig = await prettier.resolveConfig('./prettierrc')

  const outDir = '.generated/github'
  const extensions = ['.ts', '.mjs']
  const filename = 'githubRepos'

  if (existsSync(outDir)) {
    // clear all generated files
    rmSync(outDir, { recursive: true })
  }

  const output = `export default ${JSON.stringify(data)}`

  mkdirSync(outDir, { recursive: true })

  extensions.forEach((extension) => {
    const formatted = prettier.format(output, {
      ...prettierConfig,
      parser: extension === '.ts' ? 'typescript' : 'babel',
    })
    const postfix = extension === '.ts' ? 'Ts' : ''

    writeFileSync(`${outDir}/${filename}${postfix}${extension}`, formatted)
  })
}

/**
 * Generate a list of Starred GitHub Repos and output in ".generate/github" directory.
 */
async function generate() {
  const profile = await fetchUser('hanymorcos')
  const repos = await fetchUserRepos('hanymorcos', profile.public_repos)

  await writeFiles(repos)
}

generate()
