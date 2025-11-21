import { Breadcrumbs } from "@/components/Breadcrumbs";
import { masterList } from "@/data/masterList";

export const metadata = {
  title: "Master List of Logical Fallacies",
  description:
    "A comprehensive, category-organised master list of logical fallacies with concise summaries.",
};

export default function MasterListPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Master List of Logical Fallacies" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">
          Master List of Logical Fallacies
        </h1>
        <p className="text-muted-foreground">
          Scan the full catalogue of fallacies, organised by category, with
          quick summaries for identification. Use the main fallacy pages for
          deeper explanations, examples, and counters.
        </p>
      </header>

      <div className="space-y-10">
        {masterList.map((category) => (
          <section
            key={category.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                {category.title}
              </h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {category.entries.map((entry) => (
                <div
                  key={entry.name}
                  className="rounded-xl border border-border/80 bg-card/60 p-4 text-sm text-muted-foreground"
                >
                  <div className="font-semibold text-foreground">
                    {entry.name}
                  </div>
                  <div className="mt-1">{entry.summary}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
