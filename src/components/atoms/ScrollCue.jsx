// src/components/atoms/ScrollCue.jsx
import { motion } from "framer-motion";

export default function ScrollCue({ href = "#about", label = "scroll" }) {
  return (
    <div className="relative mx-auto flex h-28 w-full max-w-6xl items-center justify-center">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,.12),transparent_60%)]" />

      <a href={href} className="group relative select-none outline-none">
        {/* mouse shell */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-14 w-9 rounded-full border border-cyan-300/50 bg-white/[.03] backdrop-blur-sm"
        >
          {/* glow ring */}
          <div className="pointer-events-none absolute -inset-1 rounded-full blur-md bg-[conic-gradient(from_0deg,rgba(34,211,238,.35),rgba(168,85,247,.35),rgba(34,211,238,.35))] opacity-60" />
          {/* wheel */}
          <span className="absolute left-1/2 top-3 h-2 w-1 -translate-x-1/2 rounded bg-cyan-300 animate-[wheel_1.8s_ease-in-out_infinite]" />
        </motion.div>

        {/* chevrons */}
        <div className="mt-3 flex flex-col items-center gap-1">
          <Chevron className="animate-[chev_1.6s_ease-in-out_infinite]" />
          <Chevron className="animate-[chev_1.6s_ease-in-out_infinite] [animation-delay:.25s]" />
        </div>

        {/* glitchy label */}
        <div
          className="mt-2 text-center text-xs tracking-[0.3em] text-cyan-200/80 relative"
          aria-hidden
        >
          <span className="glitchText" data-txt={label}>
            {label.toUpperCase()}
          </span>
        </div>
      </a>

      {/* local styles */}
      <style>{`
        @keyframes wheel {
          0%{ transform:translate(-50%,0); opacity:.9 }
          60%{ transform:translate(-50%,8px); opacity:.3 }
          100%{ transform:translate(-50%,0); opacity:.9 }
        }
        @keyframes chev {
          0%   { transform: translateY(0);   opacity:.35 }
          50%  { transform: translateY(6px); opacity:1 }
          100% { transform: translateY(0);   opacity:.35 }
        }
        .glitchText{ position:relative; display:inline-block; }
        .glitchText::before, .glitchText::after{
          content:attr(data-txt);
          position:absolute; left:0; top:0; width:100%; 
          mix-blend-mode:screen; opacity:.9;
        }
        .glitchText::before{ color:#22d3ee; transform:translate(1px,0); clip-path:inset(0 0 60% 0); animation:gt1 2.2s linear infinite }
        .glitchText::after { color:#a78bfa; transform:translate(-1px,0); clip-path:inset(40% 0 0 0); animation:gt2 1.9s linear infinite }
        @keyframes gt1{ 0%{clip-path:inset(0 0 70% 0)} 50%{clip-path:inset(20% 0 40% 0)} 100%{clip-path:inset(0 0 0 0)} }
        @keyframes gt2{ 0%{clip-path:inset(60% 0 0 0)} 50%{clip-path:inset(30% 0 20% 0)} 100%{clip-path:inset(0 0 0 0)} }
      `}</style>
    </div>
  );
}

function Chevron({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
    >
      <path
        d="M1 1L9 9L17 1"
        stroke="url(#g)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="18" y2="10">
          <stop offset="0%" stopColor="rgba(34,211,238,.9)" />
          <stop offset="100%" stopColor="rgba(168,85,247,.9)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
