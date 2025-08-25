import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";
import { education } from "../../data/education";

export default function Education() {
  return (
    <Section id="education" title="> education">
      <div className="space-y-6">
        {education.map((edu) => (
          <TerminalCard key={edu.school} title={edu.school}>
            <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
            <p className="text-white/70">{edu.dates}</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-white/80">
              {edu.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
}
