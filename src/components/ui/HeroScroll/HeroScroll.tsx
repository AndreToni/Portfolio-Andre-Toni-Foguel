'use client'

import { useEffect, useState } from 'react'
import styles from './HeroScroll.module.css'

/**
 * HeroScroll — indicador de scroll para desktop (≥1200px).
 * Composto por: mark TF · label "SCROLL" · dot animado.
 * Desaparece ao rolar além da hero.
 */
export const HeroScroll = () => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`${styles.HeroScroll} ${hidden ? styles['HeroScroll--hidden'] : ''}`}
      aria-hidden="true"
    >
      {/* TF mark inline — paths da favicon */}
      <svg
        className={styles.HeroScroll__Mark}
        viewBox="0 0 110 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cap */}
        <path d="M74.8034 0H34.9082C30.7769 0 27.4279 3.34907 27.4279 7.48035V17.4542C27.4279 21.5854 30.7769 24.9345 34.9082 24.9345H74.8034C78.9347 24.9345 82.2838 21.5854 82.2838 17.4542V7.48035C82.2838 3.34907 78.9347 0 74.8034 0Z" />
        {/* Body */}
        <path d="M109.712 24.9346H0V134.646H109.712V24.9346Z" />
        {/* TF letters */}
        <path d="M39.7044 103.882V61.7527H32.8224V56.0078H53.0792V61.7527H46.1973V103.882H39.7044ZM56.1976 103.882V56.0078H73.2827V61.7527H62.6606V76.7733H72.6843V82.5182H62.6606V103.882H56.1976Z" />
      </svg>

      {/* Label */}
      <span className={styles.HeroScroll__Label}>Scroll</span>

      {/* Arrow */}
      <svg
        className={styles.HeroScroll__Arrow}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L6 7L11 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Dot */}
      <span className={styles.HeroScroll__Dot} />
    </div>
  )
}
