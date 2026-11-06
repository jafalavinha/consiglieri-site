'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { setLanguagePreference } from '@/utils/language';
import { content, Language } from '@/data/content';

interface HeaderInstitutionalProps {
  lang: Language;
  onOpenAssessment: () => void;
}

export const HeaderInstitutional: React.FC<HeaderInstitutionalProps> = ({
  lang,
  onOpenAssessment,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSwitchLanguage = (targetLang: Language) => {
    setLanguagePreference(targetLang);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F9FA]/92 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo with responsive sizing and zero overflow on mobile */}
          <Link
            href={lang === 'pt' ? '/pt-br/' : '/en/'}
            className="flex items-center flex-shrink-0 group"
          >
            <BrandLogo
              variant="horizontal"
              lang={lang}
              className="transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#servicos"
              className="text-xs xl:text-sm font-medium text-[#475569] hover:text-[#0E1726] transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#metodologia"
              className="text-xs xl:text-sm font-medium text-[#475569] hover:text-[#0E1726] transition-colors"
            >
              {t.nav.methodology}
            </a>
            <a
              href="#diagnostico"
              className="text-xs xl:text-sm font-medium text-[#475569] hover:text-[#0E1726] transition-colors"
            >
              {t.nav.diagnostics}
            </a>
            <a
              href="#filosofia"
              className="text-xs xl:text-sm font-medium text-[#475569] hover:text-[#0E1726] transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#valores"
              className="text-xs xl:text-sm font-medium text-[#475569] hover:text-[#0E1726] transition-colors"
            >
              {t.nav.values}
            </a>
            <a
              href="#lideranca"
              className="text-xs xl:text-sm font-medium text-[#475569] hover:text-[#0E1726] transition-colors"
            >
              {t.nav.leadership}
            </a>
            <a
              href="#faq"
              className="text-xs xl:text-sm font-medium text-[#475569] hover:text-[#0E1726] transition-colors"
            >
              {t.nav.faq}
            </a>
          </nav>

          {/* Header Actions: Language Switcher + Desktop CTA */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Language Switcher Segmented Control */}
            <div className="inline-flex items-center rounded-md border border-[#E2E8F0] bg-[#FFFFFF] p-0.5 text-xs font-semibold shadow-xs">
              <Link
                href="/pt-br/"
                onClick={() => handleSwitchLanguage('pt')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'pt'
                    ? 'bg-[#0E1726] text-white'
                    : 'text-[#64748B] hover:text-[#0E1726]'
                }`}
                title="Mudar para Português"
              >
                PT-BR
              </Link>
              <Link
                href="/en/"
                onClick={() => handleSwitchLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-[#0E1726] text-white'
                    : 'text-[#64748B] hover:text-[#0E1726]'
                }`}
                title="Switch to English"
              >
                EN
              </Link>
            </div>

            {/* Desktop CTA */}
            <button
              onClick={onOpenAssessment}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0E1726] hover:bg-[#1E293B] active:bg-[#0E1726] rounded-md shadow-sm transition-all"
            >
              {t.nav.ctaButton}
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Bottom Thumb-Friendly CTA for Mobile (appears upon scroll) */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm sm:hidden transition-all duration-300 transform ${
          scrolled
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={onOpenAssessment}
          className="w-full py-3.5 px-5 text-center text-xs font-bold tracking-wider text-white bg-[#D9531E] active:bg-[#B84014] rounded-full shadow-xl transition-all flex items-center justify-center gap-2 uppercase"
        >
          <span>{t.nav.ctaButton}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
