import Link from "next/link";
import type { ReactNode } from "react";
import type { Fallacy } from "@/data/fallacies";
import { getCategoryClasses } from "@/lib/fallacies";

type Props = {
  fallacy: Fallacy;
  badge?: ReactNode;
};

const severityColors: Record<Fallacy["severity"], string> = {
  High: "bg-rose-500/20 text-rose-100 border-rose-500/30",
  Medium: "bg-amber-500/20 text-amber-100 border-amber-500/30",
  Low: "bg-emerald-500/20 text-emerald-100 border-emerald-500/30",
};

export function FallacySummaryCard({ fallacy, badge }: Props) {
  const categoryClasses = getCategoryClasses(fallacy.category.colorKey);

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold ${categoryClasses}`}
        >
          {fallacy.category.name}
        </span>
        <span
          className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold ${severityColors[fallacy.severity]}`}
        >
          {fallacy.severity} severity
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          {fallacy.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {fallacy.shortDefinition}
        </p>
      </div>
      {fallacy.typeLabel ? (
        <div className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">Type:</span>{" "}
          {fallacy.typeLabel}
        </div>
      ) : null}
      {fallacy.typicalContexts && fallacy.typicalContexts.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {fallacy.typicalContexts.map((ctx) => (
            <span
              key={ctx}
              className="rounded-full bg-muted px-2 py-1 text-[11px] text-muted-foreground"
            >
              {ctx}
            </span>
          ))}
        </div>
      ) : null}
      <div className="flex items-center justify-between text-sm">
        <Link
          href={`/fallacies/${fallacy.slug}`}
          className="text-primary hover:underline"
        >
          View details
        </Link>
        {badge}
      </div>
    </div>
  );
}
