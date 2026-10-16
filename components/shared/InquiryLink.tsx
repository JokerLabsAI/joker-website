"use client";

import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export type InquiryInterest = "services" | "currency_exchange";

export function InquiryLink({ interest, children, offer, plan, className = "lab-action lab-action--primary" }: {
  interest: InquiryInterest;
  offer?: "trial_7_days" | "annual_membership";
  children: React.ReactNode;
  plan?: "core" | "growth";
  className?: string;
}) {
  return (
    <a href="#contact" className={className} onClick={() => {
      window.dispatchEvent(new CustomEvent("inquiry:select", { detail: { interest, offer, plan } }));
      trackEvent("inquiry_cta_click", { interest, ...(offer ? { offer } : {}), ...(plan ? { plan } : {}) });
    }}>
      {children}<ArrowUpRight size={18} />
    </a>
  );
}
