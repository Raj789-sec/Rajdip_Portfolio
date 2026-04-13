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
  { value: "80+", label: "Hall of Fames", icon: <Shield className="h-5 w-5" /> },
  { value: "18+", label: "Organizations", icon: <Globe className="h-5 w-5" /> },
  { value: "#1", label: "North Bengal CTF", icon: <Trophy className="h-5 w-5" /> },
  { value: "Top 1%", label: "TryHackMe Global", icon: <Zap className="h-5 w-5" /> },
];

const BADGES = [
  { label: "North Bengal CTF", badge: "Winner" },
  { label: "Kolkata Police CTF", badge: "Top 5" },
  { label: "Hack The Box", badge: "Pro Hacker" },
  { label: "TryHackMe", badge: "Top 1%", href: "https://tryhackme.com/p/Raj7" },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6 bg-surface-100 scroll-mt-28 overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div {...fade()} className="text-center mb-16">
          <p className="section-label justify-center">Recognition</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">Hall of Fame</h2>
          <p className="mt-4 text-navy-400 max-w-xl mx-auto text-sm font-body leading-relaxed">
            Recognized by leading organizations worldwide for responsibly disclosing security vulnerabilities.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div {...fade(0.1)} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map((s) => (
            <div key={s.label} className="card p-6 text-center group">
              <div className="h-11 w-11 rounded-xl bg-accent-indigo/10 text-accent-indigo flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-indigo group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <div className="text-3xl font-heading font-extrabold text-navy">{s.value}</div>
              <div className="text-[11px] text-navy-400 tracking-wide uppercase mt-1.5 font-body">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Logo marquee */}
        <motion.div {...fade(0.2)}>
          <p className="text-sm font-heading font-bold text-navy-300 mb-6 text-center uppercase tracking-wider">Trusted by global organizations</p>
          <div className="overflow-hidden py-4">
            <div className="marquee-track">
              {[...HOF, ...HOF].map((item, i) => (
                <div key={`${item.name}-${i}`} className="flex flex-col items-center justify-center mx-6 min-w-[100px]">
                  <div className="h-12 w-auto flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                    <img src={item.logo} alt={item.name} className="max-h-12 w-auto object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTF Badges */}
        <motion.div {...fade(0.3)} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {BADGES.map((c) => {
            const Tag = c.href ? "a" : "div";
            const props = c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Tag key={c.label} {...props} className="card px-5 py-3 flex items-center gap-3 text-sm font-body">
                <Trophy className="h-4 w-4 text-accent-gold" />
                <span className="text-navy-600">{c.label}</span>
                <span className="text-[11px] font-heading font-bold text-white bg-accent-indigo rounded-full px-2.5 py-0.5">{c.badge}</span>
              </Tag>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
