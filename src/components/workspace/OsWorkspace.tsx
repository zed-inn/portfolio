// lowercased comments per rule 8
// backend-first swiss editorial systems index with progressive disclosure
import React, { useCallback, useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { portfolioData } from "@/config";
import { Project } from "@/config/schema";
import { ProjectDrawer } from "./ProjectDrawer";

export const OsWorkspace: React.FC = () => {
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

  return (
    <section id="workspace" className="w-full px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* editorial section header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-[var(--rule)]">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[var(--ink-faint)]">01</span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[var(--ink)]">
              Backend Systems &amp; Work
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[var(--ink-faint)]">
            Click any system to inspect full architecture &amp; benchmarks
          </span>
        </div>

        {/* hairline editorial index rows (zero boxes) */}
        <div className="divide-y divide-[var(--rule)]">
          {visibleProjects.map((project, idx) => {
            const leadMetric = project.metrics[0];
            const sourceUrl = project.githubUrl || project.kaggleUrl;
            const indexLabel = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={project.id}
                className="relative group py-6 sm:py-7 -mx-3 px-3 rounded-lg hover:bg-[var(--bg-subtle)]/70 transition-colors before:content-[''] before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[2px] before:bg-[var(--ink)] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
                  {/* left index + title + summary */}
                  <button
                    type="button"
                    onClick={() => setDrawerProject(project)}
                    className="md:col-span-8 text-left cursor-pointer space-y-1.5"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[var(--ink-faint)] shrink-0">
                        {indexLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-medium text-[var(--ink)] group-hover:underline underline-offset-4 decoration-[var(--rule-strong)] line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed pl-7 max-w-2xl line-clamp-2">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pl-7 pt-1 font-mono text-[11px] text-[var(--ink-faint)]">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </button>

                  {/* right lead outcome + centered twin links */}
                  <div className="md:col-span-4 flex md:flex-col items-center md:items-end justify-between gap-2 pl-7 md:pl-0">
                    {leadMetric && (
                      <div className="md:text-right">
                        <div className="font-mono text-sm sm:text-base font-medium text-[var(--ink)]">
                          {leadMetric.value} {leadMetric.suffix || ""}
                        </div>
                        <div className="text-[11px] text-[var(--ink-faint)]">
                          {leadMetric.label}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs pt-1">
                      <button
                        type="button"
                        onClick={() => setDrawerProject(project)}
                        className="inline-flex items-center justify-center h-7 text-[var(--ink)] hover:opacity-70 transition-opacity cursor-pointer font-medium leading-none"
                      >
                        Read dossier →
                      </button>
                      {sourceUrl && (
                        <a
                          href={sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 h-7 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors leading-none"
                          title={`Open ${project.title} source`}
                        >
                          <span>{project.githubUrl ? "Source" : "Kaggle"}</span>
                          <ArrowUpRight className="w-3 h-3 shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* progressive disclosure toggle */}
        {hiddenCount > 0 && (
          <div className="pt-6 border-t border-[var(--rule)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto h-10 sm:h-9 px-4 rounded-md border border-[var(--rule)] hover:border-[var(--rule-strong)] text-xs font-mono font-medium text-[var(--ink)] leading-none whitespace-nowrap transition-colors cursor-pointer active:scale-[0.98]"
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

      {/* portal-mounted editorial monograph sheet */}
      <ProjectDrawer project={drawerProject} onClose={handleCloseDrawer} />
    </section>
  );
};
