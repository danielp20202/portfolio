"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-sans text-lg font-semibold text-navy">
          Daniel Pinzon
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue ${
                  active ? "text-blue" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/Daniel_Pinzon_CV.pdf"
            download
            className="rounded-md bg-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${active ? "text-blue" : "text-ink"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/Daniel_Pinzon_CV.pdf"
              download
              className="w-fit rounded-md bg-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
