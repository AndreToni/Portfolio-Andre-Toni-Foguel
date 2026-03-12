# Project Spec — Portfólio TF · Toni Fogue
> spec-v1.md · Etapa 1 concluída · gerenciado pelo Claude Code

---

## META
projeto:    Portfólio TF · Toni Fogue
tipo:       Portfólio
versao:     1.0
status:     direcao-criativa-aprovada
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
elemento-inesquecivel: Ritmo visual de blocos Vermelho → Claro → Escuro → Claro → Escuro → Vermelho — como capítulos de livro editorial premium, com Big Shoulders Display pesando sobre o layout
paleta-bg-vermelho:    #FB0400 — Brand Red (Hero + Banner CTA)
paleta-bg-escuro:      #0A0A0A — Neutral 900 (Onde já atuei + Sobre + Footer)
paleta-bg-claro:       #F9F7F4 — Secondary 100 (Portfolio + Como trabalho)
paleta-primaria:       #FB0400 — Brand Red
paleta-acento:         #E0D8CE — Secondary 500, warm cream
paleta-neutros:        #E8E8E8 → #585858 → #1E1E1E
font-display:          Big Shoulders Display · sans-serif geométrico · impactante, evoca construção e sistemas, diferencia de portfólios genéricos
font-body:             DM Sans · sans-serif humanista · legível em UI e parágrafos longos sem perder personalidade
font-origem:           Google Fonts
atmosfera:             Zero ruído. Sem texturas, sem gradients complexos. Tensão visual via alternância cromática + tipografia em escala grande. Grid rígido com quebras calculadas.
motion:                Clip-path reveal (bottom→top), cascade por linha (+80ms/item), corte abrupto entre seções, easing cubic-bezier(0.16,1,0.3,1), 500ms base
composicao:            Numeração de seções visível (01, 02…), tipografia vazando para fora da margem na hero, grid assimétrico — pesado à esquerda no texto, aberto à direita

---

## ALTERNANCIA DE SECOES
Regra: toda seção deve ser exatamente em uma das três cores de fundo.
Sem seções em cinza médio ou intermediário.

  1. Hero           → #FB0400 Vermelho
  2. Portfolio      → #F9F7F4 Claro
  3. Onde já atuei  → #0A0A0A Escuro
  4. Como trabalho  → #F9F7F4 Claro
  5. Sobre/Manifesto→ #0A0A0A Escuro
  6. Banner CTA     → #FB0400 Vermelho
  7. Footer         → #0A0A0A Escuro

O vermelho atua como âncora narrativa: abre e fecha o site.

---

## SECOES

1. Hero [#FB0400]
   - Background vermelho puro com explosão de partículas em canvas (tsParticles)
   - Partículas em #E0D8CE e #FFFFFF, burst radial no load + reação sutil ao mouse
   - Partículas em z-index abaixo do copy — decoração, não competição
   - Título em Big Shoulders Display gigante (~80% da largura)
   - Proposta de valor em 2 linhas (DM Sans)
   - CTA primário: "Entrar em contato"
   - Ghost button: "Ver LinkedIn" com ícone externo
   - Texto e botões em branco/cream sobre vermelho
   - Logo: LogoLight.svg (cream sobre vermelho)

2. Portfolio [#F9F7F4]
   - Título de seção com numeração "02 — WORK"
   - Grid de cases (2 colunas desktop, 1 mobile)
   - Cada card: imagem (aspect-ratio fixo) + badge de categoria + título + descrição 2 linhas + botão "Ver mais" com ícone ArrowRight
   - Hover: overlay sutil com elevação do card
   - Logo: LogoDark.svg (vermelho sobre claro)

3. Onde já atuei [#0A0A0A]
   - Título de seção com numeração "03 — AREAS"
   - Layout horizontal editorial, sem logotipos de empresas
   - Cada item: iconografia temática + título da área + texto descritivo (máx. 5 linhas) + botão "Ver mais" com ícone ArrowRight
   - Identidade puramente tipográfica e icônica
   - Logo: LogoLight.svg visível no header sticky

4. Como trabalho [#F9F7F4]
   - Título de seção com numeração "04 — PROCESS"
   - Steps numerados descrevendo o processo de trabalho
   - Layout editorial em colunas
   - Logo: LogoDark.svg

5. Sobre/Manifesto [#0A0A0A]
   - Título de seção com numeração "05 — ABOUT"
   - Estilo "Meet the founder" — foto + texto manifesto editorial
   - Copy com voz de marca pessoal: autoridade + humanidade
   - Logo: LogoLight.svg

6. Banner CTA [#FB0400]
   - 100vh — tela inteira
   - Ruptura cromática total, convite direto ao contato
   - Tipografia Big Shoulders Display dominante sobre vermelho
   - CTA centralizado
   - Logo: LogoLight.svg (cream sobre vermelho)

7. Footer [#0A0A0A]
   - Logo, links de navegação, créditos
   - Tipografia leve, espaço editorial
   - Logo: LogoLight.svg

---

## MOTION

### Loading / Entrada
- Preloader: bloco TF (apenas o quadrado, sem texto) escala 0.4→1 no centro
- Fundo #0A0A0A durante preloader
- Duração: ~1.2s, easing out-expo
- Exit: clip-path wipe para cima revelando a Hero por baixo
- Referência: wearestokt.com — marca antes de conteúdo

### Transições entre Seções (scroll)
- Clip-path reveal: bottom→top no primeiro elemento (título)
- Cascade nos elementos filhos: delay +80ms por item
- Corte abrupto entre fundos escuro↔claro — sem crossfade
- O corte limpo reforça o ritmo editorial de "virar página"
- Threshold de trigger: 15% do elemento visível no viewport
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — out-expo
- Duração base: 500ms | Elementos secundários: 350ms

---

## SHADCN IDENTIFICADO
- Sheet:        Menu mobile lateral — navegação sem overlay opaco
- Badge:        Tags de categoria nos cards de portfolio
- Separator:    Linha divisória entre seções com label de numeração
- Tooltip:      Microinfo em ícones da seção "Onde já atuei"
- AspectRatio:  Thumbnails de projetos no grid de portfolio

---

## ASSETS DE MARCA
- LogoDark.svg  → usar em seções CLARAS (#F9F7F4)
- LogoLight.svg → usar em seções ESCURAS (#0A0A0A) e VERMELHAS (#FB0400)
- Localização:  /Desktop/Brand Portifólio/

---

## LOG
- 2026-03-11 · spec-v1.md criado · Etapa 1 concluída

---

## PROXIMA ETAPA
Abrir nova sessão e executar: cat .claude/02-etapa2-arquitetura-tokens.md
