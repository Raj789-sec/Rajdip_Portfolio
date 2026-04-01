import { motion } from "framer-motion";
import { Shield, Search, Bug, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Penetration Testing & Red Teaming",
    icon: <Shield className="h-7 w-7" />,
    description:
      "Comprehensive offensive security assessments to identify vulnerabilities before attackers do.",
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
    description:
      "Strategic security guidance to strengthen your organization's security posture.",
    offerings: [
      "Security architecture review",
      "Compliance assessments (OWASP, NIST, ISO 27001)",
      "Risk assessment & threat modeling",
      "Secure SDLC implementation",
      "Security training & awareness",
    ],
  },
  {
    title: "Bug Bounty & Vulnerability Research",
    icon: <Bug className="h-7 w-7" />,
    description:
      "Deep vulnerability research and responsible disclosure with published CVEs and 80+ Hall of Fame recognitions.",
    offerings: [
      "Responsible disclosure programs",
      "CVE research & publication",
      "Source code security review",
      "Exploit development & PoC creation",
      "Security automation & tooling",
    ],
  },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Services
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-blue-500" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Offering comprehensive offensive security services to help organizations
            identify and remediate vulnerabilities.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="rounded-xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm
                         hover:border-blue-500/30 transition-colors"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-700 bg-blue-500/10 text-blue-400">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.description}
              </p>
              <ul className="mt-4 space-y-2">
                {s.offerings.map((o, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Interested in working together?
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
