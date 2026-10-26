/* eslint-disable @next/next/no-img-element -- static export serves media unoptimized and intrinsic sizes are unknown */
import Image from "next/image";
import clsx from "clsx";

export const isVideo = (src: string) => /\.(mp4|webm)$/i.test(src);

/** Poster frame generated next to every converted clip: foo.mp4 -> foo-poster.jpg */
export const posterFor = (src: string) => src.replace(/\.(mp4|webm)$/i, "-poster.jpg");

/** Still image for previews and social cards, whatever the media type. */
export const stillFor = (src: string) => (isVideo(src) ? posterFor(src) : src);

/**
 * Renders a still or a silent looping clip. With `fill`, it covers its positioned parent.
 * Clips replace the old GIFs, so they autoplay muted and loop; reduced-motion viewers see the poster frame instead.
 */
export default function Media({
  src,
  alt,
  fill,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const fillClass = fill && "absolute inset-0 h-full w-full";

  if (isVideo(src)) {
    return (
      <>
        <video
          src={src}
          poster={posterFor(src)}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
          className={clsx("motion-reduce:hidden", fillClass, className)}
        />
        <img src={posterFor(src)} alt={alt} loading="lazy" className={clsx("hidden motion-reduce:block", fillClass, className)} />
      </>
    );
  }
  if (fill) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />;
  }
  return <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" className={className} />;
}
