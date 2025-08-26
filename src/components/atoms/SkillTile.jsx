import { motion } from "framer-motion";

/**
 * SkillTile
 * - Black glass tile
 * - Corner neon ticks
 * - Subtle scanlines + hover lift
 */
export default function SkillTile({ title, icon, items = [], className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f1a]/80 backdrop-blur-xl p-6 ${className}`}
    >
      {/* outer conic glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-40 blur-md bg-[conic-gradient(from_0deg,rgba(34,211,238,.25),rgba(168,85,247,.25),rgba(34,211,238,.25))]" />

      {/* scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(transparent_0_11px,rgba(255,255,255,.03)_11px,rgba(255,255,255,.03)_13px)]" />

      {/* content */}
      <div className="relative flex items-start gap-4">
        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl ring-1 ring-white/10 bg-gradient-to-tr from-cyan-400/15 to-purple-400/15 text-cyan-300">
          {icon}
        </div>
        <div className="min-w-0">
          <h4
            className="text-xl font-extrabold tracking-tight text-white title-glitch"
            data-g={title}
          >
            {title}
          </h4>
          <ul className="mt-2 space-y-1.5 text-[15px] leading-6 text-white/75">
            {items.map((t, i) => (
              <li key={i} className="relative pl-4">
                <i className="absolute left-0 top-2 block h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_10px_rgba(34,211,238,.7)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* corner ticks */}
      <Corner className="left-4 top-4" />
      <Corner className="right-4 top-4 rotate-90" />
      <Corner className="left-4 bottom-4 -rotate-90" />
      <Corner className="right-4 bottom-4 rotate-180" />

      {/* local styles */}
      <style>{`
        .title-glitch{position:relative}
        .title-glitch::before,.title-glitch::after{
          content:attr(data-g);position:absolute;inset:0;mix-blend-mode:screen;opacity:.9
        }
        .title-glitch::before{color:#22d3ee;transform:translate(0.6px,0);clip-path:inset(0 0 68% 0);animation:gl1 2.4s infinite linear}
        .title-glitch::after {color:#a78bfa;transform:translate(-0.6px,0);clip-path:inset(36% 0 0 0);animation:gl2 2s infinite linear}
        @keyframes gl1{0%{clip-path:inset(0 0 70% 0)}50%{clip-path:inset(18% 0 42% 0)}100%{clip-path:inset(0 0 0 0)}}
        @keyframes gl2{0%{clip-path:inset(60% 0 0 0)}50%{clip-path:inset(28% 0 22% 0)}100%{clip-path:inset(0 0 0 0)}}
      `}</style>
    </motion.div>
  );
}

function Corner({ className = "" }) {
  return (
    <span
      className={`pointer-events-none absolute h-6 w-6 ${className}`}
      style={{
        background:
          "conic-gradient(from 0deg, rgba(34,211,238,.8), rgba(168,85,247,.8), rgba(34,211,238,.8))",
        WebkitMask:
          "linear-gradient(#000 0 0) top/100% 2px no-repeat, linear-gradient(#000 0 0) left/2px 100% no-repeat",
        mask:
          "linear-gradient(#000 0 0) top/100% 2px no-repeat, linear-gradient(#000 0 0) left/2px 100% no-repeat",
      }}
    />
  );
}
