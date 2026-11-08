export type Language = 'pt' | 'en';

export interface ContentSchema {
  nav: {
    services: string;
    methodology: string;
    diagnostics: string;
    differentials: string;
    about: string;
    values: string;
    leadership: string;
    faq: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustPoints: string[];
  };
  philosophy: {
    tag: string;
    title: string;
    subtitle: string;
    hammerQuote: string;
    hammerDesc: string;
    originQuote: string;
    originTag: string;
    originDesc: string;
    midfieldTitle: string;
    midfieldRole: string;
    midfieldDesc: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      badge: string;
      title: string;
      desc: string;
      whenToUse: string;
    }[];
    boundaries: {
      title: string;
      text: string;
    };
  };
  methodology: {
    tag: string;
    title: string;
    subtitle: string;
    analogyTitle: string;
    analogyText: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  diagnostics: {
    tag: string;
    title: string;
    subtitle: string;
    intro: string;
    dimensions: {
      name: string;
      tag: string;
      questions: string;
      focus: string;
    }[];
    deliverable: {
      badge: string;
      title: string;
      desc: string;
    };
    cta: string;
  };
  tools: {
    tag: string;
    title: string;
    subtitle: string;
    text: string;
    items: {
      name: string;
      role: string;
    }[];
  };
  models: {
    tag: string;
    title: string;
    subtitle: string;
    cards: {
      type: string;
      title: string;
      desc: string;
      details: string;
    }[];
  };
  values: {
    tag: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    mission: string;
    visionTitle: string;
    vision: string;
    coreValuesTitle: string;
    list: {
      name: string;
      desc: string;
    }[];
    conductNote: string;
  };
  leadership: {
    tag: string;
    title: string;
    subtitle: string;
    members: {
      role: string;
      name: string;
      photo?: string;
      desc: string;
    }[];
    confidentiality: {
      title: string;
      desc: string;
    };
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  ctaSection: {
    tag: string;
    title: string;
    subtitle: string;
    button: string;
    emailNote: string;
  };
  footer: {
    tagline: string;
    boundariesTitle: string;
    boundariesText: string;
    linksTitle: string;
    rights: string;
    contact: string;
  };
  emailTemplate: {
    subject: string;
    body: string;
  };
}

export const content: Record<Language, ContentSchema> = {
  pt: {
    nav: {
      services: 'Engenharia Mecânica',
      methodology: 'Como Trabalhamos',
      diagnostics: 'Consultoria Operacional',
      differentials: 'Diferenciais',
      about: 'Sobre a Consiglieri',
      values: 'Valores',
      leadership: 'Liderança',
      faq: 'FAQ',
      ctaButton: 'Solicitar Avaliação',
    },
    hero: {
      badge: 'Engenharia Mecânica & Consultoria Operacional',
      headline: 'Soluções técnicas e operacionais para problemas reais.',
      subheadline:
        'Da engenharia mecânica à melhoria operacional, ajudamos empresas a identificar problemas, avaliar alternativas e encontrar soluções adequadas às suas necessidades.',
      ctaPrimary: 'Serviços de Engenharia Mecânica',
      ctaSecondary: 'Consultoria Operacional',
      trustPoints: [
        'Engenharia Mecânica com responsabilidade técnica (CREA-SP)',
        'Consultoria operacional com diagnóstico gratuito de 30 minutos',
        'Soluções práticas e proporcionais à realidade do seu negócio',
      ],
    },
    philosophy: {
      tag: 'Filosofia de Atuação',
      title: 'A Solução Proporcional ao Problema',
      subtitle: 'Não usamos um martelo para matar uma formiga.',
      hammerQuote: 'Adequação da solução à complexidade real da sua operação.',
      hammerDesc:
        'Um dos maiores gargalos das empresas modernas é adotar ferramentas excessivamente complexas para problemas simples. Implementar softwares pesados quando um controle ágil resolveria, ou conduzir consultorias intermináveis quando um ciclo PDCA seria suficiente. Na Consiglieri, o problema define a solução — nunca o contrário.',
      originQuote: '“Eu precisava de mais gente como eu.”',
      originTag: 'Origem da Consiglieri (Fundada em 2025)',
      originDesc:
        'Inspirados na clássica figura do Consigliere: o conselheiro de confiança que domina a visão de 360 graus, conecta os envolvidos, organiza situações críticas e aponta caminhos viáveis para a tomada de decisão.',
      midfieldTitle: 'A Metáfora do Meio-Campista',
      midfieldRole: 'Organização, Visão de Jogo e Conexão',
      midfieldDesc:
        'No futebol, o meio-campista recebe a bola sob pressão, domina, organiza o jogo com clareza e faz o passe que permite ao atacante finalizar com sucesso. Essa é a nossa função: entramos no centro da sua operação, compreendemos o cenário, estruturamos os fluxos e passamos a bola pronta para o seu time executar.',
    },
    services: {
      tag: 'Serviços Estruturados',
      title: 'O Que Fazemos',
      subtitle:
        'Quatro serviços desenhados para proteger a receita, auditar rotinas, planejar prioridades e garantir a execução.',
      items: [
        {
          badge: '01 • Geração & Proteção',
          title: 'Revenue Leak Assessment',
          desc: 'Análise minuciosa de vazamentos operacionais e perdas financeiras em precificação, fluxos comerciais, orçamentos sem acompanhamento e falhas de captura de receita.',
          whenToUse:
            'Ideal quando as vendas parecem fluir mas o resultado financeiro não aparece, ou quando orçamentos são perdidos sem diagnóstico da causa.',
        },
        {
          badge: '02 • Diagnóstico & Rotina',
          title: 'Operational Review',
          desc: 'Auditoria aprofundada das operações, processos diários e práticas de gestão. Identificação clara de retrabalhos, gargalos invisíveis e desperdícios operacionais.',
          whenToUse:
            'Indicado para empresas que sentem a rotina sobrecarregada, desorganizada ou excessivamente dependente da presença física dos sócios.',
        },
        {
          badge: '03 • Roteiro & Prioridades',
          title: 'Action Plan',
          desc: 'Estruturação de um plano de ação tático baseado nas reais necessidades identificadas. Roteiro com entregáveis claros, ordem de prioridade e prazos realizáveis.',
          whenToUse:
            'Necessário após o diagnóstico para transformar constatações em uma matriz executável e sem sobrecarregar a equipe.',
        },
        {
          badge: '04 • Governança & Sustentação',
          title: 'Implementation Support',
          desc: 'Apoio próximo na governança da implementação das soluções acordadas, destravando impedimentos, acompanhando métricas e assegurando que as melhorias se sustentem.',
          whenToUse:
            'Para empresas que já tentaram implementar planos no passado mas perderam tração por falta de método de acompanhamento e governança.',
        },
      ],
      boundaries: {
        title: 'Limites Claros de Atuação (Transparência Total)',
        text: 'A Consiglieri não desenvolve nem vende softwares como serviço próprio, não assume a gestão das equipes técnicas do cliente e não assume automaticamente a responsabilidade pela execução integral dos projetos do cliente. Nossa atuação é estritamente pautada por diagnóstico, governança e resolução estratégica acordada caso a caso.',
      },
    },
    methodology: {
      tag: 'Método Pragmático',
      title: 'Diagnosticar Antes de Propor',
      subtitle: 'A analogia médica: compreensão rigorosa antes de qualquer prescrição.',
      analogyTitle: 'Você confiaria em um médico que prescreve remédios antes de examinar você?',
      analogyText:
        'Nenhum médico qualificado recomenda cirurgia ou medicamento agressivo sem antes ouvir os sintomas, investigar o histórico e analisar exames laboratoriais. No mundo dos negócios deve ser exatamente igual. A Consiglieri nunca empurra uma ferramenta ou metodologia pré-fabricada antes de compreender o contexto específico da sua empresa.',
      steps: [
        {
          num: '01',
          title: 'Compreender Sintomas',
          desc: 'Escuta atenta do contexto empresarial, queixas imediatas, histórico de tentativas e metas reais da liderança.',
        },
        {
          num: '02',
          title: 'Investigar Condições',
          desc: 'Avaliação estruturada através do instrumento de diagnóstico operacional nas 4 dimensões críticas da empresa.',
        },
        {
          num: '03',
          title: 'Identificar a Raiz',
          desc: 'Isolar o ponto central de atrito para não desperdiçar energia nem recursos em soluções superficiais ou cosméticas.',
        },
        {
          num: '04',
          title: 'Estruturar a Solução',
          desc: 'Apresentar a abordagem e ferramentas na medida exata da capacidade e prioridade real da sua organização.',
        },
      ],
    },
    diagnostics: {
      tag: 'Porta de Entrada Comercial',
      title: 'Diagnóstico Operacional Gratuito de 30 Minutos',
      subtitle:
        'Uma avaliação estruturada, ponderada e objetiva para mapear a maturidade da sua operação.',
      intro:
        'A sessão utiliza um questionário estruturado de 20 perguntas ponderadas distribuídas igualmente em 4 dimensões vitais da empresa:',
      dimensions: [
        {
          name: 'Governance (Governança)',
          tag: 'Papéis & Prestação de Contas',
          questions: '5 perguntas ponderadas',
          focus:
            'Definição clara de responsabilidades, prestação de contas, rotinas de alinhamento, registros de decisões e limites de aprovação de despesas.',
        },
        {
          name: 'Processes (Processos)',
          tag: 'Padronização & Confiabilidade',
          questions: '5 perguntas ponderadas',
          focus:
            'Documentação de rotinas, padronização, autonomia dos colaboradores, tratamento de falhas recorrentes e mecanismos de melhoria contínua.',
        },
        {
          name: 'Performance (Desempenho)',
          tag: 'Métricas & Direcionadores',
          questions: '5 perguntas ponderadas',
          focus:
            'Indicadores-chave (KPIs), direcionadores de valor, metas versus realizado e identificação antecipada de perda de rentabilidade.',
        },
        {
          name: 'Risk (Riscos)',
          tag: 'Proteção & Contingência',
          questions: '5 perguntas ponderadas',
          focus:
            'Planos de contingência, armazenamento do conhecimento interno, revisão de fornecedores/contratos críticos e segurança operacional.',
        },
      ],
      deliverable: {
        badge: 'Entrega Imediata & Gratuita',
        title: 'Você recebe a planilha completa ao final da reunião',
        desc: 'Ao concluir os 30 minutos, você recebe gratuitamente a planilha de diagnóstico operacional preenchida com sua pontuação geral, notas por dimensão, interpretação e recomendações de prioridade imediata — sem pegadinhas nem compromissos.',
      },
      cta: 'Agendar Diagnóstico Gratuito de 30 Minutos',
    },
    tools: {
      tag: 'Ferramentas & Abordagens',
      title: 'O Problema Define a Ferramenta',
      subtitle: 'Conhecemos as metodologias de mercado, mas não somos reféns de nenhuma delas.',
      text: 'Ferramentas existem para servir à solução, nunca para ostentar erudição metodológica. Selecionamos apenas o que gera tração no seu estágio atual.',
      items: [
        { name: 'PDCA', role: 'Ciclos rápidos de planejamento, execução, checagem e padronização.' },
        { name: 'DMAIC', role: 'Abordagem orientada a dados para erradicar variações e defeitos complexos.' },
        { name: 'Kaizen', role: 'Filosofia de melhoria contínua incremental com engajamento dos times.' },
        { name: 'Poka-Yoke', role: 'Mecanismos à prova de erros para processos críticos que não podem falhar.' },
        { name: 'Matriz de Criticidade', role: 'Priorização lógica para focar recursos onde o impacto é decisivo.' },
      ],
    },
    models: {
      tag: 'Modelos de Contratação',
      title: 'Flexibilidade e Clareza Comercial',
      subtitle: 'Contratações estruturadas para atender desde demandas pontuais até parcerias contínuas.',
      cards: [
        {
          type: 'Modelo 01',
          title: 'Solução Pontual',
          desc: 'Contratação direcionada à resolução de um problema, gargalo ou necessidade específica da operação.',
          details: 'Escopo fechado, cronograma acordado, entregas bem delineadas e SLA definido.',
        },
        {
          type: 'Modelo 02',
          title: 'Retainer (Acompanhamento Contínuo)',
          desc: 'Modelo de parceria e acompanhamento recorrente para governança técnica, evolução de rotinas e sustentação de resultados.',
          details: 'Escopo, frequência e nível de acompanhamento negociados caso a caso. Não impomos prazos mínimos arbitrários.',
        },
      ],
    },
    values: {
      tag: 'O Que Nos Orienta',
      title: 'Missão, Visão e Princípios',
      subtitle: 'Nossa cultura corporativa e os valores inegociáveis que pautam cada projeto.',
      missionTitle: 'Nossa Missão',
      mission: 'Transformar caos em simplicidade.',
      visionTitle: 'Nossa Visão',
      vision:
        'Desenvolver pessoas e profissionais capazes de gerar tanto valor que outras organizações desejem tê-los dentro de suas próprias equipes. A associação que construímos na mente de um empresário é: “Quero ter alguém da Consiglieri aqui.”',
      coreValuesTitle: 'Os Quatro Valores Centrais',
      list: [
        {
          name: 'Mutualidade',
          desc: 'Relações de colaboração verdadeira, troca transparente e benefício mútuo entre a Consiglieri e seus clientes.',
        },
        {
          name: 'Liberdade sem libertinagem',
          desc: 'Autonomia plena para agir, pensar e criar soluções, permanentemente acompanhada de responsabilidade e prestação de contas.',
        },
        {
          name: 'Curiosidade',
          desc: 'Questionar o óbvio, investigar profundamente as causas raízes e compreender o contexto antes de emitir qualquer parecer.',
        },
        {
          name: 'Senso de dono',
          desc: 'Iniciativa proativa, zelo e compromisso total com o negócio do cliente como se fosse nosso próprio patrimônio.',
        },
      ],
      conductNote: '* O respeito mútuo é premissa inegociável de conduta humana, não um quinto valor.',
    },
    leadership: {
      tag: 'Liderança Executiva',
      title: 'Liderança e Governança',
      subtitle: 'Profissionais dedicados à operação, tecnologia e atendimento direto.',
      members: [
        {
          role: 'Chief Operating Officer (COO)',
          name: 'José Augusto Falavinha',
          photo: '/team-jose-falavinha.jpg',
          desc: 'Responsável pela condução da operação institucional e atendimento comercial inicial, incluindo o recebimento das solicitações de diagnóstico e a coordenação das reuniões estratégicas.',
        },
        {
          role: 'Chief of Technology and Marketing (CTMO)',
          name: 'Rodrigo Sena',
          desc: 'Responsável pelas áreas de tecnologia, arquitetura digital, presença de marca e estratégias integradas de comunicação da Consiglieri.',
        },
      ],
      confidentiality: {
        title: 'Compromisso Inabalável de Confidencialidade (NDA)',
        desc: 'Nossa atuação é estritamente pautada por acordos de confidencialidade (Non-Disclosure Agreement). Não publicamos nomes de clientes, estudos de caso não autorizados, depoimentos fictícios ou dados financeiros sensíveis. Construímos confiança com seriedade, método e discrição absoluta.',
      },
    },
    faq: {
      tag: 'Tire Suas Dúvidas',
      title: 'Perguntas Frequentes',
      subtitle: 'Respostas diretas sobre como trabalhamos, o diagnóstico e a contratação.',
      items: [
        {
          q: 'O que é a Consiglieri?',
          a: 'A Consiglieri é uma empresa de aconselhamento operacional e resolução estratégica. Ajudamos empresas a compreender problemas complexos, organizar processos, eliminar ineficiências e implantar soluções viáveis com método e simplicidade.',
        },
        {
          q: 'Que tipo de empresa pode contratar a Consiglieri?',
          a: 'Pequenas e médias empresas de qualquer segmento — desde o proprietário de um restaurante ou comércio até a diretoria de uma indústria. Nosso método se adapta à complexidade real da operação.',
        },
        {
          q: 'A Consiglieri atende pequenos negócios?',
          a: 'Sim. Um dos pilares da empresa é a acessibilidade: falamos com quem precisa resolver problemas reais, sem exigir que o empresário conheça termos corporativos sofisticados.',
        },
        {
          q: 'O diagnóstico inicial de 30 minutos é realmente gratuito?',
          a: 'Sim, 100% gratuito e sem pegadinhas. É a nossa porta de entrada para entender sua realidade, aplicar o questionário ponderado e demonstrar nossa forma de trabalhar.',
        },
        {
          q: 'O que eu recebo após o diagnóstico?',
          a: 'Você recebe gratuitamente a planilha de diagnóstico operacional preenchida, com sua pontuação geral, notas nas 4 dimensões (Governança, Processos, Desempenho e Riscos) e indicações de prioridade imediata.',
        },
        {
          q: 'Preciso ter conhecimento prévio de metodologias de gestão?',
          a: 'Não. Nossa missão é transformar caos em simplicidade. Você não precisa dominar termos técnicos; nós traduzimos a metodologia em ações práticas e compreensíveis.',
        },
        {
          q: 'A Consiglieri trabalha com projetos pontuais?',
          a: 'Sim. Atuamos tanto em soluções pontuais (com escopo fechado, objetivo claro e cronograma definido) quanto em modelos de acompanhamento contínuo.',
        },
        {
          q: 'O que é o modelo de retainer?',
          a: 'É um modelo de acompanhamento recorrente, onde a Consiglieri atua como parceira contínua de governança e sustentação de processos, sem imposição de prazos mínimos arbitrários.',
        },
        {
          q: 'Como são definidos os escopos e prazos de um projeto?',
          a: 'Sempre em comum acordo após o diagnóstico inicial, respeitando a complexidade real do desafio e a disponibilidade de recursos e equipe da sua empresa.',
        },
        {
          q: 'A Consiglieri implementa softwares ou vende sistemas?',
          a: 'Não. Não vendemos software próprio nem forçamos a compra de ferramentas de terceiros. Ajudamos você a organizar os fluxos antes de decidir se alguma tecnologia é realmente necessária.',
        },
        {
          q: 'Como funciona a confidencialidade das minhas informações?',
          a: 'Trabalhamos sob rigoroso acordo de confidencialidade (NDA). Seus dados operacionais e estratégicos são tratados com sigilo profissional inegociável.',
        },
        {
          q: 'Como solicitar o diagnóstico gratuito?',
          a: 'Basta clicar no botão de solicitação no website. Seu aplicativo de e-mail será aberto diretamente com nossa mensagem pré-formatada para contact@consiglieri.solutions. Nossa equipe responderá rapidamente combinando data e horário.',
        },
      ],
    },
    ctaSection: {
      tag: 'Comece pelo Diagnóstico',
      title: 'Pronto para Simplificar a Operação da Sua Empresa?',
      subtitle:
        'Converse por 30 minutos com nossos especialistas, receba sua planilha de diagnóstico operacional sem custo e descubra exatamente onde focar.',
      button: 'Solicitar Diagnóstico Gratuito de 30 Minutos',
      emailNote:
        '* O clique abrirá seu aplicativo de e-mail padrão com a solicitação pré-preenchida para contact@consiglieri.solutions.',
    },
    footer: {
      tagline: 'Resolução sem complicação.',
      boundariesTitle: 'Limites de Atuação',
      boundariesText:
        'A Consiglieri Solutions atua no diagnóstico operacional, na governança e na assessoria estratégica para resolução de problemas empresariais. Não desenvolvemos softwares como serviço próprio nem assumimos a gestão das equipes técnicas do cliente.',
      linksTitle: 'Navegação Institucional',
      rights: 'Consiglieri Solutions. Todos os direitos reservados.',
      contact: 'Contato Direto: contact@consiglieri.solutions',
    },
    emailTemplate: {
      subject: 'Solicitação de diagnóstico operacional gratuito — Consiglieri',
      body: `Olá equipe Consiglieri,%0D%0A%0D%0AGostaria de agendar o Diagnóstico Operacional Gratuito de 30 minutos para minha empresa.%0D%0A%0D%0AMeus dados:%0D%0A- Nome:%0D%0A- Empresa:%0D%0A- Segmento de atuação:%0D%0A- Telefone / WhatsApp:%0D%0A- Principal desafio operacional que enfrentamos hoje:%0D%0A%0D%0AAguardo retorno para alinharmos data e horário.%0D%0AObrigado!`,
    },
  },

  en: {
    nav: {
      services: 'What We Do',
      methodology: 'Methodology',
      diagnostics: '30-Min Assessment',
      differentials: 'Differentials',
      about: 'Philosophy & Origin',
      values: 'Values',
      leadership: 'Leadership',
      faq: 'FAQ',
      ctaButton: 'Free Assessment',
    },
    hero: {
      badge: 'Resolution without complication',
      headline: 'We untangle complex operations into clear, structured, and high-performance businesses.',
      subheadline:
        'We diagnose the root of the problem before prescribing any tool. A pragmatic, medical-like approach for businesses seeking tangible results without creating unnecessary complexity.',
      ctaPrimary: 'Request Free 30-min Assessment',
      ctaSecondary: 'Explore Our Methodology',
      trustPoints: [
        'Free 30-minute operational assessment session',
        'Receive the complete weighted evaluation spreadsheet',
        'Solutions tailored strictly to the real problem size',
      ],
    },
    philosophy: {
      tag: 'Operating Philosophy',
      title: 'Solutions Proportional to the Real Problem',
      subtitle: 'We never use a sledgehammer to kill an ant.',
      hammerQuote: 'Tailoring every solution to the real operational complexity.',
      hammerDesc:
        'One of the most common pitfalls in business is adopting excessively complex tools for simple problems. Rolling out heavyweight software when an agile checklist would suffice, or running endless consulting meetings when a lean PDCA cycle would solve the gap. At Consiglieri, the problem dictates the solution — never the other way around.',
      originQuote: '“I needed more people like me.”',
      originTag: 'The Origin of Consiglieri (Founded in 2025)',
      originDesc:
        'Inspired by the classic figure of the Consigliere: the trusted strategic advisor who sees the 360-degree picture, connects the right leaders, organizes high-stakes situations, and guides realistic paths to resolution.',
      midfieldTitle: 'The Midfield Playmaker Metaphor',
      midfieldRole: 'Organizing Chaos, Connecting People, Enabling Goals',
      midfieldDesc:
        'In football, the midfielder receives the ball under intense pressure, cushions it, brings composure to the team, and makes the precise pass that allows the striker to score. That is our role: we step into the center of your operations, analyze the field, structure the workflows, and deliver a clean pass for your team to execute.',
    },
    services: {
      tag: 'Structured Services',
      title: 'What We Do',
      subtitle:
        'Four core services designed to protect revenue, audit daily operations, build actionable roadmaps, and support execution.',
      items: [
        {
          badge: '01 • Revenue & Capture',
          title: 'Revenue Leak Assessment',
          desc: 'A comprehensive audit of operational leaks and missed financial capture across pricing, sales pipelines, abandoned estimates, and billing bottlenecks.',
          whenToUse:
            'Ideal when top-line sales are growing but margins fail to materialize, or when deals vanish without clear diagnostic tracking.',
        },
        {
          badge: '02 • Efficiency & Workflows',
          title: 'Operational Review',
          desc: 'An objective external evaluation of daily operations, workflow routines, and management habits, revealing invisible friction points and chronic bottlenecks.',
          whenToUse:
            'Recommended for businesses where operations feel chaotic, overworked, or excessively reliant on the business owners’ physical presence.',
        },
        {
          badge: '03 • Prioritized Roadmap',
          title: 'Action Plan',
          desc: 'A prioritized, practical roadmap tailored to real team bandwidth. Realistic milestones, clear ownership, and measurable deliverables without overwhelming your staff.',
          whenToUse:
            'Essential after the diagnostic session to convert findings into an organized, phased execution plan.',
        },
        {
          badge: '04 • Governance & Momentum',
          title: 'Implementation Support',
          desc: 'Hands-on governance support during the implementation of agreed-upon solutions, clearing blockers, monitoring KPIs, and ensuring changes take hold permanently.',
          whenToUse:
            'For companies that have tried rolling out operational improvements in the past but lost momentum due to a lack of continuous governance.',
        },
      ],
      boundaries: {
        title: 'Clear Engagement Boundaries (Full Transparency)',
        text: 'Consiglieri does not develop or sell proprietary software, does not assume direct management of client employees, and does not automatically assume full operational liability for client projects. Our role is strictly centered on strategic diagnosis, governance, and tailored problem-solving.',
      },
    },
    methodology: {
      tag: 'Pragmatic Method',
      title: 'Diagnose Before Proposing',
      subtitle: 'The modern medical analogy: deep diagnosis before prescription.',
      analogyTitle: 'Would you trust a physician who prescribes medication before examining you?',
      analogyText:
        'No responsible doctor recommends surgery or aggressive treatment without first listening to your symptoms, reviewing medical history, and ordering lab work. Business problem-solving should be held to the same standard. Consiglieri never pushes a pre-packaged methodology before thoroughly understanding your specific operational reality.',
      steps: [
        {
          num: '01',
          title: 'Understand Symptoms',
          desc: 'Active listening to current operational pain, business context, past attempts, and core leadership goals.',
        },
        {
          num: '02',
          title: 'Investigate Conditions',
          desc: 'A structured evaluation across the 4 vital organizational dimensions using our weighted diagnostic framework.',
        },
        {
          num: '03',
          title: 'Isolate Root Causes',
          desc: 'Pinpointing the exact point of friction to prevent wasting company resources on cosmetic fixes.',
        },
        {
          num: '04',
          title: 'Tailor the Solution',
          desc: 'Recommending solutions and tools strictly proportional to the actual challenge and company capacity.',
        },
      ],
    },
    diagnostics: {
      tag: 'Commercial Intake',
      title: 'Free 30-Minute Operational Assessment',
      subtitle:
        'A structured, weighted assessment to evaluate your operational maturity and uncover hidden friction.',
      intro:
        'The assessment is conducted using a weighted 20-question questionnaire evenly distributed across 4 strategic dimensions:',
      dimensions: [
        {
          name: 'Governance',
          tag: 'Roles & Accountability',
          questions: '5 weighted questions',
          focus:
            'Clear accountability, roles definition, operational cadence, documented decision-making, and expenditure approval limits.',
        },
        {
          name: 'Processes',
          tag: 'Standardization & Reliability',
          questions: '5 weighted questions',
          focus:
            'Standard operating procedures (SOPs), team autonomy, recurring problem handling, and continuous improvement loops.',
        },
        {
          name: 'Performance',
          tag: 'KPIs & Value Drivers',
          questions: '5 weighted questions',
          focus:
            'Key performance indicators, value drivers, actual vs. target tracking, and early detection of operational slippage.',
        },
        {
          name: 'Risk',
          tag: 'Contingency & Resilience',
          questions: '5 weighted questions',
          focus:
            'Operational continuity, institutional knowledge retention, key supplier and contract reviews, and compliance controls.',
        },
      ],
      deliverable: {
        badge: 'Free & Immediate Delivery',
        title: 'You receive the complete assessment spreadsheet',
        desc: 'At the conclusion of the 30-minute session, you receive the full operational assessment spreadsheet populated with your overall score, dimension breakdowns, and immediate priority areas — with zero obligation.',
      },
      cta: 'Schedule Your Free 30-Minute Assessment',
    },
    tools: {
      tag: 'Tools & Frameworks',
      title: 'The Problem Defines the Tool',
      subtitle: 'We know industry frameworks deeply, but we are not dogmatic about any of them.',
      text: 'Methodologies exist to solve problems, not to showcase academic terminology. We deploy only what generates genuine leverage for your current stage.',
      items: [
        { name: 'PDCA', role: 'Rapid cycles of Planning, Doing, Checking, and Standardizing.' },
        { name: 'DMAIC', role: 'Data-driven methodology to eradicate complex variance and root-cause defects.' },
        { name: 'Kaizen', role: 'Continuous incremental improvement driven by direct team engagement.' },
        { name: 'Poka-Yoke', role: 'Mistake-proofing mechanisms for high-stakes, error-sensitive operations.' },
        { name: 'Criticality Matrix', role: 'Logical prioritization to channel capital and focus where impact is decisive.' },
      ],
    },
    models: {
      tag: 'Engagement Models',
      title: 'Commercial Flexibility and Transparency',
      subtitle: 'Structured engagements ranging from targeted problem resolution to recurring advisory partnerships.',
      cards: [
        {
          type: 'Model 01',
          title: 'Targeted Project (Solução Pontual)',
          desc: 'Focused engagement designed to address a single specific operational bottleneck, leak, or workflow challenge.',
          details: 'Defined scope, clear timelines, tangible milestones, and transparent SLAs.',
        },
        {
          type: 'Model 02',
          title: 'Retainer (Ongoing Advisory)',
          desc: 'A recurring advisory partnership providing continuous governance, operational monitoring, and persistent progress.',
          details: 'Scope, meeting frequency, and advisory depth negotiated individually. No arbitrary minimum contracts imposed.',
        },
      ],
    },
    values: {
      tag: 'What Guides Us',
      title: 'Mission, Vision, and Values',
      subtitle: 'Our organizational DNA and the non-negotiable principles behind every client interaction.',
      missionTitle: 'Our Mission',
      mission: 'To transform chaos into simplicity.',
      visionTitle: 'Our Vision',
      vision:
        'To build leaders and talent so valuable that client organizations aspire to retain them permanently within their own teams: “I want someone from Consiglieri inside my business.”',
      coreValuesTitle: 'The Four Core Values',
      list: [
        {
          name: 'Mutuality',
          desc: 'Genuine collaboration, transparent exchange, and shared mutual benefit between Consiglieri and client partners.',
        },
        {
          name: 'Freedom with Responsibility',
          desc: 'Full autonomy to think critically and create solutions, permanently coupled with uncompromising accountability.',
        },
        {
          name: 'Curiosity',
          desc: 'Challenging the obvious, investigating root causes deeply, and understanding reality before rendering judgment.',
        },
        {
          name: 'Owner’s Mindset',
          desc: 'Proactive initiative and total commitment to the client’s success as if it were our own enterprise.',
        },
      ],
      conductNote: '* Mutual respect is an absolute premise of human conduct, not a fifth value.',
    },
    leadership: {
      tag: 'Executive Leadership',
      title: 'Leadership and Governance',
      subtitle: 'Dedicated practitioners focused on operations, digital technology, and executive advisory.',
      members: [
        {
          role: 'Chief Operating Officer (COO)',
          name: 'José Augusto Falavinha',
          photo: '/team-jose-falavinha.jpg',
          desc: 'Oversees operational execution and commercial intake, leading initial diagnostic evaluations and coordinating strategic roadmaps.',
        },
        {
          role: 'Chief of Technology and Marketing (CTMO)',
          name: 'Rodrigo Sena',
          desc: 'Leads digital technology architecture, applied data systems, brand strategy, and integrated communications across Consiglieri.',
        },
      ],
      confidentiality: {
        title: 'Uncompromising Confidentiality Commitment (NDA)',
        desc: 'Our work is strictly governed by Non-Disclosure Agreements (NDAs). We never disclose client names, unapproved case studies, fictitious testimonials, or proprietary operational numbers. We earn trust through rigor, method, and absolute discretion.',
      },
    },
    faq: {
      tag: 'Got Questions?',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear, straightforward answers about how we operate, assess, and partner.',
      items: [
        {
          q: 'What is Consiglieri?',
          a: 'Consiglieri is an operational advisory and strategic problem-solving consultancy. We help businesses make sense of complex operational bottlenecks, structure workflows, eliminate waste, and implement practical solutions with clarity and method.',
        },
        {
          q: 'What type of company can engage Consiglieri?',
          a: 'Small and medium-sized enterprises across diverse sectors — from restaurant and retail owners to industrial executives. Our methodology adapts to the real operational complexity of your organization.',
        },
        {
          q: 'Does Consiglieri work with small businesses?',
          a: 'Yes. Accessibility is one of our founding pillars: we speak directly to leaders who need to solve problems without drowning them in corporate buzzwords.',
        },
        {
          q: 'Is the 30-minute operational assessment truly free?',
          a: 'Yes, 100% free with no catch. It serves as our structured intake session to listen to your challenges, complete the 20-question weighted evaluation, and demonstrate our approach.',
        },
        {
          q: 'What do I receive after the assessment?',
          a: 'You receive the completed operational assessment spreadsheet, featuring your total maturity score, individual ratings across the 4 dimensions, and an immediate priority action summary.',
        },
        {
          q: 'Do I need prior knowledge of management methodologies?',
          a: 'No. Our mission is to transform chaos into simplicity. You do not need to memorize management jargon; we translate proven frameworks into actionable steps for your team.',
        },
        {
          q: 'Does Consiglieri take on targeted, single-objective projects?',
          a: 'Yes. We work both on targeted projects (fixed scope, clear deliverables, and set milestones) as well as recurring advisory partnerships.',
        },
        {
          q: 'What is the Retainer model?',
          a: 'It is an ongoing advisory partnership where Consiglieri acts as an objective sounding board, providing regular operational governance without locking you into arbitrary long-term contracts.',
        },
        {
          q: 'How are scopes and timelines established?',
          a: 'Through transparent mutual agreement following the initial assessment, respecting the real operational complexity and your internal team bandwidth.',
        },
        {
          q: 'Does Consiglieri build or implement software?',
          a: 'No. We do not sell proprietary software or force third-party software licenses. We organize your operational workflows first, helping you determine if technology is truly necessary.',
        },
        {
          q: 'How is confidential company data protected?',
          a: 'All client discussions and diagnostic data are protected by strict Non-Disclosure Agreements (NDAs). Discretion and privacy are foundational to our advisory work.',
        },
        {
          q: 'How do I request a free assessment?',
          a: 'Simply click the assessment button on our site. It will generate a pre-formatted email request directly to contact@consiglieri.solutions. Our team will promptly reply with available times.',
        },
      ],
    },
    ctaSection: {
      tag: 'Begin with the Diagnostic',
      title: 'Ready to Bring Simplicity and Control to Your Operations?',
      subtitle:
        'Spend 30 minutes with our strategic team, receive your customized operational assessment spreadsheet, and gain clear visibility on your immediate priorities.',
      button: 'Request Your Free 30-Minute Assessment',
      emailNote:
        '* Clicking will open your default email client with a pre-filled message addressed to contact@consiglieri.solutions.',
    },
    footer: {
      tagline: 'Resolution without complication.',
      boundariesTitle: 'Engagement Boundaries',
      boundariesText:
        'Consiglieri Solutions provides strategic diagnostic evaluations, governance advisory, and workflow architecture. We do not sell software as a service or manage client staff directly.',
      linksTitle: 'Navigation',
      rights: 'Consiglieri Solutions. All rights reserved.',
      contact: 'Direct Contact: contact@consiglieri.solutions',
    },
    emailTemplate: {
      subject: 'Free operational assessment request — Consiglieri',
      body: `Hello Consiglieri Team,%0D%0A%0D%0AI would like to schedule a Free 30-Minute Operational Assessment for my business.%0D%0A%0D%0AMy Details:%0D%0A- Full Name:%0D%0A- Company Name:%0D%0A- Industry / Sector:%0D%0A- Phone / WhatsApp:%0D%0A- Main operational bottleneck we face today:%0D%0A%0D%0ALooking forward to aligning dates and times.%0D%0AThank you!`,
    },
  },
};
