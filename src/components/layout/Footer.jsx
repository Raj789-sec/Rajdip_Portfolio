import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { YOU } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const mailHref = YOU?.social?.email?.startsWith("mailto:") ? YOU.social.email : `mailto:${YOU?.social?.email || ""}`;

  return (
    <footer id="contact" role="contentinfo" className="relative border-t border-cyan-500/[0.06]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 relative">
        <div className="max-w-2xl">
          <p className="text-xs font-mono font-medium text-neon-cyan/60 tracking-widest uppercase mb-4">// get_in_touch</p>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Let's work together.</span>
          </h3>
          <p className="mt-5 text-base text-white/30 leading-relaxed">
            Open to penetration testing engagements, security consulting, red team projects, and research collaborations.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={mailHref}
             className="group inline-flex items-center gap-3 rounded-lg px-6 py-3.5 font-mono font-semibold text-sm
                        bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan
                        hover:bg-neon-cyan/15 hover:border-neon-cyan/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)]
                        transition-all duration-300">
            Email Me <Mail className="h-4 w-4" />
          </a>
          <a href={YOU?.social?.github} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-5 py-3.5 text-sm text-white/50 hover:text-neon-cyan hover:border-cyan-500/15 transition-all duration-300">
            <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3 opacity-30" />
          </a>
          <a href={YOU?.social?.linkedin} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-5 py-3.5 text-sm text-white/50 hover:text-neon-cyan hover:border-cyan-500/15 transition-all duration-300">
            <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3 opacity-30" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20 font-mono">&copy; {year} {YOU?.name}</p>
          <p className="text-xs text-white/10 font-mono">// built_different</p>
        </div>
      </div>
    </footer>
  );
}
