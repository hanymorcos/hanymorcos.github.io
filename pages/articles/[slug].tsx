import React from 'react'
import components from '../../components/MDXComponents'
import Article from '../../components/Article'
import { allArticles } from '.contentlayer/data'
import type { Article as ArticleType } from '.contentlayer/types'
import dynamic from 'next/dynamic'
import { MDXProvider } from '@mdx-js/react'
import { YouTube} from 'mdx-embed'

type PostProps = {
  post: ArticleType
}

export default function Post({ post }: PostProps) {  // import mdx
  const Post = dynamic(import(`data/content/articles/${post}.mdx`))

  // dynamic import because not ESM compatible
  const embeds = dynamic<typeof YouTube>(import('mdx-embed').then(module =>   module.YouTube));
  const { YouTube} = embeds

  const components = {
    YouTube
  }

  return (
    <MDXProvider components={components}>
    <Post />
  </MDXProvider>
  
  )
}

export async function getStaticPaths() {
  return {
    paths: allArticles.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allArticles.find((post) => post.slug === params.slug)

  return { props: { post } }
}
