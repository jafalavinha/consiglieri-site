'use client';

import React, { useState } from 'react';
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
    <div className="bg-[#F8F9FA] text-[#0E1726] min-h-screen flex flex-col antialiased selection:bg-[#D9531E]/20 selection:text-[#0E1726]">
      <HeaderInstitutional
        lang={lang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      <main className="flex-grow pt-24 pb-16">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION                                                   */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
          {/* Subtle geometric convergence node watermark in the background */}
          <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none select-none hidden lg:block">
            <BrandSymbol size={700} lineColor="#0E1726" dotColor="#0E1726" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              {/* Refined Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D9531E] animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-[#0E1726]">
                  {t.hero.badge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-sans font-black tracking-tight text-[#0E1726] leading-[1.12]">
                {t.hero.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                {t.hero.subheadline}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-3">
                <button
                  onClick={() => setIsAssessmentOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#0E1726] hover:bg-[#1E293B] active:bg-[#0E1726] rounded-lg shadow-sm transition-all uppercase"
                >
                  {t.hero.ctaPrimary}
                </button>
                <a
                  href="#metodologia"
                  className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#0E1726] hover:text-[#D9531E] bg-white hover:bg-[#F8F9FA] border border-[#CBD5E1] rounded-lg shadow-xs transition-all uppercase"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>

              {/* Hero Trust Points */}
              <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.hero.trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-[#475569]">
                    <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: FILOSOFIA & METÁFORA (THE MIDFIELDER & CONSIGLIERE)            */}
        {/* ========================================================================= */}
        <section id="filosofia" className="py-20 sm:py-28 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.philosophy.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.philosophy.title}
              </h2>
              <p className="text-base sm:text-lg text-[#475569] italic font-serif">
                “{t.philosophy.subtitle}”
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Card 1: O Martelo e a Formiga + Origem */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#D9531E] font-bold mb-4 shadow-xs">
                    01
                  </div>
                  <h3 className="text-xl font-bold text-[#0E1726] mb-3">
                    {t.philosophy.hammerQuote}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {t.philosophy.hammerDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2E8F0]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E] block mb-1">
                    {t.philosophy.originTag}
                  </span>
                  <p className="text-base font-bold text-[#0E1726] italic mb-2">
                    {t.philosophy.originQuote}
                  </p>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {t.philosophy.originDesc}
                  </p>
                </div>
              </div>

              {/* Card 2: A Metáfora do Meio-Campista */}
              <div className="rounded-2xl border border-[#0E1726] bg-[#0E1726] text-white p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
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
        <section id="servicos" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.services.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.services.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.services.subtitle}
              </p>
            </div>

            {/* Services Grid (4 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.services.items.map((svc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-7 shadow-xs hover:border-[#0E1726]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E] bg-[#D9531E]/10 px-2.5 py-1 rounded inline-block mb-3">
                      {svc.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#0E1726] mb-2 group-hover:text-[#D9531E] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed mb-5">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1F5F9] bg-[#F8F9FA]/80 -mx-7 -mb-7 p-6 rounded-b-2xl">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#0E1726] block mb-1">
                      {lang === 'en' ? 'When to use:' : 'Quando faz sentido:'}
                    </span>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {svc.whenToUse}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Engagement Boundaries Notice (PRD Section 5.5) */}
            <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 flex flex-col md:flex-row gap-5 items-start">
              <div className="w-9 h-9 rounded-full bg-[#D9531E]/10 flex items-center justify-center text-[#D9531E] font-bold flex-shrink-0 mt-0.5">
                !
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E1726] mb-1">
                  {t.services.boundaries.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {t.services.boundaries.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: METODOLOGIA — DIAGNOSTICAR ANTES DE PROPOR                     */}
        {/* ========================================================================= */}
        <section id="metodologia" className="py-20 sm:py-28 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.methodology.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.methodology.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.methodology.subtitle}
              </p>
            </div>

            {/* Medical Analogy Highlight Box */}
            <div className="rounded-2xl border border-[#CBD5E1] bg-[#F8F9FA] p-6 sm:p-10 mb-12 max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E1726] mb-2 text-center sm:text-left">
                {t.methodology.analogyTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {t.methodology.analogyText}
              </p>
            </div>

            {/* 4-Step Process Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.methodology.steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6 relative group hover:border-[#0E1726]/40 transition-colors"
                >
                  <div className="text-3xl font-extrabold text-[#D9531E] font-mono mb-3">
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold text-[#0E1726] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
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
        <section id="diagnostico" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.diagnostics.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.diagnostics.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.diagnostics.subtitle}
              </p>
            </div>

            {/* The 4 Assessment Dimensions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {t.diagnostics.dimensions.map((dim, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                      {dim.questions}
                    </span>
                    <h3 className="text-lg font-bold text-[#0E1726] mb-1">
                      {dim.name}
                    </h3>
                    <span className="inline-block text-[11px] font-semibold text-[#D9531E] mb-3">
                      {dim.tag}
                    </span>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {dim.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Spreadsheet Deliverable Banner */}
            <div className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-bold uppercase tracking-wider">
                  <span>✓</span> {t.diagnostics.deliverable.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0E1726]">
                  {t.diagnostics.deliverable.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {t.diagnostics.deliverable.desc}
                </p>
              </div>

              <button
                onClick={() => setIsAssessmentOpen(true)}
                className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#0E1726] hover:bg-[#1E293B] active:bg-[#0E1726] rounded-lg shadow-sm transition-all uppercase flex-shrink-0"
              >
                {t.diagnostics.cta}
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FERRAMENTAS & ABORDAGENS                                       */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.tools.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.tools.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.tools.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {t.tools.items.map((tool, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-5 text-center flex flex-col justify-between"
                >
                  <h4 className="text-base font-bold text-[#0E1726] font-mono mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
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
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.models.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.models.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.models.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {t.models.cards.map((model, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#D9531E] uppercase tracking-wider block mb-2">
                      {model.type}
                    </span>
                    <h3 className="text-xl font-bold text-[#0E1726] mb-3">
                      {model.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed mb-6">
                      {model.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0]">
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
        <section id="valores" className="py-20 sm:py-28 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.values.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.values.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.values.subtitle}
              </p>
            </div>

            {/* Mission & Vision row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E] block mb-2">
                  {t.values.missionTitle}
                </span>
                <h3 className="text-2xl font-black text-[#0E1726]">
                  {t.values.mission}
                </h3>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E] block mb-2">
                  {t.values.visionTitle}
                </span>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {t.values.vision}
                </p>
              </div>
            </div>

            {/* The 4 Core Values Grid */}
            <h3 className="text-lg font-bold text-[#0E1726] uppercase tracking-wider text-center mb-6">
              {t.values.coreValuesTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {t.values.list.map((val, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-6 hover:border-[#0E1726]/40 transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-[#D9531E] block mb-2">
                    0{index + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#0E1726] mb-2">
                    {val.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
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
        <section id="lideranca" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.leadership.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.leadership.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.leadership.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              {t.leadership.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#D9531E] uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-bold text-[#0E1726] mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* NDA & Confidentiality Commitment Box */}
            <div className="max-w-4xl mx-auto rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#0E1726] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                §
              </span>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0E1726] mb-1">
                  {t.leadership.confidentiality.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {t.leadership.confidentiality.desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: FAQ (AS 12 PERGUNTAS DO PRD)                                  */}
        {/* ========================================================================= */}
        <section id="faq" className="py-20 sm:py-28 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {t.faq.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0E1726] mt-2 mb-3">
                {t.faq.title}
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              {t.faq.items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left text-[#0E1726] hover:text-[#D9531E] transition-colors font-semibold text-sm sm:text-base"
                  >
                    <span>{item.q}</span>
                    <span className="ml-4 text-base font-bold text-[#D9531E] font-mono flex-shrink-0">
                      {activeFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-5 pt-0 border-t border-[#E2E8F0]/60 text-xs sm:text-sm text-[#475569] leading-relaxed">
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
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#0E1726] bg-[#0E1726] text-white p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
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
                  className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-lg transition-all uppercase"
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
