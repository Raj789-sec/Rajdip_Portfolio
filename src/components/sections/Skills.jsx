import { motion } from "framer-motion";
import { Shield, Smartphone, Database, Monitor, FlaskConical, Cloud } from "lucide-react";

const skills = [
  {
    title: "Web Application Security",
    icon: <Shield className="h-6 w-6" />,
    desc: "Advanced penetration testing of web apps & APIs — authentication, authorization, and business logic flaws.",
  },
  {
    title: "Mobile Security",
    icon: <Smartphone className="h-6 w-6" />,
    desc: "Comprehensive assessments of Android & iOS apps, including reverse engineering and runtime analysis.",
  },
  {
    title: "API Security",
    icon: <Database className="h-6 w-6" />,
    desc: "Deep expertise in REST/GraphQL API testing — authentication, rate limiting, and data validation.",
  },
  {
    title: "Thick Client Security",
    icon: <Monitor className="h-6 w-6" />,
    desc: "Security assessments of desktop apps (Windows, macOS, Linux) including binary analysis.",
  },
  {
    title: "Security Research",
    icon: <FlaskConical className="h-6 w-6" />,
    desc: "Source code review, vulnerability analysis, exploit development, and automation.",
  },
  {
    title: "Cloud & Red Teaming",
    icon: <Cloud className="h-6 w-6" />,
    desc: "Adversary simulation in cloud environments — privilege escalation, lateral movement, evasion.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">What I do best.</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl">
            Specialized areas across offensive security, from web apps to cloud infrastructure.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((s, i) => (
            <motion.article
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group rounded-2xl glass border-gradient p-7 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-400 ring-1 ring-white/[0.06]
                            group-hover:from-violet-500/25 group-hover:to-blue-500/25 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white/90">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">{s.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
