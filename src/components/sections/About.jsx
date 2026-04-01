import { motion } from "framer-motion";
import { Trophy, ShieldCheck, TerminalSquare, Cpu, Sparkles } from "lucide-react";
import GlowCard from "../atoms/GlowCard";

const SUMMARY =
  "With 4+ years in offensive security, I combine application security and red teaming to deliver deep-dive, developer-centric assessments. I specialize in web, API, mobile (iOS/Android), and thick-client testing, plus network & Active Directory adversary simulation. Available for penetration testing engagements, security consulting, and research collaborations.";

const INTERESTS = [
  "AI for Security",
  "Reverse Engineering",
  "Cloud & Container Pentesting",
  "Security Research",
];

const CERTS = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CRTP", subtitle: "Certified Red Teaming Professional", date: "ADLID96063", ctaText: "Verify", href: "https://www.credential.net/79c25d7c-e2ce-4c7b-8e8a-d9f37c4d1013" },
  { icon: <TerminalSquare className="h-5 w-5" />, title: "eWPTxv2", subtitle: "eLearnSecurity Web Pentester eXtreme", date: "Valid until Mar 2028", ctaText: "Verify", href: "https://certs.ine.com/d4ac221f-7b89-44c8-9918-bb31cc89efad?record_view=true" },
  { icon: <Cpu className="h-5 w-5" />, title: "CRTO", subtitle: "Certified Red Team Operator", date: "Issued 4 Jan 2024", ctaText: "View", href: "https://eu.badgr.com/public/assertions/7Wr3jQrFQP6FOK6rZZUkYA?identity__email=Wcyber71@gmail.com&action=download" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CAP", subtitle: "Certified AppSec Practitioner", ctaText: "View", href: "https://www.linkedin.com/posts/rdsarkar_certified-appsec-practitioner-activity-7012447184361062400-gXl5" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CEH v11", subtitle: "Certified Ethical Hacker", date: "ECC6291753804", ctaText: "View", href: "https://www.linkedin.com/in/rdsarkar/details/featured/1635468419676/single-media-viewer/?profileId=ACoAADA4H70BJdcbrjiwf_08MMvUzMOiVflnfVs" },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader label="About" title="Who I am." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Summary */}
          <motion.div variants={fade} className="rounded-2xl glass border-gradient p-8 sm:p-10">
            <p className="text-white/60 leading-relaxed text-base">{SUMMARY}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Tool Dev", "Automation", "AI + Sec", "Research", "Cloud/Containers"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 text-xs text-white/40 transition-all duration-300 hover:text-white/70 hover:border-white/[0.15]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-white/40">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="font-medium text-white/60">Interests:</span>
              {INTERESTS.map((it, i) => (
                <span key={it}>
                  {it}{i < INTERESTS.length - 1 ? " ·" : ""}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div variants={fade} className="mt-10">
            <h3 className="text-lg font-semibold text-white/70 mb-6 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-violet-400" />
              Professional Certifications
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {CERTS.map((c, i) => (
                <GlowCard key={i} {...c} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">{label}</p>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
    </div>
  );
}
