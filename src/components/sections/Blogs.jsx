import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock4, ArrowRight, ArrowUpRight } from "lucide-react";

const MEDIUM_USERNAME = "rajdipdeysarkar7";
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const RSS_PROXY = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;
const CACHE_KEY = "medium_cards_cache_v4";
const CACHE_TTL_MIN = 30;

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const fmtDate = (iso) => new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short" });
const readTime = (text) => `${Math.max(3, Math.round(text.split(/\s+/).filter(Boolean).length / 220))} min`;

const useMediumPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let ok = true;
    (async () => {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try { const { ts, items } = JSON.parse(cached); if ((Date.now() - ts) / 60000 < CACHE_TTL_MIN) { setPosts(items); setLoading(false); return; } } catch {}
      }
      try {
        const data = await (await fetch(RSS_PROXY)).json();
        const items = (data?.items || []).map((it) => { const c = stripHtml(it.description); return { title: it.title, url: it.link, date: it.pubDate, read: readTime(c), tags: it.categories || [], excerpt: c }; }).filter((it) => it.title);
        if (ok) { setPosts(items); localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), items })); }
      } catch (e) { console.error(e); } finally { if (ok) setLoading(false); }
    })();
    return () => { ok = false; };
  }, []);
  return { posts, loading };
};

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
});

export default function Blogs() {
  const { posts, loading } = useMediumPosts();
  const grid = useMemo(() => (loading ? Array.from({ length: 6 }) : posts), [loading, posts]);

  return (
    <section id="Blogs" className="relative mx-auto max-w-6xl px-6 py-24 scroll-mt-28">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <motion.div {...fade()}>
          <p className="section-label">Writing</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight">
            <span className="gradient-text">Latest articles.</span>
          </h2>
        </motion.div>
        <a href={`https://medium.com/@${MEDIUM_USERNAME}`} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 text-sm font-body text-white/25 hover:text-accent-indigo transition-colors">
          All posts <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {grid.map((p, i) =>
          loading ? (
            <div key={i} className="h-[240px] glass-card animate-pulse" />
          ) : (
            <motion.a key={p.url} href={p.url} target="_blank" rel="noreferrer" {...fade(0.05 * i)}
              className="glass-card p-7 flex flex-col group block">
              <div className="flex items-center gap-3 text-[11px] text-white/20 font-body mb-4">
                <span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {fmtDate(p.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock4 className="h-3 w-3" /> {p.read}</span>
              </div>
              <h3 className="text-[15px] font-heading font-semibold text-white/75 group-hover:text-accent-indigo transition-colors clamp-2 leading-snug">{p.title}</h3>
              <p className="mt-2 text-[12px] text-white/20 leading-relaxed clamp-3 flex-1 font-body">{p.excerpt}</p>
              {p.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-auto pt-5 flex items-center gap-1.5 text-xs font-body text-accent-indigo/40 group-hover:text-accent-indigo transition-colors">
                Read article <ArrowRight className="h-3 w-3" />
              </div>
            </motion.a>
          )
        )}
      </div>
    </section>
  );
}
