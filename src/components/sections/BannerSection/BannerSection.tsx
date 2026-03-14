import { type FC } from 'react'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton/CTAButton'
import { GhostButton } from '@/components/ui/GhostButton/GhostButton'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import styles from './BannerSection.module.css'

interface BannerSectionProps {
  hideLabel?: boolean
}

export const BannerSection: FC<BannerSectionProps> = ({ hideLabel = false }) => {
  return (
    <section
      className={styles.BannerSection}
      data-header-theme="red"
      aria-label="Entre em contato"
      id="contato"
    >
      <SectionReveal className={styles.BannerSection__Inner}>
        {!hideLabel && (
          <span className={styles.BannerSection__Label} aria-hidden="true">
            06 — ENTRAR EM CONTATO
          </span>
        )}

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
            href="https://wa.me/5515998365749?text=Ol%C3%A1%2C%20Andr%C3%A9!%20Espero%20que%20esteja%20bem.%20%0AEstou%20conduzindo%20uma%20oportunidade%20que%20pode%20se%20alinhar%20ao%20seu%20perfil%20e%20gostaria%20de%20trocar%20algumas%20ideias%20com%20voc%C3%AA."
            theme="on-red"
            external
            data-analytics="banner_cta_click"
          />
        </div>
      </SectionReveal>
    </section>
  )
}
