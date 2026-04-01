import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock4, Tag, ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";

const MEDIUM_USERNAME = "rajdipdeysarkar7";
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const RSS_PROXY = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;
const CACHE_KEY = "medium_cards_cache_v4";
const CACHE_TTL_MIN = 30;

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const fmtDate = (iso) => new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short" });
const readTime = (text) => {
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(3, Math.round(words / 220))} min read`;
};

const useMediumPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchPosts = async () => {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { ts, items } = JSON.parse(cached);
          if ((Date.now() - ts) / 60000 < CACHE_TTL_MIN) {
            setPosts(items);
            setLoading(false);
            return;
          }
        } catch (e) { /* ignore */ }
      }
      try {
        const res = await fetch(RSS_PROXY);
        const data = await res.json();
        const items = (data?.items || []).map((it) => {
          const clean = stripHtml(it.description);
          return { title: it.title, url: it.link, date: it.pubDate, read: readTime(clean), tags: it.categories || [], excerpt: clean };
        }).filter((it) => it.title);
        if (isMounted) {
          setPosts(items);
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), items }));
        }
      } catch (e) {
        console.error("Medium RSS fetch error:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchPosts();
    return () => { isMounted = false; };
  }, []);

  return { posts, loading };
};

export default function Blogs() {
  const { posts, loading } = useMediumPosts();
  const grid = useMemo(() => (loading ? Array.from({ length: 6 }) : posts), [loading, posts]);

  return (
    <section id="Blogs" className="relative mx-auto max-w-6xl px-6 py-24 scroll-mt-28">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-violet-400/80 tracking-wide uppercase mb-3">Writing</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Latest articles.</span>
          </h2>
        </div>
        <a
          href={`https://medium.com/@${MEDIUM_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          View all on Medium <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {grid.map((p, i) =>
          loading ? (
            <div key={i} className="h-[240px] rounded-2xl glass animate-pulse" />
          ) : (
            <BlogCard key={p.url} post={p} />
          )
        )}
      </div>
    </section>
  );
}

function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <div className="h-full rounded-2xl glass border-gradient overflow-hidden flex flex-col p-6 transition-all duration-300 hover:bg-white/[0.05]">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-white/30">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-violet-400/60" />
            {fmtDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock4 className="h-3.5 w-3.5" />
            {post.read}
          </span>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="text-[17px] font-semibold leading-snug text-white/90 hover:text-white transition-colors clamp-2"
        >
          {post.title}
        </a>

        <p className="mt-3 text-[13px] text-white/35 leading-relaxed clamp-3">{post.excerpt}</p>

        {post.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} className="rounded-full bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 text-[11px] text-white/30">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-5 flex justify-end">
          <a
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-violet-400/70 hover:text-violet-300 transition-colors"
          >
            Read article <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
