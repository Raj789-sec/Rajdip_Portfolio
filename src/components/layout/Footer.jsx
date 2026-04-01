import { Github, Linkedin, Mail } from "lucide-react";
import { YOU } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const mailHref =
    YOU?.social?.email?.startsWith("mailto:") ? YOU.social.email : `mailto:${YOU?.social?.email || ""}`;

  return (
    <footer
      id="contact"
      role="contentinfo"
      className="relative border-t border-slate-700/50 bg-slate-900/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h4 className="text-3xl sm:text-4xl font-bold text-white">
          Let's Connect
        </h4>
        <div className="mt-3 h-0.5 w-16 rounded-full bg-blue-500" />

        <p className="mt-6 max-w-xl text-slate-400">
          Open to penetration testing engagements, security consulting, red team projects, and research collaborations.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={mailHref}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-white font-semibold
                       bg-blue-500 hover:bg-blue-600 transition-colors"
            aria-label="Send me an email"
          >
            Email Me <Mail className="h-4 w-4" />
          </a>

          <a
            href={YOU?.social?.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-colors"
          >
            GitHub <Github className="h-4 w-4" />
          </a>

          <a
            href={YOU?.social?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-colors"
          >
            LinkedIn <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          &copy; {year} {YOU?.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
