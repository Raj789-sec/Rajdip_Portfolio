// src/components/sections/ExperienceEducation.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  CalendarDays,
  Shield,
  Bug,
  Code,
} from "lucide-react";

/* motion helpers */
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* MAIN HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="glitch-title" data-text="Experience & Education">
              Experience & Education
            </span>
          </h2>
          <div className="mt-5 mx-auto w-64 h-[5px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>
        </div>

        {/* OUTER SHELL */}
        <div className="rounded-3xl p-6 sm:p-10 section-shell">
          {/* EXPERIENCE */}
          <SubHeading icon={<Briefcase className="h-5 w-5 text-white/90" />} text="Professional Experience" />

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-6"
          >
            <motion.li variants={item}>
              <Card>
                <Header
                  title="Security Consultant · RedHunt Labs (London, UK — Remote)"
                  right="Jul 2025 — Present"
                />
                <Meta location="Remote (London Area, UK)" />
                <Bullets
                  points={[
                    "Perform advanced offensive security testing across cloud, web, and mobile.",
                    "Collaborating with UK clients to identify and mitigate emerging threats.",
                    "Contributing to red team operations and detection evasion research.",
                  ]}
                />
                <Tags items={["Cloud Pentesting", "AWS", "Threat Intelligence", "Red Teaming"]} />
              </Card>
            </motion.li>

            <motion.li variants={item}>
              <Card>
                <Header
                  title="Senior Associate · BDO India LLP (Kolkata)"
                  right="Mar 2022 — Present"
                />
                <Meta location="Remote — India" />
                <Bullets
                  points={[
                    "Conducted 50+ penetration tests across web, API, and mobile; uncovered critical vulnerabilities for Fortune 500 clients.",
                    "Authored detailed vulnerability reports with prioritized remediation that reduced risk by ~30%.",
                    "Led end-to-end projects and ensured remediation alignment with client requirements.",
                    "Reviewed & validated assessment reports for accuracy and compliance (OWASP, NIST, ISO 27001).",
                    "Tracked emerging threats; applied MITRE ATT&CK, threat intel, and best practices.",
                  ]}
                />
                <Tags items={["OWASP", "NIST", "ISO 27001", "MITRE ATT&CK", "Burp Suite", "Python", "AWS"]} />
              </Card>
            </motion.li>

            <motion.li variants={item}>
              <Card>
                <Header title="Cybersecurity Intern · Haryana Police" right="Jun 2021 — Sep 2021" />
                <Meta location="Remote" />
                <Bullets
                  points={[
                    "Hands-on case studies; practical application of infosec concepts.",
                    "Participated in expert-led lectures & trainings on latest trends and techniques.",
                    "Completed research assignments and team-based challenges.",
                    "Competed in CTFs to strengthen analysis and defensive skills.",
                  ]}
                />
                <Tags items={["CTF", "Threat Modeling", "Forensics", "Research"]} />
              </Card>
            </motion.li>
          </motion.ul>

          {/* DIVIDER */}
          <div className="my-12 mx-auto w-40 h-[3px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>

          {/* EDUCATION */}
          <SubHeading icon={<GraduationCap className="h-5 w-5 text-white/90" />} text="Education" />

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-6"
          >
            <motion.li variants={item}>
              <Card>
                <Header
                  title="MSc · Advanced Networking & Cybersecurity — Brainware University (Kolkata)"
                  right="Jul 2021 — Aug 2023"
                />
                <Meta
                  extras={[
                    { icon: <Shield className="h-4 w-4" />, text: "OWASP Chapter Lead" },
                    { icon: <Bug className="h-4 w-4" />, text: "CTF Team Lead" },
                  ]}
                />
                <Tags
                  items={[
                    "Network Security",
                    "Cryptography",
                    "Incident Response",
                    "Threat Hunting",
                    "Cloud Security",
                  ]}
                />
              </Card>
            </motion.li>

            <motion.li variants={item}>
              <Card>
                <Header
                  title="BCA · Bachelor's in Computer Application — Inspiria Knowledge Campus (Siliguri)"
                  right="Jul 2018 — Aug 2021"
                />
                <Tags items={["DSA", "Operating Systems", "DBMS", "Web Security", "Python", "Linux"]} />
              </Card>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      <StyleBlock />
    </section>
  );
}

/* ── UI bits ───────────────────────────────────────────── */

function SubHeading({ icon, text }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-cyan-400" />
        {/* keep icon separate so it doesn't get glitch layers */}
        <div className="shrink-0">{icon}</div>
        {/* glitch applied ONLY to text */}
        <h3 className="text-xl font-semibold">
          <span className="glitch-sub" data-text={text}>{text}</span>
        </h3>
      </div>
      <div className="mt-3 h-[3px] w-40 heading-track rounded-full overflow-hidden">
        <span className="heading-runner" />
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="rounded-2xl border border-white/10 bg-[#0b1220]/90 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.45)] p-5 sm:p-6 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl glitch-gradient" />
      {children}
    </motion.div>
  );
}

function Header({ title, right }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4>
      {right && (
        <div className="shrink-0 text-sm text-white/60 flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {right}
        </div>
      )}
    </div>
  );
}

function Meta({ location, extras = [] }) {
  if (!location && extras.length === 0) return null;
  return (
    <div className="mt-1 text-white/70 text-sm flex flex-wrap items-center gap-x-4 gap-y-2">
      {location && (
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" /> {location}
        </span>
      )}
      {extras.map((e, i) => (
        <span key={i} className="inline-flex items-center gap-2 text-white/70">
          {e.icon} {e.text}
        </span>
      ))}
    </div>
  );
}

function Bullets({ points = [] }) {
  return (
    <ul className="mt-4 space-y-2 text-white/80">
      {points.map((p, i) => (
        <li key={i} className="pl-4 relative">
          <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-white/60" />
          {p}
        </li>
      ))}
    </ul>
  );
}

function Tags({ items = [] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="inline-flex items-center gap-2 text-[12px] px-2.5 py-1 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 transition"
        >
          <Code className="h-3.5 w-3.5" />
          {t}
        </span>
      ))}
    </div>
  );
}

/* ── local styles ─────────────────────────────────────── */
function StyleBlock() {
  return (
    <style>{`
      /* thin gradient shell */
      .section-shell { position: relative; }
      .section-shell::before{
        content:""; position:absolute; inset:0; border-radius:1.5rem;
        padding:1px; background:linear-gradient(90deg,#22d3ee55,#a855f755);
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none;
      }

      /* main glitch title */
      .glitch-title{ 
        position:relative; display:inline-block;
        background:linear-gradient(90deg,#22d3ee 0%,#7dd3fc 30%,#a78bfa 60%,#f0abfc 100%);
        background-size:200% 100%;
        -webkit-background-clip:text; background-clip:text; color:transparent;
        animation:hue 10s linear infinite;
      }
      .glitch-title::before,.glitch-title::after{
        content:attr(data-text); position:absolute; inset:0; pointer-events:none;
        mix-blend-mode:screen; opacity:.85; animation:glShift 3s steps(2) infinite;
      }
      .glitch-title::before{ transform:translate(1px,-1px); color:#22d3ee; }
      .glitch-title::after{  transform:translate(-1px,1px); color:#a855f7; }

      /* subheading glitch only on text */
      .glitch-sub{ position:relative; display:inline-block; }
      .glitch-sub::before,.glitch-sub::after{
        content:attr(data-text); position:absolute; inset:0; pointer-events:none;
        mix-blend-mode:screen; opacity:.85; animation:glShift 3s steps(2) infinite;
      }
      .glitch-sub::before{ transform:translate(1px,-1px); color:#22d3ee; }
      .glitch-sub::after{  transform:translate(-1px,1px); color:#a855f7; }

      /* moving dash */
      .heading-track{ background:rgba(255,255,255,.12); }
      .heading-runner{ display:block; height:100%; width:30%; background:linear-gradient(90deg,#22d3ee,#a855f7); animation:dash 3s linear infinite; }

      /* subtle animated texture in cards */
      .glitch-gradient{
        background:
          repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 6px),
          radial-gradient(1200px 200px at 50% -20%, rgba(34,211,238,.06), transparent 60%),
          radial-gradient(900px 200px at 50% 120%, rgba(168,85,247,.06), transparent 60%);
        mix-blend-mode: soft-light;
        animation:pan 14s linear infinite;
        background-size:auto, 200% 100%, 200% 100%;
      }

      @keyframes hue{ 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
      @keyframes glShift{ 0%,100%{clip-path: inset(0 0 0 0)} 50%{clip-path: inset(0 0 0 0)} }
      @keyframes dash{ 0%{ transform: translateX(-20%) } 100%{ transform: translateX(120%) } }
      @keyframes pan{ 0%{ background-position:0 0, 0% 50%, 100% 50% } 100%{ background-position:100% 0, 200% 50%, 0% 50% } }
    `}</style>
  );
}
