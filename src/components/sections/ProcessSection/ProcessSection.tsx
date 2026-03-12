import { type FC } from 'react'
import { PROCESS_STEPS } from '@/content/process'
import { ProcessStep } from '@/components/ui/ProcessStep/ProcessStep'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import styles from './ProcessSection.module.css'

export const ProcessSection: FC = () => {
  return (
    <section
      className={styles.ProcessSection}
      data-header-theme="light"
      id="processo"
      aria-label="Como trabalho"
    >
      <div className={styles.ProcessSection__Inner}>

        <SectionReveal className={styles.ProcessSection__Header}>
          <span className={styles.ProcessSection__Label} aria-hidden="true">
            04 — COMO TRABALHO
          </span>
          <h2 className={styles.ProcessSection__Title}>Processo claro, resultado previsível</h2>
        </SectionReveal>

        <div
          className={styles.ProcessSection__Steps}
          role="list"
          aria-label="Etapas do processo"
        >
          {PROCESS_STEPS.map((step, i) => (
            <SectionReveal
              key={step.number}
              delay={i * 80}
              className={styles.ProcessSection__StepWrap}
            >
              <ProcessStep
                {...step}
                isLast={i === PROCESS_STEPS.length - 1}
              />
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
