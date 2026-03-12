'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { ArrowRight, Bot, Building2, Factory, Landmark, Layers, ShieldCheck, type LucideIcon } from 'lucide-react'
import type { Area } from '@/types'
import { useCardCursor } from '@/hooks/useCardCursor'
import { CardCursor } from '@/components/ui/CardCursor/CardCursor'
import styles from './AreaCard.module.css'

const ICON_MAP: Record<string, LucideIcon> = {
  Bot,
  Building2,
  Factory,
  Landmark,
  Layers,
  ShieldCheck,
}

interface AreaCardProps extends Area {
  index: number
}

export const AreaCard: FC<AreaCardProps> = ({
  icon,
  title,
  description,
  href,
  index,
}) => {
  const Icon = ICON_MAP[icon] ?? Layers
  const { cursor, cardHandlers } = useCardCursor()

  return (
    <article
      className={styles.AreaCard}
      data-analytics={`areas_card_${index + 1}`}
      {...cardHandlers}
    >
      {/* Cursor customizado — segue o mouse */}
      <CardCursor {...cursor} />

      {/* Stretched link — cobre todo o card */}
      <Link
        href={href}
        className={styles.AreaCard__StretchedLink}
        aria-label={`Ver mais sobre: ${title}`}
        data-analytics={`areas_card_cta_${index + 1}`}
      />

      <div className={styles.AreaCard__Header}>
        <span className={styles.AreaCard__IconWrap} aria-hidden="true">
          <Icon size={24} strokeWidth={1.5} />
        </span>
        <span className={styles.AreaCard__Number} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className={styles.AreaCard__Title}>{title}</h3>

      <p className={styles.AreaCard__Description}>{description}</p>

      {/* Indicador visual — a navegação é feita pelo stretched link */}
      <span className={styles.AreaCard__Link} aria-hidden="true">
        <span>Ver mais</span>
        <ArrowRight size={16} aria-hidden="true" />
      </span>
    </article>
  )
}
