import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://danielpi.me";
const title = "Daniel Pinzon | Partner Relations & Customer Success Leader";
const description =
  "Partner Relations and Customer Success leader with 8+ years in B2B SaaS and gaming. Based in Montreal. Building teams, systems, and the tools that power them.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Daniel Pinzon",
  },
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Daniel Pinzon",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Pinzon",
  jobTitle: "Partner Relations & Customer Success Leader",
  url: siteUrl,
  image: `${siteUrl}/daniel-pinzon.jpg`,
  email: "mailto:danielp20202@gmail.com",
  sameAs: ["https://linkedin.com/in/danielp2020"],
  worksFor: {
    "@type": "Organization",
    name: "Unity Technologies",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  knowsLanguage: ["English", "Spanish"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showBlog = getAllPosts().length > 0;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav showBlog={showBlog} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer showBlog={showBlog} />
      </body>
    </html>
  );
}
