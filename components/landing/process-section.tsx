"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2, FileUp, LoaderCircle, SendHorizontal } from "lucide-react";
import { useRef } from "react";
import { SectionWrapper } from "@/components/landing/section-wrapper";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";

const processSteps = [
  {
    title: "Upload Documents",
    description: "Securely upload the required files in a guided form.",
    icon: FileUp,
  },
  {
    title: "We Review",
    description: "Our experts verify accuracy and format before filing.",
    icon: LoaderCircle,
  },
  {
    title: "We Submit to Embassy",
    description: "Application is prepared and submitted on priority track.",
    icon: SendHorizontal,
  },
  {
    title: "OCI Delivered",
    description: "Receive your OCI card with status updates throughout.",
    icon: CheckCircle2,
  },
];

export function ProcessSection() {
  const setActiveSection = useUiStore((s) => s.setActiveSection);

  return (
    <SectionWrapper
      id="process"
      title="Interactive Process Timeline"
      subtitle="A guided workflow designed to reduce mistakes and speed up delivery."
      onVisible={() => setActiveSection("process")}
    >
      <div className="relative mx-auto mt-10 max-w-5xl">
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <svg
            viewBox="0 0 1000 650"
            className="h-full w-full"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              d="M90 95 C 300 15, 480 200, 640 170 C 800 140, 860 320, 725 400 C 570 500, 300 490, 170 600"
              stroke="url(#roadGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="10 14"
            />
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#99f6e4" />
                <stop offset="50%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step, idx) => (
            <ProcessStepCard key={step.title} step={step} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <div className="mx-auto max-w-md rounded-2xl border border-emerald-200 bg-white/90 p-4 shadow-[0_15px_40px_rgba(16,185,129,0.12)] backdrop-blur">
            <p className="text-sm font-medium text-slate-700">Live Status</p>
            <p className="mt-1 text-base font-semibold text-slate-900">
              Your application is being processed
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ProcessStepCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.45, once: false });
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn("relative", isEven ? "md:pr-8" : "md:pl-8")}
    >
      <div
        className={cn(
          "rounded-2xl border p-6 transition-all duration-300",
          isInView
            ? "border-blue-200 bg-white shadow-[0_18px_40px_rgba(37,99,235,0.14)]"
            : "border-slate-200 bg-white/80 shadow-sm",
        )}
      >
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "rounded-xl p-2.5",
              isInView ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
