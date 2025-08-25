import React from "react";
import { theme } from "../../data/profile";

export default function TerminalCard({ title, children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${theme.frame} ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0e1529]/60 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        {title && <span className="ml-3 text-xs text-white/60">{title}</span>}
      </div>
      <div className="relative p-6">{children}</div>
    </div>
  );
}
