// lowercased comments per rule 8
// swiss editorial cover hero focused cleanly on backend systems engineering
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { portfolioData } from "@/config";
import { PRIMARY_RESUME } from "@/config/resumeLinks";

export const PersonaHero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personal.socialLinks.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${portfolioData.personal.socialLinks.email}`;
    }
  };

  const ledger = [
    { value: "4.8M+", label: "Production users synced", sub: "5-min delta ETL CDP" },
    { value: "INR 25L+", label: "Revenue recovered", sub: "22k+ autopay migration" },
    { value: "20M+", label: "Stale records pruned", sub: "0% downtime Atlas resync" },
    { value: "17 KB", label: "RAM per active conn", sub: "C++17 POSIX poll() FSM" },
  ];

  return (
    <section className="pt-28 sm:pt-32 pb-14 sm:pb-16 px-5 sm:px-8 w-full">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-10"
        >
          {/* editorial kicker */}
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-faint)]">
            <span>IIT Kanpur &apos;26 · Backend Systems Engineer</span>
            <span>Mumbai, India</span>
          </div>

          {/* asymmetric 8/4 swiss editorial split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-[82px] leading-[0.98] tracking-[-0.02em] text-[var(--ink)]">
                  Kartikey Kumar
                </h1>
                <p className="font-serif-editorial italic text-2xl sm:text-3xl leading-[1.2] text-[var(--ink-muted)]">
                  Architecting high-concurrency APIs, transactional pipelines, and fault-tolerant storage systems.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed max-w-2xl">
                IIT Kanpur graduate (&apos;26) specializing in backend systems engineering across Node.js, Python, and C++17. Proven experience scaling multi-million-user production clusters, executing zero-downtime replica resyncs, building 5-minute checkpointed delta ETL pipelines, and delivering resilient APIs end to end.
              </p>

              {/* pixel-centered action strip */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 text-xs sm:text-sm">
                <a
                  href={PRIMARY_RESUME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-md bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-[var(--btn-ink)] font-medium text-xs leading-none transition-colors active:scale-[0.98]"
                  title={`Open ${PRIMARY_RESUME.title}`}
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 h-10 px-3.5 rounded-md border border-[var(--rule)] hover:border-[var(--rule-strong)] text-[var(--ink)] transition-colors cursor-pointer font-mono text-xs leading-none active:scale-[0.98]"
                  title={`Copy ${portfolioData.personal.socialLinks.email}`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span className="text-[var(--accent)]">Copied email</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--ink-faint)] shrink-0" />
                      <span>{portfolioData.personal.socialLinks.email}</span>
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--ink-muted)]">
                  <a
                    href={portfolioData.personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)]"
                  >
                    GitHub
                  </a>
                  <a
                    href={portfolioData.personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={portfolioData.personal.socialLinks.academicGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)]"
                    title="Legacy GitHub (@masked-redhat)"
                  >
                    Legacy GH
                  </a>
                  <a
                    href={portfolioData.personal.socialLinks.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)]"
                  >
                    Kaggle
                  </a>
                </div>
              </div>
            </div>

            {/* right hairline backend engineering spec rail */}
            <aside className="lg:col-span-4 lg:border-l lg:border-[var(--rule)] lg:pl-8 text-xs">
              <dl className="space-y-4">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)] mb-1">
                    Currently
                  </dt>
                  <dd className="text-[var(--ink)] font-medium">
                    Fullstack Developer · Rocket Reels
                  </dd>
                </div>

                <div className="pt-3 border-t border-[var(--rule)]">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)] mb-1">
                    Core Runtimes
                  </dt>
                  <dd className="font-mono text-[11px] text-[var(--ink-muted)] leading-relaxed">
                    Node.js · TypeScript · Python · C++17
                  </dd>
                </div>

                <div className="pt-3 border-t border-[var(--rule)]">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)] mb-1">
                    Data &amp; Messaging
                  </dt>
                  <dd className="font-mono text-[11px] text-[var(--ink-muted)] leading-relaxed">
                    PostgreSQL · MongoDB · Kafka · RabbitMQ · Redis
                  </dd>
                </div>

                <div className="pt-3 border-t border-[var(--rule)]">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-faint)] mb-1">
                    Infrastructure
                  </dt>
                  <dd className="font-mono text-[11px] text-[var(--ink-muted)] leading-relaxed">
                    AWS · Docker · Nginx · Linux · GitHub Actions
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          {/* full-width hairline metric ledger (zero boxes) */}
          <div className="pt-8 border-t border-[var(--rule)] grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
            {ledger.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="font-mono text-2xl sm:text-3xl text-[var(--ink)] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-[var(--ink)]">{item.label}</div>
                <div className="text-[11px] text-[var(--ink-faint)]">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
