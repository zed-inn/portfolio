// lowercased comments per rule 8
// live-only github public push activity service with strict validation and caching
import { portfolioData } from "@/config";

export interface CommitFeedItem {
  id: string;
  sha: string;
  repo: string;
  projectId?: string;
  message: string;
  date: string;
  url: string;
  source: "live";
}

interface CachedPayload {
  timestamp: number;
  items: CommitFeedItem[];
}

const CACHE_KEY = "gh_commit_feed_zed_inn_v2";
const CACHE_TTL_MS = 10 * 60 * 1000;
const REPO_PATTERN = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const SHA_PATTERN = /^[0-9a-f]{7,40}$/i;

function isValidCommitItem(item: unknown): item is CommitFeedItem {
  if (!item || typeof item !== "object") return false;
  const candidate = item as Record<string, unknown>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.sha === "string" &&
    SHA_PATTERN.test(candidate.sha) &&
    typeof candidate.repo === "string" &&
    typeof candidate.message === "string" &&
    typeof candidate.date === "string" &&
    typeof candidate.url === "string" &&
    candidate.url.startsWith("https://github.com/") &&
    candidate.source === "live"
  );
}

export async function fetchGitHubCommitFeed(): Promise<{
  items: CommitFeedItem[];
  mode: "live" | "unavailable";
}> {
  // check session storage cache first to avoid api rate limits
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<CachedPayload>;
      if (
        typeof parsed.timestamp === "number" &&
        Date.now() - parsed.timestamp < CACHE_TTL_MS &&
        Array.isArray(parsed.items)
      ) {
        const validCached = parsed.items.filter(isValidCommitItem);
        if (validCached.length > 0) {
          return { items: validCached, mode: "live" };
        }
      }
    }
  } catch {
    // ignore storage access or parse errors
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4500);

  try {
    const res = await fetch("https://api.github.com/users/zed-inn/events/public?per_page=30", {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    });

    if (!res.ok) {
      return { items: [], mode: "unavailable" };
    }

    const events: unknown = await res.json();
    if (!Array.isArray(events)) {
      return { items: [], mode: "unavailable" };
    }

    const liveItems: CommitFeedItem[] = [];
    const seen = new Set<string>();

    for (const rawEv of events) {
      if (!rawEv || typeof rawEv !== "object") continue;
      const ev = rawEv as {
        type?: unknown;
        created_at?: unknown;
        repo?: { name?: unknown };
        payload?: {
          commits?: unknown;
        };
      };

      if (ev.type !== "PushEvent" || !Array.isArray(ev.payload?.commits)) continue;
      const fullRepo = typeof ev.repo?.name === "string" ? ev.repo.name.trim() : "";
      if (!REPO_PATTERN.test(fullRepo)) continue;

      const shortRepo = fullRepo.split("/")[1];
      const dateStr =
        typeof ev.created_at === "string" && ev.created_at.length >= 10
          ? ev.created_at.slice(0, 10)
          : "2026";

      for (const rawCommit of ev.payload.commits) {
        if (!rawCommit || typeof rawCommit !== "object") continue;
        const c = rawCommit as { sha?: unknown; message?: unknown };
        const fullSha = typeof c.sha === "string" ? c.sha.trim() : "";
        if (!SHA_PATTERN.test(fullSha)) continue;

        const sha = fullSha.slice(0, 7);
        const message =
          typeof c.message === "string" ? c.message.split("\n")[0].trim() : "";
        if (!message || seen.has(sha)) continue;
        seen.add(sha);

        const commitUrl = `https://github.com/${fullRepo}/commit/${fullSha}`;
        if (!commitUrl.startsWith("https://github.com/")) continue;

        const matchedProject = portfolioData.projects.find((p) =>
          p.githubUrl?.toLowerCase().endsWith(`/${shortRepo.toLowerCase()}`)
        );

        liveItems.push({
          id: `live-${sha}`,
          sha,
          repo: shortRepo,
          projectId: matchedProject?.id,
          message,
          date: dateStr,
          url: commitUrl,
          source: "live",
        });
      }
    }

    if (liveItems.length === 0) {
      return { items: [], mode: "unavailable" };
    }

    const trimmed = liveItems.slice(0, 12);
    try {
      window.sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), items: trimmed })
      );
    } catch {
      // ignore storage quota errors
    }

    return { items: trimmed, mode: "live" };
  } catch {
    return { items: [], mode: "unavailable" };
  } finally {
    window.clearTimeout(timeout);
  }
}
