import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
async function getPostContent(slug: string) {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    return mod.default;
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const Content = await getPostContent(params.slug);
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

      {/* Hero */}
      <div
        className="relative pt-24 pb-14"
        style={{ background: "radial-gradient(ellipse at top, rgba(200,240,0,0.05) 0%, transparent 60%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#a1a1aa] mb-8">
            <Link href="/" className="hover:text-[#c8f000] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#c8f000] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate">{post.title}</span>
          </nav>

          {/* Tags */}
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

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
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

      {/* Content */}
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
            Agendá una auditoría gratuita y te mostramos cómo escalar tus campañas.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#c8f000] text-black font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full"
            style={{ boxShadow: "0 0 30px rgba(200,240,0,0.3)" }}
          >
            Auditoría gratuita →
          </Link>
        </div>

        {/* Back to blog */}
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
