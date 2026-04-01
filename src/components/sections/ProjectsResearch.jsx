import { motion } from "framer-motion";
import {
  Code,
  Shield,
  CalendarDays,
  MapPin,
  Github,
  ExternalLink,
} from "lucide-react";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const PROJECTS = [
  {
    title: "JS Secret Scanner",
    metaExtras: [{ icon: <Shield className="h-4 w-4" />, text: "Open-source utility" }],
    bullets: [
      "Scans JavaScript for AWS URLs, secrets, API endpoints, and high-entropy tokens to catch leakage early.",
    ],
    tags: ["Recon", "Automation", "Secrets", "Node/JS"],
    actions: [
      { label: "View Tool", href: "https://github.com/Raj789-sec/js-secret-scanner", icon: <ExternalLink className="h-4 w-4" /> },
      { label: "GitHub", href: "https://github.com/Raj789-sec/js-secret-scanner", icon: <Github className="h-4 w-4" /> },
    ],
  },
];

const RESEARCH = [
  {
    title: "CVE-2023-39115",
    right: "2023",
    metaExtras: [{ icon: <Shield className="h-4 w-4" />, text: "Public CVE" }],
    bullets: [
      "install/aiz-uploader/upload in Campcodes Online Matrimonial Website System Script 3.3 allows XSS via a crafted SVG document.",
    ],
    tags: ["XSS", "SVG", "Disclosure", "NVD"],
    actions: [
      { label: "View CVE", href: "https://nvd.nist.gov/vuln/detail/CVE-2023-39115", icon: <ExternalLink className="h-4 w-4" /> },
    ],
  },
  {
    title: "CVE-2023-40834",
    right: "2023",
    metaExtras: [{ icon: <Shield className="h-4 w-4" />, text: "Public CVE" }],
    bullets: [
      "OpenCart CMS v4.0.2.2 lacks a lockout on its login page, allowing brute-force attacks against the password parameter.",
    ],
    tags: ["Brute Force", "Auth", "Disclosure", "NVD"],
    actions: [
      { label: "View CVE", href: "https://nvd.nist.gov/vuln/detail/CVE-2023-40834", icon: <ExternalLink className="h-4 w-4" /> },
    ],
  },
];

export default function ProjectsResearch() {
  return (
    <section id="projects-research" className="relative py-20 px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Projects & Research
          </h2>
          <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-blue-500" />
        </div>

        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 sm:p-10">
          {/* PROJECTS */}
          <SubHeading icon={<Code className="h-5 w-5 text-slate-300" />} text="Projects" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-6">
            {PROJECTS.map((p, idx) => (
              <motion.li key={idx} variants={item}>
                <Card>
                  <Header title={p.title} />
                  <Meta extras={p.metaExtras} />
                  <Bullets points={p.bullets} />
                  <Tags items={p.tags} />
                  <Actions actions={p.actions} />
                </Card>
              </motion.li>
            ))}
          </motion.ul>

          <div className="my-10 mx-auto w-16 h-px bg-slate-700" />

          {/* RESEARCH */}
          <SubHeading icon={<Shield className="h-5 w-5 text-slate-300" />} text="Research" />
          <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10%" }} className="space-y-6">
            {RESEARCH.map((r, idx) => (
              <motion.li key={idx} variants={item}>
                <Card>
                  <Header title={r.title} right={r.right} />
                  <Meta extras={r.metaExtras} />
                  <Bullets points={r.bullets} />
                  <Tags items={r.tags} />
                  <Actions actions={r.actions} />
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

function Meta({ location, extras = [] }) {
  if (!location && extras.length === 0) return null;
  return (
    <div className="mt-1 text-slate-400 text-sm flex flex-wrap items-center gap-x-4 gap-y-2">
      {location && (
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" /> {location}
        </span>
      )}
      {extras.map((e, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          {e.icon} {e.text}
        </span>
      ))}
    </div>
  );
}

function Bullets({ points = [] }) {
  return (
    <ul className="mt-4 space-y-2 text-slate-400">
      {points.map((p, i) => (
        <li key={i} className="pl-4 relative">
          <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
          {p}
        </li>
      ))}
    </ul>
  );
}

function Tags({ items = [] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-full border border-slate-600 text-slate-300 bg-slate-700/40">
          <Code className="h-3.5 w-3.5" />
          {t}
        </span>
      ))}
    </div>
  );
}

function Actions({ actions = [] }) {
  if (!actions.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {actions.map((a, i) => (
        <a key={i} href={a.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-700/30 px-3 py-1.5 text-sm text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition-colors">
          {a.icon}
          {a.label}
        </a>
      ))}
    </div>
  );
}
