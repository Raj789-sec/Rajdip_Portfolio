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
    <section id="experience" className="relative py-24 px-6 bg-surface-100">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="section-label">Career</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-12">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-indigo/30 via-surface-300 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 gap-5">
            {jobs.map((job, i) => (
              <motion.div key={i} {...fade(0.1 * i)} className="relative md:pl-12">
                <div className={`absolute left-0 top-8 h-[31px] w-[31px] rounded-full border-2 hidden md:flex items-center justify-center bg-white ${
                  job.current ? "border-accent-green" : "border-surface-300"
                }`}>
                  <div className={`h-2.5 w-2.5 rounded-full ${job.current ? "bg-accent-green" : "bg-surface-300"}`} />
                </div>

                <div className={`${i === 0 ? "card-accent" : "card"} p-8`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-heading font-bold text-navy">{job.title}</h3>
                        {job.current && (
                          <span className="rounded-full bg-accent-green/10 border border-accent-green/20 px-2.5 py-0.5 text-[10px] font-heading font-bold text-accent-green">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-accent-indigo font-heading font-semibold mt-0.5">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-navy-400 font-body shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-navy-500 leading-relaxed font-body">{job.description}</p>
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
