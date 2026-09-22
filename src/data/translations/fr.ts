import type { PortfolioTranslation } from "../translationTypes";

export const fr: PortfolioTranslation = {
  profile: {
    role: "Ingénieur Machine Learning et Développeur Full-Stack",
    summary:
      "Étudiant en informatique menant des recherches en sécurité de l'IA, des agents conversationnels, des systèmes de données et des produits full-stack avec des résultats techniques mesurables.",
    graduation: "Diplôme prévu en mai 2027",
  },
  impactMetrics: {
    "Project Case Studies": { label: "Études de Cas de Projets", detail: "IA, systèmes de données et projets full-stack" },
    "Model Accuracy": { label: "Précision du Modèle", detail: "Recherche sur la détection d'injection de prompts" },
    "Certifications": { label: "Certifications", detail: "IA, ML, support informatique et génie logiciel" },
    "Infrastructure Uptime": { label: "Disponibilité de l'Infrastructure", detail: "Environnement de support technologique du campus" },
  },
  focusAreas: {
    "AI Security": {
      label: "Sécurité de l'IA",
      value: "Détection d'injection de prompts, scoring de risque et flux de travail d'agents plus sûrs.",
    },
    "Applied Machine Learning": {
      label: "Machine Learning Appliqué",
      value: "Pipelines NLP, apprentissage supervisé, évaluation et automatisation utile.",
    },
    "Full-Stack Systems": {
      label: "Systèmes Full-Stack",
      value: "Next.js, Flask, SQL, modèles de données local-first et interfaces concrètes.",
    },
  },
  experience: {
    "sju-it-support": {
      role: "Assistant Étudiant en Informatique",
      summary:
        "Assure le support des opérations technologiques du campus : matériel, systèmes de salles de classe, infrastructure de sécurité et flux d'assistance aux utilisateurs.",
      highlights: [
        "Diagnostique et résout des problèmes matériels tout en maintenant une disponibilité de 99,2 % pour l'infrastructure critique.",
        "Déploie et optimise plus de 50 caméras de sécurité sur tout le campus avec des scripts de surveillance sur mesure.",
        "Gère plus de 100 demandes techniques mensuelles avec une note de satisfaction de 4,8/5.",
        "Réalise une maintenance préventive ayant réduit les appels d'urgence de 35 %.",
      ],
    },
    "techx-data-engineer": {
      role: "Stagiaire Ingénieur de Données",
      summary:
        "A conçu des applications NLP dans des sprints Agile en utilisant Python et des flux de travail modernes de machine learning.",
      highlights: [
        "A mené des revues de code pour plus de 20 pull requests sur des fonctionnalités de données et d'automatisation.",
        "A mis en œuvre des outils d'IA générative ayant augmenté l'efficacité de l'automatisation de 40 %.",
        "A traduit des exigences produit ambiguës en tâches de traitement de données testables.",
      ],
    },
    "neuralseek-agent-builder": {
      role: "Stagiaire en Création d'Agents IA",
      summary:
        "A construit des agents conversationnels via des flux de travail LLM, l'ingénierie de prompts, l'évaluation et des pratiques d'IA éthiques.",
      highlights: [
        "A construit plus de 15 agents conversationnels pour des flux de travail d'assistants concrets.",
        "A amélioré la précision des réponses de 28 % grâce à un raffinement itératif des prompts et du comportement.",
        "A documenté les schémas de comportement des agents pour soutenir la maintenabilité et un déploiement plus sûr.",
      ],
    },
  },
  projects: {
    "personal-finance-tracker": {
      title: "Suivi de Finances Personnelles",
      description:
        "Système de gestion financière full-stack avec CLI, interface graphique de bureau et application web Flask. Inclut la détection des paiements récurrents, la prévision budgétaire et des visualisations dynamiques.",
      summary:
        "Un outil de planification financière multi-interfaces conçu pour rendre plus lisibles les habitudes de dépenses, les obligations récurrentes et les décisions budgétaires.",
      problem:
        "Les outils de budget personnel masquent souvent les détails d'implémentation qui rendent la prévision utile. Ce projet vise à rendre transparents la saisie des transactions, les paiements récurrents, les limites budgétaires et les rapports sur plusieurs interfaces.",
      architecture: [
        "SQLite stocke les transactions, catégories, paiements récurrents et règles budgétaires.",
        "Une couche de service Python partagée alimente le CLI, l'interface de bureau Tkinter et l'application web Flask.",
        "Pandas transforme les données brutes en résumés mensuels, tendances par catégorie et entrées de prévision.",
      ],
      technicalDecisions: [
        "La logique financière centrale a été gardée indépendante de l'interface afin que le CLI, l'app de bureau et l'app web restent cohérents.",
        "SQLite a été choisi pour un flux de travail local-first portable avec une structure relationnelle suffisante pour les rapports.",
        "La détection des paiements récurrents a été modélisée séparément de la saisie des transactions afin de garder l'automatisation future flexible.",
      ],
      challenges: [
        "Normaliser des descriptions de transactions incohérentes sans surajuster à un seul format d'export bancaire.",
        "Garder la prévision utile tout en évitant une fausse précision sur de petits jeux de données.",
        "Concevoir trois interfaces sans dupliquer la logique métier.",
      ],
      learnings: [
        "Un modèle de données clair compte davantage que le poli de l'interface à mesure que les fonctionnalités d'analyse se multiplient.",
        "Les petites fonctionnalités d'automatisation inspirent plus confiance quand les utilisateurs peuvent inspecter les données sous-jacentes.",
      ],
      highlights: [
        "Construction d'interfaces CLI, bureau et web sur un modèle de données partagé.",
        "Ajout de la détection des paiements récurrents pour repérer abonnements et coûts fixes.",
        "Utilisation de résumés pilotés par Pandas pour alimenter la prévision et les rapports visuels.",
      ],
      outcomes: [
        "Transformation de la revue budgétaire manuelle en un flux de travail reproductible.",
        "Création d'une architecture de projet réutilisable pour de futures fonctionnalités financières.",
      ],
    },
    "multi-interface-nlp-chatbot": {
      title: "Chatbot NLP Multi-Interfaces",
      description:
        "Chatbot conversationnel exploitant NLTK pour l'analyse de sentiment, la reconnaissance d'entités et des réponses contextuelles. Doté d'entrées/sorties vocales et d'un historique de conversation persistant.",
      summary:
        "Un projet d'IA conversationnelle centré sur des flux de travail concrets de traitement du langage naturel sur des interfaces bureau, web et vocales.",
      problem:
        "De nombreuses démos de chatbot se limitent à une simple zone de texte. Ce projet explore comment un même moteur NLP peut prendre en charge différents modes d'interaction tout en préservant le contexte et l'historique utilisateur.",
      architecture: [
        "Les pipelines NLTK gèrent la tokenisation, les indices de sentiment et l'extraction d'entités.",
        "Un service Flask expose la couche de conversation aux clients web.",
        "Les clients Tkinter et d'entrée/sortie vocale réutilisent les mêmes modules de réponse et d'historique.",
      ],
      technicalDecisions: [
        "Le traitement du langage a été séparé de la présentation afin que chaque interface puisse évoluer indépendamment.",
        "Les conversations ont été persistées pour rendre le comportement multi-tours vérifiable plutôt que purement éphémère.",
        "La première version est restée centrée sur le NLP classique pour rendre la base compréhensible avant d'ajouter des LLM.",
      ],
      challenges: [
        "Équilibrer des réponses déterministes fondées sur des règles avec des entrées langagières plus flexibles.",
        "Garder l'entrée vocale résiliente lorsque la reconnaissance vocale est imparfaite.",
        "Concevoir une mémoire de conversation utile sans rendre les réponses répétitives.",
      ],
      learnings: [
        "Une base NLP modeste est utile car elle rend mesurables les futures montées en gamme vers des LLM.",
        "Les applications multi-interfaces ont besoin de contrats partagés dès le début, même quand chaque interface démarre petite.",
      ],
      highlights: [
        "Mise en œuvre de l'analyse de sentiment et de l'extraction d'entités avec NLTK.",
        "Persistance de l'historique de conversation pour des interactions multi-tours plus utiles.",
        "Connexion de la même logique d'assistant aux flux de travail web, bureau et vocaux.",
      ],
      outcomes: [
        "Démonstration de la manière dont les systèmes NLP peuvent être packagés pour plusieurs contextes utilisateur.",
        "Création d'une base solide pour de futures améliorations basées sur la recherche ou les LLM.",
      ],
    },
    "prompt-injection-detector": {
      title: "Détecteur d'Injection de Prompts pour LLM",
      description:
        "Projet de recherche sur la détection d'attaques adversariales dans les systèmes d'IA générative. Développement de modèles de classification identifiant les schémas de prompts malveillants avec 92 % de précision.",
      summary:
        "Un système de machine learning orienté recherche pour identifier les schémas de prompts adversariaux avant qu'ils n'atteignent les agents d'IA en aval.",
      problem:
        "Les applications LLM peuvent échouer lorsque des instructions malveillantes sont introduites dans les prompts utilisateur ou le contenu récupéré. Ce projet examine si un classificateur peut signaler les prompts à risque assez tôt pour soutenir des flux de travail d'agents IA plus sûrs.",
      architecture: [
        "Des échantillons de prompts sélectionnés sont étiquetés selon des catégories bénignes et adversariales.",
        "Le prétraitement du texte prépare les prompts pour l'entraînement et l'évaluation du modèle.",
        "Des classificateurs PyTorch évaluent le risque du prompt avant que des instructions dangereuses n'atteignent une couche agent.",
      ],
      technicalDecisions: [
        "L'accent a été mis sur la détection avant la génération de réponse afin que le système agisse comme un garde-fou.",
        "La précision a été suivie parallèlement à la taille du jeu de données pour rendre les affirmations du modèle concrètes.",
        "Le projet est resté orienté recherche, avec la possibilité de comparer des références classiques et neuronales.",
      ],
      challenges: [
        "Éviter les fuites entre les prompts d'entraînement et d'évaluation lorsque la formulation de l'attaque est répétitive.",
        "Gérer des attaques sémantiquement nuisibles sans mots-clés malveillants évidents.",
        "Expliquer les faux positifs assez clairement pour qu'un relecteur humain fasse confiance au flux de travail.",
      ],
      learnings: [
        "La défense contre l'injection de prompts nécessite des contrôles en couches ; un classificateur est utile, mais ne constitue pas une stratégie de sécurité complète.",
        "La conception de l'évaluation compte autant que le choix du modèle dans les projets de sécurité de l'IA.",
      ],
      highlights: [
        "Exploration de techniques de prompts adversariaux et de schémas de détection.",
        "Entraînement de modèles de classification pour l'identification de prompts malveillants.",
        "Évaluation du comportement du modèle sur un jeu de données d'attaques par prompt sélectionné.",
      ],
      outcomes: [
        "Construction d'une étude de cas de sécurité de l'IA prête pour un portfolio, avec des résultats mesurables.",
        "Mise en relation des décisions de modélisation ML avec des risques de sécurité réels dans les systèmes d'IA générative.",
      ],
    },
    "sju-tech-commons-database": {
      title: "Base de Données du SJU Tech Commons",
      description:
        "Base de données SQL d'entreprise pour gérer une flotte d'imprimantes 3D, le suivi des stocks, les journaux de maintenance et l'analyse d'utilisation dans toute l'université.",
      summary:
        "Un projet de conception de base de données pour suivre les appareils, matériaux, la maintenance et l'utilisation dans un espace technologique universitaire.",
      problem:
        "Les espaces technologiques partagés ont besoin de registres fiables pour les appareils, les matériaux, les réparations et l'utilisation. Ce projet modélise ces opérations afin que le personnel puisse répondre rapidement aux questions de maintenance et d'inventaire.",
      architecture: [
        "Des tables relationnelles modélisent les appareils, utilisateurs, matériaux, journaux de maintenance et événements d'utilisation.",
        "Des requêtes SQL alimentent les rapports d'inventaire, d'utilisation et de maintenance.",
        "Des flux de travail Java fournissent une couche d'accès pratique pour les tâches opérationnelles courantes.",
      ],
      technicalDecisions: [
        "Un schéma relationnel normalisé a été utilisé pour garder cohérents les registres d'inventaire et de maintenance.",
        "Les requêtes de rapport ont été conçues autour de vraies questions opérationnelles plutôt que de tableaux de bord génériques.",
        "L'analyse d'utilisation est restée liée aux entités appareil et matériau pour un meilleur reporting à long terme.",
      ],
      challenges: [
        "Concevoir des relations prenant en charge à la fois l'inventaire actuel et l'utilisation historique.",
        "Garder les journaux de maintenance suffisamment détaillés pour être utiles sans ralentir le travail du personnel.",
        "Éviter des requêtes analytiques dépendantes de conventions de nommage manuelles fragiles.",
      ],
      learnings: [
        "Les bases de données opérationnelles sont plus solides lorsqu'elles reflètent la manière dont le personnel pense déjà son travail.",
        "Un bon reporting commence par des contraintes et des relations, pas par des graphiques.",
      ],
      highlights: [
        "Modélisation des entités inventaire, appareil, utilisateur et maintenance.",
        "Conception de requêtes SQL pour le reporting opérationnel et l'analyse d'utilisation.",
        "Association de la structure de base de données à des flux de travail Java pour un accès pratique.",
      ],
      outcomes: [
        "Amélioration de la visibilité sur les schémas de maintenance et l'utilisation des ressources.",
        "Démonstration d'une conception de base de données orientée production pour un flux de travail réel du campus.",
      ],
    },
  },
  researchFocus: {
    title: "Détection d'Injection de Prompts Adversariaux",
    abstract:
      "Recherche centrée sur l'identification de schémas de prompts malveillants tentant de contourner les instructions système, de divulguer un contexte caché ou de manipuler des agents d'IA en aval.",
    methods: [
      "Sélection d'exemples de prompts bénins et adversariaux pour une classification binaire et par catégorie de risque.",
      "Comparaison de stratégies de prétraitement pour prompts courts, attaques de jeu de rôle et tentatives de contournement d'instructions.",
      "Évaluation de la performance de détection via la précision, la revue des faux positifs et la couverture des familles de prompts.",
    ],
    implications: [
      "Le filtrage des prompts devrait être une couche parmi une stratégie de défense plus large incluant les permissions d'outils, l'isolation du contexte et la revue humaine pour les actions sensibles.",
      "Les systèmes de détection ont besoin de données d'évaluation incluant des attaques paraphrasées et indirectes, pas seulement des schémas de mots-clés évidents.",
    ],
    performance: {
      "Classifier Accuracy": { label: "Précision du Classificateur" },
      "Prompt Samples": { label: "Échantillons de Prompts" },
      "Focus Area": { label: "Domaine de Recherche" },
    },
  },
};
