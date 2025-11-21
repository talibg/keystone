import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllFallacies, getCategoryClasses } from "@/lib/fallacies";

export const metadata = {
  title: "Fallacies in Everyday Argument – Logical Fallacies Guide",
  description:
    "See common logical fallacies that show up in daily conversation, work, and media.",
};

export default function EverydayFallaciesPage() {
  const fallacies = getAllFallacies().slice(0, 9);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Everyday argument fallacies" },
        ]}
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">
          Fallacies in Everyday Argument
        </h1>
        <p className="text-muted-foreground">
          Quick-access examples you might hear at work, in chats, or in casual
          debates.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {fallacies.map((fallacy) => (
          <Link
            key={fallacy.slug}
            href={`/fallacies/${fallacy.slug}`}
            className="rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                {fallacy.name}
              </h2>
              <span
                className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${getCategoryClasses(
                  fallacy.category.colorKey,
                )}`}
              >
                {fallacy.category.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {fallacy.shortDefinition}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
