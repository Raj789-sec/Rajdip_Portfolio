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
  { value: "80+", label: "Hall of Fames", icon: <Shield className="h-5 w-5" />, gradient: "from-accent-indigo to-accent-blue" },
  { value: "18+", label: "Organizations", icon: <Globe className="h-5 w-5" />, gradient: "from-accent-violet to-accent-pink" },
  { value: "#1", label: "North Bengal CTF", icon: <Trophy className="h-5 w-5" />, gradient: "from-accent-cyan to-accent-indigo" },
  { value: "1%", label: "TryHackMe Global", icon: <Zap className="h-5 w-5" />, gradient: "from-accent-amber to-accent-pink" },
];

const BADGES = [
  { label: "North Bengal CTF", badge: "Winner", gradient: "from-accent-cyan to-accent-indigo" },
  { label: "Kolkata Police CTF", badge: "Top 5", gradient: "from-accent-violet to-accent-pink" },
  { label: "Hack The Box", badge: "Pro Hacker", gradient: "from-accent-indigo to-accent-blue" },
  { label: "TryHackMe", badge: "Top 1%", gradient: "from-accent-amber to-accent-pink", href: "https://tryhackme.com/p/Raj7" },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6 scroll-mt-28 overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div {...fade()} className="text-center mb-16">
          <p className="section-label justify-center">Recognition</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
            <span className="gradient-text">Hall of Fame.</span>
          </h2>
          <p className="mt-4 text-white/20 max-w-xl mx-auto text-sm font-body leading-relaxed">
            Recognized by leading organizations worldwide for responsibly disclosing security vulnerabilities.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div {...fade(0.1)} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center group">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-white">{s.value}</div>
              <div className="text-[11px] text-white/25 tracking-wide uppercase mt-1.5 font-body">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Logo grid */}
        <motion.div {...fade(0.2)}>
          <p className="text-sm font-heading font-semibold text-white/25 mb-6 text-center">Trusted by global organizations</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {HOF.map((item, i) => (
              <motion.div key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.02 * i }}
                className="group glass-card p-4 flex flex-col items-center justify-center gap-2.5">
                <div className="h-10 w-auto flex items-center justify-center grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300">
                  <img src={item.logo} alt={item.name} className="max-h-10 w-auto object-contain" />
                </div>
                <span className="text-[10px] text-white/20 font-body group-hover:text-accent-indigo/60 transition-colors">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTF Badges */}
        <motion.div {...fade(0.3)} className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {BADGES.map((c) => {
            const Tag = c.href ? "a" : "div";
            const props = c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Tag key={c.label} {...props}
                className="flex items-center gap-3 glass-card px-5 py-3 text-sm font-body hover:!border-accent-indigo/20 transition-all">
                <Trophy className="h-4 w-4 text-accent-indigo/60" />
                <span className="text-white/50">{c.label}</span>
                <span className={`text-[11px] font-heading font-semibold text-white bg-gradient-to-r ${c.gradient} rounded-full px-2.5 py-0.5`}>
                  {c.badge}
                </span>
              </Tag>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
