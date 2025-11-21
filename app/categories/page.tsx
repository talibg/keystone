import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getCategoryClasses } from "@/lib/fallacies";

export const metadata: Metadata = {
  title: "Fallacy Categories – Logical Fallacies Guide",
  description:
    "Browse logical fallacy categories with concise descriptions and links to explore each set of fallacies.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Categories
        </p>
        <h1 className="text-3xl font-semibold text-slate-50">
          Fallacy Categories
        </h1>
        <p className="text-slate-300">
          Each category captures a common pattern of reasoning gone wrong.
          Explore them to see how the mistakes repeat across different
          arguments.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="flex h-full flex-col rounded-lg border border-slate-800 bg-slate-900/70 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-50">
                {category.name}
              </h2>
              <span
                className={`text-xs uppercase tracking-wide rounded-full border px-2 py-1 font-semibold ${getCategoryClasses(category.colorKey)}`}
              >
                {category.slug}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              {category.description}
            </p>
            <div className="mt-4">
              <Link
                href={`/categories/${category.slug}`}
                className="text-sm font-medium text-sky-200 hover:text-sky-100"
              >
                View fallacies in this category →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
