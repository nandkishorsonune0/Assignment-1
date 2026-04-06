"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Shield,
  Sparkles,
  Star
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  childDocuments,
  faqs,
  parentDocuments,
  processSteps,
  services,
  testimonials,
  trustStats,
  whyChooseUs
} from "./data";
import { FaqAccordion } from "./faq-accordion";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { VideoMorphButton } from "./video-morph-button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Documents", href: "#documents" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" }
];

export function MinorOciLandingPage() {
  const [headerSolid, setHeaderSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative pb-24 text-slate-900">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          headerSolid ? "border-b border-blue-100/80 bg-white/92 shadow-sm backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="section-shell flex h-[72px] items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-md">
              <Shield className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">OCI Child Assist</p>
              <p className="text-[11px] text-slate-500">Expert Minor OCI Services</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-blue-700">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <VideoMorphButton
              href="#start-application"
              label="Start Application"
              videoSrc="/media/oci-preview.mp4"
            />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pt-28 md:pt-[8.5rem]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-orb absolute -left-28 top-6 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" />
          <div className="hero-orb-delayed absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="soft-grid absolute inset-0 opacity-45" />
        </div>
        <div className="section-shell grid items-center gap-10 pb-18 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by Global Indian Families
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Apply OCI for Your Child
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Without Stress
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Expert-guided Minor OCI application with zero errors and fast processing
              for families in the USA, Canada, and UK.
            </p>
            <div id="start-application" className="mt-8 flex flex-wrap items-center gap-4">
              <VideoMorphButton
                href="#final-cta"
                label="Start Application"
                videoSrc="/media/oci-preview.mp4"
              />
              <Link
                href="https://wa.me/12025550123"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
              >
                Talk to Expert
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-600" /> 1,000+ successful applications
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 5.0 rating from parents
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-panel relative overflow-hidden rounded-3xl p-4 md:p-5">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-blue-700 to-blue-500" />
              <div className="relative rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-4 rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                    Application success panel
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Live guidance, proactive checks, and submission confidence.
                  </p>
                </div>
                <div className="space-y-3">
                  {trustStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 text-blue-700">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm text-slate-600">{stat.label}</span>
                        </div>
                        <span className="text-base font-semibold text-slate-900">{stat.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <SectionHeading
              eyebrow="What is Minor OCI?"
              title="A simple, long-term travel and stay solution for your child"
              description="Minor OCI is a lifelong immigration status card for eligible children of Indian origin. It helps avoid repeated visa applications and supports smoother travel to India."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Lifetime visa",
                "No need for repeated visas",
                "Travel & stay benefits"
              ].map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section id="services" className="section-shell mt-18">
        <Reveal>
          <SectionHeading
            eyebrow="Services Included"
            title="Everything required for an error-free Minor OCI application"
            description="Premium, guided support designed to save your time and avoid back-and-forth with rejected files."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  className="h-full rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_6px_24px_rgba(15,76,189,0.07)]"
                >
                  <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-blue-600/10 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="process" className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Step-by-Step Process"
            title="A clear, modern workflow from first detail to OCI delivery"
            description="We follow a proven process so you always know where your application stands."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,76,189,0.06)] sm:p-8">
            <div className="relative">
              <div className="absolute left-3 top-1 hidden h-[calc(100%-1rem)] w-[2px] bg-blue-100 md:hidden" />
              <div className="absolute left-10 right-10 top-5 hidden h-[2px] bg-blue-100 md:block" />
              <div className="grid gap-5 md:grid-cols-5 md:gap-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="relative flex items-start gap-3 md:flex-col md:items-center md:text-center">
                    <span className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-semibold text-white shadow-sm">
                      {index + 1}
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-slate-700 md:max-w-[160px]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm text-slate-700">
              Progress visibility included: checklist updates, review status, and dispatch milestones.
            </div>
          </div>
        </Reveal>
      </section>

      <section id="documents" className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Documents Required"
            title="Clean checklist split by child and parent documents"
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[{ title: "Child Documents", items: childDocuments }, { title: "Parent Documents", items: parentDocuments }].map(
            (column, columnIndex) => (
              <Reveal key={column.title} delay={columnIndex * 0.07}>
                <div className="rounded-3xl border border-blue-100 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{column.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          )}
        </div>
      </section>

      <section className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for confidence, speed, and peace of mind"
          />
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-blue-100 bg-white p-5 shadow-[0_8px_22px_rgba(10,31,82,0.07)]"
                >
                  <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-blue-100 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="testimonials" className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Families trust us for clarity and error-free filing"
            centered
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.07}>
              <motion.blockquote
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_10px_20px_rgba(15,76,189,0.05)]"
              >
                <div className="mb-4 flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${testimonial.name}-${starIndex}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-700 text-xs font-semibold text-white">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.location}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions from parents applying for Minor OCI"
            description="Clear answers for the decisions that matter before you begin."
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-8">
          <FaqAccordion items={faqs} />
        </Reveal>
      </section>

      <section id="final-cta" className="section-shell mt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a2a74] to-[#0f4cbd] px-6 py-10 text-white sm:px-10">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-8 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Ready to Begin?</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Start Your Child&apos;s OCI Application Today
              </h2>
              <p className="mt-4 max-w-xl text-sm text-blue-100 sm:text-base">
                Get guided by specialists who optimize your application for speed, accuracy,
                and zero-stress submission.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <VideoMorphButton
                  href="#start-application"
                  label="Start Application"
                  videoSrc="/media/oci-preview.mp4"
                />
                <Link
                  id="contact"
                  href="https://wa.me/12025550123"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Link
        href="#start-application"
        className="fixed bottom-6 right-6 z-40 hidden h-12 items-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,76,189,0.35)] transition hover:-translate-y-0.5 lg:inline-flex"
      >
        Start Application <ArrowRight className="h-4 w-4" />
      </Link>

      <Link
        href="https://wa.me/12025550123"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_24px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 lg:bottom-24"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-blue-100 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="section-shell flex items-center gap-2">
          <Link
            href="#start-application"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white"
          >
            Start Application
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-blue-200 px-4 text-sm font-semibold text-blue-700"
          >
            Talk to Expert
          </Link>
        </div>
      </div>
    </main>
  );
}
