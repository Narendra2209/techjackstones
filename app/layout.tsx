import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Tech Jackstones | AI-Driven Software & IT Services Company",
  description:
    "Tech Jackstones is a global technology partner delivering end-to-end software development, AI-driven solutions, cloud engineering, and IT services that empower businesses to innovate, scale, and succeed.",
  keywords: [
    "Tech Jackstones",
    "Software Development",
    "AI Solutions",
    "Cloud DevOps",
    "Mobile App Development",
    "Web Development",
    "IT Services",
    "Hire Developers",
    "Digital Transformation",
    "Offshore Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
