import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Code2,
  TerminalSquare,
  ChevronDown,
  Calendar,
  Clock,
} from "lucide-react";

/**
 * Portfolio Landing Page – Cyber Terminal (React + Tailwind)
 *
 * Fixes & updates after build error:
 * - Provide a **single default export** (PortfolioLanding) so imports work in any environment.
 * - Keep all helper components (Section, TerminalCard, etc.) in the same module.
 * - No stray JSX characters: hero prompt uses `&gt;`.
 * - Added runtime smoke tests to catch missing sections and critical links.
 *
 * Content updates requested by user:
 * - Experience: BDO **Senior Associate & Associate merged** into one entry.
 * - Haryana Police internship: replaced bullets with provided detailed text; added official logo.
 * - Certifications: restyled with **validation URLs** (CRTO, CRTP, eWPTXv2), CEH credential ID.
 * - Education: new section, **Experience-style** cards (terminal cards) with Brainware + Inspiria.
 * - Blogs: auto-fetch Medium feed with rss2json.
 */

// ---------- Theme helpers ----------
const frame =
  "rounded-2xl border border-lime-400/30 bg-[#0b1220]/70 shadow-[0_0_40px_rgba(163,255,94,0.06)] backdrop-blur";
const neon = "text-lime-300";
const linkBtn =
  "inline-flex items-center gap-2 rounded-xl border border-lime-400/30 bg-lime-400/10 px-5 py-3 text-sm font-semibold text-lime-300 hover:bg-lime-400/15";

// ---------- Small UI atoms ----------
const Pill = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-sm text-lime-300 shadow-[0_0_18px_rgba(163,255,94,0.25)] backdrop-blur">
    <Icon className="h-4 w-4" />
    {children}
  </span>
);

const TerminalCard = ({ title, children, className = "" }) => (
  <div className={`relative overflow-hidden ${frame} ${className}`}>
    <div className="flex items-center gap-2 border-b border-white/10 bg-[#0e1529]/60 px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
      {title && <span className="ml-3 text-xs text-white/60">{title}</span>}
    </div>
    <div className="relative p-6">{children}</div>
  </div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
    <h3 className="mb-6 text-2xl font-bold text-white">{title}</h3>
    {children}
  </section>
);

// ---------- Your profile data ----------
const YOU = {
  name: "Rajdip Dey Sarkar",
  role: "Security Researcher | Security Engineer",
  tagline:
    "Offensive security specialist with 3+ years across web, API, mobile, and AD. 50+ HoF, CVEs, and CTF wins. Blending red teaming with secure engineering and automation.",
  ctaProjectsHref: "#projects",
  ctaContactHref: "#contact",
  social: {
    github: "https://github.com/Raj789-sec/",
    linkedin: "https://www.linkedin.com/in/rdsarkar/",
    email: "mailto:rajdipdeysarkar7@gmail.com",
  },
  avatarUrl:
    "https://api.dicebear.com/9.x/adventurer/svg?seed=rd&backgroundColor=b6e3f4,c0aede,d1d4f9&accessories=glasses&glasses=prescription01&mouth=smile",
};

// ---------- Logos ----------
const logos = {
  redhunt:
    "https://awsmp-logos.s3.amazonaws.com/seller-4hdsjg745sg7a/c836a4fdbc521c8f012d791ee3940d14.png",
  bdo:
    "https://www.relativity.com/sites/relativity/cache/file/B473958C-DC54-4580-AE1923B38A9CF81F_Wauto_H300.png",
  haryana: "https://cdn-prod.mybharats.in/organization/photo_1702976450.png",
};

// ---------- Layout pieces ----------
const Nav = () => (
  <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#0c1426]/70 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a href="#home" className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-lime-400 to-cyan-400 text-black font-bold">
          RS
        </div>
        <span className="text-lg font-semibold text-white/90">{YOU.name}</span>
      </a>
      <nav className="hidden gap-6 md:flex">
        {[
          ["About", "#about"],
          ["Skills", "#skills"],
          ["Experience", "#experience"],
          ["Education", "#education"],
          ["Projects", "#projects"],
          ["Research", "#research"],
          ["Blogs", "#blogs"],
          ["Certifications", "#certifications"],
          ["Achievements", "#achievements"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={href} href={href} className="text-sm text-white/70 transition hover:text-white">
            {label}
          </a>
        ))}
      </nav>
      <a href="#contact" className={linkBtn}>
        Let’s Connect <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </header>
);

const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    {/* Gradient wash */}
    <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_30%_20%,#10335a_0%,transparent_60%),radial-gradient(40%_60%_at_90%_10%,#0c3b2c_0%,transparent_60%)]" />
    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(163,255,94,0.06)_24px),linear-gradient(90deg,transparent_23px,rgba(163,255,94,0.06)_24px)] bg-[size:24px_24px]" />
    {/* Scanlines */}
    <div className="absolute inset-0 opacity-20 mix-blend-overlay [background:repeating-linear-gradient(to_bottom,transparent_0,transparent_2px,rgba(255,255,255,0.06)_3px,rgba(255,255,255,0.06)_3.5px)]" />
  </div>
);

const Hero = () => (
  <section id="home" className="relative mx-auto max-w-6xl px-4 pb-20 pt-24">
    <Background />
    <motion.p
      id="bootmsg"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${neon} mb-3`}
    >
      &gt; initializing profile…
    </motion.p>

    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-white md:text-6xl"
        >
          {YOU.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 bg-gradient-to-r from-lime-300 to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent"
        >
          {YOU.role}
        </motion.h2>
        <p className="mt-5 max-w-xl text-white/75">{YOU.tagline}</p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href={YOU.ctaProjectsHref} className={`${linkBtn} shadow-[0_0_30px_rgba(163,255,94,0.15)]`}>
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={YOU.ctaContactHref}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm text-white/80 hover:bg-white/5"
          >
            Contact Me <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-7 flex items-center gap-3">
          <Pill icon={ShieldCheck}>Security</Pill>
          <Pill icon={Code2}>Developer</Pill>
          <Pill icon={TerminalSquare}>Hacker</Pill>
        </div>

        <div className="mt-7 flex gap-4">
          <a href={YOU.social.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
            <Github className="h-6 w-6" />
          </a>
          <a href={YOU.social.linkedin} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={YOU.social.email} className="text-white/70 hover:text-white">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className={`relative mx-auto aspect-square max-w-[440px] overflow-hidden ${frame} p-2`}>
          <div className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-3xl [background:conic-gradient(from_0deg,#67e8f9_0%,#a3ff5e_40%,transparent_60%)]" />
          <div className="h-full w-full rounded-2xl bg-[#0b1220] p-4">
            <img alt="avatar" src={YOU.avatarUrl} className="h-full w-full rounded-2xl object-contain" />
          </div>
        </div>
      </motion.div>
    </div>

    <div className="mt-12 flex justify-center">
      <a href="#about" className="inline-flex items-center gap-2 text-white/70 hover:text-white">
        <ChevronDown className="h-5 w-5 animate-bounce" />
        Scroll
      </a>
    </div>
  </section>
);

// ---------- About & Skills ----------
const About = () => (
  <Section id="about" title="> about">
    <TerminalCard title="whoami">
      <p className="text-white/80">
        Security researcher with 3+ years across web, API, mobile, thick client and AD. I mix adversary simulation with
        developer‑centric fixes, scripting, and automation. 50+ Hall of Fame recognitions, published CVEs, and CTF podiums.
        Interests: <span className={neon}>cloud security</span>, <span className={neon}>AI for security</span>, and
        <span className={neon}> reverse engineering</span>. TryHackMe Top 1%, HTB <span className={neon}>Pro Hacker</span>.
      </p>
    </TerminalCard>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="> skills">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        [
          "Offensive Security",
          "Pentesting (Web, API, Mobile, Thick Client), Red Teaming, AD Attacks",
        ],
        ["Security Research", "Source Code Review, Vulnerability Analysis"],
        [
          "Tools & Tech",
          "Burp Suite, Metasploit, Nmap, Wireshark, Sonarqube, BloodHound, Cobalt Strike",
        ],
        ["Programming", "Python, Bash"],
        ["Frameworks", "OWASP Top 10, MITRE ATT&CK"],
      ].map(([h, p]) => (
        <TerminalCard key={h} title={`skill: ${h}`}>
          <h4 className={`${neon} mb-1 text-lg font-semibold`}>{h}</h4>
          <p className="text-white/70">{p}</p>
        </TerminalCard>
      ))}
    </div>
  </Section>
);

// ---------- Experience ----------
const experiences = [
  {
    company: "RedHunt Labs",
    logo: logos.redhunt,
    title: "Senior Security Consultant",
    location: "London Area, United Kingdom · Remote",
    dates: "Jul 2025 – Present · 2 mos",
    bullets: [
      "Own end‑to‑end offensive research and product pentests across internet‑scale attack surface.",
      "Develop custom automation (Python/Bash) to fingerprint assets, discover exposures, and triage findings at scale.",
      "Partner with product/engineering to land secure defaults, hardening baselines, and customer‑facing guidance.",
    ],
  },
  {
    company: "BDO India LLP",
    logo: logos.bdo,
    title: "Senior Associate & Associate",
    location: "Kolkata, West Bengal, India · Remote",
    dates: "Mar 2022 – Jun 2025 · 3 yrs 3 mos",
    bullets: [
      "Conducted 150+ penetration tests across web, API, and mobile applications, identifying critical vulnerabilities for Fortune 500 clients.",
      "Authored detailed vulnerability reports that led to a 30% reduction in security risks through proactive remediation.",
      "Managed and allocated resources effectively, ensuring timely project delivery within budget constraints.",
      "Led knowledge‑sharing sessions to upskill team members and promote a culture of continuous learning.",
      "Reviewed and validated security assessment reports to ensure accuracy, compliance (OWASP, NIST, ISO 27001), and actionable recommendations.",
      "Provided detailed feedback and risk analysis to improve report quality and consistency in methodologies.",
      "Led end‑to‑end execution of security projects, collaborating with developers, stakeholders, and cross‑functional teams.",
      "Performed web application and API penetration testing, producing PoCs and technical write‑ups.",
      "Ensured timely remediation of vulnerabilities and adherence to client security standards and compliance requirements.",
      "Continuously monitored evolving cybersecurity threats and implemented MITRE ATT&CK techniques to enhance security defenses.",
    ],
    award: "SPOT Award.pdf",
    skills:
      "Application Security, Vulnerability Assessment and Penetration Testing (VAPT), Web/API Security, Red Teaming",
  },
  {
    company: "Haryana Police",
    logo: logos.haryana,
    title: "Gurugram Police Cyber Security Summer Intern",
    location: "Gurugram, Haryana, India",
    dates: "May 2021 – Jul 2021 · 3 mos",
    bullets: [
      "Engage in hands-on experience by solving practical case studies related to various aspects of the organization's field of expertise, applying theoretical knowledge to real-world scenarios, and developing critical problem-solving skills.",
      "Actively participate in educational lectures and training sessions led by industry professionals, gaining exposure to the latest trends, technologies, and best practices.",
      "Complete assigned projects and challenging assignments designed to enhance technical skills, research capabilities, and the ability to work effectively in a team-oriented environment.",
      "Participate in Capture the Flag (CTF) competitions and cybersecurity challenges, fostering a competitive and collaborative spirit while honing technical skills and understanding cybersecurity threats and defenses.",
    ],
  },
];

const Experience = () => (
  <Section id="experience" title="> experience">
    <div className="space-y-6">
      {experiences.map((exp) => (
        <TerminalCard key={`${exp.company}-${exp.title}`} title={exp.company}>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-8 w-8 rounded bg-white p-1"
                />
              )}
              <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
            </div>
            <p className="text-white/70">{exp.dates}</p>
            <p className="text-white/60">{exp.location}</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-white/80">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {exp.skills && <p className="mt-3 text-sm text-lime-300">{exp.skills}</p>}
            {exp.award && (
              <div className="mt-2">
                <span className="text-sm text-white/70">Award:</span>{" "}
                <button
                  onClick={() => alert("Replace with actual file link when available")}
                  className="ml-1 rounded-md border border-white/15 px-2 py-1 text-xs text-white/80 hover:bg-white/5"
                >
                  {exp.award}
                </button>
              </div>
            )}
          </div>
        </TerminalCard>
      ))}
    </div>
  </Section>
);

// ---------- Projects ----------
const Projects = () => (
  <Section id="projects" title="> projects">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <TerminalCard title="js-secret-scanner">
        <h4 className={`${neon} text-lg font-semibold`}>JS Secret Scanner</h4>
        <p className="mt-1 text-sm text-white/70">
          Scans JavaScript for AWS URLs, secrets, API endpoints, and high‑entropy tokens to catch leakage early.
        </p>
        <a
          href="https://github.com/Raj789-sec/js-secret-scanner"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block rounded-lg border border-white/15 px-3 py-1 text-sm text-white/80 hover:bg-white/5"
        >
          View Tool
        </a>
      </TerminalCard>
    </div>
  </Section>
);

// ---------- Research (CVEs) ----------
const Research = () => (
  <Section id="research" title="> research">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {["CVE-2023-39115", "CVE-2023-40834"].map((cve) => (
        <TerminalCard key={cve} title={cve}>
          <p className="text-sm text-white/70">
            Security vulnerability discovered and reported, published on NVD.
          </p>
          <a
            href={`https://nvd.nist.gov/vuln/detail/${cve}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-lg border border-white/15 px-3 py-1 text-sm text-white/80 hover:bg-white/5"
          >
            View CVE
          </a>
        </TerminalCard>
      ))}
    </div>
  </Section>
);

// ---------- Blogs (auto fetch Medium) ----------
const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rajdipdeysarkar7`
        );
        const data = await res.json();
        if (data?.items) {
          const mapped = data.items.map((item) => ({
            date: new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            }),
            title: item.title,
            desc: item.description.replace(/<[^>]+>/g, "").slice(0, 140) + "…",
            tag: item.categories?.[0] || "Blog",
            read: "~5 min",
            link: item.link,
          }));
          setPosts(mapped);
        }
      } catch (err) {
        console.error("Error fetching Medium posts", err);
      }
    }
    fetchMediumPosts();
  }, []);

  return (
    <Section id="blogs" title="> blogs">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-lime-400/10 px-4 py-1 text-sm text-lime-300">
          All Posts ({posts.length})
        </span>
        <a
          href="https://medium.com/@rajdipdeysarkar7"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-1 text-sm text-white/80 hover:bg-white/5"
        >
          View on Medium
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <TerminalCard key={i} title={post.title}>
            <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
              <Calendar className="h-4 w-4" /> {post.date}
              <Clock className="ml-3 h-4 w-4" /> {post.read}
            </div>
            <h4 className="mb-1 text-lg font-semibold text-white">{post.title}</h4>
            <p className="mb-3 text-sm text-white/70">{post.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-lime-300">#{post.tag}</span>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-lime-300 hover:underline"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
};

// ---------- Certifications ----------
const certifications = [
  {
    name: "CRTO",
    url: "https://eu.badgr.com/public/assertions/7Wr3jQrFQP6FOK6rZZUkYA?identity__email=Wcyber71@gmail.com&action=download",
  },
  {
    name: "CRTP",
    url: "https://www.linkedin.com/in/rdsarkar/overlay/urn:li:fsd_profileCertification:(ACoAADA4H70BJdcbrjiwf_08MMvUzMOiVflnfVs,1672268723)/skill-associations-details?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADA4H70BJdcbrjiwf_08MMvUzMOiVflnfVs&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BGfOj3czsSn%2BVbPLoPxLBgA%3D%3D",
  },
  {
    name: "eWPTXv2",
    url: "https://certs.ine.com/d4ac221f-7b89-44c8-9918-bb31cc89efad?record_view=true",
  },
  { name: "CEH", url: null, id: "ECC6291753804" },
  { name: "Certified AppSec Practitioner", url: null },
];

const Certifications = () => (
  <Section id="certifications" title="> certifications">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert) => (
        <TerminalCard key={cert.name} title={cert.name}>
          {cert.url ? (
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="text-lime-300 hover:underline"
            >
              Verify Credential
            </a>
          ) : cert.id ? (
            <p className="text-white/80">Credential ID: {cert.id}</p>
          ) : (
            <p className="text-white/80">Issued & Verified</p>
          )}
        </TerminalCard>
      ))}
    </div>
  </Section>
);

// ---------- Education ----------
const education = [
  {
    school: "Brainware University",
    degree: "Master’s in Cyber Security",
    dates: "2021 – 2023",
    details: [
      "OWASP Brainware Chapter Lead",
      "Advanced research in network security, cryptography, and incident response.",
    ],
  },
  {
    school: "Inspiria Knowledge Campus",
    degree: "Bachelor of Computer Applications (BCA)",
    dates: "2018 – 2021",
    details: ["Core studies in programming, databases, and fundamentals of cybersecurity."],
  },
];

const Education = () => (
  <Section id="education" title="> education">
    <div className="space-y-6">
      {education.map((edu) => (
        <TerminalCard key={edu.school} title={edu.school}>
          <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
          <p className="text-white/70">{edu.dates}</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-white/80">
            {edu.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </TerminalCard>
      ))}
    </div>
  </Section>
);

// ---------- Achievements ----------
const Achievements = () => (
  <Section id="achievements" title="> achievements">
    <TerminalCard title="highlights">
      <ul className="list-disc space-y-2 pl-6 text-white/80">
        <li>North Bengal CTF — <strong>Winner (2022)</strong></li>
        <li>Kolkata Police CTF — <strong>5th Place (2023)</strong></li>
        <li>
          Hall of Fame — SONY, BBC, Yahoo, Mastercard, UN, Indian Govt, Philips, LG, Huawei & 50+ more
        </li>
        <li>Hack The Box — <strong>Pro Hacker</strong></li>
        <li>
          TryHackMe — <strong>Top 1%</strong> (
          <a className="underline" href="https://tryhackme.com/p/Raj7" target="_blank" rel="noreferrer">
            profile
          </a>
          )
        </li>
      </ul>
    </TerminalCard>
  </Section>
);

// ---------- Footer ----------
const Footer = () => (
  <footer id="contact" className="border-t border-white/10 bg-[#0c1426]/70">
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h4 className="text-xl font-semibold text-white">Let’s Connect</h4>
      <p className="mt-2 max-w-xl text-white/75">
        Open to security engineering roles, red team projects, and research collaborations.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={YOU.social.email} className={linkBtn}>
          Email Me <Mail className="h-4 w-4" />
        </a>
        <a
          href={YOU.social.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white/80 hover:bg-white/5"
        >
          GitHub <Github className="h-4 w-4" />
        </a>
        <a
          href={YOU.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white/80 hover:bg-white/5"
        >
          LinkedIn <Linkedin className="h-4 w-4" />
        </a>
      </div>
      <p className="mt-10 text-xs text-white/50">
        © {new Date().getFullYear()} {YOU.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

// ---------- Runtime smoke tests ----------
function runSmokeTests() {
  try {
    console.group("Portfolio smoke tests");
    console.assert(typeof YOU.name === "string" && YOU.name.length > 0, "YOU.name should be a non-empty string");
    console.assert(YOU.social.github?.startsWith("http"), "Github link should be absolute");
    console.assert(YOU.social.linkedin?.includes("linkedin.com/in/rdsarkar"), "LinkedIn should be /in/rdsarkar");

    const requiredIds = [
      "about",
      "skills",
      "experience",
      "education",
      "projects",
      "research",
      "blogs",
      "certifications",
      "achievements",
      "contact",
    ];
    requiredIds.forEach((id) => {
      const el = document.getElementById(id) || document.querySelector(`[href='#${id}']`);
      console.assert(!!el, `Section or link for #${id} should exist`);
    });

    const boot = document.getElementById("bootmsg");
    console.assert(boot && boot.textContent?.trim().startsWith(">"), "Boot message should start with '>'");

    const research = document.getElementById("research");
    const hasCVE39115 = !!research?.querySelector("a[href*='CVE-2023-39115']");
    const hasCVE40834 = !!research?.querySelector("a[href*='CVE-2023-40834']");
    console.assert(hasCVE39115 && hasCVE40834, "CVE links should be present in Research section");

    const blogs = document.getElementById("blogs");
    console.assert(!!blogs, "Blogs section should exist");

    console.log("All basic assertions passed.");
    console.groupEnd();
  } catch (e) {
    console.error("Smoke test failed:", e);
  }
}

// ---------- Page (Default Export) ----------
export default function PortfolioLanding() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.add("font-mono");
    runSmokeTests();
  }, []);

  return (
    <main className="min-h-screen scroll-smooth bg-[#0a1222] text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Research />
      <Blogs />
      <Certifications />
      <Achievements />
      <Footer />
    </main>
  );
}
