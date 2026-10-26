import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HudFrame from "@/components/HudFrame";
import Media from "@/components/Media";
import type { Project } from "@/data/projects";

export function ProjectMeta({ project }: { project: Project }) {
  const parts = [project.caseStudyMeta?.company, project.year].filter(Boolean);
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
      {parts.join(" · ")}
    </p>
  );
}

export function Highlight({ text }: { text: string }) {
  return (
    <p className="flex items-start gap-2 text-sm font-medium text-ink">
      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(94,234,212,0.9)]" />
      {text}
    </p>
  );
}

export function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tools and technologies">
      {items.map((tech) => (
        <li key={tech} className="rounded-full border border-line-strong px-2.5 py-0.5 font-mono text-[11px] text-muted">
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-surface/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface"
    >
      {project.image ? (
        <HudFrame className="relative aspect-video w-full">
          <Media
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </HudFrame>
      ) : (
        // Only reachable for drafts, which are dev-only
        <HudFrame label="Draft · media pending" className="relative aspect-video w-full border-dashed border-accent-2/40 bg-accent-2/5">
          <span />
        </HudFrame>
      )}
      <div className="flex flex-1 flex-col gap-3 px-1 pt-5">
        <ProjectMeta project={project} />
        <h3 className="flex items-start justify-between gap-3 font-display text-xl font-semibold tracking-tight text-ink">
          {project.title}
          <ArrowUpRight size={18} className="mt-1 shrink-0 text-subtle transition-colors group-hover:text-accent" />
        </h3>
        {project.caseStudyMeta?.role && <p className="text-sm text-muted">{project.caseStudyMeta.role}</p>}
        {project.highlight && <Highlight text={project.highlight} />}
        <div className="mt-auto pt-2">
          <TechChips items={project.techStack} />
        </div>
      </div>
    </Link>
  );
}
