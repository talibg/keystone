import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FallacyCard } from "@/components/FallacyCard";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { getAllCategories, getAllFallacies } from "@/lib/fallacies";

export default function Home() {
  const categories = getAllCategories();
  const fallacies = getAllFallacies();
  const featuredFallacies = fallacies.slice(0, 9);

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
        urlTemplate: "https://fallacyguide.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="space-y-20">
        <HeroSection />

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

        <section id="all-fallacies" className="space-y-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">
                All Fallacies
              </h2>
              <p className="text-muted-foreground">
                Preview featured entries. Visit the full directory to explore
                everything.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full px-4">
              <Link href="/fallacies">
                View all fallacies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredFallacies.map((fallacy) => (
              <FallacyCard key={fallacy.slug} fallacy={fallacy} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
