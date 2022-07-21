import React from 'react'
import styles from './Author.module.css'
import socials from '../../.generated/meta/socialsTs'
import Link from '../Link'

export default function Author() {
  return (
    <article className={styles.wrap}>
      <img
        src="/optimized/raw/portrait-sm.webp"
        alt="Hany Morcos"
        className={styles.avatar}
        loading="lazy"
      />
      <div>
        <Link href={socials.home} className={styles.author}>
          Hany Morcos
        </Link>
        <p>{socials.description}</p>
      </div>
    </article>
  )
}
