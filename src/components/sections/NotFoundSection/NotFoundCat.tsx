'use client'

import Script from 'next/script'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './NotFoundCat.module.css'

// Estende o JSX para reconhecer o web component <lottie-player>.
// Com "jsx: react-jsx" (React 19), a augmentação precisa ser feita no
// módulo 'react' — o antigo `declare global { namespace JSX {...} } }`
// não é mais o namespace que o TypeScript usa para checar JSX.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          src: string
          background?: string
          speed?: string
          loop?: boolean
          autoplay?: boolean
        },
        HTMLElement
      >
    }
  }
}

// Cópia local do Lottie original, recolorida para a cor primária da marca
// (era rosa #FF66C4/#BE0376 — ver src/styles/globals.css --color-primary)
const CAT_LOTTIE_SRC = '/lottie/notfound-cat.json'

/** Gatinho animado (Lottie) sentado de costas, cauda balançando — mascote da 404. */
export const NotFoundCat = () => (
  <>
    <Script
      src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      strategy="afterInteractive"
    />
    <lottie-player
      src={CAT_LOTTIE_SRC}
      background="transparent"
      speed="1"
      loop
      autoplay
      className={styles.NotFoundCat}
    />
  </>
)
