"use client";

import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

type VideoMorphButtonProps = {
  href: string;
  label: string;
  videoSrc: string;
  className?: string;
};

export function VideoMorphButton({
  href,
  label,
  videoSrc,
  className
}: VideoMorphButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.75 });
  const previewMode = inView;

  return (
    <motion.div
      animate={{
        width: previewMode ? 250 : 196,
        height: previewMode ? 124 : 52
      }}
      transition={{ duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
      className={className}
    >
      <Link
        ref={ref}
        href={href}
        className="group relative flex h-full w-full overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_10px_30px_rgba(21,94,233,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        <AnimatePresence mode="wait" initial={false}>
          {previewMode ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28 }}
              className="relative flex h-full w-full items-end justify-between px-3 pb-2"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#001239]/85 via-[#001239]/15 to-transparent" />
              <span className="relative text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                Quick Preview
              </span>
              <span className="relative rounded-full bg-white/15 px-2 py-1 text-[11px] font-medium backdrop-blur">
                Start
              </span>
            </motion.div>
          ) : (
            <motion.span
              key="label"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="relative z-10 flex w-full items-center justify-center gap-2 text-sm font-semibold md:text-base"
            >
              {label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
}
