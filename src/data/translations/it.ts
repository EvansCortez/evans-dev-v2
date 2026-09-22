import type { PortfolioTranslation } from "../translationTypes";

export const it: PortfolioTranslation = {
  profile: {
    role: "Ingegnere Machine Learning e Sviluppatore Full-Stack",
    summary:
      "Studente di informatica che sviluppa ricerca sulla sicurezza dell'IA, agenti conversazionali, sistemi di dati e prodotti full-stack con risultati tecnici misurabili.",
    graduation: "Laurea prevista per maggio 2027",
  },
  impactMetrics: {
    "Project Case Studies": { label: "Casi di Studio di Progetti", detail: "IA, sistemi di dati e progetti full-stack" },
    "Model Accuracy": { label: "Precisione del Modello", detail: "Ricerca sulla rilevazione di prompt injection" },
    "Certifications": { label: "Certificazioni", detail: "IA, ML, supporto IT e ingegneria del software" },
    "Infrastructure Uptime": { label: "Disponibilità dell'Infrastruttura", detail: "Ambiente di supporto tecnologico del campus" },
  },
  focusAreas: {
    "AI Security": {
      label: "Sicurezza dell'IA",
      value: "Rilevamento di prompt injection, valutazione del rischio e flussi di lavoro per agenti più sicuri.",
    },
    "Applied Machine Learning": {
      label: "Machine Learning Applicato",
      value: "Pipeline NLP, apprendimento supervisionato, valutazione e automazione utile.",
    },
    "Full-Stack Systems": {
      label: "Sistemi Full-Stack",
      value: "Next.js, Flask, SQL, modelli di dati local-first e interfacce pratiche.",
    },
  },
  experience: {
    "sju-it-support": {
      role: "Assistente Studentesco IT",
      summary:
        "Supporta le operazioni tecnologiche del campus, tra cui hardware, sistemi per le aule, infrastruttura di sicurezza e flussi di assistenza agli utenti.",
      highlights: [
        "Diagnostica e risolve problemi hardware mantenendo un uptime del 99,2% per l'infrastruttura critica.",
        "Distribuisce e ottimizza oltre 50 telecamere di sicurezza in tutto il campus con script di monitoraggio personalizzati.",
        "Gestisce oltre 100 richieste tecniche mensili con una valutazione di soddisfazione di 4,8/5.",
        "Esegue manutenzione preventiva che ha ridotto le chiamate di emergenza del 35%.",
      ],
    },
    "techx-data-engineer": {
      role: "Tirocinante Ingegnere dei Dati",
      summary:
        "Ha progettato applicazioni NLP all'interno di sprint Agile utilizzando Python e moderni flussi di lavoro di machine learning.",
      highlights: [
        "Ha condotto revisioni del codice per oltre 20 pull request su funzionalità di dati e automazione.",
        "Ha implementato strumenti di IA generativa che hanno aumentato l'efficienza dell'automazione del 40%.",
        "Ha tradotto requisiti di prodotto ambigui in attività di elaborazione dati verificabili.",
      ],
    },
    "neuralseek-agent-builder": {
      role: "Tirocinante nello Sviluppo di Agenti IA",
      summary:
        "Ha costruito agenti conversazionali utilizzando flussi di lavoro LLM, prompt engineering, valutazione e pratiche etiche di IA.",
      highlights: [
        "Ha costruito oltre 15 agenti conversazionali per flussi di lavoro assistenti pratici.",
        "Ha migliorato l'accuratezza delle risposte del 28% attraverso il perfezionamento iterativo di prompt e comportamento.",
        "Ha documentato i pattern di comportamento degli agenti per supportare la manutenibilità e un rilascio più sicuro.",
      ],
    },
  },
  projects: {
    "personal-finance-tracker": {
      title: "Tracker di Finanza Personale",
      description:
        "Sistema di gestione finanziaria full-stack con CLI, GUI desktop e applicazione web Flask. Include rilevamento dei pagamenti ricorrenti, previsione di budget e visualizzazioni dinamiche.",
      summary:
        "Uno strumento di pianificazione finanziaria multi-interfaccia progettato per rendere più comprensibili le abitudini di spesa, gli obblighi ricorrenti e le decisioni di budget.",
      problem:
        "Gli strumenti di budget personale spesso nascondono i dettagli implementativi che rendono utile la previsione. Questo progetto si concentra sul rendere trasparenti l'inserimento delle transazioni, i pagamenti ricorrenti, i limiti di budget e i report su più interfacce.",
      architecture: [
        "SQLite memorizza transazioni, categorie, pagamenti ricorrenti e regole di budget.",
        "Un livello di servizio Python condiviso alimenta il CLI, l'interfaccia desktop Tkinter e l'app web Flask.",
        "Pandas trasforma i dati grezzi in riepiloghi mensili, tendenze per categoria e input di previsione.",
      ],
      technicalDecisions: [
        "La logica finanziaria principale è stata mantenuta indipendente dall'interfaccia, così che CLI, app desktop e app web restino coerenti.",
        "SQLite è stato scelto per un flusso di lavoro local-first portatile con una struttura relazionale sufficiente per i report.",
        "Il rilevamento dei pagamenti ricorrenti è stato modellato separatamente dall'inserimento delle transazioni per mantenere flessibile l'automazione futura.",
      ],
      challenges: [
        "Normalizzare descrizioni di transazioni incoerenti senza adattarsi eccessivamente a un unico formato di esportazione bancaria.",
        "Mantenere utile l'output di previsione evitando una falsa precisione su piccoli dataset.",
        "Progettare tre interfacce senza duplicare la logica di business.",
      ],
      learnings: [
        "Un modello di dati chiaro conta più della rifinitura dell'interfaccia man mano che crescono le funzionalità di analisi.",
        "Le piccole funzionalità di automazione risultano più affidabili quando gli utenti possono ispezionare i record sottostanti.",
      ],
      highlights: [
        "Costruite interfacce CLI, desktop e web su un modello di dati condiviso.",
        "Aggiunto il rilevamento dei pagamenti ricorrenti per individuare abbonamenti e costi fissi.",
        "Utilizzati riepiloghi basati su Pandas per alimentare previsioni e report visivi.",
      ],
      outcomes: [
        "Trasformata la revisione manuale del budget in un flusso di lavoro ripetibile.",
        "Creata un'architettura di progetto riutilizzabile per future funzionalità finanziarie.",
      ],
    },
    "multi-interface-nlp-chatbot": {
      title: "Chatbot NLP Multi-Interfaccia",
      description:
        "Chatbot conversazionale che sfrutta NLTK per l'analisi del sentiment, il riconoscimento di entità e risposte contestuali. Include I/O vocale e cronologia delle conversazioni persistente.",
      summary:
        "Un progetto di IA conversazionale incentrato su flussi di lavoro pratici di linguaggio naturale su interfacce desktop, web e vocali.",
      problem:
        "Molte demo di chatbot si fermano a una semplice casella di testo. Questo progetto esplora come lo stesso motore NLP possa supportare diverse modalità di interazione preservando contesto e cronologia dell'utente.",
      architecture: [
        "Le pipeline NLTK gestiscono tokenizzazione, indizi di sentiment ed estrazione di entità.",
        "Un servizio Flask espone il livello di conversazione ai client web.",
        "I client Tkinter e I/O vocale riutilizzano gli stessi moduli di risposta e cronologia.",
      ],
      technicalDecisions: [
        "L'elaborazione del linguaggio è stata separata dalla presentazione così che ogni interfaccia possa evolvere in modo indipendente.",
        "Le conversazioni sono state rese persistenti per rendere verificabile il comportamento multi-turno anziché puramente effimero.",
        "La prima versione è rimasta incentrata su NLP classico per rendere comprensibile la base prima di aggiungere gli LLM.",
      ],
      challenges: [
        "Bilanciare risposte deterministiche basate su regole con input linguistici più flessibili.",
        "Mantenere l'input vocale resiliente quando il riconoscimento vocale è imperfetto.",
        "Progettare una memoria di conversazione che aiuti senza rendere le risposte ripetitive.",
      ],
      learnings: [
        "Una base NLP modesta è utile perché rende misurabili i futuri upgrade con gli LLM.",
        "Le app multi-interfaccia hanno bisogno di contratti condivisi fin da subito, anche quando ogni interfaccia parte in piccolo.",
      ],
      highlights: [
        "Implementati analisi del sentiment ed estrazione di entità con NLTK.",
        "Resa persistente la cronologia delle conversazioni per interazioni multi-turno più utili.",
        "Collegata la stessa logica dell'assistente a flussi di lavoro web, desktop e vocali.",
      ],
      outcomes: [
        "Dimostrato come i sistemi NLP possano essere confezionati per più contesti utente.",
        "Creata una solida base per futuri miglioramenti basati su retrieval o LLM.",
      ],
    },
    "prompt-injection-detector": {
      title: "Rilevatore di Prompt Injection per LLM",
      description:
        "Progetto di ricerca sul rilevamento di attacchi adversariali nei sistemi di IA generativa. Sviluppati modelli di classificazione per identificare pattern di prompt malevoli con un'accuratezza del 92%.",
      summary:
        "Un sistema di machine learning orientato alla ricerca per identificare pattern di prompt adversariali prima che raggiungano gli agenti IA a valle.",
      problem:
        "Le applicazioni LLM possono fallire quando istruzioni malevole vengono introdotte nei prompt dell'utente o nel contenuto recuperato. Questo progetto indaga se un classificatore possa segnalare prompt rischiosi abbastanza presto da supportare flussi di lavoro di agenti IA più sicuri.",
      architecture: [
        "Campioni di prompt selezionati vengono etichettati in categorie benigne e adversariali.",
        "Il preprocessing del testo prepara i prompt per l'addestramento e la valutazione del modello.",
        "I classificatori PyTorch valutano il rischio del prompt prima che istruzioni non sicure raggiungano un livello agente.",
      ],
      technicalDecisions: [
        "Il focus è stato posto sulla rilevazione prima della generazione della risposta, così che il sistema agisca come una barriera di sicurezza.",
        "L'accuratezza è stata monitorata insieme alla dimensione del dataset per rendere concrete le affermazioni del modello.",
        "Il progetto è rimasto orientato alla ricerca, con margine per confrontare baseline classiche e neurali.",
      ],
      challenges: [
        "Evitare data leakage tra prompt di training e valutazione quando la formulazione dell'attacco è ripetitiva.",
        "Gestire attacchi semanticamente dannosi senza parole chiave malevole evidenti.",
        "Spiegare i falsi positivi in modo sufficientemente chiaro da far sì che un revisore umano si fidi del flusso di lavoro.",
      ],
      learnings: [
        "La difesa contro la prompt injection richiede controlli a più livelli; un classificatore è utile, ma non costituisce una strategia di sicurezza completa.",
        "La progettazione della valutazione è importante quanto la scelta del modello nei progetti di sicurezza dell'IA.",
      ],
      highlights: [
        "Esplorate tecniche di prompt adversariali e pattern di rilevamento.",
        "Addestrati modelli di classificazione per l'identificazione di prompt malevoli.",
        "Valutato il comportamento del modello su un dataset selezionato di attacchi via prompt.",
      ],
      outcomes: [
        "Costruito un caso di studio di sicurezza IA pronto per il portfolio con risultati misurabili.",
        "Collegate le decisioni di modellazione ML a rischi di sicurezza reali nei sistemi di IA generativa.",
      ],
    },
    "sju-tech-commons-database": {
      title: "Database dello SJU Tech Commons",
      description:
        "Database SQL aziendale per gestire una flotta di stampanti 3D, tracciamento dell'inventario, registri di manutenzione e analisi di utilizzo in tutta l'università.",
      summary:
        "Un progetto di database design per tracciare dispositivi, materiali, manutenzione e utilizzo in uno spazio tecnologico universitario.",
      problem:
        "Gli spazi tecnologici condivisi hanno bisogno di registri affidabili per dispositivi, materiali, riparazioni e utilizzo. Questo progetto modella queste operazioni così che lo staff possa rispondere rapidamente a domande su manutenzione e inventario.",
      architecture: [
        "Tabelle relazionali modellano dispositivi, utenti, materiali, registri di manutenzione ed eventi di utilizzo.",
        "Query SQL supportano report di inventario, utilizzo e manutenzione.",
        "Flussi di lavoro Java forniscono un livello di accesso pratico per le attività operative comuni.",
      ],
      technicalDecisions: [
        "È stato utilizzato uno schema relazionale normalizzato per mantenere coerenti i registri di inventario e manutenzione.",
        "Le query di reportistica sono state progettate attorno a domande operative reali anziché dashboard generiche.",
        "L'analisi di utilizzo è rimasta legata alle entità dispositivo e materiale per una migliore reportistica a lungo termine.",
      ],
      challenges: [
        "Progettare relazioni che supportino sia l'inventario attuale sia l'utilizzo storico.",
        "Mantenere i registri di manutenzione sufficientemente dettagliati da essere utili senza rallentare il lavoro dello staff.",
        "Evitare query analitiche dipendenti da fragili convenzioni di denominazione manuale.",
      ],
      learnings: [
        "I database operativi sono più solidi quando rispecchiano il modo in cui lo staff pensa già al proprio lavoro.",
        "Una buona reportistica parte da vincoli e relazioni, non da grafici.",
      ],
      highlights: [
        "Modellate entità di inventario, dispositivo, utente e manutenzione.",
        "Progettate query SQL per reportistica operativa e analisi di utilizzo.",
        "Abbinata la struttura del database a flussi di lavoro Java per un accesso pratico.",
      ],
      outcomes: [
        "Migliorata la visibilità su pattern di manutenzione e utilizzo delle risorse.",
        "Dimostrato un design di database orientato alla produzione per un flusso di lavoro reale del campus.",
      ],
    },
  },
  researchFocus: {
    title: "Rilevamento di Prompt Injection Adversariali",
    abstract:
      "Ricerca incentrata sull'identificazione di pattern di prompt malevoli che tentano di sovrascrivere le istruzioni di sistema, trapelare contesto nascosto o manipolare agenti IA a valle.",
    methods: [
      "Selezionati esempi di prompt benigni e adversariali per la classificazione binaria e per categoria di rischio.",
      "Confrontate strategie di preprocessing per prompt brevi, attacchi di role-play e tentativi di override delle istruzioni.",
      "Valutata la performance di rilevamento tramite accuratezza, revisione dei falsi positivi e copertura delle famiglie di prompt.",
    ],
    implications: [
      "Il filtraggio dei prompt dovrebbe essere un livello all'interno di una strategia di difesa più ampia che includa permessi degli strumenti, isolamento del contesto e revisione umana per le azioni sensibili.",
      "I sistemi di rilevamento hanno bisogno di dati di valutazione che includano attacchi parafrasati e indiretti, non solo pattern di parole chiave evidenti.",
    ],
    performance: {
      "Classifier Accuracy": { label: "Accuratezza del Classificatore" },
      "Prompt Samples": { label: "Campioni di Prompt" },
      "Focus Area": { label: "Area di Ricerca" },
    },
  },
};
