import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, CheckSquare } from "lucide-react";
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
        videoUrl={project.videoUrl}
        caseStudyMeta={project.caseStudyMeta}
        backHref="/projects"
        backLabel="Back to Vault"
      >
        {project.content?.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">{section.title}</h2>
            <p className="text-[#aaa] leading-relaxed font-mono">{section.body}</p>
            
            {section.list && section.list.length > 0 && (
              <ul className="mt-4 space-y-3 font-mono text-[#aaa]">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckSquare className="text-accent mt-1 shrink-0" size={16} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {section.images && section.images.length > 0 && (
              <div className={`mt-8 w-11/12 mx-auto grid gap-6 ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                {section.images.map((img, i) => (
                  <div key={i} className="relative flex justify-start items-center">
                    <img 
                      src={img} 
                      alt={`${section.title} visual ${i+1}`} 
                      className="max-w-full h-auto object-contain rounded-md border border-[#222] bg-[#0a0a0a] opacity-90 shadow-md hover:opacity-100 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
            )}

            {section.videoUrl && (
              <div className="mt-8 relative w-full aspect-video rounded-lg overflow-hidden border border-[#222] bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,229,255,0.1)]">
                <iframe
                  src={section.videoUrl.replace("watch?v=", "embed/")}
                  className="w-full h-full absolute top-0 left-0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
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
