import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";
import { getPortfolioData } from "@/data/getPortfolioData";
import { localizedPath, type Locale } from "@/i18n/config";

export default function PortfolioHome({ locale = "en" }: { locale?: Locale }) {
  const { profile, projects, experience } = getPortfolioData(locale);
  return <main className="portfolio-shell studio-home">
    <section className="studio-hero">
      <div className="studio-kicker"><span className="status-dot" /> COMPUTER SCIENCE / NEW YORK</div>
      <h1>Evans Cortez<span className="hero-period">.</span></h1>
      <div className="hero-bottom">
        <div><p className="hero-statement">Building software.<br /><span>Exploring what AI can do.</span></p><p className="hero-description">{profile.summary}</p>
          <div className="studio-actions"><Link className="studio-button" href={localizedPath(locale, "/projects")}>Explore my work ↗</Link><a className="studio-button secondary" href={profile.resume}>Download resume ↓</a></div>
        </div>
        <aside className="build-panel" aria-label="Current project">
          <div className="panel-top"><span>NOW BUILDING</span><span className="status-dot" /></div>
          <p className="build-index">01 / INTELLECTFLOW</p><h2>Intelligent agents.<br />Inspectable workflows.</h2>
          <p>Designing an orchestration layer for AI code review and security auditing.</p>
          <div className="pipeline"><span>CODE</span><span>REVIEW</span><span>AUDIT</span></div>
          <div className="panel-bottom"><span>Python · LangGraph · FastAPI</span><Link href={localizedPath(locale, "/projects/intellectflow")}>View project ↗</Link></div>
        </aside>
      </div>
      <div className="hero-meta"><span>B.S. COMPUTER SCIENCE</span><span>ST. JOHN’S UNIVERSITY</span><span>EXPECTED DECEMBER 2026</span></div>
    </section>
    <section className="studio-section" id="work"><div className="section-heading"><div><p className="studio-kicker">01 / SELECTED WORK</p><h2>Ideas into implementations.</h2></div><Link href={localizedPath(locale, "/projects")}>All projects ↗</Link></div><ProjectGrid projects={projects} locale={locale} /></section>
    <section className="studio-section about-grid"><div><p className="studio-kicker">02 / EXPERIENCE</p><h2>A practical foundation.<br /><span className="muted">A curious mindset.</span></h2><p className="hero-description">From helping people solve everyday IT problems to building recommendation systems and AI assistants, I learn by working on useful problems.</p><Link className="text-link" href={localizedPath(locale, "/experience")}>Full experience ↗</Link></div><div>{experience.map(e=><article className="studio-role" key={e.id}><p>{e.dates}</p><h3>{e.role}</h3><span>{e.company}</span><p>{e.summary}</p></article>)}</div></section>
    <section className="studio-section contact-banner"><p className="studio-kicker">03 / WHAT’S NEXT</p><h2>Let’s build something useful.</h2><p>Interested in software development and applied AI opportunities.</p><a className="studio-button" href={`mailto:${profile.email}`}>Get in touch ↗</a><div className="social-links"><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a></div></section>
  </main>;
}
