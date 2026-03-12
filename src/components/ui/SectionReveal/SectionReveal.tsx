'use client'

import { type FC, type ReactNode, useEffect, useRef } from 'react'
import styles from './SectionReveal.module.css'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const SectionReveal: FC<SectionRevealProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.dataset.revealed = 'true'
      return
    }

    let timer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            el.dataset.revealed = 'true'
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={[styles.SectionReveal, className].filter(Boolean).join(' ')}
      data-revealed="false"
    >
      {children}
    </div>
  )
}
