import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  internal: "Internal Tool",
  "in-development": "In Development",
  private: "Private",
};

const statusDot: Record<Project["status"], string> = {
  live: "bg-green-500",
  internal: "bg-blue",
  "in-development": "bg-amber-500",
  private: "bg-subtle",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-surface flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-lg font-semibold text-navy">{project.title}</h3>
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

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-blue hover:text-navy"
        >
          Visit site
          <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </div>
  );
}
