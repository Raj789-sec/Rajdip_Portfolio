import { ShieldCheck, Smartphone, Server, Laptop, Microscope, Cloud } from "lucide-react";

const skills = [
  {
    title: "Web Application Security",
    desc: "Advanced penetration testing of web applications & APIs, focusing on authentication, authorization, and business logic flaws.",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
  },
  {
    title: "Mobile Security",
    desc: "Comprehensive assessments of Android & iOS apps, including reverse engineering and runtime analysis.",
    icon: <Smartphone className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "API Security",
    desc: "Deep expertise in REST/GraphQL API testing with a focus on authentication, rate limiting, and data validation.",
    icon: <Server className="h-6 w-6 text-cyan-400" />,
  },
  {
    title: "Thick Client Security",
    desc: "Security assessments of desktop apps (Windows, macOS, Linux) including binary analysis & runtime security testing.",
    icon: <Laptop className="h-6 w-6 text-pink-400" />,
  },
  {
    title: "Security Research",
    desc: "Source code reviews, vulnerability analysis, exploit development, and automation for red teaming.",
    icon: <Microscope className="h-6 w-6 text-amber-400" />,
  },
  {
    title: "Cloud & Red Teaming",
    desc: "Adversary simulation in cloud environments (AWS), privilege escalation, lateral movement, and detection evasion.",
    icon: <Cloud className="h-6 w-6 text-indigo-400" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Technical Expertise
        </h2>
        <div className="mx-auto mt-3 h-[3px] w-40 rounded bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500" />
        <p className="mt-4 text-lg text-gray-400">
          My professional skills and areas of specialization in cybersecurity,
          software development, and security testing.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.title}
            className="group relative rounded-2xl bg-[#101522]/90 border border-white/10 p-6 hover:border-cyan-400/40 transition"
          >
            {/* glow effect */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 blur-md transition group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 border border-white/10">
                {s.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <div className="mt-1 h-[2px] w-20 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 rounded" />
              </div>
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-gray-300">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
