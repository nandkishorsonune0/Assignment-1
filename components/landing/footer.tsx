"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const links = [
  { label: "Visa Info", href: "#visa-info" },
  { label: "Documents", href: "#documents" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-[#06070c] py-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="space-y-3"
        >
          <p className="text-lg font-semibold text-white">OCI Minors Desk</p>
          <p className="max-w-xs text-sm text-slate-400">
            Dedicated OCI card filing support for minors with expert review,
            transparent updates, and guaranteed timeline handling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="space-y-3"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Quick links
          </p>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-3"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            Contact
          </p>
          <div className="space-y-2 text-sm text-slate-300">
            <p className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-teal-300" />
              +1 (555) 723-0198
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal-300" />
              help@ociminorsdesk.com
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-teal-300" />
              2400 Harbor Blvd, Suite 210, Irvine, CA
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
