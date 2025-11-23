import { ArrowRight, Compass, Home, Layers, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const quickLinks = [
  {
    title: "Search the guide",
    description: "Look up a fallacy by name, description, or related topic.",
    href: "/search",
    icon: Search
  },
  {
    title: "Browse categories",
    description: "Jump into curated groups of fallacies and patterns.",
    href: "/categories",
    icon: Layers
  },
  {
    title: "See all fallacies",
    description: "Scan the full directory for a quick overview.",
    href: "/fallacies",
    icon: Compass
  }
]

export default function NotFound() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl border bg-muted/30 p-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_35%)]" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              404 — Page not found
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Lost in the logic.
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                We couldn&apos;t locate that page. Try a different path or jump
                straight to the resources that help you spot and counter
                fallacies.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/" className="inline-flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Go home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="/fallacies"
                  className="inline-flex items-center gap-2"
                >
                  Browse all fallacies
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Contact the editor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Helpful links" className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Find your way
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map(({ title, description, href, icon: Icon }) => (
            <Card
              key={title}
              className="group h-full border-border/70 bg-card/80 transition-transform hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </CardHeader>
              <CardContent>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Go to {title.toLowerCase()}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
