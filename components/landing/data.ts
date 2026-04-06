import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  FileText,
  FolderCheck,
  ShieldCheck,
  Truck,
  UserCheck,
  Users
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    title: "Document Review",
    description: "Line-by-line verification of every supporting document before filing.",
    icon: FileText
  },
  {
    title: "Form Filling",
    description: "Accurate completion of Minor OCI government forms with expert guidance.",
    icon: ClipboardCheck
  },
  {
    title: "Error Checking",
    description: "Final QA pass to eliminate mismatches, missing fields, and rejection risks.",
    icon: FileCheck2
  },
  {
    title: "Appointment Assistance",
    description: "Help booking VFS/consulate appointments at the right center and time.",
    icon: UserCheck
  },
  {
    title: "Shipping Guidance",
    description: "Secure packaging, courier labels, and dispatch instructions with tracking.",
    icon: Truck
  }
];

export const processSteps = [
  "Submit details",
  "We prepare application",
  "Review & approval",
  "Shipping & submission",
  "OCI delivered"
];

export const childDocuments = [
  "Child passport copy",
  "Birth certificate",
  "Recent photographs",
  "Current visa / status proof"
];

export const parentDocuments = [
  "Parents' passports",
  "Proof of Indian origin / OCI",
  "Address proof",
  "Marriage certificate (if applicable)"
];

export const trustStats = [
  {
    label: "Minor OCI Applications",
    value: "1,000+",
    icon: FolderCheck
  },
  {
    label: "Average Accuracy",
    value: "99%",
    icon: BadgeCheck
  },
  {
    label: "Parent Satisfaction",
    value: "5.0★",
    icon: ShieldCheck
  },
  {
    label: "Global Families Supported",
    value: "30+",
    icon: Users
  }
];

export const whyChooseUs = [
  {
    title: "No Errors Guarantee",
    description:
      "Every file passes a structured compliance checklist before submission.",
    icon: ShieldCheck
  },
  {
    title: "Faster Processing",
    description:
      "Pre-validated applications reduce avoidable delays and resubmission loops.",
    icon: BadgeCheck
  },
  {
    title: "Expert Support",
    description:
      "Dedicated specialists guide you through each requirement in simple language.",
    icon: UserCheck
  },
  {
    title: "End-to-End Handling",
    description:
      "From first checklist to dispatch tracking, everything is managed for you.",
    icon: FolderCheck
  }
];

export const testimonials = [
  {
    name: "Anita S.",
    location: "New Jersey, USA",
    quote:
      "They handled everything for my son's OCI. We submitted once and got approved without a single correction.",
    initials: "AS"
  },
  {
    name: "Rohit & Mansi K.",
    location: "Toronto, Canada",
    quote:
      "The document checklist and final review were extremely detailed. It felt like having a legal-quality team by our side.",
    initials: "RK"
  },
  {
    name: "Priya N.",
    location: "London, UK",
    quote:
      "I was overwhelmed at first, but their process made it easy. Fast responses, clear instructions, and smooth submission.",
    initials: "PN"
  }
];

export const faqs = [
  {
    question: "How long does Minor OCI processing take?",
    answer:
      "Timelines vary by mission and season, but a properly prepared file generally moves faster because there are fewer correction requests."
  },
  {
    question: "Do both parents need to sign the application?",
    answer:
      "In most cases, yes. Minor applications usually require both parents' consent and signatures unless mission-specific exceptions apply."
  },
  {
    question: "What if some documents are missing right now?",
    answer:
      "We provide a gap-analysis checklist and priority plan so you can collect only what is essential first and avoid delays."
  },
  {
    question: "Can I apply if my child does not have an Indian passport?",
    answer:
      "Yes. A Minor OCI application does not require the child to currently hold an Indian passport, but eligibility proof is still required."
  }
];
