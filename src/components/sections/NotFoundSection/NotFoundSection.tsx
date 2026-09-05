'use client'

import { CTAButton } from '@/components/ui/CTAButton/CTAButton'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import { useHideFooter } from '@/hooks/useHideFooter'
import { NotFoundCat } from './NotFoundCat'
import styles from './NotFoundSection.module.css'

/**
 * NotFoundSection — tela de erro 404.
 * Fundo escuro do DS + "aurora" decorativa nas cores primária/secundária.
 * Usa apenas tokens já existentes (cores, tipografia, espaçamento).
 * Esconde o Footer global enquanto estiver montada (ver useHideFooter).
 */
export const NotFoundSection = () => {
  useHideFooter()

  return (
    <section
      className={styles.NotFoundSection}
      data-header-theme="dark"
      aria-label="Página não encontrada"
    >
      <div className={styles.NotFoundSection__Aurora} aria-hidden="true">
        <span className={styles.NotFoundSection__Blob} data-tone="primary" />
        <span className={styles.NotFoundSection__Blob} data-tone="secondary" />
      </div>

      <SectionReveal className={styles.NotFoundSection__Content}>
        <NotFoundCat />

        <span className={styles.NotFoundSection__Code} aria-hidden="true">
          404
        </span>

        <h1 className={styles.NotFoundSection__Title}>
          Essa página saiu do mapa.
        </h1>

        <p className={styles.NotFoundSection__Description}>
          O link que você seguiu pode estar quebrado, ou a página foi movida.
          Vamos te levar de volta para o lugar certo.
        </p>

        <CTAButton
          label="Voltar para o início"
          href="/"
          theme="on-dark"
          data-analytics="404_back_home"
        />
      </SectionReveal>
    </section>
  )
}
