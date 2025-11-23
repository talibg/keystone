import type { Metadata } from "next"
import Link from "next/link"
import { FallacyCard } from "@/components/FallacyCard"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { getAllFallacies } from "@/lib/fallacies"
import { canonicalPath } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Search",
  description:
    "Find logical fallacies by name, pattern, description, or recognition cues.",
  alternates: {
    canonical: canonicalPath("/search")
  }
}

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams
  const query = q?.trim() ?? ""
  const searchTerm = query.toLowerCase()
  const allFallacies = getAllFallacies()

  const filtered = allFallacies.filter((fallacy) => {
    if (!searchTerm) return true
    const haystack = [
      fallacy.name,
      fallacy.shortDefinition,
      fallacy.explanation,
      fallacy.pattern.join(" "),
      fallacy.recognitionPoints.join(" "),
      fallacy.responseStrategies.join(" ")
    ]
      .join(" ")
      .toLowerCase()
    return haystack.includes(searchTerm)
  })

  return (
    <div className="space-y-8">
      <PageHeader
        title="Search"
        description="Type a fallacy name, pattern, or cue to find the right entry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />

      <header className="space-y-2">
        <form
          action="/search"
          className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center"
        >
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="e.g. ad hominem, slippery slope, appeal"
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
          />
          <Button type="submit" size="lg" className="px-6">
            Search
          </Button>
        </form>
        <div className="text-sm text-muted-foreground">
          {filtered.length} result{filtered.length === 1 ? "" : "s"}
          {query ? ` for "${query}"` : ""}
        </div>
      </header>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-6 text-muted-foreground">
          No fallacies found. Try another keyword or browse the{" "}
          <Link href="/fallacies" className="text-primary hover:underline">
            full directory
          </Link>
          .
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((fallacy) => (
            <FallacyCard key={fallacy.slug} fallacy={fallacy} />
          ))}
        </div>
      )}
    </div>
  )
}
