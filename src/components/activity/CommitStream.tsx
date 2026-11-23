// lowercased comments per rule 8
// milestones-first editorial accordion ledger with live-only github commit stream
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/config";
import { CommitFeedItem, fetchGitHubCommitFeed } from "@/services/github";

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const MILESTONE_PERIODS = [
  "Summer 2024",
  "Dec 2024 – Jan 2026",
  "Aug 2026 – Present",
  "2026 Backend Systems",
  "2026 Open Data",
];

export const CommitStream: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"milestones" | "commits">("milestones");
  const [commits, setCommits] = useState<CommitFeedItem[]>([]);
  const [status, setStatus] = useState<"loading" | "live" | "unavailable">("loading");
  const [showAllCommits, setShowAllCommits] = useState(false);
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void fetchGitHubCommitFeed().then((res) => {
      if (!active) return;
      setCommits(res.items);
      setStatus(res.mode);
    });
    return () => {
      active = false;
    };
  }, []);

  const visibleCommits = showAllCommits ? commits.slice(0, 12) : commits.slice(0, 5);

  return (
    <section
      id="log"
      className="relative w-full bg-[var(--bg-alt)] border-t border-[var(--rule)] px-5 sm:px-8 py-18 sm:py-24"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
        className="max-w-6xl mx-auto"
      >
        {/* header with whisper-faint watermark and zero-jitter constant font-weight tabs */}
        <div className="relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-7 border-b border-[var(--rule)]">
          <span
            aria-hidden="true"
            className="hidden sm:block pointer-events-none select-none absolute right-0 -top-7 font-serif-editorial italic text-[88px] md:text-[104px] leading-none text-[var(--ink)] opacity-[0.05]"
          >
            03
          </span>
          <div className="flex items-baseline gap-3.5">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-faint)]">
              <span className="w-[7px] h-[7px] bg-[var(--accent)] shrink-0" />
              <span>03</span>
            </span>
            <h2 className="font-serif-editorial text-balance text-3xl sm:text-5xl text-[var(--ink)]">
              Engineering Log
            </h2>
          </div>

          <div className="relative z-10 flex items-center gap-5 text-xs">
            <button
              type="button"
              aria-pressed={activeTab === "milestones"}
              onClick={() => setActiveTab("milestones")}
              className={`inline-flex items-center justify-center h-7 font-medium leading-none cursor-pointer transition-colors ${
                activeTab === "milestones"
                  ? "text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-[6px]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              Milestones (2024–2026)
            </button>
            <button
              type="button"
              aria-pressed={activeTab === "commits"}
              onClick={() => setActiveTab("commits")}
              className={`inline-flex items-center justify-center h-7 font-medium leading-none cursor-pointer transition-colors ${
                activeTab === "commits"
                  ? "text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-[6px]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              Commit Stream
            </button>
          </div>
        </div>

        {/* tab 1 (default): interactive accordion milestone ledger */}
        {activeTab === "milestones" && (
          <div className="divide-y divide-[var(--rule)]">
            {portfolioData.storyChapters.map((chapter, idx) => {
              const period = MILESTONE_PERIODS[idx] || "2026";
              const isExpanded = expandedMilestone === chapter.id;
              const leadStat = chapter.highlightStats[0];

              return (
                <div key={chapter.id} className="py-6 sm:py-7">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline">
                    <div className="md:col-span-3 font-mono text-xs text-[var(--ink-faint)]">
                      {period}
                    </div>
                    <div className="md:col-span-6 space-y-1.5">
                      <div className="text-sm sm:text-base font-medium text-[var(--ink)]">
                        {chapter.title}
                      </div>
                      <p className="text-sm text-[var(--ink-muted)] leading-[1.68]">
                        {chapter.narrative[0]}
                      </p>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 space-y-3">
                              {chapter.narrative.slice(1).map((p, pIdx) => (
                                <p
                                  key={pIdx}
                                  className="text-sm text-[var(--ink-muted)] leading-[1.68]"
                                >
                                  {p}
                                </p>
                              ))}

                              {chapter.highlightStats.length > 0 && (
                                <div className="pt-1">
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--rule)] rounded-lg border border-[var(--rule)] overflow-hidden">
                                    {chapter.highlightStats.map((stat) => (
                                      <div
                                        key={stat.label}
                                        className="bg-[var(--surface)] p-3 space-y-0.5"
                                      >
                                        <div className="font-mono text-sm text-[var(--ink)] font-medium">
                                          {stat.value}
                                        </div>
                                        <div className="text-[11px] text-[var(--ink-muted)]">
                                          {stat.label}
                                        </div>
                                        <div className="text-[10px] text-[var(--ink-faint)]">
                                          {stat.detail}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {chapter.narrative.length > 1 && (
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => setExpandedMilestone(isExpanded ? null : chapter.id)}
                          className="group/more inline-flex items-center gap-1 h-7 font-mono text-[11px] font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors cursor-pointer leading-none pt-1"
                        >
                          <span>{isExpanded ? "Show less" : "Read more"}</span>
                          {!isExpanded && (
                            <span
                              aria-hidden="true"
                              className="inline-block transition-transform duration-200 group-hover/more:translate-x-0.5"
                            >
                              →
                            </span>
                          )}
                        </button>
                      )}
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      {leadStat && (
                        <span className="font-mono text-xs text-[var(--accent)]">
                          {leadStat.value} · {leadStat.label}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* tab 2: live-only github commits */}
        {activeTab === "commits" && (
          <div>
            {status === "loading" ? (
              <div className="py-8 font-mono text-xs text-[var(--ink-faint)]">
                Loading live push activity from github.com/zed-inn...
              </div>
            ) : visibleCommits.length > 0 ? (
              <div className="divide-y divide-[var(--rule)]">
                {visibleCommits.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 -mx-3 px-3 rounded-lg hover:bg-[var(--surface)] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-xs text-[var(--accent)] shrink-0">
                        {item.sha}
                      </span>
                      <span className="font-mono text-[11px] text-[var(--ink-faint)] shrink-0">
                        {item.repo}
                      </span>
                      <span className="text-xs sm:text-sm text-[var(--ink)] truncate">
                        {item.message}
                      </span>
                    </div>

                    <span className="font-mono text-[11px] text-[var(--ink-faint)] shrink-0 inline-flex items-center gap-1">
                      <span>{item.date}</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="py-8 space-y-2 text-xs text-[var(--ink-muted)]">
                <p>Live public push events are temporarily unavailable from the GitHub API.</p>
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-mono text-[var(--ink)] underline underline-offset-4 decoration-[var(--rule-strong)] hover:decoration-[var(--accent)]"
                >
                  <span>Inspect commit history directly on github.com/zed-inn</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}

            <div className="pt-5 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-4">
                {commits.length > 5 && (
                  <button
                    type="button"
                    onClick={() => setShowAllCommits((prev) => !prev)}
                    className="inline-flex items-center justify-center h-8 px-3 rounded-md border border-[var(--rule)] bg-[var(--surface)] hover:border-[var(--accent)]/50 font-mono text-xs font-medium text-[var(--ink)] leading-none cursor-pointer transition-colors"
                  >
                    {showAllCommits
                      ? "Show fewer commits"
                      : `Show ${Math.min(commits.length, 12)} commits`}
                  </button>
                )}
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-mono text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] inline-flex items-center gap-1 leading-none"
                >
                  <span>github.com/zed-inn</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <span className="font-mono text-[11px] text-[var(--ink-faint)]">
                Source:{" "}
                {status === "live"
                  ? "Live GitHub API"
                  : status === "loading"
                    ? "Fetching GitHub API"
                    : "GitHub API unavailable"}
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};
