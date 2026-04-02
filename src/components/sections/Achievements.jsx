import { motion } from "framer-motion";
import { Trophy, Zap } from "lucide-react";
import HOFMarquee from "./HOFMarquee";

import BBCLogo from "../../assets/BBC.png";
import HuaweiLogo from "../../assets/huawei.png";
import LGLogo from "../../assets/Lg.png";
import PhilipsLogo from "../../assets/philips.png";
import SonyLogo from "../../assets/sony.png";
import YahooLogo from "../../assets/yahoo.jpg";
import UNLogo from "../../assets/UN.png";
import IndiaGovtLogo from "../../assets/indiangovt.png";
import MastercardLogo from "../../assets/mastercard.png";
import DutchGovtLogo from "../../assets/dutchgovt.png";
import AppleLogo from "../../assets/apple.png";
import NokiaLogo from "../../assets/nokia.png";
import UsdodLogo from "../../assets/usdod.png";
import ZivameLogo from "../../assets/zivame.png";
import AirbnbLogo from "../../assets/airbnb.png";
import WanderuLogo from "../../assets/wanderu.png";
import FlowcryptLogo from "../../assets/flowcrypt.jpeg";
import MicrosoftLogo from "../../assets/microsoft.png";

const HOF_ITEMS = [
  { name: "Apple", logo: AppleLogo },
  { name: "Microsoft", logo: MicrosoftLogo },
  { name: "SONY", logo: SonyLogo },
  { name: "BBC", logo: BBCLogo },
  { name: "Yahoo", logo: YahooLogo },
  { name: "Mastercard", logo: MastercardLogo },
  { name: "United Nations", logo: UNLogo },
  { name: "US DoD", logo: UsdodLogo },
  { name: "Govt. of India", logo: IndiaGovtLogo },
  { name: "Govt. of Netherlands", logo: DutchGovtLogo },
  { name: "Philips", logo: PhilipsLogo },
  { name: "Nokia", logo: NokiaLogo },
  { name: "LG", logo: LGLogo },
  { name: "Huawei", logo: HuaweiLogo },
  { name: "Zivame", logo: ZivameLogo },
  { name: "Airbnb", logo: AirbnbLogo },
  { name: "Wanderu", logo: WanderuLogo },
  { name: "FlowCrypt", logo: FlowcryptLogo },
];

const STATS = [
  { value: "80+", label: "Security Acknowledgments", color: "from-violet-400 to-purple-600" },
  { value: "18+", label: "Global Organizations", color: "from-blue-400 to-cyan-500" },
  { value: "#1", label: "North Bengal CTF", color: "from-amber-400 to-orange-500" },
  { value: "1%", label: "TryHackMe Global", color: "from-emerald-400 to-teal-500" },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-24 px-6 scroll-mt-28 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fade()} className="text-center mb-16">
          <p className="text-sm font-medium text-violet-400/80 tracking-widest uppercase mb-4">Recognition</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Hall of Fame.</span>
          </h2>
          <p className="mt-4 text-white/30 max-w-xl mx-auto text-sm leading-relaxed">
            Recognized by leading organizations worldwide for responsibly disclosing security vulnerabilities.
          </p>
        </motion.div>

        {/* Stats — large gradient numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {STATS.map((s, i) => (
            <motion.div key={s.label} {...fade(0.1 + i * 0.08)} className="text-center group">
              <div className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br ${s.color} bg-clip-text text-transparent leading-none tracking-tighter`}>
                {s.value}
              </div>
              <div className="text-[11px] text-white/30 mt-3 font-medium uppercase tracking-widest group-hover:text-white/50 transition-colors">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee with edge fade */}
        <motion.div {...fade(0.3)} className="relative mb-20">
          <div className="absolute -inset-x-6 -inset-y-8 rounded-3xl pointer-events-none"
               style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.04) 0%, rgba(59,130,246,0.02) 50%, transparent 100%)" }} />
          <div className="relative">
            <HOFMarquee items={HOF_ITEMS} speed={45} height={56} gap={56} />
            <div className="mt-4">
              <HOFMarquee items={[...HOF_ITEMS].reverse()} speed={55} height={56} gap={56} />
            </div>
          </div>
        </motion.div>

        {/* CTF + Platforms — minimal pill style */}
        <motion.div {...fade(0.4)} className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-6 py-3 backdrop-blur-sm hover:border-amber-500/20 hover:bg-amber-500/[0.03] transition-all duration-500 group">
            <Trophy className="h-4 w-4 text-amber-400/60 group-hover:text-amber-400 transition-colors" />
            <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">North Bengal CTF</span>
            <span className="text-xs font-bold text-amber-400">Winner</span>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-6 py-3 backdrop-blur-sm hover:border-violet-500/20 hover:bg-violet-500/[0.03] transition-all duration-500 group">
            <Trophy className="h-4 w-4 text-violet-400/60 group-hover:text-violet-400 transition-colors" />
            <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">Kolkata Police CTF</span>
            <span className="text-xs font-bold text-violet-400">Top 5</span>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-6 py-3 backdrop-blur-sm hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500 group">
            <Zap className="h-4 w-4 text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
            <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">Hack The Box</span>
            <span className="text-xs font-bold text-emerald-400">Pro Hacker</span>
          </div>

          <a href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer"
             className="flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-6 py-3 backdrop-blur-sm hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-500 group">
            <Zap className="h-4 w-4 text-blue-400/60 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">TryHackMe</span>
            <span className="text-xs font-bold text-blue-400">Top 1% ↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
