import { type FC } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton/CTAButton'
import { GhostButton } from '@/components/ui/GhostButton/GhostButton'
import { SectionReveal } from '@/components/ui/SectionReveal/SectionReveal'
import { Tag } from '@/components/ui/Tag/Tag'
import styles from './AboutSection.module.css'

const SKILLS = [
  'Figma',
  'UX Research',
  'Design System',
  'Prototipação',
  'Ciência da Computação',
  'B2B SaaS',
  'Discovery',
  'Handoff técnico',
] as const

export const AboutSection: FC = () => {
  return (
    <section
      className={styles.AboutSection}
      data-header-theme="dark"
      id="sobre"
      aria-label="Sobre Toni Fogue"
    >
      <div className={styles.AboutSection__Inner}>

        {/* Coluna esquerda — Foto */}
        <div className={styles.AboutSection__PhotoCol}>
          <div className={styles.AboutSection__PhotoWrap}>
            <Image
              src="/about-photo.jpg"
              alt="Toni Foguel"
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
              className={styles.AboutSection__Photo}
              priority
            />
          </div>

          <div className={styles.AboutSection__PhotoMeta}>
            <span className={styles.AboutSection__Name}>André Toni Foguel</span>
            <span className={styles.AboutSection__Role}>
              Design Engineer · Product Design
            </span>
          </div>
        </div>

        {/* Coluna direita — Manifesto */}
        <SectionReveal className={styles.AboutSection__Content}>
          <span className={styles.AboutSection__Label} aria-hidden="true">
            05 — QUEM SOU EU
          </span>

          <h2 className={styles.AboutSection__Title}>
            Designer de produto,<br />não só de tela.
          </h2>

          <div className={styles.AboutSection__Manifesto}>
            <p>
              Sou Product Designer com mais de 4 anos de experiência em UX/UI e
              Product Design, atuando em produtos digitais e sistemas complexos.
              Tenho formação em Ciência da Computação, o que me permite trabalhar
              com proximidade técnica, entender restrições reais e colaborar de
              forma eficiente com times de produto e engenharia.
            </p>
            <p>
              Ao longo da minha trajetória, atuei em contextos B2B, produtos
              regulados e ambientes institucionais, lidando com desafios como
              arquitetura da informação, regras de negócio complexas, design
              systems e validação de soluções sob restrições de tempo, tecnologia
              e operação.
            </p>
            <p>
              Trabalho com foco em clareza, decisão e impacto, utilizando
              pesquisa, prototipação e validação para reduzir riscos e orientar
              escolhas de produto. Meu interesse é atuar em times que valorizem
              design como ferramenta estratégica, e não apenas como camada visual.
            </p>
          </div>

          <div className={styles.AboutSection__Tags} aria-label="Competências">
            {SKILLS.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </SectionReveal>

        {/* Botões — após a foto no mobile, coluna do conteúdo no desktop */}
        <div className={styles.AboutSection__Action}>
          <GhostButton
            label="Ver LinkedIn"
            href="https://www.linkedin.com/in/andretonifoguel/"
            theme="on-dark"
            icon={<ExternalLink size={16} />}
            external
            data-analytics="about_linkedin_click"
          />
          <CTAButton
            label="Entrar em contato"
            href="https://wa.me/5515998365749?text=Ol%C3%A1%2C%20boa%20tarde!%0ATudo%20tranquilo%3F%0ATenho%20uma%20vaga%20e%20gostaria%20de%20falar%20sobre%20a%20mesma%20com%20o%20senhor."
            theme="on-dark"
            external
            data-analytics="about_cta_click"
          />
        </div>

      </div>
    </section>
  )
}
