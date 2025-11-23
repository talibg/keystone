import Link from "next/link"
import type { ReactNode } from "react"
import { CategoryBadge } from "@/components/CategoryBadge"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import type { Fallacy } from "@/data/fallacies"

type Props = {
  fallacy: Fallacy
  badge?: ReactNode
  showDetails?: boolean
}

const severityColors: Record<Fallacy["severity"], string> = {
  High: "bg-rose-500/20 text-rose-700 dark:text-rose-100 border-rose-500/30 hover:bg-rose-500/30",
  Medium:
    "bg-amber-500/20 text-amber-700 dark:text-amber-100 border-amber-500/30 hover:bg-amber-500/30",
  Low: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-100 border-emerald-500/30 hover:bg-emerald-500/30"
}

export function FallacySummaryCard({
  fallacy,
  badge,
  showDetails = false
}: Props) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <CategoryBadge category={fallacy.category} />
          <Badge variant="outline" className={severityColors[fallacy.severity]}>
            {fallacy.severity} severity
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold text-foreground">
          {fallacy.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          {fallacy.shortDefinition}
        </p>
        {fallacy.typeLabel ? (
          <div className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Type:</span>{" "}
            {fallacy.typeLabel}
          </div>
        ) : null}
        {showDetails ? (
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Severity:</span>{" "}
              {fallacy.severity}
            </div>
            {fallacy.typicalContexts && fallacy.typicalContexts.length > 0 ? (
              <div>
                <span className="font-semibold text-foreground">Contexts:</span>{" "}
                {fallacy.typicalContexts.join(", ")}
              </div>
            ) : null}
            <div>
              <span className="font-semibold text-foreground">
                How it misleads:
              </span>{" "}
              {fallacy.whyItIsFallacious}
            </div>
            <div>
              <a href="#counter" className="text-primary hover:underline">
                How to counter it →
              </a>
            </div>
          </div>
        ) : fallacy.typicalContexts && fallacy.typicalContexts.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {fallacy.typicalContexts.map((ctx) => (
              <Badge key={ctx} variant="secondary" className="text-[11px]">
                {ctx}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm pt-0">
        <Link
          href={`/fallacies/${fallacy.slug}`}
          className="text-primary hover:underline"
        >
          View details
        </Link>
        {badge}
      </CardFooter>
    </Card>
  )
}
