import { type FC } from 'react'
import { WORKS } from '@/content/works'
import { WorkCard } from '@/components/ui/WorkCard/WorkCard'
import styles from './CaseExplore.module.css'

interface CaseExploreProps {
  currentSlug: string
}

/**
 * CaseExplore — "Continuar explorando".
 * Usa os mesmos WorkCards da home, excluindo o case atual (máx. 3).
 */
export const CaseExplore: FC<CaseExploreProps> = ({ currentSlug }) => {
  const others = WORKS.filter((w) => w.id !== currentSlug).slice(0, 3)

  return (
    <section id="outros-projetos" className={styles.CaseExplore} aria-label="Continuar explorando">
      <div className={styles.CaseExplore__Inner}>
        <header className={styles.CaseExplore__Header}>
          <span className={styles.CaseExplore__Label}>Continue explorando</span>
          <h2 className={styles.CaseExplore__Title}>Outros projetos</h2>
        </header>

        <div className={styles.CaseExplore__Grid}>
          {others.map((work, i) => (
            <WorkCard key={work.id} {...work} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
