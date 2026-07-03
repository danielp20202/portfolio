import type { Metadata } from "next";
import { Mail, MapPin, Languages } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Daniel Pinzon. Open to Customer Success leadership, Partner Relations, and CS + AI roles.",
};

function LinkedInIcon({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "danielp20202@gmail.com",
    href: "mailto:danielp20202@gmail.com",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/danielp2020",
    href: "https://linkedin.com/in/danielp2020",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Montreal, QC, Canada",
  },
  {
    icon: Languages,
    label: "Languages",
    value: "English & Spanish",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="kicker">Contact</p>
      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink">
        Open to new opportunities in Customer Success leadership, Partner
        Relations, and CS + AI roles. Based in Montreal, QC.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="card-surface flex flex-col gap-5 p-6">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex rounded-lg bg-blue/8 p-2 text-blue">
                <Icon size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wide text-muted">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-ink transition-colors hover:text-blue"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-ink">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
