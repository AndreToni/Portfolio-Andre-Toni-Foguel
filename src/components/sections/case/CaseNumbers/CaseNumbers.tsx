import { type FC } from 'react'
import type { CaseNumber } from '@/content/cases'
import styles from './CaseNumbers.module.css'

interface CaseNumbersProps {
  numbers: CaseNumber[]
  company: string
}

/**
 * CaseNumbers — seção de números/impacto do projeto.
 * Fundo: var(--color-section-red) — igual à hero.
 */
export const CaseNumbers: FC<CaseNumbersProps> = ({ numbers, company }) => (
  <section
    className={styles.CaseNumbers}
    aria-label={`Números do projeto ${company}`}
  >
    <div className={styles.CaseNumbers__Inner}>
      <span className={styles.CaseNumbers__Label}>Números do projeto</span>

      <ul className={styles.CaseNumbers__Grid} role="list">
        {numbers.map((n, i) => (
          <li key={i} className={styles.CaseNumbers__Item}>
            <span className={styles.CaseNumbers__Value}>{n.value}</span>
            <span className={styles.CaseNumbers__Name}>{n.label}</span>
            {n.detail && (
              <span className={styles.CaseNumbers__Detail}>{n.detail}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
)
