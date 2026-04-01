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
      className="group relative block rounded-2xl glass border-gradient p-5 transition-all duration-300
                 hover:bg-white/[0.06] hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-400 ring-1 ring-white/[0.06]">
          {icon}
        </div>
        <div>
          <div className="text-base font-semibold text-white/90">{title}</div>
          <div className="text-sm text-white/40">{subtitle}</div>
          {date && <div className="mt-1 text-[11px] text-white/25">{date}</div>}
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-xs text-white/50 transition-all duration-300
                      group-hover:text-violet-300 group-hover:border-violet-500/20">
        {ctaText} <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}
