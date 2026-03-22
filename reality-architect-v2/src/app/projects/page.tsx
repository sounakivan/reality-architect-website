import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Box } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsGallery() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 lg:p-24 pb-32">
      <Link href="/" className="inline-flex items-center text-sm font-mono text-[#888] hover:text-white mb-12 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Base
      </Link>
      
      <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight mb-4">Project Vault</h1>
        <p className="text-lg text-[#888] font-mono">A structured archive of notable immersive prototypes and interactive deployments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block p-6 border border-[#222] bg-black/40 rounded-lg hover:border-accent/40 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#666] bg-[#111] px-2 py-1 rounded border border-[#222]">
                {project.category}
              </span>
            </div>
            {project.image && (
              <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden border border-[#222]">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            )}
            <h2 className="text-xl text-white font-medium mb-3">{project.title}</h2>
            <p className="text-sm text-[#888] leading-relaxed mb-6 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map(tech => (
                <span key={tech} className="text-xs font-mono text-[#555] opacity-80 border border-[#333] px-2 py-0.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
