'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [challenge, setChallenge] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert(t.contactForm.validationAlert);
      return;
    }

    // Construct Mailto Link
    const subject = encodeURIComponent(`Consiglieri Assessment Request: ${challenge || 'General Inquiry'} - ${name}`);
    const bodyHeader = `Name: ${name}%0D%0AEmail: ${email}%0D%0APrimary Challenge: ${challenge || 'Not Selected'}%0D%0A%0D%0A--------------------------------%0D%0A%0D%0AMessage/Context:%0D%0A`;
    const bodyContent = encodeURIComponent(message);
    const fullBody = bodyHeader + bodyContent;

    alert(t.contactForm.successAlert);
    
    // Redirect to mailto link
    window.location.href = `mailto:contact@consiglieri.solutions?subject=${subject}&body=${fullBody}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl bg-brand-blue border border-brand-orange/30 p-6 sm:p-8 shadow-2xl animate-fade-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text-mute hover:text-brand-orange transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Content */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-text mb-2">
            {t.contactForm.title}
          </h3>
          <p className="text-sm text-brand-text-mute">
            {t.contactForm.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              {t.contactForm.nameLabel}
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-brand-bg/50 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
              required 
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              {t.contactForm.emailLabel}
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-brand-bg/50 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
              required 
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              {t.contactForm.needLabel}
            </label>
            <select 
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className="w-full bg-brand-blue border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
            >
              {t.contactForm.needs.map((n, i) => (
                <option key={i} value={i === 0 ? '' : n} className="bg-brand-blue">
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              {t.contactForm.messageLabel}
            </label>
            <textarea 
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-brand-bg/50 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              className="w-full py-3 px-4 text-center text-sm font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-md transition-colors"
            >
              {t.contactForm.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
