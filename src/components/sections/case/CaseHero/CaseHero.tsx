import { type FC } from 'react'
import Image from 'next/image'
import type { CaseData } from '@/content/cases'
import { Breadcrumb } from '@/components/ui/Breadcrumb/Breadcrumb'
import styles from './CaseHero.module.css'

interface CaseHeroProps {
  data: CaseData
}

/**
 * CaseHero — primeira dobra do case.
 * Fundo: var(--color-section-red).
 * Layout: meta + título à esquerda · imagem de capa à direita (desktop).
 */
export const CaseHero: FC<CaseHeroProps> = ({ data }) => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Trabalhos', href: '/#trabalhos' },
    { label: data.title },
  ]

  return (
    <section
      className={styles.CaseHero}
      data-header-theme="red"
      aria-label={`Case: ${data.title}`}
    >
      {/* Conteúdo limitado a 1200px */}
      <div className={styles.CaseHero__Inner}>
        <div className={styles.CaseHero__Content}>
          <Breadcrumb items={breadcrumbs} theme="on-red" />

          <span className={styles.CaseHero__Category}>{data.category}</span>

          <h1 className={styles.CaseHero__Title}>{data.title}</h1>

          <p className={styles.CaseHero__Subtitle}>{data.subtitle}</p>

          {/* KPI Goal Card */}
          <div className={styles.CaseHero__KpiCard}>
            <span className={styles.CaseHero__KpiLabel}>Resultado</span>
            <p className={styles.CaseHero__KpiText}>{data.kpi}</p>
          </div>

          {/* Grid de meta */}
          <dl className={styles.CaseHero__Meta}>
            <div className={styles.CaseHero__MetaItem}>
              <dt className={styles.CaseHero__MetaLabel}>Empresa</dt>
              <dd className={styles.CaseHero__MetaValue}>{data.company}</dd>
            </div>
            {data.segment && (
              <div className={styles.CaseHero__MetaItem}>
                <dt className={styles.CaseHero__MetaLabel}>Segmento</dt>
                <dd className={styles.CaseHero__MetaValue}>{data.segment}</dd>
              </div>
            )}
            {data.platform && (
              <div className={styles.CaseHero__MetaItem}>
                <dt className={styles.CaseHero__MetaLabel}>Plataforma</dt>
                <dd className={styles.CaseHero__MetaValue}>{data.platform}</dd>
              </div>
            )}
            <div className={styles.CaseHero__MetaItem}>
              <dt className={styles.CaseHero__MetaLabel}>Ano</dt>
              <dd className={styles.CaseHero__MetaValue}>{data.year}</dd>
            </div>
            <div className={styles.CaseHero__MetaItem}>
              <dt className={styles.CaseHero__MetaLabel}>Papel</dt>
              <dd className={styles.CaseHero__MetaValue}>{data.role}</dd>
            </div>
            {data.duration && (
              <div className={styles.CaseHero__MetaItem}>
                <dt className={styles.CaseHero__MetaLabel}>Duração</dt>
                <dd className={styles.CaseHero__MetaValue}>{data.duration}</dd>
              </div>
            )}
          </dl>

        </div>
      </div>

      {/* Imagem de capa — full-width, altura natural da imagem, focal center */}
      <div className={styles.CaseHero__Cover}>
        <Image
          src={data.coverImage}
          alt={`Capa do case ${data.title}`}
          width={1920}
          height={1080}
          sizes="100vw"
          className={styles.CaseHero__CoverImg}
          priority
        />
      </div>
    </section>
  )
}
