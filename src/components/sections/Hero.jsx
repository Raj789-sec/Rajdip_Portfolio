import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const NAME = "Rajdip";
const SURNAME = "Dey Sarkar";
const AVATAR = "/assets/avatar.png";

const ROLES = [
  "Penetration Tester",
  "Red Teamer",
  "Security Researcher",
  "Bug Bounty Hunter",
];

function useTypingEffect(words, typeSpeed = 80, deleteSpeed = 40, pause = 2000) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const timeout = deleting
      ? deleteSpeed
      : text === word
      ? pause
      : typeSpeed;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, idx, deleting, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center px-6 overflow-hidden">
      {/* Radial spotlight behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />

      <motion.div {...stagger} className="relative z-10 max-w-4xl w-full text-center">
        {/* Status badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm px-4 py-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/50">Available for engagements</span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1 text-white/30"><MapPin className="h-3 w-3" /> India / Remote</span>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div {...fade(0.1)} className="flex justify-center mb-8">
          <div className="relative">
            <div className="h-24 w-24 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-4 ring-offset-[#09090b]">
              <img src={AVATAR} alt="Rajdip" className="h-full w-full object-cover" draggable="false" />
            </div>
            {/* Glow behind avatar */}
            <div className="absolute -inset-4 rounded-full blur-2xl opacity-20 -z-10"
                 style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fade(0.2)} className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
          <span className="text-white">{NAME} </span>
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">{SURNAME}</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div {...fade(0.35)} className="mt-6 flex justify-center">
          <div className="text-lg sm:text-xl text-white/40 font-light tracking-wide">
            <span>{role}</span>
            <span className="inline-block w-[2px] h-5 bg-violet-400/60 ml-0.5 animate-blink align-middle" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p {...fade(0.45)} className="mt-4 text-sm sm:text-base text-white/25 max-w-md mx-auto leading-relaxed">
          I break things so you can build them stronger. Offensive security across web, API, mobile, cloud & Active Directory.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fade(0.55)} className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#services"
             className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-500 hover:-translate-y-0.5">
            View Services
            <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            {/* Button glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
          </a>
          <a href="#about"
             className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/50 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-500">
            Learn More
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div {...fade(0.65)} className="mt-16 flex justify-center">
          <div className="flex items-center gap-8 sm:gap-12">
            {[
              { val: "4+", lbl: "Years" },
              { val: "80+", lbl: "HoFs" },
              { val: "2", lbl: "CVEs" },
              { val: "6", lbl: "Certs" },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <div className="text-lg sm:text-xl font-bold text-white/80">{s.val}</div>
                <div className="text-[10px] text-white/20 uppercase tracking-wider mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/15 uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>
      </motion.div>

      {/* Blink cursor animation */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
