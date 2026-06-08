import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog";

export const dynamicParams = true;
export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

// ── CRM post type ──────────────────────────────────────────────
interface CRMPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[] | null;
  published_at: string;
  author: string;
  meta_title?: string;
  meta_description?: string;
  view_count?: number;
}

async function fetchCRMPost(slug: string): Promise<CRMPost | null> {
  try {
    const res = await fetch(
      `https://leads.atraelab.com/api/public/blog/${slug}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const { post } = (await res.json()) as { post?: CRMPost };
    return post ?? null;
  } catch {
    return null;
  }
}

async function trackView(slug: string): Promise<void> {
  try {
    await fetch(`https://leads.atraelab.com/api/public/blog/${slug}/view`, {
      method: "POST",
      cache: "no-store",
    });
  } catch {
    // non-blocking
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Try CRM first
  const crmPost = await fetchCRMPost(params.slug);
  if (crmPost) {
    return {
      title: crmPost.meta_title || `${crmPost.title} | AtraeLab Blog`,
      description: crmPost.meta_description || crmPost.excerpt,
      openGraph: {
        title: crmPost.title,
        description: crmPost.excerpt,
        type: "article",
        publishedTime: crmPost.published_at,
        authors: [crmPost.author],
        tags: crmPost.tags ?? [],
      },
    };
  }
  // Fall back to static
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | AtraeLab Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

// Lazy import MDX content
async function getMDXContent(slug: string) {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    return mod.default;
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  // Try CRM post first
  const crmPost = await fetchCRMPost(params.slug);

  if (crmPost) {
    // Track view (fire-and-forget)
    void trackView(params.slug);

    const tags = crmPost.tags ?? [crmPost.category ?? "Blog"];
    const schemaOrg = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: crmPost.title,
      description: crmPost.excerpt,
      author: { "@type": "Organization", name: crmPost.author },
      datePublished: crmPost.published_at,
      publisher: {
        "@type": "Organization",
        name: "AtraeLab",
        url: "https://atraelab.com",
      },
    };

    return (
      <main className="relative min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        {/* Hero */}
        <div
          className="relative pt-24 pb-14"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(200,240,0,0.05) 0%, transparent 60%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-[#a1a1aa] mb-8">
              <Link href="/" className="hover:text-[#c8f000] transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#c8f000] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white truncate">{crmPost.title}</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(200,240,0,0.1)",
                    border: "1px solid rgba(200,240,0,0.25)",
                    color: "#c8f000",
                  }}
                >
                  {tag}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              {crmPost.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-[#a1a1aa]">
              <span>{crmPost.author}</span>
              <span>·</span>
              <span>
                {new Date(crmPost.published_at).toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {crmPost.view_count != null && (
                <>
                  <span>·</span>
                  <span>{crmPost.view_count} vistas</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
          <div
            className="p-8 rounded-2xl blog-content"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#EEF0E8",
            }}
            dangerouslySetInnerHTML={{ __html: crmPost.content }}
          />

          {/* CTA */}
          <div
            className="mt-12 p-8 rounded-2xl text-center"
            style={{
              background: "rgba(200,240,0,0.04)",
              border: "1px solid rgba(200,240,0,0.15)",
            }}
          >
            <h3 className="text-white font-black text-2xl mb-2">
              ¿Querés aplicar esto a tu negocio?
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

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-[#a1a1aa] hover:text-[#c8f000] text-sm font-medium transition-colors"
            >
              ← Ver todos los artículos
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Fallback: static MDX post ──────────────────────────────────
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const Content = await getMDXContent(params.slug);
  if (!Content) notFound();

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "AtraeLab",
      url: "https://atraelab.com",
    },
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div
        className="relative pt-24 pb-14"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(200,240,0,0.05) 0%, transparent 60%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-[#a1a1aa] mb-8">
            <Link href="/" className="hover:text-[#c8f000] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#c8f000] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white truncate">{post.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(200,240,0,0.1)",
                  border: "1px solid rgba(200,240,0,0.25)",
                  color: "#c8f000",
                }}
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#a1a1aa]">
            <span>{post.author}</span>
            <span>·</span>
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
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <div
          className="p-8 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Content />
        </div>

        <div
          className="mt-12 p-8 rounded-2xl text-center"
          style={{
            background: "rgba(200,240,0,0.04)",
            border: "1px solid rgba(200,240,0,0.15)",
          }}
        >
          <h3 className="text-white font-black text-2xl mb-2">
            ¿Querés aplicar esto a tu negocio?
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

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-[#a1a1aa] hover:text-[#c8f000] text-sm font-medium transition-colors"
          >
            ← Ver todos los artículos
          </Link>
        </div>
      </div>
    </main>
  );
}
