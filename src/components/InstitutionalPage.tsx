'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderInstitutional } from './HeaderInstitutional';
import { FooterInstitutional } from './FooterInstitutional';
import { DiagnosticModal } from './DiagnosticModal';
import { BrandSymbol } from './BrandLogo';
import { content, Language } from '@/data/content';

interface InstitutionalPageProps {
  lang: Language;
}

export const InstitutionalPage: React.FC<InstitutionalPageProps> = ({ lang }) => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const t = content[lang];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleOpenEmail = () => {
    const subject = encodeURIComponent(t.emailTemplate.subject);
    const body = encodeURIComponent(t.emailTemplate.body.replace(/%0D%0A/g, '\n'));
    window.location.href = `mailto:contact@consiglieri.solutions?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#070C18] text-[#F8FAFC] min-h-screen flex flex-col antialiased selection:bg-[#D9531E]/30 selection:text-white">
      <HeaderInstitutional
        lang={lang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      <main className="flex-grow pt-24 pb-16">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION WITH PROMINENT LOGO SHOWCASE                      */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
          {/* Subtle geometric convergence node watermark in the background */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none hidden lg:block">
            <BrandSymbol size={800} lineColor="#FFFFFF" dotColor="#D9531E" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Hero Copy & Actions */}
              <div className="lg:col-span-7 space-y-6">
                {/* Refined Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1626] border border-[#1E293B] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#D9531E] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide text-[#F8FAFC]">
                    {t.hero.badge}
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-sans font-black tracking-tight text-[#F8FAFC] leading-[1.12]">
                  {t.hero.headline}
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
                  {t.hero.subheadline}
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                  {lang === 'pt' ? (
                    <>
                      <Link
                        href="/pt-br/engenharia-mecanica/"
                        className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-lg shadow-[#D9531E]/20 transition-all uppercase"
                      >
                        {t.hero.ctaPrimary}
                      </Link>
                      <a
                        href="#consultoria-operacional"
                        className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#F8FAFC] hover:text-[#D9531E] bg-[#0E1626] hover:bg-[#141E33] border border-[#1E293B] rounded-lg shadow-xs transition-all uppercase"
                      >
                        {t.hero.ctaSecondary}
                      </a>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsAssessmentOpen(true)}
                        className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-lg shadow-[#D9531E]/20 transition-all uppercase"
                      >
                        {t.hero.ctaPrimary}
                      </button>
                      <a
                        href="#metodologia"
                        className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#F8FAFC] hover:text-[#D9531E] bg-[#0E1626] hover:bg-[#141E33] border border-[#1E293B] rounded-lg shadow-xs transition-all uppercase"
                      >
                        {t.hero.ctaSecondary}
                      </a>
                    </>
                  )}
                </div>

                {/* Hero Trust Points */}
                <div className="pt-6 border-t border-[#1E293B] grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {t.hero.trustPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                      <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Prominent Brand Showcase Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md rounded-3xl border border-[#1E293B] bg-gradient-to-b from-[#0E1626] via-[#0C1424] to-[#070C18] p-8 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm flex flex-col items-center text-center group hover:border-[#D9531E]/40 transition-all">
                  {/* Subtle ambient warm glow */}
                  <div className="absolute inset-0 bg-radial from-[#D9531E]/12 via-transparent to-transparent pointer-events-none" />

                  {/* Prominent Convergence Node Emblem */}
                  <div className="relative mb-5 p-4 rounded-2xl bg-[#070C18]/60 border border-[#1E293B]/80 shadow-inner">
                    <BrandSymbol
                      size={120}
                      lineColor="#FFFFFF"
                      dotColor="#D9531E"
                      className="drop-shadow-[0_0_24px_rgba(217,83,30,0.3)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Wordmark */}
                  <span className="font-sans font-black tracking-[0.28em] text-2xl sm:text-3xl text-white uppercase select-none leading-none">
                    CONSIGLIERI
                  </span>

                  {/* Tagline */}
                  <span className="text-xs sm:text-sm tracking-wide text-[#94A3B8] mt-2 font-medium select-none">
                    {lang === 'en'
                      ? 'Resolution without complication.'
                      : 'Resolução sem complicação.'}
                  </span>

                  {/* Convergence Vectors / Strategic Dimensions */}
                  <div className="w-full mt-7 pt-6 border-t border-[#1E293B]/80 grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-lg bg-[#070C18]/50 border border-[#1E293B]/60">
                      <span className="block text-[10px] font-mono text-[#D9531E] uppercase">01</span>
                      <span className="text-xs font-semibold text-slate-200">
                        {lang === 'en' ? 'Governance' : 'Governança'}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#070C18]/50 border border-[#1E293B]/60">
                      <span className="block text-[10px] font-mono text-[#D9531E] uppercase">02</span>
                      <span className="text-xs font-semibold text-slate-200">
                        {lang === 'en' ? 'Processes' : 'Processos'}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#070C18]/50 border border-[#1E293B]/60">
                      <span className="block text-[10px] font-mono text-[#D9531E] uppercase">03</span>
                      <span className="text-xs font-semibold text-slate-200">
                        {lang === 'en' ? 'Performance' : 'Desempenho'}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#070C18]/50 border border-[#1E293B]/60">
                      <span className="block text-[10px] font-mono text-[#D9531E] uppercase">04</span>
                      <span className="text-xs font-semibold text-slate-200">
                        {lang === 'en' ? 'Risk' : 'Riscos'}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] text-[#64748B] italic leading-tight">
                    {lang === 'en'
                      ? 'Convergence of multiple perspectives into precise strategic action.'
                      : 'Síntese de múltiplas perspectivas e precisão na solução de problemas.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PT-BR DUAL-PILLAR SHOWCASE (PRD v1.2 SECTION 5.2)                         */}
        {/* ========================================================================= */}
        {lang === 'pt' && (
          <section className="py-14 bg-[#070C18] border-b border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                  Duas Frentes de Atuação
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] mt-1.5">
                  Engenharia Mecânica & Consultoria Operacional
                </h2>
                <p className="text-sm text-[#94A3B8] mt-2">
                  Atendemos empresas em dois pilares complementares com alto rigor técnico e foco prático de resolução.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Pilar 1: Engenharia Mecânica */}
                <div className="rounded-2xl border border-[#D9531E]/40 bg-[#0E1626] p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#D9531E] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E] bg-[#D9531E]/15 px-3 py-1 rounded-full">
                        Serviços Técnicos • CREA-SP
                      </span>
                      <span className="text-xs text-[#64748B] font-mono">Frente 01</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#D9531E] transition-colors">
                      Engenharia Mecânica
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      Inspeções, avaliações técnicas, projetos mecânicos, laudos, pareceres e responsabilidade técnica sob profissional habilitado registrado no CREA-SP com emissão de ART.
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#94A3B8] mb-8">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Máquinas e Equipamentos: Apreciação de riscos e laudos NR-12</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Movimentação de Cargas: Pontes rolantes, balancins e planos de rigging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Sistemas Pressurizados: Tubulações, compressores e integridade (NR-13)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Sistemas Térmicos: Elaboração e responsabilidade de PMOC e exaustão</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/pt-br/engenharia-mecanica/"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-xl shadow-lg shadow-[#D9531E]/20 transition-all uppercase"
                  >
                    <span>Conheça nossos serviços de Engenharia Mecânica</span>
                    <span>→</span>
                  </Link>
                </div>

                {/* Pilar 2: Consultoria Operacional */}
                <div className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-[#F8FAFC]/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                        Diagnóstico & Gestão
                      </span>
                      <span className="text-xs text-[#64748B] font-mono">Frente 02</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2 group-hover:text-white transition-colors">
                      Consultoria Operacional
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      Diagnóstico empresarial, auditoria de rotinas, melhoria de processos, eficiência operacional e apoio à implementação de soluções sustentáveis.
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#94A3B8] mb-8">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Revenue Leak Assessment: Estancamento de perdas de faturamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Operational Review: Diagnóstico de rotinas, gargalos e retrabalhos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Action Plan: Roteiro tático de implementação e governança de longo prazo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                        <span>Diagnóstico gratuito de 30 minutos com entrega de planilha ponderada</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#consultoria-operacional"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 text-xs sm:text-sm font-bold tracking-wider text-[#F8FAFC] hover:text-white bg-[#141E33] hover:bg-[#1E2E4A] active:bg-[#141E33] border border-[#1E293B] rounded-xl shadow-xs transition-all uppercase"
                  >
                    <span>Conheça nossa Consultoria Operacional</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2: FILOSOFIA & METÁFORA (THE MIDFIELDER & CONSIGLIERE)            */}
        {/* ========================================================================= */}
        <section id="filosofia" className="py-20 sm:py-28 bg-[#070C18] border-y border-[#1E293B]">
          <span id="sobre" className="sr-only" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.philosophy.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.philosophy.title}
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8] italic font-serif">
                “{t.philosophy.subtitle}”
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Card 1: O Martelo e a Formiga + Origem */}
              <div className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#141E33] border border-[#1E293B] flex items-center justify-center text-[#D9531E] font-bold mb-4 shadow-xs">
                    01
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                    {t.philosophy.hammerQuote}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {t.philosophy.hammerDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1E293B]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E] block mb-1">
                    {t.philosophy.originTag}
                  </span>
                  <p className="text-base font-bold text-[#F8FAFC] italic mb-2">
                    {t.philosophy.originQuote}
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {t.philosophy.originDesc}
                  </p>
                </div>
              </div>

              {/* Card 2: A Metáfora do Meio-Campista */}
              <div className="rounded-2xl border border-[#1E293B] bg-gradient-to-br from-[#0B132B] to-[#0E1626] text-white p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute right-[-40px] bottom-[-40px] opacity-10 pointer-events-none">
                  <BrandSymbol size={220} lineColor="#FFFFFF" dotColor="#D9531E" />
                </div>

                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[#D9531E] font-bold mb-4">
                    02
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E] block mb-1">
                    {t.philosophy.midfieldRole}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t.philosophy.midfieldTitle}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t.philosophy.midfieldDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15 mt-6">
                  <p className="text-xs text-slate-400 leading-normal">
                    {lang === 'en'
                      ? 'Our mission is to organize and set up the play so your team can deliver the goal.'
                      : 'Nossa missão é organizar o jogo com maestria para que seu time converta em gol.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: OS 4 SERVIÇOS CENTRAIS                                         */}
        {/* ========================================================================= */}
        <section id="consultoria-operacional" className="py-20 sm:py-28 bg-[#070C18]">
          <span id="servicos" className="sr-only" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.services.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.services.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.services.subtitle}
              </p>
            </div>

            {/* Services Grid (4 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.services.items.map((svc, index) => (
                <div
                  key={index}
                  className="bg-[#0E1626] rounded-2xl border border-[#1E293B] p-7 shadow-xs hover:border-[#D9531E]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E] bg-[#D9531E]/15 px-2.5 py-1 rounded inline-block mb-3">
                      {svc.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#D9531E] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1E293B] bg-[#070C18]/60 -mx-7 -mb-7 p-6 rounded-b-2xl">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#F8FAFC] block mb-1">
                      {lang === 'en' ? 'When to use:' : 'Quando faz sentido:'}
                    </span>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {svc.whenToUse}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Engagement Boundaries Notice (PRD Section 5.5) */}
            <div className="mt-10 rounded-2xl border border-[#1E293B] bg-[#0E1626] p-6 sm:p-8 flex flex-col md:flex-row gap-5 items-start">
              <div className="w-9 h-9 rounded-full bg-[#D9531E]/15 flex items-center justify-center text-[#D9531E] font-bold flex-shrink-0 mt-0.5">
                !
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8FAFC] mb-1">
                  {t.services.boundaries.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {t.services.boundaries.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: METODOLOGIA — DIAGNOSTICAR ANTES DE PROPOR                     */}
        {/* ========================================================================= */}
        <section id="metodologia" className="py-20 sm:py-28 bg-[#070C18] border-y border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.methodology.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.methodology.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.methodology.subtitle}
              </p>
            </div>

            {/* Medical Analogy Highlight Box */}
            <div className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-6 sm:p-10 mb-12 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] mb-2 text-center sm:text-left">
                {t.methodology.analogyTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {t.methodology.analogyText}
              </p>
            </div>

            {/* 4-Step Process Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.methodology.steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-6 relative group hover:border-[#D9531E]/40 transition-colors"
                >
                  <div className="text-3xl font-extrabold text-[#D9531E] font-mono mb-3">
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold text-[#F8FAFC] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: O DIAGNÓSTICO OPERACIONAL GRATUITO DE 30 MINUTOS               */}
        {/* ========================================================================= */}
        <section id="diagnostico" className="py-20 sm:py-28 bg-[#070C18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.diagnostics.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.diagnostics.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.diagnostics.subtitle}
              </p>
            </div>

            {/* The 4 Assessment Dimensions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {t.diagnostics.dimensions.map((dim, index) => (
                <div
                  key={index}
                  className="bg-[#0E1626] rounded-2xl border border-[#1E293B] p-6 shadow-xs flex flex-col justify-between hover:border-[#D9531E]/40 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                      {dim.questions}
                    </span>
                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">
                      {dim.name}
                    </h3>
                    <span className="inline-block text-[11px] font-semibold text-[#D9531E] mb-3">
                      {dim.tag}
                    </span>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {dim.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Spreadsheet Deliverable Banner */}
            <div className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/20 text-[#22C55E] text-xs font-bold uppercase tracking-wider">
                  <span>✓</span> {t.diagnostics.deliverable.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                  {t.diagnostics.deliverable.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {t.diagnostics.deliverable.desc}
                </p>
              </div>

              <button
                onClick={() => setIsAssessmentOpen(true)}
                className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-lg shadow-[#D9531E]/20 transition-all uppercase flex-shrink-0"
              >
                {t.diagnostics.cta}
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FERRAMENTAS & ABORDAGENS                                       */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#070C18] border-y border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.tools.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.tools.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.tools.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {t.tools.items.map((tool, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#1E293B] bg-[#0E1626] p-5 text-center flex flex-col justify-between"
                >
                  <h4 className="text-base font-bold text-[#F8FAFC] font-mono mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {tool.role}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-[#64748B] mt-8 max-w-xl mx-auto">
              * {t.tools.text}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: MODELOS DE CONTRATAÇÃO                                         */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#070C18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.models.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.models.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.models.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {t.models.cards.map((model, index) => (
                <div
                  key={index}
                  className="bg-[#0E1626] rounded-2xl border border-[#1E293B] p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#D9531E] uppercase tracking-wider block mb-2">
                      {model.type}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                      {model.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {model.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1E293B]">
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {model.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: O QUE NOS ORIENTA (MISSÃO, VISÃO E VALORES)                     */}
        {/* ========================================================================= */}
        <section id="valores" className="py-20 sm:py-28 bg-[#070C18] border-y border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.values.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.values.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.values.subtitle}
              </p>
            </div>

            {/* Mission & Vision row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E] block mb-2">
                  {t.values.missionTitle}
                </span>
                <h3 className="text-2xl font-black text-[#F8FAFC]">
                  {t.values.mission}
                </h3>
              </div>

              <div className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E] block mb-2">
                  {t.values.visionTitle}
                </span>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {t.values.vision}
                </p>
              </div>
            </div>

            {/* The 4 Core Values Grid */}
            <h3 className="text-lg font-bold text-[#F8FAFC] uppercase tracking-wider text-center mb-6">
              {t.values.coreValuesTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {t.values.list.map((val, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-6 hover:border-[#D9531E]/40 transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-[#D9531E] block mb-2">
                    0{index + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#F8FAFC] mb-2">
                    {val.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-[#64748B] italic">
              {t.values.conductNote}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: LIDERANÇA & GOVERNANÇA                                         */}
        {/* ========================================================================= */}
        <section id="lideranca" className="py-20 sm:py-28 bg-[#070C18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.leadership.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.leadership.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.leadership.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              {t.leadership.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#0E1626] rounded-2xl border border-[#1E293B] p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#D9531E] uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* NDA & Confidentiality Commitment Box */}
            <div className="max-w-4xl mx-auto rounded-2xl border border-[#1E293B] bg-[#0E1626] p-6 sm:p-8 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#141E33] text-[#D9531E] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                §
              </span>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8FAFC] mb-1">
                  {t.leadership.confidentiality.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {t.leadership.confidentiality.desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: FAQ (AS 12 PERGUNTAS DO PRD)                                  */}
        {/* ========================================================================= */}
        <section id="faq" className="py-20 sm:py-28 bg-[#070C18] border-y border-[#1E293B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.faq.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2 mb-3">
                {t.faq.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              {t.faq.items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#1E293B] bg-[#0E1626] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left text-[#F8FAFC] hover:text-[#D9531E] transition-colors font-semibold text-sm sm:text-base"
                  >
                    <span>{item.q}</span>
                    <span className="ml-4 text-base font-bold text-[#D9531E] font-mono flex-shrink-0">
                      {activeFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 pt-0 border-t border-[#1E293B]/60 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: FINAL CTA BANNER                                              */}
        {/* ========================================================================= */}
        <section id="contato" className="py-20 sm:py-28 bg-[#070C18]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#1E293B] bg-gradient-to-br from-[#0B132B] via-[#0E1626] to-[#070C18] text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute right-[-40px] top-[-40px] opacity-10 pointer-events-none">
                <BrandSymbol size={280} lineColor="#FFFFFF" dotColor="#D9531E" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#D9531E]">
                <span>✓</span> {t.ctaSection.tag}
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                {t.ctaSection.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                {t.ctaSection.subtitle}
              </p>

              <div className="pt-2 flex flex-col items-center">
                <button
                  onClick={handleOpenEmail}
                  className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-xl shadow-[#D9531E]/25 transition-all uppercase"
                >
                  {t.ctaSection.button}
                </button>
                <span className="text-[11px] text-slate-400 mt-3">
                  {t.ctaSection.emailNote}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterInstitutional lang={lang} />

      <DiagnosticModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        lang={lang}
      />
    </div>
  );
};
