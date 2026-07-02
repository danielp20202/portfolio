import type { Metadata } from "next";
import { experience, education, skillsBreakdown } from "@/data/experience";
import ExperienceEntry from "@/components/ExperienceEntry";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Customer Success and Partner Relations leader with 8+ years in B2B SaaS and gaming at Unity Technologies.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        I help technology companies build lasting relationships with their most strategic customers.
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-ink">
        <p>
          I&apos;m a Customer Success and Partner Relations leader with 8+ years of
          experience in B2B SaaS and gaming technology at Unity Technologies.
          I&apos;ve built and led teams managing Unity&apos;s most strategic gaming
          and entertainment accounts — from indie studios to platforms like
          Microsoft (ID@Xbox) and Nintendo — with a $6M+ ARR portfolio and NRR
          consistently above 100%.
        </p>
        <p>
          My background spans both the human side of CS (executive
          relationships, QBRs, strategic account planning) and the
          operational side (lifecycle automation in Gainsight, implementation
          of digital CS platforms, customer cohorting, and playbook design). I
          also build the internal tools my teams use — from AI-powered ticket
          triage systems to customer insight dashboards — because I believe
          the best CS leaders understand the technology their customers are
          building on. I&apos;m bilingual in English and Spanish and have
          experience across LATAM, North America, and global markets.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="section-heading mb-8 text-sm">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillsBreakdown.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-navy">{category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-heading mb-8 text-sm">Experience</h2>
        <div className="space-y-10">
          {experience.map((entry) => (
            <Reveal key={`${entry.title}-${entry.dateRange}`}>
              <ExperienceEntry entry={entry} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-heading mb-8 text-sm">Education & Certifications</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((entry) => (
            <div key={entry.title}>
              <h3 className="text-sm font-semibold text-navy">{entry.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {entry.org} &nbsp;&middot;&nbsp; {entry.period}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
