import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consiglieri — Resolution without complication",
  description:
    "We untangle complex operations into clear, structured, and high-performance businesses. Request your free 30-minute operational assessment.",
  alternates: {
    canonical: "https://consiglieri.solutions/en/",
    languages: {
      "en": "https://consiglieri.solutions/en/",
      "pt-BR": "https://consiglieri.solutions/pt-br/",
      "x-default": "https://consiglieri.solutions/",
    },
  },
  openGraph: {
    title: "Consiglieri — Resolution without complication",
    description:
      "We untangle complex operations into clear, structured, and high-performance businesses. Free 30-minute operational assessment.",
    url: "https://consiglieri.solutions/en/",
    siteName: "Consiglieri",
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
