import clsx from "clsx";

// Media container with HUD-style corner brackets — the site's spatial/smartglasses motif.
export default function HudFrame({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  const corner = "pointer-events-none absolute h-4 w-4 border-accent/70 transition-colors duration-300 group-hover:border-accent";
  return (
    <div className={clsx("relative overflow-hidden rounded-lg border border-line bg-surface", className)}>
      {children}
      <span className={clsx(corner, "left-2 top-2 border-l border-t")} />
      <span className={clsx(corner, "right-2 top-2 border-r border-t")} />
      <span className={clsx(corner, "bottom-2 left-2 border-b border-l")} />
      <span className={clsx(corner, "bottom-2 right-2 border-b border-r")} />
      {label && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-bg/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
