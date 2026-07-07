export interface Theme {
  id: string;
  label: string;
  blurb: string;
}

// "classic" intentionally has no [data-theme] CSS block in globals.css —
// it's the absence of the attribute, which falls through to the default :root styles.
export const themes: Theme[] = [
  { id: "classic", label: "Classic", blurb: "The default look" },
  { id: "block-party", label: "Block Party", blurb: "Bold, brutalist, high-contrast" },
  { id: "aurora", label: "Aurora", blurb: "Glass cards, drifting gradients" },
  { id: "night-shift", label: "Night Shift", blurb: "Dark, glowing, after-hours" },
];

export const defaultThemeId = "classic";
export const themeIds = themes.map((t) => t.id);
