import { motion } from "framer-motion";

export default function AvatarNeo({
  src = "/assets/avatar.png",
  alt = "avatar",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <div className="relative w-[320px] sm:w-[360px] md:w-[400px]">
        <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 ring-1 ring-slate-700 aspect-[3/4]">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover select-none"
            draggable="false"
          />
        </div>
      </div>
    </motion.div>
  );
}
