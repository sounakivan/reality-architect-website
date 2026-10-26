"use client";

/* eslint-disable @next/next/no-img-element -- static export serves images unoptimized; intrinsic sizes are unknown */
import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import Media, { isVideo } from "@/components/Media";

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

/** A case-study figure. Stills open full-screen on click; clips play inline. */
export default function ImageLightbox({ src, alt, caption, className }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    trigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // Only one focusable element in the dialog, so keep focus on it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeBtn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const figcaption = caption && <figcaption className="mt-2 text-sm text-subtle">{caption}</figcaption>;

  if (isVideo(src)) {
    return (
      <figure className="m-0">
        <Media src={src} alt={alt} className={className} />
        {figcaption}
      </figure>
    );
  }

  return (
    <figure className="m-0">
      <button ref={trigger} onClick={() => setOpen(true)} className="block cursor-zoom-in" aria-label={`Enlarge image: ${alt}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />
      </button>
      {figcaption}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={close}
        >
          <button
            ref={closeBtn}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={close}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <figure className="relative m-0 max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} className="max-h-[85vh] max-w-[90vw] rounded-lg border border-white/10 object-contain shadow-2xl" />
            {caption && <figcaption className="mt-3 text-center text-sm text-muted">{caption}</figcaption>}
          </figure>
        </div>
      )}
    </figure>
  );
}
