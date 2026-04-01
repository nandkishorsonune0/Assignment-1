import type { Metadata } from "next";
import { DeliveryPromise } from "@/components/landing/delivery-promise";
import { DocumentsSection } from "@/components/landing/documents-section";
import { Footer } from "@/components/landing/footer";
import { FaqSection } from "@/components/landing/faq-section";
import { FloatingCta } from "@/components/landing/floating-cta";
import { HeroSection } from "@/components/landing/hero-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { StickyNavbar } from "@/components/landing/sticky-navbar";

export const metadata: Metadata = {
  title: "OCI Card for Minors | Fast & Hassle-Free",
  description:
    "Apply for OCI card for minors with a streamlined process, expert review, and on-time delivery promise.",
  openGraph: {
    title: "OCI Card for Minors – Fast & Hassle-Free",
    description:
      "Premium OCI concierge for minors. Upload only required documents and track a guided process end-to-end.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection id="visa-info" />
      <StickyNavbar />
      <DocumentsSection />
      <ProcessSection />
      <DeliveryPromise />
      <ReviewsSection />
      <FaqSection />
      <Footer />
      <FloatingCta />
    </main>
  );
}
