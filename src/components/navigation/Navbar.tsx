// lowercased comments per rule 8
// swiss editorial full-width hairline navbar with sliding accent underline and scroll progress bar
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Command, Moon, Sun } from "lucide-react";
import { PRIMARY_RESUME } from "@/config/resumeLinks";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

type SectionId = "workspace" | "experience" | "log";

const NAV_ITEMS: Array<{ id: SectionId; label: string }> = [
  { id: "workspace", label: "Systems" },
  { id: "experience", label: "Experience" },
  { id: "log", label: "Log" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return true;
    return document.documentElement.classList.contains("dark");
  });

  const [scrolled, setScrolled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > 16;
  });

  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const updateScrollState = () => {
      rafId = null;
      const y = window.scrollY;
      setScrolled(y > 16);

      if (y < 160) {
        setActiveSection(null);
        return;
      }

      const nearBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 48;
      if (nearBottom) {
        setActiveSection("log");
        return;
      }

      const threshold = window.innerHeight * 0.38;
      let current: SectionId | null = null;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 h-14 z-50 px-5 sm:px-8 border-b transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/88 backdrop-blur-md border-[var(--rule)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between text-xs">
        {/* wordmark */}
        <a
          href="#"
          className="inline-flex items-center gap-2.5 text-[var(--ink)] font-medium tracking-tight leading-none"
        >
          <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
          <span className="text-sm">Kartikey Kumar</span>
        </a>

        {/* quiet section links with razor-thin sliding accent underline */}
        <nav
          className="hidden md:flex items-center gap-8 text-[var(--ink-muted)] font-medium"
          aria-label="Primary sections"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1.5 transition-colors leading-none ${
                  isActive ? "text-[var(--ink)]" : "hover:text-[var(--ink)]"
                }`}
              >
                <span>{item.label}</span>
                {isActive &&
                  (prefersReducedMotion ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[var(--accent)]"
                    />
                  ) : (
                    <motion.span
                      layoutId="nav-active-underline"
                      aria-hidden="true"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[var(--accent)]"
                    />
                  ))}
              </a>
            );
          })}
        </nav>

        {/* crisp swiss rounded-md utility controls */}
        <div className="flex items-center gap-2">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="hidden sm:inline-flex items-center justify-center gap-1 h-8 px-2.5 rounded-md border border-[var(--rule)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--accent)]/50 transition-colors cursor-pointer font-mono text-[11px] leading-none"
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
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--rule)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--accent)]/50 transition-colors cursor-pointer"
            aria-label={isDark ? "Switch to Warm Paper light mode" : "Switch to Dark Ink mode"}
            title={isDark ? "Warm Paper (Light)" : "Dark Ink (Dark)"}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 shrink-0" /> : <Moon className="w-3.5 h-3.5 shrink-0" />}
          </button>

          <a
            href={PRIMARY_RESUME.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-1.5 h-8 px-3.5 rounded-md bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-[var(--btn-ink)] font-medium text-xs leading-none transition-colors active:scale-[0.98]"
            title={`Open ${PRIMARY_RESUME.title}`}
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-75 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* ultra-thin gpu-accelerated scroll progress hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: prefersReducedMotion ? scrollYProgress : smoothProgress }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-[var(--accent)]/85"
      />
    </header>
  );
};
