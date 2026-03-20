import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | AtraeLab — Performance Marketing",
  description:
    "Artículos, guías y estrategias de performance marketing. Meta Ads, Google Ads, TikTok Ads y Network Marketing para escalar negocios en LATAM.",
};

const tagColors: Record<string, string> = {
  "Meta Ads": "#0866FF",
  "Google Ads": "#4285F4",
  "TikTok Ads": "#69C9D0",
  ROAS: "#c8f000",
  Optimización: "#c8f000",
  Estrategia: "#c8f000",
  LATAM: "#c8f000",
  Video: "#c8f000",
  "Network Marketing": "#c8f000",
  Leads: "#c8f000",
  "Pauta Digital": "#c8f000",
};

function TagBadge({ tag }: { tag: string }) {
  const color = tagColors[tag] ?? "#a1a1aa";
  return (
    <span
      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
      style={{
        background: `${color}18`,
        border: `1px solid ${color}35`,
        color,
      }}
    >
      {tag}
    </span>
  );
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const activeTag = searchParams.tag ?? null;

  // All unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <main className="relative min-h-screen">
      {/* Hero header */}
      <div
        className="relative py-20 pt-32"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(200,240,0,0.06) 0%, transparent 60%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8f000]" />
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Ideas que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c8f000, #a8d400)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              escalan
            </span>
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto">
            Guías prácticas, estrategias probadas y casos reales de performance
            marketing para el mercado latinoamericano.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Tag filters */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          <Link
            href="/blog"
            className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
              !activeTag
                ? "bg-[#c8f000] text-black"
                : "bg-white/5 border border-white/10 text-[#a1a1aa] hover:text-white hover:border-white/20"
            }`}
          >
            Todos
          </Link>
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                activeTag === tag
                  ? "bg-[#c8f000] text-black"
                  : "bg-white/5 border border-white/10 text-[#a1a1aa] hover:text-white hover:border-white/20"
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article
                className="h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  willChange: "transform",
                }}
              >
                {/* Image placeholder */}
                <div
                  className="w-full h-40 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: "rgba(200,240,0,0.06)", border: "1px solid rgba(200,240,0,0.1)" }}
                >
                  <span className="text-4xl">
                    {post.tags[0] === "Meta Ads"
                      ? "📘"
                      : post.tags[0] === "Google Ads"
                      ? "🔍"
                      : post.tags[0] === "TikTok Ads"
                      ? "🎵"
                      : "🌐"}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-white font-black text-lg leading-tight mb-2 group-hover:text-[#c8f000] transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                  <div className="flex items-center gap-3">
                    <span>{new Date(post.date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime} de lectura</span>
                  </div>
                  <span className="text-[#c8f000] font-bold group-hover:gap-2 flex items-center gap-1 transition-all duration-200">
                    Leer <span>→</span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: "rgba(200,240,0,0.04)",
            border: "1px solid rgba(200,240,0,0.15)",
          }}
        >
          <h3 className="text-white font-black text-2xl mb-2">
            ¿Querés resultados como estos?
          </h3>
          <p className="text-[#a1a1aa] mb-6">
            Auditoría gratuita de 30 minutos. Sin compromiso.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full"
            style={{ boxShadow: "0 0 30px rgba(200,240,0,0.3)" }}
          >
            Auditoría gratuita →
          </Link>
        </div>
      </div>
    </main>
  );
}
