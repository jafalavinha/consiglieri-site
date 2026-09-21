import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consiglieri Solutions | Home Services Revenue Optimization",
  description: "We help HVAC, roofing, plumbing, and electrical contractors transform more opportunities into revenue by eliminating operational leaks in dispatching, estimating, and call flows.",
  alternates: {
    canonical: "https://consiglieri.solutions/en/",
    languages: {
      "en": "https://consiglieri.solutions/en/",
      "pt-BR": "https://consiglieri.solutions/pt-br/",
      "x-default": "https://consiglieri.solutions/",
    },
  },
  openGraph: {
    title: "Consiglieri Solutions | Home Services Revenue Optimization",
    description: "We help HVAC, roofing, plumbing, and electrical contractors transform more opportunities into revenue by eliminating operational leaks in dispatching, estimating, and call flows.",
    url: "https://consiglieri.solutions/en/",
    siteName: "Consiglieri Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
