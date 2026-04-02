import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const AVATAR =
  "https://api.dicebear.com/9.x/adventurer/svg?seed=rd&backgroundColor=b6e3f4,c0aede,d1d4f9&accessories=glasses&glasses=prescription01&mouth=smile";

const ROLES = [
  "Penetration Tester",
  "Red Teamer",
  "Security Researcher",
  "Bug Bounty Hunter",
];

const TERMINAL_LINES = [
  { prompt: true, text: "nmap -sV -A target.com" },
  { text: "PORT    STATE  SERVICE  VERSION", dim: true },
  { text: "443/tcp open   https    nginx/1.21", dim: true },
  { prompt: true, text: "sqlmap -u 'https://target.com/api?id=1'" },
  { text: "[INFO] Parameter 'id' is vulnerable", success: true },
  { prompt: true, text: "nuclei -t cves/ -target target.com" },
  { text: "[critical] CVE-2023-XXXXX detected", danger: true },
  { prompt: true, text: "echo 'Access Granted'" },
  { text: "Access Granted", success: true },
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
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1)
        );
      }
    }, timeout);
    return () => clearTimeout(timer);
  }, [text, idx, deleting, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

/* ── Animated terminal ── */
function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const delay = TERMINAL_LINES[visibleLines]?.prompt ? 900 : 400;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 rounded-3xl blur-3xl opacity-30 -z-10"
           style={{ background: "conic-gradient(from 180deg, #7c3aed, #3b82f6, #7c3aed)" }} />

      <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c14]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-violet-500/10">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 text-[11px] text-white/25 font-mono">rajdip@kali:~</span>
        </div>

        {/* Terminal body */}
        <div ref={containerRef} className="p-4 font-mono text-[12px] sm:text-[13px] leading-relaxed h-[220px] overflow-hidden">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex items-start gap-0 mb-1">
              {line.prompt && (
                <span className="text-violet-400 mr-1 shrink-0">
                  <span className="text-emerald-400">$</span>{" "}
                </span>
              )}
              <span
                className={
                  line.success
                    ? "text-emerald-400"
                    : line.danger
                    ? "text-red-400"
                    : line.dim
                    ? "text-white/25"
                    : line.prompt
                    ? "text-white/70"
                    : "text-white/40"
                }
              >
                {line.text}
              </span>
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <div className="flex items-center gap-0">
              <span className="text-emerald-400">$</span>
              <span className="w-2 h-4 bg-violet-400/50 ml-1 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Floating network nodes (canvas) ── */
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
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        o: Math.random() * 0.4 + 0.1,
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
        // Mouse repel
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          n.vx += (dx / dist) * 0.15;
          n.vy += (dy / dist) * 0.15;
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

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ddx = nodes[i].x - nodes[j].x;
          const ddy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
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

/* ── Glitch text effect ── */
function GlitchText({ text, className }) {
  return (
    <span className={`hero-glitch relative inline-block ${className}`} data-text={text}>
      {text}
    </span>
  );
}

/* ── stat counter with count-up ── */
function CountUp({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target, 10);
          if (isNaN(num)) { setVal(target); return; }
          const duration = 1500;
          const steps = 40;
          const increment = num / steps;
          let current = 0;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), num);
            setVal(current);
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  const isNum = !isNaN(parseInt(target, 10));

  return (
    <span ref={ref}>
      {isNum ? val : target}
      {suffix}
    </span>
  );
}

/* ── fade helper ── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ══════════════ HERO ══════════════ */
export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center px-6 overflow-hidden">
      {/* Interactive network canvas */}
      <NetworkCanvas />

      {/* Large ambient glows */}
      <div className="absolute top-0 left-1/3 w-[800px] h-[800px] pointer-events-none opacity-40"
           style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 60%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] pointer-events-none opacity-30"
           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent 60%)" }} />

      {/* Horizontal scan line */}
      <div className="hero-scanline absolute inset-0 pointer-events-none overflow-hidden z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
        {/* ── LEFT: TEXT ── */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div {...fade(0.1)} className="flex justify-center lg:justify-start mb-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/[0.06] border border-violet-500/[0.12] backdrop-blur-md px-4 py-2 text-[12px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-white/60 font-medium">Available for engagements</span>
            </div>
          </motion.div>

          {/* Name — Glitch on first, gradient on last */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tight leading-[1.05]"
          >
            <GlitchText text="Rajdip" className="text-white" />
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dey Sarkar
            </span>
          </motion.h1>

          {/* Typing role with terminal-style prefix */}
          <motion.div {...fade(0.5)} className="mt-5 flex justify-center lg:justify-start items-center gap-2">
            <span className="text-violet-400/50 font-mono text-sm">~/</span>
            <div className="text-lg sm:text-xl text-white/45 font-light tracking-wide font-mono">
              <span>{role}</span>
              <span className="inline-block w-[2px] h-5 bg-violet-400/70 ml-0.5 animate-blink align-middle" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p {...fade(0.65)} className="mt-5 text-sm sm:text-[15px] text-white/30 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I break things so you can build them stronger. Offensive security across web, API, mobile, cloud & Active Directory.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.8)} className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href="#services"
              className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-[length:200%_100%] animate-gradient-x rounded-full" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                View Services
                <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/50 hover:text-white hover:border-violet-500/25 hover:bg-violet-500/[0.04] backdrop-blur-sm transition-all duration-500"
            >
              Learn More <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div {...fade(0.95)} className="mt-12 inline-flex items-center gap-8 sm:gap-10">
            {[
              { val: "4", suf: "+", lbl: "YEARS" },
              { val: "80", suf: "+", lbl: "HOFs" },
              { val: "2", suf: "", lbl: "CVEs" },
              { val: "6", suf: "", lbl: "CERTS" },
            ].map((s) => (
              <div key={s.lbl} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                  <CountUp target={s.val} suffix={s.suf} />
                </div>
                <div className="text-[9px] text-white/20 tracking-[0.2em] mt-1 font-medium">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: TERMINAL + AVATAR ── */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
          {/* Avatar floating above terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute -inset-3 rounded-full border border-violet-500/20 animate-spin-slow" />
              <div className="absolute -inset-6 rounded-full border border-blue-500/10 animate-spin-reverse" />

              {/* Avatar */}
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-2 ring-violet-500/30 ring-offset-4 ring-offset-[#09090b] relative z-10">
                <img src={AVATAR} alt="Rajdip" className="h-full w-full object-cover" draggable="false" />
              </div>

              {/* Glow */}
              <div className="absolute -inset-8 rounded-full blur-3xl opacity-20 -z-10"
                   style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
            </div>
          </motion.div>

          {/* Terminal */}
          <TerminalWindow />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] text-white/15 uppercase tracking-[0.2em] group-hover:text-white/30 transition-colors">Scroll</span>
          <div className="h-8 w-4 rounded-full border border-white/10 flex justify-center pt-1.5 group-hover:border-violet-500/30 transition-colors">
            <div className="h-1.5 w-1 rounded-full bg-white/30 animate-bounce" />
          </div>
        </a>
      </motion.div>

      {/* ── Styles ── */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.8s ease-in-out infinite; }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }

        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        @keyframes spin-reverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
        .animate-spin-reverse { animation: spin-reverse 30s linear infinite; }

        /* Glitch effect */
        .hero-glitch {
          position: relative;
        }
        .hero-glitch::before,
        .hero-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        .hero-glitch::before {
          color: #a78bfa;
          animation: hero-glitch-1 4s ease-in-out infinite;
        }
        .hero-glitch::after {
          color: #60a5fa;
          animation: hero-glitch-2 4s ease-in-out infinite;
        }
        @keyframes hero-glitch-1 {
          0%, 92%, 100% { opacity: 0; transform: translate(0); }
          93% { opacity: 0.8; transform: translate(-3px, 1px); }
          94% { opacity: 0; }
          96% { opacity: 0.6; transform: translate(2px, -1px); }
          97% { opacity: 0; }
        }
        @keyframes hero-glitch-2 {
          0%, 90%, 100% { opacity: 0; transform: translate(0); }
          91% { opacity: 0.7; transform: translate(3px, -1px); }
          92% { opacity: 0; }
          95% { opacity: 0.5; transform: translate(-2px, 2px); }
          96% { opacity: 0; }
        }

        /* Scan line */
        .hero-scanline::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.15), transparent);
          animation: hero-scan 5s linear infinite;
        }
        @keyframes hero-scan {
          0% { top: -2px; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
