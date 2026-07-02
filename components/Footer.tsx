export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-sm sm:flex-row sm:justify-between">
        <p>
          Daniel Pinzon &nbsp;&middot;&nbsp; Montreal, QC &nbsp;&middot;&nbsp; &copy; {year}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/danielp2020"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">&middot;</span>
          <a href="mailto:danielp20202@gmail.com" className="transition-colors hover:text-blue">
            Email
          </a>
          <span aria-hidden="true">&middot;</span>
          <a href="/Daniel_Pinzon_CV.pdf" download className="transition-colors hover:text-blue">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
