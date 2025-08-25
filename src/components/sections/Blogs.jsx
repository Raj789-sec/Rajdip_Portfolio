import React, { useEffect, useState } from "react";
import Section from "../atoms/Section";
import TerminalCard from "../atoms/TerminalCard";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rajdipdeysarkar7"
        );
        const data = await res.json();
        if (data?.items) {
          const mapped = data.items.map((item) => ({
            date: new Date(item.pubDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
            title: item.title,
            desc: item.description.replace(/<[^>]+>/g, "").slice(0, 140) + "…",
            tag: item.categories?.[0] || "Blog",
            read: "~5 min",
            link: item.link,
          }));
          setPosts(mapped);
        }
      } catch (err) {
        console.error("Error fetching Medium posts", err);
      }
    }
    fetchMediumPosts();
  }, []);

  return (
    <Section id="blogs" title="> blogs">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-lime-400/10 px-4 py-1 text-sm text-lime-300">All Posts ({posts.length})</span>
        <a
          href="https://medium.com/@rajdipdeysarkar7"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-1 text-sm text-white/80 hover:bg-white/5"
        >
          View on Medium
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <TerminalCard key={i} title={post.title}>
            <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
              <Calendar className="h-4 w-4" /> {post.date}
              <Clock className="ml-3 h-4 w-4" /> {post.read}
            </div>
            <h4 className="mb-1 text-lg font-semibold text-white">{post.title}</h4>
            <p className="mb-3 text-sm text-white/70">{post.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-lime-300">#{post.tag}</span>
              <a href={post.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-lime-300 hover:underline">
                Read Article <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
}
