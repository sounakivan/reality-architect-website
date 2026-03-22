import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-12 lg:p-24 pb-32 font-mono">
      <Link href="/" className="inline-flex items-center text-sm text-[#888] hover:text-white mb-16 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> End Session
      </Link>
      
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <header className="border-b border-[#222] pb-8">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Send size={24} />
            <h1 className="text-2xl uppercase tracking-widest font-bold text-white">Initialize Comms</h1>
          </div>
          <p className="text-[#888] text-sm leading-relaxed mb-6">
            Establish a direct connection. Whether it's a project inquiry or an architecture discussion, submit your transmission below.
          </p>
        </header>

        <form action="https://formsubmit.co/sounaktheghosh@gmail.com" method="POST" className="space-y-8">
          <input type="hidden" name="_subject" value="New Transmission from Reality Architect Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="space-y-3">
            <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-[#666]">Identity</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required
              className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-accent transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-[#666]">Return Ping (Email)</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required
              className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-accent transition-colors"
              placeholder="email@domain.com"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-[#666]">Payload</label>
            <textarea 
              name="message" 
              id="message" 
              rows={5}
              required
              className="w-full bg-[#111] border border-[#333] rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Enter your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full inline-flex items-center justify-center bg-accent text-black px-6 py-4 rounded-sm font-mono text-sm uppercase tracking-widest font-bold hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Transmit Payload <Send size={16} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}
