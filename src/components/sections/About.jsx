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
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CRTP", subtitle: "Certified Red Teaming Professional", date: "ADLID96063", ctaText: "Verify Certificate", href: "https://www.credential.net/79c25d7c-e2ce-4c7b-8e8a-d9f37c4d1013" },
  { icon: <TerminalSquare className="h-5 w-5" />, title: "eWPTxv2", subtitle: "eLearnSecurity Web Pentester eXtreme", date: "Valid until Mar 2028", ctaText: "Verify Certificate", href: "https://certs.ine.com/d4ac221f-7b89-44c8-9918-bb31cc89efad?record_view=true" },
  { icon: <Cpu className="h-5 w-5" />, title: "CRTO", subtitle: "Certified Red Team Operator", date: "Issued on 4 Jan 2024", ctaText: "View Certificate", href: "https://eu.badgr.com/public/assertions/7Wr3jQrFQP6FOK6rZZUkYA?identity__email=Wcyber71@gmail.com&action=download" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CAP", subtitle: "Certified AppSec Practitioner", date: "View announcement", ctaText: "View Post", href: "https://www.linkedin.com/posts/rdsarkar_certified-appsec-practitioner-activity-7012447184361062400-gXl5" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "CEH v11", subtitle: "Certified Ethical Hacker", date: "ECC6291753804", ctaText: "View Proof", href: "https://www.linkedin.com/in/rdsarkar/details/featured/1635468419676/single-media-viewer/?profileId=ACoAADA4H70BJdcbrjiwf_08MMvUzMOiVflnfVs" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-blue-500" />
        </div>

        {/* Content */}
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 sm:p-10">
          {/* Summary */}
          <SubHeading icon={<Trophy className="h-5 w-5 text-slate-300" />} text="Summary" />
          <Card>
            <p className="text-slate-300 leading-relaxed">{SUMMARY}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Tool Dev", "Automation", "AI + Sec", "Research", "Cloud/Containers"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-600 bg-slate-700/40 px-3 py-1 text-xs text-slate-300 transition-colors hover:border-blue-500/40"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="font-semibold text-slate-300">Interests:</span>
              {INTERESTS.map((it, i) => (
                <span key={it}>
                  {it}{i < INTERESTS.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </Card>

          {/* Divider */}
          <div className="my-10 mx-auto w-16 h-px bg-slate-700" />

          {/* Certifications */}
          <SubHeading icon={<ShieldCheck className="h-5 w-5 text-slate-300" />} text="Professional Certifications" />
          <div className="grid gap-6 md:grid-cols-2">
            {CERTS.map((c, i) => (
              <GlowCard
                key={i}
                icon={c.icon}
                title={c.title}
                subtitle={c.subtitle}
                date={c.date}
                ctaText={c.ctaText}
                href={c.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubHeading({ icon, text }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-blue-500" />
        <div className="shrink-0">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{text}</h3>
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
      className="rounded-xl border border-slate-700 bg-slate-800/60 p-5 sm:p-6"
    >
      {children}
    </motion.div>
  );
}
