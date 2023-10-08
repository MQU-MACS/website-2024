import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MACS",
  description:
    "MACS is a Macquarie University student run association founded in 2017 by computing students, for computing students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative">
      <body>{children}</body>
    </html>
  );
}
