import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Toni Foguel — Product Designer & Design Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  /* ─── Carrega Big Shoulders Display Bold via Google Fonts ─── */
  let fontData: ArrayBuffer | null = null
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' } }
    ).then((r) => r.text())

    const match = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)
    if (match?.[1]) {
      fontData = await fetch(match[1]).then((r) => r.arrayBuffer())
    }
  } catch {
    // fallback para fonte do sistema
  }

  const fontFamily = fontData ? '"Big Shoulders Display"' : 'Arial Black, sans-serif'
  const fonts = fontData
    ? [
        {
          name: 'Big Shoulders Display',
          data: fontData,
          style: 'normal' as const,
          weight: 700 as const,
        },
      ]
    : []

  return new ImageResponse(
    (
      <div
        style={{
          background: '#FB0400',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '72px',
          padding: '0 80px',
        }}
      >
        {/* ─── Ícone TF ─── */}
        <svg width="190" height="234" viewBox="0 0 110 135" fill="none">
          {/* Cap */}
          <path
            d="M74.8034 0H34.9082C30.7769 0 27.4279 3.34907 27.4279 7.48035V17.4542C27.4279 21.5854 30.7769 24.9345 34.9082 24.9345H74.8034C78.9347 24.9345 82.2838 21.5854 82.2838 17.4542V7.48035C82.2838 3.34907 78.9347 0 74.8034 0Z"
            fill="#E0D8CE"
          />
          {/* Body */}
          <path d="M109.712 24.9346H0V134.646H109.712V24.9346Z" fill="#E0D8CE" />
          {/* TF letters */}
          <path
            d="M39.7044 103.882V61.7527H32.8224V56.0078H53.0792V61.7527H46.1973V103.882H39.7044ZM56.1976 103.882V56.0078H73.2827V61.7527H62.6606V76.7733H72.6843V82.5182H62.6606V103.882H56.1976Z"
            fill="#FB0400"
          />
        </svg>

        {/* ─── Nome ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          <span
            style={{
              fontFamily,
              fontSize: 172,
              fontWeight: 700,
              color: '#E0D8CE',
              lineHeight: 0.85,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
            }}
          >
            TONI
          </span>
          <span
            style={{
              fontFamily,
              fontSize: 172,
              fontWeight: 700,
              color: '#E0D8CE',
              lineHeight: 0.85,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
            }}
          >
            FOGUEL
          </span>
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}
