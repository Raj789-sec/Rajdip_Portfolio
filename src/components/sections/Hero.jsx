import { useEffect, useRef, useState } from "react";
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

/* ── Interactive network canvas ── */
function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let nodes = [];
    let mouse = { x: -999, y: -999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      nodes = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.3 + 0.08,
      }));
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse = { x: -999, y: -999 }; };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((n) => {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          n.vx += (dx / dist) * 0.1;
          n.vy += (dy / dist) * 0.1;
        }
        n.vx *= 0.99;
        n.vy *= 0.99;
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = w;
        if (n.x > w) n.x = 0;
        if (n.y < 0) n.y = h;
        if (n.y > h) n.y = 0;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${n.o})`;
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ddx = nodes[i].x - nodes[j].x;
          const ddy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

/* ── Full terminal ── */
function FullTerminal() {
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
      {/* Glow */}
      <div className="absolute -inset-3 rounded-2xl blur-2xl opacity-20 pointer-events-none -z-10"
           style={{ background: "conic-gradient(from 200deg, #7c3aed, #3b82f6, #7c3aed)" }} />

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
}

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

      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 60%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 60%)" }} />

      {/* Scan line */}
      <div className="hero-scanline absolute inset-0 pointer-events-none overflow-hidden z-[1]" />

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
               className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white overflow-hidden transition-all duration-500 hover:-translate-y-0.5">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-[length:200%_100%] animate-gradient-x rounded-full" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                View Services <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </a>
            <a href="#about"
               className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white/50 hover:text-white hover:border-violet-500/25 hover:bg-violet-500/[0.04] backdrop-blur-sm transition-all duration-500">
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

      {/* Styles */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.8s ease-in-out infinite; }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }

        .hero-glitch { position: relative; }
        .hero-glitch::before,
        .hero-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0;
        }
        .hero-glitch::before {
          color: #a78bfa;
          animation: g1 3.5s ease-in-out infinite;
        }
        .hero-glitch::after {
          color: #60a5fa;
          animation: g2 3.5s ease-in-out infinite;
        }
        @keyframes g1 {
          0%, 90%, 100% { opacity: 0; transform: translate(0); }
          91% { opacity: 0.8; transform: translate(-4px, 2px); }
          92% { opacity: 0; }
          94% { opacity: 0.6; transform: translate(3px, -1px); }
          95% { opacity: 0; }
        }
        @keyframes g2 {
          0%, 88%, 100% { opacity: 0; transform: translate(0); }
          89% { opacity: 0.7; transform: translate(4px, -2px); }
          90% { opacity: 0; }
          93% { opacity: 0.5; transform: translate(-3px, 2px); }
          94% { opacity: 0; }
        }

        .hero-scanline::after {
          content: "";
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.12), transparent);
          animation: scanmove 6s linear infinite;
        }
        @keyframes scanmove { 0% { top: -2px; } 100% { top: 100%; } }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
