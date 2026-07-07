"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { defaultThemeId, themeIds } from "@/lib/themes";

const STORAGE_KEY = "theme";

interface ThemeContextValue {
  theme: string;
  setTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// The blocking no-flash script (see noFlashThemeScript below) already sets
// data-theme on <html> before this component mounts, so we read it back
// here instead of localStorage + a mount effect (avoids a cascading re-render).
function getInitialTheme(): string {
  if (typeof document === "undefined") return defaultThemeId;
  const attr = document.documentElement.getAttribute("data-theme");
  return attr && themeIds.includes(attr) ? attr : defaultThemeId;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  const setTheme = useCallback((id: string) => {
    setThemeState(id);
    window.localStorage.setItem(STORAGE_KEY, id);
    if (id === defaultThemeId) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", id);
    }
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

// Inlined into a <script> tag in app/layout.tsx (as a string) so the saved
// theme applies before first paint, avoiding a flash of the classic theme.
export const noFlashThemeScript = `
(function () {
  try {
    var t = window.localStorage.getItem("${STORAGE_KEY}");
    if (t && t !== "${defaultThemeId}" && ${JSON.stringify(themeIds)}.indexOf(t) !== -1) {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}
})();
`;
