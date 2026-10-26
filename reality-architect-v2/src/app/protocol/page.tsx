import Link from "next/link";

// Legacy URL: the Protocol page was merged into About. Static export has no redirects, so forward client-side.
export default function ProtocolRedirect() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center text-muted">
      <meta httpEquiv="refresh" content="0;url=/about" />
      <p>
        This page has moved to <Link href="/about" className="text-accent underline">About</Link>.
      </p>
    </div>
  );
}
