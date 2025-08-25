import React from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";

const CVES = ["CVE-2023-39115", "CVE-2023-40834"];

export default function Research() {
  return (
    <Section id="research" title="> research">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CVES.map((cve) => (
          <TerminalCard key={cve} title={cve}>
            <p className="text-sm text-white/70">Security vulnerability discovered and reported, published on NVD.</p>
            <a
              href={`https://nvd.nist.gov/vuln/detail/${cve}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block rounded-lg border border-white/15 px-3 py-1 text-sm text-white/80 hover:bg-white/5"
            >
              View CVE
            </a>
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
}
