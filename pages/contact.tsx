import React from 'react'
import socials from '../.generated/meta/socialsTs'
import SeoContainer from '../components/SeoContainer'
import ContactSection from '../components/Contact'
import styles from '../styles/Contact.module.css'
import Section from '../components/Section'

export default function Contact() {
  return (
    <SeoContainer
      title="Hany Morcos's contact"
      description="If you are looking for help to build something to make an impact and you care about sustainability and inclusivity, Let's talk."
      url={`${socials.home}/contact`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <main className={styles.main}>
        <h1>Get in Touch</h1>
        <h2>Let's build something together</h2>
        <ContactSection />
      </main>
    </SeoContainer>
  )
}
