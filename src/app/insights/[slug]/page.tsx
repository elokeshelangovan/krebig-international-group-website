import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { ArticlePlaceholder } from "@/components/insights";
import { defaultArticles } from "@/components/insights/data";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

function getArticle(slug: string) {
  return defaultArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return defaultArticles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return buildMetadata({
      fullTitle: "Article Not Found | KREBIG International Group",
      description: "The article you're looking for could not be found.",
      path: `/insights/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    fullTitle: `${article.title} | KREBIG Insights`,
    description: article.summary,
    path: article.href,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const Icon = article.icon;

  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Insights", url: new URL("/insights", siteConfig.url).toString() },
            { name: article.title, url: new URL(article.href, siteConfig.url).toString() },
          ]),
        )}
      />
      <ArticlePlaceholder
        icon={<Icon className="size-8" />}
        category={article.category}
        title={article.title}
        summary={article.summary}
        author={article.author}
        publishedDate={article.publishedDate}
        readingTime={article.readingTime}
      />
    </>
  );
}
