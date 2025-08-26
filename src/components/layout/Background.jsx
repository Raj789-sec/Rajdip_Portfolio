// src/components/layout/Background.jsx
export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 700px at 15% 10%, #0a0f1c 0%, #070b13 40%, #05060a 70%, #000 100%)",
        }}
      />

      {/* animated grid */}
      <svg
        className="absolute inset-0 opacity-[0.08] animate-[gridMove_30s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="g" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0V36" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>

      {/* soft glows */}
      <div className="absolute -top-24 left-10 h-72 w-72 rounded-full blur-3xl"
           style={{background: "radial-gradient(circle, rgba(124,58,237,.25), transparent 60%)"}} />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full blur-3xl"
           style={{background: "radial-gradient(circle, rgba(34,211,238,.22), transparent 60%)"}} />

      {/* twinkling particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 6;
          const dur = 4 + Math.random() * 6;
          const color = Math.random() > 0.5 ? "rgba(124,58,237,.9)" : "rgba(34,211,238,.9)";
          return (
            <span
              key={i}
              style={{
                position: "absolute",
                left: `${left}vw`,
                top: `${top}vh`,
                width: size,
                height: size,
                background: color,
                borderRadius: "9999px",
                boxShadow: `0 0 10px ${color}`,
                animation: `twinkle ${dur}s ease-in-out ${delay}s infinite alternate`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate3d(0,0,0) scale(1); }
          100% { transform: translate3d(-36px,-36px,0) scale(1.02); }
        }
        @keyframes twinkle {
          0% { transform: scale(.8); opacity:.5 }
          100%{ transform: scale(1.6); opacity:1 }
        }
      `}</style>
    </div>
  );
}
