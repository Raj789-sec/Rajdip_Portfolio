import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";
import { theme } from "../../data/profile";

export default function About() {
  return (
    <Section id="about" title="> about">
      <TerminalCard title="whoami">
        <p className="text-white/80">
          Security researcher with 3+ years across web, API, mobile, thick client and AD. I mix adversary simulation with
          developer-centric fixes, scripting, and automation. 50+ Hall of Fame recognitions, published CVEs, and CTF podiums.
          Interests: <span className={theme.neon}>cloud security</span>, <span className={theme.neon}>AI for security</span>, and
          <span className={theme.neon}> reverse engineering</span>. TryHackMe Top 1%, HTB <span className={theme.neon}>Pro Hacker</span>.
        </p>
      </TerminalCard>
    </Section>
  );
}
