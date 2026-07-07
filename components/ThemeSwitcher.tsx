"use client";

import { Palette } from "lucide-react";
import { themes } from "@/lib/themes";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <label className={`inline-flex items-center gap-1.5 ${className}`}>
      <Palette size={15} className="theme-switcher-icon shrink-0" aria-hidden="true" />
      <span className="sr-only">Site style</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="theme-switcher-select"
        suppressHydrationWarning
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </label>
  );
}
