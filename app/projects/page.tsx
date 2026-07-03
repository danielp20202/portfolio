import type { Metadata } from "next";
import { projects, statusLabel, statusDot, statusDescription, type ProjectStatus } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of work tools, personal projects, and side projects Daniel Pinzon has built at the intersection of Customer Success and AI.",
};

const statuses: ProjectStatus[] = ["live", "internal", "in-development", "private"];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="kicker">Projects</p>
      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Selected work
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink">
        A mix of internal tools built for my teams at Unity, and personal
        projects exploring automation, AI, and full-stack development.
      </p>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {statuses.map((status) => (
          <div key={status} className="flex items-center gap-1.5" title={statusDescription[status]}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]}`} aria-hidden="true" />
            <span className="font-mono text-xs text-muted">{statusLabel[status]}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
