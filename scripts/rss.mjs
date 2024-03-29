import { writeFileSync } from 'fs'
import RSS from 'rss'
import { allArticles } from '.contentlayer/data'
import socials from '../.generated/meta/socials.mjs'
import externalArticles from '../.generated/meta/externalArticles.mjs'

const originals = allArticles.map((a) => ({
  date: a.publishedAt,
  publisher: '',
  title: a.title,
  description: a.description,
  url: `/articles/${a.slug}`,
  cover: a.cover,
  category: a.category,
  author: 'Hany Morcos',
  avatar: '/optimized/portrait-sm.png',
  social: socials.github,
  external: false,
  publisherUrl: '',
}))

const articles = originals
  .concat(externalArticles)
  .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

/**
 * RSS Feed for the articles on the site.
 * Read more about rss package here: https://github.com/dylang/node-rss
 *
 * To add new articles in the feed, run `yarn build`.
 */
function generate() {
  const feed = new RSS({
    title: "Hany Morcos's tech articles",
    description: socials.description,
    feed_url: 'https://hanymorcos.github.io/rss.xml',
    site_url: 'https://hanymorcos.github.io/',
    image_url: 'https://hanymorcos.github.io/portrait.png',
    docs: 'https://hanymorcos.github.io/articles',
    managingEditor: 'Hany Morcos',
    webMaster: 'Hany Morcos',
    copyright: `© ${new Date().getFullYear()} Hany Morcos`,
    language: 'en',
    categories: [
      'Technology',
      'Programming',
      'TypesScript',
      'JavaScript',
      'Rust',
      'Frontend',
      'Backend',
      'Fullstack',
      'NodeJS',
      'React',
      'RxJS',
      'Leadership',
      'Tech Leadership',
      'Web Development',
      'Web Engineering',
      'Unit Test',
      'Release Pipeline',
      'Database',
    ],
    pubDate: `${new Date().toUTCString()}`,
    ttl: 60,
  })

  const items = articles.map((article) => ({
    title: article.title,
    description: article.description,
    url: article.external
      ? article.url
      : `https://hanymorcos.github.io${article.url}`, // link to the item
    categories: [article.category], // optional - array of item categories
    author: article.author, // optional - defaults to feed author property
    date: article.date, // any format that js Date can parse.
  }))

  items.forEach((item) => {
    feed.item(item)
  })

  const xml = feed.xml({ indent: true })

  writeFileSync('./public/rss.xml', xml)
}

generate()
