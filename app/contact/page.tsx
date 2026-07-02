import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Daniel Pinzon — open to Customer Success leadership, Partner Relations, and CS + AI roles.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink">
        Open to new opportunities in Customer Success leadership, Partner
        Relations, and CS + AI roles. Based in Montreal, QC.
      </p>

      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-subtle">Email</p>
            <a href="mailto:danielp20202@gmail.com" className="text-blue hover:text-navy">
              danielp20202@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-subtle">LinkedIn</p>
            <a
              href="https://linkedin.com/in/danielp2020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-navy"
            >
              linkedin.com/in/danielp2020
            </a>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-subtle">Location</p>
            <p className="text-ink">Montreal, QC, Canada</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-subtle">Languages</p>
            <p className="text-ink">English & Spanish</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
