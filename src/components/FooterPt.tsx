'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { setLanguagePreference } from '@/utils/language';

export const FooterPt: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-bg border-t border-brand-blue/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/pt-br">
            <Image
              src="/logo-v4.png"
              alt="Consiglieri Solutions Logo"
              width={150}
              height={45}
              className="h-8 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* Regulatory & Attributions Boundary Statement (PRD Section 28 & 13) */}
        <div className="max-w-3xl mb-8 space-y-2">
          <h4 className="text-xs sm:text-sm uppercase tracking-wider text-brand-orange font-semibold">
            Conformidade Técnica e Atribuições Profissionais
          </h4>
          <p className="text-xs sm:text-sm text-brand-text-mute leading-relaxed">
            Serviços executados conforme atribuições profissionais, características do equipamento e requisitos técnicos aplicáveis. A ART (Anotação de Responsabilidade Técnica) é emitida em estrita conformidade com as exigências do sistema CREA/CONFEA para as atividades e escopos regulamentados.
          </p>
        </div>

        {/* Navigation & Language Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-text-mute mb-8 border-y border-brand-blue/30 py-4 w-full max-w-2xl">
          <a href="#engenharia-tecnica" className="hover:text-brand-orange transition-colors">
            Engenharia Técnica
          </a>
          <a href="#engenharia-operacional" className="hover:text-brand-orange transition-colors">
            Engenharia Operacional
          </a>
          <a href="#como-atuamos" className="hover:text-brand-orange transition-colors">
            Como Atuamos
          </a>
          <a href="#sobre" className="hover:text-brand-orange transition-colors">
            Sobre
          </a>
          <div className="inline-flex items-center gap-2 font-semibold">
            <span>Idioma:</span>
            <span className="text-brand-orange">PT-BR</span>
            <span>|</span>
            <Link
              href="/en"
              onClick={() => setLanguagePreference('en')}
              className="hover:text-brand-orange transition-colors"
            >
              English
            </Link>
          </div>
        </div>

        {/* Contact Email & Copyright */}
        <div className="text-xs text-brand-text-mute/70 space-y-2">
          <div>
            Contato Direto:{' '}
            <a
              href="mailto:contact@consiglieri.solutions"
              className="text-brand-orange hover:underline font-medium"
            >
              contact@consiglieri.solutions
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Consiglieri Solutions. Todos os direitos reservados. | Engenharia Técnica & Engenharia Operacional.
          </div>
        </div>
      </div>
    </footer>
  );
};
