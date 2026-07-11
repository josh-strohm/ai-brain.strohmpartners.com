import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Company Brain Starter | Strohm Partners",
  description:
    "We build a done-for-you Company Brain: an internal Q&A tool trained on how your business actually works, so your team gets answers without interrupting you.",
  openGraph: {
    title: "Company Brain Starter | Strohm Partners",
    description:
      "Stop being the company manual. Get a Company Brain your team can ask every day, built from your real process.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Brain Starter | Strohm Partners",
    description:
      "Done-for-you Company Brain for service businesses. Start with one workflow, prove it works, then expand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
