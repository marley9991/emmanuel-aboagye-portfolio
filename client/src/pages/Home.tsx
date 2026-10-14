import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Database,
  FileSpreadsheet,
  Mail,
  MapPin,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "AI / DATA",
    title: "AI-powered data analysis with PartyRock",
    description:
      "Built and deployed an AI-powered data analysis app with Amazon PartyRock, powered by Amazon Bedrock, through the AWS AI & ML Scholars Program.",
    tools: ["PartyRock", "Amazon Bedrock", "AI analysis"],
    tone: "coral",
    icon: BrainCircuit,
  },
  {
    number: "02",
    type: "FINAL YEAR PROJECT",
    title: "Agricultural productivity decline",
    description:
      "A quantitative assessment of agricultural productivity and food security indicators in Ghana, using regression models and time-series analysis.",
    tools: ["R / Python", "Regression", "Time series"],
    tone: "blue",
    icon: BarChart3,
  },
  {
    number: "03",
    type: "FINANCE / COURSE PROJECT",
    title: "Excel-based financial dashboard",
    description:
      "Developed an Excel dashboard to analyze company performance through pivot tables and charts, turning raw numbers into a clearer decision surface.",
    tools: ["Microsoft Excel", "Pivot tables", "Charts"],
    tone: "lime",
    icon: FileSpreadsheet,
  },
  {
    number: "04",
    type: "UI / UX DESIGN",
    title: "MTN MoMo app redesign",
    description:
      "Analyzed the MTN MoMo experience, identified the missing access point for Y'ello Save, and prototyped a clearer flow in Figma.",
    tools: ["Figma", "User flows", "Prototyping"],
    tone: "violet",
    icon: Workflow,
  },
  {
    number: "05",
    type: "CREDENTIAL MILESTONE",
    title: "AWS AI Practitioner Challenge",
    description:
      "Completed the AWS AI Practitioner Challenge as part of the AWS AI & ML Scholars Program with Udacity in 2026.",
    tools: ["AWS AI & ML", "Udacity", "2026"],
    tone: "yellow",
    icon: ShieldCheck,
  },
  {
    number: "06",
    type: "CREDENTIAL MILESTONE",
    title: "Data analysis with Microsoft Excel",
    description:
      "Completed the Coursera Project Network project focused on introducing practical data analysis workflows in Microsoft Excel.",
    tools: ["Coursera", "Excel", "2024"],
    tone: "mint",
    icon: Database,
  },
];

const experience = [
  {
    date: "JAN 2026 — SEP 2026",
    role: "National Service Personnel",
    org: "Insurance Department · SSNIT Headquarters, Accra",
    current: true,
    bullets: [
      "Managed policy renewals for SSNIT staff, supporting timely processing and continuous coverage.",
      "Facilitated car-loan insurance documentation, verification, and stakeholder coordination.",
      "Supported property insurance, bond-related activities, and accurate transaction records.",
    ],
  },
  {
    date: "FEB 2024 — APR 2024",
    role: "Risk & Quality Intern",
    org: "SSNIT Headquarters, Accra",
    bullets: [
      "Monitored compliance with internal policies and regulatory standards.",
      "Validated pension contribution and benefits records to identify discrepancies.",
      "Prepared Excel reports for senior management and collaborated on data-quality improvements.",
    ],
  },
];

const skills = [
  { label: "Programming", value: "Python · R · HTML · C++" },
  { label: "Statistical tools", value: "JMP · Microsoft Excel" },
  { label: "Data science", value: "Cleaning · Regression · Machine learning · Visualization" },
  { label: "Finance", value: "Financial modeling · Ratio analysis · Investment analysis" },
];

const credentials = [
  { year: "2026", title: "AWS AI Practitioner Challenge", issuer: "Udacity · AWS AI & ML Scholars Program" },
  { year: "2026", title: "Analyze Data using AI with PartyRock", issuer: "Udacity · AWS AI & ML Scholars" },
  { year: "2024", title: "Professional Financial Analyst Certificate", issuer: "MTF" },
  { year: "2024", title: "Introduction to Data Analysis using Microsoft Excel", issuer: "Coursera Project Network" },
];

function SectionLabel({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  );
}

function Home() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const heroStyle = {
    "--mx": `${pointer.x}%`,
    "--my": `${pointer.y}%`,
  } as React.CSSProperties;

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Emmanuel Aboagye home">
          <span className="mark">EA</span>
          <span>Emmanuel Aboagye</span>
        </a>
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-cta">Let's connect <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section id="top" className="hero" style={heroStyle} onPointerMove={handlePointerMove}>
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="status-line"><span className="status-dot" /> Available for analytical, technology &amp; finance opportunities</div>
          <p className="hero-kicker">Statistics × Computer Science · Accra, Ghana</p>
          <h1>
            Emmanuel
            <span>Aboagye<span className="period">.</span></span>
          </h1>
          <p className="hero-intro">I turn complex records into clear signals — using data, code, and a careful eye for the details that move decisions forward.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowDown size={16} /></a>
            <a className="text-link" href="mailto:manuelaboagye19@gmail.com">Send an email <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="hero-badge"><Sparkles size={15} /><span>Signal finder</span></div>
          <div className="hero-aside-copy">Data analysis<br />Risk &amp; quality<br />Financial operations</div>
          <div className="hero-coordinate">05°36′N / 00°11′W</div>
        </div>
        <div className="hero-footnote"><span>Scroll to inspect the work</span><span className="line" /><span>01 / 06</span></div>
      </section>

      <section id="profile" className="section profile-section">
        <SectionLabel eyebrow="01 — A quick read" title="The human behind the spreadsheet." note="A grounded operator with a technical toolkit — currently studying Statistics with a minor in Computer Science at the University of Ghana." />
        <div className="bento-grid">
          <article className="bento-card intro-card">
            <div className="card-index">01 / PROFILE</div>
            <h3>Curious by default.<br /><em>Precise by practice.</em></h3>
            <p>Detail-oriented and collaborative, with a strong interest in data analytics, software and technology, risk management, and financial operations.</p>
            <div className="mini-signature">EMMANUEL <span>↗</span></div>
          </article>
          <article className="bento-card education-card">
            <div className="bento-icon"><BarChart3 size={20} /></div>
            <div className="card-index">EDUCATION</div>
            <h3>BSc Statistics</h3>
            <p>Major in Statistics<br />Minor in Computer Science</p>
            <div className="card-bottom">University of Ghana, Legon <span>2027</span></div>
          </article>
          <article className="bento-card location-card">
            <div className="map-lines" aria-hidden="true" />
            <div className="location-top"><MapPin size={16} /> Based in Accra, Ghana</div>
            <div className="location-big">GH<br /><span>→</span></div>
            <p>Working across analysis, operations, and the systems in between.</p>
          </article>
          <article className="bento-card focus-card">
            <div className="card-index">CURRENT CURIOSITIES</div>
            <div className="focus-list">
              <span><i>01</i> Data systems</span>
              <span><i>02</i> Machine learning</span>
              <span><i>03</i> Risk intelligence</span>
              <span><i>04</i> Human-centered design</span>
            </div>
          </article>
        </div>
      </section>

      <section id="work" className="section work-section">
        <SectionLabel eyebrow="02 — Selected work" title="Projects with a point of view." note="A mix of statistical research, applied AI, financial reporting, and user-centered design — all documented in the résumé." />
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-topline"><span>{project.number}</span><span>{project.type}</span></div>
                <div className="project-art" aria-hidden="true"><Icon size={38} strokeWidth={1.35} /><span className="art-arrow">↗</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="split-heading">
          <SectionLabel eyebrow="03 — Experience" title="Learning in the real world." note="Two documented roles at SSNIT, where data quality, insurance administration, and operational follow-through meet." />
          <div className="side-note"><span className="tiny-mark">✳</span> <span>Reliability is a<br />creative advantage.</span></div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-marker"><span className={item.current ? "active" : ""} /></div>
              <div className="timeline-content">
                <div className="timeline-title"><h3>{item.role}</h3>{item.current && <span className="now-badge">MOST RECENT</span>}</div>
                <p className="timeline-org">{item.org}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials-section">
        <div className="credentials-head">
          <SectionLabel eyebrow="04 — Credentials" title="Proof points, not posturing." note="No talks or public awards are listed in the résumé, so this space stays honest: verified certificates and achievement milestones only." />
          <a className="text-link" href="#contact">Ask for the details <ArrowUpRight size={15} /></a>
        </div>
        <div className="credentials-layout">
          <div className="credential-list">
            {credentials.map((credential) => (
              <div className="credential-row" key={credential.title}>
                <span className="credential-year">{credential.year}</span>
                <div><h3>{credential.title}</h3><p>{credential.issuer}</p></div>
                <Check size={17} />
              </div>
            ))}
          </div>
          <aside className="skills-card">
            <div className="card-index">TOOLKIT / 04</div>
            <div className="skills-icon"><Code2 size={21} /></div>
            <h3>A practical<br /><em>technical stack.</em></h3>
            <div className="skill-list">{skills.map((skill) => <div key={skill.label}><strong>{skill.label}</strong><span>{skill.value}</span></div>)}</div>
            <div className="language-note"><span>LANGUAGES</span><b>Twi</b> Native / strong proficiency<br /><b>English</b> Strong written and verbal communication</div>
          </aside>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-orb" aria-hidden="true" />
        <div className="contact-content">
          <p className="eyebrow">05 — Contact</p>
          <h2>Have a messy dataset<br /><em>or a good question?</em></h2>
          <p className="contact-copy">I’m open to conversations across data analysis, technology, risk, and financial operations.</p>
          <a className="contact-email" href="mailto:manuelaboagye19@gmail.com">manuelaboagye19@gmail.com <ArrowUpRight size={21} /></a>
          <div className="contact-details"><span><MapPin size={15} /> Achimota, Accra</span><span><Mail size={15} /> 055-325-0075</span></div>
        </div>
        <div className="contact-stamp"><span>EA</span><small>LET'S<br />MAKE IT<br />CLEAR</small></div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Emmanuel Aboagye</span>
        <span>Built around the signal.</span>
        <div className="footer-links"><a href="mailto:manuelaboagye19@gmail.com"><Mail size={15} /></a><a href="#top" aria-label="Back to top"><MoveUpRight size={15} /></a></div>
      </footer>
    </main>
  );
}

export default Home;
