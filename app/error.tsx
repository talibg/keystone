"use client";

import { AlertTriangle, ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl border bg-muted/30 p-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_40%)]" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-destructive">
              <span className="size-1.5 rounded-full bg-destructive" />
              Something went wrong
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                We hit a logic error.
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                The page crashed while rendering. You can try again, go back, or
                jump to a safe section of the guide.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={reset}
                className="inline-flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Try again
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border bg-background/80 p-4 text-sm text-muted-foreground shadow-sm sm:w-[320px]">
            <div className="flex items-center gap-2 text-destructive mb-3">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-medium">Error details</span>
            </div>
            <p className="line-clamp-3 break-words text-foreground/80">
              {error.message || "Unexpected error"}
            </p>
            {error.digest ? (
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Digest: {error.digest}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section
        aria-label="Recovery options"
        className="grid gap-4 md:grid-cols-3"
      >
        {[
          {
            title: "Search the guide",
            href: "/search",
            description: "Find fallacies, examples, and responses.",
          },
          {
            title: "All fallacies",
            href: "/fallacies",
            description: "Browse the full directory and categories.",
          },
          {
            title: "Report the issue",
            href: "/contact",
            description: "Let the editor know what went wrong.",
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="group h-full border-border/70 bg-card/80 transition-transform hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
          >
            <CardHeader className="space-y-2">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </CardHeader>
            <CardContent>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Go to {item.title.toLowerCase()}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
