'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const { lang, t, toggleLanguage } = useLanguage();
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-blue/50 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo-new.png"
              alt="Consiglieri Solutions Logo"
              width={180}
              height={55}
              className="h-10 w-auto sm:h-12 object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-we-help" className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors">
              {t.nav.howWeHelp}
            </a>
            <a href="#operational-leaks" className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors">
              {t.nav.problem}
            </a>
            <a href="#the-funnel" className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors">
              {t.nav.funnel}
            </a>
            <a href="#results" className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors">
              {t.nav.benefits}
            </a>
            <a href="#faq" className="text-sm font-medium text-brand-text-mute hover:text-brand-orange transition-colors">
              {t.nav.faq}
            </a>
          </nav>

          {/* Actions (Language Switch + Desktop CTA) */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider text-brand-text-mute hover:text-brand-orange border border-brand-text-mute/30 rounded-md transition-all uppercase"
            >
              {lang === 'en' ? 'pt' : 'en'}
            </button>
            
            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-md hover:shadow-lg transition-all"
            >
              {t.hero.ctaPrimary}
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
          <span>{lang === 'en' ? 'Schedule Free Assessment' : 'Agendar Avaliação Gratuita'}</span>
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
