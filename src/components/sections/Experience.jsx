// src/components/sections/Experience.jsx
import { motion } from "framer-motion";
// use these instead
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";


const experiences = [
  {
    role: "Senior Security Consultant",
    company: "RedHunt Labs (UK Remote)",
    period: "Jul 2025 – Present · 2 mos",
    location: "London Area, United Kingdom · Remote",
    points: [
      "Own end-to-end offensive research and product pentests across internet-scale attack surface.",
      "Develop custom automation (Python/Bash) to fingerprint assets, discover exposures, and triage findings at scale.",
      "Partner with product/engineering to land secure defaults, hardening baselines, and customer-facing guidance.",
    ],
  },
  {
    role: "Senior Associate",
    company: "BDO India LLP – Kolkata",
    period: "Mar 2022 – Jun 2025 · 3 yrs 3 mos",
    location: "Kolkata, West Bengal, India · Remote",
    points: [
      "Conducted 50+ penetration tests across web, API, and mobile applications, identifying critical vulnerabilities.",
      "Authored detailed vulnerability reports reducing security risks by 30% through proactive remediation.",
      "Led knowledge-sharing sessions to upskill the team and foster a culture of continuous learning.",
      "Reviewed & validated reports for accuracy, compliance (OWASP, NIST, ISO 27001), and actionable guidance.",
      "Executed end-to-end projects collaborating with developers, stakeholders, and cross-functional teams.",
      "Implemented MITRE ATT&CK techniques and industry best practices to enhance security defense strategies.",
    ],
  },
  {
    role: "Cyber Security Intern",
    company: "Haryana Police",
    period: "Jun 2021 – Sep 2021 · 3 mos",
    location: "Gurugram, Haryana, India",
    points: [
      "Engaged in real-world cybersecurity case studies solving practical security problems.",
      "Attended expert-led lectures gaining exposure to latest threats, tools, and practices.",
      "Worked on hands-on projects improving technical skills, research capabilities, and teamwork.",
      "Participated in CTFs and challenges fostering a competitive spirit and technical growth.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-6xl mx-auto px-4 py-20">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold tracking-tight text-white glitch"
        data-glitch="Experience"
      >
        Experience
      </motion.h2>

      <div className="mt-16 relative border-l border-cyan-400/30">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative mb-12 pl-10"
          >
            {/* timeline dot */}
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            {/* card */}
            <div className="rounded-2xl bg-[#0b1020]/70 border border-white/10 p-6 backdrop-blur relative overflow-hidden">
              <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-2xl animate-[glow_3s_infinite]" />

              <h3 className="text-xl font-bold text-cyan-300 glitch" data-glitch={exp.role}>
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400">
                {exp.company} · {exp.period}
              </p>
              <p className="text-xs text-gray-500 italic">{exp.location}</p>

              <ul className="mt-3 space-y-2 text-gray-300 text-sm list-disc list-inside">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* glitch effect css */}
      <style>{`
        .glitch {
          position: relative;
          color: #fff;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-glitch);
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.75;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
          color: #22d3ee;
        }
        .glitch::after {
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
          color: #a78bfa;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          20% { clip: rect(0, 9999px, 5px, 0); transform: translate(-2px, -2px); }
          40% { clip: rect(0, 9999px, 8px, 0); transform: translate(2px, 2px); }
          60% { clip: rect(0, 9999px, 2px, 0); transform: translate(-1px, 1px); }
          80% { clip: rect(0, 9999px, 6px, 0); transform: translate(1px, -1px); }
          100% { clip: rect(0, 9999px, 0, 0); transform: none; }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); }
          20% { clip: rect(5px, 9999px, 9999px, 0); transform: translate(2px, 2px); }
          40% { clip: rect(2px, 9999px, 9999px, 0); transform: translate(-2px, -2px); }
          60% { clip: rect(6px, 9999px, 9999px, 0); transform: translate(1px, 1px); }
          80% { clip: rect(3px, 9999px, 9999px, 0); transform: translate(-1px, -1px); }
          100% { clip: rect(0, 9999px, 0, 0); transform: none; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 6px rgba(34,211,238,0.4), 0 0 15px rgba(168,85,247,0.2); }
          50% { box-shadow: 0 0 12px rgba(34,211,238,0.8), 0 0 25px rgba(168,85,247,0.4); }
        }
      `}</style>
    </section>
  );
}
