import type { ExperienceEntry as ExperienceEntryType } from "@/data/experience";

export default function ExperienceEntry({ entry }: { entry: ExperienceEntryType }) {
  return (
    <div className="relative border-l-2 border-navy/10 pl-6">
      <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue" />
      <h3 className="font-heading text-base font-semibold text-navy">
        {entry.title} <span className="font-sans font-normal text-ink">&middot; {entry.company}</span>
      </h3>
      <p className="mt-1 font-mono text-xs text-muted">
        {entry.dateRange} &nbsp;&middot;&nbsp; {entry.location}
      </p>
      {entry.note && <p className="mt-1.5 text-sm italic text-muted">{entry.note}</p>}
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
