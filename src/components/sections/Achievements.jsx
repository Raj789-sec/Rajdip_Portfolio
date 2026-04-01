import { motion } from "framer-motion";
import { Globe, Trophy, Award, Shield, Zap, Target, CalendarDays } from "lucide-react";
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

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-24 px-6 scroll-mt-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Achievements.</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Hall of Fame */}
          <motion.div variants={fade}>
            <h3 className="text-lg font-semibold text-white/70 mb-4 flex items-center gap-3">
              <Globe className="h-5 w-5 text-violet-400" /> Hall of Fame
            </h3>
            <p className="max-w-3xl text-sm text-white/40 leading-relaxed mb-8">
              Recognized by <span className="text-white/70">Apple, Microsoft, Sony, BBC, Yahoo, Nokia, Philips, Huawei, Mastercard</span> and public institutions like the <span className="text-white/70">U.S. DoD, Government of India</span>, and <span className="text-white/70">Dutch Government</span>. <span className="text-white/60 font-medium">80+ acknowledgments</span> across global organizations.
            </p>
            <div className="mb-14">
              <HOFMarquee items={HOF_ITEMS} speed={55} height={64} gap={56} />
            </div>
          </motion.div>

          {/* CTF */}
          <motion.div variants={fade}>
            <h3 className="text-lg font-semibold text-white/70 mb-5 flex items-center gap-3">
              <Trophy className="h-5 w-5 text-violet-400" /> CTF Highlights
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: "North Bengal CTF", year: "2022", badge: "Winner — 1st Place", icon: <Trophy className="h-4 w-4 text-amber-400" /> },
                { title: "Kolkata Police CTF", year: "2023", badge: "5th Place — Top 5", icon: <Award className="h-4 w-4 text-violet-400" /> },
              ].map((c, i) => (
                <div key={i} className="rounded-2xl glass border-gradient p-6 transition-all duration-300 hover:bg-white/[0.05]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white/90">{c.title}</h4>
                    <span className="text-xs text-white/25">{c.year}</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-2 text-sm text-white/50">
                    {c.icon} {c.badge}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platforms */}
          <motion.div variants={fade} className="mt-8">
            <h3 className="text-lg font-semibold text-white/70 mb-5 flex items-center gap-3">
              <Shield className="h-5 w-5 text-violet-400" /> Platforms
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl glass border-gradient p-6 transition-all duration-300 hover:bg-white/[0.05]">
                <h4 className="text-lg font-semibold text-white/90">Hack The Box</h4>
                <div className="mt-2 inline-flex items-center gap-2 text-sm text-white/50">
                  <Zap className="h-4 w-4 text-emerald-400" /> Pro Hacker
                </div>
              </div>
              <div className="rounded-2xl glass border-gradient p-6 transition-all duration-300 hover:bg-white/[0.05]">
                <h4 className="text-lg font-semibold text-white/90">TryHackMe</h4>
                <div className="mt-2 inline-flex items-center gap-2 text-sm text-white/50">
                  <Target className="h-4 w-4 text-blue-400" /> Top 1% ·{" "}
                  <a className="text-violet-400 hover:text-violet-300 transition-colors" href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer">
                    profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
