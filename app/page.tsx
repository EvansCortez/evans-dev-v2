import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import TechStackVisualizer from "@/components/TechStackVisualizer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const certifications = [
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

  const technologies = [
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-slate-900 to-black font-sans text-white">
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

            <div className="flex gap-4 pt-6">
              <a href="mailto:evscortez1212@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                Get In Touch
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Personal Finance Tracker"
                description="Full-stack finance management system with CLI, desktop GUI (Tkinter), and Flask web app. Includes recurring payment detection, budget forecasting, and dynamic visualizations."
                tags={["Python", "Flask", "SQLite", "Pandas", "Tkinter"]}
                metrics={[
                  { label: "Active Features", value: "12+" },
                  { label: "Data Points", value: "1K+" }
                ]}
                github="https://github.com"
                demo="https://example.com"
              />
              <ProjectCard 
                title="Multi-Interface NLP Chatbot"
                description="Conversational chatbot leveraging NLTK for sentiment analysis, entity recognition, and context-aware responses. Features voice I/O and persistent conversation history."
                tags={["Python", "NLTK", "Flask", "Tkinter", "NLP"]}
                metrics={[
                  { label: "Interfaces", value: "3" },
                  { label: "Languages", value: "5+" }
                ]}
                github="https://github.com"
                demo="https://example.com"
              />
              <ProjectCard 
                title="LLM Prompt Injection Detector"
                description="Research project on adversarial attack detection in generative AI systems. Developed classification models to identify malicious prompt patterns with 92% accuracy."
                tags={["Python", "PyTorch", "NLP", "Security"]}
                metrics={[
                  { label: "Accuracy", value: "92%" },
                  { label: "Dataset Size", value: "5K+" }
                ]}
                github="https://github.com"
              />
              <ProjectCard 
                title="SJU Tech Commons Database"
                description="Enterprise SQL database for managing 3D printer fleet, inventory tracking, maintenance logs, and usage analytics across the university."
                tags={["SQL", "Java", "Database Design"]}
                metrics={[
                  { label: "Devices", value: "25+" },
                  { label: "Monthly Users", value: "200+" }
                ]}
                github="https://github.com"
              />
            </div>
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
          <section className="mb-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-8 pb-4 border-b border-slate-800">
              Relevant Coursework & Research Focus
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

      </main>
    </div>
  );
}
