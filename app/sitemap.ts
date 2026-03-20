import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atraelab.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/servicios/meta-ads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios/google-ads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios/tiktok-ads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/legal/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/terminos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
