'use client'

import { useEffect, useState, useCallback } from 'react'
import type { FC } from 'react'
import styles from './CaseNav.module.css'

interface NavItem {
  id: string
  label: string
}

interface CaseNavProps {
  items: NavItem[]
}

/**
 * CaseNav — menu lateral de navegação interno do case.
 * - Fixo à direita, alinhado à direita (dot à dir., label expande à esq.)
 * - Tema auto: seções pares → dark bg → nav branco; ímpares → light bg → nav preto
 * - Label hover encapsulada com a cor de contraste da seção
 */
export const CaseNav: FC<CaseNavProps> = ({ items }) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? '')
  const [visible, setVisible] = useState(true)
  const [inExplore, setInExplore] = useState(false)

  /* Oculta quando o footer entra na viewport */
  useEffect(() => {
    const footerEl = document.querySelector<HTMLElement>('footer')
    const check = () => {
      if (!footerEl) return
      setVisible(footerEl.getBoundingClientRect().top > window.innerHeight)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  /* Detecta seção "Continuar explorando" (fundo claro → tema light) */
  useEffect(() => {
    const exploreEl = document.querySelector('section[aria-label="Continuar explorando"]')
    if (!exploreEl) return
    const observer = new IntersectionObserver(
      ([entry]) => setInExplore(entry.isIntersecting),
      { rootMargin: '0px', threshold: 0 }
    )
    observer.observe(exploreEl)
    return () => observer.disconnect()
  }, [])

  /* Tema da seção ativa (index par = dark, ímpar = light) */
  const activeIndex = items.findIndex((item) => item.id === active)
  const theme = inExplore ? 'light' : (activeIndex % 2 === 0 ? 'dark' : 'light')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    []
  )

  return (
    <nav
      className={`${styles.CaseNav} ${styles[`CaseNav--${theme}`]} ${visible ? '' : styles['CaseNav--hidden']}`}
      aria-label="Navegação interna do case"
    >
      <ul className={styles.CaseNav__List}>
        {items.map(({ id, label }) => (
          <li key={id} className={styles.CaseNav__Item}>
            <a
              href={`#${id}`}
              className={`${styles.CaseNav__Link} ${
                active === id ? styles['CaseNav__Link--active'] : ''
              }`}
              onClick={(e) => handleClick(e, id)}
            >
              <span className={styles.CaseNav__Label}>{label}</span>
              <span className={styles.CaseNav__Dot} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
