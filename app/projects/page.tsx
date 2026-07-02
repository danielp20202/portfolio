import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of work tools, personal projects, and side projects Daniel Pinzon has built at the intersection of Customer Success and AI.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="section-heading text-sm">Projects</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink">
        A mix of internal tools built for my teams at Unity, and personal
        projects exploring automation, AI, and full-stack development.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
