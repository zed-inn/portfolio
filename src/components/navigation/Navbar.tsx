// lowercased comments per rule 8
// swiss editorial hairline navigation bar with centered controls and single resume cta
import React, { useEffect, useState } from "react";
import { ArrowUpRight, Command, Moon, Sun } from "lucide-react";
import { PRIMARY_RESUME } from "@/config/resumeLinks";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return true;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("portfolio_theme", isDark ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", isDark ? "#0a0a0a" : "#f7f6f2");
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--rule)]">
      <div className="max-w-5xl mx-auto h-full px-5 sm:px-8 flex items-center justify-between text-xs">
        {/* wordmark */}
        <a
          href="#"
          className="inline-flex items-center gap-2.5 text-[var(--ink)] font-medium tracking-tight leading-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
          <span className="text-sm">Kartikey Kumar</span>
        </a>

        {/* quiet section links */}
        <nav
          className="hidden md:flex items-center gap-8 text-[var(--ink-muted)] font-medium"
          aria-label="Primary sections"
        >
          <a href="#workspace" className="hover:text-[var(--ink)] transition-colors leading-none">
            Systems
          </a>
          <a href="#experience" className="hover:text-[var(--ink)] transition-colors leading-none">
            Experience
          </a>
          <a href="#log" className="hover:text-[var(--ink)] transition-colors leading-none">
            Log
          </a>
        </nav>

        {/* pixel-centered utility controls */}
        <div className="flex items-center gap-2">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="hidden sm:inline-flex items-center justify-center gap-1 h-8 px-2.5 rounded-md border border-[var(--rule)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--rule-strong)] transition-colors cursor-pointer font-mono text-[11px] leading-none"
              aria-label="Open command palette (Cmd+K or Ctrl+K)"
              title="Command Palette (⌘K / Ctrl+K)"
            >
              <Command className="w-3 h-3 shrink-0" />
              <span>K</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--rule)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--rule-strong)] transition-colors cursor-pointer"
            aria-label={isDark ? "Switch to Warm Paper light mode" : "Switch to Dark Ink mode"}
            title={isDark ? "Warm Paper (Light)" : "Dark Ink (Dark)"}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 shrink-0" /> : <Moon className="w-3.5 h-3.5 shrink-0" />}
          </button>

          <a
            href={PRIMARY_RESUME.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 h-8 px-3.5 rounded-md bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-[var(--btn-ink)] font-medium text-xs leading-none transition-colors active:scale-[0.98]"
            title={`Open ${PRIMARY_RESUME.title}`}
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-75" />
          </a>
        </div>
      </div>
    </header>
  );
};
