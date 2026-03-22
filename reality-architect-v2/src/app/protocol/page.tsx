import Link from "next/link";
import { ArrowLeft, Terminal, ArrowRight } from "lucide-react";

export default function Protocol() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-12 lg:p-24 pb-32 font-mono">
      <Link href="/" className="inline-flex items-center text-sm text-[#888] hover:text-white mb-16 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> End Session
      </Link>
      
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <header className="border-b border-[#222] pb-8">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Terminal size={24} />
            <h1 className="text-2xl uppercase tracking-widest font-bold">Protocol // Manifesto</h1>
          </div>
          <p className="text-[#888] text-sm leading-relaxed">
            Standard operating procedures for creative technology, system design, and AI orchestration.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-white text-lg uppercase tracking-wider">01. Human-in-the-Loop is Non-Negotiable</h2>
          <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
            We do not automate indiscriminately. Systems should orchestrate the mundane to elevate human creativity. The final gatekeeper must always be human consciousness, reserving cognitive friction for decisions that actually matter.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-white text-lg uppercase tracking-wider">02. Spatial Depth Over Flat Surfaces</h2>
          <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
            Interfaces should recognize the physical reality of the user. Depth, motion, and interaction metaphors are not just embellishments; they are cognitive scaffolding. We design systems that understand presence.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-white text-lg uppercase tracking-wider">03. Composable Over Bespoke</h2>
          <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
            Build modules, not monuments. Every interaction pattern, data pipeline, and AI prompt must be architected so it can be broken down, reused, and scaled across entirely new verticals without rebuilding from scratch.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-white text-lg uppercase tracking-wider">04. The Medium is the Machine</h2>
          <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
            Understanding the lower levels—how shaders compile, how LLMs calculate token probabilities, how EEG signals map to frequencies—is critical to orchestrating the macro experience. We do not fear the command line.
          </p>
        </section>

        <section className="space-y-4 pt-12 mt-12 border-t border-[#222]">
          <h2 className="text-accent text-lg uppercase tracking-wider">Ready to connect?</h2>
          <p className="text-[#888] text-sm leading-relaxed mb-6">
            If these principles align with your next project or architectural challenge, establish a direct link.
          </p>
          <Link href="/contact" className="inline-flex w-max items-center bg-[#111] border border-[#333] text-white px-6 py-3 rounded-sm font-mono text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
            Contact Me <ArrowRight size={16} className="ml-2" />
          </Link>
        </section>

        <footer className="pt-12 mt-12 border-t border-[#222] text-[#666] text-xs">
          [END OF DOCUMENT] // REVISION: 2.0.4
        </footer>
      </div>
    </div>
  );
}
