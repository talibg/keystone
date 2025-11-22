import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { HeroSection } from "@/components/home/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getAllCategories,
  getAllFallacies,
  getCategoryClasses,
} from "@/lib/fallacies";

export default function Home() {
  const categories = getAllCategories();
  const fallacies = getAllFallacies();
  const featuredFallacies = fallacies.slice(0, 9);

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Fallacy Guide",
    description:
      "The most comprehensive and modern guide to logical fallacies. Learn to spot, understand, and counter common errors in reasoning.",
    url: "https://fallacyguide.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://fallacyguide.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <section className="space-y-8">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">
                Explore by Category
              </h2>
              <p className="text-muted-foreground">
                Understand fallacies by their fundamental nature.
              </p>
            </div>
            <Link
              href="/categories"
              className="group flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <CategoriesGrid categories={categories} />
        </section>

        {/* All Fallacies Section */}
        <section id="all-fallacies" className="space-y-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">All Fallacies</h2>
              <p className="text-muted-foreground">
                Preview featured entries. Visit the full directory to explore
                everything.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-4"
            >
              <Link href="/fallacies">
                View all fallacies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredFallacies.map((fallacy) => (
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
        </section>
      </div>
    </>
  );
}
