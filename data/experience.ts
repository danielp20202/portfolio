export interface ExperienceEntry {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Manager, Partner Relations",
    company: "Unity Technologies",
    dateRange: "Jan 2026 – Present",
    location: "Montreal, QC",
    bullets: [
      "Lead 5 Partner Relations Managers across a $6M+ ARR portfolio including indie segment and platform partnerships (Microsoft ID@Xbox, Nintendo, Crunchyroll)",
      "NRR 100.9% through a period of organizational change",
      "Led end-to-end implementation of Hook (digital CS platform) for the Partner Relations team",
    ],
  },
  {
    title: "Senior Partner Relations Manager",
    company: "Unity Technologies",
    dateRange: "Jan 2024 – Jan 2026",
    location: "Montreal, QC",
    bullets: [
      "Embedded within studio production environments to track title pipeline, platform expansion, and competitive risk",
      "Planned and facilitated 2 cross-functional Dev Days for Riot Games and Wildlife Studios",
      "Influenced product roadmap decisions by escalating production-floor insights at scale",
    ],
  },
  {
    title: "Manager, Partner Advisors",
    company: "Unity Technologies",
    dateRange: "May 2020 – Dec 2023",
    location: "Montreal, QC",
    bullets: [
      "Built, hired, and developed a team of up to 10 Partner Advisors within a newly created function",
      "Defined and implemented CS playbooks in Gainsight; reduced portfolio churn from above 2% to below 2%",
      "Maintained churn below 2% for 3.5 years across gaming and industry verticals",
    ],
  },
  {
    title: "Customer Success Specialist",
    company: "Unity Technologies",
    dateRange: "Mar 2019 – May 2020",
    location: "Montreal, QC",
    bullets: [
      "Managed onboarding, adoption, and success planning for 10,000+ Unity commercial users",
      "Designed and implemented automated lifecycle playbooks in Gainsight at scale",
    ],
  },
  {
    title: "Customer Success Manager",
    company: "Veevart",
    dateRange: "Aug 2017 – Feb 2019",
    location: "Cali, Colombia",
    bullets: [
      "Delivered end-to-end B2B SaaS implementation for 15 museum and cultural institution clients",
      "Managed full post-sale lifecycle from implementation through upsell and renewal",
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
      "Gainsight",
      "Salesforce",
      "Hook",
      "Customer lifecycle automation",
      "AI workflow automation",
      "LLM API integration",
    ],
  },
];
