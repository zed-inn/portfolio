// lowercased comments per rule 8
// portal-mounted swiss editorial case study monograph sheet
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, GitCommitHorizontal, X } from "lucide-react";
import { CommitItem, FailureInvariant, Project } from "@/config/schema";

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // defer escape to command palette if open on top
        if (document.querySelector('[aria-label="Command palette"]')) return;
        e.preventDefault();
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          data-lenis-prevent
          onClick={onClose}
          className="fixed inset-0 z-[110] bg-black/55 backdrop-blur-[2px] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} technical dossier`}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl h-full bg-[var(--bg)] text-[var(--ink)] border-l border-[var(--rule)] overflow-y-auto overscroll-contain"
          >
            {/* sticky editorial header with pixel-centered controls */}
            <div className="sticky top-0 z-20 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--rule)] px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="font-mono text-[11px] text-[var(--ink-faint)] mb-1 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                  <span>
                    {project.code} · {project.category}
                  </span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[var(--ink)] leading-tight truncate">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {(project.githubUrl || project.kaggleUrl) && (
                  <a
                    href={project.githubUrl || project.kaggleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-md bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-[var(--btn-ink)] font-medium text-xs leading-none transition-colors"
                  >
                    <span>{project.githubUrl ? "Source" : "Kaggle"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-[var(--rule)] hover:border-[var(--accent)]/50 text-[var(--ink-muted)] hover:text-[var(--ink)] cursor-pointer transition-colors"
                  aria-label="Close dossier"
                >
                  <X className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>

            {/* single-scroll case study */}
            <div className="px-6 sm:px-8 py-8 space-y-10 text-sm">
              {/* 01 outcomes & verified k6 latency */}
              <section className="space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                  01 · Quantifiable Outcomes
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-1">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="border-t border-[var(--rule)] pt-3">
                      <div className="font-mono text-2xl text-[var(--ink)]">
                        {metric.value}{" "}
                        {metric.suffix && (
                          <span className="text-xs text-[var(--ink-faint)]">{metric.suffix}</span>
                        )}
                      </div>
                      <div className="text-xs font-medium text-[var(--ink)] mt-0.5">
                        {metric.label}
                      </div>
                      <p className="text-xs text-[var(--ink-muted)] mt-1 leading-relaxed">
                        {metric.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {project.latencyProfile && (
                  <div className="grid grid-cols-3 gap-px bg-[var(--rule)] rounded-lg border border-[var(--rule)] overflow-hidden text-center font-mono">
                    <div className="bg-[var(--surface)] py-3.5 px-2">
                      <div className="text-[10px] uppercase text-[var(--ink-faint)]">p50 Median</div>
                      <div className="text-sm text-[var(--ink)] mt-0.5">
                        {project.latencyProfile.p50}
                      </div>
                    </div>
                    <div className="bg-[var(--surface)] py-3.5 px-2">
                      <div className="text-[10px] uppercase text-[var(--ink-faint)]">Mean</div>
                      <div className="text-sm text-[var(--ink)] mt-0.5">
                        {project.latencyProfile.mean}
                      </div>
                    </div>
                    <div className="bg-[var(--surface)] py-3.5 px-2">
                      <div className="text-[10px] uppercase text-[var(--ink-faint)]">p95</div>
                      <div className="text-sm text-[var(--ink)] mt-0.5">
                        {project.latencyProfile.p95}
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* 02 context & constraints */}
              <section className="space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                  02 · Context &amp; System Constraints
                </div>

                <p className="text-sm sm:text-[15px] text-[var(--ink-muted)] leading-[1.7]">
                  {project.fullDescription}
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--rule)] rounded-lg border border-[var(--rule)] overflow-hidden text-xs">
                  <div className="bg-[var(--surface)] p-4">
                    <dt className="font-mono text-[10px] uppercase text-[var(--ink-faint)] mb-1">
                      Concurrency
                    </dt>
                    <dd className="font-mono text-[var(--ink)] leading-snug">
                      {project.concurrencyModel}
                    </dd>
                  </div>
                  <div className="bg-[var(--surface)] p-4">
                    <dt className="font-mono text-[10px] uppercase text-[var(--ink-faint)] mb-1">
                      Memory
                    </dt>
                    <dd className="font-mono text-[var(--ink)] leading-snug">
                      {project.memoryProfile}
                    </dd>
                  </div>
                  <div className="bg-[var(--surface)] p-4">
                    <dt className="font-mono text-[10px] uppercase text-[var(--ink-faint)] mb-1">
                      Protocol
                    </dt>
                    <dd className="font-mono text-[var(--ink)] leading-snug">
                      {project.protocolSpec}
                    </dd>
                  </div>
                </dl>
              </section>

              {/* 03 architecture, stack & trade-offs */}
              <section className="space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                  03 · Architecture, Stack &amp; Trade-Offs
                </div>

                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[var(--ink-muted)]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center justify-center h-6 px-2.5 rounded border border-[var(--rule)] bg-[var(--surface)] leading-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.architectureNotes.length > 0 && (
                  <ul className="space-y-2.5 text-[13.5px] sm:text-[14.5px] text-[var(--ink-muted)] list-disc pl-5 marker:text-[var(--accent)]">
                    {project.architectureNotes.map((note, idx) => (
                      <li key={idx} className="leading-[1.68]">
                        {note}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="divide-y divide-[var(--rule)] border-t border-[var(--rule)] pt-2">
                  {project.failureInvariants.map((inv: FailureInvariant, idx: number) => (
                    <div key={idx} className="py-3.5 space-y-1 text-xs">
                      <div className="font-medium text-[var(--ink)]">{inv.failureMode}</div>
                      <div className="text-[var(--ink-muted)] leading-relaxed">
                        <span className="font-mono text-[11px] text-[var(--accent)] mr-1.5">
                          Mitigation:
                        </span>
                        {inv.mitigation}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 04 verified commit trace (rendered only when real commits are present) */}
              {project.commitHistory.length > 0 && (
                <section className="space-y-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                    04 · Verified Commit Trace
                  </div>

                  <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
                    {project.commitHistory.map((item: CommitItem) => (
                      <div
                        key={item.hash}
                        className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono text-[11px] text-[var(--accent)] inline-flex items-center gap-1 shrink-0">
                            <GitCommitHorizontal className="w-3 h-3 shrink-0" />
                            <span>{item.hash}</span>
                          </span>
                          <span className="text-[var(--ink)]">{item.message}</span>
                        </div>
                        <span className="font-mono text-[11px] text-[var(--ink-faint)] shrink-0">
                          {item.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
