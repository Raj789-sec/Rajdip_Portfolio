import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock4, Tag, ArrowRight, ExternalLink } from "lucide-react";

const MEDIUM_USERNAME = "rajdipdeysarkar7";
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const RSS_PROXY = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;
const CACHE_KEY = "medium_cards_cache_v4";
const CACHE_TTL_MIN = 30;

const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short" });

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
        } catch (e) {
          console.error("Failed to parse cached data:", e);
        }
      }

      try {
        const res = await fetch(RSS_PROXY);
        const data = await res.json();
        const items = (data?.items || [])
          .map((it) => {
            const clean = stripHtml(it.description);
            return {
              title: it.title,
              url: it.link,
              date: it.pubDate,
              read: readTime(clean),
              tags: it.categories || [],
              excerpt: clean,
            };
          })
          .filter((it) => it.title);

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
    <section id="Blogs" className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 scroll-mt-28">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Blogs
        </h2>
        <div className="mt-4 mx-auto h-0.5 w-16 rounded-full bg-blue-500" />
      </div>

      <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 sm:p-10">
        <div className="mb-8 flex justify-center">
          <a
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
          >
            Visit Medium Profile
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {grid.map((p, i) =>
            loading ? (
              <div key={i} className="h-[220px] rounded-xl border border-slate-700 bg-slate-800/50 animate-pulse" />
            ) : (
              <BlogCard key={p.url} post={p} />
            )
          )}
        </div>
      </div>

      <style>{`
        .clamp-2{ display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .clamp-3{ display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
      `}</style>
    </section>
  );
}

function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group h-full"
    >
      <div className="h-full rounded-xl border border-slate-700 bg-slate-800/60 overflow-hidden flex flex-col p-6 transition-colors hover:border-blue-500/30">
        <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-500">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-blue-400" />
            {fmtDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock4 className="h-4 w-4 text-slate-500" />
            {post.read}
          </span>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="text-[18px] font-bold leading-snug text-white hover:text-blue-400 transition-colors clamp-2"
        >
          {post.title}
        </a>

        <p className="mt-3 text-[14.5px] text-slate-400 leading-relaxed clamp-3">
          {post.excerpt}
        </p>

        {post.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-full border border-slate-600 text-slate-300 bg-slate-700/40"
              >
                <Tag className="h-3.5 w-3.5" />
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
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 px-3.5 py-2 rounded-lg transition-colors"
          >
            Read Article
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
