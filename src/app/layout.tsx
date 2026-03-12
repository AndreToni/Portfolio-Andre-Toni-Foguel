import type { Metadata, Viewport } from 'next'
import { Big_Shoulders } from 'next/font/google'
import { Preloader } from '@/components/layout/Preloader/Preloader'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { VLibras } from '@/components/ui/VLibras/VLibras'
import { CookieConsent } from '@/components/ui/CookieConsent/CookieConsent'
import '@/styles/globals.css'

/* ─── Google Fonts via next/font (zero layout shift) ─── */
// Big Shoulders — fonte display para headings e labels
const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  axes: ['wght'],          // peso variável 100–900
  variable: '--font-big-shoulders',
  display: 'swap',
})

// Body font → SF Pro via system-ui stack (zero network request no macOS/iOS)

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title: {
    default: 'Toni Foguel — Product Designer & Design Engineer',
    template: '%s | Toni Foguel',
  },
  description:
    'Product Designer especializado em sistemas de design, produtos digitais e aplicação de IA no processo de Design. Acredito que design de excelência nasce da interseção entre estratégia, sistemas e empatia.',
  keywords: [
    'Design Lead',
    'Product Designer',
    'Design System',
    'UX Design',
    'UI Design',
    'Toni Foguel',
  ],
  authors: [{ name: 'Toni Foguel' }],
  creator: 'Toni Foguel',
  icons: {
    icon: [
      { url: '/brand/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/brand/favicon.svg',
    shortcut: '/brand/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Toni Foguel — Product Designer & Design Engineer',
    description:
      'Product Designer especializado em sistemas de design, produtos digitais e aplicação de IA no processo de Design.',
    siteName: 'Toni Foguel',
    images: [{ url: '/brand/LogoLight.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toni Foguel — Product Designer & Design Engineer',
    description:
      'Product Designer especializado em sistemas de design, produtos digitais e aplicação de IA no processo de Design',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

/* ─── Root Layout ─── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={bigShoulders.variable}
      suppressHydrationWarning
    >
      <body>
        <Preloader />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <VLibras />
        <CookieConsent />
      </body>
    </html>
  )
}
