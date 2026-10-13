import Link from "next/link";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ slug, title, category, description, tags, metrics, github, demo, locale = "en" }: Pick<Project, "slug" | "title" | "category" | "description" | "tags" | "metrics" | "github" | "demo"> & { locale?: Locale }) {
  return <article className="studio-project">
    <div className={`project-art art-${slug}`} aria-hidden="true"><span className="art-label">{category.toUpperCase()}</span><span className="art-symbol">{slug === "intellectflow" ? "{ AI }" : slug === "portfolio-website" ? "EC_" : slug === "maistro" ? "RAG" : "♫"}</span><span className="art-caption">{tags.slice(0,3).join(" / ")}</span></div>
    <div className="project-content"><div className="project-status"><span className="status-dot" />{metrics[0]?.value ?? category}</div><h3><Link href={localizedPath(locale, `/projects/${slug}`)}>{title} <span>↗</span></Link></h3><p>{description}</p><div className="project-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-links"><Link href={localizedPath(locale, `/projects/${slug}`)}>Project details →</Link>{github && <a href={github} target="_blank" rel="noopener noreferrer">Source ↗</a>}{demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live site ↗</a>}</div></div>
  </article>;
}
