import { posts } from "@/app/datas/blog/posts";
import { type MetadataRoute } from "next";

export async function GET(): Promise<Response> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://www.webcreatis.fr/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.webcreatis.fr/kap-numerik",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.webcreatis.fr/creation-site-internet",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.webcreatis.fr/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.webcreatis.fr/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const dynamicBlogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.webcreatis.fr/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const allRoutes = [...staticRoutes, ...dynamicBlogRoutes];

  const body = allRoutes
    .map(
      (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
