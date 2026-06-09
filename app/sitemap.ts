import type { MetadataRoute } from "next";
import { categories } from "@/content/categories";
import { getPublishedKeywords } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/blog", "/about"].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now
  }));

  const categoryRoutes = categories.map((category) => ({
    url: absoluteUrl(`/categories/${category.slug}`),
    lastModified: now
  }));

  const keywordRoutes = getPublishedKeywords().map((keyword) => ({
    url: absoluteUrl(`/keywords/${keyword.slug}`),
    lastModified: now
  }));

  return [...staticRoutes, ...categoryRoutes, ...keywordRoutes];
}
