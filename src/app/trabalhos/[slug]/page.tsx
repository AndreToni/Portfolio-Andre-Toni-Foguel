import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CASES, getCaseBySlug } from '@/content/cases'
import { CaseHero } from '@/components/sections/case/CaseHero/CaseHero'
import { CaseTextSection } from '@/components/sections/case/CaseTextSection/CaseTextSection'
import { CaseNumbers } from '@/components/sections/case/CaseNumbers/CaseNumbers'
import { CaseExplore } from '@/components/sections/case/CaseExplore/CaseExplore'
import { CaseSectionImage } from '@/components/sections/case/CaseSectionImage/CaseSectionImage'
import { CaseNav } from '@/components/ui/CaseNav/CaseNav'
import { BannerSection } from '@/components/sections/BannerSection/BannerSection'

interface PageProps {
  params: Promise<{ slug: string }>
}

/* ─── Static params — gera uma rota para cada case ─── */
export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }))
}

/* ─── Metadata dinâmica por slug ─── */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getCaseBySlug(slug)
  if (!data) return {}

  return {
    title: data.title,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} | Toni Foguel`,
      description: data.subtitle,
      images: [{ url: data.coverImage }],
    },
  }
}

/* ─── Mapeamento de seções em ordem ─── */
const SECTION_ORDER = [
  { id: 'contexto',            key: 'context'           },
  { id: 'problema',            key: 'problem'           },
  { id: 'restricoes',          key: 'restrictions'      },
  { id: 'processo-de-decisao', key: 'decisionProcess'   },
  { id: 'erros-e-ajustes',     key: 'errorsAdjustments' },
  { id: 'solucao',             key: 'solution'          },
  { id: 'principais-entregas', key: 'deliverables'      },
  { id: 'impacto',             key: 'impact'            },
  { id: 'aprendizados',        key: 'learnings'         },
] as const

/* ─── Page ─── */
export default async function CasePage({ params }: PageProps) {
  const { slug } = await params
  const data = getCaseBySlug(slug)
  if (!data) notFound()

  return (
    <>
      {/* Menu lateral sticky — client component, visível apenas em ≥1200px */}
      <CaseNav items={data.navSections} />

      {/* ① Primeira dobra — fundo var(--color-section-red) */}
      <CaseHero data={data} />

      {/* ② Seções de conteúdo — tema e layout derivados do índice */}
      {SECTION_ORDER.map(({ id, key }, index) => (
        <div key={id}>
          <CaseTextSection
            id={id}
            data={data[key]}
            index={index}
          />
          {id === 'solucao' && data.solution.images?.[0] && (
            <CaseSectionImage
              src={data.solution.images[0]}
              alt={`${data.company} — solução`}
            />
          )}
        </div>
      ))}

      {/* ③ Números do projeto — fundo var(--color-section-red) */}
      <CaseNumbers numbers={data.numbers} company={data.company} />

      {/* ④ Continuar explorando — herda imagens de works.ts */}
      <CaseExplore currentSlug={slug} />

      {/* ⑤ Banner de contato */}
      <BannerSection hideLabel />
    </>
  )
}
