export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex flex-1 items-center justify-center py-32"
    >
      <span className="border-border border-t-primary size-10 animate-spin rounded-full border-4" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
