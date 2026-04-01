import { motion } from "framer-motion";
import { ArrowDown, Shield, Terminal, Zap } from "lucide-react";
import AvatarGlitch from "../atoms/AvatarGlitch";

const NAME = "Rajdip Dey Sarkar";
const ROLE = "Security Consultant";
const AVATAR = "/assets/avatar.png";

const stats = [
  { value: "4+", label: "Years Exp." },
  { value: "50+", label: "Hall of Fame" },
  { value: "2", label: "Published CVEs" },
  { value: "80+", label: "Recognitions" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-6 pt-20 lg:pt-28"
      style={{ minHeight: "92vh" }}
    >
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="lg:w-[55%]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 text-sm text-violet-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for engagements
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="text-white">{NAME.split(" ")[0]}</span>
            <br />
            <span className="gradient-text">{NAME.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-2 text-xl sm:text-2xl font-medium text-white/40"
          >
            {ROLE}
          </motion.p>

          <motion.p
            className="mt-6 max-w-lg text-base text-white/50 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Offensive security specialist. I break things so you can build them stronger.
            Penetration testing, red teaming & vulnerability research.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-semibold text-white
                         shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30
                         transition-all duration-300 hover:-translate-y-0.5"
            >
              View Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-7 py-4 font-semibold text-white/70
                         hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-white
                         transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-4 gap-4 max-w-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          className="lg:w-[40%] flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Glow behind avatar */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/10 blur-[80px] animate-glow-pulse" />
            <AvatarGlitch src={AVATAR} alt={`${NAME} avatar`} />

            {/* Floating badges */}
            <motion.div
              className="absolute -left-6 top-8 flex items-center gap-2 rounded-2xl glass border-gradient px-4 py-2.5 text-sm text-white/80"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield className="h-4 w-4 text-violet-400" /> Pentester
            </motion.div>

            <motion.div
              className="absolute -right-4 top-1/2 flex items-center gap-2 rounded-2xl glass border-gradient px-4 py-2.5 text-sm text-white/80"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Terminal className="h-4 w-4 text-blue-400" /> Red Teamer
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl glass border-gradient px-4 py-2.5 text-sm text-white/80"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Zap className="h-4 w-4 text-amber-400" /> Researcher
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border border-white/10 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-white/30 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
