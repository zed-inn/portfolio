// lowercased comments per rule 8
// unified monumental swiss editorial cover hero with gentle scroll parallax and magnetic actions
import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { portfolioData } from "@/config";
import { PRIMARY_RESUME } from "@/config/resumeLinks";
import { Magnetic } from "@/components/ui/Magnetic";

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const PersonaHero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const copyTimerRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const mastheadY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const mastheadOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.45]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    const email = portfolioData.personal.socialLinks.email;
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("clipboard api unavailable");
      }
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopiedEmail(false);
        copyTimerRef.current = null;
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const ledger = [
    { value: "4.8M+", label: "Production users synced", sub: "5-min delta ETL CDP" },
    { value: "INR 25L+", label: "Revenue recovered", sub: "22k+ autopay migration" },
    { value: "20M+", label: "Stale records pruned", sub: "0% downtime Atlas resync" },
    { value: "17 KB", label: "RAM per active conn", sub: "C++17 POSIX poll() FSM" },
  ];

  return (
    <section
      ref={heroRef}
      className="hero-ambient pt-24 sm:pt-28 pb-16 sm:pb-20 px-5 sm:px-8 w-full lg:min-h-[min(86svh,820px)] flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full space-y-10 sm:space-y-12">
        {/* top editorial folio drafting strip */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
          className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--rule)] font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-faint)]"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
            <span>IIT Kanpur &apos;26 · Backend Systems Engineer</span>
          </span>
          <span>Mumbai, India</span>
        </motion.div>

        {/* unified monumental masthead with descender-safe masked expo reveal & gentle scroll drift */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: mastheadY, opacity: mastheadOpacity }}
          className="space-y-4"
        >
          <div className="overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.h1
              initial={prefersReducedMotion ? false : { y: "102%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.72, ease: EDITORIAL_EASE }}
              className="font-serif-editorial text-balance text-[clamp(3.8rem,9.5vw,7.6rem)] leading-[0.93] tracking-[-0.03em] text-[var(--ink)]"
            >
              Kartikey Kumar
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.p
              initial={prefersReducedMotion ? false : { y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.72, delay: 0.08, ease: EDITORIAL_EASE }}
              className="font-serif-editorial italic text-balance text-2xl sm:text-3xl md:text-[38px] leading-[1.18] text-[var(--ink-muted)] max-w-4xl"
            >
              Architecting high-concurrency APIs, transactional pipelines, and fault-tolerant storage systems.
            </motion.p>
          </div>
        </motion.div>

        {/* mid drafting rule separating masthead from split narrative & spec rail */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: EDITORIAL_EASE }}
          className="pt-8 border-t border-[var(--rule)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          <div className="lg:col-span-8 space-y-6">
            <p className="text-sm sm:text-[15.5px] text-[var(--ink-muted)] leading-[1.72] max-w-2xl">
              IIT Kanpur graduate (&apos;26) specializing in backend systems engineering across Node.js, Python, and C++17. Proven experience scaling multi-million-user production databases, executing zero-downtime replica resyncs, building 5-minute checkpointed delta ETL pipelines, and delivering resilient APIs end to end.
            </p>

            {/* magnetic crisp swiss rounded-md action strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 text-xs sm:text-sm">
              <Magnetic>
                <a
                  href={PRIMARY_RESUME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-md bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-[var(--btn-ink)] font-medium text-xs leading-none transition-colors active:scale-[0.98]"
                  title={`Open ${PRIMARY_RESUME.title}`}
                >
                  <span>Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>

              <Magnetic strength={4}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 h-10 px-3.5 rounded-md border border-[var(--rule)] bg-[var(--surface)] hover:border-[var(--accent)]/50 text-[var(--ink)] transition-colors cursor-pointer font-mono text-xs leading-none active:scale-[0.98]"
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
              </Magnetic>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--ink-muted)]">
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)] hover:decoration-[var(--accent)]"
                >
                  GitHub
                </a>
                <a
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)] hover:decoration-[var(--accent)]"
                >
                  LinkedIn
                </a>
                <a
                  href={portfolioData.personal.socialLinks.academicGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)] hover:decoration-[var(--accent)]"
                  title="Legacy GitHub (@masked-redhat)"
                >
                  Legacy GH
                </a>
                <a
                  href={portfolioData.personal.socialLinks.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--rule-strong)] hover:decoration-[var(--accent)]"
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
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)] mb-1.5 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  <span>Currently</span>
                </dt>
                <dd className="text-[var(--ink)] font-medium">
                  Fullstack Developer · Rocket Reels
                </dd>
              </div>

              <div className="pt-3.5 border-t border-[var(--rule)]">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)] mb-1">
                  Core Runtimes
                </dt>
                <dd className="font-mono text-[11px] text-[var(--ink-muted)] leading-relaxed">
                  Node.js · TypeScript · Python · C++17
                </dd>
              </div>

              <div className="pt-3.5 border-t border-[var(--rule)]">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)] mb-1">
                  Data &amp; Messaging
                </dt>
                <dd className="font-mono text-[11px] text-[var(--ink-muted)] leading-relaxed">
                  PostgreSQL · MongoDB · Kafka · RabbitMQ · Redis
                </dd>
              </div>

              <div className="pt-3.5 border-t border-[var(--rule)]">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-faint)] mb-1">
                  Infrastructure
                </dt>
                <dd className="font-mono text-[11px] text-[var(--ink-muted)] leading-relaxed">
                  AWS · Docker · Nginx · Linux · GitHub Actions
                </dd>
              </div>
            </dl>
          </aside>
        </motion.div>

        {/* grounded hairline-divided proof ledger with specular edge and top-accent hover micro-bar */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: EDITORIAL_EASE }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] rounded-xl border border-[var(--rule)] overflow-hidden surface-specular"
        >
          {ledger.map((item) => (
            <div
              key={item.label}
              className="group relative bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-colors p-5 sm:p-6 space-y-1.5"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              />
              <div className="font-mono text-3xl sm:text-[34px] text-[var(--ink)] tracking-tight leading-none">
                {item.value}
              </div>
              <div className="text-xs font-medium text-[var(--ink)] pt-1">{item.label}</div>
              <div className="text-[11px] text-[var(--ink-faint)]">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
