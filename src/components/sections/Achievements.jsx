import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";

export default function Achievements() {
  return (
    <Section id="achievements" title="> achievements">
      <TerminalCard title="highlights">
        <ul className="list-disc space-y-2 pl-6 text-white/80">
          <li>North Bengal CTF — <strong>Winner (2022)</strong></li>
          <li>Kolkata Police CTF — <strong>5th Place (2023)</strong></li>
          <li>Hall of Fame — SONY, BBC, Yahoo, Mastercard, UN, Indian Govt, Philips, LG, Huawei & 50+ more</li>
          <li>Hack The Box — <strong>Pro Hacker</strong></li>
          <li>TryHackMe — <strong>Top 1%</strong> (<a className="underline" href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer">profile</a>)</li>
        </ul>
      </TerminalCard>
    </Section>
  );
}
