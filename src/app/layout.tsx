import type { Metadata, Viewport } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Humanehealth",
    template: "%s · Humanehealth",
  },
  description: "Humanehealth clinic network hub under Devo Holdings.",
  applicationName: "Humanehealth",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "only light" }}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <header>
          <Link className="mark" href="/">
            Humanehealth
          </Link>
        </header>
        <main id="content">{children}</main>
        <footer>
          <p>Humanehealth · Devo clinic network · publisher atla-o</p>
        </footer>
      </body>
    </html>
  );
}
