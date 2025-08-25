import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { YOU, theme } from "../../data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0c1426]/70">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h4 className="text-xl font-semibold text-white">Let’s Connect</h4>
        <p className="mt-2 max-w-xl text-white/75">
          Open to security engineering roles, red team projects, and research collaborations.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={YOU.social.email} className={theme.linkBtn}>
            Email Me <Mail className="h-4 w-4" />
          </a>
          <a
            href={YOU.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white/80 hover:bg-white/5"
          >
            GitHub <Github className="h-4 w-4" />
          </a>
          <a
            href={YOU.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white/80 hover:bg-white/5"
          >
            LinkedIn <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} {YOU.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
