import type { Metadata } from "next";
import { Send, Mail, Linkedin, FileText } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Sounak Ghosh",
  description: "Get in touch with Sounak Ghosh about XR, smartglasses and spatial AI work — roles, startups, freelance and consulting.",
};

const field =
  "w-full rounded-md border border-line-strong bg-surface px-4 py-3 text-ink placeholder:text-subtle transition-colors focus:border-accent focus:outline-none";

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-14 px-4 pb-24 pt-16 sm:px-6 md:grid-cols-5 md:pt-24">
      <header className="md:col-span-2">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">Let&apos;s talk</h1>
        <p className="mt-4 leading-relaxed text-muted">
          {site.availability} — roles, startups, freelance projects or consulting, I&apos;m happy to talk. The fastest way to reach me is email or LinkedIn, or use the form.
        </p>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-ink transition-colors hover:text-accent">
              <Mail size={16} className="text-accent" /> {site.email}
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-ink transition-colors hover:text-accent">
              <Linkedin size={16} className="text-accent" /> linkedin.com/in/beingsounak
            </a>
          </li>
          <li>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-ink transition-colors hover:text-accent">
              <FileText size={16} className="text-accent" /> Resume (PDF)
            </a>
          </li>
        </ul>
      </header>

      <form action={`https://formsubmit.co/${site.email}`} method="POST" className="space-y-6 md:col-span-3">
        <input type="hidden" name="_subject" value="New message from hellosounak.com" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-ink">Name</label>
          <input type="text" name="name" id="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
          <input type="email" name="email" id="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-ink">Message</label>
          <textarea name="message" id="message" rows={6} required className={`${field} resize-none`} placeholder="What you're building, and how I could help" />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent"
        >
          Send message <Send size={16} />
        </button>
      </form>
    </div>
  );
}
