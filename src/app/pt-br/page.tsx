'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HeaderPt } from '@/components/HeaderPt';
import { FooterPt } from '@/components/FooterPt';
import { ContactFormPt } from '@/components/ContactFormPt';

export default function PtBrHome() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  React.useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    try {
      localStorage.setItem('consiglieri_lang', 'pt');
    } catch {}
    document.cookie = 'consiglieri_lang=pt;path=/;max-age=31536000;SameSite=Lax';
  }, []);

  const openContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsContactOpen(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const tecnicalServices = [
    {
      title: 'Laudos e Inspeções Técnicas',
      badge: 'Vistorias & Pareceres',
      description:
        'Avaliações técnicas criteriosas e documentação de conformidade para máquinas, equipamentos e instalações industriais. Identificação de não conformidades com embasamento técnico.',
      points: [
        'Vistorias em campo e diagnósticos',
        'Avaliação de máquinas e equipamentos',
        'Relatórios e pareceres técnicos conclusivos'
      ]
    },
    {
      title: 'NR-11 — Transporte e Movimentação',
      badge: 'Armazenagem & Cargas',
      description:
        'Avaliações técnicas e documentação para pontes rolantes, talhas, empilhadeiras, elevadores de carga e sistemas de movimentação de materiais na indústria.',
      points: [
        'Inspeções estruturais e mecânicas aplicáveis',
        'Verificação de dispositivos de segurança e fixação',
        'Documentação técnica para atendimento normativo'
      ]
    },
    {
      title: 'NR-12 — Segurança de Máquinas',
      badge: 'Proteção & Riscos',
      description:
        'Apreciação de riscos, identificação de requisitos normativos e especificações técnicas de adequação mecânica para garantir a integridade dos operadores.',
      points: [
        'Apreciação e mapeamento de riscos mecânicos',
        'Especificação de proteções físicas e enclausuramentos',
        'Relatórios técnicos para planos de adequação'
      ]
    },
    {
      title: 'NR-13 — Caldeiras e Vasos de Pressão',
      badge: 'Integridade & Pressão',
      description:
        'Inspeções de segurança periódicas e extraordinárias em caldeiras, vasos de pressão, reservatórios e tubulações industriais, conforme requisitos normativos.',
      points: [
        'Acompanhamento de testes e inspeções visuais/instrumentadas',
        'Reconstituição de prontuários e memórias de cálculo',
        'Determinação de PMTA e relatórios de conformidade'
      ]
    },
    {
      title: 'PMOC / Climatização',
      badge: 'Qualidade do Ar & Lei 13.589',
      description:
        'Elaboração e acompanhamento do Plano de Manutenção, Operação e Controle para sistemas de climatização e ar-condicionado em edifícios, indústrias e comércios.',
      points: [
        'Inventário técnico detalhado de equipamentos',
        'Cronogramas de rotinas preventivas e higienização',
        'Evidências comprobatórias para vigilância sanitária'
      ]
    },
    {
      title: 'Projetos e Desenhos Técnicos',
      badge: 'Modelagem & CAD',
      description:
        'Modelagem 3D, detalhamento mecânico em 2D/CAD, projetos para fabricação, retrofit de componentes e documentação técnica industrial.',
      points: [
        'Desenhos mecânicos para fabricação e montagem',
        'Modelagem e simulações conceituais',
        'Digitalização e atualização de documentação legada'
      ]
    },
    {
      title: 'Planos de Manutenção Preventiva',
      badge: 'Sistemática & Rotinas',
      description:
        'Estruturação de planos práticos de manutenção preventiva e preditiva, rotinas de inspeção diária/periódica e matriz de criticidade operacional de ativos.',
      points: [
        'Cronogramas e rotinas sistemáticas por ativo',
        'Classificação por criticidade de impacto na produção',
        'Procedimentos operacionais padrão (POPs)'
      ]
    },
    {
      title: 'Adequações Técnicas e Normativas',
      badge: 'Correção de Gaps',
      description:
        'Identificamos as lacunas entre as exigências normativas e a operação real, estruturando planos viáveis de adequação e acompanhando a evolução das melhorias.',
      points: [
        'Mapeamento de desvios técnicos e riscos prioritários',
        'Roteiro faseado de implementação técnica',
        'Acompanhamento e validação das entregas'
      ]
    },
    {
      title: 'ART e Responsabilidade Técnica',
      badge: 'CREA / CONFEA',
      description:
        'Registro da responsabilidade técnica correspondente aos serviços de engenharia executados, conforme as atribuições profissionais e exigências legais aplicáveis.',
      points: [
        'Anotação de Responsabilidade Técnica regulamentar',
        'Emissão vinculada a escopos com atribuição profissional',
        'Segurança jurídica e técnica para sua empresa'
      ]
    }
  ];

  const operationalServices = [
    {
      title: 'Diagnóstico Operacional Industrial',
      badge: 'Mapeamento & Gargalos',
      description:
        'Auditoria aprofundada dos fluxos de manutenção, processos produtivos e pontos de falha recorrentes. Uma visão externa orientada a eliminar desperdícios e paradas.',
      deliverables: 'Mapeamento de gargalos, riscos críticos e matriz de oportunidades imediatas.'
    },
    {
      title: 'Gestão da Manutenção',
      badge: 'Confiabilidade & Indicadores',
      description:
        'Transição do modo reativo (apagar incêndios) para uma gestão previsível. Estruturação do fluxo entre preventiva e corretiva, dimensionamento de backlog e acompanhamento de MTBF e MTTR.',
      deliverables: 'Painel de indicadores, regras de atendimento de chamados e controle de backlog.'
    },
    {
      title: 'Gestão de Ativos',
      badge: 'Ciclo de Vida & Criticidade',
      description:
        'Cadastramento técnico, matriz de criticidade de máquinas e estratégias de ciclo de vida. Priorize investimentos e intervenções onde o impacto no negócio é decisivo.',
      deliverables: 'Inventário técnico completo, classificação ABC e plano de longevidade de ativos.'
    },
    {
      title: 'Governança Técnica & Gestão de Terceiros',
      badge: 'SLAs & Auditoria',
      description:
        'Auditoria rigorosa de contratos técnicos e fornecedores de serviços. Definição de níveis de serviço (SLAs), checagem de evidências e garantia de padrão nas entregas contratadas.',
      deliverables: 'Critérios de homologação, auditoria de laudos/serviços e gestão de conformidade.'
    },
    {
      title: 'Melhoria Contínua de Processos',
      badge: 'RCA • FMEA • PDCA',
      description:
        'Aplicação de metodologias consagradas de engenharia de confiabilidade para erradicar causas fundamentais de falhas repetitivas e padronizar procedimentos.',
      deliverables: 'Análise de falhas (RCA), planos de ação 5W2H e padronização operacional.'
    }
  ];

  const faqItems = [
    {
      q: 'Qual o escopo de atuação técnica da Consiglieri?',
      a: 'Atuamos na intersecção entre Engenharia Técnica Mecânica (laudos, inspeções, NR-11, NR-12, NR-13, PMOC, projetos e ART) e Engenharia Operacional (diagnóstico de processos, gestão de manutenção, indicadores e governança). Todos os serviços são executados em estrita observância às atribuições profissionais vigentes.'
    },
    {
      q: 'Como funciona a emissão de ART (Anotação de Responsabilidade Técnica)?',
      a: 'A ART é emitida para registrar a responsabilidade técnica pelos serviços de engenharia executados, de acordo com as exigências legais do CREA/CONFEA e as competências e atribuições regulamentares do profissional responsável.'
    },
    {
      q: 'Minha empresa já tem uma equipe de manutenção. Como a Consiglieri agrega valor?',
      a: 'Não substituímos sua equipe interna de manutenção; estruturamos o método, os planos preventivos, a governança e a segurança técnica. Atuamos como parceiro estratégico para que seu time atue com previsibilidade, métricas claras e total conformidade com as normas regulamentadoras.'
    },
    {
      q: 'Como é feito o primeiro atendimento e diagnóstico?',
      a: 'Iniciamos com uma reunião preliminar de diagnóstico para compreender o cenário operacional, inventário de ativos, pendências normativas e principais dores técnicas. A partir dessa análise, apresentamos uma proposta sob medida com escopo, prazos e entregáveis detalhados.'
    }
  ];

  return (
    <>
      <HeaderPt onOpenContact={() => openContactWithService()} />

      <main className="flex-grow pt-24 pb-16">
        {/* SECTION 1: HERO SECTION */}
        <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-brand-bg via-brand-blue/20 to-brand-bg">
          {/* Subtle column watermark */}
          <div className="absolute right-0 top-1/4 -translate-y-1/2 w-1/3 h-[60%] opacity-15 pointer-events-none select-none">
            <Image
              src="/watermarked_img_12559427289499035314.png"
              alt="Marca d'água técnica"
              fill
              className="object-contain object-right"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/60 border border-brand-orange/40 text-brand-orange text-xs uppercase tracking-widest font-semibold">
                  <span>Engenharia Mecânica & Confiabilidade Operacional</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-black tracking-tight text-brand-text leading-tight sm:leading-snug">
                  Engenharia para transformar problemas técnicos em operações mais estruturadas.
                </h1>

                <p className="text-base sm:text-lg text-brand-text-mute max-w-xl leading-relaxed">
                  Laudos, adequações, manutenção, climatização e diagnóstico operacional — com uma abordagem técnica orientada à realidade da sua operação.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => openContactWithService()}
                    className="px-8 py-4 text-center text-sm font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 uppercase"
                  >
                    Solicitar Diagnóstico
                  </button>
                  <a
                    href="#engenharia-tecnica"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider text-brand-text hover:text-brand-orange border border-brand-text-mute/30 hover:border-brand-orange rounded-md transition-all uppercase"
                  >
                    Conhecer Serviços de Engenharia
                  </a>
                </div>

                {/* Sub-badge */}
                <div className="pt-2 flex items-center gap-6 text-xs text-brand-text-mute/80">
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand-orange font-bold">✓</span> Atribuição CREA
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand-orange font-bold">✓</span> Emissão de ART
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand-orange font-bold">✓</span> Rigor Normativo
                  </div>
                </div>
              </div>

              {/* Graphic / Visual Column */}
              <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <Image
                        src="/dispatcher.png"
                        alt="Planejamento e Engenharia Operacional"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-blue/40 mix-blend-multiply" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <span className="text-brand-orange font-bold text-sm sm:text-base">Engenharia Operacional</span>
                        <span className="text-[11px] text-brand-text uppercase tracking-wider">Governança & Processos</span>
                      </div>
                    </div>
                    <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <Image
                        src="/hvac_technician.png"
                        alt="PMOC e Climatização Industrial"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-90" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <span className="text-brand-orange font-bold text-sm sm:text-base">PMOC & Climatização</span>
                        <span className="text-[11px] text-brand-text uppercase tracking-wider">Lei 13.589/2018</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <Image
                        src="/electrician.png"
                        alt="Adequação e Segurança em Máquinas"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-90" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <span className="text-brand-text font-bold text-sm sm:text-base">NR-12 & NR-11</span>
                        <span className="text-[11px] text-brand-orange uppercase tracking-wider">Segurança & Laudos</span>
                      </div>
                    </div>
                    <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <Image
                        src="/roofing.png"
                        alt="Inspeções Estruturais e NR-13"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-blue/40 mix-blend-multiply" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <span className="text-brand-orange font-bold text-sm sm:text-base">NR-13 & Integridade</span>
                        <span className="text-[11px] text-brand-text uppercase tracking-wider">Vasos & Caldeiras</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TRUST & SCOPE STRIP */}
        <section className="bg-brand-blue/30 border-y border-brand-blue/50 py-5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange">
              Pilares de Atuação Técnica
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-brand-text-mute">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Laudos & Vistorias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>NR-11 • NR-12 • NR-13</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>PMOC & Climatização</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Gestão da Manutenção</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Diagnóstico Operacional</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEMS SECTION */}
        <section className="py-20 sm:py-28 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Realidade Industrial & Comercial
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight mt-2 mb-4 text-brand-text">
                Onde as Operações Enfrentam Riscos e Ineficiências?
              </h2>
              <p className="text-brand-text-mute text-sm sm:text-base max-w-2xl mx-auto">
                Muitas empresas acumulam passivos técnicos, autuações e paradas não programadas por falta de um método estruturado de engenharia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-blue/20 border border-brand-blue rounded-xl p-6 flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-bold text-sm">
                  !
                </span>
                <div>
                  <h3 className="font-serif font-bold text-base text-brand-text mb-1">
                    Documentação desatualizada em fiscalizações
                  </h3>
                  <p className="text-sm text-brand-text-mute leading-relaxed">
                    Máquinas e instalações sem laudos técnicos atualizados, prontuários inexistentes e risco iminente de multas e interdições trabalhistas (NR-11, NR-12, NR-13).
                  </p>
                </div>
              </div>

              <div className="bg-brand-blue/20 border border-brand-blue rounded-xl p-6 flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-bold text-sm">
                  !
                </span>
                <div>
                  <h3 className="font-serif font-bold text-base text-brand-text mb-1">
                    Climatização sem PMOC estruturado
                  </h3>
                  <p className="text-sm text-brand-text-mute leading-relaxed">
                    Ar-condicionado e sistemas de tratamento de ar operando sem plano formal, sem controle microbiológico e em desacordo com as exigências da Lei 13.589/2018.
                  </p>
                </div>
              </div>

              <div className="bg-brand-blue/20 border border-brand-blue rounded-xl p-6 flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-bold text-sm">
                  !
                </span>
                <div>
                  <h3 className="font-serif font-bold text-base text-brand-text mb-1">
                    Cultura de manutenção reativa
                  </h3>
                  <p className="text-sm text-brand-text-mute leading-relaxed">
                    Equipe focada apenas em apagar incêndios e trocar peças pós-quebra, provocando paradas imprevistas na produção e gastos descontrolados com emergências.
                  </p>
                </div>
              </div>

              <div className="bg-brand-blue/20 border border-brand-blue rounded-xl p-6 flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-bold text-sm">
                  !
                </span>
                <div>
                  <h3 className="font-serif font-bold text-base text-brand-text mb-1">
                    Laudos engavetados sem plano de ação
                  </h3>
                  <p className="text-sm text-brand-text-mute leading-relaxed">
                    Empresas que contratam pareceres técnicos apenas para cumprir burocracia, mas não recebem um roteiro viável para implementar as adequações na prática.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PILLAR A - ENGENHARIA TÉCNICA */}
        <section
          id="engenharia-tecnica"
          className="py-20 sm:py-28 bg-brand-blue/5 border-y border-brand-blue/20 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Pilar 1
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-brand-text mt-2 mb-4">
                Engenharia Técnica
              </h2>
              <p className="text-brand-text-mute text-base sm:text-lg max-w-3xl mx-auto">
                Conformidade com normas regulamentadoras, segurança estrutural de máquinas e equipamentos, vistorias técnicas e projetos com respaldo legal.
              </p>
            </div>

            {/* Grid of Technical Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tecnicalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-brand-bg border border-brand-blue/60 rounded-xl p-6 shadow-md hover:border-brand-orange/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-0.5 rounded">
                        {service.badge}
                      </span>
                      <span className="text-xs text-brand-text-mute/60 font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-brand-text mb-3 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-brand-text-mute leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-6 border-t border-brand-blue/30 pt-3">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-brand-text-mute flex items-start gap-2">
                          <span className="text-brand-orange text-xs">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openContactWithService(service.title)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-brand-text hover:text-brand-orange border-t border-brand-blue/30 pt-3 transition-colors"
                  >
                    <span>Solicitar Consulta Técnica</span>
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-brand-text-mute/80">
              * Serviços executados conforme atribuições profissionais, características do equipamento e requisitos técnicos aplicáveis.
            </div>
          </div>
        </section>

        {/* SECTION 5: PILLAR B - ENGENHARIA OPERACIONAL */}
        <section
          id="engenharia-operacional"
          className="py-20 sm:py-28 relative"
        >
          {/* Column Watermark */}
          <div className="absolute left-0 bottom-1/4 w-1/4 h-[50%] opacity-10 pointer-events-none select-none">
            <Image
              src="/watermarked_img_13730537141133749028.png"
              alt="Marca d'água"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Pilar 2 — O Diferencial Consiglieri
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-brand-text mt-2 mb-4">
                Engenharia Operacional
              </h2>
              <p className="text-brand-text-mute text-base sm:text-lg max-w-3xl mx-auto">
                Não vendemos apenas laudos engavetados. Conectamos os requisitos de engenharia à rotina do chão de fábrica, otimizando fluxos de trabalho, gestão de ativos e indicadores de confiabilidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operationalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-brand-blue/15 border border-brand-blue rounded-xl p-6 shadow-md hover:border-brand-orange/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-0.5 rounded">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-brand-text mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-brand-text-mute leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="bg-brand-bg/40 border border-brand-blue/40 rounded p-3 mb-6">
                      <span className="block text-[11px] uppercase tracking-wider font-semibold text-brand-orange mb-1">
                        Entregável Chave:
                      </span>
                      <p className="text-xs text-brand-text leading-normal">
                        {service.deliverables}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => openContactWithService(service.title)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-brand-text hover:text-brand-orange border-t border-brand-blue/30 pt-3 transition-colors"
                  >
                    <span>Estruturar Este Serviço</span>
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: COMO ATUAMOS (HOW WE WORK) */}
        <section
          id="como-atuamos"
          className="py-20 sm:py-28 bg-brand-blue/5 border-y border-brand-blue/20 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Metodologia Estruturada
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-brand-text mt-2 mb-4">
                Como Atuamos
              </h2>
              <p className="text-brand-text-mute text-base sm:text-lg max-w-2xl mx-auto">
                Do levantamento inicial à governança contínua, nossa abordagem é pragmática e voltada à resolução do problema.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-brand-bg border border-brand-blue rounded-xl p-6 relative group hover:border-brand-orange/40 transition-colors">
                <div className="text-3xl font-serif font-black text-brand-orange/40 mb-3">
                  01
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-text mb-2">
                  Diagnóstico Inicial
                </h3>
                <p className="text-sm text-brand-text-mute leading-relaxed">
                  Compreensão do cenário operacional, levantamento de ativos, histórico de ocorrências e priorização de riscos normativos e operacionais.
                </p>
              </div>

              <div className="bg-brand-bg border border-brand-blue rounded-xl p-6 relative group hover:border-brand-orange/40 transition-colors">
                <div className="text-3xl font-serif font-black text-brand-orange/40 mb-3">
                  02
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-text mb-2">
                  Análise Técnica
                </h3>
                <p className="text-sm text-brand-text-mute leading-relaxed">
                  Vistorias em campo, auditoria documental, medições necessárias e verificação rigorosa de requisitos técnicos e normativos.
                </p>
              </div>

              <div className="bg-brand-bg border border-brand-blue rounded-xl p-6 relative group hover:border-brand-orange/40 transition-colors">
                <div className="text-3xl font-serif font-black text-brand-orange/40 mb-3">
                  03
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-text mb-2">
                  Recomendação & Ação
                </h3>
                <p className="text-sm text-brand-text-mute leading-relaxed">
                  Emissão de pareceres conclusivos e elaboração de um plano de adequação viável, com priorização clara e cronograma de implementação.
                </p>
              </div>

              <div className="bg-brand-bg border border-brand-blue rounded-xl p-6 relative group hover:border-brand-orange/40 transition-colors">
                <div className="text-3xl font-serif font-black text-brand-orange/40 mb-3">
                  04
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-text mb-2">
                  Acompanhamento
                </h3>
                <p className="text-sm text-brand-text-mute leading-relaxed">
                  Suporte técnico durante as adequações, validação de evidências, emissão da ART cabível e governança para sustentação dos resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SOBRE & CREDIBILIDADE (CREDIBILITY & PROFILE) */}
        <section id="sobre" className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue/15 border border-brand-blue rounded-xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-grow space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-orange font-bold">
                  <span>Fundamentação Técnica & Trajetória</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-text">
                  Engenharia Pragmática para a Realidade da Sua Operação
                </h3>
                <p className="text-sm sm:text-base text-brand-text-mute leading-relaxed">
                  A Consiglieri Solutions nasceu da experiência direta em engenharia mecânica, gestão técnica de manutenção, projetos industriais e governança operacional. Nosso compromisso é entregar clareza técnica e soluções realizáveis, distanciando-nos de burocracias vazias e focando na segurança dos processos, conformidade legal e disponibilidade dos seus ativos.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <a
                    href="https://www.linkedin.com/in/joseaugustofalavinha/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-mute hover:text-brand-orange border-b border-brand-text-mute/30 hover:border-brand-orange transition-colors"
                  >
                    <span>Conectar no LinkedIn</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <span className="text-xs text-brand-text-mute/60 hidden sm:inline">•</span>
                  <span className="text-xs text-brand-text-mute/80">
                    Atendimento em todo o território nacional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ & FINAL CTA */}
        <section className="py-20 sm:py-28 bg-brand-blue/5 border-t border-brand-blue/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* FAQ */}
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-brand-text mb-12">
                Dúvidas Frequentes
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-brand-blue rounded-lg bg-brand-bg overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left text-brand-text hover:text-brand-orange transition-colors font-serif font-bold text-base sm:text-lg"
                    >
                      <span>{item.q}</span>
                      <span className="ml-4 flex-shrink-0 text-brand-orange font-mono">
                        {activeFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === index && (
                      <div className="p-5 pt-0 border-t border-brand-blue/30 text-sm sm:text-base text-brand-text-mute leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA block */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-bg border border-brand-orange/30 rounded-xl p-8 sm:p-12 text-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Atendimento Técnico Direto
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-black text-brand-text leading-tight">
                Estruture a Engenharia da Sua Empresa com Rigor Técnico e Visão Prática.
              </h3>
              <p className="text-sm sm:text-base text-brand-text-mute max-w-xl mx-auto">
                Solicite uma avaliação inicial de necessidades. Analisaremos seu escopo de laudos, conformidade ou governança de manutenção.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openContactWithService()}
                  className="px-8 py-4 text-sm font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-lg transition-colors uppercase"
                >
                  Solicitar Diagnóstico Técnico
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterPt />

      <ContactFormPt
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultNeed={selectedService}
      />
    </>
  );
}
