"use client";

import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";

export default function ConstructionToast() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-[100] animate-in slide-in-from-top-4 fade-in duration-500">
      <div className="bg-[#0a0a0a] border border-accent/40 shadow-[0_0_20px_rgba(0,229,255,0.15)] rounded-md p-4 flex items-start gap-4 max-w-sm backdrop-blur-md">
        <AlertTriangle className="text-accent mt-0.5 shrink-0 animate-pulse" size={18} />
        <div className="flex-1">
          <p className="text-white font-mono text-sm tracking-wide uppercase">
            Site is under construction.
          </p>
          <p className="text-[#888] text-xs mt-1 leading-relaxed">
            Some systems are still being calibrated.
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-[#666] hover:text-white transition-colors"
          aria-label="Dismiss notice"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
