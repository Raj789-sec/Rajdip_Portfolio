import { theme } from "../../data/profile";

export default function TerminalCard({ title, children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${theme.frame} ${className}`}>
      {title && (
        <div className="border-b border-white/[0.06] px-5 py-3">
          <span className="text-xs font-medium text-white/30">{title}</span>
        </div>
      )}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
