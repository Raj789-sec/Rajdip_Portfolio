import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

const SUMMARY =
  "With 4+ years in offensive security, I combine application security and red teaming to deliver deep-dive assessments. I specialize in web, API, mobile, thick-client testing, plus AD adversary simulation. Available for engagements.";

const INTERESTS = ["AI for Security", "Reverse Engineering", "Cloud Pentesting", "Security Research"];

const CERTS = [
  {
    name: "OSCP+",
    full: "Offensive Security Certified Professional",
    logo: "https://images.credly.com/size/340x340/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png",
    href: "#",
  },
  {
    name: "CRTO",
    full: "Certified Red Team Operator",
    logo: "https://images.credly.com/size/340x340/images/2ae023ba-e90b-4261-8ab2-f4223eea8f52/image.png",
    href: "https://eu.badgr.com/public/assertions/7Wr3jQrFQP6FOK6rZZUkYA?identity__email=Wcyber71@gmail.com&action=download",
  },
  {
    name: "CRTP",
    full: "Certified Red Teaming Professional",
    logo: "https://www.alteredsecurity.com/hubfs/Pentester_Academy_October2021/images/crtp-certified-red-team-professional-by-pentester-academy-1.png",
    href: "https://www.credential.net/79c25d7c-e2ce-4c7b-8e8a-d9f37c4d1013",
  },
  {
    name: "eWPTXv2",
    full: "Web Pentester eXtreme",
    logo: "https://security.ine.com/wp-content/uploads/2023/08/eWPTXv2-1.png",
    href: "https://certs.ine.com/d4ac221f-7b89-44c8-9918-bb31cc89efad?record_view=true",
  },
  {
    name: "CEH v11",
    full: "Certified Ethical Hacker",
    logo: "https://images.credly.com/size/340x340/images/a6ea4416-2bec-4078-b0b5-39e47c7e3614/image.png",
    href: "https://www.linkedin.com/in/rdsarkar/details/featured/1635468419676/single-media-viewer/?profileId=ACoAADA4H70BJdcbrjiwf_08MMvUzMOiVflnfVs",
  },
  {
    name: "CAP",
    full: "Certified AppSec Practitioner",
    logo: "https://secops.group/wp-content/uploads/2023/01/CAP-Badge.png",
    href: "https://www.linkedin.com/posts/rdsarkar_certified-appsec-practitioner-activity-7012447184361062400-gXl5",
  },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">About</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
            <span className="gradient-text">Who I am.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Summary — wide card */}
          <motion.div {...fade(0.1)} className="md:col-span-7 bento bento-accent p-8">
            <p className="text-white/50 leading-relaxed">{SUMMARY}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Tool Dev", "Automation", "AI + Sec", "Research", "Cloud/Containers"].map((t) => (
                <span key={t} className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-xs text-white/35 hover:text-white/60 hover:border-white/[0.12] transition-all duration-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Interests card */}
          <motion.div {...fade(0.2)} className="md:col-span-5 bento p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-semibold text-white/70">Interests</span>
            </div>
            <div className="space-y-2">
              {INTERESTS.map((it) => (
                <div key={it} className="flex items-center gap-2.5 text-sm text-white/40">
                  <span className="h-1 w-1 rounded-full bg-violet-400/50" />
                  {it}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications — full width bento grid */}
          <motion.div {...fade(0.3)} className="md:col-span-12">
            <h3 className="text-sm font-medium text-white/40 tracking-wide uppercase mb-4 mt-4">Certifications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {CERTS.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group bento p-4 flex flex-col items-center text-center gap-3"
                >
                  <div className="h-16 w-16 rounded-xl overflow-hidden bg-white/[0.03] flex items-center justify-center p-1">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="h-full w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{c.name}</div>
                    <div className="text-[10px] text-white/25 mt-0.5 leading-tight">{c.full}</div>
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
