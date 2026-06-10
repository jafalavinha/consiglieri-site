'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-bg border-t border-brand-blue/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo-new.png"
            alt="Consiglieri Solutions Logo"
            width={150}
            height={45}
            className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Boundary Statement */}
        <div className="max-w-2xl mb-8">
          <h4 className="text-xs sm:text-sm uppercase tracking-wider text-brand-orange font-semibold mb-2">
            Engagement Boundary
          </h4>
          <p className="text-xs sm:text-sm text-brand-text-mute leading-relaxed">
            Consiglieri Solutions does not implement software systems, manage technician teams, or own project delivery. Our role is strictly to establish operational governance, audit execution protocols, and eliminate revenue leaks.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-brand-text-mute/60 border-t border-brand-blue/20 pt-8 w-full">
          &copy; {new Date().getFullYear()} Consiglieri Solutions. All rights reserved. | Operational Architecture for Home Services.
        </div>
      </div>
    </footer>
  );
};
