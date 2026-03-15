import { type FC } from 'react'
import { WORKS } from '@/content/works'
import { WorkCard } from '@/components/ui/WorkCard/WorkCard'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import styles from './PortfolioSection.module.css'

export const PortfolioSection: FC = () => {
  return (
    <section
      className={styles.PortfolioSection}
      data-header-theme="light"
      id="trabalhos"
      aria-label="Portfólio"
    >
      <div className={styles.PortfolioSection__Inner}>

        <SectionReveal className={styles.PortfolioSection__Header}>
          <span className={styles.PortfolioSection__Label} aria-hidden="true">
            CASES SELECIONADOS
          </span>
          <h2 className={styles.PortfolioSection__Title}>
            Trabalhos que geram impacto
          </h2>
        </SectionReveal>

        <div className={styles.PortfolioSection__Grid}>
          {WORKS.map((work, i) => (
            <SectionReveal key={work.id} delay={i * 120}>
              <WorkCard {...work} index={i} />
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
