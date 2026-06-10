'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import Image from 'next/image';

export default function Home() {
  const { lang, t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Header onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-grow pt-24 pb-16">
        {/* SECTION 1: HERO SECTION */}
        <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-brand-bg via-brand-blue/20 to-brand-bg">
          {/* Column Watermark Background element */}
          <div className="absolute right-0 top-1/4 -translate-y-1/2 w-1/3 h-[60%] opacity-15 pointer-events-none select-none">
            <Image
              src="/watermarked_img_12559427289499035314.png"
              alt="Watermark Column"
              fill
              className="object-contain object-right"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-brand-text leading-tight">
                  {t.hero.headline}
                </h1>
                <p className="text-lg sm:text-xl text-brand-text-mute max-w-xl leading-relaxed">
                  {t.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="px-8 py-4 text-center text-sm font-bold tracking-wide text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    {t.hero.ctaPrimary}
                  </button>
                  <a
                    href="#how-we-help"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-brand-text hover:text-brand-orange border border-brand-text-mute/30 hover:border-brand-orange rounded-md transition-all"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>

              {/* Grid Images column */}
              <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <Image
                        src="/watermarked_img_13730537141133749028.png"
                        alt="Home Services Operational Office"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
                    </div>
                    <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-bg opacity-80" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <span className="text-brand-orange font-bold text-lg sm:text-xl">HVAC & Plumbing</span>
                        <span className="text-xs text-brand-text-mute uppercase tracking-widest">Active Dispatch</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-blue opacity-90" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <span className="text-brand-text font-bold text-lg sm:text-xl">Roofing & Electrical</span>
                        <span className="text-xs text-brand-text-mute uppercase tracking-widest">Operation Review</span>
                      </div>
                    </div>
                    <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden border border-brand-blue shadow-md group">
                      <Image
                        src="/chatgpt_image_09_42_29.png"
                        alt="Service Technician dispatch"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-blue/40 mix-blend-multiply" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TRUST STRIP */}
        <section className="bg-brand-blue/30 border-y border-brand-blue/50 py-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange">
              {t.trustStrip.title}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {t.trustStrip.sectors.map((sector, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span className="text-xs sm:text-sm font-medium tracking-wide text-brand-text-mute">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEM SECTION */}
        <section id="operational-leaks" className="py-20 sm:py-28 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-4 text-brand-text">
                {t.problem.title}
              </h2>
              <p className="text-brand-text-mute text-base sm:text-lg">
                {t.problem.subtitle}
              </p>
            </div>

            <div className="bg-brand-blue/20 border border-brand-blue rounded-xl p-6 sm:p-10 space-y-6">
              {t.problem.items.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-bold text-xs mt-1">
                    !
                  </span>
                  <p className="text-brand-text-mute text-base sm:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: REVENUE LEAK JOURNEY */}
        <section id="the-funnel" className="py-20 sm:py-28 bg-brand-blue/5 border-y border-brand-blue/20 relative">
          {/* Subtle watermark background 2 */}
          <div className="absolute left-0 bottom-1/4 w-1/4 h-[50%] opacity-10 pointer-events-none select-none">
            <Image
              src="/watermarked_img_13730537141133749028.png"
              alt="Watermark Column"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-brand-text mb-4">
                {t.funnel.title}
              </h2>
              <p className="text-brand-text-mute text-base sm:text-lg max-w-2xl mx-auto">
                {t.funnel.subtitle}
              </p>
            </div>

            {/* Horizontal Timeline on Desktop / Vertical on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
              {/* Connector line for desktop */}
              <div className="absolute top-[42px] left-[5%] right-[5%] h-0.5 bg-brand-blue/50 hidden md:block z-0" />

              {t.funnel.stages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left relative z-10 group">
                  {/* Circle number */}
                  <div className="w-16 h-16 rounded-full bg-brand-blue border-2 border-brand-orange flex items-center justify-center text-brand-orange font-bold text-lg mb-4 shadow-md group-hover:scale-105 transition-transform">
                    {index + 1}
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-serif font-bold text-brand-text mb-1">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-brand-text-mute/80 uppercase tracking-widest mb-3">
                    {stage.desc}
                  </p>
                  <div className="w-full bg-brand-orange/10 border border-brand-orange/30 rounded px-3 py-2 text-xs text-brand-orange">
                    {stage.leak}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PROCESS */}
        <section id="how-we-help" className="py-20 sm:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-brand-text mb-4">
                {t.process.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {t.process.steps.map((step, index) => (
                <div key={index} className="bg-brand-blue/15 border border-brand-blue/40 rounded-xl p-6 relative group hover:border-brand-orange/40 transition-colors">
                  <div className="text-4xl font-serif font-black text-brand-orange/30 mb-4 group-hover:text-brand-orange/60 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-text-mute leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: BENEFITS */}
        <section id="results" className="py-20 sm:py-28 bg-brand-blue/5 border-y border-brand-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-brand-text mb-4">
                {t.benefits.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.benefits.cards.map((card, index) => (
                <div key={index} className="bg-brand-bg border border-brand-blue rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded bg-brand-orange/15 flex items-center justify-center text-brand-orange font-bold mb-4">
                    ✓
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-text mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-brand-text-mute leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: ADVISOR PROFILE */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue/15 border border-brand-blue rounded-xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Trajectory Info */}
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-text">
                  {t.advisor.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-text-mute leading-relaxed">
                  {t.advisor.bio}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="text-xs uppercase tracking-widest text-brand-orange font-bold">
                    Advisor Trajectory
                  </span>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-mute hover:text-brand-orange border-b border-brand-text-mute/30 hover:border-brand-orange transition-colors"
                  >
                    <span>Connect on LinkedIn</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ & FINAL CTA */}
        <section id="faq" className="py-20 sm:py-28 bg-brand-blue/5 border-t border-brand-blue/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* FAQ */}
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-brand-text mb-12">
                {t.faq.title}
              </h2>
              <div className="space-y-4">
                {t.faq.items.map((item, index) => (
                  <div
                    key={index}
                    className="border border-brand-blue rounded-lg bg-brand-bg overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left text-brand-text hover:text-brand-orange transition-colors font-serif font-bold text-base sm:text-lg"
                    >
                      <span>{item.q}</span>
                      <span className="ml-4 flex-shrink-0 text-brand-orange">
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
              <h3 className="text-2xl sm:text-4xl font-serif font-black text-brand-text leading-tight">
                {t.ctaSection.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-text-mute max-w-xl mx-auto">
                {t.ctaSection.subtitle}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 text-sm font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-lg transition-colors"
                >
                  {t.ctaSection.cta}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
