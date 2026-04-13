import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { YOU } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const mailHref = YOU?.social?.email?.startsWith("mailto:") ? YOU.social.email : `mailto:${YOU?.social?.email || ""}`;

  return (
    <footer id="contact" role="contentinfo" className="relative">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-indigo/20 to-transparent" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-accent-indigo/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 relative">
        {/* CTA Section */}
        <div className="glass-card p-10 md:p-14 text-center mb-16">
          <p className="section-label justify-center">Contact</p>
          <h3 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mt-2">
            <span className="gradient-text">Let's work together.</span>
          </h3>
          <p className="mt-5 text-base text-white/30 leading-relaxed max-w-lg mx-auto font-body">
            Open to penetration testing engagements, security consulting, red team projects, and research collaborations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={mailHref}
               className="group inline-flex items-center gap-3 rounded-xl px-7 py-3.5 font-heading font-semibold text-sm
                          bg-gradient-to-r from-accent-indigo to-accent-violet text-white
                          hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:scale-[1.02]
                          transition-all duration-300">
              Email Me <Mail className="h-4 w-4" />
            </a>
            <a href={YOU?.social?.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-3.5 text-sm font-body text-white/50 hover:text-accent-indigo hover:border-accent-indigo/15 transition-all duration-300">
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3 opacity-30" />
            </a>
            <a href={YOU?.social?.linkedin} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-3.5 text-sm font-body text-white/50 hover:text-accent-indigo hover:border-accent-indigo/15 transition-all duration-300">
              <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3 opacity-30" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20 font-body">&copy; {year} {YOU?.name}. All rights reserved.</p>
          <p className="text-xs text-white/10 font-body">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
