"use client";

import { useEffect, useRef, type PropsWithChildren, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionWrapperProps = PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
  label?: string;
  className?: string;
  headerRight?: ReactNode;
  onVisible?: () => void;
}>;

export function SectionWrapper({
  id,
  title,
  subtitle,
  label,
  className,
  headerRight,
  onVisible,
  children,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.45, once: false });

  useEffect(() => {
    if (inView && onVisible) {
      onVisible();
    }
  }, [inView, onVisible]);

  return (
    <section ref={ref} id={id} className={cn("scroll-mt-28 py-16 md:py-24", className)}>
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {title ? (
          <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              {label ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </p>
              ) : null}
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                  {subtitle}
                </p>
              ) : null}
            </div>
            {headerRight ? <div>{headerRight}</div> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
