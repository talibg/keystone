import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllFallacies, getCategoryClasses } from "@/lib/fallacies";

export const metadata: Metadata = {
  title: "Search – Logical Fallacies Guide",
  description:
    "Find logical fallacies by name, pattern, description, or recognition cues.",
};

type SearchPageProps = {
  searchParams: { q?: string };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q?.trim() ?? "";
  const searchTerm = query.toLowerCase();
  const allFallacies = getAllFallacies();

  const filtered = allFallacies.filter((fallacy) => {
    if (!searchTerm) return true;
    const haystack = [
      fallacy.name,
      fallacy.shortDefinition,
      fallacy.explanation,
      fallacy.pattern.join(" "),
      fallacy.recognitionPoints.join(" "),
      fallacy.responseStrategies.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(searchTerm);
  });

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />

      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">Search</h1>
        <p className="text-muted-foreground">
          Type a fallacy name, pattern, or cue to find the right entry.
        </p>
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
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Search
          </button>
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
            <Link
              key={fallacy.slug}
              href={`/fallacies/${fallacy.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {fallacy.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getCategoryClasses(
                      fallacy.category.colorKey,
                    )}`}
                  >
                    {fallacy.category.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {fallacy.shortDefinition}
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                View details →
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
