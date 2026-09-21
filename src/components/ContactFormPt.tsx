'use client';

import React, { useState } from 'react';

interface ContactFormPtProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNeed?: string;
}

export const ContactFormPt: React.FC<ContactFormPtProps> = ({
  isOpen,
  onClose,
  defaultNeed = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultNeed);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Por favor, preencha seu Nome e E-mail.');
      return;
    }

    const subject = encodeURIComponent(`Consiglieri - Solicitação de Diagnóstico: ${service || 'Geral'} - ${name}`);
    const bodyHeader = `Nome: ${name}%0D%0AE-mail: ${email}%0D%0AEmpresa: ${company || 'Não informada'}%0D%0ATelefone/WhatsApp: ${phone || 'Não informado'}%0D%0AServiço de Interesse: ${service || 'Não especificado'}%0D%0A%0D%0A--------------------------------%0D%0A%0D%0AMensagem / Contexto Operacional:%0D%0A`;
    const bodyContent = encodeURIComponent(message);
    const fullBody = bodyHeader + bodyContent;

    alert('Abrindo seu aplicativo de e-mail com as informações preenchidas...');
    window.location.href = `mailto:contact@consiglieri.solutions?subject=${subject}&body=${fullBody}`;
    onClose();
  };

  const engineeringServices = [
    'Selecione o serviço ou desafio principal...',
    'Laudos Técnicos e Inspeções de Conformidade',
    'Adequação NR-11 (Movimentação e Armazenagem)',
    'Adequação NR-12 (Segurança de Máquinas e Equipamentos)',
    'Adequação NR-13 (Caldeiras, Vasos de Pressão e Tubulações)',
    'Implantação e Gestão de PMOC (Climatização)',
    'Projetos e Desenhos Técnicos Mecânicos (CAD/3D)',
    'Estruturação de Planos de Manutenção Preventiva',
    'Adequações Técnicas e Normativas',
    'ART e Responsabilidade Técnica',
    'Diagnóstico de Engenharia Operacional & Gargalos',
    'Gestão da Manutenção & Indicadores (MTBF, MTTR)',
    'Gestão de Ativos & Matriz de Criticidade',
    'Governança Técnica & Gestão de Terceiros/Fornecedores',
    'Melhoria de Processos Industriais (RCA, FMEA, PDCA)',
    'Outro Desafio de Engenharia'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-bg/85 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-brand-blue border border-brand-orange/30 p-6 sm:p-8 shadow-2xl animate-fade-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text-mute hover:text-brand-orange transition-colors"
          aria-label="Fechar formulário"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Content */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-text mb-2">
            Solicitar Diagnóstico de Engenharia
          </h3>
          <p className="text-xs sm:text-sm text-brand-text-mute">
            Preencha os dados abaixo. Analisaremos sua demanda técnica ou operacional para estruturar a melhor abordagem.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              Seu Nome *
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Silva"
              className="w-full bg-brand-bg/60 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
              required 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
                E-mail Corporativo *
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nome@empresa.com.br"
                className="w-full bg-brand-bg/60 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
                required 
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
                Telefone / WhatsApp
              </label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full bg-brand-bg/60 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              Empresa / Planta Industrial
            </label>
            <input 
              type="text" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Nome da sua empresa ou indústria"
              className="w-full bg-brand-bg/60 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              Serviço ou Demanda Principal
            </label>
            <select 
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-brand-bg/90 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors"
            >
              {engineeringServices.map((item, idx) => (
                <option key={idx} value={idx === 0 ? '' : item} className="bg-brand-blue">
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-brand-text-mute/80 font-semibold mb-1">
              Descreva brevemente sua necessidade (Opcional)
            </label>
            <textarea 
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ex: Precisamos de laudo de NR-12 para três linhas de produção e adequação de PMOC predial..."
              className="w-full bg-brand-bg/60 border border-brand-text-mute/20 focus:border-brand-orange rounded-md px-3 py-2 text-sm text-brand-text outline-none transition-colors resize-none"
            />
          </div>

          <p className="text-[11px] text-brand-text-mute/70 leading-normal">
            * Seus dados serão utilizados exclusivamente para contato técnico direto referente a esta solicitação.
          </p>

          <div className="pt-2">
            <button 
              type="submit"
              className="w-full py-3.5 px-4 text-center text-sm font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange/90 rounded-md shadow-md transition-colors uppercase"
            >
              Enviar Solicitação de Diagnóstico
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
