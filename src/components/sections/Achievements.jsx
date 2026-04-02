import { motion } from "framer-motion";
import { Globe, Trophy, Zap, Shield } from "lucide-react";
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
  { value: "80+", label: "Acknowledgments", icon: Shield },
  { value: "18+", label: "Organizations", icon: Globe },
  { value: "1st", label: "Place — NB CTF", icon: Trophy },
  { value: "Top 1%", label: "TryHackMe", icon: Zap },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-20 px-6 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12">
            <span className="gradient-text">Hall of Fame.</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              {...fade(0.08 * i)}
              className="bento p-5 text-center group"
            >
              <s.icon className="h-4 w-4 mx-auto mb-3 text-violet-400/50 group-hover:text-violet-400 transition-colors" />
              <div className="text-2xl sm:text-3xl font-bold text-white/90 tracking-tight">{s.value}</div>
              <div className="text-[11px] text-white/30 mt-1 font-medium uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* HOF Marquee — full width with glow */}
        <motion.div {...fade(0.15)} className="relative bento bento-accent p-8 mb-6 overflow-hidden">
          {/* Ambient glow behind logos */}
          <div className="absolute inset-0 opacity-30 pointer-events-none"
               style={{ background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(139,92,246,0.15), transparent)" }} />

          <p className="text-sm text-white/40 mb-6 max-w-2xl relative z-10">
            Recognized by <span className="text-white/70 font-medium">Apple, Microsoft, Sony, BBC, Yahoo, Mastercard, U.S. DoD, United Nations, Government of India</span> and more for responsibly disclosing security vulnerabilities.
          </p>
          <div className="relative z-10">
            <HOFMarquee items={HOF_ITEMS} speed={50} height={52} gap={52} />
          </div>
        </motion.div>

        {/* CTFs + Platforms — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div {...fade(0.25)} className="bento p-6">
            <div className="flex items-center gap-2 mb-5">
              <Trophy className="h-4 w-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-white/60">CTF Highlights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between group">
                <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">North Bengal CTF</span>
                <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-0.5 text-[11px] font-semibold text-amber-400">
                  1st Place
                </span>
              </div>
              <div className="w-full h-px bg-white/[0.04]" />
              <div className="flex items-center justify-between group">
                <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Kolkata Police CTF</span>
                <span className="rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-0.5 text-[11px] font-semibold text-violet-400">
                  Top 5
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fade(0.3)} className="bento p-6">
            <div className="flex items-center gap-2 mb-5">
              <Zap className="h-4 w-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-white/60">Platforms</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between group">
                <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Hack The Box</span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 text-[11px] font-semibold text-emerald-400">
                  Pro Hacker
                </span>
              </div>
              <div className="w-full h-px bg-white/[0.04]" />
              <div className="flex items-center justify-between group">
                <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">TryHackMe</span>
                <a href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer"
                   className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-0.5 text-[11px] font-semibold text-blue-400 hover:bg-blue-500/20 transition-colors">
                  Top 1% ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
