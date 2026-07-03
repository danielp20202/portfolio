import type { Metadata } from "next";
import Image from "next/image";
import { experience, education, skillsBreakdown } from "@/data/experience";
import ExperienceEntry from "@/components/ExperienceEntry";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Partner Relations and Customer Success leader with 8+ years in B2B SaaS and gaming at Unity Technologies.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="kicker">About</p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
        <div className="mx-auto lg:mx-0">
          <div className="portrait-ring w-40 rounded-2xl p-[3px] sm:w-48">
            <div className="overflow-hidden rounded-[calc(1rem-3px)] bg-white p-1.5">
              <Image
                src="/daniel-pinzon.jpg"
                alt="Portrait of Daniel Pinzon"
                width={320}
                height={320}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            I help technology companies build lasting relationships with their most strategic customers.
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink">
            <p>
              I&apos;m a Partner Relations and Customer Success leader with 8+ years of
              experience in B2B SaaS and gaming technology at Unity Technologies.
              I&apos;ve built and led teams managing a $6M+ ARR portfolio covering
              Unity&apos;s most strategic gaming and entertainment accounts, from indie
              studios to platforms like Microsoft (ID@Xbox) and Nintendo, generating
              deep customer insight that has directly shaped product roadmap decisions.
            </p>
            <p>
              My track record spans navigating industry disruption, building
              high-performing teams, and converting technical complexity into
              measurable outcomes for the C-suite, with NRR consistently above
              100%. My background covers both the human side of CS (executive
              relationships, QBRs, strategic account planning) and the operational
              side (lifecycle automation, digital CS platform implementation,
              customer cohorting, and playbook design).
            </p>
            <p>
              I also build the internal tools my teams use, from AI-powered ticket
              triage systems to customer insight dashboards, because I believe
              the best CS leaders understand the technology their customers are
              building on. I&apos;m bilingual in English and Spanish and have
              experience across LATAM, North America, and global markets.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="kicker mb-8">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillsBreakdown.map(({ category, items }) => (
            <div key={category} className="card-surface p-5">
              <h3 className="font-heading text-sm font-semibold text-navy">{category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-navy/10 bg-surface px-3 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mt-20 scroll-mt-24">
        <h2 className="kicker mb-8">Experience</h2>
        <div className="space-y-10">
          {experience.map((entry) => (
            <Reveal key={`${entry.title}-${entry.dateRange}`}>
              <ExperienceEntry entry={entry} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="kicker mb-8">Education & Certifications</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((entry) => (
            <div key={entry.title} className="card-surface p-5">
              <h3 className="font-heading text-sm font-semibold text-navy">{entry.title}</h3>
              <p className="mt-1.5 font-mono text-xs text-muted">
                {entry.org} &nbsp;&middot;&nbsp; {entry.period}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
