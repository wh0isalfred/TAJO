import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./hero.css";
import "./sections.css";
import "./form.css";
import "./faq.css";
import "./motion.css";
import "./footer.css";
export const metadata: Metadata = {
  title: "TAJO — Intelligent infrastructure between inquiry and booking",
  description:
    "TAJO builds systems that help service businesses capture, respond to and follow up with more opportunities — without adding more work to your day.",
  verification: { google: "uPRVMjXshuC3cvATrtru1doTlfBXpfcCyN7y1BDl1Y0" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/switzer-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/switzer-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
