"use client";

import { motion } from "framer-motion";
import { useUiStore } from "@/store/ui-store";

const tabs = [
  { id: "visa-info", label: "Visa Info" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "reviews", label: "Reviews" },
  { id: "faqs", label: "FAQs" },
];

export function StickyNavbar() {
  const activeSection = useUiStore((s) => s.activeSection);

  return (
    <div className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 md:px-6">
        {tabs.map((tab, idx) => (
          <motion.a
            key={tab.id}
            href={`#${tab.id}`}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeSection === tab.id
                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                : "border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            }`}
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
          >
            {tab.label}
          </motion.a>
        ))}
      </nav>
    </div>
  );
}
