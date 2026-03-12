import { type FC } from 'react'
import type { CardCursorState } from '@/hooks/useCardCursor'
import styles from './CardCursor.module.css'

/**
 * CardCursor — círculo 48px que substitui o ponteiro nativo dentro de cards.
 * Usado em WorkCard e AreaCard via o hook useCardCursor.
 */
export const CardCursor: FC<CardCursorState> = ({ x, y, visible }) => (
  <span
    className={styles.CardCursor}
    style={{
      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
      opacity: visible ? 1 : 0,
    }}
    aria-hidden="true"
  >
    CLIQUE
  </span>
)
