import { FallacyCard } from "@/components/FallacyCard";
import { PageHeader } from "@/components/PageHeader";
import { getAllFallacies } from "@/lib/fallacies";

export const metadata = {
  title: "Fallacies in Politics – The Fallacy Guide",
  description:
    "Examples and explanations of logical fallacies that surface in political debate.",
};

export default function PoliticsFallaciesPage() {
  const fallacies = getAllFallacies().slice(0, 9);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Fallacies in Politics"
        description="Familiar patterns you will hear in campaigns, debates, and policy discussions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Politics", href: "/fallacies/politics" },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {fallacies.map((fallacy) => (
          <FallacyCard key={fallacy.slug} fallacy={fallacy} />
        ))}
      </div>
    </div>
  );
}
