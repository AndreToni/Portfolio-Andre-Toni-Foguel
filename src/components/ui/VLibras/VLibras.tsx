'use client'

/**
 * VLibras — Plugin de acessibilidade em Língua Brasileira de Sinais (LIBRAS)
 * Fornecido pelo Governo Federal do Brasil (https://vlibras.gov.br)
 *
 * O script injeta automaticamente o widget de tradução na página
 * ao encontrar os atributos personalizados vw / vw-access-button / vw-plugin-wrapper.
 */

import Script from 'next/script'

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    VLibras: { Widget: new (url: string) => void }
  }
}

export const VLibras = () => (
  <>
    {/* Contêiner do widget — atributos customizados necessários para o plugin */}
    <div {...({ vw: '', className: 'enabled' } as any)}>
      <div {...({ 'vw-access-button': '', className: 'active' } as any)}>
        {/* Ícone incluído diretamente — o Widget não injeta o img corretamente no Next.js */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://vlibras.gov.br/app/assets/images/vlibras-icon.svg"
          alt="Acessibilidade em Libras"
        />
      </div>
      <div {...({ 'vw-plugin-wrapper': '' } as any)}>
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>

    <Script
      src="https://vlibras.gov.br/app/vlibras-plugin.js"
      strategy="afterInteractive"
      onLoad={() => {
        new window.VLibras.Widget('https://vlibras.gov.br/app')
      }}
    />
  </>
)
