import type { Metadata } from "next"
import { FallacyCard } from "@/components/FallacyCard"
import { PageHeader } from "@/components/PageHeader"
import { getAllFallacies } from "@/lib/fallacies"
import { canonicalPath } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Fallacies in Everyday Argument – The Fallacy Guide",
  description:
    "See common logical fallacies that show up in daily conversation, work, and media.",
  alternates: {
    canonical: canonicalPath("/fallacies/everyday")
  }
}

export default function EverydayFallaciesPage() {
  const fallacies = getAllFallacies().slice(0, 9)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Fallacies in Everyday Argument"
        description="Quick-access examples you might hear at work, in chats, or in casual debates."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Everyday argument fallacies" }
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
