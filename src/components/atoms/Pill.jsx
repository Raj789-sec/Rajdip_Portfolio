export default function Pill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm">
      <Icon className="h-4 w-4 text-violet-400" />
      {children}
    </span>
  );
}
