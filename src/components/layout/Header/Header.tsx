'use client'

/**
 * Requires:
 * - /public/brand/LogoDark.svg  (copy from /Desktop/Brand Portifólio/LogoDark.svg)
 * - /public/brand/LogoLight.svg (copy from /Desktop/Brand Portifólio/LogoLight.svg)
 */

import { type FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'

type HeaderTheme = 'dark' | 'light' | 'red'

export const Header: FC = () => {
  const [theme, setTheme] = useState<HeaderTheme>('red')
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll to apply backdrop
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Swap logo based on active section — sections must declare data-header-theme
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-header-theme]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionTheme = entry.target.getAttribute(
              'data-header-theme'
            ) as HeaderTheme
            if (sectionTheme) setTheme(sectionTheme)
          }
        })
      },
      { threshold: 0.4, rootMargin: '-64px 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const logoSrc =
    theme === 'light' ? '/brand/LogoDark.svg' : '/brand/LogoLight.svg'

  return (
    <header
      className={[
        styles.Header,
        styles[`Header--${theme}`],
        isScrolled ? styles['Header--scrolled'] : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="banner"
    >
      <div className={styles.Header__Inner}>
        <Link
          href="/"
          className={styles.Header__Logo}
          aria-label="Ir para o início — Toni Fogue"
        >
          <Image
            src={logoSrc}
            alt="Toni Fogue"
            width={90}
            height={55}
            priority
          />
        </Link>

        <Navigation theme={theme} />
      </div>
    </header>
  )
}
