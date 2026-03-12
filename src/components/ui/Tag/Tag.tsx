import { type FC } from 'react'
import styles from './Tag.module.css'

interface TagProps {
  label: string
}

export const Tag: FC<TagProps> = ({ label }) => {
  return <span className={styles.Tag}>{label}</span>
}
