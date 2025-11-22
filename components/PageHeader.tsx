import { Breadcrumbs } from "@/components/Breadcrumbs";

type PageHeaderProps = {
  title: string;
  description: string;
  eyebrow?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHeader({
  title,
  description,
  eyebrow,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="space-y-3">
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
