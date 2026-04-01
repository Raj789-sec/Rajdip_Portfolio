import { theme } from "../../data/profile";

export default function TerminalCard({ title, children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${theme.frame} ${className}`}>
      {title && (
        <div className="border-b border-slate-700/50 px-4 py-2">
          <span className="text-xs text-slate-500">{title}</span>
        </div>
      )}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
