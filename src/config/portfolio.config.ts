// lowercased comments per rule 8
// master portfolio data payload strictly conforming to schema.ts and master_truth_full.md
import { PortfolioConfigInput } from "./schema";
import { RESUME_DRIVE_LINKS } from "./resumeLinks";

export const rawPortfolioConfig: PortfolioConfigInput = {
  personal: {
    name: "Kartikey Kumar",
    tagline: "High-Concurrency Systems Architect & Product Full-Stack Engineer",
    subTagline:
      "Building resilient distributed engines, zero-copy network parsers, and realtime web platforms.",
    bio: "IIT Kanpur graduate ('26) with deep engineering roots in distributed systems, high-concurrency API architecture, and full-stack product craft. Proven experience maintaining production clusters at multi-million-user scale, executing zero-downtime rolling replica resyncs, building 5-minute checkpointed delta ETL pipelines, and designing sub-millisecond Protobuf vector search pipelines.",
    education: {
      degree: "Bachelor of Technology in Civil Engineering",
      institution: "Indian Institute of Technology (IIT) Kanpur",
      graduationYear: "2026",
      notable:
        "Extensive coursework & engineering focus in computer networks, operating systems, distributed architectures, and algorithms.",
    },
    socialLinks: {
      github: "https://github.com/zed-inn",
      academicGithub: "https://github.com/masked-redhat",
      linkedin: "https://www.linkedin.com/in/kartikey-kumar-009088269/",
      kaggle: "https://www.kaggle.com/skhull3",
      email: "kartikey.hom@gmail.com",
      protonEmail: "skhull.coding@proton.me",
      companyEmail: "kartikey@rocketreels.co",
    },
    resumeLinks: RESUME_DRIVE_LINKS,
  },
  lenses: [
    {
      id: "omni",
      name: "All Systems (Omni)",
      category: "primary",
      tagline: "Complete Technical Inventory & Systems Overview",
      description:
        "Full cross-section of all 10 repositories, 3 production experiences, and verified distributed systems benchmarks.",
      icon: "Sparkles",
      primarySkills: [
        "Distributed Systems",
        "Fastify",
        "C++17",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Kafka",
        "RabbitMQ",
      ],
    },
    {
      id: "fullstack_all",
      name: "Fullstack Architecture",
      category: "primary",
      tagline: "End-to-End Product Craft & High-Scale Systems",
      description:
        "Production full-stack engineering across Fastify, Express, React 19, Next.js, WebSockets, and stateful databases.",
      icon: "Layers",
      primarySkills: [
        "TypeScript",
        "React",
        "Next.js",
        "Fastify",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "REST/gRPC",
      ],
    },
    {
      id: "fullstack_node",
      name: "Node.js Fullstack",
      category: "nested",
      parentId: "fullstack_all",
      tagline: "V8 Event Loop & Real-Time Web Platforms",
      description:
        "Fastify 5, Express 5, React 19, Socket.io bidirectional sync, and LexoRank drag-and-drop systems.",
      icon: "Terminal",
      primarySkills: [
        "Node.js",
        "TypeScript",
        "Fastify",
        "Express",
        "React",
        "Socket.io",
        "Drizzle ORM",
        "Zod",
      ],
    },
    {
      id: "fullstack_python",
      name: "Python Fullstack",
      category: "nested",
      parentId: "fullstack_all",
      tagline: "Asyncio Runtimes & Full-Stack Dashboards",
      description:
        "FastAPI, Django DRF 5-replica clusters, React admin portals, BullMQ workers, and SQLAlchemy 2.0.",
      icon: "Binary",
      primarySkills: [
        "Python",
        "FastAPI",
        "Django",
        "React",
        "SQLAlchemy",
        "Pydantic",
        "RabbitMQ",
        "Redis",
      ],
    },
    {
      id: "backend_all",
      name: "Backend Engineering",
      category: "primary",
      tagline: "High-Concurrency Microservices & ACID Invariants",
      description:
        "Focusing on event-driven streaming, row-level locks, transactional outbox relays, and high-throughput APIs.",
      icon: "Server",
      primarySkills: [
        "Node.js",
        "Python",
        "Fastify",
        "FastAPI",
        "PostgreSQL",
        "Kafka",
        "RabbitMQ",
      ],
    },
    {
      id: "backend_node",
      name: "Node.js Backend",
      category: "nested",
      parentId: "backend_all",
      tagline: "High-Throughput Node.js Microservices",
      description:
        "Fastify 5, Express, MongoDB Atlas, Redis Pub/Sub, and event-driven outbox relays.",
      icon: "Cpu",
      primarySkills: [
        "Node.js",
        "TypeScript",
        "Fastify",
        "MongoDB",
        "Redis",
        "Kafka",
        "Zod",
      ],
    },
    {
      id: "backend_python",
      name: "Python Backend",
      category: "nested",
      parentId: "backend_all",
      tagline: "ACID Concurrency & Python Systems",
      description:
        "FastAPI, Django 5 replicas, SQLAlchemy, zoneinfo, SQLite WAL immediate locks, and gRPC.",
      icon: "Terminal",
      primarySkills: [
        "Python",
        "FastAPI",
        "Django",
        "SQLAlchemy",
        "Pydantic",
        "gRPC",
        "pytest",
      ],
    },
    {
      id: "devops",
      name: "DevOps & Cloud Platform",
      category: "primary",
      tagline: "Multi-Cloud Infrastructure & Zero-Downtime Reliability",
      description:
        "Focusing on multi-service Docker topologies, AWS services, rolling Atlas replica resyncs, and Prometheus/Grafana.",
      icon: "Cloud",
      primarySkills: [
        "Docker",
        "AWS (EC2, S3, Lambda, CloudFront)",
        "Nginx",
        "GitHub Actions",
        "Atlas API",
        "Prometheus",
      ],
    },
    {
      id: "data",
      name: "Data Engineering",
      category: "primary",
      tagline: "Incremental ETLs & Streaming Intelligence",
      description:
        "Focusing on 5-minute checkpointed delta ETLs, Kafka/Protobuf streaming, 4.8M+ user journeys, and Pandas normalization.",
      icon: "Binary",
      primarySkills: [
        "Python",
        "Pandas",
        "Kafka",
        "MongoDB Aggregation",
        "PostgreSQL",
        "pgvector",
        "ETL",
      ],
    },
    {
      id: "systems",
      name: "Systems & Core",
      category: "primary",
      tagline: "Low-Level Systems & Network Protocols",
      description:
        "Focusing on C++17 non-blocking Linux poll() event loops, zero-copy RFC 7230 parsing, and POSIX sockets.",
      icon: "Flame",
      primarySkills: [
        "C++17",
        "POSIX Sockets",
        "Linux poll()",
        "Zero-Copy Parser",
        "TCP/IP",
        "Concurrency",
      ],
    },
    {
      id: "swe",
      name: "Software Engineer",
      category: "primary",
      tagline: "Generalist Systems & Clean Architecture",
      description:
        "Focusing on Clean Architecture, 18 Use Cases, base-62 BigInt LexoRank, and automated load testing.",
      icon: "Boxes",
      primarySkills: [
        "Clean Architecture",
        "TypeScript",
        "Python",
        "C++",
        "CQRS",
        "LexoRank",
        "k6",
      ],
    },
    {
      id: "automation",
      name: "Platform Automation",
      category: "primary",
      tagline: "Workflow Digitization & Blast-Radius Control",
      description:
        "Focusing on throttled batch migrations, automated AcroForm PDF generation, and AI-driven data enrichment.",
      icon: "Wrench",
      primarySkills: [
        "Automation",
        "Batch Workers",
        "PhonePe Migration",
        "iText 8",
        "Gemini API",
        "Cron Pipelines",
      ],
    },
    {
      id: "distributed_ai",
      name: "Distributed Systems & AI Infra",
      category: "primary",
      tagline: "Event Streaming & Vector Search Architecture",
      description:
        "Focusing on Kafka transactional outbox relays, pgvector HNSW semantic search, and CPU vector embeddings.",
      icon: "Network",
      primarySkills: [
        "Kafka",
        "RabbitMQ",
        "gRPC",
        "Protobuf",
        "pgvector",
        "SentenceTransformers",
        "Docker",
      ],
    },
  ],
  experiences: [
    {
      id: "rocket-reels",
      company: "Rocket Reels",
      role: "Fullstack Developer",
      location: "Mumbai, India",
      period: "Aug 2026 – Present",
      summary:
        "Owned high-scale production systems across MongoDB Atlas clusters, 5-minute checkpointed ETL pipelines, serverless image transformation pipelines, CMS administration with strict 1-to-1 RBAC, and payment migration cutovers.",
      achievements: [
        "Pruned 20M+ stale MongoDB records across ottdbuat and CMSUAT without cluster downtime, triggering zero-downtime rolling Atlas replica resyncs to reclaim storage on shared production shards.",
        "Engineered the Customer Data Platform (CDP) syncing 4.8M+ users, 15M+ view sessions, and 1.4M+ transactions with a 5-minute checkpointed delta ETL and 1-click PhonePe chargeback dispute export.",
        "Uncovered a 48% 7-day single-title churn drop-off across 4.8M+ users using a Next.js App Router and Edge SQLite (Turso) dashboard.",
        "Built a serverless dynamic image resolution pipeline (CloudFront -> S3 -> AWS Lambda Sharp -> WebAssembly WebP) cutting mobile page load by 9s (50–60%) and image sizes by up to 95%.",
        "Hardened Fastify admin panel backend with per-route RBAC, authenticated legacy Next.js proxy routing, Redis-locked JSON audit diff reports (800+ RPS across 10,000 calls), and custom multi-audio/multi-resolution AWS MediaConvert HLS pipelines.",
        "Recovered INR 25+ Lakhs in recurring revenue across 22,000+ lapsed subscribers via a 120-user pilot and throttled 3,000-user/day PhonePe migration.",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Fastify",
        "MongoDB",
        "AWS (S3, Lambda, CloudFront, MediaConvert)",
        "Redis",
        "Next.js",
        "React",
        "Docker",
        "k6",
      ],
      lensWeights: {
        fullstack_all: 9,
        fullstack_node: 10,
        fullstack_python: 4,
        backend_all: 10,
        backend_node: 10,
        backend_python: 3,
        devops: 9,
        data: 10,
        systems: 7,
        swe: 9,
        automation: 10,
        distributed_ai: 8,
      },
      subSystems: [
        {
          name: "UAT Database Pruning & Rolling Atlas Resync",
          description:
            "Pruned 20M+ stale documents using 4,000-doc reservoir sampling and dynamic foreign-key graph discovery with rolling Atlas replica resyncs.",
          metrics: [
            {
              label: "Stale Docs Pruned",
              value: "20M+",
              highlight: true,
              detail: "Across ottdbuat and CMSUAT",
            },
            {
              label: "Cluster Downtime",
              value: "0%",
              highlight: true,
              detail: "Zero performance drop on shared prod shard",
            },
            {
              label: "Batch Size",
              value: "10,000",
              highlight: false,
              detail: "OOM-safe cursor streaming",
            },
          ],
          tech: ["Node.js", "MongoDB Atlas API", "SQLite", "mongodump"],
        },
        {
          name: "Customer Data Platform & 5-Min Delta ETL",
          description:
            "Syncs 4.8M+ users, 15M+ sessions, and 1.4M+ transactions into MongoDB with 1-click PhonePe dispute export.",
          metrics: [
            {
              label: "Users Synced",
              value: "4.8M+",
              highlight: true,
              detail: "Unified across 3 MongoDB databases",
            },
            {
              label: "Sessions Processed",
              value: "15M+",
              highlight: false,
              detail: "View sessions with 23 behavioral archetypes",
            },
            {
              label: "Developer Time Saved",
              value: "9–12",
              suffix: "hrs/wk",
              highlight: true,
              detail: "Eliminated ad-hoc data requests",
            },
          ],
          tech: [
            "Fastify",
            "React",
            "Vite",
            "Tailwind CSS",
            "MongoDB",
            "node-cron",
          ],
        },
        {
          name: "Serverless Dynamic Image Resolution Pipeline",
          description:
            "CloudFront-first S3 caching with on-miss AWS Lambda Sharp resizing and lossless backend WebP compression.",
          metrics: [
            {
              label: "Mobile Load Speed",
              value: "9s",
              suffix: "faster",
              highlight: true,
              detail: "50–60% QA-measured improvement",
            },
            {
              label: "Payload Reduction",
              value: "Up to 95%",
              highlight: true,
              detail: "Dynamic assets/wxh/filename generation",
            },
          ],
          tech: [
            "AWS Lambda",
            "AWS S3",
            "Amazon CloudFront",
            "Sharp",
            "WebAssembly WebP",
          ],
        },
      ],
    },
    {
      id: "campusx",
      company: "CampusX (Prev. ThoughtsHub)",
      role: "Founding Backend Engineer",
      location: "Kanpur, India",
      period: "Dec 2024 – Jan 2026",
      summary:
        "Scaled campus community platform to 140+ active users. Re-architected a 6-month monolith into an 18-module TypeScript backend in 5 days, ingested 70k government institute records via Node.js ETL, and automated CI/CD across 2 AWS EC2 environments.",
      achievements: [
        "Re-architected monolithic JavaScript backend into 18 modular services in TypeScript, Express 5, PostgreSQL, and Redis in a 5-day sprint for 140+ campus users.",
        "Auto-generated 5,501 lines of API documentation on server startup by inspecting runtime Zod DTO contracts.",
        "Built a Node.js Excel ETL ingesting 70,000+ government AISHE institutes into PostgreSQL with automated Google Gemini 2.0 Flash AI profile enrichment.",
        "Automated GitHub Actions CI/CD across 2 AWS EC2 instances with Nginx, offloading TypeScript builds to avoid 1 GB RAM spikes and eliminate manual SSH releases (saving 15 min/deploy).",
        "Shipped real-time 1-on-1 and campus-wide Socket.io chat, backend Firebase (FCM) push notifications, and in-memory S3 image uploads.",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Redis",
        "Socket.io",
        "AWS EC2",
        "AWS S3",
        "Gemini API",
        "GitHub Actions",
      ],
      lensWeights: {
        fullstack_all: 8,
        fullstack_node: 9,
        fullstack_python: 3,
        backend_all: 9,
        backend_node: 9,
        backend_python: 2,
        devops: 8,
        data: 8,
        systems: 6,
        swe: 8,
        automation: 8,
        distributed_ai: 5,
      },
      subSystems: [
        {
          name: "18-Module Clean Architecture Rewrite",
          description:
            "Decoupled 6 core modules and 12 feature modules with continuation-local storage (cls-hooked) automatic transaction propagation.",
          metrics: [
            {
              label: "Rewrite Duration",
              value: "5 Days",
              highlight: true,
              detail: "Replaced 6-month legacy monolith",
            },
            {
              label: "Generated Docs",
              value: "5,501",
              suffix: "lines",
              highlight: false,
              detail: "Auto-compiled on boot",
            },
            {
              label: "Active Users",
              value: "140+",
              highlight: false,
              detail: "Campus social network",
            },
          ],
          tech: [
            "Express 5",
            "TypeScript",
            "PostgreSQL",
            "Redis",
            "cls-hooked",
          ],
        },
        {
          name: "70k+ Institute ETL & Gemini Flash AI",
          description:
            "Parsed 5 government AISHE sheets using read-excel-file and synthesized rich profiles with Google Gemini 2.0 Flash.",
          metrics: [
            {
              label: "Institutes Ingested",
              value: "70,000+",
              highlight: true,
              detail: "Colleges, Standalones, Universities",
            },
            {
              label: "AI Enriched",
              value: "50+",
              suffix: "/day",
              highlight: false,
              detail: "Throttled to daily quota",
            },
          ],
          tech: [
            "Node.js",
            "read-excel-file",
            "Google Gemini API",
            "PostgreSQL",
          ],
        },
      ],
    },
    {
      id: "office-automation-iitk",
      company: "Office Automation, IIT Kanpur",
      role: "Backend / Software Developer Intern",
      location: "Kanpur, India",
      period: "Jun 2024 – Aug 2024",
      summary:
        "Digitized 3 paper-based campus administrative approval workflows collaborating with the OA Team for 6,000+ students, faculty, and staff. Built template-driven PDF generation cutting official turnaround from 1 day to 30 minutes.",
      achievements: [
        "Digitized 3 campus administrative workflows (LAN Port Activation, Employee Account, VM Renewal) using Java Servlets, JSP, and MySQL for 6,000+ IIT Kanpur users.",
        "Engineered template-driven PDF generation using Java iText 8 and reusable Adobe Acrobat AcroForm templates, cutting document turnaround from 1 day to 30 minutes.",
        "Secured 3 public intranet endpoints against SQL Injection and IDOR using parameterized JDBC PreparedStatements and tamper-proof UUIDv4 reference tokens.",
      ],
      technologies: [
        "Java 11",
        "Java Servlets",
        "JSP",
        "MySQL",
        "iText 8",
        "Adobe Acrobat",
        "UUIDv4",
        "Maven",
      ],
      lensWeights: {
        fullstack_all: 5,
        fullstack_node: 3,
        fullstack_python: 2,
        backend_all: 7,
        backend_node: 4,
        backend_python: 3,
        devops: 4,
        data: 4,
        systems: 5,
        swe: 7,
        automation: 9,
        distributed_ai: 2,
      },
      subSystems: [
        {
          name: "Template-Driven AcroForm PDF Generator",
          description:
            "Injected validated form fields into pre-formatted PDF templates, flattened fields to prevent tampering, and streamed UUID PDFs.",
          metrics: [
            {
              label: "Turnaround Time",
              value: "30 Mins",
              highlight: true,
              detail: "Reduced from up to 1 day",
            },
            {
              label: "Campus Reach",
              value: "6,000+",
              highlight: true,
              detail: "Students, faculty, staff",
            },
          ],
          tech: ["Java 11", "iText 8", "AcroForm", "Servlets"],
        },
      ],
    },
  ],
  projects: [
    {
      id: "real-estate-pipeline",
      latencyProfile: {
        p50: "1.4ms",
        p95: "4.8ms",
        p99: "11.2ms",
      },
      failureInvariants: [
        {
          failureMode: "Kafka Broker Partitioning / Producer Timeout",
          mitigation:
            "Transactional outbox table with SKIP LOCKED relay worker guarantees zero dual-write message loss.",
        },
        {
          failureMode: "Vector Dimension Invalidation & Drift",
          mitigation:
            "Schema compilation enforced at CI gate; incremental HNSW indexing with pgvector delta buffers.",
        },
        {
          failureMode: "Consumer Worker Memory Leak under Burst",
          mitigation:
            "Bounded batch sliding buffers and explicit garbage collection thresholds on Fastify worker loops.",
        },
      ],
      code: "SYS-01",
      concurrencyModel: "5-Stage Event Pipeline / Kafka Ingestion",
      memoryProfile: "Bounded Buffer Streaming / 384-dim Tensor Pool",
      protocolSpec: "101-Field Protobuf / gRPC & pgvector HNSW",
      title: "Real Estate Intelligence Pipeline",
      category: "Distributed Systems & Vector Search",
      shortDescription:
        "5-stage polyglot event streaming pipeline compiling 101 Protobuf fields with transactional outbox relay and pgvector HNSW search.",
      fullDescription:
        "Single-source-of-truth Protobuf schema compiling into TypeScript, Zod, Drizzle, and Python models. Replaced a 5,000ms Ollama LLM builder with a 0.5ms deterministic Protobuf context generator and 384-dim CPU embeddings (bge-small-en-v1.5). Sustained 10,000 k6 requests under 50 concurrent VUs with 0 dropped messages.",
      technologies: [
        "Node.js",
        "Fastify",
        "Python",
        "Kafka",
        "Protobuf",
        "gRPC",
        "PostgreSQL",
        "pgvector",
        "Docker",
        "Prometheus",
        "k6",
      ],
      metrics: [
        {
          label: "k6 Load Test",
          value: "10,000",
          highlight: true,
          detail: "Requests under 50 concurrent VUs",
        },
        {
          label: "Dropped Events",
          value: "0",
          highlight: true,
          detail: "100.00% pipeline delivery parity",
        },
        {
          label: "Embeddings Synced",
          value: "8,050",
          highlight: false,
          detail: "384-dim CPU vectors in 157ms avg",
        },
        {
          label: "Event-Loop Lag",
          value: "11.5ms",
          suffix: "max",
          highlight: false,
          detail: "Low-latency Fastify gateway",
        },
      ],
      lensWeights: {
        fullstack_all: 7,
        fullstack_node: 8,
        fullstack_python: 7,
        backend_all: 10,
        backend_node: 9,
        backend_python: 9,
        devops: 9,
        data: 10,
        systems: 8,
        swe: 9,
        automation: 8,
        distributed_ai: 10,
      },
      githubUrl: "https://github.com/zed-inn/real-estate-intelligence-pipeline",
      architectureNotes: [
        "Transactional Outbox Worker polls event_relay_queue using SELECT FOR UPDATE SKIP LOCKED to prevent Kafka dual-write data loss.",
        "ConnectRPC/gRPC query vectorization reduces semantic similarity lookups from O(N) to O(log N) via pgvector HNSW cosine indexes.",
        "Dead-Letter Queue (real_estate.listing.dlq) captures malformed payloads with a standalone replay CLI tool.",
      ],
      featured: true,
      commitHistory: [
        {
          hash: "7a2f1b4",
          message: "chore: metrics added for 10k k6 stress benchmark",
          date: "2026-10-12",
          author: "Zed <skhull.coding@gmail.com>",
        },
        {
          hash: "8d3e9c1",
          message:
            "feat: deterministic protobuf context generator replacing ollama",
          date: "2026-10-08",
          author: "Zed <skhull.coding@gmail.com>",
        },
        {
          hash: "3c4a5f2",
          message:
            "feat: transactional outbox relay with skip locked concurrency",
          date: "2026-09-28",
          author: "Zed <skhull.coding@gmail.com>",
        },
      ],
    },
    {
      id: "b2b-rate-reconciliation",
      latencyProfile: {
        p50: "820µs",
        p95: "2.4ms",
        p99: "5.1ms",
      },
      failureInvariants: [
        {
          failureMode: "Concurrent Ledger Mutation Race Condition",
          mitigation:
            "select_for_update() row-level locking enforces atomic state transitions across multi-currency ledgers.",
        },
        {
          failureMode: "Multi-Tenant Batch Reconciliation Partial Failure",
          mitigation:
            "Two-phase commit audit logs with compensating rollback transactions identifying discrepancies accurately.",
        },
        {
          failureMode: "RabbitMQ Queue Saturation during Month-End Peak",
          mitigation:
            "5-replica worker pool auto-draining with backpressure acknowledgment limits (prefetch 50).",
        },
      ],
      code: "SYS-02",
      concurrencyModel: "5-Replica Distributed Worker / RabbitMQ PubSub",
      memoryProfile: "Row-Level select_for_update() Locked Memory",
      protocolSpec: "3-Phase Financial Audit Protocol",
      title: "B2B Rate Reconciliation Engine",
      category: "Polyglot Microservices & Financial Audits",
      shortDescription:
        "4-service Fastify and Django reconciliation engine auditing 10,000 load-tested bookings at 47.4 RPS via MongoDB TTL snapshots with 0 duplicates.",
      fullDescription:
        "Orchestrates Fastify ingestion gateway, mock supplier API, 5-replica Django audit engine, and React dashboard over RabbitMQ and Redis BullMQ. Implements PostgreSQL row-level select_for_update() locking to eliminate race conditions under concurrent snapshot and invoice events, flagging 1,525 billing discrepancies across 10,000 k6 bookings at 47.4 RPS.",
      technologies: [
        "Node.js",
        "Fastify",
        "Python",
        "Django",
        "RabbitMQ",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Prometheus",
        "k6",
      ],
      metrics: [
        {
          label: "k6 Booking Events",
          value: "10,000",
          highlight: true,
          detail: "47.4 RPS; 40,005 RabbitMQ messages routed",
        },
        {
          label: "Data Integrity",
          value: "100%",
          highlight: true,
          detail: "0 duplicates across 10k bookings & audits",
        },
        {
          label: "Discrepancies Caught",
          value: "1,525",
          highlight: false,
          detail: "Rate snapshots stored in MongoDB TTL store",
        },
        {
          label: "Worker RAM",
          value: "55.3 MB",
          suffix: "/replica",
          highlight: false,
          detail: "5 horizontally scaled Django replicas",
        },
      ],
      lensWeights: {
        fullstack_all: 8,
        fullstack_node: 8,
        fullstack_python: 9,
        backend_all: 10,
        backend_node: 9,
        backend_python: 10,
        devops: 10,
        data: 8,
        systems: 7,
        swe: 9,
        automation: 9,
        distributed_ai: 8,
      },
      githubUrl: "https://github.com/zed-inn/b2b-rate-reconcilation",
      architectureNotes: [
        "Phase 1: Fastify persists booking in postgres-node, schedules delayed BullMQ job (T - 48h), and publishes to RabbitMQ.",
        "Phase 2: BullMQ worker captures live hotel rate snapshot into MongoDB TTL snapshot store for audit verification.",
        "Phase 3: Django executes atomic 3-way invoice match with row-level locks, logging discrepancy delta and updating SupplierRisk score.",
      ],
      featured: true,
      commitHistory: [
        {
          hash: "4f9b2d1",
          message:
            "perf: add select_for_update row locking to eliminate race conditions",
          date: "2026-10-18",
          author: "Zed <kartikey.hom@gmail.com>",
        },
        {
          hash: "9c1a7e3",
          message:
            "feat: 3-way invoice match settlement with HTTP 207 partial commit handling",
          date: "2026-10-14",
          author: "Zed <kartikey.hom@gmail.com>",
        },
        {
          hash: "2e8d4a6",
          message:
            "chore: docker-compose 4-service polyglot topology with prometheus",
          date: "2026-10-02",
          author: "Zed <kartikey.hom@gmail.com>",
        },
      ],
    },
    {
      id: "roomloop",
      latencyProfile: {
        p50: "77.3ms",
        p95: "256.9ms",
        p99: "410.0ms",
      },
      failureInvariants: [
        {
          failureMode: "Double-Booking under Concurrent Race",
          mitigation:
            "PRAGMA journal_mode=WAL hooked with engine listener executing BEGIN IMMEDIATE at transaction start to acquire exclusive write locks before overlap checks run.",
        },
        {
          failureMode: "Spring-Forward DST Gap Invalidation",
          mitigation:
            "zoneinfo validate_local_wall_time (fold=0 round-trip check against UTC) rejecting non-existent spring-forward gap times with 422 Unprocessable Entity.",
        },
        {
          failureMode: "Recurring Series Conflict Cascades",
          mitigation:
            "Strict mathematical invariant: series succeeds iff conflicts <= 2, created >= 0.5 * N, and created >= 1; otherwise rolls back atomically with 409 Conflict.",
        },
      ],
      code: "SYS-03",
      concurrencyModel: "BEGIN IMMEDIATE Write Locks / Async Worker Pool",
      memoryProfile: "SQLite Write-Ahead Log (WAL) 64 MB Page Cache",
      protocolSpec: "RFC 5545 iCalendar / IANA Timezone Invariants",
      title: "RoomLoop Multi-Timezone Booking API",
      category: "Backend Systems & Concurrency",
      shortDescription:
        "High-concurrency FastAPI booking service with SQLite WAL immediate locks, dynamic IANA timezone math, and DST gap validation.",
      fullDescription:
        "Solves double-booking races under concurrency using SQLite Write-Ahead Logging and BEGIN IMMEDIATE write locks. Handles cross-office meetings across America/Denver and Europe/Berlin without winter hour drift via Python zoneinfo local calendar arithmetic. Sustains 10,000 k6 requests with 0% 5xx errors.",
      technologies: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "SQLite WAL",
        "Pydantic",
        "zoneinfo",
        "pytest",
        "k6",
      ],
      metrics: [
        {
          label: "Double Bookings",
          value: "0",
          highlight: true,
          detail: "Guaranteed by BEGIN IMMEDIATE exclusive locks",
        },
        {
          label: "k6 Requests",
          value: "10,000",
          highlight: true,
          detail: "0.00% 5xx errors across 5k dynamic payloads",
        },
        {
          label: "Median Latency",
          value: "77.3ms",
          highlight: false,
          detail: "95.39ms mean latency under 30 VUs",
        },
        {
          label: "Automated Tests",
          value: "94",
          highlight: false,
          detail: "100% pytest suite pass in 4.49s",
        },
      ],
      lensWeights: {
        fullstack_all: 6,
        fullstack_node: 3,
        fullstack_python: 9,
        backend_all: 9,
        backend_node: 4,
        backend_python: 10,
        devops: 6,
        data: 5,
        systems: 8,
        swe: 9,
        automation: 6,
        distributed_ai: 4,
      },
      githubUrl: "https://github.com/zed-inn/roomloop-booking-service",
      architectureNotes: [
        "Stores canonical 19-char naive local ISO strings, advancing recurrences by 7 local days to eliminate 1-hour DST drift.",
        "Validates every local wall time against UTC, rejecting spring-forward non-existent hours with HTTP 422 Unprocessable Entity.",
        "Enforces the 50% Success + Max 2 Conflicts invariant for recurring meeting series rollbacks.",
      ],
      featured: true,
      commitHistory: [
        {
          hash: "5d2e8b1",
          message: "test: add 5000 dynamic payloads benchmark with k6 runner",
          date: "2026-11-06",
          author: "Zed <skhull.coding@gmail.com>",
        },
        {
          hash: "1a8f4c2",
          message:
            "feat: sqlite BEGIN IMMEDIATE engine listener for concurrency safety",
          date: "2026-11-03",
          author: "Zed <skhull.coding@gmail.com>",
        },
        {
          hash: "8b7d3e9",
          message:
            "feat: zoneinfo calendar arithmetic preventing DST meeting drift",
          date: "2026-10-29",
          author: "Zed <skhull.coding@gmail.com>",
        },
      ],
    },
    {
      id: "kanban-clean-architecture",
      latencyProfile: {
        p50: "450µs",
        p95: "1.1ms",
        p99: "3.2ms",
      },
      failureInvariants: [
        {
          failureMode: "Domain Invariant Corruption on Card Move",
          mitigation:
            "Aggregate root encapsulation validates business invariants before emitting domain events.",
        },
        {
          failureMode: "Database Coupling & Mocking Brittleness",
          mitigation:
            "Strict clean architecture ports and adapters ensuring 100% database-agnostic domain logic.",
        },
        {
          failureMode: "Phantom WebSocket Broadcasts on Rollback",
          mitigation:
            "Post-Commit Event Basket defers Socket.io room emits until the underlying PostgreSQL transaction successfully commits.",
        },
      ],
      code: "SYS-04",
      concurrencyModel: "CQRS Segregation / Post-Commit Event Dispatch",
      memoryProfile: "Arbitrary-Precision Base-62 BigInt In-Memory Arena",
      protocolSpec: "RFC 6455 WebSockets & Clean Architecture Domain Core",
      title: "Real-Time Collaborative Kanban API",
      category: "Full-Stack & Clean Architecture",
      shortDescription:
        "Clean Architecture Fastify API isolating 18 use cases with CQRS read models, O(1) BigInt LexoRank, and post-commit Socket.io sync.",
      fullDescription:
        "Isolates pure domain core from HTTP frameworks and ORMs. Features arbitrary-precision base-62 BigInt LexoRank for O(1) drag-and-drop card ordering without integer shifting. Bypasses domain entities on read queries with raw PostgreSQL SQL piped into Zod schemas. Prevents phantom WebSocket broadcasts using a post-commit event buffer.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Socket.io",
        "Zod",
        "LexoRank",
      ],
      metrics: [
        {
          label: "Domain Use Cases",
          value: "18",
          highlight: true,
          detail: "Zero framework/ORM dependencies in core",
        },
        {
          label: "Drag-Drop Reorder",
          value: "O(1)",
          highlight: true,
          detail: "Base-62 BigInt LexoRank SQL updates",
        },
        {
          label: "WebSocket Parity",
          value: "100%",
          highlight: false,
          detail: "Zero phantom broadcasts on rollback",
        },
      ],
      lensWeights: {
        fullstack_all: 10,
        fullstack_node: 10,
        fullstack_python: 4,
        backend_all: 8,
        backend_node: 9,
        backend_python: 2,
        devops: 6,
        data: 5,
        systems: 7,
        swe: 10,
        automation: 5,
        distributed_ai: 4,
      },
      githubUrl: "https://github.com/zed-inn/kanban-board-app-ca",
      architectureNotes: [
        "CQRS architecture executes raw SQL JOIN queries over node-postgres for high-speed reads validated via Zod.",
        "Passes opaque unit-of-work tokens through use cases to manage multi-repository ACID transactions.",
        "Deterministic keyset cursor pagination prevents skipped items on millisecond timestamp collisions.",
      ],
      featured: true,
      commitHistory: [
        {
          hash: "9e3b1a2",
          message:
            "feat: base-62 bigint lexorank implementation with string precision growth",
          date: "2026-07-22",
          author: "Zed <skhull.coding@proton.me>",
        },
        {
          hash: "3d5f8c4",
          message:
            "feat: post-commit event basket preventing phantom socket.io emits",
          date: "2026-07-19",
          author: "Zed <skhull.coding@proton.me>",
        },
      ],
    },
    {
      id: "indian-institutes-dataset",
      latencyProfile: {
        p50: "600µs",
        p95: "1.8ms",
        p99: "4.5ms",
      },
      failureInvariants: [
        {
          failureMode: "Heterogeneous Government Schema Ingestion",
          mitigation:
            "Standardized 5 disparate AISHE reports, snake_casing columns, stripping sentinel artifacts across 14 fields, and removing 854 duplicate entries.",
        },
        {
          failureMode: "Concatenated Unstructured Name & Address Strings",
          mitigation:
            "Cumulative word-scoring algorithm slicing at argmax(cumm_points) with name (+1) and address (-1) vocabulary tokens across 60,000+ rows.",
        },
        {
          failureMode: "Mixed Casing & Dtype Corruption Across Columns",
          mitigation:
            "Normalized title casing, bracketed acronyms, and integer year_of_establishment types while removing '-' sentinel strings across 14 fields.",
        },
      ],
      code: "SYS-05",
      concurrencyModel: "Vectorized Pandas & NumPy Batch Pipeline",
      memoryProfile: "Vectorized Pandas Memory Mapping / Pipe-Delimited Export",
      protocolSpec: "Kaggle Open Data Standards / AISHE Schema Validation",
      title: "All Indian Higher Education Dataset",
      category: "Data Engineering & Kaggle Publishing",
      shortDescription:
        "Cleaned dataset of 70,016 normalized institutes across 5 government AISHE Excel sheets published on Kaggle.",
      fullDescription:
        "Consolidated 70,870 raw records across 5 disparate AISHE government Excel sheets into 70,016 normalized institutes spanning 19 structured columns. Engineered a cumulative word-scoring algorithm separating concatenated institute names from embedded street addresses across 60,000+ rows without manual labeling, and standardized schema types and sentinel values across 14 columns.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Jupyter",
        "ETL",
      ],
      metrics: [
        {
          label: "Normalized Records",
          value: "70,016",
          highlight: true,
          detail: "Cleaned from 70,870 raw government rows",
        },
        {
          label: "Name Separation",
          value: "60,000+",
          highlight: true,
          detail: "Rows parsed via cumulative word-scoring",
        },
        {
          label: "Schema Fields",
          value: "19",
          highlight: false,
          detail: "Sentinels cleaned across 14 columns / 5 sheets",
        },
      ],
      lensWeights: {
        fullstack_all: 5,
        fullstack_node: 3,
        fullstack_python: 8,
        backend_all: 6,
        backend_node: 2,
        backend_python: 8,
        devops: 5,
        data: 10,
        systems: 4,
        swe: 7,
        automation: 9,
        distributed_ai: 6,
      },
      kaggleUrl: "https://www.kaggle.com/datasets/skhull3/indian-institutes",
      architectureNotes: [
        "Unified colleges, standalones, universities, PM Vidyalaxmi, and R&D institutes into a single normalized schema.",
        "Cumulative scoring assigns +1 to institutional keywords and -1 to geographical tokens, splitting at argmax.",
        "Published under open data license on Kaggle for researchers and higher-education policymakers.",
      ],
      featured: true,
      commitHistory: [
        {
          hash: "6b2a8d1",
          message:
            "feat: cumulative word-scoring algorithm for address extraction",
          date: "2026-07-15",
          author: "Zed <skhull.coding@gmail.com>",
        },
        {
          hash: "1f4e7c3",
          message:
            "feat: normalize 5 government aishe excel sheets into single dataset",
          date: "2026-07-10",
          author: "Zed <skhull.coding@gmail.com>",
        },
      ],
    },
    {
      id: "zero-copy-http-server",
      latencyProfile: {
        p50: "120µs",
        p95: "380µs",
        p99: "890µs",
      },
      failureInvariants: [
        {
          failureMode: "TCP Packet Fragmentation Across poll() Ticks",
          mitigation:
            "Stateful ConnectionState per descriptor with 16 KB pre-allocated buffer and byte offsets resuming partial reads seamlessly.",
        },
        {
          failureMode: "Descriptor Table Leaks on Abrupt Client Reset",
          mitigation:
            "Bitwise-NOT (~fd) dead socket marking compacted in a single O(N) std::remove_if sweep at event-loop tick completion.",
        },
        {
          failureMode: "Unbounded Header / Buffer Flooding DoS",
          mitigation:
            "Strict RFC 7230 byte limits (16 KB max request, 32 continuous spaces) triggering early 431 Request Header Fields Too Large.",
        },
      ],
      code: "SYS-06",
      concurrencyModel: "Linux poll() Single-Threaded Non-Blocking Multiplexing",
      memoryProfile: "16 KB Pre-Allocated Per-Socket Buffers / Bitwise Compaction",
      protocolSpec: "RFC 7230 HTTP/1.1 Strict Invariant State Machine",
      title: "Zero-Copy Event-Driven HTTP/1.1 Server",
      category: "Systems Programming & Computer Networks",
      shortDescription:
        "Non-blocking C++17 HTTP/1.1 server multiplexing sockets with Linux poll() and a zero-copy RFC 7230 finite state machine.",
      fullDescription:
        "Single-threaded non-blocking HTTP server decoupled into POSIX transport and protocol domain. Implements 16 KB pre-allocated per-socket buffers for fragmented TCP streams and bitwise-NOT socket compaction. Parses HTTP requests using sliding std::string_view windows and lazy percent-decoding with zero heap allocations on clean request paths.",
      technologies: [
        "C++17",
        "POSIX Sockets",
        "Linux poll()",
        "TCP/IP",
        "std::string_view",
        "RFC 7230",
      ],
      metrics: [
        {
          label: "Architecture",
          value: "Non-Blocking",
          highlight: true,
          detail: "Linux poll() single-threaded event loop",
        },
        {
          label: "Heap Allocations",
          value: "0",
          highlight: true,
          detail: "Zero copies on clean HTTP request paths",
        },
        {
          label: "Memory Footprint",
          value: "17 KB",
          suffix: "/conn",
          highlight: false,
          detail: "100,000 concurrent connections under wrk load (0 crashes)",
        },
      ],
      lensWeights: {
        fullstack_all: 4,
        fullstack_node: 3,
        fullstack_python: 2,
        backend_all: 8,
        backend_node: 4,
        backend_python: 3,
        devops: 7,
        data: 4,
        systems: 10,
        swe: 9,
        automation: 4,
        distributed_ai: 3,
      },
      githubUrl: "https://github.com/zed-inn/http-cpp-server",
      architectureNotes: [
        "Decouples TCP socket layer (app/server.hpp) from HTTP stateful protocol (core/ents/http-request.hpp).",
        "Bitwise-NOT (~fd) dead socket compaction in O(N) std::remove_if sweep prevents descriptor table leaks.",
        "Lazy percent-decoding via std::variant keeps clean URIs as zero-copy std::string_view slices into the buffer.",
      ],
      featured: true,
      commitHistory: [
        {
          hash: "4d7e2a1",
          message:
            "feat: zero-copy std::string_view sliding window state-machine parser",
          date: "2026-08-04",
          author: "Zed <skhull.coding@proton.me>",
        },
        {
          hash: "8f1c3b9",
          message:
            "perf: bitwise-NOT descriptor compaction on non-blocking poll loop",
          date: "2026-07-28",
          author: "Zed <skhull.coding@proton.me>",
        },
      ],
    },
    {
      id: "huffman-file-compressor",
      latencyProfile: {
        p50: "95µs",
        p95: "290µs",
        p99: "640µs",
      },
      failureInvariants: [
        {
          failureMode: "Bitstream Header Deserialization Mismatch",
          mitigation:
            "Encodes canonical frequency tree metadata and trailing bit-padding count directly into custom binary header for exact byte-for-byte extraction.",
        },
        {
          failureMode: "Single-Byte Remainder Padding Drift",
          mitigation:
            "Explicit 1-byte bitwise shift buffer tracking remaining bits to guarantee zero phantom trailing characters on decode.",
        },
        {
          failureMode: "Degenerate Single-Character Distribution",
          mitigation:
            "Boundary edge handling in Huffman tree generator allocating a dedicated single-node prefix code.",
        },
      ],
      code: "SYS-07",
      concurrencyModel: "Synchronous Stream I/O / Heap Bit Shifting",
      memoryProfile: "Bitwise Shift Buffer / Byte-for-Byte Reconstruction",
      protocolSpec: "Custom Binary Compressor Header & Prefix Tree",
      title: "Huffman Lossless File Compressor",
      category: "Systems Programming & Data Structures",
      shortDescription:
        "Lossless file compressor in C++17 using prefix-free binary trees and custom binary headers, achieving 46% avg compression.",
      fullDescription:
        "Engineered end-to-end compression and decompression CLI tool from scratch in C++17. Builds optimal prefix-free binary trees using character frequency distributions and min-heap priority queues. Encodes a custom binary header storing tree metadata and trailing bit padding, streaming packed bitstrings through a 1-byte bitwise shift buffer.",
      technologies: [
        "C++17",
        "Binary I/O",
        "STL (priority_queue)",
        "Bitwise Shift",
        "Huffman Tree",
      ],
      metrics: [
        {
          label: "English Text",
          value: "46%",
          suffix: "avg",
          highlight: true,
          detail: "38–52% reduction on natural language",
        },
        {
          label: "Repetitive Files",
          value: "Up to 88%",
          highlight: true,
          detail: "High-redundancy file compression",
        },
        {
          label: "Integrity",
          value: "100%",
          highlight: false,
          detail: "Exact byte-for-byte reconstruction",
        },
      ],
      lensWeights: {
        fullstack_all: 3,
        fullstack_node: 2,
        fullstack_python: 2,
        backend_all: 6,
        backend_node: 2,
        backend_python: 2,
        devops: 4,
        data: 6,
        systems: 9,
        swe: 8,
        automation: 5,
        distributed_ai: 3,
      },
      githubUrl: "https://github.com/zed-inn/huffman-file-compressor-cpp",
      architectureNotes: [
        "Custom binary header preserves serialized frequency trees and trailing bit padding counts.",
        "Bit-level shift buffer packs variable-length codes into 8-bit byte boundaries.",
      ],
      featured: false,
      commitHistory: [
        {
          hash: "5a9f2e7",
          message:
            "feat: custom binary header packing with bit-level shift buffer",
          date: "2026-07-11",
          author: "Zed <skhull.coding@proton.me>",
        },
      ],
    },
    {
      id: "multithreaded-chat-server",
      latencyProfile: {
        p50: "310µs",
        p95: "780µs",
        p99: "1.9ms",
      },
      failureInvariants: [
        {
          failureMode: "Deadlock on Shared Room State Mutex",
          mitigation:
            "4 independent resource-scoped mutexes with std::scoped_lock hierarchy preventing circular lock contention.",
        },
        {
          failureMode: "Socket Descriptor Invalidation on Disconnect",
          mitigation:
            "Thread-safe connection lifecycle manager removing active descriptors from group broadcast tables upon connection close.",
        },
        {
          failureMode: "Unauthenticated Command Execution",
          mitigation:
            "Mandatory credential validation against user store before routing /broadcast, /msg, or /group_msg commands.",
        },
      ],
      code: "SYS-08",
      concurrencyModel: "Thread-Per-Client / Resource-Scoped Mutexes",
      memoryProfile: "Stack-Allocated Client Buffers / Lock-Free Read Rails",
      protocolSpec: "Command Protocol (/broadcast, /msg, /group_msg)",
      title: "Cross-Platform Multithreaded TCP Chat Server",
      category: "Systems Programming & Networking",
      shortDescription:
        "Concurrent C++ TCP chat server with thread-per-client concurrency and mutex-protected room broadcasting across Linux, macOS, and Windows.",
      fullDescription:
        "Raw-socket multi-threaded TCP server and concurrent CLI client compiling across Linux, macOS, Windows (MinGW/MSVC), and Docker. Implements credential authentication, thread-per-client lifecycles, and std::mutex-protected in-memory state for users, descriptors, and group memberships. Supports 6 real-time command dispatchers.",
      technologies: [
        "C++",
        "POSIX Sockets",
        "Winsock",
        "std::thread",
        "std::mutex",
        "Docker",
      ],
      metrics: [
        {
          label: "Command Handlers",
          value: "6",
          highlight: true,
          detail: "Broadcast, private msg, group lifecycle",
        },
        {
          label: "Platforms",
          value: "Linux / Win / Mac",
          highlight: true,
          detail: "POSIX sys/socket.h and winsock2.h",
        },
        {
          label: "Mutex Scopes",
          value: "4",
          highlight: false,
          detail: "Granular resource-scoped mutexes",
        },
      ],
      lensWeights: {
        fullstack_all: 4,
        fullstack_node: 3,
        fullstack_python: 2,
        backend_all: 7,
        backend_node: 3,
        backend_python: 3,
        devops: 6,
        data: 3,
        systems: 8,
        swe: 7,
        automation: 4,
        distributed_ai: 3,
      },
      githubUrl: "https://github.com/zed-inn/multi-threaded-chat-server-cpp",
      architectureNotes: [
        "Cross-platform abstraction layer unifying POSIX sys/socket.h and Windows winsock2.h.",
        "Thread-safe routing table broadcasting messages across active user groups with mutual exclusion.",
      ],
      featured: false,
      commitHistory: [
        {
          hash: "3d8a1c9",
          message:
            "feat: cross-platform socket abstraction and command dispatchers",
          date: "2026-07-08",
          author: "Zed <skhull.coding@proton.me>",
        },
      ],
    },
    {
      id: "page-pulse-seo-auditor",
      latencyProfile: {
        p50: "3.2ms",
        p95: "12.4ms",
        p99: "28.5ms",
      },
      failureInvariants: [
        {
          failureMode: "Hanging Sockets on Stalled Target Servers",
          mitigation:
            "Strict 20-second AbortController timeout on native fetch terminating stalled network sockets safely.",
        },
        {
          failureMode: "Malformed Non-HTML Response Content-Type",
          mitigation:
            "Strict text/html MIME header enforcement rejecting binary or unsupported media with HTTP 415.",
        },
        {
          failureMode: "Malformed HTML Tree Parser Exceptions",
          mitigation:
            "Isolated DOM parser tested via Vitest against malformed, unclosed, and empty HTML bodies.",
        },
      ],
      code: "SYS-09",
      concurrencyModel: "Next.js Edge Worker / Non-Blocking AbortController Stream",
      memoryProfile: "Cheerio DOM Stream Parser / Zero Socket Memory Leaks",
      protocolSpec: "HTML5 Semantic Standards & OpenGraph RFC Protocol",
      title: "Page Pulse SEO & URL Auditing Engine",
      category: "Frontend & Full-Stack Tooling",
      shortDescription:
        "Next.js URL auditing platform extracting metadata, tag distributions, and HTML5 landmarks in under 1 second.",
      fullDescription:
        "Server-side URL auditing API and glassmorphic dashboard powered by Cheerio and Next.js App Router. Features a 20-second AbortController timeout preventing hanging sockets, Zod URL validation, and automated Vitest unit testing across empty and malformed HTML payloads.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Cheerio",
        "Zod",
        "Vitest",
      ],
      metrics: [
        {
          label: "Audit Latency",
          value: "< 1s",
          highlight: true,
          detail: "Lightweight Cheerio DOM extraction",
        },
        {
          label: "Socket Timeout",
          value: "20s",
          highlight: false,
          detail: "AbortController guard against hanging targets",
        },
      ],
      lensWeights: {
        fullstack_all: 8,
        fullstack_node: 7,
        fullstack_python: 4,
        backend_all: 6,
        backend_node: 6,
        backend_python: 3,
        devops: 5,
        data: 6,
        systems: 3,
        swe: 7,
        automation: 8,
        distributed_ai: 3,
      },
      githubUrl: "https://github.com/zed-inn/url-auditor",
      architectureNotes: [
        "Evaluates HTML5 landmark presence (header, main, article, section, footer, nav, aside) for accessibility checks.",
        "Analyzes full HTML tag frequency distributions without headless browser overhead.",
      ],
      featured: false,
      commitHistory: [
        {
          hash: "7c1e4b8",
          message:
            "feat: cheerio dom landmark extraction with vitest unit suites",
          date: "2026-07-02",
          author: "Zed <skhull.coding@gmail.com>",
        },
      ],
    },
    {
      id: "nakama-tic-tac-toe",
      latencyProfile: {
        p50: "280µs",
        p95: "620µs",
        p99: "1.4ms",
      },
      failureInvariants: [
        {
          failureMode: "Client-Side Move Tampering & Out-of-Turn Injection",
          mitigation:
            "Authoritative server-side matchLoop strictly validating turn ownership and cell vacancy before applying state mutations.",
        },
        {
          failureMode: "Session Ghosting on Sudden Player Disconnect",
          mitigation:
            "Nakama matchLoop presence listener catching client drops and awarding forfeit victory to the remaining peer.",
        },
        {
          failureMode: "Concurrent Cell Contention Race",
          mitigation:
            "Single-threaded Goja matchLoop tick cycle serializing incoming move OpCodes with zero shared-memory races.",
        },
      ],
      code: "SYS-10",
      concurrencyModel: "Authoritative Loop / Goja JS Embedded Engine",
      memoryProfile: "Server-Authoritative GameState / Binary Payloads",
      protocolSpec: "Nakama Realtime Protocol & Binary WebSocket Frames",
      title: "Server-Authoritative Multiplayer Tic-Tac-Toe",
      category: "Real-Time Systems & Game Engines",
      shortDescription:
        "Real-time multiplayer game using Nakama's Authoritative Match API, custom matchmaking, and React WebSocket client.",
      fullDescription:
        "Server-authoritative multiplayer game built with Nakama Goja JS runtime and React. Maintains canonical game state exclusively on the server to prevent client-side move tampering. MatchLoop validates turn ownership and cell occupancy on every MOVE OpCode, dropping illegal moves and broadcasting STATE_UPDATE frames.",
      technologies: [
        "TypeScript",
        "Nakama",
        "React",
        "Vite",
        "WebSockets",
        "Docker",
      ],
      metrics: [
        {
          label: "State Authority",
          value: "100% Server",
          highlight: true,
          detail: "Zero client-side trust; tamper-proof moves",
        },
        {
          label: "Tick Engine",
          value: "Goja JS",
          highlight: true,
          detail: "Embedded inside Nakama binary",
        },
        {
          label: "Matchmaking",
          value: "Automated",
          highlight: false,
          detail: "Device authentication & pairing pool",
        },
      ],
      lensWeights: {
        fullstack_all: 8,
        fullstack_node: 8,
        fullstack_python: 3,
        backend_all: 7,
        backend_node: 8,
        backend_python: 2,
        devops: 5,
        data: 3,
        systems: 6,
        swe: 7,
        automation: 4,
        distributed_ai: 3,
      },
      githubUrl: "https://github.com/zed-inn/nakama-tic-tac-toe",
      architectureNotes: [
        "Compiled matchInit, matchJoin, and matchLoop handlers into a single JavaScript bundle for Nakama's embedded Goja engine.",
        "Integrated Nakama matchmaking pool to pair concurrent players into isolated match instances.",
      ],
      featured: false,
      commitHistory: [
        {
          hash: "2b6d8e4",
          message:
            "feat: authoritative matchLoop validating move turns and win conditions",
          date: "2026-06-25",
          author: "Zed <skhull.coding@proton.me>",
        },
      ],
    },
  ],
  storyChapters: [
    {
      id: "chapter-0",
      number: 0,
      title: "First-Principles Systems & Campus Workflows",
      subtitle: "IIT Kanpur foundations & POSIX C++ sockets (Summer 2024)",
      narrative: [
        "Engineering begins at the lowest boundary of software: memory, sockets, and the kernel.",
        "At IIT Kanpur, instead of taking high-level abstractions for granted, I focused on systems programming from scratch—engineering a zero-copy RFC 7230 HTTP/1.1 parser in C++ with sliding std::string_view slices, multiplexing non-blocking descriptors over Linux poll(), and writing bitwise binary compressors.",
        "During my internship with the Office Automation team at IIT Kanpur, I digitized 3 administrative approval workflows using Java Servlets, JSP, and MySQL for 6,000+ campus users, replacing brittle layout generation with Adobe Acrobat AcroForm templates to cut official turnaround from 1 day to 30 minutes.",
      ],
      highlightStats: [
        {
          label: "Memory Footprint",
          value: "17 KB",
          highlight: true,
          detail: "Resident memory per socket connection",
        },
        {
          label: "Event Loop",
          value: "Linux poll()",
          highlight: false,
          detail: "Single-threaded non-blocking descriptor multiplexing",
        },
        {
          label: "Turnaround Time",
          value: "30 Mins",
          highlight: true,
          detail: "Reduced from up to 1 day via AcroForm templates",
        },
      ],
      linkedProjectIds: [
        "zero-copy-http-server",
        "huffman-file-compressor",
        "multithreaded-chat-server",
      ],
      linkedExperienceIds: ["office-automation-iitk"],
    },
    {
      id: "chapter-1",
      number: 1,
      title: "Founding Architecture & The 5-Day Sprint",
      subtitle: "Scaling CampusX & 70k institute ETL (Dec 2024 – Jan 2026)",
      narrative: [
        "In early-stage startups, velocity and architecture must move in lockstep.",
        "As Founding Backend Engineer at CampusX, after maintaining an Express monolith for 6 months, technical debt was slowing feature delivery. In an intense 5-day rewrite, I re-architected the entire backend into CampusX v2—a clean 18-module TypeScript system with automatic transaction propagation via continuation-local storage (cls-hooked).",
        "I built a Node.js ETL pipeline using read-excel-file to normalize 70,000+ government higher-education institutes into PostgreSQL with automated Gemini Flash profile enrichment, and tuned V8 old-space heap at 450 MB on 1 GB AWS EC2 instances under Nginx to eliminate server crashes.",
      ],
      highlightStats: [
        {
          label: "Architecture Sprint",
          value: "5 Days",
          highlight: true,
          detail: "18 modular TypeScript services",
        },
        {
          label: "Institutes Ingested",
          value: "70,000+",
          highlight: true,
          detail: "Parsed via Node.js read-excel-file",
        },
        {
          label: "Heap Cap",
          value: "450 MB",
          highlight: false,
          detail: "V8 memory optimization on 1 GB EC2 instances",
        },
      ],
      linkedProjectIds: ["indian-institutes-dataset"],
      linkedExperienceIds: ["campusx"],
    },
    {
      id: "chapter-2",
      number: 2,
      title: "Multi-Million User Scale & 20M+ Record Reclamation",
      subtitle: "Rocket Reels production architecture & INR 25L+ recovery (Aug 2026 – Present)",
      narrative: [
        "Production at scale is messy, volatile, and relentless.",
        "At Rocket Reels, 20M+ stale documents had accumulated across shared MongoDB clusters. A naive blocking delete or compact would have degraded live production traffic. I designed a 5-phase dependency-aware pruning pipeline with floor guards and executed rolling Atlas replica resyncs to reclaim physical disk space with 0% cluster downtime.",
        "To empower non-technical teams, I built the Customer Data Platform syncing 4.8M+ users and 15M+ sessions via a 5-minute checkpointed delta ETL, while an emergency PhonePe migration across 22,000+ lapsed subscribers recovered INR 25+ Lakhs in recurring revenue via a 120-user pilot and throttled daily batches.",
      ],
      highlightStats: [
        {
          label: "Stale Records Pruned",
          value: "20M+",
          highlight: true,
          detail: "With zero production cluster performance drop",
        },
        {
          label: "Revenue Recovered",
          value: "INR 25L+",
          highlight: true,
          detail: "22,000+ lapsed subscribers migrated",
        },
        {
          label: "Users Synced",
          value: "4.8M+",
          highlight: false,
          detail: "Unified across 3 MongoDB clusters",
        },
      ],
      linkedProjectIds: [],
      linkedExperienceIds: ["rocket-reels"],
    },
    {
      id: "chapter-3",
      number: 3,
      title: "Distributed Guarantees & Vector Embeddings",
      subtitle: "Designing event-driven pipelines and financial audit engines (2026)",
      narrative: [
        "Distributed microservices face two fundamental challenges: data consistency and semantic search latency.",
        "In the Real Estate Intelligence Pipeline, I replaced a slow 5,000ms Ollama LLM context builder with a deterministic 0.5ms Protobuf generator and CPU-optimized embeddings, sustaining 10,000 k6 requests under 50 VUs with zero dropped messages.",
        "In the B2B Rate Reconciliation Engine, 13 Docker containers executed 3-phase financial audits across 10,000 booking events, utilizing PostgreSQL row-level locks (select_for_update) across 5 Django worker replicas to catch 1,525 billing discrepancies with 100% ACID parity.",
      ],
      highlightStats: [
        {
          label: "k6 Stress Success",
          value: "100.00%",
          highlight: true,
          detail: "0 dropped events across 10,000 requests",
        },
        {
          label: "Context Speedup",
          value: "10,000x",
          highlight: true,
          detail: "5,000ms LLM replaced with 0.5ms Protobuf",
        },
        {
          label: "Financial Parity",
          value: "100% ACID",
          highlight: false,
          detail: "Row-level locking across 5 Django replicas",
        },
      ],
      linkedProjectIds: [
        "real-estate-pipeline",
        "b2b-rate-reconciliation",
        "roomloop",
      ],
      linkedExperienceIds: [],
    },
    {
      id: "chapter-4",
      number: 4,
      title: "Clean Domain Architecture & Open Data",
      subtitle: "RoomLoop, BigInt LexoRank, and Kaggle open data publishing (2026)",
      narrative: [
        "Great engineering gives back to the developer community.",
        "I consolidated and normalized 70,016 Indian higher education records across 5 government AISHE Excel reports, building a cumulative word-scoring algorithm to separate names from addresses across 60,000+ rows without manual labeling, and published the dataset openly on Kaggle.",
        "In the Kanban API, I proved that pure domain engines can exist completely free of HTTP frameworks and ORMs by implementing arbitrary-precision base-62 BigInt LexoRank for O(1) drag-and-drop sorting.",
      ],
      highlightStats: [
        {
          label: "Institutes Normalized",
          value: "70,016",
          highlight: true,
          detail: "Published on Kaggle under open license",
        },
        {
          label: "Domain Use Cases",
          value: "18",
          highlight: false,
          detail: "Pure Clean Architecture core",
        },
      ],
      linkedProjectIds: [
        "kanban-clean-architecture",
        "indian-institutes-dataset",
        "page-pulse-seo-auditor",
        "nakama-tic-tac-toe",
      ],
      linkedExperienceIds: [],
    },
  ],
  techTaxonomy: {
    languages: [
      "C/C++",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Java",
      "HTML/CSS",
      "Bash/Shell",
    ],
    backend: [
      "Node.js",
      "Fastify",
      "Express.js",
      "FastAPI",
      "Django",
      "Next.js",
      "RESTful APIs",
      "gRPC",
      "Protobuf",
      "Socket.io",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQLite",
      "MySQL",
      "pgvector",
      "Drizzle ORM",
      "Sequelize",
      "SQLAlchemy",
    ],
    streaming: [
      "Kafka",
      "RabbitMQ",
      "Redis Queues",
      "BullMQ",
      "Event-Driven Outbox",
    ],
    cloud: [
      "AWS (EC2, S3, Lambda, CloudFront, MediaConvert)",
      "Docker & Compose",
      "Nginx",
      "GitHub Actions",
      "Vercel",
      "Turso",
    ],
    tools: [
      "Linux poll()",
      "Zod",
      "Pydantic",
      "Prometheus",
      "Grafana",
      "k6",
      "Vitest",
      "pytest",
      "Git",
      "iText 8",
    ],
  },
};

export default rawPortfolioConfig;
