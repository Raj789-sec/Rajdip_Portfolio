import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";
import { theme } from "../../data/profile";

export default function Projects() {
  return (
    <Section id="projects" title="> projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TerminalCard title="js-secret-scanner">
          <h4 className={`${theme.neon} text-lg font-semibold`}>JS Secret Scanner</h4>
          <p className="mt-1 text-sm text-white/70">
            Scans JavaScript for AWS URLs, secrets, API endpoints, and high-entropy tokens to catch leakage early.
          </p>
          <a
            href="https://github.com/Raj789-sec/js-secret-scanner"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-lg border border-white/15 px-3 py-1 text-sm text-white/80 hover:bg-white/5"
          >
            View Tool
          </a>
        </TerminalCard>
      </div>
    </Section>
  );
}
