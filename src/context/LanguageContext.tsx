'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema } from '@/app/translations';

type LanguageContextType = {
  lang: 'en' | 'pt';
  t: TranslationSchema;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<'en' | 'pt'>('en');

  useEffect(() => {
    const saved = localStorage.getItem('consiglieri_lang');
    if (saved === 'en' || saved === 'pt') {
      setLang(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'pt' : 'en';
    setLang(nextLang);
    localStorage.setItem('consiglieri_lang', nextLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
