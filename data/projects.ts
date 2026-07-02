export type ProjectStatus = "live" | "internal" | "in-development" | "private";

export interface Project {
  title: string;
  category: string[];
  description: string;
  tech: string[];
  link?: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    title: "Hook Feedback Dashboard",
    category: ["Work Tool", "AI"],
    description:
      "Internal dashboard for Unity's Partner Relations team to track customer engagement and Hook issue tickets. Integrates async batch LLM summarization via the Anthropic SDK — processing large volumes of customer interaction data to surface insights for PRMs.",
    tech: ["Python", "Anthropic SDK", "Async/Await", "Vanilla JS"],
    status: "internal",
  },
  {
    title: "PRM Hero Stories",
    category: ["Work Tool", "AI"],
    description:
      "A dashboard and CLI tool that turns raw Customer Success anecdotes from Unity's Partner Relations team into polished narratives for executive reporting. Uses the Anthropic SDK with streaming responses and an LLM-as-judge scoring pattern to evaluate story quality.",
    tech: ["React", "Vite", "Tailwind", "Anthropic SDK", "Streaming", "LLM-as-judge"],
    status: "internal",
  },
  {
    title: "Casa Salsa",
    category: ["Personal Project", "Automation"],
    description:
      "Marketing website for a short-term rental apartment in Cali, Colombia — including a cron-driven Instagram content pipeline, an approval dashboard, and a documented multi-agent Claude Code system with specialized agent personas (Web Dev, Visuals/Copy, Marketing) managing content operations.",
    tech: ["HTML/CSS/JS", "Vercel", "Upstash Redis", "Meta Graph API", "Meta Pixel", "Claude Code agents"],
    link: "https://casasalsa.co",
    status: "live",
  },
  {
    title: "La Runa TCG",
    category: ["Side Project", "Frontend"],
    description:
      "Website for La Runa TCG, a Magic: The Gathering retail shop in Pereira, Colombia. Bilingual (EN/ES), with Shopify Storefront GraphQL integration, a cart system, and a multi-variant design proposal flow for stakeholder review.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shopify GraphQL", "Vercel", "i18n"],
    status: "in-development",
  },
  {
    title: "H1 Check-In Tool",
    category: ["Work Tool", "AI"],
    description:
      "A guided mid-year self-review tool for Daniel's team at Unity. Walks teammates through structured reflection questions and uses an LLM to draft check-in answers — including accomplishments, growth areas, and feedback for leadership. Built a regional EMEA variant as well.",
    tech: ["Vanilla JS", "HTML", "OpenAI-compatible API", "Prompt engineering"],
    status: "internal",
  },
  {
    title: "Couple Expense Tracker",
    category: ["Personal Project", "Full Stack"],
    description:
      "A personal expense-splitting app for tracking shared spending and computing monthly settlement transfers. Migrated from Supabase to Neon Postgres. Structured as a multi-agent Claude Code project with separate git worktrees for parallel development.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Neon Postgres", "next-pwa", "Claude Code multi-agent"],
    status: "private",
  },
];
