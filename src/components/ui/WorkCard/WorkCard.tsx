'use client'

import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Work } from '@/types'
import { useCardCursor } from '@/hooks/useCardCursor'
import { CardCursor } from '@/components/ui/CardCursor/CardCursor'
import styles from './WorkCard.module.css'

interface WorkCardProps extends Work {
  index: number
}

export const WorkCard: FC<WorkCardProps> = ({
  title,
  description,
  category,
  image,
  href,
  index,
}) => {
  const { cursor, cardHandlers } = useCardCursor()

  return (
    <article
      className={styles.WorkCard}
      data-analytics={`portfolio_card_${index + 1}`}
      {...cardHandlers}
    >
      {/* Cursor customizado — segue o mouse */}
      <CardCursor {...cursor} />

      {/* Stretched link — makes the entire card clickable */}
      <Link
        href={href}
        className={styles.WorkCard__StretchedLink}
        aria-label={`Ver case: ${title}`}
        data-analytics={`portfolio_card_cta_${index + 1}`}
      />

      {/* Image */}
      <div className={styles.WorkCard__ImageWrap}>
        <div className={styles.WorkCard__ImageInner}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.WorkCard__Image}
          />
          <div className={styles.WorkCard__Overlay} aria-hidden="true" />
        </div>
      </div>

      {/* Meta */}
      <div className={styles.WorkCard__Body}>
        <span className={styles.WorkCard__Badge}>{category}</span>
        <h3 className={styles.WorkCard__Title}>{title}</h3>
        <p className={styles.WorkCard__Description}>{description}</p>

        {/* Visual indicator only — card link handles navigation */}
        <span className={styles.WorkCard__Link} aria-hidden="true">
          <span>Ver mais</span>
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}
