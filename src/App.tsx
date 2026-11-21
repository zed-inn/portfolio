// lowercased comments per rule 8
// root layout orchestrating the backend systems editorial monograph portfolio
import React, { Component, ErrorInfo, ReactNode, useEffect, useState } from "react";
import { AtmosphereProvider } from "@/context/AtmosphereContext";
import { AtmosphereCanvas } from "@/components/canvas/AtmosphereCanvas";
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
    <main className="relative z-10 w-full">
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

  // global cmd/ctrl+k command palette toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      <AtmosphereProvider>
        <AtmosphereCanvas />
        <Navbar onOpenCommandPalette={() => setIsPaletteOpen(true)} />
        <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
        <MainContent />
      </AtmosphereProvider>
    </RootErrorBoundary>
  );
}

export default App;
