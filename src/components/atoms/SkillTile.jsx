import { motion } from "framer-motion";

export default function SkillTile({ title, icon, items = [], className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative rounded-2xl glass border-gradient p-6 transition-all duration-300 hover:bg-white/[0.05] ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-400 ring-1 ring-white/[0.06]">
          {icon}
        </div>
        <div className="min-w-0">
          <h4 className="text-lg font-semibold text-white/90">{title}</h4>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/40">
            {items.map((t, i) => (
              <li key={i} className="relative pl-4">
                <span className="absolute left-0 top-[9px] h-1 w-1 rounded-full bg-violet-400/60" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
