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
  title: "Consiglieri Solutions | Home Services Revenue Optimization",
  description: "We help HVAC, roofing, plumbing, and electrical contractors transform more opportunities into revenue by eliminating operational leaks in dispatching, estimating, and call flows.",
  alternates: {
    canonical: "https://consiglieri.solutions/",
    languages: {
      "en": "https://consiglieri.solutions/en/",
      "pt-BR": "https://consiglieri.solutions/pt-br/",
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
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
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
                    if (saved === 'pt') {
                      window.location.replace('/pt-br/');
                      return;
                    }
                    if (saved === 'en') {
                      return;
                    }
                    var langs = navigator.languages || [navigator.language || ''];
                    for (var i = 0; i < langs.length; i++) {
                      var l = (langs[i] || '').toLowerCase();
                      if (l.indexOf('pt') === 0) {
                        window.location.replace('/pt-br/');
                        return;
                      }
                      if (l.indexOf('en') === 0) {
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
      <body className="bg-brand-bg text-brand-text font-sans antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
