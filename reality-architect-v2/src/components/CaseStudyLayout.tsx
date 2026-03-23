import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyLayout({
  title,
  subtitle,
  tags,
  challenge,
  impact,
  videoUrl,
  caseStudyMeta,
  backHref = "/",
  backLabel = "Back to Base",
  children,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  challenge: string;
  impact: string;
  videoUrl?: string;
  backHref?: string;
  backLabel?: string;
  caseStudyMeta?: { role: string; company: string; companyUrl: string; timeline: string };
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-12 lg:p-24 pb-32">
      <Link href={backHref} className="inline-flex items-center text-sm font-mono text-[#888] hover:text-white mb-12 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> {backLabel}
      </Link>
      
      <div className="space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-sm bg-accent/5 border border-accent/20 text-accent font-mono text-xs uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">{title}</h1>
        <p className="text-xl text-[#888] leading-relaxed max-w-2xl">{subtitle}</p>

        {caseStudyMeta && (
          <div className="mt-12 pt-8 border-t border-[#222] grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
            <div>
              <h4 className="text-[#555] text-xs uppercase tracking-widest font-mono mb-2">Role</h4>
              <p className="text-white text-sm font-medium">{caseStudyMeta.role}</p>
            </div>
            <div>
              <h4 className="text-[#555] text-xs uppercase tracking-widest font-mono mb-2">Company</h4>
              {caseStudyMeta.companyUrl ? (
                <a href={caseStudyMeta.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-1">
                  {caseStudyMeta.company} <span className="text-[10px] uppercase">↗</span>
                </a>
              ) : (
                <p className="text-white text-sm font-medium">{caseStudyMeta.company}</p>
              )}
            </div>
            <div>
              <h4 className="text-[#555] text-xs uppercase tracking-widest font-mono mb-2">Timeline</h4>
              <p className="text-white text-sm font-medium">{caseStudyMeta.timeline}</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        <div className="p-6 border border-[#222] bg-black/30 rounded-lg">
          <h3 className="text-accent font-mono text-sm uppercase tracking-widest mb-3">The Challenge</h3>
          <p className="text-[#ccc] leading-relaxed text-sm">{challenge}</p>
        </div>
        <div className="p-6 border border-t-accent/50 bg-black/30 rounded-lg shadow-[0_10px_30px_rgba(0,229,255,0.05)]">
          <h3 className="text-accent font-mono text-sm uppercase tracking-widest mb-3">The Impact</h3>
          <p className="text-white leading-relaxed font-medium">{impact}</p>
        </div>
      </div>

      {videoUrl && (
        <div className="mb-16 relative w-full aspect-video rounded-lg overflow-hidden border border-[#222] bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,229,255,0.1)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
          <iframe
            src={videoUrl.replace("watch?v=", "embed/")}
            className="w-full h-full absolute top-0 left-0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <article className="prose prose-invert prose-p:text-[#aaa] prose-headings:text-white prose-a:text-accent prose-strong:text-white max-w-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
        {children}
      </article>
    </div>
  );
}
