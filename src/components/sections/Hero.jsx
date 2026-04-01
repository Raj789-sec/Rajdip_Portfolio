import { motion } from "framer-motion";
import AvatarGlitch from "../atoms/AvatarGlitch";

const NAME = "Rajdip Dey Sarkar";
const ROLE = "Security Consultant";
const AVATAR = "/assets/avatar.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pt-24 md:flex-row md:justify-between lg:pt-28"
      style={{ minHeight: "86vh" }}
    >
      {/* Left: text */}
      <div className="md:w-1/2">
        <p className="mb-4 text-center text-blue-400/80 md:text-left">
          Hello, I'm
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-left"
        >
          {NAME}
        </motion.h1>

        <div className="mt-4">
          <span className="text-2xl font-semibold text-blue-400">{ROLE}</span>
          <div className="mt-2 h-0.5 w-32 rounded-full bg-blue-500" />
        </div>

        <motion.p
          className="mt-5 max-w-xl text-center text-slate-400 md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A passionate cybersecurity professional specializing in penetration
          testing, red teaming, and security consulting. Available for engagements.
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap justify-center gap-4 md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <a
            href="#projects"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-500/5"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right: avatar */}
      <AvatarGlitch src={AVATAR} alt={`${NAME} avatar`} />
    </section>
  );
}
