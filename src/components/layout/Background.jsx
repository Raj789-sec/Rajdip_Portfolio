export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]" />

      {/* Indigo orb top-left — animated float */}
      <div className="absolute -top-[250px] -left-[250px] h-[800px] w-[800px] rounded-full opacity-[0.07] blur-[160px] animate-float-slow"
           style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />

      {/* Violet orb bottom-right — animated float offset */}
      <div className="absolute -bottom-[200px] -right-[200px] h-[700px] w-[700px] rounded-full opacity-[0.06] blur-[140px] animate-float"
           style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }} />

      {/* Cyan orb center — subtle pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.03] blur-[200px] animate-glow-pulse"
           style={{ background: "radial-gradient(circle, #22d3ee, transparent 60%)" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{
             backgroundImage: "radial-gradient(rgba(99,102,241,0.5) 1px, transparent 1px)",
             backgroundSize: "40px 40px",
           }} />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
           }} />

      {/* Top vignette */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[#06060f] via-transparent to-transparent" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-[#06060f] to-transparent" />
    </div>
  );
}
