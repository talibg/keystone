import type { Metadata } from "next"
import { FallacyCard } from "@/components/FallacyCard"
import { PageHeader } from "@/components/PageHeader"
import { getAllFallacies } from "@/lib/fallacies"
import { canonicalPath } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Fallacies in Media & Social Media – The Fallacy Guide",
  description:
    "See how common fallacies appear in news, advertising, and social feeds.",
  alternates: {
    canonical: canonicalPath("/fallacies/media")
  }
}

export default function MediaFallaciesPage() {
  const fallacies = getAllFallacies().slice(0, 9)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Fallacies in Media & Social Media"
        description="Track persuasive shortcuts used in headlines, ads, and quick takes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media & Social Media" }
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {fallacies.map((fallacy) => (
          <FallacyCard key={fallacy.slug} fallacy={fallacy} />
        ))}
      </div>
    </div>
  )
}
