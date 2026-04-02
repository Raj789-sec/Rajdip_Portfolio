import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glow = useRef(null);
  const trail = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    let raf;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (glow.current) {
        glow.current.style.transform = `translate(${target.current.x}px, ${target.current.y}px) translate(-50%, -50%)`;
      }
      if (trail.current) {
        trail.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hide on touch devices
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Main glow — follows cursor instantly */}
      <div
        ref={glow}
        className="absolute will-change-transform"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(59,130,246,0.03) 30%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Smaller bright dot — lags behind */}
      <div
        ref={trail}
        className="absolute will-change-transform"
        style={{
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
