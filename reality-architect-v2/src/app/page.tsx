import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Box } from "lucide-react";
import { projects } from "@/data/projects";
import ConstructionToast from "@/components/ConstructionToast";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 py-32 overflow-hidden relative">
      <ConstructionToast />
      <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-[0.15] pointer-events-none mix-blend-screen overflow-hidden">
        <Image
          src="/hero_ai_visual.png"
          alt="AI Mission Control"
          width={1200}
          height={1200}
          className="object-cover w-full h-full max-w-6xl max-h-6xl scale-110"
          priority
        />
      </div>

      <div className="w-full max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 z-10 relative">
        <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-mono text-accent shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
          System Online // V.2.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-sans tracking-tight text-white max-w-4xl leading-tight font-bold">
          Creative <span className="text-glow text-accent">Technologist</span><br />
          & AI Strategist.
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-[#888] font-mono leading-relaxed">
          Hi I'm Sounak. I design interactive worlds where imagination meets intelligence. 
          I help companies, productions and clients orchestrate agentic workflows and immersive systems using human-centric design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link href="/protocol" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-[#ccc]">
            Read Protocol <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#333] bg-[#111] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#222] hover:border-[#444]">
            View Vault <Terminal size={16} />
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-5xl mt-32 z-10">
        <h2 className="text-sm uppercase tracking-widest text-[#888] font-mono mb-8 flex items-center gap-4">
          <span className="h-px bg-[#222] flex-1"></span>
          Featured Projects
          <span className="h-px bg-[#222] flex-1"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["transfr-vr-education", "inner-light", "scriptr"].map((slug) => {
            const project = projects.find(p => p.slug === slug);
            if (!project) return null;
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="p-6 border border-[#222] bg-black/50 backdrop-blur-md rounded-lg hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#666] bg-[#111] px-2 py-1 rounded border border-[#222]">
                  {project.category}
                </span>
              </div>
              {project.image && (
                <div className="relative w-full h-48 mb-5 rounded-md overflow-hidden border border-[#222]">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              )}
              <h3 className="text-lg text-white font-medium mb-3">{project.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed line-clamp-3 mb-6 flex-grow">{project.description}</p>
                <div className="mt-auto text-xs font-mono text-accent flex items-center">
                  View Case Study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-32 pt-16 border-t border-[#222] flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-accent/10 border border-accent/20 mb-6 group-hover:bg-accent/20 transition-colors">
            <Terminal size={24} className="text-accent shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">Ready to Architect Your Reality?</h2>
          <p className="text-[#888] font-mono text-sm max-w-lg mb-10 leading-relaxed">
            Whether you're developing an agentic workflow, a spatial computing prototype, or an immersive product strategy, let's establish a connection.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-accent text-black px-8 py-4 rounded-sm font-mono text-sm uppercase tracking-widest font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1">
            Initialize Comms <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
