import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rohit Raj — Senior AI Engineer",
    template: "%s | Rohit Raj",
  },
  description:
    "Personal blog and portfolio of Rohit Raj, Senior AI Engineer at American Express. Insights on LLMs, agentic workflows, ML infrastructure, and AI in fintech.",
  keywords: [
    "AI Engineer",
    "LLM",
    "Machine Learning",
    "Agentic Workflows",
    "Fintech AI",
    "American Express",
  ],
  authors: [{ name: "Rohit Raj" }],
  openGraph: {
    title: "Rohit Raj — Senior AI Engineer",
    description:
      "Insights on LLMs, agentic workflows, and AI in fintech.",
    url: "https://devrohitraj.github.io",
    siteName: "Rohit Raj",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@devrohitraj",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
