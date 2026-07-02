import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  internal: "Internal Tool",
  "in-development": "In Development",
  private: "Private",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-surface p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-navy">{project.title}</h3>
        <span className="whitespace-nowrap rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
          {statusLabel[project.status]}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.category.map((cat) => (
          <span key={cat} className="text-xs font-medium uppercase tracking-wide text-blue">
            {cat}
          </span>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-ink">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs text-muted"
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
          className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-blue hover:text-navy"
        >
          Visit site <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}
