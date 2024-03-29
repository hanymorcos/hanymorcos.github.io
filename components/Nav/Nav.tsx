import React, { useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Nav.module.css'
import socials from '../../.generated/meta/socialsTs'
import { GrLinkedin, GrGithub, GrMedium, GrTwitter } from 'react-icons/gr'
import DarkmodeSwitch from '../DarkmodeSwitch'
import Link from '../Link'
import { SiHackernoon } from 'react-icons/si'

export default function Nav() {
  const [isMenuOpen, openMenu] = useState(false)
  const closeMenu = () => openMenu(false)
  const onMenuStateChange = ({ isOpen }) => openMenu(isOpen)

  return (
    <header className={styles.header}>
      <Menu
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        customBurgerIcon={<FiMenu />}
        customCrossIcon={<FiX />}
        disableAutoFocus
        isOpen={isMenuOpen}
        onStateChange={onMenuStateChange}
      >
        <Link href="/" className={styles.link}>
          <button
            className={styles.button}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Home
          </button>
        </Link>
        <Link href="/articles" className={styles.link}>
          <button
            className={styles.button}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Articles
          </button>
        </Link>
        <Link href="/work" className={styles.link}>
          <button
            className={styles.button}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Work
          </button>
        </Link>
        <Link href="/now" className={styles.link}>
          <button
            className={styles.button}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Now
          </button>
        </Link>
        <Link href="/expertise" className={styles.link}>
          <button
            className={styles.button}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Expertise
          </button>
        </Link>
        <Link href="/contact" className={styles.link}>
          <button
            className={styles.button}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Contact
          </button>
        </Link>

        <span className={styles.pusher} />
        <span className={styles.divider} />

        <div className={styles.profile}>
          <Link
            href={socials.linkedin}
            aria-label="Link to Hany Morcos's Linkedin profile"
            className={styles.iconLink}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <GrLinkedin />
          </Link>
          <Link
            href={socials.github}
            aria-label="Link to Hany Morcos's GitHub profile"
            className={styles.iconLink}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <GrGithub />
          </Link>
          <Link
            href={socials.medium}
            aria-label="Link to Hany Morcos's Medium profile"
            className={styles.iconLink}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <GrMedium />
          </Link>
          <Link
            href={socials.hackernoon}
            aria-label="Link to Hany Morcos's Hackernoon profile"
            className={styles.iconLink}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <SiHackernoon size="1.5em" />
            <span hidden>Link to Hany Morcos's Hacker Noon profile</span>
          </Link>
          <Link
            href={socials.twitter}
            aria-label="Link to Hany Morcos's Twitter profile"
            className={styles.iconLink}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <GrTwitter />
          </Link>
        </div>
        <DarkmodeSwitch showLabel tabIndex={isMenuOpen ? 0 : -1} />
      </Menu>
    </header>
  )
}
