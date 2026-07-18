import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";

export interface BreadcrumbsProps {
  /** Same shape passed to breadcrumbSchema() — the last item renders as the current page. */
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const href = item.url.replace(siteConfig.url, "") || "/";
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {index > 0 ? <ChevronRight aria-hidden="true" className="size-3.5 shrink-0" /> : null}
              {isLast ? (
                <span aria-current="page" className="text-foreground font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-foreground duration-fast ease-standard transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
