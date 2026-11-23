// lowercased comments per rule 8
// monumental swiss editorial closing spread colophon footer
import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/config";
import { PRIMARY_RESUME } from "@/config/resumeLinks";
import { Magnetic } from "@/components/ui/Magnetic";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-[var(--rule)] px-5 sm:px-8 pt-16 sm:pt-20 pb-12 text-xs text-[var(--ink-muted)] w-full">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="font-serif-editorial text-5xl sm:text-7xl leading-[0.95] tracking-[-0.025em] text-[var(--ink)]">
              {portfolioData.personal.name}
            </div>
            <p className="font-mono text-xs text-[var(--ink-faint)]">
              IIT Kanpur &apos;26 · {portfolioData.personal.socialLinks.email}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium">
            <a
              href={PRIMARY_RESUME.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-[var(--ink)] hover:text-[var(--accent)] transition-colors leading-none"
              title={`Open ${PRIMARY_RESUME.title}`}
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={portfolioData.personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--ink)] transition-colors leading-none"
            >
              GitHub
            </a>
            <a
              href={portfolioData.personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--ink)] transition-colors leading-none"
            >
              LinkedIn
            </a>
            <a
              href={portfolioData.personal.socialLinks.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--ink)] transition-colors leading-none"
            >
              Kaggle
            </a>
            <Magnetic strength={4}>
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center justify-center gap-1 h-8 px-2.5 rounded-md border border-[var(--rule)] bg-[var(--surface)] surface-specular hover:border-[var(--accent)]/50 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors cursor-pointer font-mono text-[11px] leading-none"
                aria-label="Scroll back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--rule)] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[var(--ink-faint)]">
          <span>⌘K Command Palette</span>
          <span>Vite · React 19 · TypeScript · Zod · Schema.org JSON-LD</span>
        </div>
      </div>
    </footer>
  );
};
