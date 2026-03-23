"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Layers, LayoutTemplate, Bot, Terminal, TerminalSquare, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import clsx from "clsx";

export default function DashboardNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Mission Control", icon: TerminalSquare },
    { href: "/solutions/neuro-tech", label: "Neuro-tech", icon: Brain },
    { href: "/solutions/vr-education", label: "VR Education", icon: Layers },
    { href: "/solutions/xr-design", label: "XR Design", icon: LayoutTemplate },
    { href: "/solutions/agentic-workflows", label: "AI Workflows", icon: Bot },
    { href: "/protocol", label: "Protocol", icon: Terminal },
    { href: "/projects", label: "All Projects", icon: Layers },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <aside className="w-full md:w-64 h-auto md:h-[100dvh] bg-black/80 md:bg-black/40 backdrop-blur-md border-b md:border-b-0 md:border-r border-[#222] z-[150] sticky top-0 md:relative flex flex-col transition-all duration-300">
      <div className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 rounded bg-accent/10 border border-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
            <div className="w-3 h-3 bg-accent rounded-sm shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
          </div>
          <div className="min-w-0">
            <h1 className="text-white font-mono text-sm tracking-widest uppercase truncate max-w-[130px] sm:max-w-none">Sounak Ghosh</h1>
            <p className="text-[#888] text-[10px] uppercase tracking-widest font-mono truncate">Creative Tech</p>
          </div>
        </Link>
        <button 
          className="md:hidden text-[#888] hover:text-white transition-colors p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={clsx(
        "flex-1 flex flex-col justify-between px-6 transition-all duration-500 ease-in-out overflow-hidden md:max-h-[100dvh] md:opacity-100",
        isOpen ? "max-h-[800px] opacity-100 pb-6" : "max-h-0 opacity-0 md:pb-6"
      )}>
        <nav className="flex flex-col gap-2 pt-2 md:pt-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "flex items-center gap-3 px-3 py-3 md:py-2 rounded-md text-sm font-mono transition-all duration-300",
                  isActive
                    ? "bg-accent/10 text-accent border border-accent/30"
                    : "text-[#888] hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                <Icon size={16} className={clsx(isActive ? "text-accent" : "text-[#888]")} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-4 text-[#888]">
            <a href="https://github.com/sounakivan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-2 -ml-2">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/beingsounak/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-2">
              <Linkedin size={18} />
            </a>
            <a href="mailto:sounaktheghosh@gmail.com" className="hover:text-accent transition-colors p-2">
              <Mail size={18} />
            </a>
          </div>
          <div className="text-[10px] text-[#444] font-mono tracking-wider flex items-center">
            STATUS: ONLINE <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse ml-2" />
          </div>
        </div>
      </div>
    </aside>
  );
}
