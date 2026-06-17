import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contraception Option Finder",
  description: "A file-backed Next.js foundation for accessible contraception information."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
