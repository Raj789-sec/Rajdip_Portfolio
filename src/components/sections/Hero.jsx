// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import AvatarGlitch from "../atoms/AvatarGlitch";

const NAME = "Rajdip Dey Sarkar";
const ROLE = "Security Consultant";
const AVATAR = "/assets/avatar.png"; // put image in public/assets/

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pt-24 md:grid-cols-2 lg:pt-28"
      style={{ minHeight: "86vh" }}
    >
      {/* Left: text */}
      <div>
        <p className="mb-4 text-cyan-300/80">Hello, I’m</p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glitch text-5xl font-extrabold tracking-tight sm:text-6xl"
          data-glitch={NAME}
        >
          {NAME}
        </motion.h1>

        <div className="mt-4 inline-block">
          <span className="text-2xl font-semibold text-cyan-300">{ROLE}</span>
          <span className="relative block h-[3px] w-full overflow-hidden rounded bg-gradient-to-r from-purple-500/60 via-cyan-400 to-purple-500/60">
            <i className="absolute inset-y-0 left-0 w-16 bg-white/70 mix-blend-overlay animate-[scan_2.2s_linear_infinite]" />
          </span>
        </div>

        <motion.p
          className="mt-5 max-w-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A passionate cybersecurity professional specializing in penetration
          testing, vulnerability assessment, and secure application development.
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-cyan-300/50 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

    {/* Right: avatar — exact like reference */}
<AvatarGlitch src="/assets/avatar.png" alt={`${NAME} avatar`} />

      {/* local styles */}
      <style>{`
        .glitch{position:relative;color:#e5e7eb;text-shadow:0 0 18px rgba(124,58,237,.35)}
        .glitch::before,.glitch::after{content:attr(data-glitch);position:absolute;top:0;left:0;width:100%;opacity:.9}
        .glitch::before{color:#22d3ee;transform:translate(1px,0);animation:gl1 2.1s infinite linear alternate-reverse;mix-blend-mode:screen}
        .glitch::after{color:#a78bfa;transform:translate(-1px,0);animation:gl2 1.7s infinite linear alternate-reverse;mix-blend-mode:screen}
        @keyframes gl1{0%{clip-path:inset(0 0 86% 0)}50%{clip-path:inset(40% 0 30% 0)}100%{clip-path:inset(0 0 0 0)}}
        @keyframes gl2{0%{clip-path:inset(90% 0 0 0)}50%{clip-path:inset(30% 0 40% 0)}100%{clip-path:inset(0 0 0 0)}}
        @keyframes scan{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}
      `}</style>
    </section>
  );
}
