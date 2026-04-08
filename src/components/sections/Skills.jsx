import { motion } from "framer-motion";
import { Shield, Smartphone, Database, Monitor, FlaskConical, Cloud } from "lucide-react";

const skills = [
  { title: "Web App Security", icon: <Shield className="h-5 w-5" />, desc: "Auth, biz logic, OWASP Top 10", color: "cyan" },
  { title: "Mobile Security", icon: <Smartphone className="h-5 w-5" />, desc: "Android & iOS, RE, runtime", color: "violet" },
  { title: "API Security", icon: <Database className="h-5 w-5" />, desc: "REST, GraphQL, rate limiting", color: "green" },
  { title: "Thick Client", icon: <Monitor className="h-5 w-5" />, desc: "Desktop apps, binary analysis", color: "pink" },
  { title: "Security Research", icon: <FlaskConical className="h-5 w-5" />, desc: "Code review, exploit dev", color: "cyan" },
  { title: "Cloud & Red Team", icon: <Cloud className="h-5 w-5" />, desc: "AWS, AD, lateral movement", color: "violet" },
];

const tools = [
  "Burp Suite", "Metasploit", "Nmap", "Wireshark", "BloodHound", "Cobalt Strike",
  "Python", "Bash", "Nuclei", "FFUF", "SQLMap", "Frida",
  "MITRE ATT&CK", "OWASP", "Ghidra", "IDA Pro",
];

const colors = {
  cyan: { bg: "bg-neon-cyan/10", text: "text-neon-cyan" },
  violet: { bg: "bg-neon-violet/10", text: "text-neon-violet" },
  green: { bg: "bg-neon-green/10", text: "text-neon-green" },
  pink: { bg: "bg-neon-pink/10", text: "text-neon-pink" },
};

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="text-xs font-mono font-medium text-neon-cyan/60 tracking-widest uppercase mb-3">// expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-mono tracking-tight mb-10">
            <span className="gradient-text">What I do best.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {skills.map((s, i) => {
            const c = colors[s.color];
            return (
              <motion.div key={i} {...fade(0.05 * i)} className="cyber-card p-5 flex items-start gap-3 hover:-translate-y-0.5 transition-transform duration-300">
                <div className={`h-10 w-10 shrink-0 rounded-lg ${c.bg} ${c.text} flex items-center justify-center`}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-sm font-mono font-semibold text-white/80">{s.title}</div>
                  <div className="text-xs text-white/25 mt-0.5">{s.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fade(0.3)} className="cyber-card neon-border p-7">
          <h3 className="text-xs font-mono font-medium text-white/20 tracking-widest uppercase mb-4">// tools_&_arsenal</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="rounded-md bg-neon-cyan/[0.04] border border-neon-cyan/[0.08] px-3.5 py-2 text-xs font-mono text-neon-cyan/40 hover:text-neon-cyan/70 hover:border-neon-cyan/20 hover:bg-neon-cyan/[0.08] transition-all duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
