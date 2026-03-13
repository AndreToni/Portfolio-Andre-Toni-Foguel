import type { ProcessStepData } from '@/types'

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Compreensão profunda do contexto por meio de entrevistas e análise de comportamento. IA apoia a documentação e síntese de insights para orientar decisões de produto.',
  },
  {
    number: '02',
    title: 'Definição',
    description:
      'Estruturação do problema, alinhamento estratégico e definição de métricas de sucesso. IA apoia a organização e documentação das decisões de produto.',
  },
  {
    number: '03',
    title: 'Exploração',
    description:
      'Exploração de soluções por meio de wireframes e experimentos rápidos para validar hipóteses antes de avançar para desenvolvimento.',
  },
  {
    number: '04',
    title: 'Design, Prototyping & Coding',
    description:
      'Desenvolvimento de fluxos, interfaces e protótipos de alta fidelidade, utilizando IA para acelerar a geração de artefatos prontos para testes e desenvolvimento.',
  },
  {
    number: '05',
    title: 'Validação & Delivery',
    description:
      'Soluções testadas com usuários e entregues com foco em impacto mensurável. IA apoia a aplicação de tags de analytics para acompanhar adoção e performance.',
  },
]
