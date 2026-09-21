import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consiglieri Solutions | Engenharia Técnica e Engenharia Operacional",
  description: "Laudos técnicos, NR-11, NR-12, NR-13, PMOC de climatização, projetos mecânicos, planos de manutenção e diagnóstico operacional para empresas e indústrias.",
  alternates: {
    canonical: "https://consiglieri.solutions/pt-br/",
    languages: {
      "pt-BR": "https://consiglieri.solutions/pt-br/",
      "en": "https://consiglieri.solutions/en/",
      "x-default": "https://consiglieri.solutions/",
    },
  },
  openGraph: {
    title: "Consiglieri Solutions | Engenharia Técnica e Operacional",
    description: "Engenharia Mecânica para transformar problemas técnicos e regulatórios em operações seguras, eficientes e padronizadas.",
    url: "https://consiglieri.solutions/pt-br/",
    siteName: "Consiglieri Solutions",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PtBrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
