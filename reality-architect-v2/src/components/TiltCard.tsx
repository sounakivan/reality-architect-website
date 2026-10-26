"use client";

import { useRef } from "react";
import clsx from "clsx";

/**
 * Tilts its content toward the cursor with a soft moving glare.
 * Mouse only; skipped entirely when the viewer prefers reduced motion.
 */
export default function TiltCard({
  children,
  className,
  maxTilt = 8,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const set = (vars: Record<string, string>) => {
    const el = ref.current;
    if (!el) return;
    for (const [k, v] of Object.entries(vars)) el.style.setProperty(k, v);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    set({
      "--rx": `${(-y * maxTilt).toFixed(2)}deg`,
      "--ry": `${(x * maxTilt).toFixed(2)}deg`,
      "--gx": `${((x + 0.5) * 100).toFixed(1)}%`,
      "--gy": `${((y + 0.5) * 100).toFixed(1)}%`,
      "--s": "1.02",
    });
  };

  const reset = () => set({ "--rx": "0deg", "--ry": "0deg", "--s": "1" });

  return (
    <div className={className} style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className="group/tilt relative transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(var(--s, 1))" }}
      >
        {children}
        <div
          aria-hidden
          className={clsx(
            "pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
            "group-hover/tilt:opacity-100 motion-reduce:hidden"
          )}
          style={{ background: "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.16), transparent 55%)" }}
        />
      </div>
    </div>
  );
}
