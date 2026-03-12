import { type FC } from 'react'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton/CTAButton'
import { GhostButton } from '@/components/ui/GhostButton/GhostButton'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import styles from './BannerSection.module.css'

export const BannerSection: FC = () => {
  return (
    <section
      className={styles.BannerSection}
      data-header-theme="red"
      aria-label="Entre em contato"
      id="contato"
    >
      <SectionReveal className={styles.BannerSection__Inner}>
        <span className={styles.BannerSection__Label} aria-hidden="true">
          06 — ENTRAR EM CONTATO
        </span>

        <h2 className={styles.BannerSection__Title}>
          Vamos evoluir seu
          <br />
          produto juntos?
        </h2>

        <p className={styles.BannerSection__Subtitle}>
          Se você busca um Product Designer para atuar em produtos digitais
          complexos, sistemas ou contextos regulados, fico à disposição para
          iniciar uma conversa.
        </p>

        <div className={styles.BannerSection__Action}>
          <GhostButton
            label="Ver LinkedIn"
            href="https://www.linkedin.com/in/andretonifoguel/"
            theme="on-red"
            icon={<ExternalLink size={16} />}
            external
            data-analytics="banner_linkedin_click"
          />
          <CTAButton
            label="Entrar em contato"
            href="https://wa.me/5515998365749?text=Ol%C3%A1%2C%20boa%20tarde!%0ATudo%20tranquilo%3F%0ATenho%20uma%20vaga%20e%20gostaria%20de%20falar%20sobre%20a%20mesma%20com%20o%20senhor."
            theme="on-red"
            external
            data-analytics="banner_cta_click"
          />
        </div>
      </SectionReveal>
    </section>
  )
}
