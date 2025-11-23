import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { categories } from "@/data/fallacies"
import { canonicalPath } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Fallacies in Everyday Argument",
  description:
    "Explore fallacies grouped by type and category for faster scanning.",
  alternates: {
    canonical: canonicalPath("/fallacies/types")
  }
}

export default function FallacyTypesPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Types of fallacies" }]}
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">
          Types of Logical Fallacies
        </h1>
        <p className="text-muted-foreground">
          Jump into each category to see patterns, examples, and how to counter
          them.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            <h2 className="text-lg font-semibold text-foreground">
              {category.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
