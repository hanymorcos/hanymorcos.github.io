import React from 'react'
import styles from '../styles/Work.module.css'
import SeoContainer from '../components/SeoContainer'
import socials from '../.generated/meta/socialsTs'
import repos from '../.generated/github/githubReposTs'
import Repo from '../components/Repo'
import Link from '../components/Link'

export default function Work() {
  return (
    <SeoContainer
      title="Hany Morcos's work"
      description="Hany Morcos enjoys building meaningful products and open source software that has an impact in the world."
      url={`${socials.home}/work`}
      image={socials.heroImage}
      imageWidth="1411"
      imageHeight="682"
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>I Build Meaningful Products and Open Source Software</h1>
          <h2>A pinch of awesomeness</h2>
          <p>
            I enjoy building tooling around testing, documentation, and CI/CD to
            improve developer experience. On top of solid coding and automation,
            nothing makes me happier than creating a meaningful product with
            thoughtful user experience and great performance.
          </p>
          <p>
            I've spent over {new Date().getFullYear() - 1998} years working on
            web engineering in startups, Federal Government, and United States
            Military. I've built features, architectures, and infrastructure for
            customer-facing products and enterprise software.
          </p>
          <p>
            Initially, I was a C/C++-Developer working with CORBA middleware.
            CORBA was the first implementation of the bus service. I went on to
            develop VBA and Micros in Access Database. I learned how to control
            features in Microsoft Access that's not available to the average
            user.
          </p>
          <p>
            As IT changes, I changed as well, I went to become an Oracle DBA and
            PL/SQL developer. I got certified and learned alot from it. After
            Oracle, I learned Java J2EE and Spring Framework. I became a
            microsoervices developer.
          </p>
          <p>
            Currently, I'm a fullstack developer and polygot developer. I enjoy
            coding in Javascript, Python, and Java.
          </p>
          <div className={styles.repos}>
            {repos.map((repo) => (
              <section className={styles.grid} key={repo.id}>
                <div className={styles.support}>
                  <div className={styles.tags}>
                    {repo.topics.map((topic) => (
                      <span key={`${repo.id}-${topic}`} className={styles.tag}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.focal}>
                  <Repo repo={repo} />
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </SeoContainer>
  )
}
