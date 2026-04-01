"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCta() {
  return (
    <>
      <div className="fixed bottom-6 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 px-4">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
        >
          <Link
            href="#process"
            className="block rounded-full bg-emerald-500 px-8 py-4 text-center text-sm font-semibold text-emerald-950 shadow-[0_16px_50px_-16px_rgba(16,185,129,0.9)] transition hover:bg-emerald-400 md:text-base"
          >
            Start Application
          </Link>
        </motion.div>
      </div>

      <Link
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-emerald-950 shadow-[0_14px_35px_-15px_rgba(16,185,129,1)] transition hover:scale-105 hover:bg-emerald-400"
      >
        <MessageCircle className="h-7 w-7" />
      </Link>
    </>
  );
}
