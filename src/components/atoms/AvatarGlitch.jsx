// src/components/atoms/AvatarNeo.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Code2, TerminalSquare } from "lucide-react";

export default function AvatarNeo({
  src = "/assets/avatar.png",
  alt = "avatar",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* === Rotating Outer Ring (thicker + glow) === */}
      <div className="absolute -inset-16 -z-20 grid place-items-center">
        <svg
          className="h-[560px] w-[560px] animate-[spin_18s_linear_infinite] drop-shadow-[0_0_24px_rgba(99,102,241,.45)]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(34,211,238,.95)" />
              <stop offset="100%" stopColor="rgba(168,85,247,.95)" />
            </linearGradient>
          </defs>

          {/* soft halo underlay */}
          <circle cx="50" cy="50" r="45" stroke="url(#ring)" strokeWidth="3.2" opacity="0.2" />
          {/* main dashed ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#ring)"
            strokeWidth="2.2"
            strokeDasharray="8 10"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* === Avatar Card (taller) === */}
      <div className="relative w-[360px] sm:w-[400px] md:w-[460px]">
        {/* ambient glow outside frame */}
        <div
          className="pointer-events-none absolute -inset-8 rounded-[34px] blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 8% 10%, rgba(34,211,238,.28), transparent 55%), radial-gradient(circle at 92% 88%, rgba(168,85,247,.28), transparent 55%)",
          }}
        />

        {/* image frame */}
        <div className="relative overflow-hidden rounded-[30px] bg-[#0b1020]/70 ring-1 ring-white/10 backdrop-blur aspect-[3/4]">
          {/* photo */}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover select-none"
            draggable="false"
          />

          {/* === Bigger/Slower Scan Beam === */}
          <span
            className="pointer-events-none absolute left-[-25%] right-[-25%] top-[48%] h-[16px]
                       bg-[linear-gradient(90deg,transparent,rgba(160,255,210,.95),transparent)]
                       opacity-90 blur-[2px]
                       shadow-[0_0_30px_rgba(160,255,210,.9),0_0_60px_rgba(160,255,210,.5)]
                       animate-[scan_3.8s_linear_infinite]"
          />

          {/* === Glitch flicker slices (very subtle) === */}
          <span className="g g1" />
          <span className="g g2" />
          <span className="g g3" />

          {/* === Neon Corners OUTSIDE the image === */}
          <Corner className="-left-3 -top-3" color="rgba(34,211,238,.95)" />
          <Corner className="-right-3 -top-3 rotate-90" color="rgba(168,85,247,.95)" />
          <Corner className="-left-3 -bottom-3 -rotate-90" color="rgba(168,85,247,.95)" />
          <Corner className="-right-3 -bottom-3 rotate-180" color="rgba(34,211,238,.95)" />
        </div>

        {/* === Pills with float + glow pulse === */}
        <Pill
          className="absolute -left-12 top-6"
          icon={<ShieldCheck className="h-4 w-4 text-emerald-400" />}
          glow="emerald"
          floatUp
        >
          Security
        </Pill>

        <Pill
          className="absolute -right-12 top-1/2 -translate-y-1/2"
          icon={<Code2 className="h-4 w-4 text-cyan-400" />}
          glow="cyan"
          floatDown
        >
          Developer
        </Pill>

        <Pill
          className="absolute -bottom-9 left-1/2 -translate-x-1/2"
          icon={<TerminalSquare className="h-4 w-4 text-purple-400" />}
          glow="purple"
          floatUp
        >
          _ Hacker
        </Pill>
      </div>

      {/* local CSS */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        /* slower, wider scan sweep */
        @keyframes scan {
          0%   { transform: translateX(-45%); }
          100% { transform: translateX(145%); }
        }

        /* corner ticks */
        .tick::before,.tick::after{
          content:"";position:absolute;background:var(--tick);
          box-shadow:0 0 12px var(--tick), 0 0 24px color-mix(in oklab, var(--tick) 60%, transparent);
        }
        .tick::before{width:28px;height:3px;left:0;top:0}
        .tick::after{width:3px;height:28px;left:0;top:0}

        /* glitch slices */
        .g{position:absolute;inset:0;background:inherit;mix-blend-mode:screen;pointer-events:none;opacity:.35}
        .g1{animation:g1 2.6s infinite steps(1,end)}
        .g2{animation:g2 3.4s infinite steps(1,end)}
        .g3{animation:g3 4.1s infinite steps(1,end)}
        @keyframes g1{
          0%{clip-path:inset(0 0 100% 0)}
          12%{clip-path:inset(12% 0 68% 0); transform:translate(-1px,-1px)}
          24%{clip-path:inset(44% 0 38% 0); transform:translate(1px,1px)}
          36%{clip-path:inset(76% 0 6% 0)}
          48%,100%{clip-path:inset(0 0 100% 0); transform:none}
        }
        @keyframes g2{
          0%{clip-path:inset(0 0 100% 0)}
          18%{clip-path:inset(26% 0 58% 0); transform:translate(1px,-1px)}
          30%{clip-path:inset(58% 0 26% 0); transform:translate(-1px,1px)}
          42%{clip-path:inset(84% 0 0 0)}
          54%,100%{clip-path:inset(0 0 100% 0)}
        }
        @keyframes g3{
          0%{clip-path:inset(0 0 100% 0)}
          22%{clip-path:inset(8% 0 80% 0); transform:translate(-1px,1px)}
          34%{clip-path:inset(62% 0 30% 0); transform:translate(1px,-1px)}
          46%{clip-path:inset(88% 0 0 0)}
          58%,100%{clip-path:inset(0 0 100% 0)}
        }
      `}</style>
    </motion.div>
  );
}

/* Neon 90° corner */
function Corner({ className = "", color = "rgba(34,211,238,.95)" }) {
  return <span className={`tick absolute ${className}`} style={{ ["--tick"]: color }} />;
}

/* Glowing glass pill with float & pulse */
function Pill({ children, className = "", icon, glow = "cyan", floatUp, floatDown }) {
  const floatAnim = floatUp
    ? { y: [0, -3, 0] }
    : floatDown
    ? { y: [0, 3, 0] }
    : { y: 0 };

  const glowShadow =
    glow === "emerald"
      ? "0 0 18px rgba(16,185,129,.45)"
      : glow === "purple"
      ? "0 0 18px rgba(168,85,247,.45)"
      : "0 0 18px rgba(34,211,238,.45)";

  return (
    <motion.div
      className={`flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1020]/90 px-4 py-1.5 text-[15px] text-white/90 backdrop-blur ${className}`}
      animate={floatAnim}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{ boxShadow: `0 10px 24px rgba(0,0,0,.25), ${glowShadow}` }}
    >
      {icon}
      {children}
      {/* pulse halo */}
      <span className="pointer-events-none absolute inset-0 rounded-full animate-[pillPulse_2.8s_ease-in-out_infinite]"></span>
      <style>{`
        @keyframes pillPulse {
          0%,100% { box-shadow: inset 0 0 0 0 rgba(255,255,255,0); }
          50%     { box-shadow: inset 0 0 24px 2px rgba(255,255,255,0.08); }
        }
      `}</style>
    </motion.div>
  );
}
