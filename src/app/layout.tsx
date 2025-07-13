import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techfy",
  description: "Virtual store for tech products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
