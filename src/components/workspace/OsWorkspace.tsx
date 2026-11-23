// lowercased comments per rule 8
// true 50/50 split-screen swiss architectural systems showcase with un-truncated live specimen
import React, { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { portfolioData } from "@/config";
import { Project } from "@/config/schema";
import { ProjectDrawer } from "./ProjectDrawer";

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const OsWorkspace: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [drawerProject, setDrawerProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleCloseDrawer = useCallback(() => setDrawerProject(null), []);

  // curate repositories ranked by backend systems depth (all 10 retained)
  const sortedProjects: Project[] = useMemo(() => {
    return [...portfolioData.projects].sort(
      (a, b) => (b.lensWeights.backend_all ?? 5) - (a.lensWeights.backend_all ?? 5)
    );
  }, []);

  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 5);
  const hiddenCount = Math.max(0, sortedProjects.length - 5);

  const [activeProjectId, setActiveProjectId] = useState<string>(
    () => sortedProjects[0]?.id ?? ""
  );

  // auto-fallback to first visible project if active project was collapsed out of view
  const activeProject: Project | undefined =
    visibleProjects.find((p) => p.id === activeProjectId) ?? visibleProjects[0];

  const activeSourceUrl = activeProject?.githubUrl || activeProject?.kaggleUrl;

  return (
    <section
      id="workspace"
      className="relative w-full bg-[var(--bg-alt)] border-y border-[var(--rule)] px-5 sm:px-8 py-18 sm:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* editorial section header with whisper-faint oversized folio watermark */}
        <div className="relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-7 border-b border-[var(--rule)]">
          <span
            aria-hidden="true"
            className="hidden sm:block pointer-events-none select-none absolute right-0 -top-7 font-serif-editorial italic text-[88px] md:text-[104px] leading-none text-[var(--ink)] opacity-[0.05]"
          >
            01
          </span>
          <div className="flex items-baseline gap-3.5">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-faint)]">
              <span className="w-[7px] h-[7px] bg-[var(--accent)] shrink-0" />
              <span>01</span>
            </span>
            <h2 className="font-serif-editorial text-balance text-3xl sm:text-5xl text-[var(--ink)]">
              Backend Systems &amp; Work
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[var(--ink-faint)] relative z-10">
            Click any system to inspect full architecture &amp; benchmarks
          </span>
        </div>

        {/* balanced 50/50 split-screen showcase: lean index left + un-truncated live specimen right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          {/* left column: zero-duplication architectural index on lg:, full summary cards on mobile */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-[var(--rule)]">
              {visibleProjects.map((project, idx) => {
                const leadMetric = project.metrics[0];
                const sourceUrl = project.githubUrl || project.kaggleUrl;
                const indexLabel = String(idx + 1).padStart(2, "0");
                const isActive = activeProject?.id === project.id;
                const isExpandedBatch = idx >= 5;
                const staggerDelay = (isExpandedBatch ? idx - 5 : idx) * 0.04;

                return (
                  <motion.div
                    key={project.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    {...(isExpandedBatch
                      ? { animate: { opacity: 1, y: 0 } }
                      : {
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true, amount: "some" },
                        })}
                    transition={{
                      duration: 0.42,
                      delay: prefersReducedMotion ? 0 : staggerDelay,
                      ease: EDITORIAL_EASE,
                    }}
                    onMouseEnter={() => setActiveProjectId(project.id)}
                    onFocus={() => setActiveProjectId(project.id)}
                    className={`relative group py-6 -mx-3 px-3 rounded-lg transition-colors before:content-[''] before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[2px] before:rounded-full before:bg-[var(--accent)] before:transition-opacity ${
                      isActive
                        ? "lg:bg-[var(--surface)] lg:before:opacity-100 hover:bg-[var(--surface)] before:opacity-0 hover:before:opacity-100"
                        : "hover:bg-[var(--surface)] before:opacity-0 hover:before:opacity-100"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-3 bottom-0 h-px bg-[var(--accent)]/60 origin-left transition-transform duration-300 ${
                        isActive ? "lg:scale-x-100 scale-x-0 group-hover:scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setDrawerProject(project)}
                        className="flex-1 min-w-0 text-left cursor-pointer space-y-2 lg:space-y-1"
                      >
                        <div className="flex items-baseline gap-3.5">
                          <span
                            className={`font-mono text-xs transition-colors shrink-0 ${
                              isActive
                                ? "lg:text-[var(--accent)] text-[var(--ink-faint)] group-hover:text-[var(--accent)]"
                                : "text-[var(--ink-faint)] group-hover:text-[var(--accent)]"
                            }`}
                          >
                            {indexLabel}
                          </span>
                          <div className="min-w-0 space-y-0.5">
                            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
                              {project.code} · {project.category}
                            </div>
                            <h3 className="text-base sm:text-lg xl:text-[19px] font-medium text-[var(--ink)] group-hover:underline underline-offset-4 decoration-[var(--rule-strong)] leading-snug">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        {/* mobile-only summary & tech chips (desktop displays full un-truncated plate on right) */}
                        <p className="lg:hidden text-xs sm:text-sm text-[var(--ink-muted)] leading-[1.65] pl-7 line-clamp-2">
                          {project.shortDescription}
                        </p>
                        <div className="lg:hidden flex flex-wrap items-center gap-1.5 pl-7 pt-0.5 font-mono text-[11px] text-[var(--ink-faint)]">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2 py-0.5 rounded border border-[var(--rule)] bg-[var(--bg)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </button>

                      {/* right compact metric cue + sibling non-nested links */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1.5 pl-7 sm:pl-0 shrink-0">
                        {leadMetric && (
                          <div className="sm:text-right">
                            <div className="font-mono text-base sm:text-lg font-medium text-[var(--ink)] tracking-tight">
                              {leadMetric.value} {leadMetric.suffix || ""}
                            </div>
                            <div className="text-[11px] text-[var(--ink-faint)]">
                              {leadMetric.label}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-3.5 text-xs pt-0.5 lg:hidden">
                          <button
                            type="button"
                            onClick={() => setDrawerProject(project)}
                            className="inline-flex items-center gap-1 h-7 text-[var(--ink)] font-medium leading-none cursor-pointer"
                          >
                            <span>Read dossier</span>
                            <span aria-hidden="true">→</span>
                          </button>
                          {sourceUrl && (
                            <a
                              href={sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 h-7 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors leading-none"
                              title={`Open ${project.title} source`}
                            >
                              <span>{project.githubUrl ? "Source" : "Kaggle"}</span>
                              <ArrowUpRight className="w-3 h-3 shrink-0" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* progressive disclosure toggle */}
            {hiddenCount > 0 && (
              <div className="pt-6 border-t border-[var(--rule)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto h-10 sm:h-9 px-4 rounded-md border border-[var(--rule)] bg-[var(--surface)] hover:border-[var(--accent)]/50 text-xs font-mono font-medium text-[var(--ink)] leading-none whitespace-nowrap transition-colors cursor-pointer active:scale-[0.98]"
                >
                  <span>
                    {showAll
                      ? "Show top 5 systems"
                      : `View all ${sortedProjects.length} repositories`}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${showAll ? "rotate-180" : ""}`}
                  />
                </button>
                <span className="font-mono text-[11px] text-[var(--ink-faint)] text-center sm:text-right">
                  {visibleProjects.length} / {sortedProjects.length} shown
                </span>
              </div>
            )}
          </div>

          {/* right column (desktop only, full 50% width): un-truncated sticky live architectural specimen */}
          {activeProject && (
            <aside className="hidden lg:block lg:col-span-6 lg:sticky lg:top-24 pt-4">
              <div
                data-lenis-prevent
                className="rounded-xl border border-[var(--rule)] bg-[var(--surface)] surface-specular max-h-[calc(100svh-7rem)] overflow-y-auto overscroll-contain"
              >
                <motion.div
                  key={activeProject.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                  className="p-6 xl:p-7 space-y-5"
                >
                  {/* specimen header + summary */}
                  <div className="space-y-2 pb-4 border-b border-[var(--rule)]">
                    <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                        <span>{activeProject.code}</span>
                      </span>
                      <span>{activeProject.category}</span>
                    </div>
                    <h3 className="font-serif-editorial text-3xl leading-[1.08] text-[var(--ink)]">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm text-[var(--ink-muted)] leading-[1.65] pt-0.5">
                      {activeProject.shortDescription}
                    </p>
                  </div>

                  {/* top 2 verified metrics in opaque hairline strip */}
                  <div className="grid grid-cols-2 gap-px bg-[var(--rule)] rounded-lg border border-[var(--rule)] overflow-hidden">
                    {activeProject.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label} className="bg-[var(--bg)] p-3.5 space-y-0.5">
                        <div className="font-mono text-xl text-[var(--ink)] tracking-tight leading-none">
                          {metric.value}{" "}
                          {metric.suffix && (
                            <span className="text-[11px] text-[var(--ink-faint)]">
                              {metric.suffix}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-medium text-[var(--ink)] pt-1">
                          {metric.label}
                        </div>
                        <div className="text-[11px] text-[var(--ink-faint)] leading-snug">
                          {metric.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* verified k6 latency strip (shown only for benchmarked projects) */}
                  {activeProject.latencyProfile && (
                    <div className="grid grid-cols-3 gap-px bg-[var(--rule)] rounded-lg border border-[var(--rule)] overflow-hidden text-center font-mono">
                      <div className="bg-[var(--bg)] py-2.5 px-2">
                        <div className="text-[9px] uppercase text-[var(--ink-faint)]">p50 Median</div>
                        <div className="text-xs text-[var(--ink)] mt-0.5">
                          {activeProject.latencyProfile.p50}
                        </div>
                      </div>
                      <div className="bg-[var(--bg)] py-2.5 px-2">
                        <div className="text-[9px] uppercase text-[var(--ink-faint)]">Mean</div>
                        <div className="text-xs text-[var(--ink)] mt-0.5">
                          {activeProject.latencyProfile.mean}
                        </div>
                      </div>
                      <div className="bg-[var(--bg)] py-2.5 px-2">
                        <div className="text-[9px] uppercase text-[var(--ink-faint)]">p95</div>
                        <div className="text-xs text-[var(--ink)] mt-0.5">
                          {activeProject.latencyProfile.p95}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* un-truncated system constraints */}
                  <dl className="divide-y divide-[var(--rule)] border-y border-[var(--rule)] text-[11px] font-mono">
                    <div className="py-2.5 flex items-start justify-between gap-6">
                      <dt className="uppercase text-[10px] text-[var(--ink-faint)] shrink-0 pt-0.5">
                        Concurrency
                      </dt>
                      <dd className="text-[var(--ink)] text-right leading-relaxed">
                        {activeProject.concurrencyModel}
                      </dd>
                    </div>
                    <div className="py-2.5 flex items-start justify-between gap-6">
                      <dt className="uppercase text-[10px] text-[var(--ink-faint)] shrink-0 pt-0.5">
                        Memory
                      </dt>
                      <dd className="text-[var(--ink)] text-right leading-relaxed">
                        {activeProject.memoryProfile}
                      </dd>
                    </div>
                    <div className="py-2.5 flex items-start justify-between gap-6">
                      <dt className="uppercase text-[10px] text-[var(--ink-faint)] shrink-0 pt-0.5">
                        Protocol
                      </dt>
                      <dd className="text-[var(--ink)] text-right leading-relaxed">
                        {activeProject.protocolSpec}
                      </dd>
                    </div>
                  </dl>

                  {/* concise technology chips (capped to 6 so specimen fits 768px laptops cleanly) */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[var(--ink-faint)]">
                    {activeProject.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-0.5 rounded border border-[var(--rule)] bg-[var(--bg)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* crisp swiss rounded-md specimen actions */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setDrawerProject(activeProject)}
                      className="group/open inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-md bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-[var(--btn-ink)] font-medium text-xs leading-none transition-colors cursor-pointer active:scale-[0.98]"
                    >
                      <span>Read dossier</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-200 group-hover/open:translate-x-0.5"
                      >
                        →
                      </span>
                    </button>

                    {activeSourceUrl && (
                      <a
                        href={activeSourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center justify-center gap-1 h-9 px-3.5 rounded-md border border-[var(--rule)] hover:border-[var(--accent)]/50 text-xs font-mono text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors leading-none"
                        title={`Open ${activeProject.title} source`}
                      >
                        <span>{activeProject.githubUrl ? "Source" : "Kaggle"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* portal-mounted editorial monograph sheet */}
      <ProjectDrawer project={drawerProject} onClose={handleCloseDrawer} />
    </section>
  );
};
