import { useEffect, useState, useRef, memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Shield, Bug, Terminal } from "lucide-react";

const ROLES = ["Penetration Tester", "Red Teamer", "Security Researcher", "Bug Bounty Hunter"];

/* ── Typing effect ── */
function useTypingEffect(words, typeSpeed = 80, deleteSpeed = 40, pause = 2200) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    const timeout = deleting ? deleteSpeed : text === word ? pause : typeSpeed;
    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") { setDeleting(false); setIdx((i) => (i + 1) % words.length); }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [text, idx, deleting, words, typeSpeed, deleteSpeed, pause]);
  return text;
}

/* ── Animated counter ── */
function useCounter(target, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!started) return;
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    const steps = 40;
    const inc = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return typeof target === "string" && target.includes("+") ? count + "+" : count;
}

/* ── Floating shapes ── */
const FloatingShapes = memo(function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large ring */}
      <div className="absolute top-[15%] right-[8%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float opacity-[0.06]">
        <div className="w-full h-full rounded-full border-2 border-accent-indigo" />
      </div>
      {/* Small filled circle */}
      <div className="absolute bottom-[20%] left-[5%] w-16 h-16 rounded-full bg-accent-violet/10 animate-float-slow" />
      {/* Gradient blob */}
      <div className="absolute top-[40%] left-[12%] w-[200px] h-[200px] rounded-full blur-[80px] bg-accent-indigo/10 animate-glow-pulse" />
      {/* Small ring */}
      <div className="absolute bottom-[30%] right-[15%] w-20 h-20 rounded-full border border-accent-pink/15 animate-float-slow" />
      {/* Dot */}
      <div className="absolute top-[25%] left-[30%] w-2 h-2 rounded-full bg-accent-cyan/30 animate-float" />
      <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 rounded-full bg-accent-violet/40 animate-float-slow" />
    </div>
  );
});

const stats = [
  { val: "4", suffix: "+", lbl: "Years Exp." },
  { val: "80", suffix: "+", lbl: "Hall of Fames" },
  { val: "2", suffix: "", lbl: "Published CVEs" },
  { val: "6", suffix: "", lbl: "Certifications" },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
});

function StatCounter({ val, suffix, lbl, delay }) {
  const count = useCounter(parseInt(val), 1800, delay);
  return (
    <div className="text-center px-5 sm:px-8">
      <div className="text-3xl sm:text-4xl font-heading font-bold text-white">
        {count}<span className="text-accent-indigo">{suffix}</span>
      </div>
      <div className="text-xs text-white/25 mt-1 font-body">{lbl}</div>
    </div>
  );
}

export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center px-6 overflow-hidden">
      <FloatingShapes />

      {/* Hero gradient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[900px] h-[900px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08), transparent 55%)" }} />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        <div className="text-center">
          {/* Badge */}
          <motion.div {...fade(0.1)} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-accent-indigo/[0.06] border border-accent-indigo/[0.12] backdrop-blur-md px-5 py-2.5 text-[13px] font-body">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-white/50">Available for engagements</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.95]"
          >
            <span className="text-white">I Break Things</span>
            <br />
            <span className="gradient-text-animate">So You Can Build</span>
            <br />
            <span className="text-white">Them Stronger</span>
          </motion.h1>

          {/* Role typing */}
          <motion.div {...fade(0.6)} className="mt-6 flex justify-center items-center gap-3">
            <div className="flex items-center gap-2 text-lg sm:text-xl text-white/30 font-body">
              <Shield className="h-5 w-5 text-accent-indigo/60" />
              {role}<span className="inline-block w-[2px] h-5 bg-accent-indigo/60 ml-0.5 align-middle" style={{ animation: "blink 0.8s step-end infinite" }} />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p {...fade(0.8)} className="mt-5 text-base text-white/25 max-w-2xl mx-auto leading-relaxed font-body">
            Offensive security specialist with expertise across web applications, APIs, mobile, cloud infrastructure, and Active Directory environments.
          </motion.p>

          {/* CTA */}
          <motion.div {...fade(1.0)} className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#services"
               className="group inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-heading font-semibold
                          bg-gradient-to-r from-accent-indigo to-accent-violet text-white
                          hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-[1.02]
                          transition-all duration-300">
              Explore Services <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#projects"
               className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-8 py-4 text-sm font-heading font-medium text-white/50 hover:text-accent-indigo hover:border-accent-indigo/20 hover:bg-accent-indigo/[0.03] transition-all duration-300">
              <Bug className="h-4 w-4" /> View Research
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16"
          >
            <div className="glass-card inline-flex items-center divide-x divide-white/[0.04] px-4 py-6 sm:px-6 sm:py-8 mx-auto">
              {stats.map((s, i) => (
                <StatCounter key={s.lbl} {...s} delay={1400 + i * 200} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] text-white/15 uppercase tracking-[0.2em] font-body group-hover:text-accent-indigo/40 transition-colors">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-white/10 flex justify-center pt-1.5 group-hover:border-accent-indigo/20 transition-colors">
            <div className="h-1.5 w-1 rounded-full bg-accent-indigo/40 animate-bounce" />
          </div>
        </a>
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
