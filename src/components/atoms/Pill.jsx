import React from "react";

export default function Pill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-sm text-lime-300 shadow-[0_0_18px_rgba(163,255,94,0.25)] backdrop-blur">
      <Icon className="h-4 w-4" />
      {children}
    </span>
  );
}
