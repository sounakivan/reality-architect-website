"use client";

import { useState } from "react";
import clsx from "clsx";
import ProjectCard from "@/components/ProjectCard";
import { focusAreas, visibleProjects, type Focus } from "@/data/projects";

export default function WorkGrid() {
  const [filter, setFilter] = useState<Focus | "all">("all");
  const shown = filter === "all" ? visibleProjects : visibleProjects.filter((p) => p.focus.includes(filter));

  const options = [
    { id: "all" as const, label: "All work", count: visibleProjects.length },
    ...focusAreas.map((f) => ({
      id: f.id,
      label: f.label,
      count: visibleProjects.filter((p) => p.focus.includes(f.id)).length,
    })),
  ];

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => setFilter(o.id)}
            aria-pressed={filter === o.id}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              filter === o.id
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-line-strong text-muted hover:border-subtle hover:text-ink"
            )}
          >
            {o.label} <span className="ml-1 font-mono text-xs opacity-70">{o.count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {shown.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
