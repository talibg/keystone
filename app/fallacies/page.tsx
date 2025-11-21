import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllFallacies, getCategoryClasses } from "@/lib/fallacies";

export const metadata = {
  title: "List of Logical Fallacies – Logical Fallacies Guide",
  description:
    "Browse every fallacy in one place with quick definitions and category context.",
};

export default function FallaciesHubPage() {
  const fallacies = getAllFallacies();

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "All fallacies" }]}
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">
          List of Logical Fallacies
        </h1>
        <p className="text-muted-foreground">
          A single hub for every fallacy in the guide. Skim, scan, and dive
          deeper via the links below.
        </p>
        <div className="flex flex-wrap gap-2 text-sm text-primary">
          <Link href="/fallacies/master-list" className="hover:underline">
            Master list (extended)
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/fallacies/types" className="hover:underline">
            Types of fallacies
          </Link>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fallacies.map((fallacy) => (
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
              <p className="text-sm text-muted-foreground line-clamp-2">
                {fallacy.shortDefinition}
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
