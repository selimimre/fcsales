import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SBLC & Proof of Funds Provider | Maje Investments",
  description:
    "SBLC & Proof of Funds from $1M–$900M. Funds held in your name, fully seasoned, no piggyback accounts. Trusted provider for 15+ years. Request a quote today.",
  keywords:
    "SBLC, Standby Letter of Credit, Proof of Funds, trade finance, collateral, Maje Investments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
