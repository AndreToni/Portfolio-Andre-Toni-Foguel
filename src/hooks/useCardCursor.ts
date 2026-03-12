'use client'

/**
 * useCardCursor — lógica de cursor customizado reutilizável
 *
 * Retorna estado do cursor e handlers de mouse para qualquer card
 * que precise exibir o círculo "CLICK" substituindo o ponteiro nativo.
 *
 * Uso:
 *   const { cursor, cardHandlers } = useCardCursor()
 *   <article {...cardHandlers}>
 *     <CardCursor {...cursor} />
 *   </article>
 */

import { useState, useCallback } from 'react'

export interface CardCursorState {
  x: number
  y: number
  visible: boolean
}

export const useCardCursor = () => {
  const [cursor, setCursor] = useState<CardCursorState>({
    x: 0,
    y: 0,
    visible: false,
  })

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setCursor((prev) => ({ ...prev, visible: false }))
  }, [])

  return {
    cursor,
    cardHandlers: { onMouseMove, onMouseLeave },
  }
}
