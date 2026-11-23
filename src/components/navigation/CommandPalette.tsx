// lowercased comments per rule 8
// streamlined theme-aware wai-aria combobox command palette (cmd/ctrl+k)
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Compass,
  Copy,
  FileText,
  FolderGit2,
  Search,
  X,
} from "lucide-react";
import { portfolioData } from "@/config";
import { PRIMARY_RESUME } from "@/config/resumeLinks";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaletteCommand {
  id: string;
  group: "Quick Actions" | "Jump to Section" | "Repositories";
  label: string;
  hint?: string;
  keywords: string;
  icon: React.ReactNode;
  run: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const copyTimerRef = useRef<number | null>(null);

  const clearCopyTimer = useCallback(() => {
    if (copyTimerRef.current !== null) {
      window.clearTimeout(copyTimerRef.current);
      copyTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearCopyTimer();
  }, [clearCopyTimer]);

  const jumpTo = useCallback(
    (hash: string) => {
      onClose();
      const el = document.querySelector(hash);
      if (el) {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      }
    },
    [onClose]
  );

  const copyEmail = useCallback(async () => {
    const email = portfolioData.personal.socialLinks.email;
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("clipboard api unavailable");
      }
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      clearCopyTimer();
      copyTimerRef.current = window.setTimeout(() => {
        setCopiedEmail(false);
        copyTimerRef.current = null;
        onClose();
      }, 650);
    } catch {
      window.location.href = `mailto:${email}`;
      onClose();
    }
  }, [clearCopyTimer, onClose]);

  const commands: PaletteCommand[] = useMemo(() => {
    const email = portfolioData.personal.socialLinks.email;
    const quickActions: PaletteCommand[] = [
      {
        id: "open-resume",
        group: "Quick Actions",
        label: `Open ${PRIMARY_RESUME.title}`,
        hint: "Google Drive",
        keywords: "resume pdf cv drive download",
        icon: <FileText className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />,
        run: () => {
          window.open(PRIMARY_RESUME.url, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "copy-email",
        group: "Quick Actions",
        label: copiedEmail ? `Copied ${email}` : `Copy Email (${email})`,
        hint: "Clipboard",
        keywords: "email contact copy mailto reach",
        icon: copiedEmail ? (
          <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />
        ),
        run: () => {
          void copyEmail();
        },
      },
      {
        id: "open-github",
        group: "Quick Actions",
        label: "Open GitHub (@zed-inn)",
        hint: "External",
        keywords: "github code repos zed-inn",
        icon: <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />,
        run: () => {
          window.open(portfolioData.personal.socialLinks.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "open-linkedin",
        group: "Quick Actions",
        label: "Open LinkedIn Profile",
        hint: "External",
        keywords: "linkedin profile network social",
        icon: <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />,
        run: () => {
          window.open(portfolioData.personal.socialLinks.linkedin, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ];

    const sectionCommands: PaletteCommand[] = [
      {
        id: "nav-workspace",
        group: "Jump to Section",
        label: "Backend Systems & Work",
        hint: "#workspace",
        keywords: "repositories projects work systems backend",
        icon: <Compass className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />,
        run: () => jumpTo("#workspace"),
      },
      {
        id: "nav-experience",
        group: "Jump to Section",
        label: "Experience",
        hint: "#experience",
        keywords: "experience work rocket reels campusx iitk",
        icon: <Compass className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />,
        run: () => jumpTo("#experience"),
      },
      {
        id: "nav-log",
        group: "Jump to Section",
        label: "Engineering Log (Milestones & Commits)",
        hint: "#log",
        keywords: "commits github milestones timeline log",
        icon: <Compass className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />,
        run: () => jumpTo("#log"),
      },
    ];

    const repoCommands: PaletteCommand[] = portfolioData.projects.map((project) => ({
      id: `repo-${project.id}`,
      group: "Repositories",
      label: project.title,
      hint: project.code,
      keywords: `${project.title} ${project.category} ${project.technologies.join(" ")}`,
      icon: <FolderGit2 className="w-3.5 h-3.5 text-[var(--ink-faint)] shrink-0" />,
      run: () => {
        const targetUrl = project.githubUrl || project.kaggleUrl;
        if (targetUrl) {
          window.open(targetUrl, "_blank", "noopener,noreferrer");
        }
        onClose();
      },
    }));

    return [...quickActions, ...sectionCommands, ...repoCommands];
  }, [copiedEmail, copyEmail, jumpTo, onClose]);

  const filteredCommands = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return commands;
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(trimmed) ||
        cmd.keywords.toLowerCase().includes(trimmed) ||
        cmd.group.toLowerCase().includes(trimmed)
    );
  }, [commands, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setCopiedEmail(false);
      clearCopyTimer();
      return;
    }
    const timer = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(timer);
  }, [clearCopyTimer, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const active = filteredCommands[selectedIndex];
    if (!active) return;
    const optionEl = document.getElementById(`cmd-option-${active.id}`);
    optionEl?.scrollIntoView({ block: "nearest" });
  }, [filteredCommands, isOpen, selectedIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredCommands.length === 0 ? 0 : (prev + 1) % filteredCommands.length
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredCommands.length === 0
            ? 0
            : (prev - 1 + filteredCommands.length) % filteredCommands.length
        );
      } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        e.preventDefault();
        filteredCommands[selectedIndex].run();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [filteredCommands, isOpen, onClose, selectedIndex]);

  const grouped = useMemo(() => {
    const map = new Map<PaletteCommand["group"], PaletteCommand[]>();
    for (const cmd of filteredCommands) {
      const existing = map.get(cmd.group) ?? [];
      existing.push(cmd);
      map.set(cmd.group, existing);
    }
    return Array.from(map.entries());
  }, [filteredCommands]);

  const activeDescendantId = filteredCommands[selectedIndex]
    ? `cmd-option-${filteredCommands[selectedIndex].id}`
    : undefined;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.14 }}
          data-lenis-prevent
          className="fixed inset-0 z-[120] flex items-start justify-center pt-[12vh] px-4 bg-black/55 backdrop-blur-[2px]"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: 0.14 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-xl bg-[var(--bg-elevated)] text-[var(--ink)] border border-[var(--rule-strong)] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--rule)]">
              <Search className="w-4 h-4 text-[var(--ink-faint)] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-palette-listbox"
                aria-activedescendant={activeDescendantId}
                aria-autocomplete="list"
                aria-label="Search commands"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Open resume, jump to project, or copy email..."
                className="w-full bg-transparent text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center h-7 w-7 rounded text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4 shrink-0" />
              </button>
            </div>

            <div
              id="command-palette-listbox"
              role="listbox"
              aria-label="Available commands"
              className="max-h-[58vh] overflow-y-auto overscroll-contain p-2 space-y-3"
            >
              {filteredCommands.length === 0 ? (
                <div className="py-10 text-center text-xs text-[var(--ink-faint)]">
                  No matching commands for &ldquo;{query}&rdquo;
                </div>
              ) : (
                grouped.map(([groupName, items]) => (
                  <div key={groupName}>
                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[var(--ink-faint)]">
                      {groupName}
                    </div>
                    <div className="space-y-0.5">
                      {items.map((cmd) => {
                        const globalIdx = filteredCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = globalIdx === selectedIndex;
                        return (
                          <button
                            key={cmd.id}
                            id={`cmd-option-${cmd.id}`}
                            role="option"
                            aria-selected={isSelected}
                            type="button"
                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                            onClick={cmd.run}
                            className={`w-full px-3 py-2 rounded-lg flex items-center justify-between gap-3 text-left text-xs font-medium transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[var(--bg-subtle)] text-[var(--ink)]"
                                : "text-[var(--ink-muted)] hover:bg-[var(--bg-subtle)]/50"
                            }`}
                          >
                            <span className="flex items-center gap-2.5 min-w-0">
                              {cmd.icon}
                              <span className="truncate">{cmd.label}</span>
                            </span>
                            {cmd.hint && (
                              <span className="text-[10px] font-mono text-[var(--ink-faint)] shrink-0">
                                {cmd.hint}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="px-4 py-2.5 border-t border-[var(--rule)] flex items-center justify-between text-[11px] text-[var(--ink-faint)] font-mono">
              <span>↑↓ navigate · ↵ select · esc close</span>
              <span>Backend Systems</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
