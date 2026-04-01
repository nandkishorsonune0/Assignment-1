import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "OCI Card for Minors | Fast & Hassle-Free Processing",
  description:
    "Premium OCI card assistance for minors with simplified document collection, guided submission, and real-time status support.",
  keywords: [
    "OCI card for minors",
    "OCI application",
    "visa consultancy",
    "OCI processing",
  ],
  openGraph: {
    title: "OCI Card for Minors – Fast & Hassle-Free",
    description:
      "Start your OCI card application for minors with a modern, guided and dependable process.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OCI Card for Minors – Fast & Hassle-Free",
    description:
      "Start your OCI card application for minors with a modern, guided and dependable process.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
