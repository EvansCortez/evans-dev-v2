import { basePath } from "@/lib/site";

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

export const profile = {
  name: "Evans Cortez",
  role: "Computer Science Student · AI & Software Development",
  email: "evscortez1212@gmail.com",
  github: "https://github.com/EvansCortez",
  linkedin: "https://linkedin.com/in/evans-cortez",
  resume: `${basePath}/Evans-Cortez-Resume.pdf`,
  school: "St. John's University",
  graduation: "Expected December 2026",
  summary:
    "Computer science student building practical AI assistants, data applications, and thoughtful web experiences. My work connects software development with hands-on IT support.",
};

export const impactMetrics = [
  {
    "label": "Graduation",
    "value": "Dec 2026",
    "detail": "B.S. Computer Science \u00b7 St. John\u2019s University"
  },
  {
    "label": "Experience",
    "value": "3 roles",
    "detail": "IT support, data engineering, and AI agents"
  },
  {
    "label": "Featured work",
    "value": "4 projects",
    "detail": "Current builds and internship projects"
  },
  {
    "label": "Focus",
    "value": "AI + Web",
    "detail": "Python, LangGraph, Next.js, and React"
  }
];

export const focusAreas = [
  {
    label: "AI Security",
    value: "Prompt injection detection, risk scoring, and safer agent workflows.",
  },
  {
    label: "Applied Machine Learning",
    value: "NLP pipelines, supervised learning, evaluation, and useful automation.",
  },
  {
    label: "Full-Stack Systems",
    value: "Next.js, Flask, SQL, local-first data models, and practical interfaces.",
  },
];

export const experience = [
  {
    "id": "sju-it-support",
    "role": "IT Student Worker",
    "company": "St. John's University School of Law",
    "location": "Queens, NY",
    "dates": "April 2026 \u2013 Present",
    "summary": "Help faculty and students resolve everyday technology issues.",
    "highlights": [
      "Resolve more than five support tickets weekly by phone and email.",
      "Troubleshoot multifunction printers and peripheral devices."
    ]
  },
  {
    "id": "techx-data-engineer",
    "role": "Data Engineer Intern",
    "company": "TechX",
    "location": "Remote",
    "dates": "June 2025 \u2013 August 2025",
    "summary": "Developed a Python music recommendation system during a collaborative internship.",
    "highlights": [
      "Used NLP to personalize recommendations from a 200-song Spotify catalog.",
      "Worked in Agile sprints with Git, code reviews, and project demonstrations.",
      "Researched generative AI tools for user experience and automation."
    ]
  },
  {
    "id": "neuralseek-agent-builder",
    "role": "AI Agent Builder Intern",
    "company": "NeuralSeek",
    "location": "Miami, FL",
    "dates": "June 2025 \u2013 July 2025",
    "summary": "Built mAIstro, an academic assistant using retrieval-augmented generation.",
    "highlights": [
      "Implemented document ingestion, context retrieval, and source provenance highlighting.",
      "Iteratively refined context handling and responses with attention to ethical AI."
    ]
  }
];

export const coursework = [
  {
    "category": "Computer Science",
    "items": [
      "Machine Learning",
      "Algorithms",
      "Data Structures",
      "Files & Databases",
      "Object-Oriented Programming"
    ]
  }
];

export const projects: Project[] = [
  {
    "slug": "intellectflow",
    "title": "IntellectFlow",
    "category": "AI Systems",
    "description": "A multi-agent system in development for AI code review and security auditing, with LangGraph coordinating specialized agents.",
    "summary": "A multi-agent system in development for AI code review and security auditing, with LangGraph coordinating specialized agents.",
    "problem": "Explore intellectflow through practical software development.",
    "architecture": [
      "An orchestration layer coordinates specialized agents for code review and security auditing."
    ],
    "technicalDecisions": [],
    "challenges": [],
    "learnings": [],
    "tags": [
      "Python",
      "LangGraph",
      "FastAPI"
    ],
    "metrics": [
      {
        "label": "Status",
        "value": "In development"
      }
    ],
    "repoStats": [
      {
        "label": "Project type",
        "value": "AI Systems"
      }
    ],
    "highlights": [
      "Development began in June 2026.",
      "Current work focuses on agent orchestration."
    ],
    "outcomes": [],
    "github": "https://github.com/EvansCortez/IntellectFlow"
  },
  {
    "slug": "portfolio-website",
    "title": "Portfolio Website",
    "category": "Web Development",
    "description": "A published, responsive portfolio built with Next.js 16, TypeScript, React, and Tailwind CSS.",
    "summary": "A published, responsive portfolio built with Next.js 16, TypeScript, React, and Tailwind CSS.",
    "problem": "Explore portfolio website through practical software development.",
    "architecture": [
      "Modular React components styled with Tailwind CSS.",
      "Next.js static export published through GitHub Pages."
    ],
    "technicalDecisions": [],
    "challenges": [],
    "learnings": [],
    "tags": [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS"
    ],
    "metrics": [
      {
        "label": "Status",
        "value": "Published"
      }
    ],
    "repoStats": [
      {
        "label": "Project type",
        "value": "Web Development"
      }
    ],
    "highlights": [],
    "outcomes": [],
    "github": "https://github.com/EvansCortez/evans-dev-v2",
    "demo": "https://evanscortez.github.io/evans-dev-v2/"
  },
  {
    "slug": "spotify-recommender",
    "title": "Spotify Music Recommender",
    "category": "AI/ML",
    "description": "A Python recommendation system developed at TechX, using NLP to personalize recommendations from a 200-song catalog.",
    "summary": "A Python recommendation system developed at TechX, using NLP to personalize recommendations from a 200-song catalog.",
    "problem": "Explore spotify music recommender through practical software development.",
    "architecture": [],
    "technicalDecisions": [],
    "challenges": [],
    "learnings": [],
    "tags": [
      "Python",
      "NLP",
      "Recommendations"
    ],
    "metrics": [
      {
        "label": "Status",
        "value": "Internship project"
      }
    ],
    "repoStats": [
      {
        "label": "Project type",
        "value": "AI/ML"
      }
    ],
    "highlights": [],
    "outcomes": []
  },
  {
    "slug": "maistro",
    "title": "mAIstro Academic Assistant",
    "category": "AI Systems",
    "description": "A retrieval-augmented academic assistant built at NeuralSeek with document ingestion, context retrieval, and source provenance highlighting.",
    "summary": "A retrieval-augmented academic assistant built at NeuralSeek with document ingestion, context retrieval, and source provenance highlighting.",
    "problem": "Explore maistro academic assistant through practical software development.",
    "architecture": [],
    "technicalDecisions": [],
    "challenges": [],
    "learnings": [],
    "tags": [
      "RAG",
      "AI Agents",
      "Document Retrieval"
    ],
    "metrics": [
      {
        "label": "Status",
        "value": "Internship project"
      }
    ],
    "repoStats": [
      {
        "label": "Project type",
        "value": "AI Systems"
      }
    ],
    "highlights": [],
    "outcomes": []
  }
];

export const certifications = [
  {
    "title": "IBM Machine Learning Professional Certificate",
    "date": "Professional credential"
  },
  {
    "title": "Google IT Automation with Python Professional Certificate",
    "date": "Professional credential"
  },
  {
    "title": "Google Project Management Professional Certificate",
    "date": "Professional credential"
  },
  {
    "title": "Google Cloud Intro to Generative AI Specialization",
    "date": "Professional credential"
  }
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
  "title": "AI Security & Agent Workflows",
  "abstract": "Exploring how coordinated AI agents can support code review and security auditing through the IntellectFlow project, currently in development.",
  "methods": [
    "Design specialized agents for review tasks.",
    "Coordinate agents with LangGraph.",
    "Develop a repeatable evaluation process as implementation progresses."
  ],
  "performance": [
    {
      "label": "Project",
      "value": "IntellectFlow"
    },
    {
      "label": "Status",
      "value": "In development"
    },
    {
      "label": "Focus",
      "value": "AI Security"
    }
  ],
  "implications": [
    "Agent tools benefit from clear permissions and inspectable outputs.",
    "Evaluation is needed before making performance claims."
  ]
};
