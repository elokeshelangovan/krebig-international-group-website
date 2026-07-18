import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, breadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { ApplyPlaceholder } from "@/components/careers";
import { defaultPositions } from "@/components/careers/data";
import { Container, Breadcrumbs } from "@/components/layout";

interface ApplyPageProps {
  params: Promise<{ slug: string }>;
}

function getPosition(slug: string) {
  return defaultPositions.find((position) => position.slug === slug);
}

export function generateStaticParams() {
  return defaultPositions.map((position) => ({ slug: position.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const position = getPosition(slug);

  if (!position) {
    return buildMetadata({
      fullTitle: "Position Not Found | KREBIG International Group",
      description: "The position you're looking for could not be found.",
      path: `/careers/apply/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    fullTitle: `Apply: ${position.title} | KREBIG International Group`,
    description: position.summary,
    path: position.href,
  });
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { slug } = await params;
  const position = getPosition(slug);

  if (!position) {
    notFound();
  }

  const Icon = position.icon;
  const breadcrumbItems = [
    { name: "Home", url: siteConfig.url },
    { name: "Careers", url: new URL("/careers", siteConfig.url).toString() },
    { name: position.title, url: new URL(position.href, siteConfig.url).toString() },
  ];

  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbSchema(breadcrumbItems))} />
      <Container size="lg" className="pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </Container>
      <ApplyPlaceholder
        icon={<Icon className="size-8" />}
        title={position.title}
        department={position.department}
        location={position.location}
        employmentType={position.employmentType}
        summary={position.summary}
      />
    </>
  );
}
