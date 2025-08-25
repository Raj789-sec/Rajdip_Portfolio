import React from "react";

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_30%_20%,#10335a_0%,transparent_60%),radial-gradient(40%_60%_at_90%_10%,#0c3b2c_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(163,255,94,0.06)_24px),linear-gradient(90deg,transparent_23px,rgba(163,255,94,0.06)_24px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 opacity-20 mix-blend-overlay [background:repeating-linear-gradient(to_bottom,transparent_0,transparent_2px,rgba(255,255,255,0.06)_3px,rgba(255,255,255,0.06)_3.5px)]" />
    </div>
  );
}
