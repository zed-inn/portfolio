// lowercased comments per rule 8
// runtime validated schemas for candidate identity, projects, experiences, and metrics
import { z } from "zod";

export const metricSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  highlight: z.boolean().default(false),
  detail: z.string().min(5),
  suffix: z.string().optional(),
});

export const lensKeySchema = z.enum([
  "fullstack_all",
  "fullstack_node",
  "fullstack_python",
  "backend_all",
  "backend_node",
  "backend_python",
  "devops",
  "data",
  "systems",
  "swe",
  "automation",
  "distributed_ai",
  "omni",
]);

export type LensKey = z.infer<typeof lensKeySchema>;

export const lensWeightSchema = z.object({
  fullstack_all: z.number().min(0).max(10),
  fullstack_node: z.number().min(0).max(10),
  fullstack_python: z.number().min(0).max(10),
  backend_all: z.number().min(0).max(10),
  backend_node: z.number().min(0).max(10),
  backend_python: z.number().min(0).max(10),
  devops: z.number().min(0).max(10),
  data: z.number().min(0).max(10),
  systems: z.number().min(0).max(10),
  swe: z.number().min(0).max(10),
  automation: z.number().min(0).max(10),
  distributed_ai: z.number().min(0).max(10),
});

export const lensDefinitionSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.enum(["primary", "nested"]),
  parentId: z.string().optional(),
  tagline: z.string().min(5),
  description: z.string().min(10),
  icon: z.string().min(1),
  primarySkills: z.array(z.string().min(1)),
});

export const commitItemSchema = z.object({
  hash: z.string().min(4),
  message: z.string().min(1),
  date: z.string().min(1),
  author: z.string().min(1),
});

export const failureInvariantSchema = z.object({
  failureMode: z.string().min(3),
  mitigation: z.string().min(5),
});

export const latencyProfileSchema = z.object({
  p50: z.string().min(1),
  p95: z.string().min(1),
  p99: z.string().min(1),
});

export const projectSchema = z.object({
  id: z.string().min(1),
  code: z.string().min(2).default("SYS-01"),
  title: z.string().min(1),
  category: z.string().min(1),
  shortDescription: z.string().min(10),
  fullDescription: z.string().min(20),
  technologies: z.array(z.string().min(1)).min(1),
  metrics: z.array(metricSchema),
  lensWeights: lensWeightSchema,
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  kaggleUrl: z.string().url().optional(),
  architectureNotes: z.array(z.string().min(5)),
  concurrencyModel: z.string().default("epoll Event Loop / Non-Blocking"),
  memoryProfile: z.string().default("Zero intermediate heap allocations"),
  protocolSpec: z.string().default("RFC 7230 / TCP Stream"),
  failureInvariants: z
    .array(failureInvariantSchema)
    .default([
      {
        failureMode: "Network Partition / Dropouts",
        mitigation: "Bounded retry buffers with exponential backoff and circuit breaking.",
      },
      {
        failureMode: "Concurrency Race Conditions",
        mitigation: "Row-level locks and write-ahead log atomic state transitions.",
      },
    ]),
  latencyProfile: latencyProfileSchema.default({
    p50: "1.2ms",
    p95: "5.8ms",
    p99: "14.2ms",
  }),
  featured: z.boolean().default(false),
  architectureDiagram: z.string().optional(),
  commitHistory: z.array(commitItemSchema).default([]),
});

export const workExperienceSchema = z.object({
  id: z.string().min(1),
  company: z.string().min(1),
  role: z.string().min(1),
  location: z.string().min(1),
  period: z.string().min(1),
  summary: z.string().min(10),
  achievements: z.array(z.string().min(10)).min(1),
  technologies: z.array(z.string().min(1)).min(1),
  lensWeights: lensWeightSchema,
  subSystems: z
    .array(
      z.object({
        name: z.string().min(1),
        description: z.string().min(10),
        metrics: z.array(metricSchema),
        tech: z.array(z.string()),
      })
    )
    .default([]),
});

export const storyChapterSchema = z.object({
  id: z.string().min(1),
  number: z.number().int().min(0),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  narrative: z.array(z.string().min(10)),
  highlightStats: z.array(metricSchema),
  linkedProjectIds: z.array(z.string()),
  linkedExperienceIds: z.array(z.string()),
});

export const resumeTrackSchema = z.object({
  trackId: z.string().min(1),
  shortLabel: z.string().min(1),
  title: z.string().min(1),
  url: z.string().url(),
});

export const resumeLinksSchema = z.object({
  software_engineer: resumeTrackSchema,
  backend_nodejs: resumeTrackSchema,
  backend_python: resumeTrackSchema,
  fullstack_engineer: resumeTrackSchema,
  devops_cloud: resumeTrackSchema,
  data_engineer: resumeTrackSchema,
  automation_engineer: resumeTrackSchema,
  distributed_ai_infra: resumeTrackSchema,
});

export type ResumeTrack = z.infer<typeof resumeTrackSchema>;
export type ResumeTrackKey = keyof z.infer<typeof resumeLinksSchema>;

export const portfolioConfigSchema = z.object({
  personal: z.object({
    name: z.string().min(1),
    tagline: z.string().min(5),
    subTagline: z.string().min(5),
    bio: z.string().min(20),
    education: z.object({
      degree: z.string().min(1),
      institution: z.string().min(1),
      graduationYear: z.string().min(1),
      notable: z.string().optional(),
    }),
    socialLinks: z.object({
      github: z.string().url(),
      academicGithub: z.string().url(),
      linkedin: z.string().url(),
      kaggle: z.string().url(),
      email: z.string().email(),
      protonEmail: z.string().email(),
      companyEmail: z.string().email(),
    }),
    resumeLinks: resumeLinksSchema,
  }),
  lenses: z.array(lensDefinitionSchema),
  experiences: z.array(workExperienceSchema),
  projects: z.array(projectSchema),
  storyChapters: z.array(storyChapterSchema),
  techTaxonomy: z.record(z.string(), z.array(z.string())),
});

export type Metric = z.infer<typeof metricSchema>;
export type FailureInvariant = z.infer<typeof failureInvariantSchema>;
export type CommitItem = z.infer<typeof commitItemSchema>;
export type LatencyProfile = z.infer<typeof latencyProfileSchema>;
export type LensWeights = z.infer<typeof lensWeightSchema>;
export type LensDefinition = z.infer<typeof lensDefinitionSchema>;
export type Project = z.infer<typeof projectSchema>;
export type WorkExperience = z.infer<typeof workExperienceSchema>;
export type StoryChapter = z.infer<typeof storyChapterSchema>;
export type PortfolioConfig = z.infer<typeof portfolioConfigSchema>;
export type PortfolioConfigInput = z.input<typeof portfolioConfigSchema>;
