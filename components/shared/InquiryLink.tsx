"use client";

import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export type InquiryInterest = "services" | "currency_exchange";

export function InquiryLink({ interest, children, className = "lab-action lab-action--primary" }: {
  interest: InquiryInterest;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href="#contact" className={className} onClick={() => {
      window.dispatchEvent(new CustomEvent("inquiry:select", { detail: { interest } }));
      trackEvent("inquiry_cta_click", { interest });
    }}>
      {children}<ArrowUpRight size={18} />
    </a>
  );
}
