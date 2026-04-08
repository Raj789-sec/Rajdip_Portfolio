import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glow = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (glow.current) {
        glow.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div ref={glow} className="absolute will-change-transform"
           style={{
             width: 400, height: 400,
             background: "radial-gradient(circle, rgba(0,240,255,0.04) 0%, rgba(168,85,247,0.02) 40%, transparent 70%)",
             borderRadius: "50%",
           }} />
    </div>
  );
}
