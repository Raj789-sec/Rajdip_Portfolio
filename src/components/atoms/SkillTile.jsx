import { motion } from "framer-motion";

export default function SkillTile({ title, icon, items = [], className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-6 hover:border-blue-500/30 transition-colors ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl ring-1 ring-slate-700 bg-blue-500/10 text-blue-400">
          {icon}
        </div>
        <div className="min-w-0">
          <h4 className="text-xl font-bold tracking-tight text-white">
            {title}
          </h4>
          <ul className="mt-2 space-y-1.5 text-[15px] leading-6 text-slate-400">
            {items.map((t, i) => (
              <li key={i} className="relative pl-4">
                <i className="absolute left-0 top-2 block h-1.5 w-1.5 rounded-full bg-blue-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
