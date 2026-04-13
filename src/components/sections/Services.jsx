import { motion } from "framer-motion";
import { Shield, Search, Bug, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Penetration Testing & Red Teaming",
    icon: <Shield className="h-6 w-6" />,
    gradient: "from-accent-indigo to-accent-blue",
    items: ["Web & API pentesting", "Mobile security (iOS/Android)", "Red team & adversary simulation", "Cloud assessments (AWS/Azure/GCP)", "AD & network pentesting"],
  },
  {
    title: "Security Consulting",
    icon: <Search className="h-6 w-6" />,
    gradient: "from-accent-violet to-accent-pink",
    items: ["Security architecture review", "Compliance (OWASP, NIST, ISO)", "Risk assessment & threat modeling", "Secure SDLC implementation", "Security training"],
  },
  {
    title: "Bug Bounty & Research",
    icon: <Bug className="h-6 w-6" />,
    gradient: "from-accent-cyan to-accent-indigo",
    items: ["Responsible disclosure", "CVE research & publication", "Source code review", "Exploit dev & PoC creation", "Security automation"],
  },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="section-label">Services</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
            <span className="gradient-text">How I can help.</span>
          </h2>
          <p className="text-white/25 max-w-lg mb-14 text-sm font-body">
            End-to-end offensive security for organizations of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)}
              className="group glow-card p-8 flex flex-col hover:!transform hover:!-translate-y-1">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg`}>
                {s.icon}
              </div>
              <h3 className="mt-6 text-lg font-heading font-semibold text-white/85">{s.title}</h3>
              <ul className="mt-4 space-y-2.5 flex-1">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/30 font-body">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-indigo/40" />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/[0.04]">
                <span className="text-sm font-body text-accent-indigo/60 group-hover:text-accent-indigo transition-colors inline-flex items-center gap-1.5">
                  Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.5)} className="mt-12 text-center">
          <a href="#contact"
             className="group inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-heading font-semibold
                        bg-gradient-to-r from-accent-indigo to-accent-violet text-white
                        hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:scale-[1.02]
                        transition-all duration-300">
            Start a Project <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
