export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#050510]" />

      {/* Cyan orb top-left */}
      <div className="absolute -top-[200px] -left-[200px] h-[700px] w-[700px] rounded-full opacity-[0.07] blur-[150px]"
           style={{ background: "radial-gradient(circle, #00f0ff, transparent 70%)" }} />

      {/* Violet orb bottom-right */}
      <div className="absolute -bottom-[200px] -right-[200px] h-[600px] w-[600px] rounded-full opacity-[0.06] blur-[130px]"
           style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }} />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: "linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)",
             backgroundSize: "80px 80px",
           }} />

      {/* Top vignette */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[#050510] via-transparent to-transparent" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-[#050510] to-transparent" />
    </div>
  );
}
