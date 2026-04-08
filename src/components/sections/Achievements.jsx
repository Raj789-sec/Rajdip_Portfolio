import { motion } from "framer-motion";
import { Trophy, Zap, Shield, Globe } from "lucide-react";

import BBCLogo from "../../assets/BBC.png"; import HuaweiLogo from "../../assets/huawei.png";
import LGLogo from "../../assets/Lg.png"; import PhilipsLogo from "../../assets/philips.png";
import SonyLogo from "../../assets/sony.png"; import YahooLogo from "../../assets/yahoo.jpg";
import UNLogo from "../../assets/UN.png"; import IndiaGovtLogo from "../../assets/indiangovt.png";
import MastercardLogo from "../../assets/mastercard.png"; import DutchGovtLogo from "../../assets/dutchgovt.png";
import AppleLogo from "../../assets/apple.png"; import NokiaLogo from "../../assets/nokia.png";
import UsdodLogo from "../../assets/usdod.png"; import ZivameLogo from "../../assets/zivame.png";
import AirbnbLogo from "../../assets/airbnb.png"; import WanderuLogo from "../../assets/wanderu.png";
import FlowcryptLogo from "../../assets/flowcrypt.jpeg"; import MicrosoftLogo from "../../assets/microsoft.png";

const HOF = [
  { name: "Apple", logo: AppleLogo }, { name: "Microsoft", logo: MicrosoftLogo }, { name: "SONY", logo: SonyLogo },
  { name: "BBC", logo: BBCLogo }, { name: "Yahoo", logo: YahooLogo }, { name: "Mastercard", logo: MastercardLogo },
  { name: "United Nations", logo: UNLogo }, { name: "US DoD", logo: UsdodLogo }, { name: "Govt. of India", logo: IndiaGovtLogo },
  { name: "Netherlands", logo: DutchGovtLogo }, { name: "Philips", logo: PhilipsLogo }, { name: "Nokia", logo: NokiaLogo },
  { name: "LG", logo: LGLogo }, { name: "Huawei", logo: HuaweiLogo }, { name: "Zivame", logo: ZivameLogo },
  { name: "Airbnb", logo: AirbnbLogo }, { name: "Wanderu", logo: WanderuLogo }, { name: "FlowCrypt", logo: FlowcryptLogo },
];

const STATS = [
  { value: "80+", label: "Hall of Fames", icon: <Shield className="h-5 w-5" />, color: "cyan" },
  { value: "18+", label: "Organizations", icon: <Globe className="h-5 w-5" />, color: "violet" },
  { value: "#1", label: "North Bengal CTF", icon: <Trophy className="h-5 w-5" />, color: "green" },
  { value: "1%", label: "TryHackMe Global", icon: <Zap className="h-5 w-5" />, color: "pink" },
];

const sc = {
  cyan: { bg: "bg-neon-cyan/10", text: "text-neon-cyan", border: "border-neon-cyan/15", glow: "shadow-[0_0_20px_rgba(0,240,255,0.06)]" },
  violet: { bg: "bg-neon-violet/10", text: "text-neon-violet", border: "border-neon-violet/15", glow: "shadow-[0_0_20px_rgba(168,85,247,0.06)]" },
  green: { bg: "bg-neon-green/10", text: "text-neon-green", border: "border-neon-green/15", glow: "shadow-[0_0_20px_rgba(57,255,20,0.06)]" },
  pink: { bg: "bg-neon-pink/10", text: "text-neon-pink", border: "border-neon-pink/15", glow: "shadow-[0_0_20px_rgba(255,46,170,0.06)]" },
};

const fade = (d = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } });

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-24 px-6 scroll-mt-28 overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div {...fade()} className="text-center mb-14">
          <p className="text-xs font-mono font-medium text-neon-cyan/60 tracking-widest uppercase mb-4">// recognition</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono tracking-tight"><span className="gradient-text">Hall of Fame.</span></h2>
          <p className="mt-4 text-white/20 max-w-xl mx-auto text-sm leading-relaxed">Recognized by leading organizations worldwide for responsibly disclosing security vulnerabilities.</p>
        </motion.div>

        <motion.div {...fade(0.1)} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {STATS.map((s) => { const c = sc[s.color]; return (
            <div key={s.label} className={`rounded-xl border ${c.border} ${c.bg} p-5 text-center ${c.glow} hover:scale-[1.02] transition-all duration-500`}>
              <div className={`h-10 w-10 rounded-lg ${c.bg} ${c.text} flex items-center justify-center mx-auto mb-3`}>{s.icon}</div>
              <div className={`text-3xl sm:text-4xl font-mono font-extrabold ${c.text}`}>{s.value}</div>
              <div className="text-[10px] text-white/20 tracking-widest uppercase mt-1.5 font-mono">{s.label}</div>
            </div>
          ); })}
        </motion.div>

        <motion.div {...fade(0.2)}>
          <h3 className="text-xs font-mono font-medium text-white/20 tracking-widest uppercase mb-6 text-center">// trusted_by</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {HOF.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.02 * i }}
                className="group cyber-card p-4 flex flex-col items-center justify-center gap-2.5 hover:-translate-y-1">
                <div className="h-10 w-auto flex items-center justify-center">
                  <img src={item.logo} alt={item.name} className="max-h-10 w-auto object-contain" />
                </div>
                <span className="text-[10px] text-white/25 font-mono group-hover:text-neon-cyan/60 transition-colors">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade(0.3)} className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {[
            { label: "North Bengal CTF", badge: "Winner", color: "neon-green" },
            { label: "Kolkata Police CTF", badge: "Top 5", color: "neon-violet" },
            { label: "Hack The Box", badge: "Pro Hacker", color: "neon-cyan" },
          ].map((c) => (
            <div key={c.label} className={`flex items-center gap-3 rounded-lg border border-${c.color}/10 bg-${c.color}/[0.04] px-5 py-2.5 font-mono text-sm`}>
              <Trophy className={`h-4 w-4 text-${c.color}`} />
              <span className="text-white/50">{c.label}</span>
              <span className={`text-xs font-bold text-${c.color} bg-${c.color}/10 rounded px-2 py-0.5`}>{c.badge}</span>
            </div>
          ))}
          <a href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer"
             className="flex items-center gap-3 rounded-lg border border-neon-pink/10 bg-neon-pink/[0.04] px-5 py-2.5 font-mono text-sm hover:bg-neon-pink/[0.08] transition-all">
            <Zap className="h-4 w-4 text-neon-pink" />
            <span className="text-white/50">TryHackMe</span>
            <span className="text-xs font-bold text-neon-pink bg-neon-pink/10 rounded px-2 py-0.5">Top 1%</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
