import { motion } from "framer-motion";
import { Code, Shield, Github, ExternalLink, ArrowUpRight } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function ProjectsResearch() {
  return (
    <section id="projects-research" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
            <span className="gradient-text">Projects & Research.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Project — wide card */}
          <motion.div {...fade(0.1)} className="md:col-span-7 bento bento-accent p-7">
            <div className="flex items-center gap-2 mb-1">
              <Code className="h-4 w-4 text-violet-400" />
              <span className="text-xs text-white/30 uppercase tracking-wide font-medium">Project</span>
            </div>
            <h3 className="text-xl font-semibold text-white/90 mt-2">JS Secret Scanner</h3>
            <p className="text-xs text-violet-400/60 font-medium">Open-source utility</p>
            <p className="mt-3 text-sm text-white/35 leading-relaxed">
              Scans JavaScript for AWS URLs, secrets, API endpoints, and high-entropy tokens to catch leakage early.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Recon", "Automation", "Secrets", "Node/JS"].map((t) => (
                <span key={t} className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 text-[11px] text-white/30">{t}</span>
              ))}
            </div>
            <a href="https://github.com/Raj789-sec/js-secret-scanner" target="_blank" rel="noreferrer"
               className="mt-5 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
              <Github className="h-4 w-4" /> View on GitHub <ArrowUpRight className="h-3 w-3 opacity-40" />
            </a>
          </motion.div>

          {/* CVEs — stacked */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <motion.div {...fade(0.15)} className="md:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-4 w-4 text-violet-400" />
                <span className="text-xs text-white/30 uppercase tracking-wide font-medium">Published CVEs</span>
              </div>
            </motion.div>

            <motion.a
              {...fade(0.2)}
              href="https://nvd.nist.gov/vuln/detail/CVE-2023-39115"
              target="_blank"
              rel="noreferrer"
              className="bento p-6 block group"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-white/85">CVE-2023-39115</h4>
                <ExternalLink className="h-3.5 w-3.5 text-white/20 group-hover:text-violet-400 transition-colors" />
              </div>
              <p className="mt-2 text-xs text-white/30 leading-relaxed">XSS via crafted SVG in Campcodes Online Matrimonial System.</p>
              <div className="mt-3 flex gap-2">
                {["XSS", "SVG"].map((t) => (
                  <span key={t} className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 text-[10px] text-white/25">{t}</span>
                ))}
              </div>
            </motion.a>

            <motion.a
              {...fade(0.25)}
              href="https://nvd.nist.gov/vuln/detail/CVE-2023-40834"
              target="_blank"
              rel="noreferrer"
              className="bento p-6 block group"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-white/85">CVE-2023-40834</h4>
                <ExternalLink className="h-3.5 w-3.5 text-white/20 group-hover:text-violet-400 transition-colors" />
              </div>
              <p className="mt-2 text-xs text-white/30 leading-relaxed">OpenCart CMS v4.0.2.2 lacks login lockout — brute-force possible.</p>
              <div className="mt-3 flex gap-2">
                {["Brute Force", "Auth"].map((t) => (
                  <span key={t} className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 text-[10px] text-white/25">{t}</span>
                ))}
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
