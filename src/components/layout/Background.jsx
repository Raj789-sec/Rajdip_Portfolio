export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Top-left violet orb */}
      <div
        className="absolute -top-[300px] -left-[200px] h-[800px] w-[800px] rounded-full opacity-[0.15] blur-[120px] animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
      />

      {/* Bottom-right blue orb */}
      <div
        className="absolute -bottom-[200px] -right-[200px] h-[700px] w-[700px] rounded-full opacity-[0.1] blur-[120px] animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)", animationDelay: "2s" }}
      />

      {/* Center subtle warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full opacity-[0.04] blur-[100px]"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top gradient fade for depth */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-violet-950/20 to-transparent" />
    </div>
  );
}
