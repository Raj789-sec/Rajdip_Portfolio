// src/components/atoms/GlowCard.jsx
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
      className="group relative block rounded-2xl border border-white/10 bg-[#0f1424]/75 p-5 backdrop-blur-xl transition
                 hover:border-cyan-400/40"
    >
      {/* outer halo */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-xl transition
                      group-hover:opacity-100 bg-[conic-gradient(from_0deg,rgba(124,58,237,.25),rgba(34,211,238,.25),rgba(16,185,129,.25))]" />
      {/* scanlines */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[repeating-linear-gradient(transparent_0_12px,rgba(255,255,255,.03)_12px,rgba(255,255,255,.03)_14px)]" />

      <div className="relative flex items-start gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 text-cyan-300">
          {icon}
        </div>
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div className="text-sm text-white/70">{subtitle}</div>
          {date && <div className="mt-1 text-[11px] text-white/50">{date}</div>}
        </div>
      </div>

      <div className="relative mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.06] px-3 py-1 text-xs text-white/85 transition
                      group-hover:border-cyan-400/40 group-hover:text-cyan-200">
        {ctaText} <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}
