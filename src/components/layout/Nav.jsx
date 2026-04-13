import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Achievements", href: "#achievements" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#Blogs" },
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
        "sticky top-0 z-50 transition-all duration-500 will-change-transform",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-7xl px-5 transition-all duration-500",
          solid
            ? "bg-[#06060f]/80 backdrop-blur-2xl border-b border-accent-indigo/[0.06]"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="relative flex items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-accent-indigo/20 to-accent-violet/10 border border-accent-indigo/20 text-accent-indigo font-heading font-bold text-sm group-hover:border-accent-indigo/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300">
              R
            </div>
            <span className="hidden sm:inline-block text-sm font-heading font-semibold tracking-tight text-white/80">
              Rajdip<span className="text-accent-indigo">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5">
            {LINKS.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium font-body text-white/35 hover:text-accent-indigo rounded-lg hover:bg-accent-indigo/[0.04] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-auto hidden lg:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-heading font-semibold
                       bg-gradient-to-r from-accent-indigo to-accent-violet text-white
                       hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:scale-[1.02]
                       transition-all duration-300"
          >
            Get in Touch <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 hover:text-accent-indigo transition-all"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={["lg:hidden overflow-hidden transition-all duration-500 ease-out", open ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"].join(" ")}>
          <div className="border-t border-white/[0.06] pt-3">
            <div className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                   className="rounded-lg px-4 py-2.5 text-white/40 hover:text-accent-indigo hover:bg-accent-indigo/[0.04] transition-all duration-300 font-body text-sm">
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
