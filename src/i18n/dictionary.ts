export type Dictionary = {
  nav: {
    home: string;
    projects: string;
    experience: string;
    research: string;
    credentials: string;
    contact: string;
    resume: string;
    menuOpen: string;
    menuClose: string;
    themeToLight: string;
    themeToDark: string;
    languagePicker: string;
  };
  backToTop: string;
  footer: string;
  home: {
    eyebrow: string;
    viewWork: string;
    contact: string;
    resume: string;
    pursuing: string;
    selectedWorkEyebrow: string;
    selectedWorkTitle: string;
    allProjects: string;
    experienceEyebrow: string;
    experienceTitle: string;
    experienceBlurb: string;
    fullTimeline: string;
    researchTitle: string;
    readResearchFocus: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    description: string;
    filterAll: string;
  };
  experiencePage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  researchPage: {
    eyebrow: string;
    title: string;
    methods: string;
    securityImplications: string;
  };
  credentialsPage: {
    eyebrow: string;
    title: string;
    description: string;
    technicalProficiencies: string;
    relevantCoursework: string;
    certifications: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    resume: string;
    directLinks: string;
  };
  contactForm: {
    name: string;
    email: string;
    message: string;
    send: string;
    errorName: string;
    errorEmail: string;
    errorMessage: string;
    statusCheckFields: string;
    statusOpeningMailApp: string;
  };
  projectDetail: {
    backToProjects: string;
    problem: string;
    architecture: string;
    technicalDecisions: string;
    buildHighlights: string;
    outcomes: string;
    challenges: string;
    whatILearned: string;
    viewGithub: string;
    liveDemo: string;
    notFoundTitle: string;
  };
  techCategories: {
    languages: string;
    mlAndData: string;
    webAndBackend: string;
    databases: string;
    tools: string;
  };
};

export const en: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    research: "Research",
    credentials: "Credentials",
    contact: "Contact",
    resume: "Resume",
    menuOpen: "Menu",
    menuClose: "Close",
    themeToLight: "Light",
    themeToDark: "Dark",
    languagePicker: "Language",
  },
  backToTop: "Back to top",
  footer: "© {year} Evans Cortez. Built with Next.js and React.",
  home: {
    eyebrow: "CS student building practical AI systems",
    viewWork: "View Work",
    contact: "Contact",
    resume: "Resume",
    pursuing: "Currently pursuing a B.S. in Computer Science at {school}, {graduation}.",
    selectedWorkEyebrow: "Selected Work",
    selectedWorkTitle: "Case studies with technical depth.",
    allProjects: "All projects →",
    experienceEyebrow: "Experience",
    experienceTitle: "Operational work meets AI engineering.",
    experienceBlurb: "The portfolio combines hands-on infrastructure support, data engineering, and agent-building work.",
    fullTimeline: "Full timeline →",
    researchTitle: "Researching safer LLM workflows.",
    readResearchFocus: "Read research focus →",
  },
  projectsPage: {
    eyebrow: "Project Lab",
    title: "Case studies built around measurable engineering decisions.",
    description: "Browse portfolio projects as practical systems: what problem they solve, how they are structured, what tradeoffs shaped them, and where each one can grow next.",
    filterAll: "All",
  },
  experiencePage: {
    eyebrow: "Experience",
    title: "Hands-on technical work across infrastructure, data, and AI.",
    description: "A timeline of roles where operational reliability, user support, code review, automation, and AI agent work came together.",
  },
  researchPage: {
    eyebrow: "Research",
    title: "Adversarial prompt injection detection for safer AI systems.",
    methods: "Methods",
    securityImplications: "Security Implications",
  },
  credentialsPage: {
    eyebrow: "Credentials",
    title: "A technical foundation built across AI, software, and systems.",
    description: "Certifications, tools, and coursework that support the project work across machine learning, data systems, full-stack development, and IT operations.",
    technicalProficiencies: "Technical Proficiencies",
    relevantCoursework: "Relevant Coursework",
    certifications: "Certifications & Professional Development",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Let's build something useful.",
    description: "Reach out for AI/ML opportunities, full-stack projects, research collaboration, or technical support work.",
    email: "Email",
    resume: "Resume",
    directLinks: "Direct links",
  },
  contactForm: {
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    errorName: "Add your name.",
    errorEmail: "Use a valid email address.",
    errorMessage: "Write at least 20 characters.",
    statusCheckFields: "Please check the highlighted fields.",
    statusOpeningMailApp: "Opening your email app with this message pre-filled.",
  },
  projectDetail: {
    backToProjects: "← Back to projects",
    problem: "Problem",
    architecture: "Architecture",
    technicalDecisions: "Technical Decisions",
    buildHighlights: "Build Highlights",
    outcomes: "Outcomes",
    challenges: "Challenges",
    whatILearned: "What I Learned",
    viewGithub: "View GitHub",
    liveDemo: "Live Demo",
    notFoundTitle: "Project Not Found",
  },
  techCategories: {
    languages: "Languages",
    mlAndData: "ML & Data Science",
    webAndBackend: "Web & Backend",
    databases: "Databases",
    tools: "Tools & Platforms",
  },
};

export function format(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => vars[key] ?? match);
}
