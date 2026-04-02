import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glow = useRef(null);

  useEffect(() => {
    let x = -500, y = -500;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (glow.current) {
        glow.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={glow}
        className="absolute will-change-transform"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(59,130,246,0.02) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
