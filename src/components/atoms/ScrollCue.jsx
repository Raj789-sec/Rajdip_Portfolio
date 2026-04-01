import { ChevronDown } from "lucide-react";

export default function ScrollCue({ href = "#about" }) {
  return (
    <div className="flex justify-center py-8">
      <a href={href} className="text-slate-500 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </a>
    </div>
  );
}
