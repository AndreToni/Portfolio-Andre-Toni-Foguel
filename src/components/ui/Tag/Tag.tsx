import { type FC } from 'react'
import styles from './Tag.module.css'

interface TagProps {
  label: string
  /** 'dark' — contornada, para uso em fundos escuros (default). 'light' — preenchida, para uso em fundos claros. */
  theme?: 'dark' | 'light'
}

export const Tag: FC<TagProps> = ({ label, theme = 'dark' }) => {
  return (
    <span className={[styles.Tag, styles[`Tag--${theme}`]].join(' ')}>
      {label}
    </span>
  )
}
