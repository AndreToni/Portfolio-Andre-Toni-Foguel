import { type FC } from 'react'
import Link from 'next/link'
import styles from './Breadcrumb.module.css'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  theme?: 'on-red' | 'on-dark' | 'on-light'
}

/**
 * Breadcrumb — navegação hierárquica.
 * Ex.: Home › Trabalhos › Título do case
 */
export const Breadcrumb: FC<BreadcrumbProps> = ({ items, theme = 'on-red' }) => (
  <nav
    aria-label="Breadcrumb"
    className={`${styles.Breadcrumb} ${styles[`Breadcrumb--${theme}`]}`}
  >
    <ol className={styles.Breadcrumb__List}>
      {items.map((item, i) => (
        <li key={i} className={styles.Breadcrumb__Item}>
          {item.href ? (
            <Link href={item.href} className={styles.Breadcrumb__Link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.Breadcrumb__Current} aria-current="page">
              {item.label}
            </span>
          )}
          {i < items.length - 1 && (
            <span className={styles.Breadcrumb__Sep} aria-hidden="true">
              /
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
)
