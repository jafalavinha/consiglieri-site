'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { content, Language } from '@/data/content';
import { setLanguagePreference } from '@/utils/language';

interface FooterInstitutionalProps {
  lang: Language;
}

export const FooterInstitutional: React.FC<FooterInstitutionalProps> = ({
  lang,
}) => {
  const t = content[lang];

  return (
    <footer className="bg-[#040814] border-t border-[#1E293B] pt-16 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Brand Info with Prominent Dark Logo */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="horizontal" theme="dark" lang={lang} size="lg" />
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm leading-relaxed mt-2 font-normal">
              {lang === 'en'
                ? 'Strategic operational advisory and workflow architecture. We transform complex friction into structured, simple, and high-performance operations.'
                : 'Aconselhamento operacional e resolução estratégica. Transformamos cenários complexos em operações claras, organizadas e sustentáveis.'}
            </p>
            <div className="pt-2 text-xs text-[#64748B]">
              <span className="font-semibold text-white">
                {lang === 'en' ? 'Direct Contact:' : 'Contato Direto:'}{' '}
              </span>
              <a
                href="mailto:contact@consiglieri.solutions"
                className="text-[#D9531E] font-medium hover:underline ml-1"
              >
                contact@consiglieri.solutions
              </a>
            </div>
          </div>

          {/* Boundaries Notice (PRD Section 5.5) */}
          <div className="lg:col-span-4 bg-[#0E1626] rounded-xl border border-[#1E293B] p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9531E]" />
              {t.footer.boundariesTitle}
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {t.footer.boundariesText}
            </p>
          </div>

          {/* Quick Navigation & Languages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#94A3B8]">
              {lang === 'pt' ? (
                <>
                  <li>
                    <Link href="/pt-br/" className="hover:text-white transition-colors">
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link href="/pt-br/engenharia-mecanica/" className="text-[#D9531E] hover:text-[#EA580C] font-semibold transition-colors">
                      Engenharia Mecânica
                    </Link>
                  </li>
                  <li>
                    <a href="/pt-br/#consultoria-operacional" className="hover:text-white transition-colors">
                      Consultoria Operacional
                    </a>
                  </li>
                  <li>
                    <a href="/pt-br/#metodologia" className="hover:text-white transition-colors">
                      Como Trabalhamos
                    </a>
                  </li>
                  <li>
                    <a href="/pt-br/#filosofia" className="hover:text-white transition-colors">
                      Sobre a Consiglieri
                    </a>
                  </li>
                  <li>
                    <a href="/pt-br/#lideranca" className="hover:text-white transition-colors">
                      Liderança & Governança
                    </a>
                  </li>
                  <li>
                    <a href="/pt-br/#faq" className="hover:text-white transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      {t.nav.services}
                    </a>
                  </li>
                  <li>
                    <a href="#metodologia" className="hover:text-white transition-colors">
                      {t.nav.methodology}
                    </a>
                  </li>
                  <li>
                    <a href="#diagnostico" className="hover:text-white transition-colors">
                      {t.nav.diagnostics}
                    </a>
                  </li>
                  <li>
                    <a href="#filosofia" className="hover:text-white transition-colors">
                      {t.nav.about}
                    </a>
                  </li>
                  <li>
                    <a href="#valores" className="hover:text-white transition-colors">
                      {t.nav.values}
                    </a>
                  </li>
                  <li>
                    <a href="#lideranca" className="hover:text-white transition-colors">
                      {t.nav.leadership}
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors">
                      {t.nav.faq}
                    </a>
                  </li>
                </>
              )}
            </ul>

            <div className="pt-2 flex items-center gap-2 text-xs">
              <span className="text-[#64748B]">Idioma:</span>
              <Link
                href="/pt-br/"
                onClick={() => setLanguagePreference('pt')}
                className={`font-semibold ${
                  lang === 'pt' ? 'text-[#D9531E]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Português
              </Link>
              <span className="text-[#334155]">|</span>
              <Link
                href="/en/"
                onClick={() => setLanguagePreference('en')}
                className={`font-semibold ${
                  lang === 'en' ? 'text-[#D9531E]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                English
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            &copy; {new Date().getFullYear()} Consiglieri Solutions. {t.footer.rights} (Fundada em 2025)
          </p>
          <p className="text-[11px] text-[#64748B]">
            {lang === 'en'
              ? 'All consultations governed under strict Non-Disclosure Agreements (NDA).'
              : 'Atendimento pautado sob rigoroso acordo de confidencialidade (NDA).'}
          </p>
        </div>
      </div>
    </footer>
  );
};
