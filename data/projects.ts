export type ProjectStatus = "live" | "internal" | "in-development" | "private";

export interface ArchitectureStep {
  label: string;
  detail: string;
}

export interface Architecture {
  summary: string;
  steps: ArchitectureStep[];
  decisions: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string[];
  description: string;
  tech: string[];
  link?: string;
  status: ProjectStatus;
  image: string;
  architecture?: Architecture;
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  internal: "Internal Tool",
  "in-development": "In Development",
  private: "Private",
};

export const statusDot: Record<ProjectStatus, string> = {
  live: "bg-green-500",
  internal: "bg-blue",
  "in-development": "bg-amber-500",
  private: "bg-subtle",
};

export const statusDescription: Record<ProjectStatus, string> = {
  live: "Publicly deployed and reachable today",
  internal: "Built for internal use at Unity, not publicly deployed",
  "in-development": "Actively being built, not yet launched",
  private: "Personal project, not publicly deployed",
};

export const projects: Project[] = [
  {
    slug: "ai-ticket-triage-dashboard",
    title: "AI Ticket Triage & Insight Dashboard",
    category: ["Work Tool", "AI"],
    description:
      "Internal dashboard for Unity's Partner Relations team to self-serve open tickets and years of historical customer engagement notes, replacing manual searching with fast, filterable views. Powered by a resumable async batch pipeline using the Anthropic SDK to distill thousands of raw records into concise, LLM-generated summaries.",
    tech: ["Python", "Anthropic SDK", "Async/Await", "Vanilla JS"],
    status: "internal",
    image: "/projects/hook-dashboard.png",
    architecture: {
      summary:
        "A static frontend paired with an offline batch pipeline: Python scripts pull raw ticket and legacy note data, summarize it asynchronously through the Anthropic SDK, and cache the results as compressed JSON for the browser to filter instantly, with no database or backend server.",
      steps: [
        {
          label: "Raw data export",
          detail: "Ticket and legacy note data is exported to CSV/JSON on a scheduled basis.",
        },
        {
          label: "Async batch summarization",
          detail:
            "A Python script using an async Anthropic client with bounded concurrency processes each record, skipping ones already summarized so re-runs stay cheap.",
        },
        {
          label: "Compressed JSON cache",
          detail:
            "Summaries are written as gzip-compressed per-account JSON files, avoiding the need for a database.",
        },
        {
          label: "Static dashboard",
          detail:
            "A dependency-free HTML/JS frontend loads the cached data and handles filtering, search, and person lookup entirely client-side.",
        },
      ],
      decisions: [
        "Chose a resumable batch job over live per-request summarization, so the tool stays usable without waiting on LLM latency for every page load.",
        "Skipped a database entirely: the dataset is small enough that gzip JSON outperforms query overhead, and a static site is trivial to host.",
        "Added a live on-demand summarization action for the small number of records that need an update between batch runs.",
      ],
    },
  },
  {
    slug: "customer-story-intelligence-pipeline",
    title: "Customer Story Intelligence Pipeline",
    category: ["Work Tool", "AI"],
    description:
      "A dashboard and companion CLI that turn raw field anecdotes from Unity's Partner Relations team into polished, leadership-ready narratives. Uses a streaming LLM pipeline to draft copy and a rubric-driven LLM-as-judge step to flag quality gaps before anything reaches an executive audience.",
    tech: ["React", "Vite", "Tailwind", "Anthropic SDK", "Streaming", "LLM-as-judge"],
    status: "internal",
    image: "/projects/prm-hero-stories.png",
    architecture: {
      summary:
        "Two loosely coupled pieces: a React dashboard for tracking which anecdotes have been used, and a separate CLI/browser tool that turns a raw anecdote into a polished, scored narrative.",
      steps: [
        {
          label: "Source spreadsheet",
          detail: "Partner Relations Managers log raw anecdotes in a shared CSV, parsed client-side.",
        },
        {
          label: "Shared status dashboard",
          detail:
            "A React + Vite dashboard renders the list with filters by region and status, syncing 'used' state through a small serverless function backed by Redis so the whole team sees the same state.",
        },
        {
          label: "Streaming narrative draft",
          detail:
            "A companion CLI/browser tool sends a raw anecdote to Claude via the Anthropic SDK with streaming responses, drafting a narrative, slide bullets, and speaker notes in real time.",
        },
        {
          label: "LLM-as-judge scoring",
          detail:
            "A markdown-defined, five-dimension rubric is run back through Claude to flag quality gaps before a story reaches leadership, with one dimension acting as a hard gate.",
        },
      ],
      decisions: [
        "Kept the tracking dashboard and the drafting tool separate, since they serve very different audiences: the whole team vs. whoever is finalizing a story for leadership.",
        "Used a lightweight key-value store for shared state instead of a full database, since the only thing that needs to sync is a status flag per story.",
        "Built the scoring rubric as a reviewable markdown framework rather than hidden prompt logic, so managers can see and challenge the scoring criteria.",
      ],
    },
  },
  {
    slug: "casa-salsa",
    title: "Casa Salsa: Autonomous Marketing Engine",
    category: ["Personal Project", "Automation"],
    description:
      "A bilingual marketing site for a premium short-term rental in Cali, Colombia, backed by a serverless pipeline that sources imagery, drafts Instagram captions, and auto-publishes on a cron schedule. Built and operated by a documented multi-agent Claude Code team with distinct Web Dev, Visuals/Copy, and Marketing personas, plus a password-protected admin dashboard for human-in-the-loop approval.",
    tech: ["HTML/CSS/JS", "Vercel", "Upstash Redis", "Meta Graph API", "Meta Pixel", "Claude Code agents"],
    link: "https://casasalsa.co",
    status: "live",
    image: "/projects/casa-salsa.jpg",
    architecture: {
      summary:
        "A static bilingual marketing site backed by a serverless content pipeline that sources imagery, drafts captions, and publishes to Instagram on a schedule, with a human approval step in between.",
      steps: [
        {
          label: "Scheduled trigger",
          detail: "Vercel cron jobs run on a schedule to kick off content generation.",
        },
        {
          label: "Sourcing & drafting",
          detail: "Serverless functions source stock imagery and draft caption copy for review.",
        },
        {
          label: "Human-in-the-loop approval",
          detail:
            "A password-protected admin dashboard lets a real person review and approve proposals before anything goes out.",
        },
        {
          label: "Auto-publish",
          detail:
            "Approved posts publish to Instagram via the Graph API, with state tracked in Upstash Redis.",
        },
      ],
      decisions: [
        "Kept a human approval step in the loop rather than fully automating publishing, to avoid off-brand or low-quality posts going out unattended.",
        "Documented the system as a multi-agent Claude Code project, with separate agent personas (Web Dev, Visuals/Copy, Marketing) coordinating through a shared handoff log rather than one agent doing everything.",
        "Built the marketing site itself as plain HTML/CSS/JS with no build step, since the content pipeline was the complex part, not the site.",
      ],
    },
  },
  {
    slug: "guided-self-review-assistant",
    title: "Guided Self-Review Assistant",
    category: ["Work Tool", "AI"],
    description:
      "A lightweight guided web app that walks employees through structured mid-year self-reflection questions one at a time, then uses an LLM to draft polished, evidence-based answers covering accomplishments, growth areas, and feedback for leadership. Built as a dependency-free vanilla JS front end with an iterative refinement loop and a regional variant for distributed teams.",
    tech: ["Vanilla JS", "HTML", "OpenAI-compatible API", "Prompt engineering"],
    status: "internal",
    image: "/projects/h1-checkin.png",
    architecture: {
      summary:
        "A dependency-free front end that walks someone through six fixed questions, then drafts their self-review using their own pre-loaded accomplishment notes as grounding for an LLM.",
      steps: [
        {
          label: "Personal accomplishment log",
          detail: "Each person's own notes are pre-loaded and mapped to company competency principles ahead of time.",
        },
        {
          label: "Guided question stepper",
          detail: "A vanilla JS stepper enforces one question at a time, so the flow can't be skipped or rushed.",
        },
        {
          label: "Single structured draft call",
          detail:
            "Once all answers are collected, one structured prompt asks the LLM to draft three sections: accomplishments, growth areas, and leadership feedback.",
        },
        {
          label: "Iterative tightening",
          detail: "A follow-up conversational loop lets the person ask for edits without losing the original context.",
        },
      ],
      decisions: [
        "Enforced the question order in the UI rather than trusting the model to ask one thing at a time, making the experience far more predictable.",
        "Kept the accomplishment data grounded in the person's own notes only, explicitly preventing the model from inventing achievements or borrowing someone else's.",
        "Shipped a second regional variant by swapping only the roster/data file, keeping the app logic identical.",
      ],
    },
  },
  {
    slug: "shared-expense-tracker",
    title: "Shared Expense & Settlement Tracker",
    category: ["Personal Project", "Full Stack"],
    description:
      "A personal expense-splitting app for tracking shared spending between two people and computing monthly settlement transfers, migrated from Supabase to Neon Postgres for reliability. Structured as a multi-agent Claude Code project with separate git worktrees for parallel development.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Neon Postgres", "next-pwa", "Claude Code multi-agent"],
    status: "private",
    image: "/projects/expense-tracker.png",
    architecture: {
      summary:
        "A Next.js PWA where every expense, personal or joint-account, rolls into one cumulative settlement balance, backed by a straightforward Postgres schema with no ORM.",
      steps: [
        {
          label: "Server actions",
          detail: "Expenses, fixed costs, and categories are all written through Next.js server actions directly against Postgres.",
        },
        {
          label: "Neon Postgres",
          detail: "Raw parameterized SQL, with no ORM, keeps the data layer simple and easy to reason about.",
        },
        {
          label: "Settlement calculation",
          detail: "A single function computes the running balance between both people from the full expense history each time it's needed.",
        },
        {
          label: "Installable PWA",
          detail: "next-pwa makes the app installable on a phone home screen for quick logging on the go.",
        },
      ],
      decisions: [
        "Migrated from Supabase to Neon mid-project for more predictable Postgres behavior, without changing the app's data model.",
        "Skipped an ORM in favor of raw SQL, since the schema is small and stable enough that the extra abstraction wasn't worth it.",
        "Structured the work as a multi-agent Claude Code project with separate git worktrees, so app logic and visual polish could progress in parallel without merge conflicts.",
      ],
    },
  },
];
