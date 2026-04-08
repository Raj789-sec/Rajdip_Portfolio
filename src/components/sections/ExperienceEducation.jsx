import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";

const jobs = [
  {
    title: "Senior Security Consultant",
    company: "RedHunt Labs",
    location: "London, UK (Remote)",
    period: "Jul 2025 — Present",
    description: "Lead offensive security for cloud, web, and mobile clients. Map attack paths, build evasion PoCs, emulate TTPs, and guide hardening.",
    tags: ["Cloud", "AWS", "Azure", "Red Teaming", "CI/CD", "Kubernetes"],
    current: true,
  },
  {
    title: "Senior Associate",
    company: "BDO India LLP",
    location: "India (Remote)",
    period: "Mar 2022 — Jun 2025",
    description: "Delivered web, API, mobile pentests across regulated industries. Automated recon and reporting, mapped to OWASP/NIST.",
    tags: ["OWASP", "NIST", "Burp Suite", "Python", "API Security"],
  },
  {
    title: "Cybersecurity Intern",
    company: "Haryana Police",
    location: "Remote",
    period: "Jun 2021 — Sep 2021",
    description: "Supported cyber team through case studies, DFIR sessions, CTFs, and documentation of investigation playbooks.",
    tags: ["CTF", "Forensics", "DFIR", "Secure Coding"],
  },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="text-xs font-mono font-medium text-neon-cyan/60 tracking-widest uppercase mb-3">// career</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-mono tracking-tight mb-10">
            <span className="gradient-text">Experience.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan/30 via-neon-violet/20 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job, i) => (
              <motion.div key={i} {...fade(0.1 * i)} className="relative md:pl-10">
                {/* Timeline dot */}
                <div className={`absolute left-0 top-7 h-[23px] w-[23px] rounded-full border-2 hidden md:flex items-center justify-center ${
                  job.current ? "border-neon-green bg-neon-green/10" : "border-neon-cyan/30 bg-neon-cyan/5"
                }`}>
                  <div className={`h-2 w-2 rounded-full ${job.current ? "bg-neon-green animate-pulse" : "bg-neon-cyan/40"}`} />
                </div>

                <div className={`cyber-card ${i === 0 ? "neon-border" : ""} p-7`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-mono font-semibold text-white/85">{job.title}</h3>
                        {job.current && (
                          <span className="rounded-full bg-neon-green/10 border border-neon-green/20 px-2.5 py-0.5 text-[10px] font-mono font-medium text-neon-green">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neon-cyan/50 font-mono mt-0.5">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/20 font-mono shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/30 leading-relaxed">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="rounded-md bg-neon-cyan/[0.04] border border-neon-cyan/[0.08] px-2.5 py-1 text-[11px] font-mono text-neon-cyan/35 hover:text-neon-cyan/60 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
