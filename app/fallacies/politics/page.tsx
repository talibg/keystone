import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllFallacies, getCategoryClasses } from "@/lib/fallacies";

export const metadata = {
  title: "Fallacies in Politics – Logical Fallacies Guide",
  description:
    "Examples and explanations of logical fallacies that surface in political debate.",
};

export default function PoliticsFallaciesPage() {
  const fallacies = getAllFallacies().slice(0, 9);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Politics", href: "/fallacies/politics" },
        ]}
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">
          Fallacies in Politics
        </h1>
        <p className="text-muted-foreground">
          Familiar patterns you will hear in campaigns, debates, and policy
          discussions.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {fallacies.map((fallacy) => (
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
    </div>
  );
}
