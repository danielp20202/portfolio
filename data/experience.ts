export interface ExperienceEntry {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  note?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Manager, Partner Relations",
    company: "Unity Technologies",
    dateRange: "Jan 2026 – Present",
    location: "Montreal, QC",
    bullets: [
      "Lead a team of 5 Partner Relations Managers accountable for a $6M+ ARR portfolio across Unity's most strategic gaming and entertainment accounts, including indie segment management and platform partnerships with Microsoft (ID@Xbox), Nintendo, and Crunchyroll",
      "Maintained net revenue retention (NRR) above 100% (100.9%) across the portfolio, demonstrating account health and revenue stability through a period of organizational change",
      "Led end-to-end implementation of an internal partner management platform, coordinating requirements across global teams, internal stakeholders, and the product team to replace legacy CRM tooling, delivering a structured rollout on time and on scope",
      "Drive portfolio health, revenue forecasting, and risk management across a 50-account contracted portfolio, maintaining direct C-suite engagement to protect and grow the business",
      "Resolve 20+ complex technical and commercial escalations per month, translating studio and client needs into actionable requirements for product, engineering, and commercial teams",
    ],
  },
  {
    title: "Senior Partner Relations Manager",
    company: "Unity Technologies",
    dateRange: "Jan 2024 – Jan 2026",
    location: "Montreal, QC",
    bullets: [
      "Owned the primary strategic relationship for a personal book of ~5 of Unity's highest-profile gaming and entertainment partners, managing the full account lifecycle from pre-production through ship and live operations",
      "Built deep customer insight by embedding directly within studio production environments, tracking title pipeline, platform expansion, tech stack decisions, and competitive risk ahead of market signals",
      "Influenced product roadmap decisions by escalating production-floor insights at scale, contributing to feature prioritization across rendering pipelines, UI frameworks, and platform integrations",
      "Planned and facilitated 2 cross-functional Dev Days for Riot Games and Wildlife Studios, coordinating multi-disciplinary teams for feature deep-dives, roadmap previews, and release sneak peeks",
    ],
  },
  {
    title: "Manager, Partner Advisors",
    company: "Unity Technologies",
    dateRange: "May 2020 – Dec 2023",
    location: "Montreal, QC",
    bullets: [
      "Built, hired, and developed a team of up to 10 Partner Advisors within a newly created function, establishing onboarding, performance development, and enterprise account coverage frameworks",
      "Defined and implemented customer success playbooks focused on product adoption, value realization, upsell, and revenue retention, reducing portfolio churn from above 2% to below 2% within the first year",
      "Maintained churn below 2% over the full 3.5-year tenure, sustaining financial health through a period of rapid company growth",
      "Ran Dev Days and studio outreach programs as business development and executive relationship-building events, engaging 30+ studios per event at varying pipeline stages",
    ],
  },
  {
    title: "Customer Success Specialist",
    company: "Unity Technologies",
    dateRange: "Mar 2019 – May 2020",
    location: "Montreal, QC",
    bullets: [
      "Managed onboarding, product adoption, and success planning for a cohort of 10,000+ Unity commercial users, serving as first point of contact for technical guidance and account health",
      "Identified upsell and expansion opportunities and surfaced escalation patterns, with findings adopted into team-wide playbook improvements",
    ],
  },
  {
    title: "Customer Success Manager",
    company: "Veevart",
    dateRange: "Aug 2017 – Feb 2019",
    location: "Cali, Colombia",
    note: "Salesforce-based SaaS platform serving museums, galleries, and cultural institutions",
    bullets: [
      "Delivered end-to-end B2B SaaS implementation projects for 15 clients across museums and cultural institutions, leading onboarding, training, and go-live",
      "Acted as primary liaison between clients and the product team, gathering and validating requirements and conducting UAT to resolve implementation issues",
      "Managed a portfolio of 15 clients through the full post-sale lifecycle, from implementation through ongoing success, upsell, and renewal",
    ],
  },
];

export interface EducationEntry {
  title: string;
  org: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    title: "Bachelor of Engineering, Industrial Engineering",
    org: "Universidad ICESI · Cali, Colombia",
    period: "2012–2017",
  },
  {
    title: "CCSM: Certified Customer Success Manager",
    org: "SuccessHACKER",
    period: "2020",
  },
  {
    title: "Unity Certified Associate: Game Developer",
    org: "Unity Technologies",
    period: "2019, renewed 2026",
  },
  {
    title: "Certified Hiring Manager",
    org: "Unity Technologies",
    period: "2023",
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsBreakdown: SkillCategory[] = [
  {
    category: "Account Management",
    items: [
      "Strategic partnerships",
      "Executive stakeholder engagement",
      "QBRs",
      "Upsell & cross-sell",
      "Expansion revenue",
      "Renewal management",
      "Churn prevention",
      "Success planning",
      "Account health",
    ],
  },
  {
    category: "Leadership",
    items: [
      "Team building & coaching",
      "Performance management",
      "Revenue forecasting",
      "Quota attainment",
      "Cross-functional collaboration",
      "Hiring & onboarding",
    ],
  },
  {
    category: "Business Development",
    items: [
      "B2B pipeline development",
      "Market expansion (LATAM)",
      "Publisher & platform relationships",
      "Deal support",
      "Go-to-market strategy",
    ],
  },
  {
    category: "Technical",
    items: [
      "Unity Engine",
      "Game production lifecycle",
      "Enterprise SaaS",
      "Salesforce",
      "CRM implementation",
      "Product feedback loops",
      "AI workflow automation",
      "LLM API integration",
    ],
  },
];
