import Link from "next/link";
import { ArrowLeft, Terminal, ArrowRight } from "lucide-react";

export default function Protocol() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-12 lg:p-24 pb-32 font-mono">
      <Link href="/" className="inline-flex items-center text-sm text-[#888] hover:text-white mb-16 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> End Session
      </Link>

      <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">

        {/* Intro */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Terminal size={24} />
            <h1 className="text-2xl uppercase tracking-widest font-bold">The Strategic Creative Technologist</h1>
          </div>
          <p className="text-xl text-white font-medium leading-relaxed">
            Bridging the gap between the human heart and the machine.
          </p>
          <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
            I am a Creative Technologist and AI Strategist with 8+ years of experience navigating the intersection of XR, Generative AI, and Human-Centric Design. My work is grounded in the belief that technology is at its best when it serves as a bridge—connecting complex engineering to intuitive design, and business objectives to meaningful human experiences.
          </p>
        </section>

        {/* Operating Protocol */}
        <section className="space-y-8 pt-8 border-t border-[#222]">
          <header>
            <h2 className="text-xl uppercase tracking-wider text-accent mb-2">My Personal Operating Protocol</h2>
            <p className="text-[#888] text-sm leading-relaxed">
              How we will work together to build the future.
            </p>
          </header>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-white text-base uppercase tracking-wider flex items-center gap-2">
                <span className="text-[#666] text-sm">01.</span> The Bridge: Design, Engineering, &amp; Business
              </h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                I don&apos;t work in a silo. I thrive at the &quot;seams&quot; of an organization—facilitating the dialogue between SMEs, Engineers, and Designers. I translate &quot;abstract vision&quot; into &quot;functional prototype&quot; and &quot;business KPI&quot; into &quot;technical architecture&quot;.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white text-base uppercase tracking-wider flex items-center gap-2">
                <span className="text-[#666] text-sm">02.</span> AI Strategy over Hype
              </h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                I treat AI as a Strategic Force Multiplier, not a buzzword. My approach involves building AI workflows and processes that solve specific bottlenecks, such as scaling 3D asset production or automating complex simulation logic. I help you identify where AI can provide the most ROI without sacrificing the creative soul of the project.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white text-base uppercase tracking-wider flex items-center gap-2">
                <span className="text-[#666] text-sm">03.</span> Rapid, Iterative Prototyping
              </h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                Innovation is a series of experiments. I use Unity (C#), Unreal Engine, 3D softwares, Figma, Three.js, Node.js and other tools (including AI tools) to build &quot;proofs-of-concept&quot; fast. We test early, fail safely, and refine until the interaction feels seamless.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white text-base uppercase tracking-wider flex items-center gap-2">
                <span className="text-[#666] text-sm">04.</span> Radical Empathy &amp; Human Performance
              </h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                Whether designing educational simulations for middle schoolers or enterprise-level VR training, I lead with User Research and Feedback. My work on projects like Inner Light (leveraging EEG data in real-time) demonstrates my commitment to pushing the boundaries of what a &quot;user interface&quot; can be.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8 pt-8 border-t border-[#222]">
          <header>
            <h2 className="text-xl uppercase tracking-wider text-accent mb-6">Core Values</h2>
          </header>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-white text-sm uppercase tracking-wider">The Human Heart</h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                I am deeply interested in what makes us human—love, poetry, and music—and how these elements can be preserved in digital spaces.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white text-sm uppercase tracking-wider">Integrity in Innovation</h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                I value environments that prioritize creative freedom and rigorous technical standards over easy shortcuts.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white text-sm uppercase tracking-wider flex items-center gap-2">The &quot;Generalist&quot; Advantage</h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                From 3D Asset Creation to AI Automation, I maintain a high-level mastery over the full production pipeline to ensure nothing is lost in translation.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 pt-12 border-t border-[#222]">
          <h2 className="text-accent text-lg uppercase tracking-wider">Ready to connect?</h2>
          <p className="text-[#888] text-sm leading-relaxed mb-6">
            If these principles align with your next project or architectural challenge, establish a direct link.
          </p>
          <Link href="/contact" className="inline-flex w-max items-center bg-[#111] border border-[#333] text-white px-6 py-3 rounded-sm font-mono text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
            Contact Me <ArrowRight size={16} className="ml-2" />
          </Link>
        </section>

        <footer className="pt-8 text-[#666] text-xs">
          [END OF DOCUMENT] // REVISION: 2.1.0
        </footer>
      </div>
    </div>
  );
}
