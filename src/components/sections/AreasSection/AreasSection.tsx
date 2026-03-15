import { type FC } from 'react'
import { AREAS } from '@/content/areas'
import { AreaCard } from '@/components/ui/AreaCard/AreaCard'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import styles from './AreasSection.module.css'

export const AreasSection: FC = () => {
  return (
    <section
      className={styles.AreasSection}
      data-header-theme="dark"
      id="areas"
      aria-label="Áreas de atuação"
    >
      <div className={styles.AreasSection__Inner}>

        <SectionReveal className={styles.AreasSection__Header}>
          <span className={styles.AreasSection__Label} aria-hidden="true">
            AREAS
          </span>
          <h2 className={styles.AreasSection__Title}>Onde já atuei</h2>
        </SectionReveal>

        <div className={styles.AreasSection__List}>
          {AREAS.map((area, i) => (
            <SectionReveal key={area.id} delay={i * 80}>
              <AreaCard {...area} index={i} />
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
