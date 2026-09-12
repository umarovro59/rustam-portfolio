import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RUSTAM - Web Designer",
  description:
    "Independent web designer creating digital experiences, websites and visual systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
