import { useEffect, useRef, useState, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const ROLES = ["Penetration Tester", "Red Teamer", "Security Researcher", "Bug Bounty Hunter"];
const CHARS = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF!@#$%^&*";
const NAME_TOP = "RAJDIP";
const NAME_BOT = "DEY SARKAR";

/* ── Matrix Rain Canvas ── */
const MatrixRain = memo(function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, cols, drops;
    const FONT = 14;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(canvas.offsetWidth / FONT);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    };

    resize();

    const draw = () => {
      ctx.fillStyle = "rgba(5,5,16,0.12)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.font = `${FONT}px "JetBrains Mono", monospace`;

      for (let i = 0; i < cols; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT;
        const y = drops[i] * FONT;

        // Head of the stream — bright cyan
        ctx.fillStyle = "rgba(0,240,255,0.9)";
        ctx.fillText(ch, x, y);

        // Trail — dimmer green-cyan
        ctx.fillStyle = "rgba(0,240,255,0.15)";
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y - FONT);
        ctx.fillStyle = "rgba(0,240,255,0.06)";
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y - FONT * 2);

        drops[i] += 0.6;

        if (y > canvas.offsetHeight && Math.random() > 0.985) {
          drops[i] = 0;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
});

/* ── Decryption text effect ── */
function useDecryptEffect(target, delay = 0, speed = 40) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let iters = 0;
    const maxIters = target.length * 3;
    let timer;

    const startTimer = setTimeout(() => {
      timer = setInterval(() => {
        iters++;
        const revealed = Math.floor((iters / maxIters) * target.length);
        let result = "";
        for (let i = 0; i < target.length; i++) {
          if (target[i] === " ") {
            result += " ";
          } else if (i < revealed) {
            result += target[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(result);
        if (revealed >= target.length) {
          clearInterval(timer);
          setDisplay(target);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => { clearTimeout(startTimer); clearInterval(timer); };
  }, [target, delay, speed]);

  return { display, done };
}

/* ── Typing role effect ── */
function useTypingEffect(words, typeSpeed = 80, deleteSpeed = 40, pause = 2200) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    const timeout = deleting ? deleteSpeed : text === word ? pause : typeSpeed;
    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") { setDeleting(false); setIdx((i) => (i + 1) % words.length); }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [text, idx, deleting, words, typeSpeed, deleteSpeed, pause]);
  return text;
}

/* ── Scan Line ── */
const ScanLine = memo(function ScanLine() {
  return <div className="hero-scanline absolute inset-0 pointer-events-none z-20" />;
});

/* ── Stats Row ── */
const stats = [
  { val: "4+", lbl: "Years" },
  { val: "80+", lbl: "HoFs" },
  { val: "2", lbl: "CVEs" },
  { val: "6", lbl: "Certs" },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const role = useTypingEffect(ROLES);
  const nameTop = useDecryptEffect(NAME_TOP, 400, 35);
  const nameBot = useDecryptEffect(NAME_BOT, 900, 35);

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Matrix rain */}
      <MatrixRain />

      {/* Top vignette */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-base via-base/50 to-transparent z-10 pointer-events-none" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-60 bg-gradient-to-t from-base via-base/60 to-transparent z-10 pointer-events-none" />
      {/* Side fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-[5]"
        style={{ background: "radial-gradient(circle, rgba(0,240,255,0.06), transparent 60%)" }} />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl w-full px-6">
        <div className="text-center">
          {/* Status badge */}
          <motion.div {...fade(0.1)} className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon-cyan/[0.04] border border-neon-cyan/[0.1] backdrop-blur-md px-4 py-2 text-[12px] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
              </span>
              <span className="text-white/50">status: <span className="text-neon-green">available</span></span>
            </div>
          </motion.div>

          {/* Prefix */}
          <motion.div {...fade(0.2)} className="mb-4">
            <span className="text-neon-cyan/30 font-mono text-sm tracking-widest">[ SYSTEM ACCESS GRANTED ]</span>
          </motion.div>

          {/* Decrypted Name */}
          <div className="mb-4">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] font-mono">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.3 }}
                className={`block ${nameTop.done ? "text-white" : "text-neon-cyan"} transition-colors duration-500`}>
                {nameTop.display || "\u00A0"}
              </motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.3 }}
                className={`block ${nameBot.done ? "gradient-text" : "text-neon-violet"} transition-colors duration-500`}>
                {nameBot.display || "\u00A0"}
              </motion.span>
            </h1>
          </div>

          {/* Role typing */}
          <motion.div {...fade(1.8)} className="mt-6 flex justify-center items-center gap-2">
            <span className="text-neon-cyan/40 font-mono text-sm">~/</span>
            <div className="text-lg sm:text-xl text-white/40 tracking-wide font-mono">
              {role}<span className="inline-block w-[2px] h-5 bg-neon-cyan/60 ml-0.5 hero-blink align-middle" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p {...fade(2.0)} className="mt-5 text-sm text-white/20 max-w-xl mx-auto leading-relaxed font-mono">
            I break things so you can build them stronger. Offensive security across web, API, mobile, cloud & Active Directory.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fade(2.2)} className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#services"
               className="group inline-flex items-center gap-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 px-7 py-3.5 text-sm font-mono font-semibold text-neon-cyan hover:bg-neon-cyan/15 hover:border-neon-cyan/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300">
              View Services <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#about"
               className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-7 py-3.5 text-sm font-mono text-white/40 hover:text-neon-cyan hover:border-cyan-500/15 transition-all duration-300">
              Learn More <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fade(2.4)} className="mt-12 flex justify-center">
            <div className="inline-flex items-center divide-x divide-cyan-500/[0.08]">
              {stats.map((s) => (
                <div key={s.lbl} className="px-6 sm:px-8 text-center">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-neon-cyan">{s.val}</div>
                  <div className="text-[9px] text-white/15 tracking-[0.15em] mt-0.5 uppercase font-mono">{s.lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[9px] text-white/10 uppercase tracking-[0.2em] font-mono group-hover:text-neon-cyan/30 transition-colors">scroll</span>
          <div className="h-7 w-4 rounded-full border border-white/10 flex justify-center pt-1 group-hover:border-neon-cyan/20 transition-colors">
            <div className="h-1.5 w-1 rounded-full bg-neon-cyan/30 animate-bounce" />
          </div>
        </a>
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .hero-blink { animation: blink 0.8s step-end infinite; }
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
        .hero-scanline::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,240,255,0.08), transparent);
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
