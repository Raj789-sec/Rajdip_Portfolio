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

const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Achievements() {
  return (
    <section id="Achievements" className="relative py-20 px-4 sm:px-6 md:px-8 scroll-mt-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Achievements
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-blue-500" />
        </div>

        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 sm:p-10">
          {/* Hall of Fame */}
          <SubHeading icon={<Globe className="h-5 w-5 text-slate-300" />} text="Hall of Fame" />

          <p className="max-w-4xl text-left leading-relaxed text-slate-400 mb-8">
            Secured top organizations worldwide — including{" "}
            <span className="text-blue-400">Apple</span>, <span className="text-blue-400">Microsoft</span>,{" "}
            <span className="text-blue-400">Sony</span>, <span className="text-blue-400">BBC</span>,{" "}
            <span className="text-blue-400">Yahoo</span>, <span className="text-blue-400">Nokia</span>,{" "}
            <span className="text-blue-400">Philips</span>, <span className="text-blue-400">Huawei</span>,{" "}
            and <span className="text-blue-400">Mastercard</span> — plus public institutions like the{" "}
            <span className="text-blue-400">U.S. DoD</span>,{" "}
            <span className="text-blue-400">Government of India</span>, and the{" "}
            <span className="text-blue-400">Dutch Government</span>. Recognized in{" "}
            <span className="text-white font-semibold">80+ acknowledgments</span> with partnerships across{" "}
            <span className="text-blue-400">Airbnb</span>, <span className="text-blue-400">Wanderu</span>,{" "}
            <span className="text-blue-400">FlowCrypt</span>, and <span className="text-blue-400">Zivame</span>.
          </p>

          <div className="mb-12">
            <HOFMarquee items={HOF_ITEMS} speed={55} height={64} gap={56} />
          </div>

          {/* CTF highlights */}
          <SubHeading icon={<Trophy className="h-5 w-5 text-slate-300" />} text="CTF Highlights" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-4">
            {[
              {
                title: "North Bengal CTF",
                right: "2022",
                extras: [{ icon: <Trophy className="h-4 w-4" />, text: "Winner — 1st Place" }],
              },
              {
                title: "Kolkata Police CTF",
                right: "2023",
                extras: [{ icon: <Award className="h-4 w-4" />, text: "5th Place — Top 5" }],
              },
            ].map((c, i) => (
              <motion.li key={i} variants={item}>
                <Card>
                  <Header title={c.title} right={c.right} />
                  <Meta extras={c.extras} />
                </Card>
              </motion.li>
            ))}
          </motion.ul>

          <div className="my-10 mx-auto w-16 h-px bg-slate-700" />

          {/* Platforms */}
          <SubHeading icon={<Shield className="h-5 w-5 text-slate-300" />} text="Platform Achievements" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-4">
            {[
              { title: "Hack The Box", extras: [{ icon: <Zap className="h-4 w-4" />, text: "Pro Hacker" }] },
              {
                title: "TryHackMe",
                extras: [
                  {
                    icon: <Target className="h-4 w-4" />,
                    text: (
                      <>
                        Top 1% ·{" "}
                        <a className="text-blue-400 underline" href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer">
                          profile
                        </a>
                      </>
                    ),
                  },
                ],
              },
            ].map((p, i) => (
              <motion.li key={i} variants={item}>
                <Card>
                  <Header title={p.title} />
                  <Meta extras={p.extras} />
                </Card>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function SubHeading({ icon, text }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-blue-500" />
        <div className="shrink-0">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{text}</h3>
      </div>
      <div className="mt-3 h-px w-16 bg-blue-500/50" />
    </div>
  );
}

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="rounded-xl border border-slate-700 bg-slate-800/60 p-5 sm:p-6"
    >
      {children}
    </motion.div>
  );
}

function Header({ title, right }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4>
      {right && (
        <div className="shrink-0 text-sm text-slate-500 flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {right}
        </div>
      )}
    </div>
  );
}

function Meta({ extras = [] }) {
  if (!extras?.length) return null;
  return (
    <div className="mt-1 text-slate-400 text-sm flex flex-wrap items-center gap-x-4 gap-y-2">
      {extras.map((e, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          {e.icon} {e.text}
        </span>
      ))}
    </div>
  );
}
