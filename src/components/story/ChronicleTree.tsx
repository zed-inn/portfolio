// lowercased comments per rule 8
// scannable vertical connected engineering timeline (2024 to 2026)
import React, { useState } from "react";
import { portfolioData } from "@/config";

const MILESTONE_PERIODS = [
  "Summer 2024",
  "Dec 2024 – Jan 2026",
  "Aug 2026 – Present",
  "2026 Distributed Systems",
  "2026 Open Data & Core",
];

export const ChronicleTree: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="chronicle" className="relative w-full px-4 sm:px-6 py-12 z-10">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-1">
              02 · Architectural Evolution
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50 font-display">
              Engineering Timeline (2024–2026)
            </h2>
          </div>

          <span className="font-mono text-[11px] text-zinc-500">
            5 audited milestones · scannable progression
          </span>
        </div>

        {/* connected vertical hairline spine */}
        <div className="relative pl-6 sm:pl-8 space-y-4 before:content-[''] before:absolute before:left-[9px] sm:before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-white/[0.1]">
          {portfolioData.storyChapters.map((chapter, idx) => {
            const period = MILESTONE_PERIODS[idx] || "2026";
            const isExpanded = expandedId === chapter.id;
            const hasMore = chapter.narrative.length > 1;

            return (
              <div
                key={chapter.id}
                className="relative bento-surface rounded-2xl p-5 sm:p-6"
              >
                {/* timeline node */}
                <span className="absolute -left-[22px] sm:-left-[28px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-200 ring-4 ring-[#09090b]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                  {/* narrative */}
                  <div className="lg:col-span-8 space-y-2">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-zinc-500">
                      <span className="text-zinc-300">0{chapter.number}</span>
                      <span>·</span>
                      <span>{period}</span>
                      <span>·</span>
                      <span>{chapter.subtitle}</span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-zinc-50">
                      {chapter.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {chapter.narrative[0]}
                    </p>

                    {isExpanded &&
                      chapter.narrative.slice(1).map((para, pIdx) => (
                        <p key={pIdx} className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                          {para}
                        </p>
                      ))}

                    {hasMore && (
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : chapter.id)}
                        className="font-mono text-[11px] text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors pt-1"
                      >
                        {isExpanded ? "Show less" : "Read full context →"}
                      </button>
                    )}
                  </div>

                  {/* inline verified metrics */}
                  <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2">
                    {chapter.highlightStats.slice(0, 2).map((stat) => (
                      <div
                        key={stat.label}
                        className="flex-1 min-w-[160px] px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-baseline justify-between gap-3"
                      >
                        <span className="text-[11px] text-zinc-400 truncate">{stat.label}</span>
                        <span className="font-mono text-sm font-semibold text-emerald-400 flex-shrink-0">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
