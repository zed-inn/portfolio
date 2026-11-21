// lowercased comments per rule 8
// milestones-first editorial ledger with zero-jitter constant font-weight tabs
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/config";
import {
  CommitFeedItem,
  fetchGitHubCommitFeed,
  getStaticCommitFeed,
} from "@/services/github";

const MILESTONE_PERIODS = [
  "Summer 2024",
  "Dec 2024 – Jan 2026",
  "Aug 2026 – Present",
  "2026 Distributed",
  "2026 Open Data",
];

export const CommitStream: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"milestones" | "commits">("milestones");
  const [commits, setCommits] = useState<CommitFeedItem[]>(() => getStaticCommitFeed().slice(0, 8));
  const [mode, setMode] = useState<"live" | "verified">("verified");
  const [showAllCommits, setShowAllCommits] = useState(false);
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void fetchGitHubCommitFeed().then((res) => {
      if (!active) return;
      setCommits(res.items);
      setMode(res.mode);
    });
    return () => {
      active = false;
    };
  }, []);

  const visibleCommits = showAllCommits ? commits.slice(0, 12) : commits.slice(0, 5);

  return (
    <section id="log" className="w-full px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* header with zero-jitter constant font-weight tabs */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-[var(--rule)]">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[var(--ink-faint)]">03</span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[var(--ink)]">
              Engineering Log
            </h2>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <button
              type="button"
              aria-pressed={activeTab === "milestones"}
              onClick={() => setActiveTab("milestones")}
              className={`inline-flex items-center justify-center h-7 font-medium leading-none cursor-pointer transition-colors ${
                activeTab === "milestones"
                  ? "text-[var(--ink)] underline underline-offset-4"
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
                  ? "text-[var(--ink)] underline underline-offset-4"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              }`}
            >
              Commit Stream
            </button>
          </div>
        </div>

        {/* tab 1 (default): concise milestone ledger */}
        {activeTab === "milestones" && (
          <div className="divide-y divide-[var(--rule)]">
            {portfolioData.storyChapters.map((chapter, idx) => {
              const period = MILESTONE_PERIODS[idx] || "2026";
              const isExpanded = expandedMilestone === chapter.id;
              const leadStat = chapter.highlightStats[0];

              return (
                <div key={chapter.id} className="py-5 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline">
                    <div className="md:col-span-3 font-mono text-xs text-[var(--ink-faint)]">
                      {period}
                    </div>
                    <div className="md:col-span-6 space-y-1.5">
                      <div className="text-sm sm:text-base font-medium text-[var(--ink)]">
                        {chapter.title}
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                        {chapter.narrative[0]}
                      </p>
                      {isExpanded &&
                        chapter.narrative.slice(1).map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed pt-1"
                          >
                            {p}
                          </p>
                        ))}
                      {chapter.narrative.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setExpandedMilestone(isExpanded ? null : chapter.id)}
                          className="inline-flex items-center h-7 font-mono text-[11px] font-medium text-[var(--ink)] hover:opacity-70 cursor-pointer leading-none"
                        >
                          {isExpanded ? "Show less" : "Read more →"}
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

        {/* tab 2: live + verified github commits */}
        {activeTab === "commits" && (
          <div>
            <div className="divide-y divide-[var(--rule)]">
              {visibleCommits.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 -mx-3 px-3 rounded-lg hover:bg-[var(--bg-subtle)]/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 group"
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
                    <ArrowUpRight className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-5 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-4">
                {commits.length > 5 && (
                  <button
                    type="button"
                    onClick={() => setShowAllCommits((prev) => !prev)}
                    className="inline-flex items-center justify-center h-8 px-3 rounded-md border border-[var(--rule)] hover:border-[var(--rule-strong)] font-mono text-xs font-medium text-[var(--ink)] leading-none cursor-pointer transition-colors"
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
                  className="font-mono text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] inline-flex items-center gap-1 leading-none"
                >
                  <span>github.com/zed-inn</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </div>

              <span className="font-mono text-[11px] text-[var(--ink-faint)]">
                Source: {mode === "live" ? "Live GitHub API" : "Verified Static Manifest"}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
