"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const baseLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav({ showBlog = false }: { showBlog?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = showBlog
    ? [...baseLinks.slice(0, 2), { href: "/blog", label: "Blog" }, baseLinks[2]]
    : baseLinks;

  return (
    <header className="site-header sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-navy"
        >
          Daniel Pinzon
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors hover:text-blue ${
                    active ? "text-blue" : "text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-blue transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
          <ThemeSwitcher className="text-ink" />
          <a href="/Daniel_Pinzon_CV.pdf" download className="btn btn-primary">
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2.5 rounded-md p-2.5 text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="site-header-mobile-panel px-6 py-2 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm font-medium ${active ? "text-blue" : "text-ink"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="my-2 flex flex-wrap items-center gap-3">
              <ThemeSwitcher className="text-ink" />
              <a href="/Daniel_Pinzon_CV.pdf" download className="btn btn-primary">
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
