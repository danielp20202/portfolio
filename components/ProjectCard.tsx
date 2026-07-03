import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { statusLabel, statusDot, type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-surface flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-navy/8 bg-surface">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      {project.status === "internal" && (
        <p className="border-b border-navy/8 bg-surface px-6 py-2 font-mono text-[0.65rem] text-muted">
          Screenshot shows sanitized example data, not real customer or employee information.
        </p>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          {project.architecture ? (
            <Link
              href={`/projects/${project.slug}`}
              className="font-heading text-lg font-semibold text-navy transition-colors hover:text-blue"
            >
              {project.title}
            </Link>
          ) : (
            <h3 className="font-heading text-lg font-semibold text-navy">{project.title}</h3>
          )}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-navy/8 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wide text-navy">
            <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} aria-hidden="true" />
            {statusLabel[project.status]}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <span key={cat} className="font-mono text-xs font-medium uppercase tracking-wide text-blue">
              {cat}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-ink">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-navy/10 px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-blue hover:text-navy"
            >
              Visit site
              <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.architecture && (
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-blue hover:text-navy"
            >
              View architecture
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
