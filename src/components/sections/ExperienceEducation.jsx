import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

const jobs = [
  {
    title: "Senior Security Consultant",
    company: "RedHunt Labs",
    location: "Remote (London, UK)",
    period: "Jul 2025 — Present",
    description: "Lead offensive security for cloud, web, and mobile clients. Map attack paths, chain misconfigurations, build evasion PoCs, emulate TTPs, and guide engineers with prioritized hardening.",
    tags: ["Cloud Pentesting", "AWS", "Azure", "GCP", "Red Teaming", "Detection Evasion", "CI/CD Security", "Kubernetes"],
  },
  {
    title: "Senior Associate",
    company: "BDO India LLP",
    location: "Remote — India",
    period: "Mar 2022 — Jun 2025",
    description: "Delivered web, API, mobile pentests across regulated industries. Automated recon and reporting, mapped findings to OWASP/NIST, coordinated remediation, and mentored juniors.",
    tags: ["OWASP", "NIST", "ISO 27001", "Burp Suite", "Python", "API Security", "Mobile Security"],
  },
  {
    title: "Cybersecurity Intern",
    company: "Haryana Police",
    location: "Remote",
    period: "Jun 2021 — Sep 2021",
    description: "Supported the cyber team through case studies and labs. Attended DFIR sessions, competed in CTFs, and documented playbooks for investigations.",
    tags: ["CTF", "Forensics", "DFIR", "Threat Modeling", "Secure Coding"],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Career</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Experience.</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-5%" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-white/[0.06] to-transparent hidden md:block" />

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div key={i} variants={item} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-8 h-[12px] w-[12px] rounded-full border-2 border-violet-500/50 bg-surface hidden md:block" />

                <div className="group rounded-2xl glass border-gradient p-7 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white/90">{job.title}</h3>
                      <p className="text-violet-400/80 font-medium text-sm">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/30 shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" /> {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-white/40 leading-relaxed">{job.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/35 transition-colors hover:text-white/60 hover:border-white/[0.12]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
