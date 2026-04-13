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
          "mx-auto max-w-7xl px-6 transition-all duration-500",
          solid
            ? "bg-white/90 backdrop-blur-xl border-b border-surface-200"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="relative flex items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-xl font-heading font-extrabold tracking-tight text-navy">
              RAJDIP<span className="text-accent-indigo">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-12">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[14px] font-body font-medium text-navy-700 hover:text-accent-indigo rounded-lg transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-auto hidden lg:inline-flex items-center gap-2 rounded-md px-6 py-3 text-[14px] font-heading font-semibold
                       bg-navy text-white hover:bg-navy-800 transition-all duration-300"
          >
            Contact Me
          </a>

          {/* Arrow outside button — Intigriti style */}
          <a href="#contact" className="hidden lg:flex ml-3 h-10 w-10 items-center justify-center rounded-md border border-surface-300 text-navy hover:border-accent-indigo hover:text-accent-indigo transition-all">
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-surface-200 text-navy-600 hover:text-accent-indigo transition-all"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={["lg:hidden overflow-hidden transition-all duration-500 ease-out", open ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"].join(" ")}>
          <div className="border-t border-surface-200 pt-3">
            <div className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                   className="rounded-lg px-4 py-2.5 text-navy-700 hover:text-accent-indigo hover:bg-navy-50 transition-all duration-200 font-body text-sm">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
