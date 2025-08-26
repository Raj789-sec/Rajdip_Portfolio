// src/components/sections/Achievements.jsx
import React from "react";
import { motion } from "framer-motion";
import { Globe, Trophy, Award, Shield, Zap, Target, CalendarDays } from "lucide-react";
import HOFMarquee from "./HOFMarquee";

/* logos — from src/assets */
import BBCLogo from "../../assets/BBC.png";
import HuaweiLogo from "../../assets/huawei.png";
import LGLogo from "../../assets/Lg.png";
import PhilipsLogo from "../../assets/philips.png";
import SonyLogo from "../../assets/sony.png";
import YahooLogo from "../../assets/yahoo.jpg";
import UNLogo from "../../assets/UN.png";
import IndiaGovtLogo from "../../assets/indiangovt.png";
import MastercardLogo from "../../assets/mastercard.png";
import DutchGovtLogo from "../../assets/dutchgovt.png";
import AppleLogo from "../../assets/apple.png";
import NokiaLogo from "../../assets/nokia.png";
import UsdodLogo from "../../assets/usdod.png";
import ZivameLogo from "../../assets/zivame.png";
import AirbnbLogo from "../../assets/airbnb.png";
import WanderuLogo from "../../assets/wanderu.png";
import FlowcryptLogo from "../../assets/flowcrypt.jpeg";

/* hall of fame items */
const HOF_ITEMS = [
  { name: "Apple", logo: AppleLogo },
  { name: "SONY", logo: SonyLogo },
  { name: "BBC", logo: BBCLogo },
  { name: "Yahoo", logo: YahooLogo },
  { name: "Mastercard", logo: MastercardLogo },
  { name: "United Nations", logo: UNLogo },
  { name: "US DoD", logo: UsdodLogo },
  { name: "Govt. of India", logo: IndiaGovtLogo },
  { name: "Govt. of Netherlands", logo: DutchGovtLogo },
  { name: "Philips", logo: PhilipsLogo },
  { name: "Nokia", logo: NokiaLogo },
  { name: "LG", logo: LGLogo },
  { name: "Huawei", logo: HuaweiLogo },
  { name: "Zivame", logo: ZivameLogo },
  { name: "Airbnb", logo: AirbnbLogo },
  { name: "Wanderu", logo: WanderuLogo },
  { name: "FlowCrypt", logo: FlowcryptLogo },
];

/* motion — same as ProjectsResearch */
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-20 px-4 sm:px-6 md:px-8 scroll-mt-28">
      <div className="mx-auto w-full max-w-6xl">
        {/* ── floating heading outside (identical) */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="glitch-title" data-text="> Achievements">
              &gt; Achievements
            </span>
          </h2>
          <div className="mt-5 mx-auto w-64 h-[5px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>
        </div>

        {/* ── outer shell (identical to ProjectsResearch) */}
        <div className="rounded-3xl p-6 sm:p-10 section-shell overflow-visible">
          {/* Hall of Fame */}
          <SubHeading icon={<Globe className="h-5 w-5 text-white/90" />} text="hall of fame" />

          <p className="max-w-4xl text-left leading-relaxed text-white/80 mb-8">
            Secured top organizations worldwide — including{" "}
            <span className="text-cyan-300">Apple</span>, <span className="text-cyan-300">Sony</span>,{" "}
            <span className="text-cyan-300">BBC</span>, <span className="text-cyan-300">Yahoo</span>,{" "}
            <span className="text-cyan-300">Nokia</span>, <span className="text-cyan-300">Philips</span>,{" "}
            <span className="text-cyan-300">Huawei</span>, and{" "}
            <span className="text-cyan-300">Mastercard</span> — plus public institutions like the{" "}
            <span className="text-fuchsia-300">U.S. DoD</span>,{" "}
            <span className="text-fuchsia-300">Government of India</span>, and the{" "}
            <span className="text-fuchsia-300">Dutch Government</span>. Recognized in{" "}
            <span className="text-emerald-300">80+ acknowledgments</span> with partnerships across{" "}
            <span className="text-cyan-300">Airbnb</span>, <span className="text-cyan-300">Wanderu</span>,{" "}
            <span className="text-cyan-300">FlowCrypt</span>, and <span className="text-cyan-300">Zivame</span>.
          </p>

          {/* marquee (unchanged) */}
          <div className="mb-12">
            <HOFMarquee items={HOF_ITEMS} speed={55} height={64} gap={56} />
          </div>

          {/* CTF highlights (cards cloned) */}
          <SubHeading icon={<Trophy className="h-5 w-5 text-white/90" />} text="ctf highlights" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-6">
            {[
              {
                title: "North Bengal CTF",
                right: "2022",
                extras: [{ icon: <Trophy className="h-4 w-4" />, text: "Winner — 1st Place" }],
              },
              {
                title: "Kolkata Police CTF",
                right: "2023",
                extras: [{ icon: <Award className="h-4 w-4" />, text: "5th Place — Top 5" }],
              },
            ].map((c, i) => (
              <motion.li key={i} variants={item}>
                <Card>
                  <Header title={c.title} right={c.right} />
                  <Meta extras={c.extras} />
                </Card>
              </motion.li>
            ))}
          </motion.ul>

          {/* divider (same runner) */}
          <div className="my-12 mx-auto w-40 h-[3px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>

          {/* Platforms */}
          <SubHeading icon={<Shield className="h-5 w-5 text-white/90" />} text="platform achievements" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-6">
            {[
              { title: "Hack The Box", extras: [{ icon: <Zap className="h-4 w-4" />, text: "Pro Hacker" }] },
              {
                title: "TryHackMe",
                extras: [{ icon: <Target className="h-4 w-4" />, text: "Top 1% · profile" }],
              },
            ].map((p, i) => (
              <motion.li key={i} variants={item}>
                <Card>
                  <Header title={p.title} />
                  <Meta
                    extras={
                      p.title === "TryHackMe"
                        ? [
                            {
                              icon: <Target className="h-4 w-4" />,
                              text: (
                                <>
                                  Top 1% ·{" "}
                                  <a className="underline" href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer">
                                    profile
                                  </a>
                                </>
                              ),
                            },
                          ]
                        : p.extras
                    }
                  />
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

/* ── shared UI bits (copied from ProjectsResearch) ─────────────────── */

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

function Meta({ extras = [] }) {
  if (!extras?.length) return null;
  return (
    <div className="mt-1 text-white/70 text-sm flex flex-wrap items-center gap-x-4 gap-y-2">
      {extras.map((e, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          {e.icon} {e.text}
        </span>
      ))}
    </div>
  );
}

/* ── styles (same as ProjectsResearch) ─────────────────────────────── */
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
        background:repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 6px),
                 radial-gradient(1200px 200px at 50% -20%, rgba(34,211,238,.06), transparent 60%),
                 radial-gradient(900px 200px at 50% 120%, rgba(168,85,247,.06), transparent 60%);
        mix-blend-mode:soft-light; animation:pan 14s linear infinite;
        background-size:auto, 200% 100%, 200% 100%;
      }

      @keyframes hue{0%{background-position:0% 50%}100%{background-position:200% 50%}}
      @keyframes glShift{0%,100%{clip-path:inset(0 0 0 0)}50%{clip-path:inset(0 0 0 0)}}
      @keyframes dash{0%{transform:translateX(-20%)}100%{transform:translateX(120%)}}
      @keyframes pan{0%{background-position:0 0,0% 50%,100% 50%}100%{background-position:100% 0,200% 50%,0% 50%}}
    `}</style>
  );
}
