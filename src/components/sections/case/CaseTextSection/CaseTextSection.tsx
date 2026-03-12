import { type FC } from 'react'
import type { CaseSectionContent } from '@/content/cases'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import styles from './CaseTextSection.module.css'

interface CaseTextSectionProps {
  id: string
  data: CaseSectionContent
  /** Índice da seção (0-based) — define tema automaticamente */
  index: number
}

/**
 * CaseTextSection — seção genérica de texto do case.
 *
 * Tema por índice (0-based):
 *   par  (0,2,4,6,8) → fundo dark
 *   ímpar (1,3,5,7)  → fundo light
 *
 * Layout: título sempre à esquerda · conteúdo à direita.
 * Animação: SectionReveal com stagger entre TitleCol e BodyCol.
 */
export const CaseTextSection: FC<CaseTextSectionProps> = ({ id, data, index }) => {
  const theme = index % 2 === 0 ? 'dark' : 'light'

  return (
    <section
      id={id}
      className={`${styles.CaseTextSection} ${styles[`CaseTextSection--${theme}`]}`}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.CaseTextSection__Inner}>
        {/* SectionReveal aplicado ao grid — TitleCol e BodyCol animam com stagger */}
        <SectionReveal className={styles.CaseTextSection__Grid}>
          {/* Título — sempre coluna esquerda */}
          <div className={styles.CaseTextSection__TitleCol}>
            <h2 id={`${id}-title`} className={styles.CaseTextSection__Title}>
              {data.title}
            </h2>
          </div>

          {/* Corpo */}
          <div className={styles.CaseTextSection__BodyCol}>
            <div className={styles.CaseTextSection__Body}>
              {data.paragraphs.map((p, i) => (
                <p key={i} className={styles.CaseTextSection__Paragraph}>
                  {p}
                </p>
              ))}

              {data.items && data.items.length > 0 && (
                <ul className={styles.CaseTextSection__Items}>
                  {data.items.map((item, i) => (
                    <li key={i} className={styles.CaseTextSection__Item}>
                      <span className={styles.CaseTextSection__ItemDot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
