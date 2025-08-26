// src/components/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, TerminalSquare, Cpu, Sparkles } from "lucide-react";
import GlowCard from "../atoms/GlowCard";

/* Data */
const SUMMARY =
  "With 4+ years in offensive security, I combine application security and red teaming to deliver deep-dive, developer-centric assessments. I specialize in web, API, mobile (iOS/Android), and thick-client testing, plus network & Active Directory adversary simulation. I bridge security and development by building tools, automations, and clear remediation guidance.";

const INTERESTS = [
  "AI for Security",
  "Reverse Engineering",
  "Cloud & Container Pentesting",
  "Security Research",
];

const CERTS = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CRTP", subtitle: "Certified Red Teaming Professional", date: "ADLID96063", ctaText: "Verify Certificate", href: "https://www.credential.net/79c25d7c-e2ce-4c7b-8e8a-d9f37c4d1013" },
  { icon: <TerminalSquare className="h-5 w-5" />, title: "eWPTxv2", subtitle: "eLearnSecurity Web Pentester eXtreme", date: "Valid until Mar 2028", ctaText: "Verify Certificate", href: "https://certs.ine.com/d4ac221f-7b89-44c8-9918-bb31cc89efad?record_view=true" },
  { icon: <Cpu className="h-5 w-5" />, title: "CRTO", subtitle: "Certified Red Team Operator", date: "Issued on 4 Jan 2024", ctaText: "View Certificate", href: "https://eu.badgr.com/public/assertions/7Wr3jQrFQP6FOK6rZZUkYA?identity__email=Wcyber71@gmail.com&action=download" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CAP", subtitle: "Certified AppSec Practitioner", date: "View announcement", ctaText: "View Post", href: "https://www.linkedin.com/posts/rdsarkar_certified-appsec-practitioner-activity-7012447184361062400-gXl5" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CEH v11", subtitle: "Certified Ethical Hacker", date: "ECC6291753804", ctaText: "View Proof", href: "https://www.linkedin.com/in/rdsarkar/details/featured/1635468419676/single-media-viewer/?profileId=ACoAADA4H70BJdcbrjiwf_08MMvUzMOiVflnfVs" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading outside */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="glitch-title" data-text="> About Me">
              &gt; About Me
            </span>
          </h2>
          <div className="mt-5 mx-auto w-64 h-[5px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>
        </div>

        {/* Shell */}
        <div className="rounded-3xl p-6 sm:p-10 section-shell">
          {/* Summary (with interests inside) */}
          <SubHeading icon={<Trophy className="h-5 w-5 text-white/90" />} text="Summary" />
          <Card>
            <p className="text-white/85 leading-relaxed">{SUMMARY}</p>

            {/* skill chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Tool Dev", "Automation", "AI + Sec", "Research", "Cloud/Containers"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1 text-xs text-white/80 backdrop-blur hover:border-cyan-400/40 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* interests row (merged here) */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="font-semibold text-white/90">Interests:</span>
              {INTERESTS.map((it, i) => (
                <span key={it} className="text-white/75">
                  {it}{i < INTERESTS.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </Card>

          {/* Divider */}
          <div className="my-12 mx-auto w-40 h-[3px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>

          {/* Certifications */}
          <SubHeading icon={<ShieldCheck className="h-5 w-5 text-white/90" />} text="Professional Certifications" />
          <div className="grid gap-6 md:grid-cols-2">
            {CERTS.map((c, i) => (
              <GlowCard
                key={i}
                icon={c.icon}
                title={c.title}
                subtitle={c.subtitle}
                date={c.date}
                ctaText={c.ctaText}
                href={c.href}
              />
            ))}
          </div>
        </div>
      </div>

      <StyleBlock />
    </section>
  );
}

/* shared UI bits (same scaffold as Achievements/ProjectsResearch) */
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
        mix-blend-mode: soft-light; animation:pan 14s linear infinite;
        background-size:auto, 200% 100%, 200% 100%;
      }
      @keyframes hue{0%{background-position:0% 50%}100%{background-position:200% 50%}}
      @keyframes glShift{0%,100%{clip-path:inset(0 0 0 0)}50%{clip-path:inset(0 0 0 0)}}
      @keyframes dash{0%{transform:translateX(-20%)}100%{transform:translateX(120%)}}
      @keyframes pan{0%{background-position:0 0,0% 50%,100% 50%}100%{background-position:100% 0,200% 50%,0% 50%}}
    `}</style>
  );
}
