export type TranslationSchema = {
  nav: {
    howWeHelp: string;
    problem: string;
    funnel: string;
    benefits: string;
    faq: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustStrip: {
    title: string;
    sectors: string[];
  };
  problem: {
    title: string;
    subtitle: string;
    items: string[];
  };
  funnel: {
    title: string;
    subtitle: string;
    stages: {
      name: string;
      desc: string;
      leak: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  benefits: {
    title: string;
    cards: {
      title: string;
      desc: string;
    }[];
  };
  advisor: {
    title: string;
    bio: string;
    contactTitle: string;
  };
  faq: {
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  ctaSection: {
    title: string;
    subtitle: string;
    cta: string;
  };
  contactForm: {
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    needLabel: string;
    needs: string[];
    messageLabel: string;
    submit: string;
    successAlert: string;
    validationAlert: string;
  };
};

export const translations: Record<'en' | 'pt', TranslationSchema> = {
  en: {
    nav: {
      howWeHelp: "How We Help",
      problem: "Operational Leaks",
      funnel: "The Funnel",
      benefits: "Results",
      faq: "FAQ",
    },
    hero: {
      headline: "More Calls Turned Into Paying Customers.",
      subheadline: "We help HVAC, roofing, plumbing, and home service businesses transform more opportunities into revenue through better operational execution.",
      ctaPrimary: "Schedule Revenue Leak Assessment",
      ctaSecondary: "How It Works",
    },
    trustStrip: {
      title: "Serving Home Service Sectors",
      sectors: ["HVAC", "Roofing", "Plumbing", "Electrical", "Home Services"],
    },
    problem: {
      title: "Where is Your Business Leaking Revenue?",
      subtitle: "If you are investing in marketing but profit isn't matching, the leak is operational.",
      items: [
        "We receive phone calls and leads, but fail to book diagnostic visits.",
        "Operational follow-up depends entirely on who answers the phone.",
        "Marketing spend increases, but monthly revenue fluctuates unpredictably.",
        "Unquoted estimates and open proposals are never systematically followed up."
      ],
    },
    funnel: {
      title: "The Revenue Leak Journey",
      subtitle: "Where cash escapes between the inbound lead and the repeat customer",
      stages: [
        { name: "1. Lead", desc: "Inbound Call or Web Request", leak: "Leak: Unanswered calls or slow callback times" },
        { name: "2. Contact", desc: "Call Screened & Booked", leak: "Leak: Failure to qualify or book visit immediately" },
        { name: "3. Appointment", desc: "Technician Dispatched", leak: "Leak: High travel costs, dispatch delay, or cancellation" },
        { name: "4. Estimate", desc: "Proposal Presented", leak: "Leak: Proposal lacks clarity, or no follow-up is made" },
        { name: "5. Sale", desc: "Job Approved & Paid", leak: "Leak: Missing upsell and immediate payment collection" },
        { name: "6. Repeat", desc: "Retainer & Referrals", leak: "Leak: No systematic retention program or reviews" }
      ],
    },
    process: {
      title: "How We Help",
      steps: [
        { num: "01", title: "Revenue Leak Assessment", desc: "We locate the exact operational bottlenecks costing you revenue." },
        { num: "02", title: "Operational Review", desc: "We audit your dispatching, estimating, and call flows in detail." },
        { num: "03", title: "Action Plan", desc: "We design a clear, practical execution protocol to plug the leaks." },
        { num: "04", title: "Implementation Support", desc: "We work behind the scenes to guide and support your team's execution." }
      ],
    },
    benefits: {
      title: "Designed for Bottom-Line Results",
      cards: [
        { title: "Faster Response Times", desc: "Capture leads and return phone calls in minutes, preventing clients from contacting competitors." },
        { title: "More Booked Visits", desc: "Turn more inbound inquiries into confirmed dispatch appointments for your technicians." },
        { title: "Higher Estimate Conversion", desc: "Sustainably close a higher percentage of service proposals and high-ticket quotes." },
        { title: "Sustainable Growth", desc: "Increase revenue per technician and build local equity without inflating your marketing spend." }
      ],
    },
    advisor: {
      title: "Operational Architecture for Contractors",
      bio: "Consiglieri Solutions specializes in operational structure, dispatch optimization, and revenue leak mitigation for home service companies. We operate strictly behind the scenes so that your team runs like clockwork and your marketing spend translates to actual bank deposits. No software sales, no abstract slides — just practical execution rules.",
      contactTitle: "Ready to stop losing revenue?",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How long does the Revenue Leak Assessment take?", a: "The initial assessment is a 30-minute diagnostic session. We analyze your current call volume, booking rates, and dispatch flows to pinpoint immediate leakages." },
        { q: "Do I need to buy or subscribe to new software?", a: "No. We optimize your existing systems and workflows. We focus on people and execution guidelines, not selling software packages." },
        { q: "What is your service format?", a: "We act as your behind-the-scenes execution partner. We build the operational rules, train your office staff, and provide continuous governance to ensure consistency." }
      ],
    },
    ctaSection: {
      title: "Stop Losing Money Between Lead and Sale",
      subtitle: "Get a free 30-minute operational audit. We will find your revenue leaks.",
      cta: "Schedule Free Assessment Now",
    },
    contactForm: {
      title: "Request a Revenue Leak Assessment",
      description: "Complete the form below. We will review your operational flows to identify leakages.",
      nameLabel: "Your Name",
      emailLabel: "Work Email",
      needLabel: "Primary Operational Challenge",
      needs: [
        "Select primary challenge...",
        "We lose calls / leads are slow to answer",
        "Low conversion from call to visit",
        "Estimates aren't being followed up",
        "Technician dispatch/scheduling is messy",
        "Other operational issue"
      ],
      messageLabel: "Tell us about your team/operation (Optional)",
      submit: "Request Assessment",
      successAlert: "Opening mail client to send your inquiry...",
      validationAlert: "Please fill in your Name and Email.",
    }
  },
  pt: {
    nav: {
      howWeHelp: "Como Ajudamos",
      problem: "Vazamentos",
      funnel: "O Funil",
      benefits: "Resultados",
      faq: "FAQ",
    },
    hero: {
      headline: "Mais Chamadas Transformadas em Clientes.",
      subheadline: "Ajudamos empresas de climatização (HVAC), telhados, encanamento e serviços residenciais a transformar mais oportunidades em receita através de melhor execução operacional.",
      ctaPrimary: "Agendar Avaliação de Vazamento",
      ctaSecondary: "Como Funciona",
    },
    trustStrip: {
      title: "Atendendo Setores de Serviços Residenciais",
      sectors: ["Climatização (HVAC)", "Telhados", "Encanamento", "Elétrica", "Serviços Gerais"],
    },
    problem: {
      title: "Onde Sua Empresa Está Vazando Receita?",
      subtitle: "Se você está investindo em marketing mas o lucro não acompanha, o vazamento é operacional.",
      items: [
        "Recebemos ligações e leads, mas não conseguimos agendar as visitas técnicas.",
        "O acompanhamento operacional depende inteiramente de quem atende o telefone.",
        "O investimento em marketing aumenta, mas a receita mensal flutua de forma imprevisível.",
        "Orçamentos enviados e propostas abertas nunca recebem follow-up sistemático."
      ],
    },
    funnel: {
      title: "A Jornada do Vazamento de Receita",
      subtitle: "Onde o dinheiro escapa entre o lead recebido e o cliente fiel",
      stages: [
        { name: "1. Lead", desc: "Ligação ou Formulário Web", leak: "Vazamento: Ligações não atendidas ou retorno lento" },
        { name: "2. Contato", desc: "Chamada Triada e Agendada", leak: "Vazamento: Falha em qualificar ou agendar visita na hora" },
        { name: "3. Visita", desc: "Técnico Despachado", leak: "Vazamento: Custo alto de deslocamento ou cancelamentos" },
        { name: "4. Orçamento", desc: "Proposta Apresentada", leak: "Vazamento: Falta de clareza ou ausência de follow-up" },
        { name: "5. Venda", desc: "Serviço Aprovado e Pago", leak: "Vazamento: Falta de venda adicional ou cobrança lenta" },
        { name: "6. Retenção", desc: "Indicações e Recorrência", leak: "Vazamento: Sem ações sistemáticas pós-serviço" }
      ],
    },
    process: {
      title: "Como Ajudamos",
      steps: [
        { num: "01", title: "Avaliação de Vazamento", desc: "Mapeamos os gargalos operacionais exatos que custam faturamento à sua empresa." },
        { num: "02", title: "Revisão Operacional", desc: "Auditamos em detalhes seus fluxos de ligações, agendamentos e propostas." },
        { num: "03", title: "Plano de Ação", desc: "Desenhamos um protocolo de execução prático e claro para estancar as perdas." },
        { num: "04", title: "Suporte de Implementação", desc: "Trabalhamos nos bastidores para apoiar e guiar a execução diária do seu time." }
      ],
    },
    benefits: {
      title: "Projetado para Resultados Reais",
      cards: [
        { title: "Respostas Mais Rápidas", desc: "Atenda chamadas e responda a contatos em minutos, evitando que o cliente ligue para o concorrente." },
        { title: "Mais Visitas Agendadas", desc: "Converta mais chamadas recebidas em visitas de diagnóstico confirmadas para seus técnicos." },
        { title: "Maior Conversão de Orçamentos", desc: "Feche de forma consistente e sustentável uma porcentagem maior de propostas enviadas." },
        { title: "Crescimento de Receita", desc: "Aumente o faturamento por técnico de campo sem precisar inflar seus gastos em anúncios." }
      ],
    },
    advisor: {
      title: "Arquitetura Operacional para Prestadores de Serviço",
      bio: "A Consiglieri Solutions é especializada em estrutura operacional, otimização de despacho e eliminação de vazamento de receita para empresas de serviços de campo. Trabalhamos estritamente nos bastidores para que sua equipe funcione com precisão e sua receita se consolide em lucro real no banco. Sem venda de software, sem relatórios teóricos — apenas execução prática.",
      contactTitle: "Pronto para parar de perder receita?",
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { q: "Quanto tempo dura a Avaliação de Vazamento de Receita?", a: "A avaliação inicial é um diagnóstico gratuito de 30 minutos. Analisamos seu fluxo atual de leads e despacho para identificar pontos críticos de perda." },
        { q: "Preciso comprar ou assinar um novo software?", a: "Não. Nós otimizamos o software e os sistemas que você já utiliza. Focamos em processos e diretrizes de execução humana." },
        { q: "Qual o formato do trabalho da Consiglieri?", a: "Atuamos como parceiros operacionais de bastidores. Desenhamos os processos, orientamos o time de atendimento e acompanhamos os resultados para garantir a execução." }
      ],
    },
    ctaSection: {
      title: "Pare de Perder Dinheiro Entre o Contato e a Venda",
      subtitle: "Receba uma análise operacional gratuita de 30 minutos. Vamos encontrar seus vazamentos.",
      cta: "Agendar Avaliação Gratuita",
    },
    contactForm: {
      title: "Solicitar Avaliação de Vazamento",
      description: "Preencha os campos abaixo. Analisaremos seus fluxos para identificar gargalos.",
      nameLabel: "Seu Nome",
      emailLabel: "E-mail Corporativo",
      needLabel: "Principal Desafio Operacional",
      needs: [
        "Selecione o principal desafio...",
        "Perdemos chamadas / demora no retorno",
        "Baixa conversão de chamadas em visitas",
        "Falta de acompanhamento de orçamentos",
        "Agenda ou despacho de técnicos confuso",
        "Outro gargalo operacional"
      ],
      messageLabel: "Fale um pouco sobre sua operação (Opcional)",
      submit: "Solicitar Avaliação",
      successAlert: "Abrindo seu aplicativo de e-mail...",
      validationAlert: "Por favor, preencha Nome e E-mail.",
    }
  }
};
