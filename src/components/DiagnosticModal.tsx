'use client';

import React, { useState } from 'react';
import { content, Language } from '@/data/content';
import { BrandSymbol } from './BrandLogo';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = content[lang];
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState('');
  const [challenge, setChallenge] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(t.emailTemplate.subject);
    const bodyText =
      lang === 'en'
        ? `Hello Consiglieri Team,%0D%0A%0D%0AI would like to schedule a Free 30-Minute Operational Assessment for my business.%0D%0A%0D%0AMy Details:%0D%0A- Full Name: ${name || 'Not provided'}%0D%0A- Company: ${company || 'Not provided'}%0D%0A- Sector: ${sector || 'Not provided'}%0D%0A- Phone/WhatsApp: ${phone || 'Not provided'}%0D%0A- Primary Operational Challenge: ${challenge || 'To be discussed during the session'}%0D%0A%0D%0APlease let me know your available times.%0D%0AThank you!`
        : `Olá equipe Consiglieri,%0D%0A%0D%0AGostaria de agendar o Diagnóstico Operacional Gratuito de 30 minutos para minha empresa.%0D%0A%0D%0AMeus dados:%0D%0A- Nome: ${name || 'Não informado'}%0D%0A- Empresa: ${company || 'Não informada'}%0D%0A- Segmento: ${sector || 'Não informado'}%0D%0A- Telefone / WhatsApp: ${phone || 'Não informado'}%0D%0A- Principal desafio operacional: ${challenge || 'A alinhar durante a reunião'}%0D%0A%0D%0AAguardo retorno para alinharmos data e horário.%0D%0AObrigado!`;

    window.location.href = `mailto:contact@consiglieri.solutions?subject=${subject}&body=${bodyText}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0E1626] border border-[#1E293B] p-6 sm:p-8 shadow-2xl text-[#F8FAFC] animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#64748B] hover:text-white transition-colors p-1"
          aria-label="Fechar"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <BrandSymbol size={48} lineColor="#FFFFFF" dotColor="#D9531E" className="flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E]">
              {t.diagnostics.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] mt-0.5">
              {lang === 'en'
                ? 'Request Your Free 30-Minute Assessment'
                : 'Solicitar Diagnóstico Operacional Gratuito'}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              {lang === 'en'
                ? 'We evaluate your operations across 4 strategic dimensions and deliver the complete weighted assessment spreadsheet at no cost.'
                : 'Avaliamos sua operação em 4 dimensões estratégicas e entregamos a planilha de diagnóstico preenchida sem custo algum.'}
            </p>
          </div>
        </div>

        {/* The 4 Dimensions Pill Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {t.diagnostics.dimensions.map((dim, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#1E293B] bg-[#070C18] p-2.5 text-center"
            >
              <span className="block text-[11px] font-bold text-[#F8FAFC] leading-tight">
                {dim.name.split(' ')[0]}
              </span>
              <span className="block text-[9px] text-[#64748B] mt-0.5">
                5 perguntas
              </span>
            </div>
          ))}
        </div>

        {/* Intake Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#94A3B8] mb-1">
                {lang === 'en' ? 'Your Name *' : 'Seu Nome *'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'en' ? 'John Doe' : 'Carlos Silva'}
                className="w-full rounded-md border border-[#1E293B] bg-[#070C18] px-3 py-2 text-xs sm:text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#D9531E] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#94A3B8] mb-1">
                {lang === 'en' ? 'Company Name *' : 'Nome da Empresa *'}
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={lang === 'en' ? 'Company Inc.' : 'Minha Empresa Ltda.'}
                className="w-full rounded-md border border-[#1E293B] bg-[#070C18] px-3 py-2 text-xs sm:text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#D9531E] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#94A3B8] mb-1">
                {lang === 'en' ? 'Phone / WhatsApp' : 'Telefone / WhatsApp'}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full rounded-md border border-[#1E293B] bg-[#070C18] px-3 py-2 text-xs sm:text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#D9531E] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#94A3B8] mb-1">
                {lang === 'en' ? 'Industry / Sector' : 'Segmento de Atuação'}
              </label>
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder={lang === 'en' ? 'Services, Industry, Retail...' : 'Serviços, Indústria, Comércio...'}
                className="w-full rounded-md border border-[#1E293B] bg-[#070C18] px-3 py-2 text-xs sm:text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#D9531E] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#94A3B8] mb-1">
              {lang === 'en'
                ? 'Main Operational Challenge (Optional)'
                : 'Principal Desafio Operacional (Opcional)'}
            </label>
            <textarea
              rows={2}
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Ex: Inefficient workflows, lost quotes, lack of clear metrics...'
                  : 'Ex: Gargalos de processo, orçamentos perdidos, falta de indicadores...'
              }
              className="w-full rounded-md border border-[#1E293B] bg-[#070C18] px-3 py-2 text-xs sm:text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#D9531E] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Privacy Note */}
          <div className="rounded-lg bg-[#070C18] border border-[#1E293B] p-3 text-[11px] text-[#94A3B8] flex items-center gap-2">
            <span className="text-[#D9531E] font-bold">✓</span>
            <span>
              {lang === 'en'
                ? '100% confidential under NDA. Opening your email app to send directly to contact@consiglieri.solutions.'
                : 'Atuação sob estrito sigilo (NDA). O clique abrirá seu aplicativo de e-mail para envio direto a contact@consiglieri.solutions.'}
            </span>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 text-center text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-lg shadow-[#D9531E]/20 transition-all uppercase"
            >
              {lang === 'en'
                ? 'Send Assessment Request via Email'
                : 'Enviar Solicitação via E-mail'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
