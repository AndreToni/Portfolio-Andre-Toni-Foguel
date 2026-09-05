'use client'

import Script from 'next/script'
import styles from './NotFoundCat.module.css'

// Estende o JSX para reconhecer o web component <lottie-player>
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
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
