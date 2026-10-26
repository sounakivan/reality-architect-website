import Link from "next/link";
import { ArrowRight, FileText, Glasses, Hand, Brain, GraduationCap, Mail, Linkedin } from "lucide-react";
import HudFrame from "@/components/HudFrame";
import Media from "@/components/Media";
import TiltCard from "@/components/TiltCard";
import { Highlight, ProjectMeta, TechChips } from "@/components/ProjectCard";
import { featuredProjects, focusAreas, type Focus } from "@/data/projects";
import { site } from "@/data/site";

const proof = [
  { value: "100k+", label: "learners reached with VR training I designed" },
  { value: "25+", label: "VR simulations shipped at Transfr" },
  { value: "$214k", label: "projected savings from my AI production pipeline" },
  { value: "7+ yrs", label: "across XR, 3D and interactive AI" },
];

const focusIcons: Record<Focus, typeof Hand> = {
  "xr-interaction": Hand,
  "spatial-ai": Glasses,
  "neuro-wellness": Brain,
  learning: GraduationCap,
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="grid items-center gap-12 pb-16 pt-14 md:pt-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {site.availability}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            I design and ship <span className="text-holo">spatial experiences</span> — and build AI-driven systems that can scale them.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m Sounak, an XR designer and creative technologist. I&apos;ve built VR training used by 100k+ learners,
            interaction design systems inside a production Unity SDK, and bio-responsive XR. Currently, I&apos;m keenly
            exploring solutions on smartglasses and giving AI spatial context.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent"
            >
              View work <ArrowRight size={16} />
            </Link>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line-strong bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
            >
              <FileText size={16} /> Resume (PDF)
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <TiltCard className="mx-auto w-full max-w-sm lg:max-w-none">
            <HudFrame className="relative aspect-[4/5] w-full shadow-[0_0_60px_rgba(94,234,212,0.08)]">
              <Media
                src="/sounak-ghosh.webp"
                alt="Portrait of Sounak Ghosh"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 384px"
                className="object-cover object-[50%_40%]"
              />
            </HudFrame>
          </TiltCard>
        </div>
      </section>

      {/* Proof */}
      <section aria-label="Highlights" className="border-y border-line py-10">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {proof.map((p) => (
            <div key={p.value}>
              <dt className="sr-only">{p.label}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight md:text-4xl"><span className="text-holo">{p.value}</span></dd>
              <dd className="mt-1 text-sm leading-snug text-muted">{p.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Selected work */}
      <section className="py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Selected work</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">Shipped, measured, in headset</h2>
          </div>
          <Link href="/projects" className="hidden shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-accent sm:inline-flex">
            All case studies <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-20 md:space-y-28">
          {featuredProjects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid items-center gap-8 md:grid-cols-12 md:gap-12">
              {project.image && (
                <HudFrame className={`relative aspect-video w-full md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                  <Media
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </HudFrame>
              )}
              <div className="space-y-4 md:col-span-5">
                <ProjectMeta project={project} />
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">{project.title}</h3>
                {project.caseStudyMeta?.role && <p className="text-sm text-muted">{project.caseStudyMeta.role}</p>}
                <p className="leading-relaxed text-muted">{project.description}</p>
                {project.highlight && <Highlight text={project.highlight} />}
                <TechChips items={project.techStack} />
                <span className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-accent">
                  Read case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/projects" className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent sm:hidden">
          All case studies <ArrowRight size={14} />
        </Link>
      </section>

      {/* Focus areas */}
      <section className="border-t border-line py-20 md:py-28">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">What I work on</p>
        <h2 className="mb-12 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Interaction design and engineering for the spatial layer
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((f) => {
            const Icon = focusIcons[f.id];
            return (
              <div key={f.id} className="rounded-xl border border-line bg-surface/60 p-6">
                <Icon size={20} className="mb-4 text-accent" />
                <h3 className="font-display text-lg font-semibold text-ink">{f.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.blurb}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-20 rounded-2xl border border-line bg-surface/60 px-6 py-14 text-center md:mb-28 md:px-12">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Building something in XR, smartglasses or spatial AI?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          I&apos;m open to new opportunities — full-time teams, startups, freelance and consulting. If you&apos;re designing what
          people do with their hands, eyes and voice in spatial computing, let&apos;s talk.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
