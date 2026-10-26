import type { Metadata } from "next";
import { publishedProjects, visibleProjects, type MediaItem } from "@/data/projects";
import { CheckSquare } from "lucide-react";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import ImageLightbox from "@/components/ImageLightbox";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import RichText, { Linkify } from "@/components/RichText";
import { stillFor } from "@/components/Media";

export function generateStaticParams() {
  return publishedProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = publishedProjects.find((p) => p.slug === slug);
  if (!project) return {};
  const image = project.heroMedia ?? project.image;
  return {
    title: `${project.title} | Sounak Ghosh`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      ...(image && { images: [stillFor(image)] }),
    },
  };
}

const imageClass = "h-auto w-full rounded-lg border border-line bg-surface object-contain";

const toItem = (m: MediaItem) => (typeof m === "string" ? { src: m, caption: undefined } : m);

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = publishedProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const i = visibleProjects.findIndex((p) => p.slug === slug);
  const prev = i > 0 ? visibleProjects[i - 1] : undefined;
  const next = i >= 0 && i < visibleProjects.length - 1 ? visibleProjects[i + 1] : undefined;

  return (
    <CaseStudyLayout project={project} prev={prev} next={next}>
      {project.content?.map((section, idx) => {
        const items = section.images?.map(toItem) ?? [];
        const alt = (n: number, caption?: string) => caption ?? `${section.title ?? project.title} — image ${n + 1}`;
        return (
          <section key={idx} className="mb-16">
            {section.title && <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-ink">{section.title}</h2>}
            {section.body && <RichText text={section.body} className="mb-4 leading-relaxed text-muted" />}

            {section.list && section.list.length > 0 && (
              <ul className="mt-4 space-y-3 text-muted">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckSquare className="mt-1 shrink-0 text-accent" size={16} />
                    <span className="leading-relaxed">
                      <Linkify text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {items.length > 0 &&
              (section.centerImage ? (
                <div className="mx-auto mt-8 w-full md:w-3/4">
                  {items.map((m, i) => (
                    <ImageLightbox key={i} src={m.src} alt={alt(i, m.caption)} caption={m.caption} className={imageClass} />
                  ))}
                </div>
              ) : (
                <div
                  className={`mt-8 grid gap-4 ${section.compactGrid ? "" : "md:-mx-12 lg:-mx-24"} ${
                    items.length > 1 ? (section.compactGrid ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2") : "grid-cols-1"
                  }`}
                >
                  {items.map((m, i) => (
                    <ImageLightbox key={i} src={m.src} alt={alt(i, m.caption)} caption={m.caption} className={imageClass} />
                  ))}
                </div>
              ))}

            {section.videoUrl && (
              <div className="mt-8">
                <YouTubeEmbed url={section.videoUrl} title={`${section.title ?? project.title} — video`} />
              </div>
            )}

            {section.videoUrls && section.videoUrls.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-4 md:-mx-12 md:grid-cols-2 lg:-mx-24">
                {section.videoUrls.map((url, i) => (
                  <YouTubeEmbed key={i} url={url} title={`${project.title} — video ${i + 1}`} />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </CaseStudyLayout>
  );
}
