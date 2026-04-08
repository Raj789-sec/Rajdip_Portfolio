import { motion } from "framer-motion";
import { Shield, Search, Bug, ArrowRight } from "lucide-react";

const services = [
  { title: "Penetration Testing & Red Teaming", icon: <Shield className="h-6 w-6" />, color: "cyan",
    items: ["Web & API pentesting", "Mobile security (iOS/Android)", "Red team & adversary simulation", "Cloud assessments (AWS/Azure/GCP)", "AD & network pentesting"] },
  { title: "Security Consulting", icon: <Search className="h-6 w-6" />, color: "violet",
    items: ["Security architecture review", "Compliance (OWASP, NIST, ISO)", "Risk assessment & threat modeling", "Secure SDLC implementation", "Security training"] },
  { title: "Bug Bounty & Research", icon: <Bug className="h-6 w-6" />, color: "green",
    items: ["Responsible disclosure", "CVE research & publication", "Source code review", "Exploit dev & PoC creation", "Security automation"] },
];

const colors = {
  cyan: { bg: "bg-neon-cyan/10", text: "text-neon-cyan", dot: "bg-neon-cyan/30" },
  violet: { bg: "bg-neon-violet/10", text: "text-neon-violet", dot: "bg-neon-violet/30" },
  green: { bg: "bg-neon-green/10", text: "text-neon-green", dot: "bg-neon-green/30" },
};

const fade = (d = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } });

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl relative">
        <motion.div {...fade()}>
          <p className="text-xs font-mono font-medium text-neon-cyan/60 tracking-widest uppercase mb-3">// services</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-mono tracking-tight mb-4"><span className="gradient-text">How I can help.</span></h2>
          <p className="text-white/25 max-w-lg mb-12 text-sm">End-to-end offensive security for organizations of all sizes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)} className="cyber-card neon-border p-7 flex flex-col">
              <div className={`h-12 w-12 rounded-lg ${colors[s.color].bg} ${colors[s.color].text} flex items-center justify-center`}>{s.icon}</div>
              <h3 className="mt-5 text-lg font-mono font-semibold text-white/85">{s.title}</h3>
              <ul className="mt-4 space-y-2.5 flex-1">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/30">
                    <span className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${colors[s.color].dot}`} />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.5)} className="mt-10 text-center">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 px-7 py-3.5 text-sm font-mono font-semibold text-neon-cyan hover:bg-neon-cyan/15 hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] transition-all duration-300">
            Work with me <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
