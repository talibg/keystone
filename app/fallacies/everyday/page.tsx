import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllFallacies, getCategoryClasses } from "@/lib/fallacies";

export const metadata = {
  title: "Fallacies in Everyday Argument – The Fallacy Guide",
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
