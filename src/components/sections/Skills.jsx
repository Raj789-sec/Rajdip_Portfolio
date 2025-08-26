// src/components/sections/Skills.jsx
import { motion } from "framer-motion";
import { Shield, Smartphone, Database, Monitor, FlaskConical, Cloud } from "lucide-react";

const skills = [
  {
    title: "Web Application Security",
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    desc: "Advanced penetration testing of web applications & APIs, focusing on authentication, authorization, and business logic flaws.",
  },
  {
    title: "Mobile Security",
    icon: <Smartphone className="h-6 w-6 text-purple-400" />,
    desc: "Comprehensive assessments of Android & iOS apps, including reverse engineering and runtime analysis.",
  },
  {
    title: "API Security",
    icon: <Database className="h-6 w-6 text-emerald-400" />,
    desc: "Deep expertise in REST/GraphQL API testing with a focus on authentication, rate limiting, and data validation.",
  },
  {
    title: "Thick Client Security",
    icon: <Monitor className="h-6 w-6 text-pink-400" />,
    desc: "Security assessments of desktop apps (Windows, macOS, Linux) including binary analysis & runtime security testing.",
  },
  {
    title: "Security Research",
    icon: <FlaskConical className="h-6 w-6 text-yellow-400" />,
    desc: "Source code review, vulnerability analysis, exploit development, and automation for red teaming.",
  },
  {
    title: "Cloud & Red Teaming",
    icon: <Cloud className="h-6 w-6 text-indigo-400" />,
    desc: "Adversary simulation in cloud environments (AWS), privilege escalation, lateral movement, and detection evasion.",
  },
];

// framer-motion configs
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading outside shell */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="glitch-title" data-text="Technical Expertise">
              Technical Expertise
            </span>
          </h2>
          <div className="mt-5 mx-auto w-64 h-[5px] heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            My professional skills and areas of specialization in cybersecurity,
            software development, and security testing.
          </p>
        </div>

        {/* Shell */}
        <div className="rounded-3xl p-6 sm:p-10 section-shell">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((s, i) => (
              <motion.article
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative rounded-2xl bg-[#0f1424]/90 border border-white/10 
                           p-6 backdrop-blur-xl hover:border-cyan-400/40"
              >
                {/* glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/15 to-cyan-500/15
                                opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl
                               border border-white/10 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10
                               shadow-[0_0_0_rgba(34,211,238,0)] group-hover:shadow-[0_0_24px_rgba(34,211,238,.25)]
                               transition-shadow"
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <div className="mt-1 h-[2px] w-24 rounded bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 relative overflow-hidden">
                      <span className="absolute inset-y-0 left-0 w-10 bg-white/60 mix-blend-overlay animate-[scan_2.4s_linear_infinite]" />
                    </div>
                  </div>
                </div>

                <p className="relative mt-4 text-[15px] leading-7 text-white/80">
                  {s.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      <StyleBlock />
    </section>
  );
}

/* shared styles like other sections */
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
      .glitch-title {
        position: relative; display:inline-block;
        background: linear-gradient(90deg,#22d3ee 0%,#7dd3fc 30%,#a78bfa 60%,#f0abfc 100%);
        background-size: 200% 100%;
        -webkit-background-clip: text; background-clip: text; color: transparent;
        animation: hue 10s linear infinite;
      }
      .glitch-title::before,.glitch-title::after {
        content: attr(data-text); position:absolute; inset:0; pointer-events:none;
        mix-blend-mode: screen; opacity:.85; animation: glShift 3s steps(2) infinite;
      }
      .glitch-title::before { transform: translate(1px,-1px); color:#22d3ee; }
      .glitch-title::after { transform: translate(-1px,1px); color:#a855f7; }
      .heading-track{ background:rgba(255,255,255,.12); }
      .heading-runner{ display:block; height:100%; width:30%; background:linear-gradient(90deg,#22d3ee,#a855f7); animation:dash 3s linear infinite; }
      @keyframes hue{0%{background-position:0% 50%}100%{background-position:200% 50%}}
      @keyframes glShift{0%,100%{clip-path: inset(0 0 0 0)}50%{clip-path: inset(0 0 0 0)}}
      @keyframes dash{0%{ transform: translateX(-20%) }100%{ transform: translateX(120%) }}
      @keyframes scan{0%{ transform: translateX(-120%);}100%{ transform: translateX(260%);} }
    `}</style>
  );
}
