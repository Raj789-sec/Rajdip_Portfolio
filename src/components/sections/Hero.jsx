import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Shield, Terminal, Bug, Award } from "lucide-react";

const ROLES = [
  "Penetration Tester",
  "Red Teamer",
  "Security Researcher",
  "Bug Bounty Hunter",
];

const TERMINAL_LINES = [
  { prompt: true, text: "nmap -sV -A target.com" },
  { text: "443/tcp open  https  nginx/1.21", dim: true },
  { prompt: true, text: "sqlmap -u 'target.com/api?id=1'" },
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
      nodes = Array.from({ length: 70 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.3,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        o: Math.random() * 0.35 + 0.08,
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
          n.vx += (dx / dist) * 0.12;
          n.vy += (dy / dist) * 0.12;
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
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.07 * (1 - d / 130)})`;
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

/* ── Mini terminal (decorative, positioned) ── */
function MiniTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const delay = TERMINAL_LINES[visibleLines]?.prompt ? 1000 : 450;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm"
    >
      <div className="rounded-xl border border-white/[0.06] bg-[#0c0c14]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-violet-500/5">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04] bg-white/[0.02]">
          <div className="h-2 w-2 rounded-full bg-red-500/60" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
          <div className="h-2 w-2 rounded-full bg-green-500/60" />
          <span className="ml-1.5 text-[10px] text-white/20 font-mono">rajdip@kali:~</span>
        </div>
        <div className="p-3 font-mono text-[11px] leading-relaxed h-[160px] overflow-hidden">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex items-start gap-0 mb-0.5">
              {line.prompt && <span className="text-emerald-400 mr-1 shrink-0">$ </span>}
              <span className={
                line.success ? "text-emerald-400" :
                line.danger ? "text-red-400" :
                line.dim ? "text-white/20" :
                line.prompt ? "text-white/60" : "text-white/30"
              }>{line.text}</span>
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <div className="flex items-center">
              <span className="text-emerald-400">$ </span>
              <span className="w-1.5 h-3.5 bg-violet-400/50 ml-0.5 animate-pulse" />
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

/* ── Count-up ── */
function CountUp({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseInt(target, 10);
        if (isNaN(num)) { setVal(target); return; }
        const steps = 35;
        const inc = num / steps;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          setVal(Math.min(Math.round(inc * step), num));
          if (step >= steps) clearInterval(timer);
        }, 40);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{typeof val === "number" ? val : target}{suffix}</span>;
}

/* ── fade helper ── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ══════════════ HERO ══════════════ */
export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center px-6 overflow-hidden">
      <NetworkCanvas />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 60%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 60%)" }} />

      {/* Scan line */}
      <div className="hero-scanline absolute inset-0 pointer-events-none overflow-hidden z-[1]" />

      <div className="relative z-10 mx-auto max-w-6xl w-full py-20">
        {/* Center content */}
        <div className="text-center">
          {/* Status pill */}
          <motion.div {...fade(0.1)} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/[0.06] border border-violet-500/[0.12] backdrop-blur-md px-4 py-2 text-[12px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-white/60 font-medium">Available for engagements</span>
            </div>
          </motion.div>

          {/* Big name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.95]"
          >
            <GlitchText text="Rajdip" className="text-white" />
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dey Sarkar
            </span>
          </motion.h1>

          {/* Role typing */}
          <motion.div {...fade(0.5)} className="mt-6 flex justify-center items-center gap-2">
            <span className="text-violet-500/40 font-mono text-sm">&gt;</span>
            <div className="text-lg sm:text-xl text-white/40 font-light tracking-wide font-mono">
              <span>{role}</span>
              <span className="inline-block w-[2px] h-5 bg-violet-400/70 ml-0.5 animate-blink align-middle" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p {...fade(0.65)} className="mt-5 text-sm sm:text-[15px] text-white/25 max-w-xl mx-auto leading-relaxed">
            I break things so you can build them stronger. Offensive security across
            web, API, mobile, cloud & Active Directory.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.8)} className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#services"
               className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white overflow-hidden transition-all duration-500 hover:-translate-y-0.5">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-[length:200%_100%] animate-gradient-x rounded-full" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                View Services <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </a>
            <a href="#about"
               className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-8 py-4 text-sm font-medium text-white/50 hover:text-white hover:border-violet-500/25 hover:bg-violet-500/[0.04] backdrop-blur-sm transition-all duration-500">
              Learn More <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom section: Stats + Terminal side by side */}
        <motion.div {...fade(1.0)} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
          {/* Stats cards */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: <Terminal className="h-4 w-4" />, val: "4", suf: "+", lbl: "Years", color: "violet" },
              { icon: <Shield className="h-4 w-4" />, val: "80", suf: "+", lbl: "HoFs", color: "blue" },
              { icon: <Bug className="h-4 w-4" />, val: "2", suf: "", lbl: "CVEs", color: "amber" },
              { icon: <Award className="h-4 w-4" />, val: "6", suf: "", lbl: "Certs", color: "emerald" },
            ].map((s) => {
              const colors = {
                violet: "text-violet-400 bg-violet-500/10 border-violet-500/10",
                blue: "text-blue-400 bg-blue-500/10 border-blue-500/10",
                amber: "text-amber-400 bg-amber-500/10 border-amber-500/10",
                emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/10",
              };
              return (
                <div key={s.lbl}
                     className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-4 text-center hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 group">
                  <div className={`h-8 w-8 rounded-lg ${colors[s.color]} border flex items-center justify-center mx-auto mb-2.5`}>
                    {s.icon}
                  </div>
                  <div className="text-2xl font-extrabold text-white/90 group-hover:text-white transition-colors">
                    <CountUp target={s.val} suffix={s.suf} />
                  </div>
                  <div className="text-[9px] text-white/20 tracking-[0.15em] mt-1 uppercase font-medium">{s.lbl}</div>
                </div>
              );
            })}
          </div>

          {/* Terminal */}
          <div className="flex justify-center lg:justify-end">
            <MiniTerminal />
          </div>
        </motion.div>
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
          animation: glitch1 3.5s ease-in-out infinite;
        }
        .hero-glitch::after {
          color: #60a5fa;
          animation: glitch2 3.5s ease-in-out infinite;
        }
        @keyframes glitch1 {
          0%, 90%, 100% { opacity: 0; transform: translate(0); }
          91% { opacity: 0.8; transform: translate(-4px, 2px); }
          92% { opacity: 0; }
          94% { opacity: 0.6; transform: translate(3px, -1px); }
          95% { opacity: 0; }
        }
        @keyframes glitch2 {
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
        @keyframes scanmove {
          0% { top: -2px; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
