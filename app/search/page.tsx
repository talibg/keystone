import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllFallacies, getCategoryClasses } from "@/lib/fallacies";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Find logical fallacies by name, pattern, description, or recognition cues.",
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
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
            <Link
              key={fallacy.slug}
              href={`/fallacies/${fallacy.slug}`}
              className="block h-full"
            >
              <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md group flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {fallacy.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`shrink-0 text-[10px] uppercase tracking-wider ${getCategoryClasses(
                        fallacy.category.colorKey,
                      )}`}
                    >
                      {fallacy.category.name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {fallacy.shortDefinition}
                  </p>
                </CardContent>
                <div className="px-6 pb-6 mt-auto flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View details →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
