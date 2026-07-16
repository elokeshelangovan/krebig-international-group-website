"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section
      aria-label="Something went wrong"
      tone="default"
      spacing="xl"
      containerSize="lg"
      className="flex flex-1 items-center"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
          Error
        </span>
        <Heading level={1} size={2}>
          Something Went Wrong
        </Heading>
        <Text variant="lead" className="text-muted-foreground text-pretty">
          An unexpected error occurred while loading this page. Please try again, or return to the
          homepage.
        </Text>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" onClick={() => unstable_retry()}>
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
