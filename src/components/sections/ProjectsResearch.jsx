import { motion } from "framer-motion";
import { Code, Shield, CalendarDays, Github, ExternalLink, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "JS Secret Scanner",
    type: "Open-source utility",
    description: "Scans JavaScript for AWS URLs, secrets, API endpoints, and high-entropy tokens to catch leakage early.",
    tags: ["Recon", "Automation", "Secrets", "Node/JS"],
    links: [
      { label: "View on GitHub", href: "https://github.com/Raj789-sec/js-secret-scanner", icon: <Github className="h-4 w-4" /> },
    ],
  },
];

const RESEARCH = [
  {
    title: "CVE-2023-39115",
    year: "2023",
    description: "XSS via crafted SVG document in Campcodes Online Matrimonial Website System Script 3.3.",
    tags: ["XSS", "SVG", "Disclosure"],
    href: "https://nvd.nist.gov/vuln/detail/CVE-2023-39115",
  },
  {
    title: "CVE-2023-40834",
    year: "2023",
    description: "OpenCart CMS v4.0.2.2 lacks login lockout, allowing brute-force attacks.",
    tags: ["Brute Force", "Auth", "Disclosure"],
    href: "https://nvd.nist.gov/vuln/detail/CVE-2023-40834",
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsResearch() {
  return (
    <section id="projects-research" className="relative py-24 px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Projects & Research.</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Projects */}
          <motion.div variants={fade}>
            <h3 className="text-lg font-semibold text-white/70 mb-5 flex items-center gap-3">
              <Code className="h-5 w-5 text-violet-400" /> Projects
            </h3>
            {PROJECTS.map((p, i) => (
              <div key={i} className="rounded-2xl glass border-gradient p-7 transition-all duration-300 hover:bg-white/[0.05]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white/90">{p.title}</h4>
                    <p className="text-sm text-violet-400/70">{p.type}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/40 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-[11px] text-white/35">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.links.map((l, j) => (
                    <a key={j} href={l.href} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2 text-sm text-white/50 hover:text-white/80 hover:border-white/[0.15] transition-all duration-300">
                      {l.icon} {l.label} <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Research */}
          <motion.div variants={fade} className="mt-12">
            <h3 className="text-lg font-semibold text-white/70 mb-5 flex items-center gap-3">
              <Shield className="h-5 w-5 text-violet-400" /> Published CVEs
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {RESEARCH.map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl glass border-gradient p-6 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-0.5 block"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white/90">{r.title}</h4>
                    <span className="text-xs text-white/25">{r.year}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/40 leading-relaxed">{r.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 text-[11px] text-white/35">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-violet-400/70 group-hover:text-violet-300 transition-colors">
                    View on NVD <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
