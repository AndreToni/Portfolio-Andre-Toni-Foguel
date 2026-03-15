'use client'

import { type FC, type ReactNode } from 'react'
import Link from 'next/link'
import styles from './GhostButton.module.css'

interface GhostButtonProps {
  label: string
  href?: string
  onClick?: () => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  theme?: 'on-red' | 'on-dark' | 'on-light'
  fullWidth?: boolean
  external?: boolean
  'data-analytics'?: string
}

export const GhostButton: FC<GhostButtonProps> = ({
  label,
  href,
  onClick,
  icon,
  iconPosition = 'right',
  theme = 'on-red',
  fullWidth = false,
  external = false,
  'data-analytics': dataAnalytics,
}) => {
  const className = [
    styles.GhostButton,
    styles[`GhostButton--${theme}`],
    fullWidth ? styles['GhostButton--full'] : '',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.GhostButton__Icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{label}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.GhostButton__Icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  )

  if (href) {
    /* âncoras (#) usam <a> nativo — Link do Next.js pode interferir no scroll */
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          className={className}
          data-analytics={dataAnalytics}
        >
          {content}
        </a>
      )
    }

    return (
      <Link
        href={href}
        className={className}
        data-analytics={dataAnalytics}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      data-analytics={dataAnalytics}
    >
      {content}
    </button>
  )
}
