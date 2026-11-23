// lowercased comments per rule 8
// root layout orchestrating the backend systems editorial monograph portfolio
import React, { Component, ErrorInfo, ReactNode, useCallback, useEffect, useState } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/navigation/Navbar";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { PersonaHero } from "@/components/hero/PersonaHero";
import { OsWorkspace } from "@/components/workspace/OsWorkspace";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { CommitStream } from "@/components/activity/CommitStream";
import { Footer } from "@/components/footer/Footer";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("react error boundary caught:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 text-center font-mono text-xs bg-[var(--bg)] text-[var(--ink)]">
          <div className="max-w-md space-y-4 border border-[var(--rule)] p-6 rounded-lg">
            <div className="font-medium">Application Error</div>
            <p className="text-[var(--ink-muted)] font-sans">{this.state.errorMessage}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-3 py-1.5 rounded bg-[var(--btn-bg)] text-[var(--btn-ink)] cursor-pointer"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainContent(): React.JSX.Element {
  return (
    <main id="main-content" tabIndex={-1} className="relative z-10 w-full focus:outline-none">
      <PersonaHero />
      <OsWorkspace />
      <ExperienceSection />
      <CommitStream />
      <Footer />
    </main>
  );
}

export function App(): React.JSX.Element {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const handleOpenPalette = useCallback(() => setIsPaletteOpen(true), []);
  const handleClosePalette = useCallback(() => setIsPaletteOpen(false), []);

  // inertial wheel smooth scrolling (skipped automatically under reduced motion)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      anchors: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // global cmd/ctrl+k command palette toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <RootErrorBoundary>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[130] focus:px-3.5 focus:py-2 focus:rounded-md focus:bg-[var(--btn-bg)] focus:text-[var(--btn-ink)] focus:text-xs focus:font-medium focus:shadow-lg"
      >
        Skip to content
      </a>
      {/* uniform archival paper grain above page bands and below navbar/modals */}
      <div aria-hidden="true" className="editorial-grain" />
      {/* wide-screen swiss architectural margin rails (72rem content + 32px breathing gutter) */}
      <div
        aria-hidden="true"
        className="hidden xl:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 z-[15] w-full max-w-[76rem] border-x border-[var(--rule)]/45"
      />
      <Navbar onOpenCommandPalette={handleOpenPalette} />
      <CommandPalette isOpen={isPaletteOpen} onClose={handleClosePalette} />
      <MainContent />
    </RootErrorBoundary>
  );
}

export default App;
