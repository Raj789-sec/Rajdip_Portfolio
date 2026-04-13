import { motion } from "framer-motion";
import { Code, Shield, Github, ExternalLink, ArrowUpRight } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function ProjectsResearch() {
  return (
    <section id="projects-research" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="section-label">Work</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-12">Projects & Research</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div {...fade(0.1)} className="md:col-span-7 card-accent p-8">
            <div className="flex items-center gap-2 mb-1">
              <Code className="h-4 w-4 text-accent-indigo" />
              <span className="text-xs font-heading font-bold text-navy-300 uppercase tracking-wide">Project</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mt-3">JS Secret Scanner</h3>
            <p className="text-xs text-accent-indigo font-heading font-semibold">Open-source utility</p>
            <p className="mt-4 text-sm text-navy-500 leading-relaxed font-body">
              Scans JavaScript for AWS URLs, secrets, API endpoints, and high-entropy tokens to catch leakage early.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Recon", "Automation", "Secrets", "Node/JS"].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
            <a href="https://github.com/Raj789-sec/js-secret-scanner" target="_blank" rel="noreferrer"
               className="mt-6 inline-flex items-center gap-2 text-sm font-heading font-semibold text-navy-500 hover:text-accent-indigo transition-colors">
              <Github className="h-4 w-4" /> View on GitHub <ArrowUpRight className="h-3 w-3 opacity-40" />
            </a>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-5">
            <motion.div {...fade(0.15)}>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-accent-red" />
                <span className="text-xs font-heading font-bold text-navy-300 uppercase tracking-wide">Published CVEs</span>
              </div>
            </motion.div>

            <motion.a {...fade(0.2)} href="https://nvd.nist.gov/vuln/detail/CVE-2023-39115" target="_blank" rel="noreferrer" className="card p-6 block group">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-heading font-bold text-navy group-hover:text-accent-indigo transition-colors">CVE-2023-39115</h4>
                <ExternalLink className="h-3.5 w-3.5 text-navy-300 group-hover:text-accent-indigo transition-colors" />
              </div>
              <p className="mt-2 text-xs text-navy-400 leading-relaxed font-body">XSS via crafted SVG in Campcodes Online Matrimonial System.</p>
              <div className="mt-3 flex gap-2">
                {["XSS", "SVG"].map((t) => (<span key={t} className="tag-pill text-[10px]">{t}</span>))}
              </div>
            </motion.a>

            <motion.a {...fade(0.25)} href="https://nvd.nist.gov/vuln/detail/CVE-2023-40834" target="_blank" rel="noreferrer" className="card p-6 block group">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-heading font-bold text-navy group-hover:text-accent-indigo transition-colors">CVE-2023-40834</h4>
                <ExternalLink className="h-3.5 w-3.5 text-navy-300 group-hover:text-accent-indigo transition-colors" />
              </div>
              <p className="mt-2 text-xs text-navy-400 leading-relaxed font-body">OpenCart CMS v4.0.2.2 lacks login lockout — brute-force possible.</p>
              <div className="mt-3 flex gap-2">
                {["Brute Force", "Auth"].map((t) => (<span key={t} className="tag-pill text-[10px]">{t}</span>))}
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
