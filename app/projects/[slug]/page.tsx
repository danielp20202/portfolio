import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, statusLabel, statusDot } from "@/data/projects";
import ArchitectureFlow from "@/components/ArchitectureFlow";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:text-navy"
      >
        <ArrowLeft size={14} />
        Back to projects
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="kicker">{project.category.join(" · ")}</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {project.title}
          </h1>
        </div>
        <span className="mt-1 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-navy/8 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wide text-navy">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} aria-hidden="true" />
          {statusLabel[project.status]}
        </span>
      </div>

      <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-xl border border-navy/8 bg-surface">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 768px) 800px, 100vw"
          className="object-cover object-top"
        />
      </div>

      {project.status === "internal" && (
        <p className="mt-3 font-mono text-xs text-muted">
          Screenshot shows sanitized example data, not real customer or employee information.
        </p>
      )}

      <p className="mt-8 text-base leading-relaxed text-ink">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-blue hover:text-navy"
        >
          Visit site
          <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}

      {project.architecture && (
        <>
          <section className="mt-16">
            <h2 className="kicker">Architecture</h2>
            <p className="mt-4 text-base leading-relaxed text-ink">{project.architecture.summary}</p>
            <div className="mt-8">
              <ArchitectureFlow steps={project.architecture.steps} />
            </div>
          </section>

          <section className="mt-16">
            <h2 className="kicker">Key decisions</h2>
            <ul className="mt-6 space-y-3">
              {project.architecture.decisions.map((decision) => (
                <li key={decision} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {decision}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      <section className="mt-16">
        <h2 className="kicker">Tech stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-navy/10 px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
