// lowercased comments per rule 8
// swiss 2-column hairline experience section with sticky metadata rail, timeline spine, and numbered rows
import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/config";

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ExperienceSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [openRoleSubsystems, setOpenRoleSubsystems] = useState<Record<string, boolean>>({});

  const toggleRoleSubsystems = (roleId: string) => {
    setOpenRoleSubsystems((prev) => ({ ...prev, [roleId]: !prev[roleId] }));
  };

  return (
    <section id="experience" className="relative w-full px-5 sm:px-8 py-18 sm:py-24">
      <div className="max-w-6xl mx-auto">
        {/* editorial section header with whisper-faint oversized folio watermark */}
        <div className="relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-7 border-b border-[var(--rule)]">
          <span
            aria-hidden="true"
            className="hidden sm:block pointer-events-none select-none absolute right-0 -top-7 font-serif-editorial italic text-[88px] md:text-[104px] leading-none text-[var(--ink)] opacity-[0.05]"
          >
            02
          </span>
          <div className="flex items-baseline gap-3.5">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-faint)]">
              <span className="w-[7px] h-[7px] bg-[var(--accent)] shrink-0" />
              <span>02</span>
            </span>
            <h2 className="font-serif-editorial text-balance text-3xl sm:text-5xl text-[var(--ink)]">
              Experience
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[var(--ink-faint)] relative z-10">
            3 audited roles · production scale
          </span>
        </div>

        {/* hairline-separated 2-column roles with sticky left rail and gap-independent timeline spine */}
        <div className="divide-y divide-[var(--rule)]">
          {portfolioData.experiences.map((exp, roleIdx) => {
            const isSubsystemsOpen = Boolean(openRoleSubsystems[exp.id]);
            const roleIndex = String(roleIdx + 1).padStart(2, "0");

            return (
              <motion.article
                key={exp.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : roleIdx * 0.05,
                  ease: EDITORIAL_EASE,
                }}
                className="py-12 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              >
                {/* left sticky metadata rail (requires body overflow-x: clip) */}
                <div className="md:col-span-4 md:sticky md:top-24 space-y-2">
                  <div className="font-mono text-xs text-[var(--ink-faint)]">
                    <span className="text-[var(--accent)] mr-2">{roleIndex}</span>
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-[var(--ink)]">{exp.company}</h3>
                  <div className="text-sm text-[var(--ink-muted)]">{exp.role}</div>
                  <div className="font-mono text-[11px] text-[var(--ink-faint)]">{exp.location}</div>

                  <div className="flex flex-wrap gap-1.5 pt-3 font-mono text-[11px] text-[var(--ink-faint)]">
                    {exp.technologies.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2 py-0.5 rounded border border-[var(--rule)] bg-[var(--surface)] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* right column with continuous vertical architectural spine & square accent node */}
                <div className="relative md:col-span-8 md:border-l md:border-[var(--rule)] md:pl-10 space-y-5">
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute -left-[4.5px] top-1.5 w-2 h-2 bg-[var(--accent)]"
                  />

                  <p className="text-sm sm:text-[15.5px] text-[var(--ink)] leading-[1.7]">
                    {exp.summary}
                  </p>

                  {/* semantic list rendered as numbered editorial rows */}
                  <ul className="space-y-3 text-[13.5px] sm:text-[15px] text-[var(--ink-muted)]">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-baseline gap-3.5 leading-[1.68]">
                        <span
                          aria-hidden="true"
                          className="font-mono text-[11px] text-[var(--accent)]/85 shrink-0 select-none"
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.subSystems && exp.subSystems.length > 0 && (
                    <div className="pt-2">
                      <button
                        type="button"
                        aria-expanded={isSubsystemsOpen}
                        onClick={() => toggleRoleSubsystems(exp.id)}
                        className="inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-md border border-[var(--rule)] bg-[var(--surface)] hover:border-[var(--accent)]/50 font-mono text-xs font-medium text-[var(--ink)] leading-none transition-colors cursor-pointer"
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
                            transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4">
                              <div className="divide-y divide-[var(--rule)] rounded-xl border border-[var(--rule)] bg-[var(--surface)] surface-specular px-4 sm:px-5">
                                {exp.subSystems.map((sub) => (
                                  <div key={`${exp.id}-${sub.name}`} className="py-4 space-y-1.5">
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
                                    <p className="text-xs sm:text-[13.5px] text-[var(--ink-muted)] leading-relaxed">
                                      {sub.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
