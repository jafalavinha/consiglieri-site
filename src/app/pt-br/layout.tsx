import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consiglieri — Resolução sem complicação",
  description:
    "Transformamos cenários complexos em operações claras, organizadas e eficientes. Solicite seu diagnóstico operacional gratuito de 30 minutos.",
  alternates: {
    canonical: "https://consiglieri.solutions/pt-br/",
    languages: {
      "pt-BR": "https://consiglieri.solutions/pt-br/",
      "en": "https://consiglieri.solutions/en/",
      "x-default": "https://consiglieri.solutions/",
    },
  },
  openGraph: {
    title: "Consiglieri — Resolução sem complicação",
    description:
      "Transformamos cenários complexos em operações claras, organizadas e eficientes. Diagnóstico operacional gratuito de 30 minutos.",
    url: "https://consiglieri.solutions/pt-br/",
    siteName: "Consiglieri",
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
