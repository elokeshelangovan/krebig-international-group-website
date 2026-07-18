import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { Container, type ContainerProps } from "@/components/layout/container";

const sectionVariants = cva("w-full scroll-mt-24", {
  variants: {
    spacing: {
      none: "",
      sm: "py-section-sm",
      md: "py-section-md",
      lg: "py-section-lg",
      xl: "py-section-xl",
    },
    tone: {
      default: "bg-background text-foreground",
      muted: "bg-muted text-foreground",
      inverted: "bg-foreground text-background",
      primary: "bg-primary text-primary-foreground",
    },
  },
  defaultVariants: {
    spacing: "lg",
    tone: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
  /** Render children inside a `Container`; pass a size to control its width, or `false` to opt out. */
  containerSize?: ContainerProps["size"] | false;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ as, spacing, tone, containerSize = "lg", className, children, ...props }, ref) => {
    const Comp = as ?? "section";
    return (
      <Comp ref={ref} className={cn(sectionVariants({ spacing, tone }), className)} {...props}>
        {containerSize === false ? (
          children
        ) : (
          <Container size={containerSize}>{children}</Container>
        )}
      </Comp>
    );
  },
);
Section.displayName = "Section";
