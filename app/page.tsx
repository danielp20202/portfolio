import Link from "next/link";
import { Users, Gamepad2, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SkillsStrip from "@/components/SkillsStrip";

const teasers = [
  {
    icon: Users,
    title: "CS Leadership",
    description:
      "8+ years leading CS teams at Unity Technologies. $6M+ ARR portfolio. NRR 100.9%.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Developer Tools",
    description:
      "Deep domain expertise across gaming, engine technology, and developer ecosystems.",
  },
  {
    icon: Zap,
    title: "Builder & Automator",
    description:
      "I build the tools my teams use — from AI-powered ticket triage to customer insight dashboards.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          Daniel Pinzon
        </h1>
        <p className="mt-3 text-xl font-medium text-blue">
          Customer Success & Partner Relations Leader
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
          8+ years building and leading CS teams in B2B SaaS and gaming.
          Currently at Unity Technologies — managing a $6M+ ARR portfolio and a
          team of strategic Partner Relations Managers.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            View My Work
          </Link>
          <a
            href="/Daniel_Pinzon_CV.pdf"
            download
            className="rounded-md border border-navy px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Download CV
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {teasers.map(({ icon: Icon, title, description }) => (
            <Reveal key={title}>
              <div className="h-full rounded-lg border border-gray-100 bg-surface p-6">
                <Icon className="text-blue" size={28} aria-hidden="true" />
                <h2 className="mt-4 text-base font-semibold text-navy">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SkillsStrip />
    </>
  );
}
