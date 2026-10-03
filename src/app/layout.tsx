import type { Metadata, Viewport } from "next";
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
          <a className="mark" href="https://devoutshaman.com">
            o
          </a>
        </header>
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
