import { isDev } from "@/data/projects";

/**
 * Placeholder for a content gap. Visible in `npm run dev` only — renders nothing in the production build.
 * See CONTENT_CHECKLIST.md for the full list.
 */
export default function DevNote({ items, title = "Content pending" }: { items: string[]; title?: string }) {
  if (!isDev || items.length === 0) return null;
  return (
    <aside className="rounded-lg border border-dashed border-accent-2/50 bg-accent-2/5 p-4 text-sm text-accent-2">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em]">{title} · dev only</p>
      <ul className="list-disc space-y-1 pl-5 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}
