// Renders plain project copy: "\n" becomes a paragraph break and bare URLs become links.
const URL_RE = /(https?:\/\/[^\s)]+)/g;

export function Linkify({ text }: { text: string }) {
  return (
    <>
      {text.split(URL_RE).map((part, i) =>
        // split() with a capture group puts each matched URL at an odd index
        i % 2 === 1 ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="break-all text-accent underline-offset-4 hover:underline">
            {new URL(part).hostname.replace(/^www\./, "")} ↗
          </a>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function RichText({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text
        .split(/\n+/)
        .filter((p) => p.trim())
        .map((p, i) => (
          <p key={i} className={className}>
            <Linkify text={p} />
          </p>
        ))}
    </>
  );
}
