import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work | Sounak Ghosh",
  description: "Case studies in XR interaction, spatial AI, neuro-responsive XR and immersive learning.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-16 sm:px-6 md:pt-24">
      <header className="mb-10 max-w-2xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Work</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">Case studies</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Shipped XR products, interaction systems and research prototypes — each with my role, the constraints, and what
          changed because of the work.
        </p>
      </header>
      <WorkGrid />
    </div>
  );
}
