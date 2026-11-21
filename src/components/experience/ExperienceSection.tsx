// lowercased comments per rule 8
// swiss 2-column hairline experience section with progressive subsystem disclosure
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/config";

export const ExperienceSection: React.FC = () => {
  const [openRoleSubsystems, setOpenRoleSubsystems] = useState<Record<string, boolean>>({});

  const toggleRoleSubsystems = (roleId: string) => {
    setOpenRoleSubsystems((prev) => ({ ...prev, [roleId]: !prev[roleId] }));
  };

  return (
    <section id="experience" className="w-full px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        {/* editorial section header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-[var(--rule)]">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[var(--ink-faint)]">02</span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[var(--ink)]">
              Experience
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[var(--ink-faint)]">
            3 audited roles · production scale
          </span>
        </div>

        {/* hairline-separated 2-column roles (zero boxes) */}
        <div className="divide-y divide-[var(--rule)]">
          {portfolioData.experiences.map((exp) => {
            const isSubsystemsOpen = Boolean(openRoleSubsystems[exp.id]);

            return (
              <article
                key={exp.id}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              >
                {/* left metadata rail */}
                <div className="md:col-span-4 space-y-2">
                  <div className="font-mono text-xs text-[var(--ink-faint)]">{exp.period}</div>
                  <h3 className="text-lg font-medium text-[var(--ink)]">{exp.company}</h3>
                  <div className="text-sm text-[var(--ink-muted)]">{exp.role}</div>
                  <div className="font-mono text-[11px] text-[var(--ink-faint)]">{exp.location}</div>

                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 pt-3 font-mono text-[11px] text-[var(--ink-faint)]">
                    {exp.technologies.slice(0, 6).map((t) => (
                      <span key={t} className="font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* right editorial narrative + centered progressive subsystem disclosure */}
                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm text-[var(--ink)] leading-relaxed">{exp.summary}</p>

                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--ink-muted)] list-disc pl-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {exp.subSystems && exp.subSystems.length > 0 && (
                    <div className="pt-2">
                      <button
                        type="button"
                        aria-expanded={isSubsystemsOpen}
                        onClick={() => toggleRoleSubsystems(exp.id)}
                        className="inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-md border border-[var(--rule)] hover:border-[var(--rule-strong)] font-mono text-xs font-medium text-[var(--ink)] leading-none transition-colors cursor-pointer"
                      >
                        <span>
                          {isSubsystemsOpen
                            ? "Hide shipped subsystems"
                            : `Inspect ${exp.subSystems.length} shipped subsystems`}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isSubsystemsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isSubsystemsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
                              {exp.subSystems.map((sub) => (
                                <div key={`${exp.id}-${sub.name}`} className="py-3.5 space-y-1.5">
                                  <div className="flex items-baseline justify-between gap-3">
                                    <span className="text-xs sm:text-sm font-medium text-[var(--ink)]">
                                      {sub.name}
                                    </span>
                                    {sub.metrics[0]?.value && (
                                      <span className="font-mono text-xs text-[var(--accent)] shrink-0">
                                        {sub.metrics[0].value}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                                    {sub.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
