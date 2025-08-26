import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock4, Tag, ArrowRight, ExternalLink } from "lucide-react";

/* ── Config ─────────────────────────────────────────────────────────── */
const MEDIUM_USERNAME = "rajdipdeysarkar7";
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const RSS_PROXY = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;
const CACHE_KEY = "medium_cards_cache_v4";
const CACHE_TTL_MIN = 30;

/* ── Helpers ────────────────────────────────────────────────────────── */
const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short" });

const readTime = (text) => {
  const w = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(3, Math.round(w / 220))} min read`;
};

/* ── Component ──────────────────────────────────────────────────────── */
export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { ts, items } = JSON.parse(cached);
          if ((Date.now() - ts) / 60000 < CACHE_TTL_MIN) {
            setPosts(items);
            setLoading(false);
            return;
          }
        } catch {}
      }
      try {
        const res = await fetch(RSS_PROXY);
        const data = await res.json();
        const items = (data?.items || []).map((it) => {
          const clean = stripHtml(it.description);
          return {
            title: it.title,
            url: it.link,
            date: it.pubDate,
            read: readTime(clean),
            tags: it.categories || [],
            excerpt: clean,
          };
        });
        if (!mounted) return;
        setPosts(items);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), items }));
      } catch (e) {
        console.error("Medium RSS error:", e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  const grid = useMemo(() => (loading ? Array.from({ length: 6 }) : posts), [loading, posts]);

  return (
    <section id="Blogs" className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 scroll-mt-28">
      {/* ── Heading OUTSIDE the shell ── */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="grad-heading">&gt; Blogs</span>
        </h2>
        <div className="mt-4 mx-auto w-64 h-[5px] runner-track rounded-full overflow-hidden">
          <span className="runner" />
        </div>
      </div>

      {/* Shell */}
      <div className="section-shell relative rounded-3xl p-6 sm:p-10 overflow-visible">
        {/* Visit Medium */}
        <div className="mb-8 flex justify-center">
          <a
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Visit Medium Profile
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {grid.map((p, i) =>
            loading ? (
              <div key={i} className="h-[220px] rounded-3xl border border-white/10 bg-white/5 animate-pulse" />
            ) : (
              <BlogCard key={p.url} post={p} />
            )
          )}
        </div>
      </div>

      <StyleBlock />
    </section>
  );
}

/* ── Card (unchanged) ───────────────────────────── */
function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group h-full"
    >
      <div className="h-full rounded-2xl border border-white/10 bg-[#0b1220]/90 shadow-[0_8px_24px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col p-6 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(34,211,238,0.25)]">
        {/* Meta */}
        <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/70">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-cyan-400" />
            {fmtDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock4 className="h-4 w-4 text-violet-400" />
            {post.read}
          </span>
        </div>

        {/* Title */}
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="relative text-[18px] font-extrabold leading-snug text-white hover:text-cyan-300 transition-colors clamp-2"
        >
          {post.title}
          <span className="absolute left-0 -bottom-1 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"></span>
        </a>

        {/* Excerpt */}
        <p className="mt-3 text-[14.5px] text-white/70 leading-relaxed clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 text-[12px] px-2.5 py-1 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20 transition"
              >
                <Tag className="h-3.5 w-3.5" />
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-5 flex justify-end">
          <a
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 px-3.5 py-2 rounded-xl transition"
          >
            Read Article
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Local styles (unchanged) ───────────────────────────────────────── */
function StyleBlock() {
  return (
    <style>{`
      .section-shell { position: relative; }
      .section-shell::before {
        content: ""; position: absolute; inset: 0; border-radius: 1.5rem;
        padding: 1px; background: linear-gradient(90deg,#22d3ee55,#a855f755);
        -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
      }

      .grad-heading{
        background: linear-gradient(90deg,#22d3ee 0%,#7dd3fc 30%,#a78bfa 60%,#f0abfc 100%);
        background-size: 200% 100%;
        -webkit-background-clip: text; background-clip: text; color: transparent;
        animation: hueShift 10s linear infinite;
      }

      .runner-track { background: rgba(255,255,255,.12); }
      .runner { display:block; height:100%; width:30%; background:linear-gradient(90deg,#22d3ee,#a855f7); animation: dash 3s linear infinite; }

      .clamp-2{ display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
      .clamp-3{ display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }

      @keyframes hueShift { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
      @keyframes dash { 0%{ transform: translateX(-20%) } 100%{ transform: translateX(120%) } }
    `}</style>
  );
}
