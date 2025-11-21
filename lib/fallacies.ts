import {
  categories,
  type Fallacy,
  type FallacyCategory,
  type FallacyCategorySlug,
  fallacies,
} from "@/data/fallacies";

export const getAllCategories = (): FallacyCategory[] => categories;

export const getCategoryBySlug = (
  slug: FallacyCategorySlug,
): FallacyCategory | undefined =>
  categories.find((category) => category.slug === slug);

export const getAllFallacies = (): Fallacy[] => fallacies;

export const getFallacyBySlug = (slug: string): Fallacy | undefined =>
  fallacies.find((fallacy) => fallacy.slug === slug);

export const getFallaciesByCategory = (
  categorySlug: FallacyCategorySlug,
): Fallacy[] =>
  fallacies.filter((fallacy) => fallacy.category.slug === categorySlug);

const fallacyOrder = fallacies.map((fallacy) => fallacy.slug);

export const getPrevNextFallacies = (
  slug: string,
  scope: "all" | "category" = "category",
): { prev?: Fallacy; next?: Fallacy } => {
  if (scope === "all") {
    const index = fallacyOrder.indexOf(slug);
    const prevSlug = index > 0 ? fallacyOrder[index - 1] : undefined;
    const nextSlug =
      index >= 0 && index < fallacyOrder.length - 1
        ? fallacyOrder[index + 1]
        : undefined;
    return {
      prev: prevSlug ? getFallacyBySlug(prevSlug) : undefined,
      next: nextSlug ? getFallacyBySlug(nextSlug) : undefined,
    };
  }

  const current = getFallacyBySlug(slug);
  if (!current) return {};
  const list = getFallaciesByCategory(current.category.slug);
  const index = list.findIndex((item) => item.slug === slug);
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
  };
};

export const categoryColorMap: Record<FallacyCategorySlug, string> = {
  relevance: "rose",
  "ambiguity-language": "indigo",
  presumption: "amber",
  "statistical-scientific": "emerald",
  formal: "purple",
  "informal-dialogue": "cyan",
  "rhetorical-cognitive-bias": "sky",
  "debate-tactics": "slate",
};

export const getCategoryClasses = (colorKey: string) => {
  switch (colorKey) {
    case "rose":
      return "border-rose-500/20 bg-rose-500/10 text-rose-200";
    case "indigo":
      return "border-indigo-500/20 bg-indigo-500/10 text-indigo-200";
    case "amber":
      return "border-amber-500/30 bg-amber-500/10 text-amber-200";
    case "emerald":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-100";
    case "purple":
      return "border-purple-500/20 bg-purple-500/10 text-purple-200";
    case "cyan":
      return "border-cyan-500/20 bg-cyan-500/10 text-cyan-200";
    case "sky":
      return "border-sky-500/20 bg-sky-500/10 text-sky-200";
    default:
      return "border-slate-500/20 bg-slate-500/10 text-slate-200";
  }
};
