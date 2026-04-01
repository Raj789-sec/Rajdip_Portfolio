import { motion } from "framer-motion";
import { Shield, Smartphone, Database, Monitor, FlaskConical, Cloud } from "lucide-react";

const skills = [
  {
    title: "Web Application Security",
    icon: <Shield className="h-6 w-6" />,
    desc: "Advanced penetration testing of web applications & APIs, focusing on authentication, authorization, and business logic flaws.",
  },
  {
    title: "Mobile Security",
    icon: <Smartphone className="h-6 w-6" />,
    desc: "Comprehensive assessments of Android & iOS apps, including reverse engineering and runtime analysis.",
  },
  {
    title: "API Security",
    icon: <Database className="h-6 w-6" />,
    desc: "Deep expertise in REST/GraphQL API testing with a focus on authentication, rate limiting, and data validation.",
  },
  {
    title: "Thick Client Security",
    icon: <Monitor className="h-6 w-6" />,
    desc: "Security assessments of desktop apps (Windows, macOS, Linux) including binary analysis & runtime security testing.",
  },
  {
    title: "Security Research",
    icon: <FlaskConical className="h-6 w-6" />,
    desc: "Source code review, vulnerability analysis, exploit development, and automation for red teaming.",
  },
  {
    title: "Cloud & Red Teaming",
    icon: <Cloud className="h-6 w-6" />,
    desc: "Adversary simulation in cloud environments (AWS), privilege escalation, lateral movement, and detection evasion.",
  },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Technical Expertise
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-blue-500" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            My professional skills and areas of specialization in cybersecurity
            and security testing.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((s, i) => (
            <motion.article
              key={i}
              variants={item}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm
                         hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl
                               border border-slate-700 bg-blue-500/10 text-blue-400">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <div className="mt-1 h-px w-16 rounded bg-blue-500/40" />
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-slate-400">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
