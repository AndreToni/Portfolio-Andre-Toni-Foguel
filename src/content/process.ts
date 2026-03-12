import type { ProcessStepData } from '@/types'

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Entender antes de desenhar. Condução de entrevistas, análise de contexto, cenários e hipóteses.',
  },
  {
    number: '02',
    title: 'Definição',
    description:
      'Estruturação de problemas, objetivos estratégicos e definição de métricas de sucesso.',
  },
  {
    number: '03',
    title: 'Exploração',
    description:
      'Testes de soluções e hipóteses através de protótipos e validações rápidas.',
  },
  {
    number: '04',
    title: 'Design & Prototyping',
    description:
      'Criação de fluxos, interfaces e sistemas de interação prontos para desenvolvimento.',
  },
  {
    number: '05',
    title: 'Validação & Delivery',
    description:
      'Entrega validada com usuários e alinhada com métricas de impacto e negócio.',
  },
]
