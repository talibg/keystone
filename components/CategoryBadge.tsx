import { Badge } from "@/components/ui/badge"
import type { FallacyCategory } from "@/data/fallacies"
import { getCategoryClasses } from "@/lib/fallacies"

type Props = {
  category: FallacyCategory
  className?: string
}

export function CategoryBadge({ category, className }: Props) {
  return (
    <Badge
      variant="outline"
      className={`shrink-0 text-[10px] uppercase tracking-wider ${getCategoryClasses(
        category.colorKey
      )} ${className ?? ""}`.trim()}
    >
      {category.name}
    </Badge>
  )
}
