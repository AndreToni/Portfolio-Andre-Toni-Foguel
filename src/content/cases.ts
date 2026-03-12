/**
 * cases.ts — fonte única de verdade para todas as páginas de case.
 * Para mudar o conteúdo de um case, basta editar o objeto correspondente.
 */

export interface CaseSectionContent {
  title: string
  paragraphs: string[]
  items?: string[]
  images?: string[] // caminhos das imagens de placeholder
}

export interface CaseNumber {
  value: string
  label: string
  detail?: string
}

export interface CaseData {
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  company: string
  role: string
  kpi: string
  duration?: string   // usado quando segment/platform não existem
  segment?: string    // ex: "Automação industrial"
  platform?: string   // ex: "Web · Tablet"
  tags: string[]
  coverImage: string
  navSections: { id: string; label: string }[]
  context: CaseSectionContent
  problem: CaseSectionContent
  restrictions: CaseSectionContent
  decisionProcess: CaseSectionContent
  errorsAdjustments: CaseSectionContent
  solution: CaseSectionContent
  deliverables: CaseSectionContent
  impact: CaseSectionContent
  learnings: CaseSectionContent
  numbers: CaseNumber[]
}

const NAV_SECTIONS = [
  { id: 'contexto', label: 'Contexto' },
  { id: 'problema', label: 'Problema' },
  { id: 'restricoes', label: 'Restrições' },
  { id: 'processo-de-decisao', label: 'Processo de decisão' },
  { id: 'erros-e-ajustes', label: 'Erros e ajustes' },
  { id: 'solucao', label: 'Solução' },
  { id: 'principais-entregas', label: 'Principais entregas' },
  { id: 'impacto', label: 'Impacto' },
  { id: 'aprendizados', label: 'Aprendizados' },
]

export const CASES: CaseData[] = [
  /* ─────────────────────────────────────
     Case 01 — Balq · Automação de pátio
  ───────────────────────────────────── */
  {
    slug: 'automacao-patio',
    title: 'Automação de pátio e gestão de máquinas com múltiplos SKUs',
    subtitle:
      'Refatoração de produto para viabilizar pitch estratégico e fechar contrato enterprise.',
    category: 'AUTOMAÇÃO INDUSTRIAL · B2B',
    year: '2024',
    company: 'Balq',
    role: 'Product Designer',
    segment: 'Automação industrial',
    platform: 'Web · Tablet',
    kpi: 'O contrato com a Braskem foi fechado após o pitch, viabilizado diretamente pela solução construída.',
    tags: ['UX Research', 'Design System', 'Prototipação', 'B2B SaaS', 'Discovery'],
    coverImage: '/works/Banner-1.png',
    navSections: NAV_SECTIONS,
    context: {
      title: 'Contexto',
      paragraphs: [
        'A Balq é um SaaS voltado à automação e gestão de pátio industrial, utilizado por fabricantes de peças plásticas, de itens de alto volume a componentes automotivos.',
        'Com cerca de um ano de mercado, o produto cresceu de forma acelerada e orientada a demandas pontuais, o que gerou inconsistências estruturais na lógica do sistema e na experiência do usuário.',
      ],
    },
    problem: {
      title: 'Problema',
      paragraphs: [
        'Durante uma negociação com a Braskem, surgiu a necessidade de suportar múltiplos SKUs sendo produzidos simultaneamente em uma mesma máquina. O sistema não estava preparado para esse cenário.',
        'Sem essa capacidade estrutural, o pitch estratégico não poderia acontecer, colocando em risco a entrada em um cliente enterprise. Sem essa funcionalidade estrutural, o pitch para a Braskem não aconteceria.',
      ],
    },
    restrictions: {
      title: 'Restrições',
      paragraphs: [
        'O projeto possuía restrições severas que impactaram diretamente decisões de design, validação e priorização:',
      ],
      items: [
        'Tempo: duas sprints de 15 dias para entregar a feature funcional.',
        'Usuários: operadores de fábrica com baixa familiaridade digital e, em muitos casos, baixa alfabetização.',
        'Ambiente de teste: testes de usabilidade precisariam acontecer no pátio da fábrica, em ambiente ruidoso, com interrupções constantes e sem possibilidade de gravação.',
        'Cultura organizacional: parte dos operadores enxergava o sistema como uma ferramenta de vigilância, o que gerava resistência ao uso.',
      ],
    },
    decisionProcess: {
      title: 'Processo de decisão',
      paragraphs: [
        'Nos primeiros dias, mapeamos as jornadas das duas personas centrais: o operador, responsável por configurar e associar SKUs às máquinas, e o gestor, que precisava acompanhar a produção em tempo real por meio de um grid consolidado.',
        'A decisão foi priorizar os fluxos críticos para viabilizar o pitch, focando no que sustentava a nova lógica de múltiplos SKUs.',
      ],
    },
    errorsAdjustments: {
      title: 'Erros e ajustes',
      paragraphs: [
        'Inicialmente, subestimamos o impacto sistêmico da mudança. A introdução de múltiplos SKUs exigia ajustes em status de máquina, relatórios, alertas e publicação de problemas.',
        'Como o prazo era limitado, reorganizamos o roadmap, priorizando o essencial para o pitch e deixando refinamentos e microinterações para sprints posteriores.',
      ],
    },
    solution: {
      title: 'Solução',
      paragraphs: [
        'A solução envolveu uma refatoração estrutural do produto para suportar múltiplos SKUs por máquina sem comprometer a clareza operacional. Priorizamos simplicidade e redução de carga cognitiva, considerando o contexto industrial e o perfil dos operadores.',
        'A validação ocorreu por meio de testes de usabilidade de guerrilha no ambiente real de trabalho. Estruturei um framework de testes documentado no Notion, que passou a ser utilizado como padrão pela empresa — antes disso, nenhum teste era conduzido com usuários reais.',
      ],
      images: ['/works/Telas-1.png'],
    },
    deliverables: {
      title: 'Principais entregas',
      paragraphs: [],
      items: [
        'Redesenho do fluxo de criação e gestão de SKUs',
        'Associação de múltiplos SKUs a uma mesma máquina',
        'Nova visualização de status e estatísticas de produção',
        'Ajustes de copy, iconografia e feedback visual após testes em campo',
      ],
    },
    impact: {
      title: 'Impacto',
      paragraphs: [
        'Garantimos um nível de usabilidade adequado mesmo em um contexto industrial complexo.',
        'Introduzimos uma cultura de testes com usuários na empresa, que passou a ser aplicada em evoluções futuras do produto.',
      ],
    },
    learnings: {
      title: 'Aprendizados',
      paragraphs: [],
      items: [
        'Features de alta complexidade exigem mapeamento sistêmico mais profundo, mesmo sob pressão de tempo.',
        'O uso de wireframes de baixa fidelidade antes da UI final se mostrou essencial para validar decisões rapidamente.',
        'Microinterações ignoradas no curto prazo sempre retornam como dívida de UX — hoje esse aprendizado orienta melhor o planejamento de roadmap.',
      ]
    },
    numbers: [
      { value: 'Braskem', label: 'cliente enterprise', detail: 'fechado após o redesenho' },
      { value: '2', label: 'sprints', detail: 'de 15 dias para a feature funcional' },
      { value: '2', label: 'perfis', detail: 'personas mapeadas: operador e gestor' },
    ],
  },

  /* ─────────────────────────────────────
     Case 02 — Angeplus / Prever · Planos funerários
  ───────────────────────────────────── */
  {
    slug: 'planosfunerarios-mobile',
    title: 'Experiência digital para planos funerários multirregionais',
    subtitle:
      'Estruturação de hub de acesso considerando regras por plano, estado e ano, com foco em uso mobile.',
    category: 'PLANOS FUNERÁRIOS · MOBILE',
    year: '2022',
    company: 'Angeplus / Prever',
    role: 'Product Designer',
    segment: 'Planos funerários',
    platform: 'Mobile · Web App',
    kpi: 'Aproximadamente 90% de adesão ao ambiente digital por parte dos assinantes.',
    tags: ['UX Research', 'Mobile', 'Produto Regulado', 'Arquitetura de Informação', 'Discovery'],
    coverImage: '/works/Banner-2.png',
    navSections: NAV_SECTIONS,
    context: {
      title: 'Contexto',
      paragraphs: [
        'A Ferreri atuava como software house no desenvolvimento do Angeplus, produto digital criado para a Prever, uma das maiores empresas do setor funerário do sul do Brasil. No período pós-pandemia, a Prever iniciou uma iniciativa estratégica para digitalizar todas as jornadas do cliente, facilitando o acesso a informações e benefícios relacionados aos planos funerários.',
      ],
    },
    problem: {
      title: 'Problema',
      paragraphs: [
        'O desafio central estava na complexidade estrutural do produto, que resultava em fluxos fragmentados, dificuldade de navegação e alto risco de confusão para o usuário final:',
      ],
      items: [
        'Múltiplas frentes de serviço (funerário, saúde, pets, planos, clube de benefícios)',
        'Regras de acesso variáveis conforme plano contratado',
        'Variação de planos por estado (PR, SC e RS)',
        'Mudanças anuais de planos, gerando experiências diferentes para assinantes antigos e novos',
      ],
    },
    restrictions: {
      title: 'Restrições',
      paragraphs: [
        'O projeto possuía restrições relevantes que moldaram toda a estratégia de produto e experiência:',
      ],
      items: [
        'Impossibilidade de testes diretos com usuários, por decisão da Prever.',
        'Termos de uso e políticas de privacidade diferentes por estado, exigindo cuidado jurídico.',
        'Comportamento de uso: cerca de 90% dos acessos eram via celular, o que direcionou decisões de plataforma.',
        'Limitação técnica: ausência de time mobile nativo, impossibilitando o desenvolvimento de apps iOS e Android do zero.',
        'Restrições legislativas que impediam a unificação total das frentes em um único branding.',
        'Perfil do público (majoritariamente entre 35 e 50 anos), exigindo soluções simples e de fácil adoção.',
        'Planos versionados por ano, gerando regras de acesso diferentes para usuários de anos distintos.',
      ],
    },
    decisionProcess: {
      title: 'Processo de decisão',
      paragraphs: [
        'Diante das limitações jurídicas, avaliamos duas alternativas: unificar todas as frentes do produto ou criar um hub central com controle de acesso por plano, estado e ano.',
        'Optamos pelo hub por ser mais viável no curto prazo, evitar conflitos legais e permitir escalabilidade. Como a maioria acessava via celular, decidimos lançar como Web App nas stores.',
      ],
    },
    errorsAdjustments: {
      title: 'Erros e ajustes',
      paragraphs: [
        'A decisão pelo hub gerou estranhamento inicial, exigindo ajustes na comunicação e na organização dos fluxos.',
        'Também subestimamos a complexidade de publicação nas stores sem time mobile. Refinamos a estrutura de acesso e adaptamos o Web App para garantir usabilidade consistente no ambiente mobile.',
      ],
    },
    solution: {
      title: 'Solução',
      paragraphs: [
        'A solução consistiu na estruturação de um hub central de acesso, capaz de controlar permissões por plano, estado e ano, organizar as diferentes frentes do produto de forma clara e reduzir a complexidade percebida pelo usuário final.',
        'O foco não foi apenas visual, mas estrutural e estratégico, garantindo consistência mesmo com regras complexas por trás.',
      ],
      images: ['/works/Telas-2.avif'],
    },
    deliverables: {
      title: 'Principais entregas',
      paragraphs: [],
      items: [
        'Mapeamento das jornadas considerando as regras específicas de cada plano',
        'Prototipação focada em mobile, com ajustes mínimos para desktop',
        'Criação de interfaces claras e hierarquizadas, priorizando leitura e simplicidade',
        'Desenvolvimento de assets visuais (ícones, banners e identidade do app)',
        'Preparação e suporte para publicação do Web App nas lojas (App Store e Play Store)',
      ],
    },
    impact: {
      title: 'Impacto',
      paragraphs: [
        'Alto nível de satisfação do cliente e dos usuários, especialmente no uso mobile.',
        'Feedback positivo contínuo nas stores durante o período do projeto. Consolidação do Web App como principal ponto de contato digital da Prever com seus clientes.',
      ],
    },
    learnings: {
      title: 'Aprendizados',
      paragraphs: [],
      items: [
        'A padronização de planos se mostrou essencial para a sustentabilidade do produto a longo prazo.',
        'A ausência de um time mobile nativo gera limitações importantes de escala e manutenção.',
        'Projetos com alta complexidade regulatória exigem decisões de UX fortemente alinhadas a jurídico e negócio.',
        'Mobile não era apenas um canal, mas o principal contexto de uso do produto.',
      ]
    },
    numbers: [
      { value: '90%', label: 'adesão digital', detail: 'pelos assinantes ao ambiente digital' },
      { value: '3', label: 'estados', detail: 'atendidos: PR, SC e RS' },
      { value: 'Web App', label: 'nas stores', detail: 'publicado na App Store e Play Store' },
    ],
  },

  /* ─────────────────────────────────────
     Case 03 — Ferreri · Design System
  ───────────────────────────────────── */
  {
    slug: 'design-system-plataformas',
    title: 'Criação de Design System para múltiplos produtos digitais',
    subtitle:
      'Padronização de tokens, componentes e governança para reduzir retrabalho e acelerar entregas.',
    category: 'ESCALA · EFICIÊNCIA',
    year: '2022',
    company: 'Ferreri',
    role: 'Product Design',
    segment: 'Design Ops',
    platform: 'Figma · Web · Mobile',
    kpi: 'Redução de mais de 50% no tempo de produção, revisão e QA de novas telas.',
    tags: ['Design System', 'Tokens', 'Figma', 'Governança', 'Handoff técnico'],
    coverImage: '/works/Banner-3.png',
    navSections: NAV_SECTIONS,
    context: {
      title: 'Contexto',
      paragraphs: [
        'A Ferreri é uma software house que atua no desenvolvimento de diversos produtos digitais, com naturezas, contextos e regras de negócio diferentes.',
        'Com o crescimento do portfólio de produtos, surgiu um problema estrutural recorrente: a construção de interfaces não era escalável. Componentes eram constantemente recriados com pequenas variações visuais, apesar de resolverem os mesmos problemas funcionais.',
      ],
    },
    problem: {
      title: 'Problema',
      paragraphs: [
        'Ficou claro que, sem uma base sólida, o custo de manutenção e evolução dos produtos continuaria crescendo. Os principais sintomas eram:',
      ],
      items: [
        'Redundância de componentes',
        'Aumento de retrabalho',
        'Componentes duplicados com nomes diferentes em cada produto',
        'Inconsistência visual',
        'Sobrecarga para os times de design e desenvolvimento',
      ],
    },
    restrictions: {
      title: 'Restrições',
      paragraphs: [
        'O projeto possuía algumas particularidades importantes que direcionaram o projeto para uma abordagem incremental e colaborativa:',
      ],
      items: [
        'Projeto interno, sem restrições rígidas de prazo, permitindo uma evolução mais orgânica.',
        'Necessidade de criar componentes altamente reutilizáveis, mesmo que isso reduzisse a "personalidade" visual de alguns produtos.',
        'Forte dependência de alinhamento técnico, já que o Design System deveria ser facilmente traduzido para código.',
        'Escolha consciente do Figma Dev como ferramenta principal de handoff, visando reduzir fricção entre design e desenvolvimento.',
      ],
    },
    decisionProcess: {
      title: 'Processo de decisão',
      paragraphs: [
        'Por ser a primeira experiência do time com Design System, adotamos evolução incremental baseada em uso real. Revisamos os design tokens conforme o time amadurecia.',
        'Após avaliar ferramentas externas, centralizamos tudo no Figma para garantir adoção, eficiência e integração com desenvolvimento.',
      ],
    },
    errorsAdjustments: {
      title: 'Erros e ajustes',
      paragraphs: [
        'As primeiras versões estavam complexas demais e pouco práticas. A documentação dificultava aplicação consistente.',
        'Simplificamos a estrutura de tokens e reduzimos camadas desnecessárias, tornando o sistema mais utilizável, diminuindo fricção entre times e aumentando sustentabilidade.',
      ],
    },
    solution: {
      title: 'Solução',
      paragraphs: [
        'O objetivo da solução era criar um Design System modular, funcionando como um "lego", capaz de reduzir significativamente o tempo de produção de design e código.',
        'Para evitar a criação de componentes desnecessários, instituiu-se um processo de decisão: componentes fora do padrão eram discutidos em conjunto com a liderança de design, avaliando se a criação de um novo componente era realmente necessária ou se geraria retrabalho. Esse processo se tornou um ritual recorrente no time.',
      ],
      images: ['/works/Telas-3.png'],
    },
    deliverables: {
      title: 'Principais entregas',
      paragraphs: [
        'Nos primeiros quatro meses, foi construída a base do sistema. Nos meses seguintes, aplicação dos tokens em telas existentes e padronização de componentes:',
      ],
      items: [
        'Definição de design tokens (cores, tipografia, espaçamentos)',
        'Organização da arquitetura do Design System',
        'Separação clara entre arquivo de tokens e arquivo de componentes',
        'Aplicação dos tokens em telas existentes',
        'Padronização de componentes com documentação detalhada por tela',
        'Documentação indicando componentes utilizados, espaçamentos e estrutura de layout',
      ],
    },
    impact: {
      title: 'Impacto',
      paragraphs: [
        'Os impactos foram claros e mensuráveis no dia a dia do time: diminuição significativa de retrabalho entre design e desenvolvimento.',
        'Mudança no foco das discussões — menos debate sobre telas, mais conversas estratégicas sobre produto. O ganho de eficiência permitiu, inclusive, a redução do time de design, mantendo apenas um designer responsável pela evolução do sistema.',
      ]
    },
    learnings: {
      title: 'Aprendizados',
      paragraphs: [

      ],
      items: [
        'Design Systems são produtos vivos e exigem evolução contínua, não soluções fechadas.',
        'A documentação de tokens precisa ser simples e didática, especialmente para novos membros do time.',
        'A criação de um processo de onboarding é essencial para garantir a continuidade do sistema.',
        'Alinhamento constante com times técnicos é um dos principais fatores de sucesso em Design Systems.',
      ],
    },
    numbers: [
      { value: '+50%', label: 'redução no tempo', detail: 'de produção, revisão e QA de novas telas' },
      { value: '100+', label: 'componentes', detail: 'documentados e publicados no Figma' },
      { value: '1', label: 'designer', detail: 'mantendo o sistema após ganho de eficiência' },
    ],
  },

  /* ─────────────────────────────────────
     Case 04 — IPAM · Dados em campo
  ───────────────────────────────────── */
  {
    slug: 'sistemas-institucionais-campo',
    title: 'Reestruturação de coleta e gestão de dados em contexto de infraestrutura limitada',
    subtitle:
      'Organização da arquitetura da informação e fluxos para apoiar tomada de decisão institucional.',
    category: 'SISTEMA INSTITUCIONAL · CAMPO',
    year: '2023',
    company: 'IPAM Amazônia',
    role: 'Product Designer',
    segment: 'Pesquisa ambiental',
    platform: 'Web · Mobile',
    kpi: 'Mesmo sem métricas quantitativas formais, o feedback qualitativo indicou ganho real em organização e confiabilidade da informação.',
    tags: ['UX Research', 'Campo', 'Offline First', 'Arquitetura de Informação', 'Android'],
    coverImage: '/works/Banner-4.png',
    navSections: NAV_SECTIONS,
    context: {
      title: 'Contexto',
      paragraphs: [
        'O IPAM Amazônia atua com pesquisa e monitoramento ambiental, lidando com grandes volumes de dados sobre produção familiar, indicadores sociais e gestão de unidades de conservação. Essas informações sustentam decisões estratégicas em contextos institucionais complexos.',
        'Antes do projeto, a coleta era feita majoritariamente via Google Forms. O diagnóstico revelou que o problema não era apenas coletar dados, mas estruturar um sistema confiável de gestão e visualização para diferentes perfis internos.',
      ],
    },
    problem: {
      title: 'Problema',
      paragraphs: [
        'O contrato previa apenas um app de coleta, mas o diagnóstico mostrou a necessidade de um sistema completo de gestão e análise. Os principais problemas identificados eram:',
      ],
      items: [
        'Falta de controle de autoria: formulários permitiam múltiplas respostas com o mesmo e-mail, sem controle real de quem enviava os dados.',
        'Dados inconsistentes: informações divergentes para o mesmo contexto dificultavam validação e comprometiam análises.',
        'Consolidação manual e fragmentada: ausência de estrutura central tornava o processo lento e pouco escalável.',
        'Sem visão estratégica: faltava painel de gestão para leitura consolidada e apoio à tomada de decisão.',
      ],
    },
    restrictions: {
      title: 'Restrições',
      paragraphs: [
        'O projeto apresentava restrições importantes que impactaram diretamente as decisões de UX, exigindo priorização estratégica e clareza de escopo:',
      ],
      items: [
        'Contexto institucional, com processos já estabelecidos e baixa flexibilidade para mudanças radicais.',
        'Múltiplos stakeholders, incluindo equipes técnicas e gestores com expectativas distintas.',
        'Perfis de usuários com diferentes níveis de escolaridade, exigindo adaptação de linguagem e tom.',
        'Limitação de infraestrutura nas unidades de conservação (acesso precário a internet e dispositivos).',
        'Alta densidade de informação, demandando arquitetura clara e hierarquia rigorosa.',
        'Prazo definido em contrato, com escopo inicialmente limitado à criação do app.',
      ],
    },
    decisionProcess: {
      title: 'Processo de decisão',
      paragraphs: [
        'Antes de propor qualquer solução, mergulhei no fluxo real de coleta e uso dos dados (não apenas no modelo ideal documentado). Mapeei jornadas de campo e gestão, revisei a taxonomia existente e validei hipóteses com stakeholders.',
        'Durante essa imersão, ficou evidente que um app de coleta isolado não resolveria o problema estrutural. A decisão estratégica foi ampliar o escopo e incluir um painel de gestão para consolidar e dar sentido às informações.',
      ],
    },
    errorsAdjustments: {
      title: 'Erros e ajustes',
      paragraphs: [
        'Nas primeiras versões, algumas telas tentavam atender todos os perfis ao mesmo tempo, concentrando informação demais e aumentando a carga cognitiva. Isso tornava a navegação confusa.',
        'Ajustamos a abordagem segmentando fluxos por tipo de usuário e reorganizando a arquitetura da informação. O foco passou a ser clareza e priorização, não volume de dados.',
      ],
    },
    solution: {
      title: 'Solução',
      paragraphs: [
        'A solução consistiu na criação de um ecossistema digital composto por um aplicativo de coleta de dados, pensado para contexto de campo e limitações de infraestrutura, e um painel de gestão para usuários internos, permitindo visualização consolidada, organização e análise estratégica das informações.',
        'O foco não foi apenas substituir formulários, mas estruturar um sistema confiável de coleta e gestão institucional de dados.',
      ],
      images: ['/works/Telas-4.png'],
    },
    deliverables: {
      title: 'Principais entregas',
      paragraphs: [],
      items: [
        'Reestruturação completa da arquitetura da informação',
        'Definição de fluxos segmentados por perfil de usuário',
        'Criação de fluxogramas e protótipos interativos',
        'Organização de taxonomia e hierarquia de dados',
        'Interfaces focadas em clareza e eficiência',
      ],
    },
    impact: {
      title: 'Impacto',
      paragraphs: [],
      items: [
        'Maior controle sobre autoria e consistência das informações coletadas.',
        'Redução de inconsistências e duplicidade de dados.',
        'Melhoria significativa na clareza de navegação e compreensão dos fluxos.',
        'Alinhamento mais eficiente entre equipes técnicas e gestores.',
        'Base estruturada para evolução futura do sistema.',
      ],
    },
    learnings: {
      title: 'Aprendizados',
      paragraphs: [],
      items: [
        'Projetos institucionais exigem entendimento profundo do contexto antes de qualquer decisão visual.',
        'Escopo inicial nem sempre resolve o problema real — é preciso coragem para propor ajustes estratégicos.',
        'Arquitetura da informação é determinante quando se lida com dados sensíveis e volumosos.',
        'Clareza e segmentação de fluxos reduzem drasticamente a sobrecarga cognitiva em sistemas complexos.',
        'Infraestrutura limitada deve ser considerada como insumo central no design da solução.',
      ],
    },
    numbers: [
      { value: '2', label: 'plataformas', detail: 'app de campo e painel de gestão integrados' },
      { value: '0', label: 'formulários em papel', detail: 'no fluxo de coleta após a entrega' },
      { value: 'Offline', label: 'app projetado', detail: 'para funcionar sem conexão à internet' },
    ],
  },
]

export function getCaseBySlug(slug: string): CaseData | undefined {
  return CASES.find((c) => c.slug === slug)
}
