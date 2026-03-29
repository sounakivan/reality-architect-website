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
            <h1 className="text-2xl uppercase tracking-widest font-bold">Protocol // How I Build</h1>
          </div>
          <p className="text-[#888] text-sm leading-relaxed">
            These are my operating procedures for building prototypes.
          </p>
        </header>

        <section className="space-y-6 pb-8 border-b border-[#222]">
          <h2 className="text-white text-xl font-bold tracking-wider">Bridging the gap between the human heart and the machine.</h2>
          <p className="text-[#aaa] text-sm leading-relaxed">
            I am a <strong className="text-white font-medium">Creative Technologist and AI Strategist</strong> with over 7+ years of experience navigating the intersection of XR, 3D Art, Creative Coding and Human-Centric Design. My work is grounded in the belief that technology is at its best when it serves as a bridge connecting complex engineering to intuitive design, and business objectives to meaningful human experiences.
          </p>
        </section>

        <div className="pt-8 space-y-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-white text-lg uppercase tracking-wider font-bold">My Personal Operating Protocol</h2>
              <p className="text-[#888] text-sm italic">How we will work together to build the future.</p>
            </div>

            <section className="space-y-4">
              <h3 className="text-white text-md uppercase tracking-wider">01. The Bridge: Design, Engineering, & Business</h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                I don&apos;t work in a silo. I thrive at the &quot;seams&quot; of an organization - facilitating the dialogue between <strong className="text-white font-medium">SMEs</strong>, <strong className="text-white font-medium">Engineers</strong>, and <strong className="text-white font-medium">Designers</strong>. I translate &quot;abstract vision&quot; into &quot;functional prototype&quot; and &quot;business KPI&quot; into &quot;technical architecture&quot;.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-white text-md uppercase tracking-wider">02. AI Strategy over Hype</h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                I treat AI as a <strong className="text-white font-medium">Strategic Force Multiplier</strong>, not a buzzword. My approach involves building <strong className="text-white font-medium">AI workflows and processes</strong> that solve specific bottlenecks, such as scaling 3D asset production or automating complex simulation logic. I help you identify where AI can provide the most ROI without sacrificing the creative soul of the project.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-white text-md uppercase tracking-wider">03. Rapid, Iterative Prototyping</h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                Innovation is a series of experiments. I use Unity (C#), Unreal Engine, Three.js (webXR), which are just a few tools in my toolkit, to build &quot;proofs-of-concept&quot; fast. We test early, fail safely, and refine until the interaction feels seamless.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-white text-md uppercase tracking-wider">04. Radical Empathy & Human Performance</h3>
              <p className="text-[#aaa] text-sm leading-relaxed border-l-2 border-[#333] pl-4 py-1">
                Whether designing educational simulations for middle schoolers or enterprise-level VR training, I lead with <strong className="text-white font-medium">User Research and Feedback</strong>. My work on projects like <strong className="text-white font-medium">Inner Light</strong> (leveraging EEG data in real-time) demonstrates my commitment to pushing the boundaries of what a &quot;user interface&quot; can be.
              </p>
            </section>
          </div>

          <div className="space-y-8 pt-8 border-t border-[#222]">
            <h2 className="text-white text-lg uppercase tracking-wider font-bold">Core Values</h2>

            <ul className="space-y-6">
              <li className="text-[#aaa] text-sm leading-relaxed flex flex-col gap-1">
                <strong className="text-accent uppercase tracking-wider text-xs">The Human Heart</strong>
                <span className="border-l-2 border-[#333] pl-4 py-1">I am deeply interested in what makes us human - love, poetry, and music - and how these elements can be preserved in digital spaces.</span>
              </li>
              <li className="text-[#aaa] text-sm leading-relaxed flex flex-col gap-1">
                <strong className="text-accent uppercase tracking-wider text-xs">Integrity in Innovation</strong>
                <span className="border-l-2 border-[#333] pl-4 py-1">I value environments that prioritize creative freedom and rigorous technical standards over easy shortcuts.</span>
              </li>
              <li className="text-[#aaa] text-sm leading-relaxed flex flex-col gap-1">
                <strong className="text-accent uppercase tracking-wider text-xs">The &quot;Generalist&quot; Advantage</strong>
                <span className="border-l-2 border-[#333] pl-4 py-1">From <strong className="text-white font-medium">3D Asset Creation</strong> to <strong className="text-white font-medium">AI Automation</strong>, I maintain a high-level mastery over the full production pipeline to ensure nothing is lost in translation.</span>
              </li>
            </ul>
          </div>
        </div>

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
