# Project Spec — Portfólio TF · Toni Fogue
> spec-v2.md · Etapa 2 concluída · gerenciado pelo Claude Code

---

## META
projeto:    Portfólio TF · Toni Fogue
versao:     2.0
status:     arquitetura-aprovada
criado:     2026-03-11
atualizado: 2026-03-11

---

## BRIEFING
objetivo:  Apresentar trabalho e processo para recrutadores e líderes de design
publico:   Recrutadores e líderes de design
cta:       Entrar em contato
conteudo:  Textos parciais · Imagens em placeholder · Logo disponível (LogoDark.svg + LogoLight.svg)

---

## DIRECAO CRIATIVA APROVADA
tom:                   Autoridade editorial — confiança sem arrogância, precisão de quem pensa em sistemas antes de pensar em pixels
emocao-entrada:        Imponência controlada — nos primeiros 3 segundos o visitante sente que está diante de alguém que constrói com intenção
elemento-inesquecivel: Ritmo visual de blocos Vermelho → Claro → Escuro → Claro → Escuro → Vermelho — como capítulos de livro editorial premium
paleta-bg-vermelho:    #FB0400 — Brand Red (Hero + Banner CTA)
paleta-bg-escuro:      #0A0A0A — Neutral 900 (Onde já atuei + Sobre + Footer)
paleta-bg-claro:       #F9F7F4 — Secondary 100 (Portfolio + Como trabalho)
paleta-primaria:       #FB0400 — Brand Red
paleta-acento:         #E0D8CE — Secondary 500, warm cream
paleta-neutros:        #E8E8E8 → #585858 → #1E1E1E
font-display:          Big Shoulders Display · sans-serif geométrico · impactante, evoca construção e sistemas
font-body:             DM Sans · sans-serif humanista · legível em UI e parágrafos longos
font-origem:           Google Fonts
atmosfera:             Zero ruído. Sem texturas, sem gradients. Tensão via alternância cromática + tipografia em escala grande.
motion:                Clip-path reveal (bottom→top), cascade +80ms/item, corte abrupto entre seções, cubic-bezier(0.16,1,0.3,1), 500ms base
composicao:            Numeração de seções visível (01, 02…), tipografia vazando para fora da margem na hero, grid assimétrico

---

## ALTERNANCIA DE SECOES
  1. Hero            → #FB0400 Vermelho
  2. Portfolio       → #F9F7F4 Claro
  3. Onde já atuei   → #0A0A0A Escuro
  4. Como trabalho   → #F9F7F4 Claro
  5. Sobre/Manifesto → #0A0A0A Escuro
  6. Banner CTA      → #FB0400 Vermelho
  7. Footer          → #0A0A0A Escuro

---

## SECOES

1. Hero [#FB0400]
   - Background vermelho puro com explosão de partículas em canvas (tsParticles)
   - Partículas em #E0D8CE e #FFFFFF, burst radial no load + reação sutil ao mouse
   - Título em Big Shoulders Display gigante (~80% da largura)
   - Proposta de valor em 2 linhas (DM Sans)
   - CTA primário: "Entrar em contato"
   - Ghost button: "Ver LinkedIn" com ícone externo
   - Logo: LogoLight.svg

2. Portfolio [#F9F7F4]
   - Numeração "02 — WORK"
   - Grid de cases (2 colunas desktop, 1 mobile)
   - Cada card: imagem (aspect-ratio fixo) + badge de categoria + título + descrição 2 linhas + botão "Ver mais" com ícone ArrowRight
   - Hover: overlay sutil com elevação do card
   - Logo: LogoDark.svg

3. Onde já atuei [#0A0A0A]
   - Numeração "03 — AREAS"
   - Layout horizontal editorial, sem logotipos
   - Cada item: iconografia temática + título da área + texto descritivo (máx. 5 linhas) + botão "Ver mais" com ícone ArrowRight
   - Logo: LogoLight.svg

4. Como trabalho [#F9F7F4]
   - Numeração "04 — PROCESS"
   - Steps numerados, layout editorial em colunas
   - Logo: LogoDark.svg

5. Sobre/Manifesto [#0A0A0A]
   - Numeração "05 — ABOUT"
   - Meet the founder — foto + texto manifesto editorial
   - Logo: LogoLight.svg

6. Banner CTA [#FB0400]
   - 100vh — tela inteira
   - Big Shoulders Display dominante, CTA centralizado
   - Logo: LogoLight.svg

7. Footer [#0A0A0A]
   - Logo, links de navegação, créditos
   - Logo: LogoLight.svg

---

## MOTION

### Loading / Entrada
- Preloader: bloco TF escala 0.4→1 no centro, fundo #0A0A0A, ~1.2s out-expo
- Exit: clip-path wipe para cima revelando a Hero

### Transições entre Seções
- Clip-path reveal bottom→top, cascade +80ms/item
- Corte abrupto entre fundos — sem crossfade
- Threshold: 15% visível | Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Duração base: 500ms | Secundários: 350ms

---

## STACK TECNICA
framework:     Next.js App Router
linguagem:     TypeScript strict
estilos:       CSS Modules + globals.css tokens
motion:        CSS animations + Motion library
ui-primitivos: shadcn/ui customizado via tokens
particles:     tsParticles

---

## TOKENS APROVADOS
font-display:          'Big Shoulders Display', sans-serif
font-body:             'DM Sans', sans-serif
color-bg:              #0A0A0A
color-surface:         #1E1E1E
color-primary:         #FB0400
color-secondary:       #E0D8CE
color-accent:          #E0D8CE
color-section-red:     #FB0400
color-section-dark:    #0A0A0A
color-section-light:   #F9F7F4
color-text-on-dark:    #F9F7F4
color-text-on-light:   #0A0A0A
color-text-on-red:     #FFFFFF
color-muted-on-dark:   #989898
color-muted-on-light:  #585858
color-neutral-100:     #E8E8E8
color-neutral-400:     #989898
color-neutral-600:     #585858
color-neutral-800:     #1E1E1E
color-neutral-900:     #0A0A0A
radius-sm:             2px
radius-md:             6px
radius-lg:             12px
shadow-sm:             0 1px 2px rgba(0,0,0,0.08)
shadow-md:             0 4px 16px rgba(0,0,0,0.12)
shadow-lg:             0 8px 32px rgba(0,0,0,0.18)

---

## SHADCN
comando: npx shadcn@latest add badge sheet tooltip separator aspect-ratio
componentes:
  - badge:        tags de categoria nos cards de portfolio
  - sheet:        menu mobile lateral
  - tooltip:      microinfo em ícones da seção Onde já atuei
  - separator:    linha divisória com label de numeração entre seções
  - aspect-ratio: thumbnails de projetos no grid de portfolio

---

## MAPA DE COMPONENTES
| componente       | tipo   | base shadcn          | prioridade | status          |
|------------------|--------|----------------------|------------|-----------------|
| Header           | Client | —                    | 1          | ✅ concluído    |
| Navigation       | Client | Sheet (mobile)       | 1          | ✅ concluído    |
| Footer           | Server | —                    | 1          | ✅ concluído    |
| Preloader        | Client | —                    | 1          | ✅ concluído    |
| SectionReveal    | Client | —                    | 1          | ✅ concluído    |
| HeroSection      | Client | —                    | 1          | ✅ concluído    |
| ParticleCanvas   | Client | —                    | 1          | ✅ concluído    |
| CTAButton        | Client | —                    | 1          | ✅ concluído    |
| GhostButton      | Client | —                    | 1          | ✅ concluído    |
| BannerSection    | Server | —                    | 1          | ✅ concluído    |
| PortfolioSection | Server | —                    | 2          | ✅ concluído    |
| WorkCard         | Server | —                    | 2          | ✅ concluído    |
| AreasSection     | Server | —                    | 2          | ✅ concluído    |
| AreaCard         | Server | —                    | 2          | ✅ concluído    |
| ProcessSection   | Server | —                    | 2          | ✅ concluído    |
| ProcessStep      | Server | —                    | 3          | ✅ concluído    |
| AboutSection     | Server | —                    | 2          | ✅ concluído    |

---

## ASSETS DE MARCA
- LogoDark.svg  → seções CLARAS (#F9F7F4)
- LogoLight.svg → seções ESCURAS (#0A0A0A) e VERMELHAS (#FB0400)
- Localização:  /Desktop/Brand Portifólio/

---

## ARQUIVOS CRIADOS
- /src/styles/globals.css
- /src/config/analytics.config.ts
- /src/config/lgpd.config.ts
- /src/components/ui/CTAButton/CTAButton.tsx + .module.css
- /src/components/ui/GhostButton/GhostButton.tsx + .module.css
- /src/components/ui/SectionReveal/SectionReveal.tsx + .module.css
- /src/components/ui/ParticleCanvas/ParticleCanvas.tsx + .module.css
- /src/components/layout/Preloader/Preloader.tsx + .module.css
- /src/components/layout/Navigation/Navigation.tsx + .module.css
- /src/components/layout/Header/Header.tsx + .module.css
- /src/components/layout/Footer/Footer.tsx + .module.css
- /src/components/sections/HeroSection/HeroSection.tsx + .module.css
- /src/components/sections/BannerSection/BannerSection.tsx + .module.css
- /src/components/ui/WorkCard/WorkCard.tsx + .module.css
- /src/components/ui/AreaCard/AreaCard.tsx + .module.css
- /src/components/ui/ProcessStep/ProcessStep.tsx + .module.css
- /src/components/sections/PortfolioSection/PortfolioSection.tsx + .module.css
- /src/components/sections/AreasSection/AreasSection.tsx + .module.css
- /src/components/sections/ProcessSection/ProcessSection.tsx + .module.css
- /src/components/sections/AboutSection/AboutSection.tsx + .module.css
- /src/types/index.ts
- /src/content/works.ts
- /src/content/areas.ts
- /src/content/process.ts

## DEPENDENCIAS A INSTALAR
- npm install lucide-react
- npm install @tsparticles/react @tsparticles/slim
- npx shadcn@latest add sheet badge tooltip separator aspect-ratio

## SETUP PENDENTE
- Copiar /Desktop/Brand Portifólio/LogoDark.svg  → /public/brand/LogoDark.svg
- Copiar /Desktop/Brand Portifólio/LogoLight.svg → /public/brand/LogoLight.svg

---

## LOG
- 2026-03-11 · spec-v1.md criado · Etapa 1 concluída
- 2026-03-11 · spec-v2.md criado · Etapa 2 concluída
- 2026-03-11 · 10 componentes prioridade 1 concluídos · Etapa 3 parcial
- 2026-03-11 · 7 componentes prioridade 2 e 3 concluídos · Etapa 3 completa · 17/17 componentes ✅

---

## PROXIMA ETAPA
Abrir nova sessão e executar: cat .claude/03-etapa3-componentes.md
