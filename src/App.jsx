import { useState, useEffect } from "react";

const DOMAINS = [
  { id: "all", label: "All" },
  { id: "dev", label: "Software Dev" },
  { id: "marketing", label: "Marketing" },
  { id: "pm", label: "Project Mgmt" },
  { id: "teaching", label: "Teaching" },
  { id: "events", label: "Events" },
];

const HERO_LINES = {
  all: { title: "I build, market, manage, and teach.", sub: "A multidisciplinary professional who ships full products - from code to campaign." },
  dev: { title: "I write code that works.", sub: "Full-stack developer with a frontend focus and a backend brain - Java, Python, React, REST APIs." },
  marketing: { title: "I grow brands with purpose.", sub: "Content strategy, social media management, campaign creation across IG, TikTok, YouTube, and more." },
  pm: { title: "I make projects actually happen.", sub: "From grant-funded civic initiatives to tech team sprints - I coordinate, prioritise, and deliver." },
  teaching: { title: "I make complex things click.", sub: "English teacher (A1-C1, IELTS prep) who taught QA to complete beginners and made it land." },
  events: { title: "I create experiences people remember.", sub: "City-level festivals, European student events, corporate openings - planned, run, delivered." },
};

const SKILLS = [
  {
    domains: ["dev"],
    category: "Frontend",
    items: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "Responsive Design", "REST API integration"],
    note: "Building UIs people actually want to use",
  },
  {
    domains: ["dev"],
    category: "Backend",
    items: ["Java + Spring Boot", "Python (Flask / scripts)", "SQL", "REST API design", "Git / GitHub - gladkykhdaria"],
    note: "Server logic, data handling, version control",
  },
  {
    domains: ["dev"],
    category: "QA & Testing",
    items: ["Manual testing", "Test case design", "Bug reporting", "Jira", "Postman / JMeter"],
    note: "Certified QA - Hillel IT School",
  },
  {
    domains: ["dev"],
    category: "IoT & Embedded",
    items: ["Sensor data processing", "Control logic", "Predictive maintenance", "Python data pipelines"],
    note: "Applied at TU Wien Erasmus project",
  },
  {
    domains: ["marketing"],
    category: "Content & Social",
    items: ["Instagram Reels / TikTok / YouTube", "Content planning & editorial calendar", "Trend research", "Facebook / Pinterest / Twitter(X)"],
    note: "Managing BEST Bucharest marketing department",
  },
  {
    domains: ["marketing"],
    category: "Visual Production",
    items: ["Canva", "Figma", "Balsamiq", "Short-form video editing (Reels / TikTok)", "Campaign asset creation"],
    note: "From brief to published post",
  },
  {
    domains: ["marketing"],
    category: "Strategy & Analysis",
    items: ["Market analysis", "Audience research", "Lead generation", "Sponsor relations", "KPI tracking"],
    note: "Full-funnel thinking",
  },
  {
    domains: ["pm"],
    category: "Tech Project Management",
    items: ["Agile / Scrum", "Sprint planning", "Jira", "Technical documentation", "Cross-functional coordination"],
    note: "IT project lifecycle",
  },
  {
    domains: ["pm"],
    category: "Grant & Civic Projects",
    items: ["Grant proposal writing", "Stakeholder management", "Budget planning", "Delivery & reporting", "NGO collaboration"],
    note: "OSCE, USAID, IREX-backed projects - Mariupol Youth Council",
  },
  {
    domains: ["teaching"],
    category: "English Teaching",
    items: ["Levels: A1 - B2 (teaching) / up to C1 (speaking)", "IELTS preparation", "School exam prep", "Seamen English (maritime)", "Conversational & business English"],
    note: "Adaptable to learner goals",
  },
  {
    domains: ["teaching"],
    category: "Technical Teaching",
    items: ["QA Manual Testing (taught full course)", "Breaking down complex tech concepts", "Curriculum design", "Workshop facilitation"],
    note: "Taught at Youth Hub, Bucharest",
  },
  {
    domains: ["events"],
    category: "Event Types",
    items: ["Music festivals", "Corporate store openings", "Birthday & private events", "Student conferences (European scale)", "City-level public programmes"],
    note: "Online coordination + offline execution",
  },
  {
    domains: ["events"],
    category: "Event Skills",
    items: ["Logistics planning", "Volunteer coordination", "Venue & vendor management", "Communications", "On-site animation & facilitation"],
    note: "Calm under pressure",
  },
];

const EXPERIENCE = [
  {
    domains: ["marketing", "pm", "events"],
    role: "Marketing Department Manager",
    org: "BEST Bucharest",
    period: "Nov 2025 - Jun 2026",
    location: "Bucharest, Romania",
    bullets: [
      "Led full marketing department within Europe's largest student tech network",
      "Managed social media strategy, content creation, sponsor relations",
      "Coordinated multicultural tech events and international communications",
      "Created campaign visuals in Figma, Canva, Balsamiq",
    ],
  },
  {
    domains: ["events", "pm"],
    role: "Head of Culture, Tourism & Sports Committee",
    org: "Youth Council of Mariupol",
    period: "Sep 2021 - Feb 2022",
    location: "Mariupol, Ukraine",
    bullets: [
      "Led city-level youth committee under Mariupol City Council",
      "Collaborated with OSCE, USAID, IREX, U-Report",
      "Organised musical festivals, study events, city sports programmes",
      "Delivered grant-funded community projects from conception to completion",
    ],
  },
  {
    domains: ["pm", "dev"],
    role: "3rd Place - Future Shapers Camp",
    org: "Honeywell & Politehnica Bucharest",
    period: "Sep 2024",
    location: "Bucharest, Romania",
    bullets: [
      "Competed against international teams in technology innovation challenge",
      "Designed and pitched a tech-based solution under time pressure",
      "Rapid prototyping, cross-cultural teamwork, technical presentation",
    ],
  },
  {
    domains: ["teaching"],
    role: "QA Instructor & Volunteer",
    org: "Youth Hub Community Organisation",
    period: "Dec 2022 - Dec 2023",
    location: "Bucharest, Romania",
    bullets: [
      "Taught QA Manual Testing to diverse learner groups",
      "Organised community activities and educational programmes",
    ],
  },
  {
    domains: ["events"],
    role: "Event Manager (Freelance)",
    org: "Private Events - Bucharest",
    period: "2023 - 2024",
    location: "Bucharest, Romania",
    bullets: [
      "Managed birthdays and corporate store opening events",
      "Handled logistics, vendor coordination, on-site facilitation",
    ],
  },
  {
    domains: ["events", "teaching"],
    role: "Children's Animator & Kindergarten Educator",
    org: "Various",
    period: "Earlier experience",
    location: "",
    bullets: [
      "Facilitated children's activities, games, and creative programmes",
      "Early-career experience in communication, patience, and adaptability",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Eng. Computer Engineering (CTI)",
    school: "University Politehnica of Bucharest - FILS",
    period: "Oct 2023 - Present",
    note: "Data Structures, Algorithms, OOP, Networking, Embedded Systems",
  },
  {
    degree: "ML & Prototyping - Erasmus Exchange",
    school: "TU Wien, Vienna",
    period: "Mar - Jun 2024",
    note: "Predictive maintenance ML prototype using real sensor data",
  },
  {
    degree: "Game Theory - ATHENS Programme",
    school: "Czech Technical University, Prague",
    period: "Nov 2024",
    note: "Strategic decision-making & mathematical optimisation - excellent grade",
  },
  {
    degree: "QA Manual Testing Certification",
    school: "Hillel IT School",
    period: "Jun - Oct 2022",
    note: "",
  },
  {
    degree: "Web Design Fundamentals",
    school: "Hillel IT School",
    period: "Jan - Apr 2023",
    note: "",
  },
];

const LANGUAGES = [
  { lang: "Ukrainian", level: "Native", pct: 100 },
  { lang: "Russian", level: "Native", pct: 100 },
  { lang: "English", level: "C1", pct: 88 },
  { lang: "Romanian", level: "B1-B2", pct: 62 },
  { lang: "Spanish", level: "A2", pct: 28 },
  { lang: "German", level: "A2", pct: 28 },
];

function Tag({ children }) {
  return (
    <span style={{
      display: "inline-block",
      background: "rgba(201,184,255,0.18)",
      color: "#7B5EA7",
      border: "1px solid rgba(201,184,255,0.45)",
      borderRadius: "20px",
      padding: "3px 12px",
      fontSize: "0.78rem",
      fontWeight: 500,
      margin: "3px 3px 3px 0",
      letterSpacing: "0.01em",
    }}>{children}</span>
  );
}

function SkillCard({ skill }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #EDE9F8",
      borderRadius: "14px",
      padding: "22px 24px",
      boxShadow: "0 2px 12px rgba(100,80,160,0.06)",
    }}>
      <div style={{ fontSize: "0.7rem", color: "#C9B8FF", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
        {skill.category}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}>
        {skill.items.map(i => <Tag key={i}>{i}</Tag>)}
      </div>
      {skill.note && (
        <div style={{ fontSize: "0.78rem", color: "#999", fontStyle: "italic" }}>{skill.note}</div>
      )}
    </div>
  );
}

function ExpCard({ exp }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #EDE9F8",
      borderRadius: "14px",
      padding: "22px 26px",
      boxShadow: "0 2px 12px rgba(100,80,160,0.06)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4px" }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0D1B2A" }}>{exp.role}</div>
          <div style={{ color: "#7B5EA7", fontWeight: 600, fontSize: "0.88rem", marginTop: "2px" }}>{exp.org}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "0.8rem", color: "#888", fontWeight: 500 }}>{exp.period}</div>
          {exp.location && <div style={{ fontSize: "0.75rem", color: "#bbb" }}>{exp.location}</div>}
        </div>
      </div>
      <ul style={{ margin: "12px 0 0 0", paddingLeft: "18px" }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: "0.875rem", color: "#444", marginBottom: "5px", lineHeight: 1.55 }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [animKey, setAnimKey] = useState(0);

  const handleDomain = (id) => {
    setActive(id);
    setAnimKey(k => k + 1);
  };

  const visibleSkills = active === "all"
    ? SKILLS
    : SKILLS.filter(s => s.domains.includes(active));

  const visibleExp = active === "all"
    ? EXPERIENCE
    : EXPERIENCE.filter(e => e.domains.includes(active));

  const hero = HERO_LINES[active];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#F8F7F4", minHeight: "100vh", color: "#0D1B2A" }}>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(248,247,244,0.92)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #EDE9F8",
        padding: "0 clamp(16px,5vw,80px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "58px",
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
          Daria Gladkykh
        </span>
        <div style={{ display: "flex", gap: "24px", fontSize: "0.85rem", fontWeight: 500, color: "#666" }}>
          <a href="#skills" style={{ color: "inherit", textDecoration: "none" }}>Skills</a>
          <a href="#experience" style={{ color: "inherit", textDecoration: "none" }}>Experience</a>
          <a href="#education" style={{ color: "inherit", textDecoration: "none" }}>Education</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        padding: "72px clamp(16px,5vw,80px) 56px",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <div style={{ fontSize: "0.75rem", color: "#C9B8FF", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px" }}>
          Available immediately · Bucharest, Romania
        </div>

        {/* Domain filter — the signature element */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px",
        }}>
          {DOMAINS.map(d => (
            <button
              key={d.id}
              onClick={() => handleDomain(d.id)}
              style={{
                padding: "7px 18px",
                borderRadius: "30px",
                border: active === d.id ? "2px solid #C9B8FF" : "2px solid #E0DAF0",
                background: active === d.id ? "#C9B8FF" : "transparent",
                color: active === d.id ? "#0D1B2A" : "#777",
                fontFamily: "'Inter', sans-serif",
                fontWeight: active === d.id ? 700 : 500,
                fontSize: "0.83rem",
                cursor: "pointer",
                transition: "all 0.18s ease",
                letterSpacing: "0.01em",
              }}
            >{d.label}</button>
          ))}
        </div>

        <div key={animKey} style={{ animation: "fadeUp 0.4s ease both" }}>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            lineHeight: 1.12,
            margin: "0 0 18px 0",
            letterSpacing: "-0.02em",
            maxWidth: "720px",
          }}>
            {hero.title}
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#555",
            lineHeight: 1.65,
            maxWidth: "620px",
            margin: 0,
          }}>
            {hero.sub}
          </p>
        </div>

        <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="mailto:darya.gladkyh@gmail.com" style={{
            background: "#0D1B2A", color: "#fff",
            padding: "12px 26px", borderRadius: "30px",
            textDecoration: "none", fontWeight: 600, fontSize: "0.88rem",
            transition: "opacity 0.15s",
          }}>Get in touch</a>
          <a href="https://linkedin.com/in/daria-gladkykh-a35765203" target="_blank" rel="noreferrer" style={{
            background: "transparent", color: "#0D1B2A",
            padding: "12px 26px", borderRadius: "30px",
            textDecoration: "none", fontWeight: 600, fontSize: "0.88rem",
            border: "2px solid #C9B8FF",
          }}>LinkedIn</a>
          <a href="https://github.com/gladkykhdaria" target="_blank" rel="noreferrer" style={{
            background: "transparent", color: "#0D1B2A",
            padding: "12px 26px", borderRadius: "30px",
            textDecoration: "none", fontWeight: 600, fontSize: "0.88rem",
            border: "2px solid #C9B8FF",
          }}>GitHub</a>
        </div>

        <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "0.82rem", color: "#888" }}>
          <a href="mailto:darya.gladkyh@gmail.com" style={{ color: "#888", textDecoration: "none" }}>darya.gladkyh@gmail.com</a>
          <a href="tel:+40791552205" style={{ color: "#888", textDecoration: "none" }}>+40 791 552 205</a>
          <span>Bucharest, Romania</span>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "0 clamp(16px,5vw,80px) 64px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.5rem", marginBottom: "24px", letterSpacing: "-0.01em" }}>
          {active === "all" ? "Skills & Tools" : `${DOMAINS.find(d => d.id === active)?.label} - Skills`}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {visibleSkills.map((s, i) => <SkillCard key={i} skill={s} />)}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "0 clamp(16px,5vw,80px) 64px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.5rem", marginBottom: "24px", letterSpacing: "-0.01em" }}>
          Experience
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {visibleExp.map((e, i) => <ExpCard key={i} exp={e} />)}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "0 clamp(16px,5vw,80px) 64px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.5rem", marginBottom: "24px", letterSpacing: "-0.01em" }}>
          Education & Certifications
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {EDUCATION.map((e, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid #EDE9F8",
              borderRadius: "14px", padding: "20px 22px",
              boxShadow: "0 2px 12px rgba(100,80,160,0.05)",
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "4px" }}>{e.degree}</div>
              <div style={{ color: "#7B5EA7", fontWeight: 600, fontSize: "0.83rem", marginBottom: "4px" }}>{e.school}</div>
              <div style={{ color: "#aaa", fontSize: "0.78rem", marginBottom: e.note ? "8px" : 0 }}>{e.period}</div>
              {e.note && <div style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.5 }}>{e.note}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES */}
      <section style={{ padding: "0 clamp(16px,5vw,80px) 64px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.5rem", marginBottom: "24px", letterSpacing: "-0.01em" }}>
          Languages
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
          {LANGUAGES.map((l, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid #EDE9F8",
              borderRadius: "14px", padding: "16px 20px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{l.lang}</span>
                <span style={{ color: "#7B5EA7", fontWeight: 700, fontSize: "0.82rem" }}>{l.level}</span>
              </div>
              <div style={{ background: "#EDE9F8", borderRadius: "8px", height: "6px" }}>
                <div style={{
                  background: "linear-gradient(90deg, #C9B8FF, #8B6FD4)",
                  borderRadius: "8px", height: "6px",
                  width: `${l.pct}%`,
                  transition: "width 0.6s ease",
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        background: "#0D1B2A", color: "#F8F7F4",
        padding: "60px clamp(16px,5vw,80px)",
        marginTop: "32px",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", marginBottom: "12px", letterSpacing: "-0.02em" }}>
            Let's work together.
          </h2>
          <p style={{ color: "#aab", marginBottom: "32px", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.6 }}>
            Open to internships, junior roles, freelance, and project collaborations - tech, marketing, or anything in between.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.88rem" }}>
            {[
              { label: "Email", val: "darya.gladkyh@gmail.com", href: "mailto:darya.gladkyh@gmail.com" },
              { label: "Phone", val: "+40 791 552 205", href: "tel:+40791552205" },
              { label: "LinkedIn", val: "daria-gladkykh", href: "https://linkedin.com/in/daria-gladkykh-a35765203" },
              { label: "GitHub", val: "gladkykhdaria", href: "https://github.com/gladkykhdaria" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
                display: "flex", flexDirection: "column",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,184,255,0.25)",
                borderRadius: "12px", padding: "14px 20px",
                color: "#F8F7F4", textDecoration: "none",
                minWidth: "180px",
              }}>
                <span style={{ color: "#C9B8FF", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>{c.label}</span>
                <span style={{ fontWeight: 500 }}>{c.val}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        a:hover { opacity: 0.8; }
        button:hover { transform: scale(1.03); }
      `}</style>
    </div>
  );
}