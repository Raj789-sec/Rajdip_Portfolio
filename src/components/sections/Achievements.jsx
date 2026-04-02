import { motion } from "framer-motion";
import { Trophy, Zap, Shield, Globe } from "lucide-react";

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
  { name: "Netherlands", logo: DutchGovtLogo },
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
  { value: "80+", label: "Hall of Fames", icon: <Shield className="h-5 w-5" />, color: "violet" },
  { value: "18+", label: "Organizations", icon: <Globe className="h-5 w-5" />, color: "blue" },
  { value: "#1", label: "North Bengal CTF", icon: <Trophy className="h-5 w-5" />, color: "amber" },
  { value: "1%", label: "TryHackMe Global", icon: <Zap className="h-5 w-5" />, color: "emerald" },
];

const statColors = {
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/15", glow: "shadow-violet-500/10" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/15", glow: "shadow-blue-500/10" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/15", glow: "shadow-amber-500/10" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/15", glow: "shadow-emerald-500/10" },
};

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-24 px-6 scroll-mt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div {...fade()} className="text-center mb-14">
          <p className="text-sm font-medium text-violet-400/80 tracking-widest uppercase mb-4">Recognition</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Hall of Fame.</span>
          </h2>
          <p className="mt-4 text-white/25 max-w-xl mx-auto text-sm leading-relaxed">
            Recognized by leading organizations worldwide for responsibly disclosing security vulnerabilities.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fade(0.1)} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {STATS.map((s) => {
            const c = statColors[s.color];
            return (
              <div key={s.label}
                   className={`relative rounded-2xl border ${c.border} ${c.bg} p-5 text-center group hover:scale-[1.02] transition-all duration-500 shadow-lg ${c.glow}`}>
                <div className={`h-10 w-10 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mx-auto mb-3`}>
                  {s.icon}
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold ${c.text}`}>{s.value}</div>
                <div className="text-[10px] text-white/25 tracking-widest uppercase mt-1.5 font-medium">{s.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Logo grid — always colorful */}
        <motion.div {...fade(0.2)}>
          <h3 className="text-sm font-medium text-white/30 tracking-widest uppercase mb-6 text-center">Trusted By</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {HOF_ITEMS.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.02 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col items-center justify-center gap-2.5 hover:bg-white/[0.05] hover:border-violet-500/15 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-10 w-auto flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-10 w-auto object-contain brightness-100"
                  />
                </div>
                <span className="text-[10px] text-white/30 font-medium tracking-wide group-hover:text-white/60 transition-colors">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTF + Platforms */}
        <motion.div {...fade(0.3)} className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-amber-500/10 bg-amber-500/[0.04] px-5 py-2.5 group hover:bg-amber-500/[0.08] transition-all duration-500">
            <Trophy className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-white/60">North Bengal CTF</span>
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 rounded-full px-2 py-0.5">Winner</span>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-violet-500/10 bg-violet-500/[0.04] px-5 py-2.5 group hover:bg-violet-500/[0.08] transition-all duration-500">
            <Trophy className="h-4 w-4 text-violet-400" />
            <span className="text-sm text-white/60">Kolkata Police CTF</span>
            <span className="text-xs font-bold text-violet-400 bg-violet-400/10 rounded-full px-2 py-0.5">Top 5</span>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-emerald-500/10 bg-emerald-500/[0.04] px-5 py-2.5 group hover:bg-emerald-500/[0.08] transition-all duration-500">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-white/60">Hack The Box</span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 rounded-full px-2 py-0.5">Pro Hacker</span>
          </div>

          <a href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer"
             className="flex items-center gap-3 rounded-full border border-blue-500/10 bg-blue-500/[0.04] px-5 py-2.5 group hover:bg-blue-500/[0.08] transition-all duration-500">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-white/60">TryHackMe</span>
            <span className="text-xs font-bold text-blue-400 bg-blue-400/10 rounded-full px-2 py-0.5">Top 1%</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
