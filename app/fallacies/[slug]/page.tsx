import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Info,
  MessageSquare,
  Shield
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { FallacySummaryCard } from "@/components/FallacySummaryCard"
import ShareButton from "@/components/ShareButton"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Fallacy } from "@/data/fallacies"
import {
  getAllFallacies,
  getCategoryBySlug,
  getCategoryClasses,
  getFallacyBySlug,
  getPrevNextFallacies
} from "@/lib/fallacies"
import { absoluteUrl, canonicalPath } from "@/lib/seo"

type FallacyPageProps = {
  params: Promise<{ slug: string }>
}

const defaultOgImage = canonicalPath("/og-default.svg")
const WORDS_PER_MINUTE = 220

const estimateReadingTime = (text: string) => {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE))
  return `${minutes}-${minutes + 1} min read`
}

export function generateStaticParams() {
  return getAllFallacies().map((fallacy) => ({ slug: fallacy.slug }))
}

export async function generateMetadata({
  params
}: FallacyPageProps): Promise<Metadata> {
  const { slug } = await params
  const fallacy = getFallacyBySlug(slug)

  if (!fallacy) {
    return {
      title: "Fallacy not found – The Fallacy Guide"
    }
  }

  const canonical = canonicalPath(`/fallacies/${fallacy.slug}`)
  const ogImage = canonicalPath(`/og/fallacy/${fallacy.slug}`)
  const nameIncludesFallacy = fallacy.name.toLowerCase().includes("fallacy")
  const pageTitle = nameIncludesFallacy
    ? `${fallacy.name}: Definition, Examples & How to Fix It`
    : `${fallacy.name} Fallacy: Definition, Examples & How to Fix It`
  const datePublished = "2024-12-01"
  const dateModified = new Date().toISOString()
  const ogImageEntry = {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: `${fallacy.name} — ${fallacy.shortDefinition}`
  }

  return {
    title: { absolute: pageTitle },
    description: fallacy.seoDescription,
    alternates: {
      canonical
    },
    openGraph: {
      type: "article",
      title: pageTitle,
      description: fallacy.seoDescription,
      url: canonical,
      images: [ogImageEntry],
      publishedTime: datePublished,
      modifiedTime: dateModified
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: fallacy.seoDescription,
      images: [ogImage || defaultOgImage]
    }
  }
}

export default async function FallacyPage({ params }: FallacyPageProps) {
  const { slug } = await params
  const fallacy = getFallacyBySlug(slug)

  if (!fallacy) {
    notFound()
  }

  const category = getCategoryBySlug(fallacy.category.slug)
  const related = fallacy.relatedSlugs
    .map((relatedSlug) => getFallacyBySlug(relatedSlug))
    .filter((item): item is Fallacy => Boolean(item))

  const { prev: previous, next } = getPrevNextFallacies(
    fallacy.slug,
    "category"
  )
  const categorySiblings = getAllFallacies().filter(
    (item) =>
      item.category.slug === fallacy.category.slug && item.slug !== fallacy.slug
  )
  const relatedFallback = categorySiblings.filter(
    (item) => !fallacy.relatedSlugs.includes(item.slug)
  )
  const relatedDisplay = (related.length > 0 ? related : relatedFallback).slice(
    0,
    5
  )
  const nameIncludesFallacy = fallacy.name.toLowerCase().includes("fallacy")
  const pageTitle = nameIncludesFallacy
    ? `${fallacy.name}: Definition, Examples & How to Fix It`
    : `${fallacy.name} Fallacy: Definition, Examples & How to Fix It`
  const datePublished = "2024-12-01"
  const dateModified = new Date().toISOString()
  const readingTime = estimateReadingTime(
    [
      fallacy.explanation,
      fallacy.pattern.join(" "),
      fallacy.whyItIsFallacious,
      fallacy.whyPeopleUseIt,
      fallacy.responseStrategies.join(" "),
      fallacy.recognitionPoints.join(" ")
    ].join(" ")
  )
  const fallacyHeading = nameIncludesFallacy
    ? fallacy.name
    : `The ${fallacy.name} Fallacy`
  const explanationHeading = nameIncludesFallacy
    ? `What is the ${fallacy.name}?`
    : `What is the ${fallacy.name} fallacy?`
  const examplesHeading = `Examples of ${fallacy.name} in Everyday Life`
  const summaryPoints = [
    `Definition: ${fallacy.shortDefinition}`,
    `Impact: ${fallacy.name} distorts reasoning by ${fallacy.whyItIsFallacious}`,
    `Identify: Look for patterns like ${fallacy.pattern[0] ?? "a repeated shortcut in reasoning"}`
  ]
  const commonPhrases = [
    `“${fallacy.name}” style claim: ${fallacy.shortDefinition}`,
    `Watch for phrasing that skips evidence, e.g. "${fallacy.shortDefinition.split(".")[0]}"`,
    fallacy.pattern[0]
      ? `Pattern hint: ${fallacy.pattern[0]}`
      : "Pattern hint: leaps that dodge evidence"
  ]
  const variants = relatedDisplay.slice(0, 3)
  const toc = [
    { label: "Summary", href: "#summary" },
    { label: "Explanation", href: "#explanation" },
    { label: "Pattern", href: "#pattern" },
    { label: "Why it matters", href: "#why-it-matters" },
    { label: "Examples", href: "#examples" },
    { label: "Often Confused With", href: "#confused-with" },
    { label: "FAQ", href: "#faq" },
    { label: "Further Reading", href: "#further-reading" }
  ]
  const canonical = canonicalPath(`/fallacies/${fallacy.slug}`)
  const fallacyUrl = absoluteUrl(canonical)
  const categoryPath = category
    ? canonicalPath(`/categories/${category.slug}`)
    : canonicalPath("/categories")
  const categoryUrl = category
    ? absoluteUrl(categoryPath)
    : absoluteUrl("/categories")
  const homeUrl = absoluteUrl("/")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: fallacy.seoDescription,
    url: fallacyUrl,
    inLanguage: "en",
    datePublished,
    dateModified,
    about: [fallacy.name, "Logical fallacy", "Critical Thinking"],
    timeRequired: readingTime,
    isPartOf: category
      ? {
          "@type": "CollectionPage",
          name: category.name,
          url: categoryUrl
        }
      : undefined,
    author: {
      "@type": "Organization",
      name: "The Fallacy Guide Editorial Team",
      url: homeUrl
    },
    publisher: {
      "@type": "Organization",
      name: "The Fallacy Guide",
      url: homeUrl
    }
  }

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: homeUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category ? category.name : "Categories",
        item: category ? categoryUrl : absoluteUrl("/categories")
      },
      {
        "@type": "ListItem",
        position: 3,
        name: fallacy.name,
        item: fallacyUrl
      }
    ]
  }

  const confusedWith = relatedDisplay[0]
  const faqEntries = [
    {
      question: `Is ${fallacy.name} always invalid?`,
      answer: `${fallacy.name} signals a weak reasoning pattern. Even if the conclusion is true, the path to it is unreliable and should be rebuilt with sound support.`
    },
    {
      question: confusedWith
        ? `How does ${fallacy.name} differ from ${confusedWith.name}?`
        : `How is ${fallacy.name} different from similar fallacies?`,
      answer: confusedWith
        ? `${fallacy.name} follows the pattern listed here, while ${confusedWith.name} fails in a different way. Looking at the pattern helps choose the right diagnosis.`
        : `${fallacy.name} has its own distinct pattern—compare the steps to nearby fallacies to see why this one misleads.`
    },
    {
      question: `Where does ${fallacy.name} commonly appear?`,
      answer:
        "You will find it in everyday debates, opinion columns, marketing claims, and quick social posts—anywhere speed or emotion encourages shortcuts."
    },
    {
      question: `Can ${fallacy.name} ever be reasonable?`,
      answer:
        "It can feel persuasive, but it remains logically weak. A careful version should replace the fallacious step with evidence or valid structure."
    }
  ]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer
      }
    }))
  }

  return (
    <article className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <div className="flex flex-col gap-3">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            category
              ? { label: category.name, href: `/categories/${category.slug}` }
              : { label: "Categories", href: "/categories" },
            { label: fallacy.name }
          ]}
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground gap-3">
          <Badge variant="secondary" className="gap-2 bg-muted px-3 py-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime}</span>
          </Badge>
          <ShareButton
            title={fallacy.name}
            text={fallacy.shortDefinition}
            url={fallacyUrl}
          />
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          <div className="flex flex-wrap gap-2 rounded-xl border border-border bg-card/90 p-4 text-sm text-muted-foreground">
            {toc.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-border font-medium text-foreground hover:text-primary"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
          <header className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {category && (
                  <Link href={`/categories/${category.slug}`}>
                    <Badge
                      variant="outline"
                      className={`transition-colors hover:opacity-90 ${getCategoryClasses(category.colorKey)}`}
                    >
                      {category.name}
                    </Badge>
                  </Link>
                )}
                {fallacy.alsoKnownAs.length > 0 && (
                  <span className="text-xs text-muted-foreground">
                    AKA: {fallacy.alsoKnownAs.join(", ")}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {fallacyHeading}
              </h1>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground text-balance">
              {fallacy.shortDefinition}
            </p>
          </header>

          <section id="summary">
            <Card>
              <CardHeader>
                <CardTitle>Quick summary</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {summaryPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section
            id="explanation"
            className="prose prose-slate dark:prose-invert max-w-none"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <BookOpen className="h-6 w-6 text-primary" />
              {explanationHeading}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {fallacy.explanation}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              People lean on this pattern because {fallacy.whyPeopleUseIt}
            </p>
          </section>

          <section id="pattern">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  The Pattern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {fallacy.pattern.map((step, i) => (
                    <li key={step} className="flex gap-3 text-muted-foreground">
                      <Badge
                        variant="secondary"
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500 p-0"
                      >
                        {i + 1}
                      </Badge>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="why-it-matters" className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              Why the {fallacy.name} fallacy matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This fallacy distorts reasoning by {fallacy.whyItIsFallacious}. It
              often shows up in contexts like{" "}
              {fallacy.typicalContexts && fallacy.typicalContexts.length > 0
                ? fallacy.typicalContexts.join(", ")
                : "debates, headlines, and everyday claims"}
              , where quick takes and ambiguity can hide weak arguments.
            </p>
          </section>

          <section id="examples" className="space-y-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <MessageSquare className="h-6 w-6 text-green-500" />
              {examplesHeading}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Everyday Scenario
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 rounded-lg bg-muted/50 p-3 text-sm italic text-muted-foreground">
                    "{fallacy.everydayExample.setup}"
                  </div>
                  <div className="space-y-3">
                    {fallacy.everydayExample.dialogue.map((line) => {
                      const [label, ...rest] = line.split(":")
                      const content = rest
                        .join(":")
                        .trim()
                        .replace(/^"|"$/g, "")
                      return (
                        <div
                          key={`${label}-${content}`}
                          className="flex gap-2 text-sm"
                        >
                          <span className="font-bold text-foreground shrink-0">
                            {label}:
                          </span>
                          <span className="text-muted-foreground">
                            {content}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Serious Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {fallacy.seriousExample}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="grid gap-6 sm:grid-cols-2">
            <section className="space-y-3">
              <h3 className="font-semibold text-foreground">
                Why it is fallacious
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {fallacy.whyItIsFallacious}
              </p>
            </section>
            <section className="space-y-3">
              <h3 className="font-semibold text-foreground">
                Why people use it
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {fallacy.whyPeopleUseIt}
              </p>
            </section>
          </div>

          <section id="counter">
            <Card className="border-orange-500/20 bg-orange-500/5 dark:bg-orange-500/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-foreground">
                  <Shield className="h-5 w-5 text-orange-500" />
                  How to Counter It
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-foreground">
                      Recognition
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground marker:text-orange-500">
                      {(fallacy.recognitionPoints || []).map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-foreground">
                      Response
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground marker:text-orange-500">
                      {(fallacy.responseStrategies || []).map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Common phrases that signal this fallacy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                {commonPhrases.map((phrase) => (
                  <li key={phrase}>{phrase}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/30 bg-emerald-500/10">
            <CardHeader>
              <CardTitle>Better reasoning / Repair the argument</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {fallacy.responseStrategies[0] ||
                  "Rebuild the claim with clear premises, relevant evidence, and step-by-step support."}
              </p>
            </CardContent>
          </Card>

          {confusedWith || relatedDisplay.length > 0 ? (
            <section id="confused-with">
              <Card>
                <CardHeader>
                  <CardTitle>Often confused with</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {confusedWith ? (
                      <>
                        {fallacy.name} is often mistaken for{" "}
                        <Link
                          href={`/fallacies/${confusedWith.slug}`}
                          className="text-primary hover:underline"
                        >
                          {confusedWith.name}
                        </Link>
                        , but the patterns differ. Compare the steps above to
                        see why this fallacy misleads in its own way.
                      </>
                    ) : (
                      <>
                        {fallacy.name} can resemble other issues in the{" "}
                        {category?.name} family. Cross-check the pattern to be
                        sure you are diagnosing the right flaw.
                      </>
                    )}
                  </p>
                </CardContent>
              </Card>
            </section>
          ) : null}

          {variants.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">
                  Close variations that are easy to confuse with {fallacy.name}.
                </p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  {variants.map((variant) => (
                    <li key={variant.slug}>
                      <Link
                        href={`/fallacies/${variant.slug}`}
                        className="text-primary hover:underline"
                      >
                        {variant.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqEntries.map((entry) => (
                <Card key={entry.question}>
                  <CardHeader>
                    <CardTitle className="text-base">
                      {entry.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {entry.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Keep exploring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-primary text-sm">
                <li>
                  <Link href="/fallacies" className="hover:underline">
                    List of Logical Fallacies (main hub)
                  </Link>
                </li>
                <li>
                  <Link href="/fallacies/types" className="hover:underline">
                    Types of Logical Fallacies
                  </Link>
                </li>
                <li>
                  <Link href="/fallacies/everyday" className="hover:underline">
                    Fallacies in Everyday Argument
                  </Link>
                </li>
                <li>
                  <Link href="/fallacies/politics" className="hover:underline">
                    Fallacies in Politics
                  </Link>
                </li>
                <li>
                  <Link href="/fallacies/media" className="hover:underline">
                    Fallacies in Media & Social Media
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/categories/${fallacy.category.slug}`}
                    className="hover:underline"
                  >
                    See all fallacies in {fallacy.category.name}
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <section id="further-reading" className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              Further reading
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://plato.stanford.edu/entries/fallacies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stanford Encyclopedia of Philosophy: Fallacies
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://www.cambridge.org/core/journals/argumentation"
                  target="_blank"
                  rel="noreferrer"
                >
                  Argumentation (Cambridge Core)
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://yourlogicalfallacyis.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Your Logical Fallacy Is (reference list)
                </a>
              </li>
            </ul>
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
            {previous ? (
              <Link
                href={`/fallacies/${previous.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="font-medium">{previous.name}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/fallacies/${next.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent hover:text-accent-foreground w-full sm:w-auto justify-end"
              >
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="font-medium">{next.name}</div>
                </div>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <FallacySummaryCard fallacy={fallacy} showDetails />

          {relatedDisplay.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Related Fallacies
              </h3>
              <div className="flex flex-col gap-2">
                {relatedDisplay.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/fallacies/${item.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}
