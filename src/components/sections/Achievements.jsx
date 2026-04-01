import { motion } from "framer-motion";
import { Globe, Trophy, Award, Zap, Target } from "lucide-react";
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

const HOF_ITEMS = [
  { name: "Apple", logo: AppleLogo },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
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

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-20 px-6 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fade()}>
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
            <span className="gradient-text">Achievements.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* HOF marquee — full width */}
          <motion.div {...fade(0.1)} className="md:col-span-12 bento bento-accent p-7">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-violet-400" />
              <h3 className="text-sm font-semibold text-white/60">Hall of Fame</h3>
            </div>
            <p className="text-sm text-white/30 mb-6 max-w-2xl">
              Recognized by <span className="text-white/50">Apple, Microsoft, Sony, BBC, Yahoo, Mastercard, U.S. DoD, Government of India</span> and more. <span className="text-white/50 font-medium">80+ acknowledgments</span> worldwide.
            </p>
            <HOFMarquee items={HOF_ITEMS} speed={55} height={56} gap={48} />
          </motion.div>

          {/* CTFs — left */}
          <motion.div {...fade(0.2)} className="md:col-span-6 bento p-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h3 className="text-sm font-semibold text-white/60">CTF Highlights</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">North Bengal CTF</span>
                <span className="text-xs text-amber-400/70 font-medium">Winner — 1st Place</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Kolkata Police CTF</span>
                <span className="text-xs text-violet-400/70 font-medium">5th Place — Top 5</span>
              </div>
            </div>
          </motion.div>

          {/* Platforms — right */}
          <motion.div {...fade(0.3)} className="md:col-span-6 bento p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-emerald-400" />
              <h3 className="text-sm font-semibold text-white/60">Platforms</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Hack The Box</span>
                <span className="text-xs text-emerald-400/70 font-medium">Pro Hacker</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">TryHackMe</span>
                <a href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer" className="text-xs text-blue-400/70 hover:text-blue-300 font-medium transition-colors">
                  Top 1% · profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
