import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-slate-300" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span
            key={`${item.label}-${index}`}
            className="inline-flex items-center"
          >
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-sky-200 hover:text-sky-100"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-100">{item.label}</span>
            )}
            {!isLast && <span className="mx-2 text-slate-500">›</span>}
          </span>
        );
      })}
    </nav>
  );
}
