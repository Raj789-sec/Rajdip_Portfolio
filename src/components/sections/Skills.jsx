import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";
import { theme } from "../../data/profile";

const SKILLS = [
  ["Offensive Security", "Pentesting (Web, API, Mobile, Thick Client), Red Teaming, AD Attacks"],
  ["Security Research", "Source Code Review, Vulnerability Analysis"],
  ["Tools & Tech", "Burp Suite, Metasploit, Nmap, Wireshark, Sonarqube, BloodHound, Cobalt Strike"],
  ["Programming", "Python, Bash"],
  ["Frameworks", "OWASP Top 10, MITRE ATT&CK"],
];

export default function Skills() {
  return (
    <Section id="skills" title="> skills">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(([h, p]) => (
          <TerminalCard key={h} title={`skill: ${h}`}>
            <h4 className={`${theme.neon} mb-1 text-lg font-semibold`}>{h}</h4>
            <p className="text-white/70">{p}</p>
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
}
