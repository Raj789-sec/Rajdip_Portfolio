import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Bug } from "lucide-react";

const ROLES = ["Penetration Tester", "Red Teamer", "Security Researcher", "Bug Bounty Hunter"];

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

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

/* Hero illustration card — placeholder for custom art */
function HeroCard() {
  return (
    <motion.div {...fade(0.4)} className="relative">
      <div className="card-accent p-6 max-w-[320px] mx-auto">
        {/* Avatar area — replace with custom illustration */}
        <div className="relative bg-gradient-to-br from-navy-50 to-navy-100 rounded-lg h-[340px] flex items-center justify-center overflow-hidden">
          <img
            src="/assets/avatar.png"
            alt="Rajdip Dey Sarkar"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div class="flex flex-col items-center gap-4 p-8">
                  <div class="h-32 w-32 rounded-full bg-gradient-to-br from-accent-indigo to-accent-blue flex items-center justify-center text-white text-5xl font-heading font-bold">R</div>
                  <div class="text-center">
                    <div class="text-navy font-heading font-bold text-lg">Rajdip Dey Sarkar</div>
                    <div class="text-navy-400 text-sm">Security Consultant</div>
                  </div>
                </div>`;
            }}
          />
          {/* Floating badges */}
          <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow-md flex items-center gap-1.5 text-[11px] font-heading font-bold text-accent-indigo border border-accent-indigo/20">
            <Shield className="h-3 w-3" /> OSCP+
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="section-label justify-center text-[10px]">Security Consultant</p>
          <h3 className="font-heading font-bold text-navy text-lg">Rajdip Dey Sarkar</h3>
        </div>
      </div>

      {/* Floating stat cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -left-6 top-16 bg-white rounded-xl shadow-lg border border-surface-200 px-4 py-3 flex items-center gap-3 animate-float"
      >
        <div className="h-9 w-9 rounded-lg bg-accent-gold/10 flex items-center justify-center">
          <Award className="h-5 w-5 text-accent-gold" />
        </div>
        <div>
          <div className="text-lg font-heading font-bold text-navy">80+</div>
          <div className="text-[11px] text-navy-400">Hall of Fames</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute -right-4 bottom-24 bg-white rounded-xl shadow-lg border border-surface-200 px-4 py-3 flex items-center gap-3 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="h-9 w-9 rounded-lg bg-accent-green/10 flex items-center justify-center">
          <Bug className="h-5 w-5 text-accent-green" />
        </div>
        <div>
          <div className="text-lg font-heading font-bold text-navy">2</div>
          <div className="text-[11px] text-navy-400">Published CVEs</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-navy-50/50 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.p {...fade(0.05)} className="section-label">
              Offensive Security Specialist
            </motion.p>

            <motion.h1
              {...fade(0.15)}
              className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-accent-indigo">Breaking barriers</span>{" "}
              in cybersecurity, trusted by the world's leading organizations
            </motion.h1>

            <motion.div {...fade(0.3)} className="mt-5 flex items-center gap-2">
              <span className="text-navy-400 font-body text-lg">&gt;</span>
              <span className="text-navy-500 font-body text-lg">
                {role}<span className="inline-block w-[2px] h-5 bg-accent-indigo ml-0.5 align-middle" style={{ animation: "blink 0.8s step-end infinite" }} />
              </span>
            </motion.div>

            <motion.div {...fade(0.45)} className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="btn-primary">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#achievements" className="btn-secondary">
                View Achievements
              </a>
            </motion.div>

            {/* Client logos teaser */}
            <motion.div {...fade(0.6)} className="mt-12">
              <p className="text-xs text-navy-300 font-body uppercase tracking-wider mb-4">Recognized by</p>
              <div className="flex items-center gap-6 opacity-40 grayscale">
                {["Apple", "Microsoft", "Sony", "UN", "US DoD"].map((name) => (
                  <span key={name} className="text-sm font-heading font-bold text-navy-400">{name}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Card */}
          <div className="flex justify-center lg:justify-end">
            <HeroCard />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
