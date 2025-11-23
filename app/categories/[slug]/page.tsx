import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { FallacyCard } from "@/components/FallacyCard"
import type { FallacyCategorySlug } from "@/data/fallacies"
import {
  getAllCategories,
  getCategoryBySlug,
  getFallaciesByCategory
} from "@/lib/fallacies"
import { absoluteUrl, canonicalPath } from "@/lib/seo"

type CategoryPageProps = {
  params: Promise<{ slug: FallacyCategorySlug }>
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: "Category not found – The Fallacy Guide"
    }
  }

  const canonical = canonicalPath(`/categories/${category.slug}`)
  const ogImage = canonicalPath(`/og/category/${category.slug}`)

  return {
    title: `${category.name} – The Fallacy Guide`,
    description: `${category.description} Explore the common mistakes in this group and how to spot them quickly.`,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${category.name} – The Fallacy Guide`,
      description: category.description,
      url: canonical,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} – The Fallacy Guide`,
      description: category.description,
      images: [ogImage]
    }
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const fallacies = getFallaciesByCategory(slug)
  const canonical = canonicalPath(`/categories/${category.slug}`)
  const categoryUrl = absoluteUrl(canonical)
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/")
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: absoluteUrl("/categories")
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: categoryUrl
      }
    ]
  }

  return (
    <div className="space-y-6">
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.name }
        ]}
      />
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Category
        </p>
        <h1 className="text-3xl font-semibold text-foreground">
          {category.name}
        </h1>
        <p className="text-muted-foreground">{category.description}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">
          Fallacies in this category
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {fallacies.map((fallacy) => (
            <FallacyCard key={fallacy.slug} fallacy={fallacy} />
          ))}
        </div>
      </section>
    </div>
  )
}
