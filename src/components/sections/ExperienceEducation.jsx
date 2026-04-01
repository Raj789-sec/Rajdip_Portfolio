import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, Code } from "lucide-react";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-14 px-3 sm:py-20 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Experience
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-blue-500" />
        </div>

        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 sm:p-10">
          <SubHeading icon={<Briefcase className="h-5 w-5 text-slate-300" />} text="Professional Experience" />

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.li variants={item}>
              <Card>
                <Header
                  title="Senior Security Consultant · RedHunt Labs (London, UK — Remote)"
                  right="Jul 2025 — Present"
                />
                <Meta location="Remote (London Area, UK)" />
                <Description text="Lead offensive security for cloud, web, and mobile clients, mapping attack paths and chaining misconfigurations. Build evasion PoCs, emulate TTPs, and guide engineers with prioritized hardening, monitoring, and measurable risk." />
                <Tags items={["Cloud Pentesting","AWS","Azure","GCP","Red Teaming","Detection Evasion","Attack Path Mapping","CI/CD Security","Kubernetes","Threat Intelligence"]} />
              </Card>
            </motion.li>

            <motion.li variants={item}>
              <Card>
                <Header title="Senior Associate · BDO India LLP" right="Mar 2022 — Present" />
                <Meta location="Remote — India" />
                <Description text="Deliver web, API, mobile pentests across regulated industries. Automate recon and reporting, map findings to OWASP/NIST, coordinate remediation, validate fixes, mentor juniors, align security with business goals to reduce risk." />
                <Tags items={["OWASP","NIST","ISO 27001","MITRE ATT&CK","Burp Suite","Python","AWS","API Security","Mobile Security","Reporting Automation","Recon","Linux"]} />
              </Card>
            </motion.li>

            <motion.li variants={item}>
              <Card>
                <Header title="Cybersecurity Intern · Haryana Police" right="Jun 2021 — Sep 2021" />
                <Meta location="Remote" />
                <Description text="Support the cyber team through case studies and labs, producing concise briefs. Attend DFIR sessions, practice secure coding, compete in CTFs, and document playbooks accelerating investigations while strengthening disciplined collaboration." />
                <Tags items={["CTF","Threat Modeling","Forensics","Malware Analysis","DFIR","Log Analysis","Secure Coding"]} />
              </Card>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function SubHeading({ icon, text }) {
  return (
    <div className="mb-5 sm:mb-6">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-blue-500" />
        <div className="shrink-0">{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{text}</h3>
      </div>
      <div className="mt-3 h-px w-16 bg-blue-500/50" />
    </div>
  );
}

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 sm:p-6"
    >
      {children}
    </motion.div>
  );
}

function Header({ title, right }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
      <h4 className="text-base sm:text-xl font-semibold text-white leading-snug break-words hyphens-auto">
        {title}
      </h4>
      {right && (
        <div className="text-xs sm:text-sm text-slate-500 inline-flex items-center gap-1.5 sm:gap-2">
          <CalendarDays className="h-4 w-4 shrink-0" />
          <span className="whitespace-nowrap">{right}</span>
        </div>
      )}
    </div>
  );
}

function Meta({ location, extras = [] }) {
  if (!location && extras.length === 0) return null;
  return (
    <div className="mt-1 text-slate-400 text-xs sm:text-sm flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {location && (
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 shrink-0" /> {location}
        </span>
      )}
      {extras.map((e, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {e.icon} {e.text}
        </span>
      ))}
    </div>
  );
}

function Description({ text }) {
  return <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">{text}</p>;
}

function Tags({ items = [] }) {
  return (
    <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-700/40 px-3 py-1 text-xs text-slate-300"
        >
          <Code className="h-3.5 w-3.5" />
          {t}
        </span>
      ))}
    </div>
  );
}
