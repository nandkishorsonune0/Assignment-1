"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionWrapper } from "@/components/landing/section-wrapper";
import { useUiStore } from "@/store/ui-store";

type Review = {
  name: string;
  title: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Nisha Arora",
    title: "Parent, Bangalore",
    text: "The team handled everything with zero back-and-forth. We submitted two documents and got proactive updates till delivery.",
  },
  {
    name: "Rohit Mehta",
    title: "Parent, Mumbai",
    text: "Very professional process and clear communication. The timeline was exactly what they promised in the beginning.",
  },
  {
    name: "Priya S.",
    title: "Parent, Hyderabad",
    text: "I loved the speed and support. The application for my daughter was completed without stress or confusion.",
  },
  {
    name: "Karan Bansal",
    title: "Parent, Delhi NCR",
    text: "Smooth, fast and genuinely premium experience. The team was available on WhatsApp whenever I had questions.",
  },
];

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const setActiveSection = useUiStore((s) => s.setActiveSection);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const visible = useMemo(() => {
    return [
      reviews[index],
      reviews[(index + 1) % reviews.length],
      reviews[(index + 2) % reviews.length],
    ];
  }, [index]);

  return (
    <SectionWrapper
      id="reviews"
      label="Testimonials"
      title="Trusted by Parents"
      subtitle="Real experiences from families who completed OCI applications for minors through us."
      onVisible={() => setActiveSection("reviews")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {visible.map((review, i) => (
          <motion.article
            key={`${review.name}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl border border-white/15 bg-slate-900/70 p-6 shadow-lg shadow-black/20 backdrop-blur"
          >
            <div className="mb-4 flex gap-1 text-emerald-400">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mb-6 text-sm leading-7 text-slate-200">{review.text}</p>
            <div>
              <p className="font-semibold text-white">{review.name}</p>
              <p className="text-xs text-slate-400">{review.title}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
