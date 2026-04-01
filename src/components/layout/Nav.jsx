import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
        "sticky top-0 z-50 transition-transform duration-300 will-change-transform",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-7xl px-5",
          "transition-[background-color,backdrop-filter,border-color] duration-300",
          solid
            ? "bg-slate-900/85 backdrop-blur-xl border-b border-slate-700/50"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="relative flex items-center py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-blue-500 text-white font-bold text-sm">
              RS
            </div>
            <span className="hidden sm:inline-block text-lg font-bold tracking-tight text-white">
              Rajdip&nbsp;Sarkar
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            {LINKS.slice(0, -1).map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  i === 0 ? "" : "ml-10",
                  "text-[15px] font-medium text-slate-300 hover:text-white transition-colors",
                ].join(" ")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-auto hidden md:inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[15px] font-semibold text-blue-400
                       border border-blue-500/30 hover:border-blue-400 bg-blue-500/0 hover:bg-blue-500/10
                       transition-colors"
          >
            Let's Connect <ArrowRight className="h-4 w-4" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 text-white"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl">
            <div className="flex flex-col p-4 space-y-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
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
