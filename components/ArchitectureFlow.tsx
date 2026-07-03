import { ArrowRight, ArrowDown } from "lucide-react";
import type { ArchitectureStep } from "@/data/projects";

export default function ArchitectureFlow({ steps }: { steps: ArchitectureStep[] }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-3">
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col gap-3 md:flex-1 md:flex-row md:items-stretch">
          <div className="card-surface flex-1 p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-wide text-blue">
              Step {i + 1}
            </p>
            <h3 className="mt-1.5 font-heading text-sm font-semibold text-navy">{step.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">{step.detail}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center text-navy/30 md:px-1" aria-hidden="true">
              <ArrowDown size={18} className="md:hidden" />
              <ArrowRight size={18} className="hidden md:block" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
