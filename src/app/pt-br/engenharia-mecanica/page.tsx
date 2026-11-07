'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderInstitutional } from '@/components/HeaderInstitutional';
import { FooterInstitutional } from '@/components/FooterInstitutional';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { BrandSymbol } from '@/components/BrandLogo';
import {
  mechanicalCategories,
  artExplanations,
  technicalResponsibility,
} from '@/data/mechanicalEngineering';

export default function MechanicalEngineeringPage() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>('maquinas-equipamentos');

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const handleOpenEmail = (categoryTitle?: string) => {
    const subject = encodeURIComponent(
      categoryTitle
        ? `[Engenharia Mecânica] Solicitação de Avaliação — ${categoryTitle}`
        : '[Engenharia Mecânica] Solicitação de Avaliação Técnica'
    );
    const body = encodeURIComponent(
      `Olá equipe de Engenharia da Consiglieri,\n\nGostaria de solicitar uma avaliação técnica para minha empresa.\n\nDados da Solicitação:\n- Nome do Contato:\n- Empresa / Localidade:\n- Categoria / Serviço de Interesse: ${categoryTitle || 'A definir'}\n- Descrição da necessidade ou do equipamento:\n- Telefone / WhatsApp:\n\nAguardamos retorno para alinharmos os próximos passos.\n\nAtenciosamente,`
    );
    window.location.href = `mailto:contact@consiglieri.solutions?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#070C18] text-[#F8FAFC] min-h-screen flex flex-col antialiased selection:bg-[#D9531E]/30 selection:text-white">
      <HeaderInstitutional
        lang="pt"
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      <main className="flex-grow pt-24 pb-16">
        {/* ========================================================================= */}
        {/* HERO SECTION: ENGENHARIA MECÂNICA & SERVIÇOS TÉCNICOS                     */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none hidden lg:block">
            <BrandSymbol size={800} lineColor="#FFFFFF" dotColor="#D9531E" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb / Navigation helper */}
            <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
              <Link href="/pt-br/" className="hover:text-white transition-colors">
                Início
              </Link>
              <span>/</span>
              <span className="text-[#D9531E] font-medium">Engenharia Mecânica</span>
            </div>

            <div className="max-w-3xl space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1626] border border-[#1E293B]">
                <span className="w-2 h-2 rounded-full bg-[#D9531E] animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-[#F8FAFC]">
                  Serviços Técnicos com Responsabilidade Profissional CREA-SP
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-sans font-black tracking-tight text-[#F8FAFC] leading-[1.14]">
                Engenharia Mecânica — Serviços Técnicos
              </h1>

              {/* Presentation Statement (PRD Section 6) */}
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal">
                A Consiglieri conecta empresas a serviços especializados de Engenharia Mecânica, com responsabilidade técnica de profissional registrado no CREA-SP.
              </p>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal">
                Atuamos na avaliação de máquinas, equipamentos e instalações, elaboração de projetos, inspeções e documentação técnica, conforme as atribuições profissionais e os requisitos aplicáveis a cada atividade.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-3">
                <button
                  onClick={() => handleOpenEmail()}
                  className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-lg shadow-[#D9531E]/20 transition-all uppercase"
                >
                  Solicite uma avaliação técnica
                </button>
                <a
                  href="#categorias"
                  className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#F8FAFC] hover:text-[#D9531E] bg-[#0E1626] hover:bg-[#141E33] border border-[#1E293B] rounded-lg shadow-xs transition-all uppercase"
                >
                  Ver Catálogo de Serviços
                </a>
              </div>

              {/* Trust Callouts */}
              <div className="pt-6 border-t border-[#1E293B] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-start gap-2 text-xs text-[#94A3B8]">
                  <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                  <span>Engenheiro habilitado registrado no CREA-SP</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#94A3B8]">
                  <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                  <span>Emissão de ART por atividade contratada</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#94A3B8]">
                  <span className="text-[#D9531E] font-bold mt-0.5">✓</span>
                  <span>Linguagem acessível e entregáveis objetivos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: AS 7 CATEGORIAS DE SERVIÇOS (PRD SECTION 6.1)                    */}
        {/* ========================================================================= */}
        <section id="categorias" className="py-20 bg-[#070C18] border-y border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                Catálogo Organizado
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#F8FAFC] mt-2 mb-3">
                Serviços Especializados por Categoria
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                Encontre o serviço adequado para a sua empresa sem complicações técnicas. Clique nas categorias para ver o escopo, problemas resolvidos e entregáveis.
              </p>
            </div>

            {/* 7 Category Cards Grid */}
            <div className="space-y-6 max-w-5xl mx-auto">
              {mechanicalCategories.map((cat) => {
                const isOpen = openCategory === cat.id;
                return (
                  <div
                    key={cat.id}
                    className="rounded-2xl border border-[#1E293B] bg-[#0E1626] overflow-hidden transition-all shadow-md"
                  >
                    {/* Category Header Button */}
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full p-6 sm:p-7 flex items-center justify-between text-left hover:bg-[#141E33]/40 transition-colors gap-4"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-[#070C18] border border-[#1E293B] flex items-center justify-center text-[#D9531E] font-black font-mono text-base flex-shrink-0 shadow-inner">
                          {cat.letter}
                        </span>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#D9531E]">
                            {cat.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 leading-relaxed">
                            {cat.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="hidden sm:inline-block text-xs font-semibold text-[#D9531E]">
                          {isOpen ? 'Recolher' : 'Ver Serviços'}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-[#141E33] border border-[#1E293B] flex items-center justify-center text-[#D9531E] font-bold text-sm">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                    </button>

                    {/* Expandable Services List */}
                    {isOpen && (
                      <div className="p-6 sm:p-8 pt-2 border-t border-[#1E293B]/80 space-y-6 bg-[#070C18]/40">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {cat.services.map((svc, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-xl border border-[#1E293B] bg-[#0E1626] p-5 flex flex-col justify-between hover:border-[#D9531E]/30 transition-colors"
                            >
                              <div>
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <h4 className="text-base font-bold text-[#F8FAFC] leading-snug">
                                    {svc.name}
                                  </h4>
                                  {svc.artRequired && (
                                    <span className="text-[10px] font-mono font-bold uppercase text-[#D9531E] bg-[#D9531E]/10 px-2 py-0.5 rounded flex-shrink-0">
                                      ART CREA
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                                  {svc.simpleDesc}
                                </p>

                                <div className="space-y-2 pt-3 border-t border-[#1E293B] text-[11px]">
                                  <div>
                                    <span className="font-bold text-[#F8FAFC] block mb-0.5">
                                      Problema que resolve:
                                    </span>
                                    <span className="text-[#94A3B8] leading-relaxed block">
                                      {svc.problemSolved}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-[#F8FAFC] block mb-0.5">
                                      Entregável esperado:
                                    </span>
                                    <span className="text-[#94A3B8] leading-relaxed block">
                                      {svc.expectedDeliverable}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Category Level CTA */}
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1E293B]">
                          <span className="text-xs text-[#94A3B8]">
                            Precisa de atendimento em <strong>{cat.title}</strong>?
                          </span>
                          <button
                            onClick={() => handleOpenEmail(cat.title)}
                            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] rounded-lg shadow-sm transition-all uppercase"
                          >
                            Solicitar Avaliação Desta Categoria
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Regulatory Notice (PRD Section 6) */}
            <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-[#1E293B] bg-[#0E1626] p-6 text-xs text-[#94A3B8] leading-relaxed">
              <span className="font-bold text-[#F8FAFC] block mb-1">
                Nota de Conformidade Regulatória:
              </span>
              A relação acima constitui o catálogo de serviços técnicos prestados sob responsabilidade profissional de Engenheiro Mecânico habilitado. A publicação e a contratação individual de cada serviço respeitam as atribuições profissionais, os requisitos regulamentares e a capacitação técnica aplicável perante o CREA-SP.
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: LAUDOS, PARECERES E ART (PRD SECTION 7)                          */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#070C18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9531E]">
                {artExplanations.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#F8FAFC] mt-2 mb-3">
                {artExplanations.title}
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                {artExplanations.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {artExplanations.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#1E293B] bg-[#0E1626] p-7 flex flex-col justify-between shadow-xs hover:border-[#D9531E]/40 transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9531E] bg-[#D9531E]/15 px-3 py-1 rounded-full inline-block mb-3">
                      {card.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1E293B] bg-[#070C18]/50 -mx-7 -mb-7 p-5 rounded-b-2xl">
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      {card.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: IDENTIFICAÇÃO DO RESPONSÁVEL TÉCNICO (PRD SECTION 10)            */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#070C18] border-t border-[#1E293B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#1E293B] bg-[#0E1626] p-8 sm:p-12 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#141E33] border border-[#1E293B] flex items-center justify-center text-[#D9531E] font-bold text-lg">
                  §
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E]">
                    {technicalResponsibility.sectionTag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                    {technicalResponsibility.title}
                  </h3>
                </div>
              </div>

              <div className="rounded-xl border border-[#1E293B] bg-[#070C18] p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E293B] pb-3 mb-3">
                  <div>
                    <span className="text-xs text-[#94A3B8] uppercase block">Profissional Habilitado</span>
                    <h4 className="text-lg font-bold text-[#F8FAFC]">
                      {technicalResponsibility.engineerTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D9531E] bg-[#D9531E]/10 px-3 py-1 rounded-full w-fit">
                    {technicalResponsibility.engineerReg}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {technicalResponsibility.statementText}
                </p>
              </div>

              <p className="text-xs text-[#64748B] italic">
                {technicalResponsibility.governanceNote}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: FINAL CTA / CONVERSÃO (PRD SECTION 11)                           */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-24 bg-[#070C18]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#1E293B] bg-gradient-to-br from-[#0B132B] via-[#0E1626] to-[#070C18] text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute right-[-40px] top-[-40px] opacity-10 pointer-events-none">
                <BrandSymbol size={280} lineColor="#FFFFFF" dotColor="#D9531E" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#D9531E]">
                <span>✓</span> Atendimento Técnico Sob Medida
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Solicite uma Avaliação Técnica de Engenharia Mecânica
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Envie os detalhes da sua necessidade para nossa equipe. Avaliamos a viabilidade técnica, os requisitos normativos e apresentamos uma proposta transparente.
              </p>

              <div className="pt-2 flex flex-col items-center">
                <button
                  onClick={() => handleOpenEmail()}
                  className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-[#D9531E] hover:bg-[#B84014] active:bg-[#D9531E] rounded-lg shadow-xl shadow-[#D9531E]/25 transition-all uppercase"
                >
                  Solicite uma avaliação técnica
                </button>
                <span className="text-[11px] text-slate-400 mt-3">
                  E-mail institucional: contact@consiglieri.solutions • Atendimento confidencial sob NDA
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterInstitutional lang="pt" />

      <DiagnosticModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        lang="pt"
      />
    </div>
  );
}
