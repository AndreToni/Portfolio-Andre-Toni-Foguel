'use client'

/**
 * Icons require: npm install lucide-react
 */

import { type FC } from 'react'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton/CTAButton'
import { GhostButton } from '@/components/ui/GhostButton/GhostButton'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas/ParticleCanvas'
import { HeroScroll } from '@/components/ui/HeroScroll/HeroScroll'
import styles from './HeroSection.module.css'

export const HeroSection: FC = () => {
  return (
    <section
      className={styles.HeroSection}
      data-header-theme="red"
      aria-label="Apresentação"
      id="inicio"
    >
      {/* Particle burst — z-index 0, behind content */}
      <ParticleCanvas id="hero-particles" />

      <div className={styles.HeroSection__Content}>
        <span className={styles.HeroSection__Label} aria-hidden="true">
          Design Enginer · Product Design
        </span>

        <h1 className={styles.HeroSection__Title}>
          Product Designer orientado a negócio
        </h1>

        <p className={styles.HeroSection__Subtitle}>
          Atuo em produto B2B, SaaS, marketplaces, fintechs e plataformas digitais. Com experiência em discovery, UX research, design systems e liderança de iniciativas.
        </p>

        <div className={styles.HeroSection__Actions}>
          <GhostButton
            label="Ver trabalhos"
            href="#trabalhos"
            theme="on-red"
            data-analytics="hero_works_click"
          />
          <CTAButton
            label="Entrar em contato"
            href="https://wa.me/5515998365749?text=Ol%C3%A1%2C%20boa%20tarde!%0ATudo%20tranquilo%3F%0ATenho%20uma%20vaga%20e%20gostaria%20de%20falar%20sobre%20a%20mesma%20com%20o%20senhor."
            theme="on-red"
            external
            data-analytics="hero_cta_click"
          />
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <HeroScroll />

    </section>
  )
}
