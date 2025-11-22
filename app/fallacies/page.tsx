import { FallacyCard } from "@/components/FallacyCard";
import { PageHeader } from "@/components/PageHeader";
import { getAllFallacies } from "@/lib/fallacies";

export const metadata = {
  title: "All Fallacies",
  description:
    "A comprehensive directory of logical fallacies, categorized and explained.",
};

export default function FallaciesPage() {
  const fallacies = getAllFallacies();

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Fallacies"
        description="Browse the complete list of logical fallacies."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "All Fallacies" }]}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fallacies.map((fallacy) => (
          <FallacyCard key={fallacy.slug} fallacy={fallacy} />
        ))}
      </div>
    </div>
  );
}
