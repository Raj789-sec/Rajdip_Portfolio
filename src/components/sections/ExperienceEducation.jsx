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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="section-label">Career</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-12">
            <span className="gradient-text">Experience.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-indigo/30 via-accent-violet/15 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 gap-5">
            {jobs.map((job, i) => (
              <motion.div key={i} {...fade(0.1 * i)} className="relative md:pl-12">
                {/* Timeline dot */}
                <div className={`absolute left-0 top-8 h-[31px] w-[31px] rounded-full border-2 hidden md:flex items-center justify-center ${
                  job.current ? "border-green-400 bg-green-400/10" : "border-accent-indigo/25 bg-accent-indigo/5"
                }`}>
                  <div className={`h-2.5 w-2.5 rounded-full ${job.current ? "bg-green-400 animate-pulse" : "bg-accent-indigo/30"}`} />
                </div>

                <div className={`${i === 0 ? "glow-card" : "glass-card"} p-8`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-heading font-semibold text-white/85">{job.title}</h3>
                        {job.current && (
                          <span className="rounded-full bg-green-400/10 border border-green-400/20 px-2.5 py-0.5 text-[10px] font-heading font-semibold text-green-400">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-accent-indigo/60 font-heading font-medium mt-0.5">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/20 font-body shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-white/30 leading-relaxed font-body">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="tag-pill">{t}</span>
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
