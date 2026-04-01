export default function Pill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 backdrop-blur">
      <Icon className="h-4 w-4" />
      {children}
    </span>
  );
}
