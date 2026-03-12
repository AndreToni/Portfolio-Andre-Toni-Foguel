import { HeroSection }      from '@/components/sections/HeroSection/HeroSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection/PortfolioSection'
import { AreasSection }     from '@/components/sections/AreasSection/AreasSection'
import { ProcessSection }   from '@/components/sections/ProcessSection/ProcessSection'
import { AboutSection }     from '@/components/sections/AboutSection/AboutSection'
import { BannerSection }    from '@/components/sections/BannerSection/BannerSection'

/**
 * Ordem das seções e temas (data-header-theme):
 *  1. HeroSection      → red   (#FB0400)
 *  2. PortfolioSection → light (#F9F7F4)
 *  3. AreasSection     → dark  (#0A0A0A)
 *  4. ProcessSection   → light (#F9F7F4)
 *  5. AboutSection     → dark  (#0A0A0A)
 *  6. BannerSection    → red   (#FB0400)
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <AreasSection />
      <ProcessSection />
      <AboutSection />
      <BannerSection />
    </>
  )
}
