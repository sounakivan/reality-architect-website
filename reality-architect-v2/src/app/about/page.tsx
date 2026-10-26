import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About | Sounak Ghosh",
  description: "XR designer and creative technologist: background, skills, experience and recognition.",
};

const principles = [
  {
    title: "I work at the seams",
    body: "I translate between SMEs, engineers and designers — turning an abstract brief into a playable prototype, and a business KPI into a technical architecture.",
  },
  {
    title: "Prototype early, in the headset",
    body: "Interactions only make sense when you feel them. I build proofs-of-concept fast in Unity, Unreal or WebXR, test with users, and iterate until the interaction disappears.",
  },
  {
    title: "AI where it removes real bottlenecks",
    body: "I use AI to solve specific production problems — script generation, semantic asset search, auto-built playable scenes — not as a feature for its own sake.",
  },
  {
    title: "Design for every body",
    body: "From hands-free voice + gaze controls to EEG-driven avatars, I push past the default controller-in-each-hand assumption of what an interface can be.",
  },
];

const skills = [
  { group: "XR & engines", items: ["Unity (C#)", "Unreal Engine (Blueprints)", "Oculus / Meta VR", "AR", "WebXR", "Three.js"] },
  { group: "Interaction & UX", items: ["Spatial UX", "XR interaction systems", "Design systems", "Figma", "User research & testing", "Rapid prototyping"] },
  { group: "3D & graphics", items: ["Maya", "Blender", "Substance Painter", "Shader Graph & custom shaders", "Photogrammetry", "Gaussian splatting"] },
  { group: "AI & automation", items: ["LLM system prompts & context engineering", "RAG & vector embeddings", "Agentic workflows (n8n)", "Gemini / GPT-4", "Python", "Node.js"] },
  { group: "Sensing & neurotech", items: ["EEG / BCI (Emotiv)", "Biofeedback", "IMU-based sensing", "Full-body IK avatars"] },
];

const experience = [
  {
    role: "Senior Technical XR Designer",
    org: "Transfr",
    when: "2022 – present",
    note: "Designed and built 25+ VR career-training simulations; shaped the Unity SDK's interaction system and Node Flow templates; designed E2Engine and Scriptr, AI pipelines that turn storyboards into playable sims.",
  },
  {
    role: "MS, Integrated Digital Media",
    org: "NYU Tandon School of Engineering",
    when: "2022",
    note: "Thesis: Inner Light — real-time EEG-driven avatar embodiment in VR, exhibited at MOCDA.",
  },
  {
    role: "3D Artist & Environment Designer",
    org: "Verizon / NYU Create Lab",
    when: "18 months",
    note: "Looking Inside Cells — Unreal Engine VR for middle-school biology, released on Steam.",
  },
  {
    role: "3D Artist",
    org: "Foretell Reality / Glimpse Group",
    when: "6 months",
    note: "Avatars, environments and UI for a VR group-therapy platform.",
  },
  {
    role: "3D Artist",
    org: "L3A Studio / Getty Villa Museum",
    when: "1 month",
    note: "Photogrammetry digital twin for a location-based AR museum app.",
  },
  {
    role: "Lead 3D Artist & Environment Designer",
    org: "Avolve Innovations",
    when: "2018",
    note: "Scuba's Ocean Odyssey — educational VR released on Oculus Rift, shown at Play NYC.",
  },
];

const recognition = [
  "Selected for the Builders Program, UnitedXR Brussels (December 2026) — pitching Lookwise on stage and to investors",
  "1st place, Sales Track, XRCC 2026 Hackathon, Berlin (Lookwise)",
  "Featured artist, MOCDA Digital Summer Show (2022)",
  "Best Research Application, XR Brain Jam (2021)",
  "Speaker, Games for Change Festival (2021)",
  "Showcased at Play NYC (2018)",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-16 sm:px-6 md:pt-24">
      <header className="max-w-3xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          XR designer who builds the systems, not just the scenes.
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m Sounak Ghosh, a creative technologist with 7+ years across XR, 3D and interactive AI. I&apos;ve worked as a
            3D artist, technical designer, interaction designer and AI systems designer — so I can take an idea from sketch to
            shipped build and speak each discipline&apos;s language along the way.
          </p>
          <p>
            Today I&apos;m focused on <span className="text-ink">smartglasses and spatial context for AI</span>: how assistants
            can understand the room you&apos;re in and respond through glanceable, hands-free interfaces.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent"
          >
            <FileText size={16} /> Download resume
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight text-ink">How I work</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="rounded-xl border border-line bg-surface/60 p-6">
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight text-ink">Skills & tools</h2>
        <dl className="divide-y divide-line">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-3 py-5 md:grid-cols-4">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle md:pt-1">{s.group}</dt>
              <dd className="flex flex-wrap gap-2 md:col-span-3">
                {s.items.map((item) => (
                  <span key={item} className="rounded-md border border-line-strong bg-surface px-3 py-1 text-sm text-ink">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight text-ink">Experience & education</h2>
        <ol className="relative space-y-8 border-l border-line pl-6">
          {experience.map((e) => (
            <li key={`${e.org}-${e.role}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(94,234,212,0.8)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {e.role} <span className="font-normal text-muted">· {e.org}</span>
                </h3>
                <span className="font-mono text-xs text-subtle">{e.when}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{e.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-ink">Recognition</h2>
        <ul className="space-y-3">
          {recognition.map((r) => (
            <li key={r} className="flex items-start gap-3 text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
              {r}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
