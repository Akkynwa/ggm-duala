// app/sitemap.ts
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ggmcameroun.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "fr"];

  // Define all routes
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/ministries", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/sermons", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/events", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/giving", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/watch-live", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/locations", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/greatness-kit", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/daily-confessions", priority: 0.7, changeFrequency: "daily" as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const url = `${siteUrl}/${locale}${route.path}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.path === "" ? route.priority : route.priority * 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${route.path}`])
          ),
        },
      });
    }
  }

  return sitemapEntries;
}