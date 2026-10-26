import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-ink">{site.name}</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(94,234,212,0.8)]" />
            {site.availability}
          </p>
        </div>
        <div className="flex items-center gap-1 text-muted">
          <a href={`mailto:${site.email}`} aria-label="Email" className="rounded-md p-2 transition-colors hover:text-accent">
            <Mail size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 transition-colors hover:text-accent">
            <Linkedin size={18} />
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md p-2 transition-colors hover:text-accent">
            <Github size={18} />
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume (PDF)" className="rounded-md p-2 transition-colors hover:text-accent">
            <FileText size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
