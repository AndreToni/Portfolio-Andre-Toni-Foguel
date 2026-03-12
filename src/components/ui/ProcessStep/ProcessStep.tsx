import { type FC } from 'react'
import type { ProcessStepData } from '@/types'
import styles from './ProcessStep.module.css'

interface ProcessStepProps extends ProcessStepData {
  isLast?: boolean
}

export const ProcessStep: FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isLast = false,
}) => {
  return (
    <div
      className={[styles.ProcessStep, isLast ? styles['ProcessStep--last'] : '']
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.ProcessStep__Number} aria-hidden="true">
        {number}
      </div>

      <div className={styles.ProcessStep__Content}>
        <h3 className={styles.ProcessStep__Title}>{title}</h3>
        <p className={styles.ProcessStep__Description}>{description}</p>
      </div>
    </div>
  )
}
