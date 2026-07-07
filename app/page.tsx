import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Gamepad2, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SkillsStrip from "@/components/SkillsStrip";

const stats = [
  { value: "$6M+", label: "ARR portfolio" },
  { value: "100.9%", label: "Net revenue retention" },
  { value: "<2%", label: "Churn, sustained 3.5 yrs" },
  { value: "8+", label: "Years in B2B SaaS & gaming" },
];

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
      "I build the tools my teams use, from AI-powered ticket triage to customer insight dashboards.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="kicker">Canada &middot; Bilingual EN/ES</p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Daniel Pinzon
            </h1>
            <p className="mt-3 text-xl font-medium text-blue">
              Partner Relations & Customer Success Leader
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
              8+ years building and leading CS teams in B2B SaaS and gaming.
              Currently at Unity Technologies, managing a $6M+ ARR portfolio
              and a team of strategic Partner Relations Managers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about#experience" className="btn btn-primary group">
                View My Work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <a href="/Daniel_Pinzon_CV.pdf" download className="btn btn-ghost">
                Download CV
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div
              className="glow-blob absolute inset-0 -z-10 scale-125"
              aria-hidden="true"
            />
            <div className="portrait-ring aspect-square rounded-full p-[3px]">
              <div className="h-full w-full overflow-hidden rounded-full bg-white p-2">
                <Image
                  src="/daniel-pinzon.jpg"
                  alt="Portrait of Daniel Pinzon"
                  width={480}
                  height={480}
                  priority
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-navy/8 bg-white px-4 py-2 text-xs font-medium text-navy shadow-lg">
              <span className="status-dot h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
              Open to opportunities
            </div>
          </div>
        </div>

        <div className="relative border-t border-navy/8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {teasers.map(({ icon: Icon, title, description }) => (
            <Reveal key={title}>
              <div className="card-surface h-full p-6">
                <div className="inline-flex rounded-lg bg-blue/8 p-2.5">
                  <Icon className="text-blue" size={22} aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-heading text-base font-semibold text-navy">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SkillsStrip />

      <section className="border-t border-navy/8">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="kicker justify-center">Beyond the day job</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-3xl">
            Curious what I build in my spare time?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink">
            From AI-powered internal tools to personal side projects, see the code behind the work.
          </p>
          <Link href="/projects" className="btn btn-primary group mt-6">
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
