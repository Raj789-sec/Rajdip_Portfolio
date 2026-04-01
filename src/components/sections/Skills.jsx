import { motion } from "framer-motion";
import { Shield, Smartphone, Database, Monitor, FlaskConical, Cloud } from "lucide-react";

const skills = [
  { title: "Web App Security", icon: <Shield className="h-5 w-5" />, desc: "Auth, biz logic, OWASP Top 10" },
  { title: "Mobile Security", icon: <Smartphone className="h-5 w-5" />, desc: "Android & iOS, RE, runtime" },
  { title: "API Security", icon: <Database className="h-5 w-5" />, desc: "REST, GraphQL, rate limiting" },
  { title: "Thick Client", icon: <Monitor className="h-5 w-5" />, desc: "Desktop apps, binary analysis" },
  { title: "Security Research", icon: <FlaskConical className="h-5 w-5" />, desc: "Code review, exploit dev" },
  { title: "Cloud & Red Team", icon: <Cloud className="h-5 w-5" />, desc: "AWS, AD, lateral movement" },
];

const tools = [
  "Burp Suite", "Metasploit", "Nmap", "Wireshark", "BloodHound", "Cobalt Strike",
  "Python", "Bash", "Nuclei", "FFUF", "SQLMap", "Frida",
  "MITRE ATT&CK", "OWASP", "Ghidra", "IDA Pro",
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
            <span className="gradient-text">What I do best.</span>
          </h2>
        </motion.div>

        {/* Skills bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {skills.map((s, i) => (
            <motion.div key={i} {...fade(0.05 * i)} className="bento p-5 flex items-start gap-3">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-white/85">{s.title}</div>
                <div className="text-xs text-white/30 mt-0.5">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Tech */}
        <motion.div {...fade(0.3)} className="bento bento-accent p-7">
          <h3 className="text-sm font-medium text-white/40 tracking-wide uppercase mb-4">Tools & Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-3.5 py-2 text-xs font-medium text-white/40 hover:text-white/70 hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
