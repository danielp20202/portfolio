const skills = [
  "Customer Success",
  "Partner Relations",
  "Team Leadership",
  "Salesforce",
  "CRM Implementation",
  "Unity Engine",
  "AI Workflow Automation",
  "LLM API Integration",
  "Next.js",
  "Python",
  "Bilingual EN/ES",
];

export default function SkillsStrip() {
  return (
    <div className="border-y border-navy/8 bg-surface py-6">
      <div className="fade-edge-x flex gap-3 overflow-x-auto px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex-shrink-0 rounded-full border border-navy/10 bg-white px-4 py-2 font-mono text-xs text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
