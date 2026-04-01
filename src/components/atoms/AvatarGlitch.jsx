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
      <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
        {/* Gradient ring */}
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-violet-500/40 via-blue-500/20 to-transparent" />
        <div className="relative overflow-hidden rounded-3xl bg-surface aspect-[3/4]">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover select-none"
            draggable="false"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
