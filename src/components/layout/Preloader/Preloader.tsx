'use client'

import { type FC, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Preloader.module.css'

interface PreloaderProps {
  onComplete?: () => void
}

export const Preloader: FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'entering' | 'visible' | 'exiting' | 'done'>('entering')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('visible'), 100)
    const t2 = setTimeout(() => setPhase('exiting'), 1400)
    const t3 = setTimeout(() => {
      setPhase('done')
      onComplete?.()
    }, 2000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div
      className={styles.Preloader}
      data-phase={phase}
      role="status"
      aria-label="Carregando"
      aria-live="polite"
    >
      {/* Requires: copy LogoLight.svg to /public/brand/LogoLight.svg */}
      <div className={styles.Preloader__Logo} aria-hidden="true">
        <Image
          src="/brand/LogoDark.svg"
          alt=""
          width={160}
          height={98}
          priority
        />
      </div>
    </div>
  )
}
