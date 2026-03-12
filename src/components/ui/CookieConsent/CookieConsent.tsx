'use client'

import { useState, useEffect } from 'react'
import { GhostButton } from '@/components/ui/GhostButton/GhostButton'
import { CTAButton } from '@/components/ui/CTAButton/CTAButton'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'toni-cookie-consent'

/**
 * CookieConsent — modal centralizado que solicita consentimento de cookies.
 * Persiste a escolha no localStorage; some após aceitar ou recusar.
 */
export const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  const dismiss = (value: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={styles.CookieConsent}
      role="dialog"
      aria-modal="true"
      aria-label="Política de privacidade e cookies"
    >
      <div className={styles.CookieConsent__Card}>
        <p className={styles.CookieConsent__Label}>Privacidade</p>

        <h2 className={styles.CookieConsent__Title}>
          Cookies &amp; rastreamento
        </h2>

        <p className={styles.CookieConsent__Body}>
          Usamos cookies para analisar o tráfego e entender como você interage
          com o portfólio. Nenhum dado é compartilhado com terceiros.
        </p>

        <div className={styles.CookieConsent__Actions}>
          <GhostButton
            label="Recusar"
            theme="on-dark"
            onClick={() => dismiss('declined')}
          />
          <CTAButton
            label="Aceitar"
            theme="on-dark"
            onClick={() => dismiss('accepted')}
          />
        </div>
      </div>
    </div>
  )
}
