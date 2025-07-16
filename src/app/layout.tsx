import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";

export const metadata: Metadata = {
  title: "Techfy",
  description: "Virtual store for tech products",
};

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />

        <main className="mt-[88px] md:mt-[136px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
