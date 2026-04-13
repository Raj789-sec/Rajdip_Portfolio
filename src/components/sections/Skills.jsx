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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="section-label">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-12">What I do best</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {skills.map((s, i) => (
            <motion.div key={i} {...fade(0.05 * i)} className="card p-6 flex items-start gap-4 group">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-accent-indigo/10 text-accent-indigo flex items-center justify-center group-hover:bg-accent-indigo group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <div>
                <div className="text-sm font-heading font-bold text-navy">{s.title}</div>
                <div className="text-xs text-navy-400 mt-0.5 font-body">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.3)} className="card-accent p-8">
          <p className="text-sm font-heading font-bold text-navy mb-5">Tools & Arsenal</p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <span key={t} className="tag-pill cursor-default">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
