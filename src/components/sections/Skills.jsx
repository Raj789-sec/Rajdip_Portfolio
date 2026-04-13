import { motion } from "framer-motion";
import { Shield, Smartphone, Database, Monitor, FlaskConical, Cloud } from "lucide-react";

const skills = [
  { title: "Web App Security", icon: <Shield className="h-5 w-5" />, desc: "Auth, biz logic, OWASP Top 10", gradient: "from-accent-indigo to-accent-blue" },
  { title: "Mobile Security", icon: <Smartphone className="h-5 w-5" />, desc: "Android & iOS, RE, runtime", gradient: "from-accent-violet to-accent-pink" },
  { title: "API Security", icon: <Database className="h-5 w-5" />, desc: "REST, GraphQL, rate limiting", gradient: "from-accent-cyan to-accent-indigo" },
  { title: "Thick Client", icon: <Monitor className="h-5 w-5" />, desc: "Desktop apps, binary analysis", gradient: "from-accent-pink to-accent-violet" },
  { title: "Security Research", icon: <FlaskConical className="h-5 w-5" />, desc: "Code review, exploit dev", gradient: "from-accent-blue to-accent-cyan" },
  { title: "Cloud & Red Team", icon: <Cloud className="h-5 w-5" />, desc: "AWS, AD, lateral movement", gradient: "from-accent-amber to-accent-pink" },
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
          <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-12">
            <span className="gradient-text">What I do best.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {skills.map((s, i) => (
            <motion.div key={i} {...fade(0.05 * i)}
              className="group glass-card p-6 flex items-start gap-4">
              <div className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <div>
                <div className="text-sm font-heading font-semibold text-white/80">{s.title}</div>
                <div className="text-xs text-white/25 mt-0.5 font-body">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.3)} className="glow-card p-8">
          <p className="text-sm font-heading font-semibold text-white/30 mb-5">Tools & Arsenal</p>
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
