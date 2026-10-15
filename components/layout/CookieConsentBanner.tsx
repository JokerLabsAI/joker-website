"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  applyConsent,
  CONSENT_STORAGE_KEY,
  type ConsentChoice,
} from "@/lib/analytics";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY) as ConsentChoice | null;
    if (stored === "granted" || stored === "denied") {
      applyConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const choose = (choice: ConsentChoice) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    applyConsent(choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[100] px-5 py-4 sm:px-8"
          style={{
            background: "var(--glass)",
            borderTop: "1px solid var(--border-s)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="wrap flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: "var(--dim)" }}>
              We use cookies to understand how visitors use this site. Nothing is tracked until you accept.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => choose("denied")}
                className="text-sm px-4 py-2 rounded-[var(--radius-md)] transition"
                style={{ border: "1px solid var(--border-s)", color: "var(--foreground)" }}
              >
                Decline
              </button>
              <button
                onClick={() => choose("granted")}
                className="text-sm px-4 py-2 rounded-[var(--radius-md)] transition"
                style={{ background: "var(--jl-primary)", color: "#fff" }}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
