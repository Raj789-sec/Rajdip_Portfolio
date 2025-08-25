import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="> experience">
      <div className="space-y-6">
        {experiences.map((exp) => (
          <TerminalCard key={`${exp.company}-${exp.title}`} title={exp.company}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="h-8 w-8 rounded bg-white p-1" />}
                <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
              </div>
              <p className="text-white/70">{exp.dates}</p>
              <p className="text-white/60">{exp.location}</p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-white/80">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              {exp.skills && <p className="mt-3 text-sm text-lime-300">{exp.skills}</p>}
              {exp.award && (
                <div className="mt-2">
                  <span className="text-sm text-white/70">Award:</span>{" "}
                  <button onClick={() => alert("Replace with actual file link when available")} className="ml-1 rounded-md border border-white/15 px-2 py-1 text-xs text-white/80 hover:bg-white/5">
                    {exp.award}
                  </button>
                </div>
              )}
            </div>
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
}
