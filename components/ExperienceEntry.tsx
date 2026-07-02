import type { ExperienceEntry as ExperienceEntryType } from "@/data/experience";

export default function ExperienceEntry({ entry }: { entry: ExperienceEntryType }) {
  return (
    <div className="relative border-l-2 border-gray-200 pl-6">
      <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-blue" />
      <h3 className="text-base font-semibold text-navy">
        {entry.title} <span className="font-normal text-ink">· {entry.company}</span>
      </h3>
      <p className="mt-1 text-sm text-muted">
        {entry.dateRange} &nbsp;&middot;&nbsp; {entry.location}
      </p>
      <ul className="mt-3 space-y-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-blue" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
