import { motion } from "framer-motion";
import { Shield, Terminal, Zap, ArrowDown, MapPin } from "lucide-react";

const NAME = "Rajdip Dey Sarkar";
const AVATAR = "/assets/avatar.png";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pt-24 pb-8 lg:pt-32">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main intro — spans 8 cols */}
        <motion.div
          {...fade(0)}
          className="md:col-span-8 bento bento-accent p-8 sm:p-10 flex flex-col justify-between min-h-[340px]"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for engagements
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              <span className="text-white">Hey, I'm </span>
              <span className="gradient-text">{NAME}</span>
            </h1>
            <p className="mt-4 text-lg text-white/40 max-w-lg">
              Offensive security specialist. I break things so you can build them stronger.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5">
              View Services <ArrowDown className="h-3.5 w-3.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-6 py-3 text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.07] transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Avatar card — spans 4 cols */}
        <motion.div
          {...fade(0.15)}
          className="md:col-span-4 bento bento-accent overflow-hidden relative min-h-[340px]"
        >
          <img src={AVATAR} alt="Rajdip" className="absolute inset-0 h-full w-full object-cover" draggable="false" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-3.5 w-3.5" /> India / Remote
            </div>
          </div>
        </motion.div>

        {/* Stats row — 4 cards */}
        <motion.div {...fade(0.25)} className="md:col-span-3 bento p-6 flex flex-col justify-center items-center text-center">
          <div className="text-3xl font-bold text-white">4+</div>
          <div className="text-xs text-white/30 mt-1">Years Experience</div>
        </motion.div>

        <motion.div {...fade(0.3)} className="md:col-span-3 bento p-6 flex flex-col justify-center items-center text-center">
          <div className="text-3xl font-bold text-white">50+</div>
          <div className="text-xs text-white/30 mt-1">Hall of Fame</div>
        </motion.div>

        <motion.div {...fade(0.35)} className="md:col-span-3 bento p-6 flex flex-col justify-center items-center text-center">
          <div className="text-3xl font-bold text-white">2</div>
          <div className="text-xs text-white/30 mt-1">Published CVEs</div>
        </motion.div>

        <motion.div {...fade(0.4)} className="md:col-span-3 bento p-6 flex flex-col justify-center items-center text-center">
          <div className="text-3xl font-bold text-white">80+</div>
          <div className="text-xs text-white/30 mt-1">Recognitions</div>
        </motion.div>

        {/* Role pills */}
        <motion.div {...fade(0.45)} className="md:col-span-4 bento p-5 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white/90">Penetration Tester</div>
            <div className="text-xs text-white/30">Web, API, Mobile, Cloud</div>
          </div>
        </motion.div>

        <motion.div {...fade(0.5)} className="md:col-span-4 bento p-5 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
            <Terminal className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white/90">Red Teamer</div>
            <div className="text-xs text-white/30">Adversary Simulation, AD</div>
          </div>
        </motion.div>

        <motion.div {...fade(0.55)} className="md:col-span-4 bento p-5 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white/90">Security Researcher</div>
            <div className="text-xs text-white/30">CVEs, Exploit Dev, Automation</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
