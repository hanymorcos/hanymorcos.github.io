import React from 'react'
import styles from './Hero.module.css'
import clsx from 'clsx'

/**
 * Hero section. The Show piece of the website.
 *
 * Note: the trailing space in each title is for the "Reader view".
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        <span
          className={clsx(styles.title, styles.heroTitle, styles.heroTitle_1)}
        >
          <span className={clsx(styles.title, styles.animatedTitle_1)}>
            {'Software Engineer '}
          </span>
        </span>
        <span
          className={clsx(styles.title, styles.heroTitle, styles.heroTitle_2)}
        >
          <span className={clsx(styles.title, styles.animatedTitle_2)}>
            {'Developer Advocate '}
          </span>
        </span>
        <span
          className={clsx(styles.title, styles.heroTitle, styles.heroTitle_3)}
        >
          <span className={clsx(styles.title, styles.animatedTitle_3)}>
            {'Content Creator '}
          </span>
        </span>
      </h1>
    </section>
  )
}
