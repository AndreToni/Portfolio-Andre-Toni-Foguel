'use client'

import { useEffect } from 'react'
import { useChromeVisibility } from '@/contexts/ChromeVisibilityContext'

/** Esconde o rodapé global enquanto o componente que chama este hook estiver montado. */
export const useHideFooter = () => {
  const { setHideFooter } = useChromeVisibility()

  useEffect(() => {
    setHideFooter(true)
    return () => setHideFooter(false)
  }, [setHideFooter])
}
