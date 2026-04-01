import { motion } from "framer-motion";
import { Shield, Search, Bug, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Penetration Testing & Red Teaming",
    icon: <Shield className="h-6 w-6" />,
    color: "violet",
    items: ["Web & API pentesting", "Mobile security (iOS/Android)", "Red team & adversary simulation", "Cloud assessments (AWS/Azure/GCP)", "AD & network pentesting"],
  },
  {
    title: "Security Consulting",
    icon: <Search className="h-6 w-6" />,
    color: "blue",
    items: ["Security architecture review", "Compliance (OWASP, NIST, ISO)", "Risk assessment & threat modeling", "Secure SDLC implementation", "Security training"],
  },
  {
    title: "Bug Bounty & Research",
    icon: <Bug className="h-6 w-6" />,
    color: "amber",
    items: ["Responsible disclosure", "CVE research & publication", "Source code review", "Exploit dev & PoC creation", "Security automation"],
  },
];

const colors = {
  violet: { bg: "bg-violet-500/15", text: "text-violet-400" },
  blue: { bg: "bg-blue-500/15", text: "text-blue-400" },
  amber: { bg: "bg-amber-500/15", text: "text-amber-400" },
};

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <motion.div {...fade()}>
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">How I can help.</span>
          </h2>
          <p className="text-white/35 max-w-lg mb-10">End-to-end offensive security for organizations of all sizes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              {...fade(0.1 + i * 0.1)}
              className="bento bento-accent p-7 flex flex-col"
            >
              <div className={`h-12 w-12 rounded-xl ${colors[s.color].bg} ${colors[s.color].text} flex items-center justify-center`}>
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white/90">{s.title}</h3>
              <ul className="mt-4 space-y-2.5 flex-1">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/35">
                    <span className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${colors[s.color].bg}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.5)} className="mt-8 text-center">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5">
            Work with me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
