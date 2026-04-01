import { motion } from "framer-motion";
import { Shield, Search, Bug, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Penetration Testing & Red Teaming",
    icon: <Shield className="h-7 w-7" />,
    description: "Comprehensive offensive security assessments to identify vulnerabilities before attackers do.",
    offerings: [
      "Web & API penetration testing",
      "Mobile application security (iOS/Android)",
      "Red team engagements & adversary simulation",
      "Cloud security assessments (AWS/Azure/GCP)",
      "Active Directory & network pentesting",
    ],
  },
  {
    title: "Security Consulting",
    icon: <Search className="h-7 w-7" />,
    description: "Strategic security guidance to strengthen your organization's security posture.",
    offerings: [
      "Security architecture review",
      "Compliance (OWASP, NIST, ISO 27001)",
      "Risk assessment & threat modeling",
      "Secure SDLC implementation",
      "Security training & awareness",
    ],
  },
  {
    title: "Bug Bounty & Research",
    icon: <Bug className="h-7 w-7" />,
    description: "Deep vulnerability research with published CVEs and 80+ Hall of Fame recognitions.",
    offerings: [
      "Responsible disclosure programs",
      "CVE research & publication",
      "Source code security review",
      "Exploit development & PoC creation",
      "Security automation & tooling",
    ],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <div className="mb-12">
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">How I can help.</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            Comprehensive offensive security services for organizations of all sizes.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group rounded-2xl glass border-gradient p-8 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-400 ring-1 ring-white/[0.06]
                            group-hover:from-violet-500/25 group-hover:to-blue-500/25 transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white/90">{s.title}</h3>
              <p className="mt-3 text-sm text-white/40 leading-relaxed">{s.description}</p>
              <ul className="mt-5 space-y-2.5">
                {s.offerings.map((o, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/35">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-400/50" />
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 font-semibold text-white
                       shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30
                       transition-all duration-300 hover:-translate-y-0.5"
          >
            Interested in working together?
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
