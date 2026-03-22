import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // If it's a deep-dive case study with challenge and impact, use the CaseStudyLayout
  if (project.challenge && project.impact) {
    return (
      <CaseStudyLayout
        title={project.title}
        subtitle={project.description}
        tags={project.techStack}
        challenge={project.challenge}
        impact={project.impact}
        backHref="/projects"
        backLabel="Back to Vault"
      >
        {project.content?.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </CaseStudyLayout>
    );
  }

  // Otherwise, render standard project detail view
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-12 lg:p-24 pb-32">
      <Link href="/projects" className="inline-flex items-center text-sm font-mono text-[#888] hover:text-white mb-12 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Vault
      </Link>
      
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-sm bg-[#111] border border-[#333] text-[#aaa] font-mono text-xs uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">{project.title}</h1>
        
        <div className="p-6 border border-[#222] bg-black/30 rounded-lg my-12">
          <p className="text-[#ccc] leading-relaxed font-mono">
            {project.description}
          </p>
        </div>

        <div className="my-8">
          <h3 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Core Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
             {project.techStack.map(tech => (
                <span key={tech} className="text-sm font-mono text-white border border-[#444] px-4 py-2 rounded-md bg-[#111]">
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
