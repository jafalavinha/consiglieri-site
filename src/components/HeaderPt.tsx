'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { setLanguagePreference } from '@/utils/language';

interface HeaderPtProps {
  onOpenContact: () => void;
}

export const HeaderPt: React.FC<HeaderPtProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectEnglish = () => {
    setLanguagePreference('en');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-blue/50 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo with responsive sizing - prevents overlap on mobile */}
          <Link href="/pt-br" className="flex items-center flex-shrink-0">
            <Image
              src="/logo-v4.png"
              alt="Consiglieri Solutions Logo"
              width={324}
              height={99}
              className="h-10 sm:h-12 md:h-[72px] lg:h-[86px] w-auto max-w-[160px] sm:max-w-none object-contain flex-shrink-0"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#engenharia-tecnica"
              className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors"
            >
              Engenharia Técnica
            </a>
            <a
              href="#engenharia-operacional"
              className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors"
            >
              Engenharia Operacional
            </a>
            <a
              href="#como-atuamos"
              className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors"
            >
              Como Atuamos
            </a>
            <a
              href="#sobre"
              className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Actions (Language Switch + Desktop CTA) */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Real Link Language Switcher per PRD Section 10 */}
            <Link
              href="/en"
              onClick={handleSelectEnglish}
              className="px-2.5 py-1 text-xs sm:text-sm font-semibold tracking-wider text-brand-text-mute hover:text-brand-orange border border-brand-text-mute/30 rounded-md transition-all uppercase flex-shrink-0"
              title="Switch to English"
            >
              EN
            </Link>

            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Diagnóstico
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Bottom Thumb-Friendly CTA for Mobile (appears on scroll) */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden transition-all duration-500 transform ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={onOpenContact}
          className="w-full py-4 px-6 text-center text-sm font-bold tracking-wide text-white bg-brand-orange active:bg-brand-orange/95 rounded-full shadow-2xl transition-all flex items-center justify-center gap-2"
        >
          <span>Solicitar Diagnóstico</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 animate-pulse"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </>
  );
};
