import React, { useEffect, useRef, useState } from "react";

export default function HOFMarquee({ items, speed = 50, height = 64, gap = 56 }) {
  const setRef = useRef(null);
  const trackRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!setRef.current || !trackRef.current) return;
      // real width of Set A (includes its internal column gaps)
      const setW = setRef.current.scrollWidth;
      trackRef.current.style.setProperty("--set-w", `${setW}px`);
      trackRef.current.style.setProperty("--gap", `${gap}px`);
      trackRef.current.style.setProperty("--loop-duration", `${speed}s`);
      setReady(true);
    };

    // wait for images to load once, then measure
    const imgs = Array.from(setRef.current?.querySelectorAll("img") || []);
    let left = imgs.length;
    if (left === 0) measure();
    else {
      const done = () => { if (--left === 0) measure(); };
      imgs.forEach(img => {
        if (img.complete) done();
        else {
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        }
      });
      if (left === 0) measure();
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, speed, gap]);

  return (
    <div className="relative w-full py-2">
      {/* edge fade */}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          ref={trackRef}
          className={`flex flex-nowrap items-center will-change-transform ${ready ? "hof-animate" : ""}`}
          style={{ transform: "translateZ(0)" }}
          aria-label="Hall of Fame logos"
        >
          {/* Set A */}
          <ul ref={setRef} className="flex flex-nowrap items-center shrink-0" style={{ columnGap: `${gap}px`, height }}>
            {items.map((it, i) => (
              <li key={`a-${i}`} className="shrink-0 flex items-center justify-center">
                <img
                  src={it.logo}
                  alt={it.name}
                  title={it.name}
                  style={{ maxHeight: height }}
                  className="w-auto object-contain opacity-90 hover:opacity-100 transition-transform duration-400 ease-out hover:scale-[1.12] hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.65)]"
                />
              </li>
            ))}
          </ul>

          {/* spacer between Set A and Set B so the loop point has a gap */}
          <div className="shrink-0" style={{ width: gap }} aria-hidden />

          {/* Set B (duplicate) */}
          <ul className="flex flex-nowrap items-center shrink-0" style={{ columnGap: `${gap}px`, height }} aria-hidden>
            {items.map((it, i) => (
              <li key={`b-${i}`} className="shrink-0 flex items-center justify-center">
                <img
                  src={it.logo}
                  alt={it.name}
                  style={{ maxHeight: height }}
                  className="w-auto object-contain opacity-90 hover:opacity-100 transition-transform duration-400 ease-out hover:scale-[1.12] hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.65)]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .hof-animate {
          animation: hof-marquee var(--loop-duration, 50s) linear infinite;
        }
        @keyframes hof-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * (var(--set-w, 1000px) + var(--gap, 56px)))); }
        }
      `}</style>
    </div>
  );
}
