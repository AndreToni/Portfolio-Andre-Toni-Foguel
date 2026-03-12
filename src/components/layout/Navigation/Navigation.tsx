'use client'

/**
 * Mobile Sheet requires: npx shadcn@latest add sheet
 * Icons require: npm install lucide-react
 */

import { type FC, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CTAButton } from '@/components/ui/CTAButton/CTAButton'
import styles from './Navigation.module.css'

const NAV_LINKS = [
  { label: 'Trabalhos', href: '/#trabalhos' },
  { label: 'Áreas', href: '/#areas' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Sobre', href: '/#sobre' },
] as const

interface NavigationProps {
  theme?: 'dark' | 'light' | 'red'
}

export const Navigation: FC<NavigationProps> = ({ theme = 'red' }) => {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.Navigation} aria-label="Navegação principal">

      {/* Desktop links */}
      <ul className={styles.Navigation__List} role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={link.label}
              className={[
                styles.Navigation__Link,
                styles[`Navigation__Link--${theme}`],
              ].join(' ')}
            >
              <span className={styles.Navigation__LinkSlider} aria-hidden="true">
                <span className={styles.Navigation__LinkText}>{link.label}</span>
                <span className={styles.Navigation__LinkText}>{link.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <div className={styles.Navigation__DesktopCTA}>
        <CTAButton
          label="Entrar em contato"
          href="https://wa.me/5515998365749?text=Ol%C3%A1%2C%20boa%20tarde!%0ATudo%20tranquilo%3F%0ATenho%20uma%20vaga%20e%20gostaria%20de%20falar%20sobre%20a%20mesma%20com%20o%20senhor."
          theme={theme === 'light' ? 'on-light' : theme === 'red' ? 'on-red' : 'on-dark'}
          external
          data-analytics="nav_cta_click"
        />
      </div>

      {/* Mobile trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className={[
              styles.Navigation__MobileToggle,
              styles[`Navigation__MobileToggle--${theme}`],
            ].join(' ')}
            aria-label="Abrir menu de navegação"
            data-analytics="nav_mobile_open"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className={styles.Navigation__Sheet}
          aria-label="Menu de navegação"
        >
          <button
            className={styles.Navigation__SheetClose}
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={24} aria-hidden="true" />
          </button>

          <ul className={styles.Navigation__SheetList} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.Navigation__SheetLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.Navigation__SheetCTA}>
            <CTAButton
              label="Entrar em contato"
              href="https://wa.me/5515998365749?text=Ol%C3%A1%2C%20boa%20tarde!%0ATudo%20tranquilo%3F%0ATenho%20uma%20vaga%20e%20gostaria%20de%20falar%20sobre%20a%20mesma%20com%20o%20senhor."
              theme="on-dark"
              fullWidth
              external
              data-analytics="nav_mobile_cta_click"
            />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
