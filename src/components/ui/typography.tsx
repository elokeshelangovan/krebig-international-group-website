import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const headingSizes = {
  1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
  2: "text-3xl sm:text-4xl font-bold tracking-tight",
  3: "text-2xl sm:text-3xl font-semibold tracking-tight",
  4: "text-xl sm:text-2xl font-semibold",
  5: "text-lg sm:text-xl font-semibold",
  6: "text-base sm:text-lg font-semibold",
} as const satisfies Record<HeadingLevel, string>;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic heading level, rendered as the matching `h1`–`h6` element. */
  level: HeadingLevel;
  /** Visual size override — defaults to matching `level` so semantics and
   * appearance can be decoupled (e.g. an `h2` styled like an `h4`). */
  size?: HeadingLevel;
  as?: React.ElementType;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, size, as, className, ...props }, ref) => {
    const Comp = as ?? (`h${level}` as React.ElementType);
    return (
      <Comp
        ref={ref}
        className={cn(headingSizes[size ?? level], "text-balance", className)}
        {...props}
      />
    );
  },
);
Heading.displayName = "Heading";

const textVariants = cva("", {
  variants: {
    variant: {
      lead: "text-lg text-foreground sm:text-xl",
      body: "text-base text-foreground",
      muted: "text-base text-muted-foreground",
      small: "text-sm text-foreground",
      caption: "text-xs text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as, variant, className, ...props }, ref) => {
    const Comp = as ?? "p";
    return <Comp ref={ref} className={cn(textVariants({ variant }), className)} {...props} />;
  },
);
Text.displayName = "Text";
