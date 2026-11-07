export interface ServiceItem {
  name: string;
  simpleDesc: string;
  problemSolved: string;
  expectedDeliverable: string;
  artRequired?: boolean;
}

export interface ServiceCategory {
  id: string;
  letter: string;
  title: string;
  shortDesc: string;
  services: ServiceItem[];
}

export const mechanicalCategories: ServiceCategory[] = [
  {
    id: 'maquinas-equipamentos',
    letter: 'A',
    title: 'Máquinas, Equipamentos e Segurança',
    shortDesc: 'Inspeção, apreciação de riscos, adequações mecânicas e laudos técnicos em conformidade com as normas regulamentadoras.',
    services: [
      {
        name: 'Inspeção de máquinas e equipamentos',
        simpleDesc: 'Verificação minuciosa do estado físico, mecânico e operacional de máquinas industriais para identificar desgastes, falhas e desvios de segurança.',
        problemSolved: 'Elimina paradas imprevistas de produção e identifica riscos mecânicos antes que causem acidentes ou quebras graves.',
        expectedDeliverable: 'Relatório técnico de inspeção detalhado com diagnóstico do estado do equipamento e recomendações práticas.',
        artRequired: true,
      },
      {
        name: 'Avaliação técnica de máquinas industriais',
        simpleDesc: 'Auditoria técnica para determinar a capacidade real, integridade mecânica e vida útil remanescente de máquinas de fábrica.',
        problemSolved: 'Evita a compra de equipamentos condenados ou o uso de máquinas sem condições operacionais seguras.',
        expectedDeliverable: 'Laudo de avaliação técnica com parecer conclusivo e estimativa de integridade operacional.',
        artRequired: true,
      },
      {
        name: 'Apreciação de riscos de máquinas (NR-12)',
        simpleDesc: 'Avaliação detalhada dos perigos mecânicos e operacionais nas áreas de trabalho com máquinas, apontando as medidas de proteção necessárias.',
        problemSolved: 'Garante conformidade com as exigências do Ministério do Trabalho (NR-12) e protege operadores contra acidentes graves.',
        expectedDeliverable: 'Documento completo de apreciação de riscos contendo categorização, matriz de severidade e medidas mitigatórias.',
        artRequired: true,
      },
      {
        name: 'Laudos e relatórios técnicos de segurança (NR-12)',
        simpleDesc: 'Elaboração de laudo formal atestando a segurança ou apontando pendências para a liberação de máquinas industriais.',
        problemSolved: 'Atende fiscalizações trabalhistas, auditorias de clientes e exigências de seguradoras com respaldo legal.',
        expectedDeliverable: 'Laudo técnico assinado por Engenheiro Mecânico com ART registrada no CREA-SP.',
        artRequired: true,
      },
      {
        name: 'Projetos de adequação mecânica',
        simpleDesc: 'Desenvolvimento do projeto de proteções mecânicas fixas e móveis, enclausuramentos e adaptações de segurança para máquinas.',
        problemSolved: 'Permite adequar máquinas antigas ou importadas às normas brasileiras sem comprometer a produtividade da linha.',
        expectedDeliverable: 'Projeto mecânico executivo com desenhos técnicos, especificação de materiais e orientações de montagem.',
        artRequired: true,
      },
      {
        name: 'Avaliação e inspeção de máquinas pesadas',
        simpleDesc: 'Inspeção estrutural e mecânica em equipamentos de grande porte como tratores, escavadeiras, carregadeiras e guindastes móveis.',
        problemSolved: 'Previne falhas catastróficas em obras e operações severas e assegura a integridade de componentes estruturais.',
        expectedDeliverable: 'Checklist técnico com registro fotográfico e laudo conclusivo de aptidão operacional.',
        artRequired: true,
      },
    ],
  },
  {
    id: 'movimentacao-cargas',
    letter: 'B',
    title: 'Movimentação de Cargas e Içamento',
    shortDesc: 'Inspeção de equipamentos de elevação, projetos de dispositivos de içamento, planos de carga e rigging.',
    services: [
      {
        name: 'Inspeção de pontes rolantes, pórticos e talhas',
        simpleDesc: 'Vistoria periódica dos cabos de aço, ganchos, freios, trilhos, barramentos e estruturas metálicas de elevação.',
        problemSolved: 'Evita a queda de cargas suspensas e paralisações críticas na linha de expedição e montagem.',
        expectedDeliverable: 'Relatório de conformidade mecânica com apontamento de folgas, desgastes e condições dos componentes.',
        artRequired: true,
      },
      {
        name: 'Projetos de dispositivos de içamento (Balancins e Travessas)',
        simpleDesc: 'Cálculo estrutural e projeto de balancins, travessas e olhais especiais desenvolvidos sob medida para movimentação de cargas específicas.',
        problemSolved: 'Garante o içamento seguro de peças pesadas, longas ou desbalanceadas sem deformações ou riscos de tombamento.',
        expectedDeliverable: 'Projeto mecânico com memória de cálculo por elementos finitos, desenhos de fabricação e ART de projeto.',
        artRequired: true,
      },
      {
        name: 'Planos de rigging e planos de içamento de cargas',
        simpleDesc: 'Planejamento de engenharia para operações complexas de içamento com guindastes, determinando capacidades, ângulos, raio e escoramento.',
        problemSolved: 'Elimina o risco de tombamento de guindastes e acidentes com cargas pesadas em áreas industriais ou urbanas.',
        expectedDeliverable: 'Caderno técnico de rigging com desenhos de raio de ação, tabela de cargas, seleção de amarrações e ART do plano.',
        artRequired: true,
      },
      {
        name: 'Projetos e avaliação de andaimes e estruturas auxiliares',
        simpleDesc: 'Dimensionamento de andaimes fachadeiros, multidirecionais e torres de escoramento para suportar cargas de trabalho com segurança.',
        problemSolved: 'Garante a estabilidade estrutural em obras e montagens industriais, atendendo às normas NR-18 e NR-35.',
        expectedDeliverable: 'Memorial descritivo, cálculo de cargas admitidas, projeto de montagem e ART.',
        artRequired: true,
      },
      {
        name: 'Avaliação de acessórios de movimentação de cargas',
        simpleDesc: 'Inspeção e controle de cintas de poliéster, manilhas, cabos de aço, correntes e olhais de içamento.',
        problemSolved: 'Identifica itens danificados ou fora de tolerância antes de acidentes com rompimento de amarrações.',
        expectedDeliverable: 'Relatório de integridade com identificação e descarte de acessórios condenados.',
        artRequired: false,
      },
    ],
  },
  {
    id: 'sistemas-pressurizados',
    letter: 'C',
    title: 'Sistemas Pressurizados e Integridade Mecânica',
    shortDesc: 'Avaliação técnica de tubulações, compressores, reservatórios e suporte documental para conformidade regulamentar.',
    services: [
      {
        name: 'Avaliação de tubulações industriais',
        simpleDesc: 'Análise de linhas de distribuição de ar comprimido, vapor, água de processo e gases industriais.',
        problemSolved: 'Reduz vazamentos caros, perda de pressão na rede e risco de rupturas em linhas envelhecidas.',
        expectedDeliverable: 'Relatório de inspeção visual, análise de suportação e recomendações de manutenção corretiva.',
        artRequired: true,
      },
      {
        name: 'Inspeção de compressores e reservatórios de ar comprimido',
        simpleDesc: 'Verificação mecânica de vasos de pressão e sistemas compressores, incluindo testes de válvulas de segurança e manômetros.',
        problemSolved: 'Assegura a operação segura contra riscos de explosão e cumpre as diretrizes técnicas aplicáveis.',
        expectedDeliverable: 'Relatório técnico de inspeção com verificação de dispositivos de alívio e prontuário.',
        artRequired: true,
      },
      {
        name: 'Medição de espessura e avaliação de corrosão (Ultrassom)',
        simpleDesc: 'Ensaio não destrutivo por ultrassom para medir a espessura remanescente das paredes metálicas de tanques e tubulações.',
        problemSolved: 'Detecta a perda oculta de espessura causada por corrosão interna sem necessidade de furar ou paralisar o sistema.',
        expectedDeliverable: 'Mapeamento de espessuras com relatório técnico de vida útil e cálculo de pressão máxima permitida.',
        artRequired: true,
      },
      {
        name: 'Avaliação de integridade mecânica de equipamentos industriais',
        simpleDesc: 'Estudo de engenharia para avaliar se um equipamento pressurizado ou estrutural desgastado ainda pode operar com segurança.',
        problemSolved: 'Fundamenta decisões técnicas entre reforma, reparo localizado ou substituição de ativos de alto valor.',
        expectedDeliverable: 'Parecer técnico de integridade estrutural assinado por Engenheiro Mecânico com ART.',
        artRequired: true,
      },
    ],
  },
  {
    id: 'refrigeracao-climatizacao',
    letter: 'D',
    title: 'Refrigeração, Climatização e Sistemas Térmicos',
    shortDesc: 'Elaboração de PMOC, inspeção de sistemas de climatização, projetos de exaustão e avaliação de desempenho térmico.',
    services: [
      {
        name: 'Elaboração e Responsabilidade Técnica de PMOC',
        simpleDesc: 'Plano de Manutenção, Operação e Controle para sistemas de climatização de ambientes coletivos, conforme a Lei Federal 13.589/2018.',
        problemSolved: 'Evita multas pesadas da Vigilância Sanitária e protege a qualidade do ar que colaboradores e clientes respiram.',
        expectedDeliverable: 'Documento completo do PMOC, cronograma de manutenção, roteiro de rotinas e ART de responsabilidade técnica.',
        artRequired: true,
      },
      {
        name: 'Inspeção e diagnóstico de sistemas de climatização',
        simpleDesc: 'Avaliação da eficiência mecânica, filtros, serpentinas, ventiladores e dutos em centrais de ar condicionado (chillers, VRF, splits).',
        problemSolved: 'Identifica consumo elétrico excessivo, baixo rendimento térmico e proliferação de fungos e bactérias no sistema.',
        expectedDeliverable: 'Diagnóstico técnico operacional com plano de melhorias de eficiência e higienização.',
        artRequired: true,
      },
      {
        name: 'Projetos de ventilação mecânica e exaustão industrial',
        simpleDesc: 'Dimensionamento de coifas, exaustores, dutos e lavadores de ar para cozinhas industriais, galpões e áreas com emissão de calor ou vapores.',
        problemSolved: 'Elimina calor excessivo, fumaça, odores e contaminantes no ambiente fabril, cumprindo normas de salubridade.',
        expectedDeliverable: 'Projeto executivo de ventilação com cálculo de vazão, perda de carga e especificação de ventiladores.',
        artRequired: true,
      },
      {
        name: 'Avaliação de desempenho e eficiência energética térmica',
        simpleDesc: 'Análise de balanço térmico para reduzir custos de energia elétrica em sistemas de refrigeração comercial e industrial.',
        problemSolved: 'Reduz a conta de luz da empresa e aumenta a durabilidade de compressores e trocadores de calor.',
        expectedDeliverable: 'Relatório de eficiência energética com plano de retorno do investimento (ROI) para melhorias mecânicas.',
        artRequired: false,
      },
    ],
  },
  {
    id: 'projetos-instalacoes',
    letter: 'E',
    title: 'Projetos e Instalações Mecânicas',
    shortDesc: 'Desenvolvimento de projetos mecânicos executivos, dimensionamento de componentes, tubulações e sistemas fluídicos.',
    services: [
      {
        name: 'Projetos mecânicos e dimensionamento de componentes',
        simpleDesc: 'Cálculo e detalhamento de eixos, engrenagens, estruturas metálicas, chassis e peças mecânicas para fabricação.',
        problemSolved: 'Permite construir ou nacionalizar peças com a resistência exata necessária, evitando quebras por subdimensionamento.',
        expectedDeliverable: 'Desenhos técnicos de fabricação em 2D/3D com tolerâncias, lista de materiais e especificações.',
        artRequired: true,
      },
      {
        name: 'Projetos de tubulações e utilidades industriais',
        simpleDesc: 'Traçado e dimensionamento de redes industriais de ar comprimido, vapor, condensado e água gelada.',
        problemSolved: 'Evita perdas de pressão desnecessárias, golpes de aríete e interferências com outras estruturas da fábrica.',
        expectedDeliverable: 'Isométricos de tubulação, planta baixa de traçado, lista de materiais e memorial descritivo.',
        artRequired: true,
      },
      {
        name: 'Projetos de sistemas hidráulicos e pneumáticos',
        simpleDesc: 'Esquemas de circuitos de acionamento com cilindros, válvulas, bombas, motores hidráulicos e unidades compressoras.',
        problemSolved: 'Garante o funcionamento sincronizado e seguro de automações mecânicas sem vazamentos ou superaquecimento de óleo.',
        expectedDeliverable: 'Diagrama esquemático funcional, memorial de cálculo de forças e vazões, e especificação de componentes.',
        artRequired: true,
      },
      {
        name: 'Acompanhamento técnico de instalações e montagens',
        simpleDesc: 'Supervisão técnica de montagem mecânica em campo para garantir que o projeto seja executado conforme as especificações.',
        problemSolved: 'Impede erros de montagem, desalinhamentos e retrabalhos caros antes do comissionamento da fábrica.',
        expectedDeliverable: 'Relatórios de vistoria de montagem com registro de inconformidades e termo de liberação mecânica.',
        artRequired: true,
      },
    ],
  },
  {
    id: 'laudos-inspecoes-pericias',
    letter: 'F',
    title: 'Laudos, Pareceres e Avaliações Técnicas',
    shortDesc: 'Laudos periciais, relatórios de conformidade, pareceres técnicos fundamentados e análise de falhas mecânicas.',
    services: [
      {
        name: 'Laudos técnicos de máquinas e equipamentos',
        simpleDesc: 'Documento técnico formal emitido por Engenheiro Mecânico atestando a condição real de um equipamento ou instalação.',
        problemSolved: 'Atende exigências judiciais, bancárias, de seguradoras ou órgãos fiscalizadores com valor legal.',
        expectedDeliverable: 'Laudo pericial fundamentado com registro fotográfico, análise técnica e ART registrada no CREA.',
        artRequired: true,
      },
      {
        name: 'Pareceres técnicos de engenharia mecânica',
        simpleDesc: 'Avaliação técnica independente sobre uma dúvida, impasse contratual ou divergência de desempenho mecânico.',
        problemSolved: 'Oferece suporte técnico especializado para tomada de decisão gerencial, arbitragens e negociações com fornecedores.',
        expectedDeliverable: 'Parecer técnico assinado com embasamento normativo, conclusões claras e orientações práticas.',
        artRequired: true,
      },
      {
        name: 'Análise de falhas mecânicas e causa raiz',
        simpleDesc: 'Investigação de engenharia para descobrir o motivo exato pelo qual uma peça quebrou, trincou, empenou ou desgastou prematuramente.',
        problemSolved: 'Descobre a causa verdadeira da quebra para evitar que o problema se repita após o conserto da máquina.',
        expectedDeliverable: 'Relatório de análise de falhas com exame visual/micrográfico, histórico e ações corretivas definitivas.',
        artRequired: true,
      },
      {
        name: 'Perícias e assistência técnica judicial',
        simpleDesc: 'Atuação como assistente técnico em disputas judiciais envolvendo máquinas defeituosas, acidentes ou vícios ocultos.',
        problemSolved: 'Defende os interesses técnicos da empresa em processos judiciais formulando quesitos e pareceres críticos.',
        expectedDeliverable: 'Elaboração de quesitos, acompanhamento da perícia judicial e emissão de laudo técnico convergente ou divergente.',
        artRequired: true,
      },
    ],
  },
  {
    id: 'manutencao-confiabilidade',
    letter: 'G',
    title: 'Manutenção e Confiabilidade Industrial',
    shortDesc: 'Diagnóstico da gestão de manutenção, estudos de confiabilidade, redução de paradas e aumento da vida útil de ativos.',
    services: [
      {
        name: 'Diagnóstico de manutenção industrial',
        simpleDesc: 'Auditoria completa dos processos de manutenção: preventivas, corretivas, lubrificação, estoque de peças e equipe.',
        problemSolved: 'Elimina o modo "apaga-fogo", reduz custos com quebras inesperadas e organiza o setor de manutenção.',
        expectedDeliverable: 'Matriz de maturidade da manutenção com plano de ação prioritário e metas de confiabilidade.',
        artRequired: false,
      },
      {
        name: 'Estruturação de planos de manutenção preventiva e preditiva',
        simpleDesc: 'Criação de rotinas sistemáticas de lubrificação, inspeções sensoriais e monitoramento de vibração e temperatura.',
        problemSolved: 'Aumenta a disponibilidade das máquinas e reduz o consumo de peças de reposição emergenciais.',
        expectedDeliverable: 'Plano mestre de manutenção com fichas de procedimento, frequências de intervenção e indicadores de controle.',
        artRequired: false,
      },
      {
        name: 'Estudos de confiabilidade e criticidade de ativos (FMEA/RCM)',
        simpleDesc: 'Classificação das máquinas da fábrica pelo impacto que uma quebra causa na segurança, no custo e na entrega aos clientes.',
        problemSolved: 'Orienta a equipe a focar esforços e recursos nas máquinas mais importantes, evitando desperdício de tempo.',
        expectedDeliverable: 'Matriz de criticidade de equipamentos e plano de contingência para máquinas gargalo.',
        artRequired: false,
      },
    ],
  },
];

export const artExplanations = {
  sectionTag: 'Documentação & Segurança Jurídica',
  title: 'Laudos Técnicos, Pareceres e ART Descomplicados',
  subtitle: 'Entenda com clareza a função de cada documento técnico e quando a Anotação de Responsabilidade Técnica é necessária.',
  cards: [
    {
      title: 'Laudos e Relatórios Técnicos',
      badge: 'Constatação e Diagnóstico',
      desc: 'São documentos formais produzidos a partir de vistorias, medições, ensaios e análises de engenharia. Apresentam a realidade física do equipamento ou da instalação, apontando o que está em conformidade e o que precisa ser corrigido.',
      example: 'Exemplo: Laudo de conformidade mecânica de máquina para atender à NR-12 ou vistoria técnica de ponte rolante.',
    },
    {
      title: 'Pareceres Técnicos',
      badge: 'Opinião Técnica Fundamentada',
      desc: 'São avaliações profissionais emitidas por engenheiro habilitado sobre uma situação específica, impasse técnico ou falha. Trazem a interpretação fundamentada da engenharia para auxiliar gestores na tomada de decisão ou em disputas com fornecedores.',
      example: 'Exemplo: Parecer técnico sobre a causa do desgaste prematuro de um motor redutor importado.',
    },
    {
      title: 'ART — Anotação de Responsabilidade Técnica',
      badge: 'Registro Legal no CREA',
      desc: 'A ART é o instrumento legal que vincula formalmente o Engenheiro Mecânico à atividade executada perante o CREA-SP. Ela comprova que o serviço foi projetado, avaliado ou inspecionado por um profissional habilitado.',
      example: 'Transparência: A ART não é um certificado genérico nem um produto independente. Ela é emitida especificamente para a obra ou serviço efetivamente contratado e executado.',
    },
  ],
};

export const technicalResponsibility = {
  sectionTag: 'Responsabilidade Técnica & Transparência',
  title: 'Engenharia com Respaldo Profissional e Transparência',
  subtitle: 'Atuação técnica ética, pautada em atribuições profissionais e conformidade com as exigências do CREA-SP.',
  engineerTitle: 'Engenheiro Mecânico Responsável',
  engineerReg: 'Registro Profissional no CREA-SP',
  statementTitle: 'Como funciona nossa atuação',
  statementText:
    'A Consiglieri atua como marca institucional e canal de divulgação e relacionamento comercial. Todos os serviços técnicos de Engenharia Mecânica são assumidos diretamente pelo Engenheiro Mecânico habilitado perante o Conselho Regional de Engenharia e Agronomia de São Paulo (CREA-SP), dentro de suas atribuições profissionais e com emissão de ART quando exigível por lei.',
  governanceNote:
    'A publicação de cada serviço técnico em nosso catálogo observa as atribuições profissionais e eventuais requisitos regulatórios aplicáveis. Atividades que demandam credenciamentos específicos são validadas caso a caso.',
};
