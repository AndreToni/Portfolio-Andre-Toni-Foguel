'use client'

/**
 * ChromeVisibilityContext — permite que uma página (ex.: not-found) esconda
 * elementos de "chrome" globais (hoje: o Footer) que vivem no RootLayout,
 * fora da própria árvore da página. Ver hook `useHideFooter`.
 */

import { createContext, useContext, useState, type FC, type ReactNode } from 'react'

interface ChromeVisibilityValue {
  hideFooter: boolean
  setHideFooter: (hide: boolean) => void
}

const ChromeVisibilityContext = createContext<ChromeVisibilityValue | null>(null)

export const ChromeVisibilityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [hideFooter, setHideFooter] = useState(false)

  return (
    <ChromeVisibilityContext.Provider value={{ hideFooter, setHideFooter }}>
      {children}
    </ChromeVisibilityContext.Provider>
  )
}

export const useChromeVisibility = () => {
  const ctx = useContext(ChromeVisibilityContext)
  if (!ctx) {
    throw new Error('useChromeVisibility deve ser usado dentro de ChromeVisibilityProvider')
  }
  return ctx
}
