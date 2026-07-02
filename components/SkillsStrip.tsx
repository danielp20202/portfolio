const skills = [
  "Customer Success",
  "Partner Relations",
  "Team Leadership",
  "Gainsight",
  "Salesforce",
  "Hook",
  "Unity Engine",
  "AI Workflow Automation",
  "LLM API Integration",
  "Next.js",
  "Python",
  "Bilingual EN/ES",
];

export default function SkillsStrip() {
  return (
    <div className="border-y border-gray-100 bg-surface py-6">
      <div className="flex gap-3 overflow-x-auto px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex-shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
