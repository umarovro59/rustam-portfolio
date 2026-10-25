import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rustam-portfolio-beta.vercel.app"),
  title: "RUSTAM - Web Designer",
  description:
    "Independent web designer creating digital experiences, websites and visual systems.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "RUSTAM",
    title: "RUSTAM - Web Designer",
    description:
      "Independent web designer creating digital experiences, websites and visual systems.",
    images: [{
      url: "/images/og/rustam-portfolio-v1.png",
      width: 1200,
      height: 630,
      type: "image/png",
      alt: "RUSTAM — Web Designer. Independent web designer creating digital experiences, websites and visual systems.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUSTAM - Web Designer",
    description:
      "Independent web designer creating digital experiences, websites and visual systems.",
    images: [{
      url: "/images/og/rustam-portfolio-v1.png",
      alt: "RUSTAM — Web Designer. Independent web designer creating digital experiences, websites and visual systems.",
    }],
  },
  icons: {
    icon: { url: "/icon.svg?v=rustam-logo-1", type: "image/svg+xml", sizes: "any" },
    shortcut: "/favicon.ico?v=rustam-logo-1",
    apple: { url: "/apple-icon.png?v=rustam-logo-1", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
