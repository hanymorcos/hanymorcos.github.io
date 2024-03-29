import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Recommendation from '../components/Recommendation'
import Project from '../components/Project'
import SkillSet from '../components/SkillSet'
import socials from '../.generated/meta/socialsTs'
import Publication from '../components/Publication'
import SeoContainer from '../components/SeoContainer'
import Expertise from '../components/Expertise'

export default function Home() {
  return (
    <SeoContainer
      title="Hany Morcos - Software engineer, YouTuber, writer"
      description={socials.description}
      url={socials.home}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <Head>{/* Google Search Console */}</Head>

        <main className={styles.main}>
          <Hero />
          <Intro />
          <Recommendation />
          <Expertise />
          <Project />
          <Publication />
          <SkillSet />
        </main>
      </div>
    </SeoContainer>
  )
}
