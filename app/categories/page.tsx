import { LayersIcon } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllCategories } from "@/lib/fallacies";

export const metadata = {
  title: "Categories – Logical Fallacies Guide",
  description:
    "Explore logical fallacies by category to understand how they group together.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Categories" }]}
      />
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">Categories</h1>
        <p className="text-muted-foreground">
          Fallacies are grouped by the type of error they represent.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="block h-full"
          >
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md group">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                  <LayersIcon className="h-5 w-5" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2 text-muted-foreground text-sm">
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
