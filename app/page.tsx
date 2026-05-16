import CertificationCard from "@/components/CertificationCard";
import ContactForm from "@/components/ContactForm";
import TechStackVisualizer from "@/components/TechStackVisualizer";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectGrid from "@/components/ProjectGrid";
import { certifications, projects, researchFocus, technologies } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="portfolio-shell flex flex-col min-h-screen bg-gradient-to-b from-black via-slate-900 to-black font-sans text-white">
      <main className="flex flex-col w-full max-w-6xl mx-auto py-20 px-8">
        
        <AnimatedSection>
          <section className="flex flex-col items-start gap-8 mb-32">
            <div className="space-y-4">
              <h1 className="text-7xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Evans Cortez
              </h1>
              <p className="text-3xl font-light text-slate-300">
                Machine Learning Engineer & Full-Stack Developer
              </p>
            </div>
            
            <p className="max-w-3xl text-lg leading-8 text-slate-400">
              B.S. in Computer Science candidate at <span className="font-semibold text-blue-300">St. John&apos;s University</span> (Expected May 2027). 
              Specialized in building intelligent systems, conversational AI agents, and scalable applications. 
              Published research on adversarial prompt injection detection with 20+ industry certifications in AI/ML.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Python", "PyTorch", "React.js", "SQL", "NLP", "GenAI"].map((skill) => (
                <div key={skill} className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-sm font-medium text-blue-300">
                  {skill}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="mailto:evscortez1212@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                Get In Touch
              </a>
              <a href="/Evans-Cortez-Resume.pdf" className="px-6 py-3 bg-slate-900/60 border border-blue-500/40 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300">
                Download Resume
              </a>
              <a href="https://linkedin.com/in/evans-cortez" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-600 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/EvansCortez" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-slate-600 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300">
                GitHub
              </a>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-12 pb-4 border-b border-slate-800">
              Professional Experience
            </h2>
            <div className="space-y-16">
              <div className="group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">IT Student Worker</h3>
                    <p className="text-blue-400 font-medium mt-1">St. John&apos;s University School of Law</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 whitespace-nowrap">April 2026 — Present</span>
                </div>
                <ul className="text-slate-400 text-sm space-y-2 ml-4 border-l border-slate-800 pl-4">
                  <li>🔧 Diagnose and resolve hardware issues, maintaining 99.2% uptime for critical infrastructure</li>
                  <li>📹 Deploy and optimize 50+ security cameras across campus with custom monitoring scripts</li>
                  <li>💬 Manage 100+ monthly technical inquiries with 4.8/5 satisfaction rating</li>
                  <li>🛠️ Perform preventative maintenance reducing emergency calls by 35%</li>
                </ul>
              </div>

              <div className="group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">Data Engineer Intern</h3>
                    <p className="text-blue-400 font-medium mt-1">TechX (Remote)</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 whitespace-nowrap">June 2025 — Aug 2025</span>
                </div>
                <p className="text-slate-400 text-sm ml-4 border-l border-slate-800 pl-4">
                  Designed NLP applications within Agile sprints using Python and modern ML frameworks. Conducted code reviews for 20+ PRs, implemented generative AI tools increasing automation efficiency by 40%.
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">AI Agent Builder Intern</h3>
                    <p className="text-blue-400 font-medium mt-1">NeuralSeek, Miami, FL</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 whitespace-nowrap">June 2025 — July 2025</span>
                </div>
                <p className="text-slate-400 text-sm ml-4 border-l border-slate-800 pl-4">
                  Built 15+ conversational agents using LLMs and prompt engineering. Optimized response accuracy by 28% through iterative refinement and ethical AI practices.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects" className="mb-32">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-12 pb-4 border-b border-slate-800">
              Featured Projects
            </h2>
            <ProjectGrid projects={projects} />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8 pb-4 border-b border-slate-800">
              GitHub & Project Links
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-blue-500/60 hover:bg-slate-900/80"
                >
                  <h3 className="mb-4 text-sm font-bold text-white">{project.title}</h3>
                  <div className="space-y-3">
                    {project.repoStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-sm text-blue-300">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-slate-500">
              Repository cards point to the verified GitHub profile until exact public repo URLs are added.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8 pb-4 border-b border-slate-800">
              Technical Proficiencies
            </h2>
            <TechStackVisualizer technologies={technologies} />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8 pb-4 border-b border-slate-800">
              Certifications & Professional Development
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <CertificationCard key={cert.title} title={cert.title} date={cert.date} />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-8">💡 Hover over any certification to see the date earned</p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="research" className="mb-32 scroll-mt-28">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8 pb-4 border-b border-slate-800">
              Featured Research
            </h2>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-3 text-sm font-mono uppercase tracking-widest text-blue-400">
                  {researchFocus.title}
                </p>
                <p className="max-w-3xl text-lg leading-8 text-slate-400">
                  {researchFocus.abstract}
                </p>
                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-4">Methods</h3>
                    <div className="space-y-3">
                      {researchFocus.methods.map((method) => (
                        <p key={method} className="border-l border-slate-800 pl-4 text-sm leading-6 text-slate-400">
                          {method}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-4">Security Implications</h3>
                    <div className="space-y-3">
                      {researchFocus.implications.map((item) => (
                        <p key={item} className="border-l border-slate-800 pl-4 text-sm leading-6 text-slate-400">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 content-start">
                {researchFocus.performance.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                    <p className="text-3xl font-bold text-blue-400">{metric.value}</p>
                    <p className="mt-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8 pb-4 border-b border-slate-800">
              Relevant Coursework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-4">Core Computer Science</h3>
                <div className="space-y-2">
                  {["Data Structures", "Algorithms", "Operating Systems", "Database Design", "Object-Oriented Programming", "Software Engineering Methods"].map((course) => (
                    <div key={course} className="text-sm text-slate-400 flex items-center">
                      <span className="text-blue-400 mr-3">▸</span> {course}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-4">AI & Machine Learning</h3>
                <div className="space-y-2">
                  {["Machine Learning", "Deep Learning", "Natural Language Processing", "AI Security & Adversarial Attacks", "Generative AI", "Ethical AI Practices"].map((course) => (
                    <div key={course} className="text-sm text-slate-400 flex items-center">
                      <span className="text-blue-400 mr-3">▸</span> {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="mb-12 scroll-mt-28">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8 pb-4 border-b border-slate-800">
              Contact
            </h2>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-white">Let&apos;s build something useful.</h3>
                <p className="text-sm leading-7 text-slate-400">
                  Reach out for AI/ML opportunities, full-stack projects, research collaboration, or technical support work. The form validates locally and opens your email client with the message ready to send.
                </p>
                <div className="mt-8 space-y-3 text-sm text-slate-400">
                  <a className="block text-blue-300 hover:text-blue-200" href="mailto:evans.cortez23@stjohns.edu">
                    evans.cortez23@stjohns.edu
                  </a>
                  <a className="block text-blue-300 hover:text-blue-200" href="https://github.com/EvansCortez" target="_blank" rel="noopener noreferrer">
                    github.com/EvansCortez
                  </a>
                  <a className="block text-blue-300 hover:text-blue-200" href="https://linkedin.com/in/evans-cortez" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/evans-cortez
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </AnimatedSection>

      </main>
    </div>
  );
}
