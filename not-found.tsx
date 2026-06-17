// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg text-muted-foreground">Page not found</p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
      >
        Go Home
      </Link>
    </div>
  );
}