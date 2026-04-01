import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { YOU } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const mailHref =
    YOU?.social?.email?.startsWith("mailto:") ? YOU.social.email : `mailto:${YOU?.social?.email || ""}`;

  return (
    <footer
      id="contact"
      role="contentinfo"
      className="relative border-t border-white/[0.06]"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 relative">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-4">Get in touch</p>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Let's work together.</span>
          </h3>
          <p className="mt-5 text-lg text-white/50 leading-relaxed">
            Open to penetration testing engagements, security consulting, red team projects, and research collaborations.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={mailHref}
            className="group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-white font-semibold
                       bg-gradient-to-r from-violet-600 to-blue-600
                       hover:from-violet-500 hover:to-blue-500
                       shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30
                       transition-all duration-300 hover:-translate-y-0.5"
          >
            Email Me <Mail className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href={YOU?.social?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-white/70
                       hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-white
                       transition-all duration-300"
          >
            <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
          </a>

          <a
            href={YOU?.social?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-white/70
                       hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-white
                       transition-all duration-300"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            &copy; {year} {YOU?.name}
          </p>
          <p className="text-sm text-white/20">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
