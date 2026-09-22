import type { PortfolioTranslation } from "../translationTypes";

export const pt: PortfolioTranslation = {
  profile: {
    role: "Engenheiro de Machine Learning e Desenvolvedor Full-Stack",
    summary:
      "Estudante de ciência da computação que desenvolve pesquisa em segurança de IA, agentes conversacionais, sistemas de dados e produtos full-stack com resultados técnicos mensuráveis.",
    graduation: "Formatura prevista para maio de 2027",
  },
  impactMetrics: {
    "Project Case Studies": { label: "Estudos de Caso de Projetos", detail: "IA, sistemas de dados e projetos full-stack" },
    "Model Accuracy": { label: "Precisão do Modelo", detail: "Pesquisa em detecção de injeção de prompts" },
    "Certifications": { label: "Certificações", detail: "IA, ML, suporte de TI e engenharia de software" },
    "Infrastructure Uptime": { label: "Disponibilidade de Infraestrutura", detail: "Ambiente de suporte tecnológico do campus" },
  },
  focusAreas: {
    "AI Security": {
      label: "Segurança de IA",
      value: "Detecção de injeção de prompts, pontuação de risco e fluxos de trabalho de agentes mais seguros.",
    },
    "Applied Machine Learning": {
      label: "Machine Learning Aplicado",
      value: "Pipelines de NLP, aprendizado supervisionado, avaliação e automação útil.",
    },
    "Full-Stack Systems": {
      label: "Sistemas Full-Stack",
      value: "Next.js, Flask, SQL, modelos de dados local-first e interfaces práticas.",
    },
  },
  experience: {
    "sju-it-support": {
      role: "Assistente Estudantil de TI",
      summary:
        "Dá suporte às operações de tecnologia do campus, incluindo hardware, sistemas de sala de aula, infraestrutura de segurança e fluxos de atendimento ao usuário.",
      highlights: [
        "Diagnostica e resolve problemas de hardware mantendo 99,2% de disponibilidade para infraestrutura crítica.",
        "Implanta e otimiza mais de 50 câmeras de segurança pelo campus com scripts de monitoramento personalizados.",
        "Gerencia mais de 100 solicitações técnicas mensais com avaliação de satisfação de 4,8/5.",
        "Realiza manutenção preventiva que reduziu chamadas de emergência em 35%.",
      ],
    },
    "techx-data-engineer": {
      role: "Estagiário de Engenharia de Dados",
      summary:
        "Projetou aplicações de NLP em sprints Agile usando Python e fluxos de trabalho modernos de machine learning.",
      highlights: [
        "Conduziu revisões de código para mais de 20 pull requests em recursos de dados e automação.",
        "Implementou ferramentas de IA generativa que aumentaram a eficiência da automação em 40%.",
        "Traduziu requisitos de produto ambíguos em tarefas de processamento de dados testáveis.",
      ],
    },
    "neuralseek-agent-builder": {
      role: "Estagiário de Criação de Agentes de IA",
      summary:
        "Construiu agentes conversacionais usando fluxos de trabalho de LLM, engenharia de prompts, avaliação e práticas éticas de IA.",
      highlights: [
        "Construiu mais de 15 agentes conversacionais para fluxos de trabalho de assistentes práticos.",
        "Otimizou a precisão das respostas em 28% por meio do refinamento iterativo de prompts e comportamento.",
        "Documentou padrões de comportamento dos agentes para apoiar a manutenibilidade e uma implantação mais segura.",
      ],
    },
  },
  projects: {
    "personal-finance-tracker": {
      title: "Rastreador de Finanças Pessoais",
      description:
        "Sistema de gestão financeira full-stack com CLI, GUI desktop e aplicativo web Flask. Inclui detecção de pagamentos recorrentes, previsão orçamentária e visualizações dinâmicas.",
      summary:
        "Uma ferramenta de planejamento financeiro multi-interface projetada para facilitar o entendimento de padrões de gastos, obrigações recorrentes e decisões orçamentárias.",
      problem:
        "Ferramentas de orçamento pessoal costumam ocultar os detalhes de implementação que tornam a previsão útil. Este projeto foca em tornar transparentes a entrada de transações, os pagamentos recorrentes, os limites de orçamento e os relatórios em várias interfaces.",
      architecture: [
        "O SQLite armazena transações, categorias, pagamentos recorrentes e regras de orçamento.",
        "Uma camada de serviço Python compartilhada alimenta o CLI, a interface desktop em Tkinter e o aplicativo web Flask.",
        "O Pandas transforma registros brutos em resumos mensais, tendências por categoria e insumos de previsão.",
      ],
      technicalDecisions: [
        "A lógica financeira principal foi mantida independente de interface para que o CLI, o app desktop e o app web permaneçam consistentes.",
        "O SQLite foi usado para um fluxo de trabalho local-first portátil com estrutura relacional suficiente para relatórios.",
        "A detecção de pagamentos recorrentes foi modelada separadamente da entrada de transações para manter a automação futura flexível.",
      ],
      challenges: [
        "Normalizar descrições de transações inconsistentes sem overfitting a um único formato de exportação bancária.",
        "Manter a previsão útil evitando falsa precisão em conjuntos de dados pequenos.",
        "Projetar três interfaces sem duplicar a lógica de negócio.",
      ],
      learnings: [
        "Um modelo de dados claro importa mais do que o polimento da interface à medida que os recursos de análise crescem.",
        "Pequenos recursos de automação inspiram mais confiança quando os usuários podem inspecionar os registros subjacentes.",
      ],
      highlights: [
        "Construiu interfaces de CLI, desktop e web sobre um modelo de dados compartilhado.",
        "Adicionou detecção de pagamentos recorrentes para identificar assinaturas e custos fixos.",
        "Usou resumos baseados em Pandas para viabilizar previsão e relatórios visuais.",
      ],
      outcomes: [
        "Transformou a revisão manual de orçamento em um fluxo de trabalho repetível.",
        "Criou uma arquitetura de projeto reutilizável para futuros recursos financeiros.",
      ],
    },
    "multi-interface-nlp-chatbot": {
      title: "Chatbot de NLP Multi-Interface",
      description:
        "Chatbot conversacional que utiliza NLTK para análise de sentimento, reconhecimento de entidades e respostas sensíveis ao contexto. Possui entrada/saída de voz e histórico de conversa persistente.",
      summary:
        "Um projeto de IA conversacional focado em fluxos de trabalho práticos de linguagem natural em interfaces desktop, web e por voz.",
      problem:
        "Muitas demonstrações de chatbot param em uma simples caixa de texto. Este projeto explora como o mesmo mecanismo de NLP pode suportar diferentes modos de interação preservando contexto e histórico do usuário.",
      architecture: [
        "Pipelines de NLTK cuidam da tokenização, sinais de sentimento e extração de entidades.",
        "Um serviço Flask expõe a camada de conversa para clientes web.",
        "Clientes de Tkinter e de entrada/saída de voz reutilizam os mesmos módulos de resposta e histórico.",
      ],
      technicalDecisions: [
        "O processamento de linguagem foi separado da apresentação para que cada interface possa evoluir independentemente.",
        "As conversas foram persistidas para tornar o comportamento multi-turno testável em vez de puramente efêmero.",
        "A primeira versão manteve o foco em NLP clássico para tornar a base compreensível antes de adicionar LLMs.",
      ],
      challenges: [
        "Equilibrar respostas determinísticas baseadas em regras com entradas de linguagem mais flexíveis.",
        "Manter a entrada de voz resiliente quando o reconhecimento de fala é imperfeito.",
        "Projetar uma memória de conversa que ajude sem tornar as respostas repetitivas.",
      ],
      learnings: [
        "Uma base modesta de NLP é útil porque torna mensuráveis futuras melhorias com LLM.",
        "Aplicativos multi-interface precisam de contratos compartilhados desde cedo, mesmo quando cada interface começa pequena.",
      ],
      highlights: [
        "Implementou análise de sentimento e extração de entidades com NLTK.",
        "Manteve histórico de conversa persistente para interações multi-turno mais úteis.",
        "Conectou a mesma lógica de assistente a fluxos de trabalho web, desktop e de voz.",
      ],
      outcomes: [
        "Demonstrou como sistemas de NLP podem ser empacotados para múltiplos contextos de usuário.",
        "Criou uma base sólida para futuras melhorias baseadas em recuperação de informação ou LLM.",
      ],
    },
    "prompt-injection-detector": {
      title: "Detector de Injeção de Prompts para LLM",
      description:
        "Projeto de pesquisa sobre detecção de ataques adversários em sistemas de IA generativa. Modelos de classificação foram desenvolvidos para identificar padrões de prompts maliciosos com 92% de precisão.",
      summary:
        "Um sistema de machine learning orientado à pesquisa para identificar padrões de prompts adversários antes que cheguem a agentes de IA posteriores.",
      problem:
        "Aplicações de LLM podem falhar quando instruções maliciosas são infiltradas em prompts de usuários ou conteúdo recuperado. Este projeto investiga se um classificador pode sinalizar prompts arriscados cedo o suficiente para apoiar fluxos de trabalho de agentes de IA mais seguros.",
      architecture: [
        "Amostras de prompts selecionadas são rotuladas em categorias benignas e adversárias.",
        "O pré-processamento de texto prepara os prompts para o treinamento e avaliação do modelo.",
        "Classificadores em PyTorch pontuam o risco do prompt antes que instruções inseguras cheguem a uma camada de agente.",
      ],
      technicalDecisions: [
        "O foco foi a detecção antes da geração de resposta, para que o sistema atue como uma barreira de segurança.",
        "A precisão foi acompanhada junto com o tamanho do conjunto de dados para tornar as afirmações do modelo concretas.",
        "O projeto permaneceu orientado à pesquisa, com espaço para comparar baselines clássicos e neurais.",
      ],
      challenges: [
        "Evitar vazamento entre prompts de treinamento e avaliação quando a redação do ataque é repetitiva.",
        "Lidar com ataques semanticamente prejudiciais sem palavras-chave maliciosas óbvias.",
        "Explicar falsos positivos com clareza suficiente para que um revisor humano confie no fluxo de trabalho.",
      ],
      learnings: [
        "A defesa contra injeção de prompts precisa de controles em camadas; um classificador é útil, mas não uma solução completa de segurança.",
        "O design da avaliação é tão importante quanto a escolha do modelo em projetos de segurança de IA.",
      ],
      highlights: [
        "Explorou técnicas de prompts adversários e padrões de detecção.",
        "Treinou modelos de classificação para identificação de prompts maliciosos.",
        "Avaliou o comportamento do modelo em um conjunto de dados selecionado de ataques por prompt.",
      ],
      outcomes: [
        "Construiu um estudo de caso de segurança de IA pronto para portfólio com resultados mensuráveis.",
        "Conectou decisões de modelagem de ML a riscos de segurança reais em sistemas de IA generativa.",
      ],
    },
    "sju-tech-commons-database": {
      title: "Banco de Dados do SJU Tech Commons",
      description:
        "Banco de dados SQL corporativo para gerenciar uma frota de impressoras 3D, controle de inventário, registros de manutenção e análise de uso em toda a universidade.",
      summary:
        "Um projeto de design de banco de dados para rastrear dispositivos, materiais, manutenção e uso em um espaço tecnológico universitário.",
      problem:
        "Espaços tecnológicos compartilhados precisam de registros confiáveis de dispositivos, materiais, reparos e uso. Este projeto modela essas operações para que a equipe possa responder rapidamente a perguntas de manutenção e inventário.",
      architecture: [
        "Tabelas relacionais modelam dispositivos, usuários, materiais, registros de manutenção e eventos de uso.",
        "Consultas SQL dão suporte a relatórios de inventário, utilização e manutenção.",
        "Fluxos de trabalho em Java fornecem uma camada de acesso prática para tarefas operacionais comuns.",
      ],
      technicalDecisions: [
        "Um esquema relacional normalizado foi usado para manter consistentes os registros de inventário e manutenção.",
        "As consultas de relatório foram projetadas em torno de perguntas operacionais reais, em vez de dashboards genéricos.",
        "A análise de uso permaneceu vinculada às entidades de dispositivo e material para melhor relatório de longo prazo.",
      ],
      challenges: [
        "Projetar relacionamentos que suportem tanto o inventário atual quanto o uso histórico.",
        "Manter os registros de manutenção detalhados o suficiente para serem úteis sem retardar o trabalho da equipe.",
        "Evitar consultas analíticas que dependam de convenções de nomenclatura manuais frágeis.",
      ],
      learnings: [
        "Bancos de dados operacionais são mais sólidos quando refletem a forma como a equipe já pensa sobre o trabalho.",
        "Um bom relatório começa com restrições e relacionamentos, não com gráficos.",
      ],
      highlights: [
        "Modelou entidades de inventário, dispositivo, usuário e manutenção.",
        "Projetou consultas SQL para relatórios operacionais e análise de uso.",
        "Combinou a estrutura do banco de dados com fluxos de trabalho em Java para acesso prático.",
      ],
      outcomes: [
        "Melhorou a visibilidade sobre padrões de manutenção e uso de recursos.",
        "Demonstrou um design de banco de dados orientado à produção para um fluxo de trabalho real do campus.",
      ],
    },
  },
  researchFocus: {
    title: "Detecção de Injeção de Prompts Adversários",
    abstract:
      "Pesquisa focada em identificar padrões de prompts maliciosos que tentam anular instruções do sistema, vazar contexto oculto ou manipular agentes de IA posteriores.",
    methods: [
      "Seleção de exemplos de prompts benignos e adversários para classificação binária e por categoria de risco.",
      "Comparação de estratégias de pré-processamento para prompts curtos, ataques de role-play e tentativas de anulação de instruções.",
      "Avaliação do desempenho de detecção usando precisão, revisão de falsos positivos e cobertura de famílias de prompts.",
    ],
    implications: [
      "A filtragem de prompts deve ser uma camada dentro de uma estratégia de defesa mais ampla, que inclua permissões de ferramentas, isolamento de contexto e revisão humana para ações sensíveis.",
      "Sistemas de detecção precisam de dados de avaliação que incluam ataques parafraseados e indiretos, não apenas padrões óbvios de palavras-chave.",
    ],
    performance: {
      "Classifier Accuracy": { label: "Precisão do Classificador" },
      "Prompt Samples": { label: "Amostras de Prompts" },
      "Focus Area": { label: "Área de Foco" },
    },
  },
};
