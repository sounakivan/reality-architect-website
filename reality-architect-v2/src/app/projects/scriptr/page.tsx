import Link from "next/link";

// Legacy URL: Scriptr was renamed to E2Engine. Static export has no redirects, so forward client-side.
export default function ScriptrRedirect() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center text-muted">
      <meta httpEquiv="refresh" content="0;url=/projects/e2engine" />
      <p>
        This case study is now <Link href="/projects/e2engine" className="text-accent underline">E2Engine</Link>.
      </p>
    </div>
  );
}
