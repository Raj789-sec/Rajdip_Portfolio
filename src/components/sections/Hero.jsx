import React from "react";
import { Github, Linkedin, Mail, ShieldCheck, Code2, TerminalSquare, ChevronDown, ArrowRight } from "lucide-react";
import { YOU, theme } from "../../data/profile";
import Background from "../layout/Background";
import Pill from "../atoms/Pill";

export default function Hero() {
  console.log("[Hero] static variant mounted");
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pb-20 pt-24">
      <Background />
      <p id="bootmsg" className="text-lime-300 mb-3">&gt; initializing profile…</p>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">{YOU.name}</h1>
          <h2 className="mt-3 bg-gradient-to-r from-lime-300 to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent">
            {YOU.role}
          </h2>
          <p className="mt-5 max-w-xl text-white/75">{YOU.tagline}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={YOU.ctaProjectsHref} className={`${theme.linkBtn} shadow-[0_0_30px_rgba(163,255,94,0.15)]`}>
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={YOU.ctaContactHref} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm text-white/80 hover:bg-white/5">
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <Pill icon={ShieldCheck}>Security</Pill>
            <Pill icon={Code2}>Developer</Pill>
            <Pill icon={TerminalSquare}>Hacker</Pill>
          </div>

          <div className="mt-7 flex gap-4">
            <a href={YOU.social.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github className="h-6 w-6" /></a>
            <a href={YOU.social.linkedin} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin className="h-6 w-6" /></a>
            <a href={YOU.social.email} className="text-white/70 hover:text-white"><Mail className="h-6 w-6" /></a>
          </div>
        </div>

        <div className="relative">
          <div className={`relative mx-auto aspect-square max-w-[440px] overflow-hidden ${theme.frame} p-2`}>
            <div className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-3xl [background:conic-gradient(from_0deg,#67e8f9_0%,#a3ff5e_40%,transparent_60%)]" />
            <div className="h-full w-full rounded-2xl bg-[#0b1220] p-4">
              <img alt="avatar" src={YOU.avatarUrl} className="h-full w-full rounded-2xl object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a href="#about" className="inline-flex items-center gap-2 text-white/70 hover:text-white">
          <ChevronDown className="h-5 w-5 animate-bounce" />
          Scroll
        </a>
      </div>
    </section>
  );
}
