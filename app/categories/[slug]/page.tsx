import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
      title: "Category not found – Logical Fallacies Guide",
    };
  }

  return {
    title: `${category.name} – Logical Fallacies Guide`,
    description: `${category.description} Explore the common mistakes in this group and how to spot them quickly.`,
    openGraph: {
      title: `${category.name} – Logical Fallacies Guide`,
      description: category.description,
      url: `https://logicalfallacies.guide/categories/${category.slug}`,
      images: [`https://logicalfallacies.guide/og/category/${category.slug}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} – Logical Fallacies Guide`,
      description: category.description,
      images: [`https://logicalfallacies.guide/og/category/${category.slug}`],
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
        item: "https://logicalfallacies.guide",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: "https://logicalfallacies.guide/categories",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `https://logicalfallacies.guide/categories/${category.slug}`,
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
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Category
        </p>
        <h1 className="text-3xl font-semibold text-slate-50">
          {category.name}
        </h1>
        <p className="text-slate-300">{category.description}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-50">
          Fallacies in this category
        </h2>
        <div className="space-y-3">
          {fallacies.map((fallacy) => (
            <div
              key={fallacy.slug}
              className="rounded-lg border border-slate-800 bg-slate-900/70 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <Link
                  href={`/fallacies/${fallacy.slug}`}
                  className="text-lg font-semibold text-sky-200 hover:text-sky-100"
                >
                  {fallacy.name}
                </Link>
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-1 font-semibold ${getCategoryClasses(fallacy.category.colorKey)}`}
                  >
                    {fallacy.category.name}
                  </span>
                </span>
              </div>
              <p className="mt-2 text-slate-300">{fallacy.shortDefinition}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
