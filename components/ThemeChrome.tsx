// Purely decorative, theme-gated background layer. Hidden (display:none) by
// default via globals.css; only the Aurora theme's CSS switches its blobs on.
export default function ThemeChrome() {
  return (
    <div className="theme-chrome" aria-hidden="true">
      <div className="theme-chrome-blob theme-chrome-blob-1" />
      <div className="theme-chrome-blob theme-chrome-blob-2" />
      <div className="theme-chrome-blob theme-chrome-blob-3" />
    </div>
  );
}
