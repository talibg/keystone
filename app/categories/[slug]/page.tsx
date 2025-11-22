import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FallacyCategorySlug } from "@/data/fallacies";
import {
  getAllCategories,
  getCategoryBySlug,
  getCategoryClasses,
  getFallaciesByCategory,
} from "@/lib/fallacies";

type CategoryPageProps = {
  params: Promise<{ slug: FallacyCategorySlug }>;
};

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category not found – The Fallacy Guide",
    };
  }

  return {
    title: `${category.name} – The Fallacy Guide`,
    description: `${category.description} Explore the common mistakes in this group and how to spot them quickly.`,
    openGraph: {
      title: `${category.name} – The Fallacy Guide`,
      description: category.description,
      url: `https://fallacyguide.com/categories/${category.slug}`,
      images: [`https://fallacyguide.com/og/category/${category.slug}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} – The Fallacy Guide`,
      description: category.description,
      images: [`https://fallacyguide.com/og/category/${category.slug}`],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const fallacies = getFallaciesByCategory(slug);
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fallacyguide.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: "https://fallacyguide.com/categories",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `https://fallacyguide.com/categories/${category.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Category
        </p>
        <h1 className="text-3xl font-semibold text-foreground">
          {category.name}
        </h1>
        <p className="text-muted-foreground">{category.description}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">
          Fallacies in this category
        </h2>
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
      </section>
    </div>
  );
}
