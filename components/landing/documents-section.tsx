"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Camera, BookText } from "lucide-react";

import { SectionWrapper } from "@/components/landing/section-wrapper";

const cards = [
  {
    title: "Passport",
    description:
      "Valid minor passport scan with clear identity and parent-linked details.",
    icon: BookText,
  },
  {
    title: "Visa Photo",
    description:
      "Recent biometric photo that meets OCI specification and embassy standards.",
    icon: Camera,
  },
];

export function DocumentsSection() {
  return (
    <SectionWrapper
      id="documents"
      title="Only 2 Documents Required"
      subtitle="No bulky paperwork. Share two essentials and we handle embassy-grade verification."
      className="scroll-mt-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm sm:text-base">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
          <span className="font-semibold text-slate-900">03 min</span>
          <span className="ml-2">fastest time</span>
        </div>
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm">
          <span className="font-semibold text-slate-900">07 min</span>
          <span className="ml-2">avg time</span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ scale: 1.015, y: -3 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                <BadgeCheck size={14} />
                Essential
              </div>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-slate-600">{card.description}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
