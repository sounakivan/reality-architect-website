"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videoId = (url: string) => url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)?.[1];

/** Click-to-load YouTube player: shows the thumbnail until played, so pages with many videos stay light. */
export default function YouTubeEmbed({ url, title }: { url: string; title: string }) {
  const [active, setActive] = useState(false);
  const id = videoId(url);
  if (!id) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setActive(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play video: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 bg-bg/70 text-accent backdrop-blur transition-transform group-hover:scale-110">
            <Play size={24} className="ml-1" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
