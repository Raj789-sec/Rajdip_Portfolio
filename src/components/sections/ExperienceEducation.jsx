// src/components/sections/ExperienceEducation.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, Code } from "lucide-react";

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
            <span className="glitch-title" data-text="Experience">Experience</span>
          </h2>
          <div className="mt-5 mx-auto w-64 h-[5px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>
        </div>

        {/* OUTER SHELL */}
        <div className="rounded-3xl p-6 sm:p-10 section-shell">
          <SubHeading icon={<Briefcase className="h-5 w-5 text-white/90" />} text="Professional Experience" />

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-6"
          >
            {/* RedHunt Labs */}
            <motion.li variants={item}>
              <Card>
                <Header title="Senior Security Consultant · RedHunt Labs (London, UK — Remote)" right="Jul 2025 — Present" />
                <Meta location="Remote (London Area, UK)" />
                <Description text={`Lead offensive security for cloud, web, and mobile clients, mapping attack paths and chaining misconfigurations. Build evasion PoCs, emulate TTPs, and guide engineers with prioritized hardening, monitoring, and measurable risk.`} />
                <Tags
                  items={[
                    "Cloud Pentesting","AWS","Azure","GCP","Red Teaming",
                    "Detection Evasion","Attack Path Mapping","CI/CD Security",
                    "Kubernetes","Threat Intelligence"
                  ]}
                />
              </Card>
            </motion.li>

            {/* BDO India */}
            <motion.li variants={item}>
              <Card>
                <Header title="Senior Associate · BDO India LLP" right="Mar 2022 — Present" />
                <Meta location="Remote — India" />
                <Description text={`Deliver web, API, mobile pentests across regulated industries. Automate recon and reporting, map findings to OWASP/NIST, coordinate remediation, validate fixes, mentor juniors, align security with business goals to reduce risk.`} />
                <Tags
                  items={[
                    "OWASP","NIST","ISO 27001","MITRE ATT&CK","Burp Suite","Python",
                    "AWS","API Security","Mobile Security","Reporting Automation",
                    "Recon","Linux"
                  ]}
                />
              </Card>
            </motion.li>

            {/* Haryana Police */}
            <motion.li variants={item}>
              <Card>
                <Header title="Cybersecurity Intern · Haryana Police" right="Jun 2021 — Sep 2021" />
                <Meta location="Remote" />
                <Description text={`Support the cyber team through case studies and labs, producing concise briefs. Attend DFIR sessions, practice secure coding, compete in CTFs, and document playbooks accelerating investigations while strengthening disciplined collaboration.`} />
                <Tags items={["CTF","Threat Modeling","Forensics","Malware Analysis","DFIR","Log Analysis","Secure Coding"]} />
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
        <div className="shrink-0">{icon}</div>
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

function Description({ text }) {
  return <p className="mt-4 text-white/80 leading-relaxed">{text}</p>;
}

function Tags({ items = [] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {items.map((t) => (
        <span key={t} className="tech-badge" tabIndex={0}>
          <Code className="h-4 w-4" />
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
      :root{
        /* gradient blues for text + fill */
        --chip-start:#22d3ee;      /* cyan-400 */
        --chip-end:#3b82f6;        /* blue-500 */
        --chip-glow:#48b5ff;       /* glow color */
        --chip-text-on-fill:#0b1220;
      }

      /* thin gradient shell */
      .section-shell { position: relative; }
      .section-shell::before{
        content:""; position:absolute; inset:0; border-radius:1.5rem;
        padding:1px; background:linear-gradient(90deg,#22d3ee55,#3b82f655,#a855f755);
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none;
      }

      /* main glitch title */
      .glitch-title{ 
        position:relative; display:inline-block;
        background:linear-gradient(90deg,#22d3ee 0%,#60a5fa 45%,#a78bfa 75%,#f0abfc 100%);
        background-size:200% 100%;
        -webkit-background-clip:text; background-clip:text; color:transparent;
        animation:hue 10s linear infinite;
      }
      .glitch-title::before,.glitch-title::after{
        content:attr(data-text); position:absolute; inset:0; pointer-events:none;
        mix-blend-mode:screen; opacity:.85; animation:glShift 3s steps(2) infinite;
      }
      .glitch-title::before{ transform:translate(1px,-1px); color:#22d3ee; }
      .glitch-title::after{  transform:translate(-1px,1px); color:#3b82f6; }

      /* subheading glitch only on text */
      .glitch-sub{ position:relative; display:inline-block; }
      .glitch-sub::before,.glitch-sub::after{
        content:attr(data-text); position:absolute; inset:0; pointer-events:none;
        mix-blend-mode:screen; opacity:.85; animation:glShift 3s steps(2) infinite;
      }
      .glitch-sub::before{ transform:translate(1px,-1px); color:#22d3ee; }
      .glitch-sub::after{  transform:translate(-1px,1px); color:#3b82f6; }

      /* moving dash */
      .heading-track{ background:rgba(255,255,255,.12); }
      .heading-runner{ display:block; height:100%; width:30%; background:linear-gradient(90deg,#22d3ee,#3b82f6); animation:dash 3s linear infinite; }

      /* subtle animated texture in cards */
      .glitch-gradient{
        background:
          repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 6px),
          radial-gradient(1200px 200px at 50% -20%, rgba(34,211,238,.06), transparent 60%),
          radial-gradient(900px 200px at 50% 120%, rgba(59,130,246,.06), transparent 60%);
        mix-blend-mode: soft-light;
        animation:pan 14s linear infinite;
        background-size:auto, 200% 100%, 200% 100%;
      }

      /* =============================
         TECH BADGE — text-only gradient idle,
         fills with glow + motion on hover
         ============================= */
      .tech-badge{
        position:relative;
        display:inline-flex; align-items:center; gap:8px;
        padding:10px 16px; border-radius:9999px;
        font-weight:800; font-size:16px; line-height:1;
        border:1px solid transparent; cursor:default;
        /* gradient TEXT */
        background-image:linear-gradient(90deg,var(--chip-start),var(--chip-end));
        -webkit-background-clip:text; background-clip:text; color:transparent;
        transition:transform .15s ease, box-shadow .25s ease, filter .25s ease;
      }

      /* the fill layer */
      .tech-badge::before{
        content:""; position:absolute; inset:0; border-radius:inherit; z-index:-1;
        background:linear-gradient(110deg,var(--chip-start),var(--chip-end),var(--chip-start));
        background-size:200% 200%;
        opacity:0; transform:scale(.96);
        transition:opacity .25s ease, transform .25s ease, background-position 1s linear;
        box-shadow:none;
      }

      /* on hover/focus: fill + glow + slight motion */
      .tech-badge:hover,
      .tech-badge:focus-visible{
        transform:translateY(-1px);
        filter:saturate(1.1);
        color:var(--chip-text-on-fill);
        -webkit-background-clip:border-box; background-clip:border-box; /* stop text clip so color shows */
      }
      .tech-badge:hover::before,
      .tech-badge:focus-visible::before{
        opacity:1; transform:scale(1);
        background-position:100% 0%;
        box-shadow:
          0 0 0 4px color-mix(in srgb, var(--chip-end) 22%, transparent),
          0 10px 24px color-mix(in srgb, var(--chip-glow) 45%, transparent),
          0 0 28px color-mix(in srgb, var(--chip-glow) 55%, transparent);
      }

      /* icon color sync (idle = gradient text, hover = dark-on-fill) */
      .tech-badge svg{ flex:0 0 auto; }
      .tech-badge svg path{ fill:currentColor; }
      
      @keyframes hue{ 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
      @keyframes glShift{ 0%,100%{clip-path: inset(0 0 0 0)} 50%{clip-path: inset(0 0 0 0)} }
      @keyframes dash{ 0%{ transform: translateX(-20%) } 100%{ transform: translateX(120%) } }
      @keyframes pan{ 0%{ background-position:0 0, 0% 50%, 100% 50% } 100%{ background-position:100% 0, 200% 50%, 0% 50% } }
    `}</style>
  );
}
