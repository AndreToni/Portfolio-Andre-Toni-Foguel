/**
 * Requires: /public/brand/LogoLight.svg
 */

import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const FOOTER_LINKS = [
  { label: 'Trabalhos', href: '/#trabalhos' },
  { label: 'Áreas', href: '/#areas' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Sobre', href: '/#sobre' },
] as const

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={styles.Footer}
      data-header-theme="dark"
      aria-label="Rodapé"
    >
      <div className={styles.Footer__Inner}>
        <div className={styles.Footer__Top}>

          <div className={styles.Footer__Brand}>
            <Link href="/" aria-label="Ir para o início — Toni Fogue">
              <Image
                src="/brand/LogoLight.svg"
                alt="Toni Fogue"
                width={90}
                height={55}
              />
            </Link>
            <p className={styles.Footer__Tagline}>
              Product Designer focado em produtos digitais e decisões orientadas a negócio.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className={styles.Footer__Nav} role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.Footer__NavLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.Footer__Social}>
            <Link
              href="https://www.linkedin.com/in/andretonifoguel/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.Footer__SocialLink}
              aria-label="Perfil de Toni Fogue no LinkedIn"
              data-analytics="footer_linkedin_click"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:tonifoguel@gmail.com"
              className={styles.Footer__SocialLink}
              aria-label="Enviar e-mail para Toni Fogue"
              data-analytics="footer_contact_click"
            >
              Email
            </Link>
            <Link
              href="https://wa.me/5515998365749?text=Ol%C3%A1%2C%20boa%20tarde!%0ATudo%20tranquilo%3F%0ATenho%20uma%20vaga%20e%20gostaria%20de%20falar%20sobre%20a%20mesma%20com%20o%20senhor."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.Footer__SocialLink}
              aria-label="Conversar com Toni Fogue no WhatsApp"
              data-analytics="footer_whatsapp_click"
            >
              WhatsApp
            </Link>
          </div>
        </div>

        <div className={styles.Footer__Bottom}>
          <p className={styles.Footer__Credits}>
            © {currentYear} Toni Fogue — Design e desenvolvimento próprio
          </p>
          <p className={styles.Footer__Credits}>
            <Link href="/privacidade" className={styles.Footer__PrivacyLink}>
              Política de privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
