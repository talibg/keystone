import type { MetadataRoute } from "next"
import { getAllCategories, getAllFallacies } from "@/lib/fallacies"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const fallacies = getAllFallacies()
  const categories = getAllCategories()

  const fallacyUrls = fallacies.map((fallacy) => ({
    url: absoluteUrl(`/fallacies/${fallacy.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }))

  const categoryUrls = categories.map((category) => ({
    url: absoluteUrl(`/categories/${category.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }))

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/fallacies"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: absoluteUrl("/fallacies/master-list"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/fallacies/types"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: absoluteUrl("/fallacies/everyday"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/fallacies/politics"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/fallacies/media"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/categories"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: absoluteUrl("/search"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: absoluteUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    ...fallacyUrls,
    ...categoryUrls
  ]
}
