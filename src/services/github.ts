// lowercased comments per rule 8
// rate-limit-safe github public push activity service with static manifest fallback
import { portfolioData } from "@/config";

export interface CommitFeedItem {
  id: string;
  sha: string;
  repo: string;
  projectId?: string;
  message: string;
  date: string;
  url: string;
  source: "live" | "verified";
}

interface CachedPayload {
  timestamp: number;
  items: CommitFeedItem[];
}

const CACHE_KEY = "gh_commit_feed_zed_inn_v1";
const CACHE_TTL_MS = 10 * 60 * 1000;

function extractRepoName(githubUrl?: string): string {
  if (!githubUrl) return "kaggle-dataset";
  const parts = githubUrl.replace(/\/+$/, "").split("/");
  return parts[parts.length - 1] || "repository";
}

// build verified static commit list from portfolio.config.ts
export function getStaticCommitFeed(): CommitFeedItem[] {
  const items: CommitFeedItem[] = [];
  for (const project of portfolioData.projects) {
    const repo = extractRepoName(project.githubUrl);
    const baseUrl = project.githubUrl || project.kaggleUrl || portfolioData.personal.socialLinks.github;
    for (const c of project.commitHistory) {
      items.push({
        id: `static-${project.id}-${c.hash}`,
        sha: c.hash.slice(0, 7),
        repo,
        projectId: project.id,
        message: c.message,
        date: c.date,
        url: baseUrl,
        source: "verified",
      });
    }
  }
  return items;
}

export async function fetchGitHubCommitFeed(): Promise<{
  items: CommitFeedItem[];
  mode: "live" | "verified";
}> {
  const staticItems = getStaticCommitFeed();

  // check sessionStorage cache first to avoid api rate limits
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as CachedPayload;
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.items.length > 0) {
        return { items: parsed.items, mode: "live" };
      }
    }
  } catch {
    // ignore storage access errors
  }

  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4500);
    const res = await fetch("https://api.github.com/users/zed-inn/events/public?per_page=30", {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    });
    window.clearTimeout(timeout);

    if (!res.ok) {
      return { items: staticItems, mode: "verified" };
    }

    const events = (await res.json()) as Array<{
      type?: string;
      created_at?: string;
      repo?: { name?: string };
      payload?: {
        commits?: Array<{ sha?: string; message?: string }>;
      };
    }>;

    const liveItems: CommitFeedItem[] = [];
    const seen = new Set<string>();

    for (const ev of events) {
      if (ev.type !== "PushEvent" || !ev.payload?.commits) continue;
      const fullRepo = ev.repo?.name || "zed-inn/repo";
      const shortRepo = fullRepo.split("/")[1] || fullRepo;
      const dateStr = ev.created_at ? ev.created_at.slice(0, 10) : "2026";

      for (const c of ev.payload.commits) {
        const sha = (c.sha || "").slice(0, 7);
        const message = (c.message || "").split("\n")[0].trim();
        if (!sha || !message || seen.has(sha)) continue;
        seen.add(sha);

        const matchedProject = portfolioData.projects.find((p) =>
          p.githubUrl?.toLowerCase().includes(shortRepo.toLowerCase())
        );

        liveItems.push({
          id: `live-${sha}`,
          sha,
          repo: shortRepo,
          projectId: matchedProject?.id,
          message,
          date: dateStr,
          url: `https://github.com/${fullRepo}/commit/${c.sha}`,
          source: "live",
        });
      }
    }

    if (liveItems.length === 0) {
      return { items: staticItems, mode: "verified" };
    }

    // merge live commits ahead of static verified highlights
    const merged = [...liveItems.slice(0, 8), ...staticItems].slice(0, 16);
    try {
      window.sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), items: merged })
      );
    } catch {
      // ignore storage quota errors
    }

    return { items: merged, mode: "live" };
  } catch {
    return { items: staticItems, mode: "verified" };
  }
}
