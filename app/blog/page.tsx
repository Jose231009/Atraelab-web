import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | AtraeLab — Estrategias para Network Marketing",
  description:
    "Artículos, guías y estrategias de captación de leads para líderes de network marketing. Meta Ads, Google Ads, CRM y duplicación de red.",
};

// ── CRM post type ──────────────────────────────────────────────
interface CRMPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[] | null;
  published_at: string;
  author: string;
  cover_image_url?: string | null;
}

async function getCRMPosts(): Promise<CRMPost[]> {
  try {
    const res = await fetch(
      "https://leads.atraelab.com/api/public/blog?limit=20",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const { posts } = (await res.json()) as { posts?: CRMPost[] };
    return posts ?? [];
  } catch {
    return [];
  }
}

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
  "network-marketing": "#c8f000",
  Leads: "#c8f000",
  "Pauta Digital": "#c8f000",
  inCruises: "#c8f000",
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

function postEmoji(tags: string[]): string {
  if (tags.some((t) => t.toLowerCase().includes("meta"))) return "📘";
  if (tags.some((t) => t.toLowerCase().includes("google"))) return "🔍";
  if (tags.some((t) => t.toLowerCase().includes("tiktok"))) return "🎵";
  if (tags.some((t) => t.toLowerCase().includes("incruises"))) return "🚢";
  if (tags.some((t) => t.toLowerCase().includes("network"))) return "🌐";
  return "✍️";
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string; category?: string };
}) {
  const activeTag = searchParams.tag ?? null;

  // Fetch CRM posts; merge with local static posts (CRM takes priority)
  const crmPosts = await getCRMPosts();
  const crmSlugs = new Set(crmPosts.map((p) => p.slug));

  // Build unified list: CRM first, then static posts not yet in CRM
  type UnifiedPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    readTime: string;
    tags: string[];
    fromCRM: boolean;
    category?: string;
  };

  const unifiedPosts: UnifiedPost[] = [
    ...crmPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.excerpt,
      date: p.published_at,
      author: p.author,
      readTime: "5 min",
      tags: p.tags ?? [p.category ?? "Blog"],
      fromCRM: true,
      category: p.category,
    })),
    ...blogPosts
      .filter((p) => !crmSlugs.has(p.slug))
      .map((p) => ({ ...p, fromCRM: false })),
  ];

  const allTags = Array.from(new Set(unifiedPosts.flatMap((p) => p.tags)));

  const filtered = activeTag
    ? unifiedPosts.filter((p) => p.tags.includes(activeTag))
    : unifiedPosts;

  return (
    <main className="relative min-h-screen">
      {/* Hero */}
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
            <span className="text-[#c8f000] text-xs font-bold uppercase tracking-widest">
              Blog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Estrategias para{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c8f000, #a8d400)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              network marketing
            </span>
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto">
            Guías prácticas, sistemas probados y casos reales de captación
            digital para líderes de red en LATAM.
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
          {allTags.slice(0, 8).map((tag) => (
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
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article
                className="h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(26,39,64,0.7)",
                  border: "1px solid rgba(200,216,75,0.13)",
                  willChange: "transform",
                }}
              >
                {/* Placeholder image */}
                <div
                  className="w-full h-40 rounded-xl mb-5 flex items-center justify-center"
                  style={{
                    background: "rgba(200,216,75,0.06)",
                    border: "1px solid rgba(200,216,75,0.1)",
                  }}
                >
                  <span className="text-4xl">{postEmoji(post.tags)}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-white font-black text-lg leading-tight mb-2 group-hover:text-[#c8f000] transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#7A8FA8] text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                  <div className="flex items-center gap-3">
                    <span>
                      {new Date(post.date).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span>{post.readTime} de lectura</span>
                  </div>
                  <span className="text-[#c8f000] font-bold flex items-center gap-1">
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
            Diagnóstico gratuito de tu captación. Sin compromiso.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full"
            style={{ boxShadow: "0 0 30px rgba(200,240,0,0.3)" }}
          >
            Quiero el diagnóstico →
          </Link>
        </div>
      </div>
    </main>
  );
}
