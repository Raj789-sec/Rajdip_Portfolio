import { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const ROLES = [
  "Penetration Tester",
  "Red Teamer",
  "Security Researcher",
  "Bug Bounty Hunter",
];

const TERMINAL_LINES = [
  { prompt: true, text: "whoami" },
  { text: "rajdip — Senior Security Consultant @ RedHunt Labs", success: true },
  { prompt: true, text: "cat skills.txt" },
  { text: "Web App | API | Mobile | Cloud | AD | Red Team", dim: true },
  { prompt: true, text: "nmap -sV -A target.com" },
  { text: "PORT    STATE  SERVICE   VERSION", dim: true },
  { text: "443/tcp open   https     nginx/1.21", dim: true },
  { text: "8080/tcp open  http-proxy Squid/4.6", dim: true },
  { prompt: true, text: "sqlmap -u 'https://target.com/api?id=1' --batch" },
  { text: "[*] testing connection to target URL", dim: true },
  { text: "[INFO] Parameter 'id' is vulnerable (boolean-based blind)", success: true },
  { text: "[INFO] fetching database names...", success: true },
  { prompt: true, text: "nuclei -t cves/ -target target.com -severity critical" },
  { text: "[critical] CVE-2023-XXXXX — RCE via deserialization", danger: true },
  { prompt: true, text: "echo '** Assessment Complete — Report Generated **'" },
  { text: "** Assessment Complete — Report Generated **", success: true },
];

/* ── typing hook ── */
function useTypingEffect(words, typeSpeed = 80, deleteSpeed = 40, pause = 2200) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const timeout = deleting ? deleteSpeed : text === word ? pause : typeSpeed;
    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, timeout);
    return () => clearTimeout(timer);
  }, [text, idx, deleting, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

/* ── Lightweight network canvas — 30 nodes, no mouse interaction ── */
const NetworkCanvas = memo(function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let nodes = [];
    const COUNT = 30;
    const LINK_DIST = 120;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        o: Math.random() * 0.25 + 0.08,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Move nodes
      for (let i = 0; i < COUNT; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = w;
        if (n.x > w) n.x = 0;
        if (n.y < 0) n.y = h;
        if (n.y > h) n.y = 0;
      }

      // Draw connections
      ctx.lineWidth = 0.4;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const d = Math.sqrt(d2);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - d / LINK_DIST)})`;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (let i = 0; i < COUNT; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, 6.283);
        ctx.fillStyle = `rgba(139,92,246,${n.o})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
});

/* ── Terminal ── */
const FullTerminal = memo(function FullTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const line = TERMINAL_LINES[visibleLines];
    const delay = line?.prompt ? 800 : 300;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className="rounded-2xl border border-white/[0.08] bg-[#0b0b14]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-violet-500/5">
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05] bg-white/[0.015]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-3 text-[12px] text-white/30 font-mono">rajdip@kali ~ </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-white/15 font-mono">
            <span>bash</span>
            <span>80x24</span>
          </div>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="p-5 font-mono text-[13px] sm:text-[14px] leading-[1.7] h-[280px] sm:h-[300px] overflow-y-auto scrollbar-hide">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex items-start">
              {line.prompt ? (
                <>
                  <span className="text-blue-400 shrink-0">rajdip</span>
                  <span className="text-white/20 shrink-0">@</span>
                  <span className="text-violet-400 shrink-0">kali</span>
                  <span className="text-white/20 shrink-0">:~$ </span>
                  <span className="text-white/70">{line.text}</span>
                </>
              ) : (
                <span className={
                  line.success ? "text-emerald-400" :
                  line.danger ? "text-red-400 font-semibold" :
                  line.dim ? "text-white/25" :
                  "text-white/40"
                }>{line.text}</span>
              )}
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <div className="flex items-center">
              <span className="text-blue-400">rajdip</span>
              <span className="text-white/20">@</span>
              <span className="text-violet-400">kali</span>
              <span className="text-white/20">:~$ </span>
              <span className="w-2 h-[18px] bg-violet-400/60 ml-0.5 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

/* ── Glitch text ── */
function GlitchText({ text, className }) {
  return (
    <span className={`hero-glitch relative inline-block ${className}`} data-text={text}>
      {text}
    </span>
  );
}

/* ── fade ── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ══════════════ HERO ══════════════ */
export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center px-6 overflow-hidden">
      <NetworkCanvas />

      {/* Ambient — pure CSS, no animation overhead */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 60%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        {/* ── TOP: Name & CTAs ── */}
        <div className="text-center mb-14">
          {/* Status */}
          <motion.div {...fade(0.1)} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/[0.06] border border-violet-500/[0.12] backdrop-blur-md px-4 py-2 text-[12px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-white/60 font-medium">Available for engagements</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.92]"
          >
            <GlitchText text="Rajdip" className="text-white" />
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dey Sarkar
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div {...fade(0.45)} className="mt-5 flex justify-center items-center gap-2">
            <span className="text-violet-500/40 font-mono text-sm">&gt;</span>
            <div className="text-lg sm:text-xl text-white/40 tracking-wide font-mono">
              {role}<span className="inline-block w-[2px] h-5 bg-violet-400/70 ml-0.5 animate-blink align-middle" />
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(0.6)} className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#services"
               className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-0.5">
              View Services <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#about"
               className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white/50 hover:text-white hover:border-violet-500/25 hover:bg-violet-500/[0.04] backdrop-blur-sm transition-all duration-300">
              Learn More <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Inline stats */}
          <motion.div {...fade(0.75)} className="mt-10 flex justify-center">
            <div className="inline-flex items-center divide-x divide-white/[0.06]">
              {[
                { val: "4+", lbl: "Years" },
                { val: "80+", lbl: "HoFs" },
                { val: "2", lbl: "CVEs" },
                { val: "6", lbl: "Certs" },
              ].map((s) => (
                <div key={s.lbl} className="px-6 sm:px-8 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white/80">{s.val}</div>
                  <div className="text-[9px] text-white/20 tracking-[0.15em] mt-0.5 uppercase">{s.lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM: Full-width terminal ── */}
        <div className="relative">
          <FullTerminal />
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[9px] text-white/15 uppercase tracking-[0.2em] group-hover:text-white/30 transition-colors">Scroll</span>
          <div className="h-7 w-4 rounded-full border border-white/10 flex justify-center pt-1 group-hover:border-violet-500/30 transition-colors">
            <div className="h-1.5 w-1 rounded-full bg-white/25 animate-bounce" />
          </div>
        </a>
      </motion.div>

      {/* Minimal styles — no scan line, no heavy animations */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.8s step-end infinite; }

        .hero-glitch { position: relative; }
        .hero-glitch::before,
        .hero-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0;
          will-change: opacity, transform;
        }
        .hero-glitch::before {
          color: #a78bfa;
          animation: g1 4s ease-in-out infinite;
        }
        .hero-glitch::after {
          color: #60a5fa;
          animation: g2 4s ease-in-out infinite;
        }
        @keyframes g1 {
          0%, 92%, 100% { opacity: 0; transform: translate3d(0,0,0); }
          93% { opacity: 0.7; transform: translate3d(-3px,1px,0); }
          94% { opacity: 0; }
        }
        @keyframes g2 {
          0%, 90%, 100% { opacity: 0; transform: translate3d(0,0,0); }
          91% { opacity: 0.6; transform: translate3d(3px,-1px,0); }
          92% { opacity: 0; }
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
