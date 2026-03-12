'use client'

import { type FC } from 'react'
import Link from 'next/link'
import styles from './CTAButton.module.css'

interface CTAButtonProps {
  label: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  theme?: 'on-red' | 'on-dark' | 'on-light'
  fullWidth?: boolean
  external?: boolean
  'data-analytics'?: string
}

export const CTAButton: FC<CTAButtonProps> = ({
  label,
  href,
  onClick,
  type = 'button',
  theme = 'on-red',
  fullWidth = false,
  external = false,
  'data-analytics': dataAnalytics,
}) => {
  const className = [
    styles.CTAButton,
    styles[`CTAButton--${theme}`],
    fullWidth ? styles['CTAButton--full'] : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        data-analytics={dataAnalytics}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {label}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      data-analytics={dataAnalytics}
    >
      {label}
    </button>
  )
}
