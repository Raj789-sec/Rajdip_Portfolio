// src/components/sections/ProjectsResearch.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Shield,
  CalendarDays,
  MapPin,
  Github,
  ExternalLink,
} from "lucide-react";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ===== DATA ===== */
const PROJECTS = [
  {
    title: "JS Secret Scanner",
    metaExtras: [{ icon: <Shield className="h-4 w-4" />, text: "Open-source utility" }],
    bullets: [
      "Scans JavaScript for AWS URLs, secrets, API endpoints, and high-entropy tokens to catch leakage early.",
    ],
    tags: ["Recon", "Automation", "Secrets", "Node/JS"],
    actions: [
      { label: "View Tool", href: "https://github.com/Raj789-sec/js-secret-scanner", icon: <ExternalLink className="h-4 w-4" /> },
      { label: "GitHub", href: "https://github.com/Raj789-sec/js-secret-scanner", icon: <Github className="h-4 w-4" /> },
    ],
  },
];

const RESEARCH = [
  {
    title: "CVE-2023-39115",
    right: "2023",
    metaExtras: [{ icon: <Shield className="h-4 w-4" />, text: "Public CVE" }],
    bullets: [
      "install/aiz-uploader/upload in Campcodes Online Matrimonial Website System Script 3.3 allows XSS via a crafted SVG document.",
    ],
    tags: ["XSS", "SVG", "Disclosure", "NVD"],
    actions: [
      { label: "View CVE", href: "https://nvd.nist.gov/vuln/detail/CVE-2023-39115", icon: <ExternalLink className="h-4 w-4" /> },
    ],
  },
  {
    title: "CVE-2023-40834",
    right: "2023",
    metaExtras: [{ icon: <Shield className="h-4 w-4" />, text: "Public CVE" }],
    bullets: [
      "OpenCart CMS v4.0.2.2 lacks a lockout on its login page, allowing brute-force attacks against the password parameter.",
    ],
    tags: ["Brute Force", "Auth", "Disclosure", "NVD"],
    actions: [
      { label: "View CVE", href: "https://nvd.nist.gov/vuln/detail/CVE-2023-40834", icon: <ExternalLink className="h-4 w-4" /> },
    ],
  },
];

/* ===== COMPONENT ===== */
export default function ProjectsResearch() {
  return (
    <section id="projects-research" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="glitch-title" data-text="Projects & Research">
              Projects &amp; Research
            </span>
          </h2>
          <div className="mt-5 mx-auto w-64 h-[5px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>
        </div>

        <div className="rounded-3xl p-6 sm:p-10 section-shell">
          {/* PROJECTS */}
          <SubHeading icon={<Code className="h-5 w-5 text-white/90" />} text="Projects" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-6">
            {PROJECTS.map((p, idx) => (
              <motion.li key={idx} variants={item}>
                <Card>
                  <Header title={p.title} />
                  <Meta extras={p.metaExtras} />
                  <Bullets points={p.bullets} />
                  <Tags items={p.tags} />
                  <Actions actions={p.actions} />
                </Card>
              </motion.li>
            ))}
          </motion.ul>

          <div className="my-12 mx-auto w-40 h-[3px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>

          {/* RESEARCH */}
          <SubHeading icon={<Shield className="h-5 w-5 text-white/90" />} text="Research" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-6">
            {RESEARCH.map((r, idx) => (
              <motion.li key={idx} variants={item}>
                <Card>
                  <Header title={r.title} right={r.right} />
                  <Meta extras={r.metaExtras} />
                  <Bullets points={r.bullets} />
                  <Tags items={r.tags} />
                  <Actions actions={r.actions} />
                </Card>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <StyleBlock />
    </section>
  );
}

/* ===== UI bits (same as E&E + new Actions) ===== */

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
    <motion.div whileHover={{ y: -4, scale: 1.005 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="rounded-2xl border border-white/10 bg-[#0b1220]/90 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.45)] p-5 sm:p-6 relative overflow-hidden">
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
        <span key={t} className="inline-flex items-center gap-2 text-[12px] px-2.5 py-1 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 transition">
          <Code className="h-3.5 w-3.5" />
          {t}
        </span>
      ))}
    </div>
  );
}

function Actions({ actions = [] }) {
  if (!actions.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {actions.map((a, i) => (
        <a key={i} href={a.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm hover:border-white/20 hover:bg-white/[0.06] transition-colors">
          {a.icon}
          {a.label}
        </a>
      ))}
    </div>
  );
}

/* ===== styles (same as E&E) ===== */
function StyleBlock() {
  return (
    <style>{`
      .section-shell { position: relative; }
      .section-shell::before{
        content:""; position:absolute; inset:0; border-radius:1.5rem;
        padding:1px; background:linear-gradient(90deg,#22d3ee55,#a855f755);
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none;
      }
      .glitch-title{ position:relative; display:inline-block;
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
      .glitch-sub{ position:relative; display:inline-block; }
      .glitch-sub::before,.glitch-sub::after{
        content:attr(data-text); position:absolute; inset:0; pointer-events:none;
        mix-blend-mode:screen; opacity:.85; animation:glShift 3s steps(2) infinite;
      }
      .glitch-sub::before{ transform:translate(1px,-1px); color:#22d3ee; }
      .glitch-sub::after{  transform:translate(-1px,1px); color:#a855f7; }
      .heading-track{ background:rgba(255,255,255,.12); }
      .heading-runner{ display:block; height:100%; width:30%; background:linear-gradient(90deg,#22d3ee,#a855f7); animation:dash 3s linear infinite; }
      .glitch-gradient{
        background: repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 6px),
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
