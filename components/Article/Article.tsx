import React from 'react'
import styles from './Article.module.css'
import socials from '../../.generated/meta/socialsTs'
import Author from '../Author'
import SeoContainer from '../SeoContainer'
import Comment from '../Comment'

type ArticleProps = {
  children: React.ReactChild
  title: string
  description: string
  publishedAt: string
  slug: string
  cover: string
  coverWidth: string
  coverHeight: string
  category?: string
  readingTime?: Record<string, string>
  hideAuthor?: boolean
}

export default function Article({
  children,
  title,
  description,
  publishedAt,
  slug = '',
  cover = '',
  coverWidth,
  coverHeight,
  readingTime,
  hideAuthor,
}: ArticleProps) {
  return (
    <SeoContainer
      title={title}
      description={description}
      url={`https://hanymorcos.github.io/articles/${slug}`}
      image={`${socials.home}${cover}`}
      imageWidth={coverWidth}
      imageHeight={coverHeight}
      publishedAt={publishedAt}
    >
      <article>
        <div className={styles.container}>
          <div className={styles.wrap}>
            <h1>{title}</h1>
            <div className={styles.info}>
              <div className={styles.author}>
                <img
                  alt="Hany Morcos"
                  src="/optimized/raw/portrait-sm.webp"
                  loading="lazy"
                />
                <p>Hany Morcos</p>
              </div>
              <p>
                {publishedAt}
                {readingTime ? ` · ${readingTime.text}` : ''}
              </p>
            </div>
            <img alt={title} src={cover} width="100%" loading="lazy" />
            <div className="article-content">{children}</div>
            <Comment />
            {!hideAuthor && <Author />}
          </div>
        </div>
      </article>
    </SeoContainer>
  )
}
