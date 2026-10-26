import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import HudFrame from "@/components/HudFrame";
import Media from "@/components/Media";
import DevNote from "@/components/DevNote";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { TechChips, Highlight } from "@/components/ProjectCard";
import { isDev, type Project } from "@/data/projects";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">{children}</h2>;
}

export default function CaseStudyLayout({
  project,
  prev,
  next,
  children,
}: {
  project: Project;
  prev?: Project;
  next?: Project;
  children: React.ReactNode;
}) {
  const meta = project.caseStudyMeta;
  const hero = project.heroMedia ?? project.image;

  // Missing values render as a dev-only "pending" marker and are dropped from the production build.
  const summary = [
    { label: "Role", value: meta?.role },
    { label: "Company", value: meta?.company, href: meta?.companyUrl },
    { label: "Timeline", value: [project.year, meta?.timeline].filter(Boolean).join(" · ") || undefined },
    { label: "Team", value: project.team },
    { label: "Platform", value: project.platform },
  ].filter((row) => row.value || isDev);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-24 pt-10 sm:px-6 md:pt-14">
      <Link href="/projects" className="mb-10 inline-flex items-center text-sm text-muted transition-colors hover:text-ink">
        <ArrowLeft size={16} className="mr-2" /> All work
      </Link>

      {project.draft && <DevNote title="Draft — hidden in production" items={["Set draft: false in projects.ts once the content below is filled."]} />}

      {/* Header */}
      <header className="mt-4 space-y-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{project.category}</p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{project.title}</h1>
        <p className="max-w-2xl text-xl leading-relaxed text-muted">{project.description}</p>
        {project.highlight && <Highlight text={project.highlight} />}
      </header>

      {/* Hero */}
      <div className="mt-10">
        {hero ? (
          <HudFrame className="relative aspect-video w-full">
            <Media src={hero} alt={`${project.title} — hero`} fill priority sizes="(min-width: 1024px) 960px, 100vw" className={project.heroFit === "contain" ? "bg-white object-contain" : "object-cover"} />
          </HudFrame>
        ) : (
          <DevNote items={["Hero clip: 10–20 s in-headset or on-device capture (16:9)"]} />
        )}
      </div>

      {/* Summary: what a hiring manager scans first */}
      <section aria-label="Project summary" className="mt-12 grid gap-10 border-y border-line py-10 md:grid-cols-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:col-span-5 md:grid-cols-1">
          {summary.map((row) => (
            <div key={row.label}>
              <dt className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{row.label}</dt>
              <dd className="text-sm font-medium text-ink">
                {!row.value ? (
                  <span className="text-accent-2">pending</span>
                ) : row.href ? (
                  <a href={row.href} target="_blank" rel="noopener noreferrer" className="text-accent transition-colors hover:text-ink">
                    {row.value} ↗
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
          <div className="col-span-2 md:col-span-1">
            <dt className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Tools</dt>
            <dd>
              <TechChips items={project.techStack} />
            </dd>
          </div>
        </dl>

        <div className="md:col-span-7">
          <SectionLabel>What I did</SectionLabel>
          {project.contributions?.length ? (
            <ul className="space-y-3">
              {project.contributions.map((c) => (
                <li key={c} className="flex items-start gap-3 leading-relaxed text-ink">
                  <Check size={16} className="mt-1 shrink-0 text-accent" />
                  {c}
                </li>
              ))}
            </ul>
          ) : (
            <DevNote items={["3–6 first-person bullets of what you personally did"]} />
          )}
          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {l.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge / impact */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface/60 p-6">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-subtle">The challenge</h2>
          {project.challenge ? <p className="leading-relaxed text-muted">{project.challenge}</p> : <DevNote items={["Challenge: 2–3 sentences"]} />}
        </div>
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">The impact</h2>
          {project.impact ? <p className="font-medium leading-relaxed text-ink">{project.impact}</p> : <DevNote items={["Impact: 2–3 sentences"]} />}
        </div>
      </section>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section aria-label="Results" className="mt-6">
          <ul className={`grid grid-cols-2 gap-4 ${project.metrics.length === 5 ? "lg:grid-cols-5" : project.metrics.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {project.metrics.map((m) => (
              <li key={m.label} className="rounded-xl border border-line bg-surface/60 p-5">
                <p className="font-display text-3xl font-semibold tracking-tight text-ink">{m.value}</p>
                <p className="mt-1 text-sm leading-snug text-muted">{m.label}</p>
                {m.method && <p className="mt-2 text-xs leading-snug text-subtle">{m.method}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.todo && project.todo.length > 0 && (
        <div className="mt-6">
          <DevNote items={project.todo} />
        </div>
      )}

      {/* Walkthrough video */}
      {project.videoUrl && (
        <section className="mt-16">
          <SectionLabel>Watch</SectionLabel>
          <YouTubeEmbed url={project.videoUrl} title={`${project.title} — walkthrough`} />
        </section>
      )}

      {project.steamEmbed && (
        <div className="mt-10 overflow-x-auto">
          <iframe src={project.steamEmbed} title={`${project.title} on Steam`} width="646" height="190" className="max-w-full border-0" loading="lazy" />
        </div>
      )}

      {/* Story */}
      <article className="mx-auto mt-20 max-w-3xl">{children}</article>

      {/* Prev / next */}
      <nav aria-label="More case studies" className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="group rounded-xl border border-line p-5 transition-colors hover:border-line-strong">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              <ArrowLeft size={12} /> Previous
            </span>
            <span className="mt-2 block font-display text-lg font-semibold text-ink group-hover:text-accent">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/projects/${next.slug}`} className="group rounded-xl border border-line p-5 text-right transition-colors hover:border-line-strong">
            <span className="flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Next <ArrowRight size={12} />
            </span>
            <span className="mt-2 block font-display text-lg font-semibold text-ink group-hover:text-accent">{next.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
