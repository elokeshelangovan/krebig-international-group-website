import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <Section
      aria-label="Page not found"
      tone="default"
      spacing="xl"
      containerSize="lg"
      className="flex flex-1 items-center"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
          404
        </span>
        <Heading level={1} size={2}>
          We Couldn&apos;t Find That Page
        </Heading>
        <Text variant="lead" className="text-muted-foreground text-pretty">
          The page you&apos;re looking for may have been moved or no longer exists. Let&apos;s get
          you back on track.
        </Text>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </Section>
  );
}
