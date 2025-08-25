import React from "react";
import { ArrowRight } from "lucide-react";
import { YOU, theme } from "../../data/profile";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#0c1426]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-lime-400 to-cyan-400 text-black font-bold">
            RS
          </div>
          <span className="text-lg font-semibold text-white/90">{YOU.name}</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Experience", "#experience"],
            ["Education", "#education"],
            ["Projects", "#projects"],
            ["Research", "#research"],
            ["Blogs", "#blogs"],
            ["Certifications", "#certifications"],
            ["Achievements", "#achievements"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-white/70 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className={theme.linkBtn}>
          Let’s Connect <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
