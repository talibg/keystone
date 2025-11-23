import Link from "next/link"
import { CategoryBadge } from "@/components/CategoryBadge"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Fallacy } from "@/data/fallacies"

type Props = {
  fallacy: Fallacy
  showContexts?: boolean
}

export function FallacyCard({ fallacy, showContexts = false }: Props) {
  return (
    <Link href={`/fallacies/${fallacy.slug}`} className="block h-full">
      <Card className="group flex h-full flex-col justify-between transition-all hover:border-primary/50 hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="transition-colors group-hover:text-primary">
              {fallacy.name}
            </CardTitle>
            <CategoryBadge category={fallacy.category} />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {fallacy.shortDefinition}
          </p>
          {showContexts && fallacy.typicalContexts?.length ? (
            <div className="flex flex-wrap gap-2">
              {fallacy.typicalContexts.map((ctx) => (
                <Badge key={ctx} variant="secondary" className="text-[11px]">
                  {ctx}
                </Badge>
              ))}
            </div>
          ) : null}
        </CardContent>
        <div className="mt-auto flex items-center px-6 pb-6 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          View details →
        </div>
      </Card>
    </Link>
  )
}
