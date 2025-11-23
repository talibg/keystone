import {
  categories,
  type Fallacy,
  type FallacyCategory,
  type FallacyCategorySlug,
  fallacies
} from "@/data/fallacies"

export const getAllCategories = (): FallacyCategory[] => categories

export const getCategoryBySlug = (
  slug: FallacyCategorySlug
): FallacyCategory | undefined =>
  categories.find((category) => category.slug === slug)

export const getAllFallacies = (): Fallacy[] => fallacies

export const getFallacyBySlug = (slug: string): Fallacy | undefined =>
  fallacies.find((fallacy) => fallacy.slug === slug)

export const getFallaciesByCategory = (
  categorySlug: FallacyCategorySlug
): Fallacy[] =>
  fallacies.filter((fallacy) => fallacy.category.slug === categorySlug)

const fallacyOrder = fallacies.map((fallacy) => fallacy.slug)

export const getPrevNextFallacies = (
  slug: string,
  scope: "all" | "category" = "category"
): { prev?: Fallacy; next?: Fallacy } => {
  if (scope === "all") {
    const index = fallacyOrder.indexOf(slug)
    const prevSlug = index > 0 ? fallacyOrder[index - 1] : undefined
    const nextSlug =
      index >= 0 && index < fallacyOrder.length - 1
        ? fallacyOrder[index + 1]
        : undefined
    return {
      prev: prevSlug ? getFallacyBySlug(prevSlug) : undefined,
      next: nextSlug ? getFallacyBySlug(nextSlug) : undefined
    }
  }

  const current = getFallacyBySlug(slug)
  if (!current) return {}
  const list = getFallaciesByCategory(current.category.slug)
  const index = list.findIndex((item) => item.slug === slug)
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined
  }
}

export const getCategoryClasses = (colorKey: string) => {
  switch (colorKey) {
    case "rose":
      return "border-[--chart-1]/20 bg-[--chart-1]/10 text-[--chart-1]"
    case "indigo":
      return "border-[--chart-2]/20 bg-[--chart-2]/10 text-[--chart-2]"
    case "amber":
      return "border-[--chart-3]/30 bg-[--chart-3]/10 text-[--chart-3]"
    case "emerald":
      return "border-[--chart-4]/20 bg-[--chart-4]/10 text-[--chart-4]"
    case "purple":
      return "border-[--chart-5]/20 bg-[--chart-5]/10 text-[--chart-5]"
    case "cyan":
      return "border-[--chart-6]/20 bg-[--chart-6]/10 text-[--chart-6]"
    case "sky":
      return "border-[--chart-7]/20 bg-[--chart-7]/10 text-[--chart-7]"
    case "slate":
      return "border-[--chart-8]/20 bg-[--chart-8]/10 text-[--chart-8]"
    default:
      return "border-muted-foreground/20 bg-muted-foreground/10 text-muted-foreground"
  }
}
