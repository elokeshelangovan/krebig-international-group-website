import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { CategoryPlaceholder } from "@/components/insights";
import { defaultCategories } from "@/components/insights/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

function getCategory(slug: string) {
  return defaultCategories.find((category) => category.slug === slug);
}

export function generateStaticParams() {
  return defaultCategories.map((category) => ({ slug: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return buildMetadata({
      fullTitle: "Category Not Found | KREBIG International Group",
      description: "The category you're looking for could not be found.",
      path: `/insights/category/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    fullTitle: `${category.name} Insights | KREBIG International Group`,
    description: category.description,
    path: category.href,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const Icon = category.icon;

  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Insights", url: new URL("/insights", siteConfig.url).toString() },
            { name: category.name, url: new URL(category.href, siteConfig.url).toString() },
          ]),
        )}
      />
      <CategoryPlaceholder
        icon={<Icon className="size-8" />}
        name={category.name}
        description={category.description}
        articleCount={category.articleCount}
      />
    </>
  );
}
