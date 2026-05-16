export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  problem: string;
  architecture: string[];
  technicalDecisions: string[];
  challenges: string[];
  learnings: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  repoStats: { label: string; value: string }[];
  highlights: string[];
  outcomes: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    category: "Full Stack",
    description:
      "Full-stack finance management system with CLI, desktop GUI, and Flask web app. Includes recurring payment detection, budget forecasting, and dynamic visualizations.",
    summary:
      "A multi-interface financial planning tool designed to make spending patterns, recurring obligations, and budget decisions easier to understand.",
    problem:
      "Personal budgeting tools often hide the implementation details that make forecasting useful. This project focuses on making transaction intake, recurring payments, budget limits, and reporting transparent across multiple interfaces.",
    architecture: [
      "SQLite stores transactions, categories, recurring payments, and budget rules.",
      "A shared Python service layer feeds the CLI, Tkinter desktop UI, and Flask web app.",
      "Pandas transforms raw records into monthly summaries, category trends, and forecast inputs.",
    ],
    technicalDecisions: [
      "Kept the core finance logic interface-agnostic so the CLI, desktop app, and web app stay consistent.",
      "Used SQLite for a portable local-first workflow with enough relational structure for reporting.",
      "Modeled recurring payment detection separately from transaction entry to keep future automation flexible.",
    ],
    challenges: [
      "Normalizing inconsistent transaction descriptions without overfitting to one bank export format.",
      "Keeping forecast output useful while avoiding false precision in small datasets.",
      "Designing three interfaces without duplicating business logic.",
    ],
    learnings: [
      "A clear data model matters more than interface polish when analytics features keep growing.",
      "Small automation features feel more trustworthy when users can inspect the underlying records.",
    ],
    tags: ["Python", "Flask", "SQLite", "Pandas", "Tkinter"],
    metrics: [
      { label: "Active Features", value: "12+" },
      { label: "Data Points", value: "1K+" },
    ],
    repoStats: [
      { label: "Primary Language", value: "Python" },
      { label: "Interfaces", value: "CLI / GUI / Web" },
      { label: "Repo Link", value: "Profile linked" },
    ],
    highlights: [
      "Built CLI, desktop, and web interfaces over a shared data model.",
      "Added recurring payment detection to surface subscriptions and fixed costs.",
      "Used Pandas-driven summaries to power forecasting and visual reporting.",
    ],
    outcomes: [
      "Reduced manual budget review into a repeatable workflow.",
      "Created a reusable project architecture for future finance features.",
    ],
    github: "https://github.com/EvansCortez",
  },
  {
    slug: "multi-interface-nlp-chatbot",
    title: "Multi-Interface NLP Chatbot",
    category: "AI/ML",
    description:
      "Conversational chatbot leveraging NLTK for sentiment analysis, entity recognition, and context-aware responses. Features voice I/O and persistent conversation history.",
    summary:
      "A conversational AI project focused on practical natural language workflows across desktop, web, and voice-enabled interfaces.",
    problem:
      "Many chatbot demos stop at a single text box. This project explores how the same NLP engine can support different interaction modes while preserving context and user history.",
    architecture: [
      "NLTK pipelines handle tokenization, sentiment cues, and entity extraction.",
      "A Flask service exposes the conversation layer to web clients.",
      "Tkinter and voice I/O clients reuse the same response and history modules.",
    ],
    technicalDecisions: [
      "Separated language processing from presentation so each interface can evolve independently.",
      "Persisted conversations to make multi-turn behavior testable instead of purely ephemeral.",
      "Kept the first version classical NLP-first to make the baseline understandable before adding LLMs.",
    ],
    challenges: [
      "Balancing deterministic rule-based responses with more flexible language inputs.",
      "Keeping voice input resilient when speech recognition output is imperfect.",
      "Designing conversation memory that helps without making responses feel stale.",
    ],
    learnings: [
      "A modest NLP baseline is useful because it makes later LLM upgrades measurable.",
      "Multi-interface apps need shared contracts early, even when each UI starts small.",
    ],
    tags: ["Python", "NLTK", "Flask", "Tkinter", "NLP"],
    metrics: [
      { label: "Interfaces", value: "3" },
      { label: "Languages", value: "5+" },
    ],
    repoStats: [
      { label: "Primary Language", value: "Python" },
      { label: "NLP Layer", value: "NLTK" },
      { label: "Repo Link", value: "Profile linked" },
    ],
    highlights: [
      "Implemented sentiment analysis and entity extraction with NLTK.",
      "Persisted conversation history for more useful multi-turn interactions.",
      "Connected the same assistant logic to web, desktop, and voice workflows.",
    ],
    outcomes: [
      "Demonstrated how NLP systems can be packaged for multiple user contexts.",
      "Created a strong foundation for future retrieval or LLM-backed upgrades.",
    ],
    github: "https://github.com/EvansCortez",
  },
  {
    slug: "prompt-injection-detector",
    title: "LLM Prompt Injection Detector",
    category: "AI Security",
    description:
      "Research project on adversarial attack detection in generative AI systems. Developed classification models to identify malicious prompt patterns with 92% accuracy.",
    summary:
      "A research-oriented machine learning system for identifying adversarial prompt patterns before they reach downstream AI agents.",
    problem:
      "LLM applications can fail when malicious instructions are smuggled into user prompts or retrieved content. This project investigates whether a classifier can flag risky prompts early enough to support safer AI agent workflows.",
    architecture: [
      "Curated prompt samples are labeled across benign and adversarial categories.",
      "Text preprocessing prepares prompts for model training and evaluation.",
      "PyTorch classifiers score prompt risk before unsafe instructions reach an agent layer.",
    ],
    technicalDecisions: [
      "Focused on detection before response generation so the system can act as a guardrail.",
      "Tracked accuracy alongside dataset size to make model claims concrete.",
      "Kept the project research-oriented, with room to compare classical and neural baselines.",
    ],
    challenges: [
      "Avoiding leakage between training and evaluation prompts when attack phrasing is repetitive.",
      "Handling attacks that are semantically harmful without obvious malicious keywords.",
      "Explaining false positives clearly enough for a human reviewer to trust the workflow.",
    ],
    learnings: [
      "Prompt-injection defense needs layered controls; a classifier is useful, but not a complete safety story.",
      "Evaluation design is as important as model selection in AI security projects.",
    ],
    tags: ["Python", "PyTorch", "NLP", "Security"],
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "Dataset Size", value: "5K+" },
    ],
    repoStats: [
      { label: "Primary Language", value: "Python" },
      { label: "Modeling", value: "PyTorch" },
      { label: "Repo Link", value: "Profile linked" },
    ],
    highlights: [
      "Explored adversarial prompting techniques and detection patterns.",
      "Trained classification models for malicious prompt identification.",
      "Evaluated model behavior against a curated prompt attack dataset.",
    ],
    outcomes: [
      "Built a portfolio-ready AI safety case study with measurable results.",
      "Connected ML modeling decisions to real security risks in GenAI systems.",
    ],
    github: "https://github.com/EvansCortez",
  },
  {
    slug: "sju-tech-commons-database",
    title: "SJU Tech Commons Database",
    category: "Data Systems",
    description:
      "Enterprise SQL database for managing 3D printer fleet, inventory tracking, maintenance logs, and usage analytics across the university.",
    summary:
      "A database design project for tracking devices, materials, maintenance, and usage across a university technology space.",
    problem:
      "Shared technology spaces need reliable records for devices, materials, repairs, and usage. This project models those operations so staff can answer maintenance and inventory questions quickly.",
    architecture: [
      "Relational tables model devices, users, materials, maintenance logs, and usage events.",
      "SQL queries support inventory, utilization, and maintenance reporting.",
      "Java workflows provide a practical access layer for common operational tasks.",
    ],
    technicalDecisions: [
      "Used a normalized relational schema to keep inventory and maintenance records consistent.",
      "Designed reporting queries around real operational questions instead of generic dashboards.",
      "Kept usage analytics tied to device and material entities for better long-term reporting.",
    ],
    challenges: [
      "Designing relationships that support both current inventory and historical usage.",
      "Keeping maintenance logs detailed enough to be useful without slowing staff workflows.",
      "Avoiding analytics queries that depend on brittle manual naming conventions.",
    ],
    learnings: [
      "Operational databases are strongest when they mirror how staff already think about work.",
      "Good reporting starts with constraints and relationships, not charts.",
    ],
    tags: ["SQL", "Java", "Database Design"],
    metrics: [
      { label: "Devices", value: "25+" },
      { label: "Monthly Users", value: "200+" },
    ],
    repoStats: [
      { label: "Primary Stack", value: "SQL / Java" },
      { label: "Domain", value: "Operations" },
      { label: "Repo Link", value: "Profile linked" },
    ],
    highlights: [
      "Modeled inventory, device, user, and maintenance entities.",
      "Designed SQL queries for operational reporting and usage analytics.",
      "Paired database structure with Java workflows for practical access.",
    ],
    outcomes: [
      "Improved visibility into maintenance patterns and resource usage.",
      "Showed production-minded database design for a real campus workflow.",
    ],
    github: "https://github.com/EvansCortez",
  },
];

export const certifications = [
  { title: "IBM - Introduction to Artificial Intelligence (AI)", date: "March 2026" },
  { title: "IBM - Generative AI: Introduction and Applications", date: "March 2026" },
  { title: "IBM - Generative AI: Prompt Engineering Basics", date: "April 2026" },
  { title: "IBM - AI Foundations for Everyone", date: "April 2026" },
  { title: "IBM - Exploratory Data Analysis for Machine Learning", date: "April 2026" },
  { title: "IBM - Supervised Machine Learning: Regression", date: "April 2026" },
  { title: "IBM - Unsupervised Machine Learning", date: "April 2026" },
  { title: "IBM - Deep Learning and Reinforcement Learning", date: "April 2026" },
  { title: "IBM - IBM Machine Learning", date: "April 2026" },
  { title: "Google - Technical Support Fundamentals", date: "April 2026" },
  { title: "Google - The Bits and Bytes of Computer Networking", date: "April 2026" },
  { title: "Google - Operating Systems and You: Becoming a Power User", date: "April 2026" },
  { title: "Google - System Administration and IT Infrastructure", date: "April 2026" },
  { title: "Google - IT Security: Defense against the digital dark arts", date: "April 2026" },
  { title: "Google - Accelerate Your Job Search with AI", date: "April 2026" },
  { title: "Google IT Support Professional", date: "April 2026" },
  { title: "NeuralSeek Certification", date: "June 2025" },
  { title: "NeuralSeek Multi-Tier AI Agent Architecture", date: "July 2025" },
  { title: "BCG GenAI Job Simulation", date: "May 2025" },
  { title: "Electronic Arts Software Engineering Virtual Program", date: "May 2025" },
];

export const technologies = [
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "JavaScript/TypeScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "PyTorch", category: "ML & Data Science" },
  { name: "TensorFlow", category: "ML & Data Science" },
  { name: "Pandas", category: "ML & Data Science" },
  { name: "Scikit-Learn", category: "ML & Data Science" },
  { name: "NLTK", category: "ML & Data Science" },
  { name: "Matplotlib", category: "ML & Data Science" },
  { name: "React.js", category: "Web & Backend" },
  { name: "Next.js", category: "Web & Backend" },
  { name: "Flask", category: "Web & Backend" },
  { name: "Node.js", category: "Web & Backend" },
  { name: "REST APIs", category: "Web & Backend" },
  { name: "SQLite", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Git", category: "Tools & Platforms" },
  { name: "Docker", category: "Tools & Platforms" },
  { name: "GitHub", category: "Tools & Platforms" },
  { name: "Jupyter Notebook", category: "Tools & Platforms" },
  { name: "Tkinter", category: "Tools & Platforms" },
];

export const researchFocus = {
  title: "Adversarial Prompt Injection Detection",
  abstract:
    "Research focused on identifying malicious prompt patterns that attempt to override system instructions, leak hidden context, or manipulate downstream AI agents.",
  methods: [
    "Curated benign and adversarial prompt examples for binary and risk-category classification.",
    "Compared preprocessing strategies for short-form prompts, role-play attacks, and instruction override attempts.",
    "Evaluated detection performance using accuracy, false positive review, and prompt family coverage.",
  ],
  performance: [
    { label: "Classifier Accuracy", value: "92%" },
    { label: "Prompt Samples", value: "5K+" },
    { label: "Focus Area", value: "AI Security" },
  ],
  implications: [
    "Prompt filtering should be one layer in a broader defense strategy that includes tool permissions, context isolation, and human review for sensitive actions.",
    "Detection systems need evaluation data that includes paraphrased and indirect attacks, not only obvious keyword patterns.",
  ],
};
