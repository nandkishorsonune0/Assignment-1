"use client";

import { motion } from "framer-motion";
import { CalendarClock, ShieldCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { computeDeliveryEstimate, formatCountdown } from "@/lib/date";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  id: string;
};

async function fetchDeliveryCountdown() {
  await new Promise((resolve) => setTimeout(resolve, 120));
  return computeDeliveryEstimate(7);
}

export function HeroSection({ id }: HeroSectionProps) {
  const { data } = useQuery({
    queryKey: ["deliveryCountdown"],
    queryFn: fetchDeliveryCountdown,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <section id={id} className="relative overflow-hidden scroll-mt-28 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_60%),radial-gradient(circle_at_75%_25%,rgba(20,184,166,0.16),transparent_42%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className={cn("inline-flex flex-wrap items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur")}>
            <CalendarClock size={16} className="text-sky-600" />
            <span>
              Get your OCI card by <strong className="text-slate-900">{data?.dateLabel ?? "Loading expected delivery..."}</strong>
            </span>
            {data ? <span className="text-xs text-slate-500">({formatCountdown(data.targetDate)})</span> : null}
          </div>

          <div className="max-w-3xl space-y-5">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              OCI Card for Minors – Fast &amp; Hassle-Free
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Premium end-to-end OCI support for children with expert document checks, embassy-ready filings, and transparent progress updates.
              Submit in minutes while we handle the complexity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Start Application
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck size={16} className="text-emerald-500" />
              HIPAA-conscious, encrypted data handling
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
