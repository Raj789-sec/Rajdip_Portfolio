import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { YOU } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const mailHref = YOU?.social?.email?.startsWith("mailto:") ? YOU.social.email : `mailto:${YOU?.social?.email || ""}`;

  return (
    <footer id="contact" role="contentinfo" className="relative bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* CTA */}
        <div className="max-w-2xl">
          <p className="text-xs font-heading font-bold tracking-widest uppercase text-accent-indigo/70 mb-4">Contact</p>
          <h3 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
            Let's work together.
          </h3>
          <p className="mt-5 text-base text-white/50 leading-relaxed font-body">
            Open to penetration testing engagements, security consulting, red team projects, and research collaborations.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={mailHref}
             className="inline-flex items-center gap-3 rounded-md px-7 py-3.5 font-heading font-semibold text-sm bg-white text-navy hover:bg-surface-100 transition-all duration-300">
            Email Me <Mail className="h-4 w-4" />
          </a>
          <a href={YOU?.social?.github} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2.5 rounded-md border border-white/15 px-6 py-3.5 text-sm font-body text-white/60 hover:text-white hover:border-white/30 transition-all duration-300">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={YOU?.social?.linkedin} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2.5 rounded-md border border-white/15 px-6 py-3.5 text-sm font-body text-white/60 hover:text-white hover:border-white/30 transition-all duration-300">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-body">&copy; {year} {YOU?.name}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-white/20 font-body">
            Designed with precision <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}
