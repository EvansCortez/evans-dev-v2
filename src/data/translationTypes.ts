import type { Project } from "./portfolio";

export type ProjectTranslation = Partial<
  Pick<
    Project,
    | "title"
    | "description"
    | "summary"
    | "problem"
    | "architecture"
    | "technicalDecisions"
    | "challenges"
    | "learnings"
    | "highlights"
    | "outcomes"
  >
>;

export type PortfolioTranslation = {
  profile?: {
    role?: string;
    summary?: string;
    graduation?: string;
  };
  impactMetrics?: Record<string, { label?: string; detail?: string }>;
  focusAreas?: Record<string, { label?: string; value?: string }>;
  experience?: Record<string, { role?: string; summary?: string; highlights?: string[] }>;
  projects?: Record<string, ProjectTranslation>;
  researchFocus?: {
    title?: string;
    abstract?: string;
    methods?: string[];
    implications?: string[];
    performance?: Record<string, { label?: string }>;
  };
};
