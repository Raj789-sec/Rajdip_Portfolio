import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <Section id="certifications" title="> certifications">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <TerminalCard key={cert.name} title={cert.name}>
            {cert.url ? (
              <a href={cert.url} target="_blank" rel="noreferrer" className="text-lime-300 hover:underline">
                Verify Credential
              </a>
            ) : cert.id ? (
              <p className="text-white/80">Credential ID: {cert.id}</p>
            ) : (
              <p className="text-white/80">Issued & Verified</p>
            )}
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
}
