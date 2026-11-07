import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engenharia Mecânica — Serviços Técnicos, Laudos e ART | Consiglieri',
  description:
    'Serviços especializados de Engenharia Mecânica com responsabilidade técnica de profissional registrado no CREA-SP. Inspeções de máquinas (NR-12), tubulações e compressores (NR-13), planos de rigging, PMOC e projetos mecânicos.',
  keywords: [
    'Engenheiro mecânico',
    'Laudo técnico mecânico',
    'Inspeção de máquinas',
    'NR-12',
    'NR-13',
    'Plano de rigging',
    'Plano de içamento',
    'Projeto de andaimes',
    'Inspeção de equipamentos',
    'PMOC',
    'Engenharia de manutenção',
    'Confiabilidade industrial',
    'ART de engenharia mecânica',
    'CREA-SP',
  ],
  alternates: {
    canonical: 'https://consiglieri.solutions/pt-br/engenharia-mecanica/',
    languages: {
      'pt-BR': 'https://consiglieri.solutions/pt-br/engenharia-mecanica/',
      'x-default': 'https://consiglieri.solutions/pt-br/engenharia-mecanica/',
    },
  },
  openGraph: {
    title: 'Engenharia Mecânica — Serviços Técnicos | Consiglieri',
    description:
      'Avaliação de máquinas, elaboração de projetos, inspeções, laudos técnicos e emissão de ART com profissional habilitado no CREA-SP.',
    url: 'https://consiglieri.solutions/pt-br/engenharia-mecanica/',
    siteName: 'Consiglieri',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Engenharia Mecânica — Serviços Técnicos | Consiglieri',
    description:
      'Serviços especializados de Engenharia Mecânica com responsabilidade técnica CREA-SP.',
  },
};

export default function MechanicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
