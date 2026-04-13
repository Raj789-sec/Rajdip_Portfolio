import { motion } from "framer-motion";
import { Shield, Search, Bug, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Penetration Testing & Red Teaming",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-accent-indigo/10 text-accent-indigo",
    items: ["Web & API pentesting", "Mobile security (iOS/Android)", "Red team & adversary simulation", "Cloud assessments (AWS/Azure/GCP)", "AD & network pentesting"],
  },
  {
    title: "Security Consulting",
    icon: <Search className="h-6 w-6" />,
    color: "bg-accent-blue/10 text-accent-blue",
    items: ["Security architecture review", "Compliance (OWASP, NIST, ISO)", "Risk assessment & threat modeling", "Secure SDLC implementation", "Security training"],
  },
  {
    title: "Bug Bounty & Research",
    icon: <Bug className="h-6 w-6" />,
    color: "bg-accent-green/10 text-accent-green",
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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-4">How I can help</h2>
          <p className="text-navy-400 max-w-lg mb-14 text-[15px] font-body">
            End-to-end offensive security for organizations of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)} className="card-accent p-8 flex flex-col">
              <div className={`h-12 w-12 rounded-xl ${s.color} flex items-center justify-center`}>{s.icon}</div>
              <h3 className="mt-6 text-lg font-heading font-bold text-navy">{s.title}</h3>
              <ul className="mt-4 space-y-2.5 flex-1">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-navy-500 font-body">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-indigo/40" />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-surface-200">
                <a href="#contact" className="text-sm font-heading font-semibold text-accent-indigo hover:text-accent-blue transition-colors inline-flex items-center gap-1.5">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
