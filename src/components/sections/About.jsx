import { motion } from "framer-motion";
import { Sparkles, Award } from "lucide-react";
import OscpLogo from "../../assets/certs/oscp.png";
import CrtoLogo from "../../assets/certs/crto.png";
import CrtpLogo from "../../assets/certs/crtp.png";
import EwptxLogo from "../../assets/certs/ewptxv2.svg";
import CehLogo from "../../assets/certs/ceh.jpg";
import CapLogo from "../../assets/certs/cap.webp";

const SUMMARY = "With 4+ years in offensive security, I combine application security and red teaming to deliver deep-dive assessments. I specialize in web, API, mobile, thick-client testing, plus AD adversary simulation. Available for engagements.";
const INTERESTS = ["AI for Security", "Reverse Engineering", "Cloud Pentesting", "Security Research"];
const CERTS = [
  { name: "OSCP+", full: "Offensive Security Certified Professional", logo: OscpLogo, href: "#" },
  { name: "CRTO", full: "Certified Red Team Operator", logo: CrtoLogo, href: "https://eu.badgr.com/public/assertions/7Wr3jQrFQP6FOK6rZZUkYA?identity__email=Wcyber71@gmail.com&action=download" },
  { name: "CRTP", full: "Certified Red Teaming Professional", logo: CrtpLogo, href: "https://www.credential.net/79c25d7c-e2ce-4c7b-8e8a-d9f37c4d1013" },
  { name: "eWPTXv2", full: "Web Pentester eXtreme", logo: EwptxLogo, href: "https://certs.ine.com/d4ac221f-7b89-44c8-9918-bb31cc89efad?record_view=true" },
  { name: "CEH v11", full: "Certified Ethical Hacker", logo: CehLogo, href: "https://www.linkedin.com/in/rdsarkar/details/featured/1635468419676/single-media-viewer/?profileId=ACoAADA4H70BJdcbrjiwf_08MMvUzMOiVflnfVs" },
  { name: "CAP", full: "Certified AppSec Practitioner", logo: CapLogo, href: "https://www.linkedin.com/posts/rdsarkar_certified-appsec-practitioner-activity-7012447184361062400-gXl5" },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="section-label">About</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-12">
            <span className="gradient-text">Who I am.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Summary card */}
          <motion.div {...fade(0.1)} className="md:col-span-7 glow-card p-8 sm:p-10">
            <p className="text-white/40 leading-relaxed font-body text-[15px]">{SUMMARY}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Tool Dev", "Automation", "AI + Sec", "Research", "Cloud/Containers"].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Interests card */}
          <motion.div {...fade(0.2)} className="md:col-span-5 glass-card p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="h-4 w-4 text-accent-violet" />
              <span className="text-sm font-heading font-semibold text-white/60">Interests</span>
            </div>
            <div className="space-y-3">
              {INTERESTS.map((it) => (
                <div key={it} className="flex items-center gap-3 text-sm text-white/35 font-body">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-indigo/50" />{it}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fade(0.3)} className="md:col-span-12 mt-2">
            <div className="flex items-center gap-2 mb-5">
              <Award className="h-4 w-4 text-accent-amber" />
              <span className="text-sm font-heading font-semibold text-white/40">Certifications</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {CERTS.map((c) => (
                <a key={c.name} href={c.href} target="_blank" rel="noreferrer"
                   className="group glass-card p-5 flex flex-col items-center text-center gap-3 hover:!border-accent-indigo/25">
                  <div className="h-16 w-16 rounded-xl overflow-hidden bg-white/[0.03] flex items-center justify-center p-1.5">
                    <img src={c.logo} alt={c.name} className="h-full w-full object-contain brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300" />
                  </div>
                  <div>
                    <div className="text-sm font-heading font-semibold text-white/70 group-hover:text-accent-indigo transition-colors">{c.name}</div>
                    <div className="text-[10px] text-white/20 mt-0.5 leading-tight font-body">{c.full}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
