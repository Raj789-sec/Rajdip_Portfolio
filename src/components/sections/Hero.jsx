import { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const ROLES = ["Penetration Tester", "Red Teamer", "Security Researcher", "Bug Bounty Hunter"];

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
  { prompt: true, text: "echo 'Assessment Complete — Report Generated'" },
  { text: "Assessment Complete — Report Generated", success: true },
];

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

const NetworkCanvas = memo(function NetworkCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, nodes = [];
    const COUNT = 30, LINK = 120;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const init = () => {
      resize();
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        o: Math.random() * 0.25 + 0.08,
      }));
    };
    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < COUNT; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) n.x = w; if (n.x > w) n.x = 0;
        if (n.y < 0) n.y = h; if (n.y > h) n.y = 0;
      }
      ctx.lineWidth = 0.4;
      for (let i = 0; i < COUNT; i++) for (let j = i + 1; j < COUNT; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y, d2 = dx * dx + dy * dy;
        if (d2 < LINK * LINK) {
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0,240,255,${0.06 * (1 - Math.sqrt(d2) / LINK)})`; ctx.stroke();
        }
      }
      for (let i = 0; i < COUNT; i++) {
        ctx.beginPath(); ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, 6.283);
        ctx.fillStyle = `rgba(0,240,255,${nodes[i].o})`; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
});

const FullTerminal = memo(function FullTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const bodyRef = useRef(null);
  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), TERMINAL_LINES[visibleLines]?.prompt ? 800 : 300);
    return () => clearTimeout(timer);
  }, [visibleLines]);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [visibleLines]);

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} className="w-full">
      <div className="rounded-xl border border-cyan-500/10 bg-[#060618]/90 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.04)]">
        <div className="flex items-center justify-between px-5 py-3 border-b border-cyan-500/[0.06] bg-cyan-500/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-3 text-[12px] text-neon-cyan/30 font-mono">rajdip@kali ~</span>
          </div>
          <span className="text-[10px] text-white/10 font-mono">bash</span>
        </div>
        <div ref={bodyRef} className="p-5 font-mono text-[13px] sm:text-[14px] leading-[1.7] h-[280px] sm:h-[300px] overflow-y-auto scrollbar-hide">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex items-start">
              {line.prompt ? (
                <><span className="text-neon-cyan/60 shrink-0">$&nbsp;</span><span className="text-white/60">{line.text}</span></>
              ) : (
                <span className={line.success ? "text-neon-green" : line.danger ? "text-neon-pink font-semibold" : line.dim ? "text-white/20" : "text-white/30"}>{line.text}</span>
              )}
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length && (
            <div className="flex items-center">
              <span className="text-neon-cyan/60">$&nbsp;</span>
              <span className="w-2 h-[18px] bg-neon-cyan/50 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

function GlitchText({ text, className }) {
  return <span className={`hero-glitch relative inline-block ${className}`} data-text={text}>{text}</span>;
}

const fade = (d = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } });

export default function Hero() {
  const role = useTypingEffect(ROLES);
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center px-6 overflow-hidden">
      <NetworkCanvas />
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,240,255,0.06), transparent 60%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05), transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        <div className="text-center mb-14">
          <motion.div {...fade(0.1)} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon-cyan/[0.04] border border-neon-cyan/[0.1] backdrop-blur-md px-4 py-2 text-[12px] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
              </span>
              <span className="text-white/50">status: <span className="text-neon-green">available</span></span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.92] font-mono">
            <GlitchText text="Rajdip" className="text-white" /><br />
            <span className="gradient-text">Dey Sarkar</span>
          </motion.h1>

          <motion.div {...fade(0.45)} className="mt-5 flex justify-center items-center gap-2">
            <span className="text-neon-cyan/30 font-mono text-sm">~/</span>
            <div className="text-lg sm:text-xl text-white/35 tracking-wide font-mono">
              {role}<span className="inline-block w-[2px] h-5 bg-neon-cyan/60 ml-0.5 hero-blink align-middle" />
            </div>
          </motion.div>

          <motion.p {...fade(0.6)} className="mt-5 text-sm text-white/20 max-w-xl mx-auto leading-relaxed">
            I break things so you can build them stronger. Offensive security across web, API, mobile, cloud & Active Directory.
          </motion.p>

          <motion.div {...fade(0.75)} className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#services"
               className="group inline-flex items-center gap-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 px-7 py-3.5 text-sm font-mono font-semibold text-neon-cyan hover:bg-neon-cyan/15 hover:border-neon-cyan/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)] transition-all duration-300">
              View Services <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#about"
               className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-7 py-3.5 text-sm font-mono text-white/40 hover:text-neon-cyan hover:border-cyan-500/15 transition-all duration-300">
              Learn More <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div {...fade(0.9)} className="mt-10 flex justify-center">
            <div className="inline-flex items-center divide-x divide-cyan-500/[0.08]">
              {[{ val: "4+", lbl: "Years" }, { val: "80+", lbl: "HoFs" }, { val: "2", lbl: "CVEs" }, { val: "6", lbl: "Certs" }].map((s) => (
                <div key={s.lbl} className="px-6 sm:px-8 text-center">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-neon-cyan">{s.val}</div>
                  <div className="text-[9px] text-white/15 tracking-[0.15em] mt-0.5 uppercase font-mono">{s.lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <FullTerminal />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
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
        .hero-glitch { position: relative; }
        .hero-glitch::before, .hero-glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; will-change: opacity, transform; }
        .hero-glitch::before { color: #00f0ff; animation: g1 4s ease-in-out infinite; }
        .hero-glitch::after { color: #a855f7; animation: g2 4s ease-in-out infinite; }
        @keyframes g1 { 0%, 92%, 100% { opacity: 0; transform: translate3d(0,0,0); } 93% { opacity: 0.7; transform: translate3d(-3px,1px,0); } 94% { opacity: 0; } }
        @keyframes g2 { 0%, 90%, 100% { opacity: 0; transform: translate3d(0,0,0); } 91% { opacity: 0.6; transform: translate3d(3px,-1px,0); } 92% { opacity: 0; } }
      `}</style>
    </section>
  );
}
