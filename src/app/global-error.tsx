"use client";

import "./globals.css";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground flex min-h-screen items-center justify-center antialiased">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 text-center">
          <span className="border-border bg-accent text-accent-foreground inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            Error
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Something Went Wrong
          </h1>
          <p className="text-muted-foreground text-lg text-pretty">
            KREBIG International Group encountered an unexpected error. Please try again.
          </p>
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-button duration-fast ease-standard focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-11 items-center justify-center px-6 text-base font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
