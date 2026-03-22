import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyLayout({
  title,
  subtitle,
  tags,
  challenge,
  impact,
  backHref = "/",
  backLabel = "Back to Base",
  children,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  challenge: string;
  impact: string;
  backHref?: string;
  backLabel?: string;
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

      <article className="prose prose-invert prose-p:text-[#aaa] prose-headings:text-white prose-a:text-accent prose-strong:text-white max-w-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
        {children}
      </article>
    </div>
  );
}
