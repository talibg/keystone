"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import {
  getAllCategories,
  getAllFallacies,
  getCategoryClasses,
} from "@/lib/fallacies";

export default function Home() {
  const categories = getAllCategories();
  const fallacies = getAllFallacies();
  const featuredFallacies = fallacies.slice(0, 9);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-background p-8 sm:p-16 text-center border border-border/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Zap className="mr-2 h-4 w-4" />
            Master Critical Thinking
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-balance text-foreground">
            Spot the Flaws in{" "}
            <span className="text-primary">Every Argument</span>
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            A modern, comprehensive guide to logical fallacies. Learn to
            identify, understand, and dismantle poor reasoning in everyday life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/categories"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Explore Categories
            </Link>
            <Link
              href="#all-fallacies"
              className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View All Fallacies
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">
              Explore by Category
            </h2>
            <p className="text-muted-foreground">
              Understand fallacies by their fundamental nature.
            </p>
          </div>
          <Link
            href="/categories"
            className="group flex items-center text-sm font-medium text-primary hover:underline"
          >
            View all{" "}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.slice(0, 6).map((category) => (
            <motion.div key={category.slug} variants={item}>
              <Link
                href={`/categories/${category.slug}`}
                className="group block h-full space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <LayersIcon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* All Fallacies Section */}
      <section id="all-fallacies" className="space-y-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">All Fallacies</h2>
            <p className="text-muted-foreground">
              Preview featured entries. Visit the full directory to explore
              everything.
            </p>
          </div>
          <Link
            href="/fallacies"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:text-primary"
          >
            View all fallacies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredFallacies.map((fallacy) => (
            <Link
              key={fallacy.slug}
              href={`/fallacies/${fallacy.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {fallacy.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getCategoryClasses(fallacy.category.colorKey)}`}
                  >
                    {fallacy.category.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {fallacy.shortDefinition}
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Layers icon"
    >
      <title>Layers icon</title>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
