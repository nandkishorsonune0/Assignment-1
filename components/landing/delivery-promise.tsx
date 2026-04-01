"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import { computeDeliveryEstimate } from "@/lib/date";
import { SectionWrapper } from "@/components/landing/section-wrapper";

async function fetchDeliveryPromiseDate() {
  await new Promise((resolve) => setTimeout(resolve, 120));
  return computeDeliveryEstimate(10);
}

export function DeliveryPromise() {
  const { data } = useQuery({
    queryKey: ["deliveryPromiseDate"],
    queryFn: fetchDeliveryPromiseDate,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <SectionWrapper
      id="delivery-promise"
      className="py-12 md:py-16"
      title="Delivery Promise"
      subtitle="Committed timelines with proactive case handling."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-[0_0_100px_-35px_rgba(34,197,94,0.6)] md:p-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.22),transparent_45%)]" />
        <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
          Delivery promise
        </p>
        <h2 className="relative mt-4 max-w-4xl text-2xl font-semibold leading-tight text-white md:text-4xl">
          Get your OCI Card on or before <span className="text-emerald-400">{data?.dateLabel ?? "Loading expected date..."}</span>
        </h2>
      </motion.div>
    </SectionWrapper>
  );
}
