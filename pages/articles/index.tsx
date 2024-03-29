import React from 'react'
import articles from '../../data/articles'
import styles from '../../styles/Articles.module.css'
import Link from '../../components/Link'
import { FiRss } from 'react-icons/fi'
import SeoContainer from '../../components/SeoContainer'
import socials from '../../.generated/meta/socialsTs'
import Search from '../../components/Search'

export default function Articles() {
  return (
    <SeoContainer
      title="Hany Morcos's articles"
      description="I write for engineers. Documenting web technology, coding patterns, and best practices from my learnings."
      url={`${socials.home}/articles`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.banner}>
            <p>
              If you enjoy the articles, please{' '}
              <Link href="/rss.xml">
                subscribe to the RSS feed <FiRss />
              </Link>
            </p>
          </div>
          <div className={styles.description}>
            <h1>I Write to Share What I Learned</h1>
            <h2>Ship. Learn. Share. Repeat.</h2>
            <p>
                I will start writing. 
            </p>
            <Search />
          </div>
          <div>
            {articles.map((article) => (
              <section className={styles.grid} key={article.url}>
                <div className={styles.date}>
                  <p>{article.date}</p>
                </div>
                <article className={styles.description}>
                  <p className={styles.category}>{article.category}</p>
                  {article.external && (
                    <Link href={article.url}>{article.title}</Link>
                  )}
                  {!article.external && (
                    <Link href={article.url}>{article.title}</Link>
                  )}
                  {article.external && (
                    <Link
                      href={article.publisherUrl}
                      className={styles.caption}
                    >
                      {'Published on '}
                      <span>{article.publisher}</span>
                    </Link>
                  )}
                  <p>{article.description}</p>
                  <div>
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className={styles.avatar}
                      loading="lazy"
                    />
                    <Link href={article.social} className={styles.author}>
                      {article.author}
                    </Link>
                  </div>
                </article>
              </section>
            ))}
          </div>
        </main>
      </div>
    </SeoContainer>
  )
}
