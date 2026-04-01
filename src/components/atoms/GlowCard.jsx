import { ArrowUpRight } from "lucide-react";

export default function GlowCard({
  icon,
  title,
  subtitle,
  date,
  ctaText = "Verify",
  href = "#",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block rounded-xl border border-slate-700 bg-slate-800/60 p-5 backdrop-blur-sm transition-colors
                 hover:border-blue-500/40"
    >
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 bg-blue-500/10 text-blue-400">
          {icon}
        </div>
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div className="text-sm text-slate-400">{subtitle}</div>
          {date && <div className="mt-1 text-[11px] text-slate-500">{date}</div>}
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-700/30 px-3 py-1 text-xs text-slate-300 transition-colors
                      group-hover:border-blue-500/40 group-hover:text-blue-400">
        {ctaText} <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}
