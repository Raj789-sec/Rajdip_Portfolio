// src/components/sections/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { YOU, theme } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const mailHref =
    YOU?.social?.email?.startsWith("mailto:") ? YOU.social.email : `mailto:${YOU?.social?.email || ""}`;

  return (
    <footer
      id="contact"
      role="contentinfo"
      className="relative border-t border-white/10 bg-[#0c1426]/70"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Heading + runner (left-aligned like your sections) */}
        <div className="mb-6">
          <h4
            className="text-3xl sm:text-4xl font-extrabold tracking-tight glitch-title"
            data-text="Let’s Connect"
          >
            Let’s Connect
          </h4>
          <div className="mt-3 h-[4px] w-44 heading-track rounded-full overflow-hidden">
            <span className="heading-runner" />
          </div>
        </div>

        <p className="max-w-xl text-white/75">
          Open to security engineering roles, red team projects, and research collaborations.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {/* Primary (gradient blue instead of green) */}
          <a
            href={mailHref}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold 
                       bg-gradient-to-r from-cyan-500 to-purple-500 
                       hover:from-cyan-400 hover:to-purple-400 transition"
            aria-label="Send me an email"
          >
            Email Me <Mail className="h-4 w-4" />
          </a>

          {/* Secondary buttons */}
          <a
            href={YOU?.social?.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white/85 hover:bg-white/5 hover:border-white/25 transition"
          >
            GitHub <Github className="h-4 w-4" />
          </a>

          <a
            href={YOU?.social?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white/85 hover:bg-white/5 hover:border-white/25 transition"
          >
            LinkedIn <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-xs text-white/50">
          © {year} {YOU?.name}. All rights reserved.
        </p>
      </div>

      {/* Local styles to match other sections */}
      <style>{`
        .glitch-title {
          position: relative; display:inline-block;
          background: linear-gradient(90deg,#22d3ee 0%,#7dd3fc 30%,#a78bfa 60%,#f0abfc 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: hue 10s linear infinite;
        }
        .glitch-title::before, .glitch-title::after {
          content: attr(data-text); position: absolute; inset: 0; pointer-events: none;
          mix-blend-mode: screen; opacity: .85; animation: glShift 3s steps(2) infinite;
        }
        .glitch-title::before { transform: translate(1px,-1px); color: #22d3ee; }
        .glitch-title::after  { transform: translate(-1px,1px); color: #a855f7; }

        .heading-track { background: rgba(255,255,255,.12); }
        .heading-runner { display:block; height:100%; width:30%; background:linear-gradient(90deg,#22d3ee,#a855f7); animation: dash 3s linear infinite; }

        @keyframes hue { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes glShift { 0%,100%{clip-path: inset(0 0 0 0)} 50%{clip-path: inset(0 0 0 0)} }
        @keyframes dash { 0%{ transform: translateX(-20%) } 100%{ transform: translateX(120%) } }

        @media (prefers-reduced-motion: reduce) {
          .glitch-title, .glitch-title::before, .glitch-title::after, .heading-runner { animation: none !important; }
        }
      `}</style>
    </footer>
  );
}
