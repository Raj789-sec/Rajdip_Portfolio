// src/components/layout/Nav.jsx
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Achievements", href: "#achievements" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },            // shows “Experience & Education” section
  { name: "Projects", href: "#projects" },                // shows “Projects & Research” section
  { name: "Blogs", href: "#Blogs" },                      // capitalized id in your page
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 10);

      // hide on scroll down, show on scroll up
      if (y > 80 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-transform duration-300 will-change-transform",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-7xl px-5",
          "transition-[background-color,backdrop-filter,border-color] duration-300",
          solid ? "bg-[#0a0f1d]/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        {/* Row */}
        <div className="relative flex items-center py-3">
          {/* LEFT — Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative rounded-2xl p-[2px]">
              <div className="absolute inset-0 rounded-2xl blur-[6px] bg-[conic-gradient(from_0deg,#10b981_0%,#22d3ee_35%,#a855f7_70%,#10b981_100%)] opacity-80" />
              <div className="relative h-9 w-9 grid place-items-center rounded-xl bg-[#0e1426] text-white font-extrabold">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#22d3ee,#a855f7)]">RS</span>
              </div>
            </div>
            {/* Your name (optional). Remove the span to hide text entirely */}
            <span className="hidden sm:inline-block text-lg font-extrabold tracking-tight text-white">
              Rajdip&nbsp;Sarkar
            </span>
          </a>

          {/* CENTER — Nav links */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            {LINKS.slice(0, -1).map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  i === 0 ? "" : "ml-10",
                  "text-[15px] font-semibold text-white/85 hover:text-white transition",
                ].join(" ")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT — CTA */}
          <a
            href="#contact"
            className="ml-auto hidden md:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[15px] font-semibold text-white
                       border border-emerald-400/70 hover:border-emerald-300 bg-emerald-400/0 hover:bg-emerald-400/10
                       shadow-[0_0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_30px_-6px_rgba(16,185,129,.45)]
                       transition"
          >
            Let’s Connect <ArrowRight className="h-4 w-4" />
          </a>

          {/* MOBILE toggle (far right on small screens) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE Menu */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="border-t border-white/10 bg-[#0a0f1d]/95 backdrop-blur-xl">
            <div className="flex flex-col p-4 space-y-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
