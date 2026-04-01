"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionWrapper } from "./section-wrapper";

const faqs = [
  {
    q: "How long does OCI processing usually take for minors?",
    a: "In most straightforward cases, the process can be completed quickly once all details are correct. We optimize each step to avoid preventable delays.",
  },
  {
    q: "Do both parents need to submit documents?",
    a: "Depending on the minor's situation, supporting details from parents may be required. Our team verifies requirements early so you submit only what's necessary.",
  },
  {
    q: "Can I track my application status?",
    a: "Yes. We provide progress updates so you know exactly which stage your application is in and what to expect next.",
  },
  {
    q: "What if my uploaded photo doesn't meet specs?",
    a: "Our specialists review your photo and guide you on corrections before submission, preventing rejections and resubmission cycles.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="faqs"
      title="Answers before you apply"
      subtitle="Everything you need to know before starting your OCI card application for minors."
    >
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_10px_35px_rgba(2,8,23,0.4)] backdrop-blur"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-slate-100 sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-300 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">
                      {faq.a}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
