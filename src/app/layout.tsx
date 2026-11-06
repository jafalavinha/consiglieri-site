import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Consiglieri — Resolução sem complicação",
  description:
    "Transformamos cenários complexos em operações claras, organizadas e eficientes. Solicite seu diagnóstico operacional gratuito de 30 minutos.",
  icons: {
    icon: "/symbol-node.svg",
    shortcut: "/symbol-node.svg",
  },
  alternates: {
    canonical: "https://consiglieri.solutions/",
    languages: {
      "pt-BR": "https://consiglieri.solutions/pt-br/",
      "en": "https://consiglieri.solutions/en/",
      "x-default": "https://consiglieri.solutions/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Synchronous pre-render script for zero-flash adaptive language detection on root / */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var path = window.location.pathname;
                  if (path === '/' || path === '') {
                    var saved = localStorage.getItem('consiglieri_lang');
                    if (saved === 'en') {
                      window.location.replace('/en/');
                      return;
                    }
                    if (saved === 'pt') {
                      window.location.replace('/pt-br/');
                      return;
                    }
                    var langs = navigator.languages || [navigator.language || ''];
                    for (var i = 0; i < langs.length; i++) {
                      var l = (langs[i] || '').toLowerCase();
                      if (l.indexOf('en') === 0) {
                        window.location.replace('/en/');
                        return;
                      }
                      if (l.indexOf('pt') === 0) {
                        window.location.replace('/pt-br/');
                        return;
                      }
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#F8F9FA] text-[#0E1726] font-sans antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
