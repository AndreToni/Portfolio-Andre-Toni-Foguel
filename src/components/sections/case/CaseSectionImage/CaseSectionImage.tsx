import { type FC } from 'react'
import Image from 'next/image'
import styles from './CaseSectionImage.module.css'

interface CaseSectionImageProps {
  src: string
  alt: string
}

/**
 * CaseSectionImage — imagem full-bleed (100vw × altura natural da imagem).
 * Renderizada fora de qualquer seção, sem limite de max-width.
 */
export const CaseSectionImage: FC<CaseSectionImageProps> = ({ src, alt }) => {
  return (
    <div className={styles.CaseSectionImage}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={styles.CaseSectionImage__Img}
        priority={false}
      />
    </div>
  )
}
