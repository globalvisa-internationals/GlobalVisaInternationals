"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

/**
 * CookieProvider
 * Runs once on client load.
 * Automatically initializes allowed cookies.
 *
 * ⚠️ Production-only:
 * Assumes legal consent is already handled.
 */
export default function CookieProvider({ children }) {
  useEffect(() => {
    // Analytics cookies
    initAnalytics();

    // Functional cookies (example)
    // setCookie("gvi_lang", "en", 365);

    // Marketing cookies (example)
    // setCookie("gvi_marketing_id", crypto.randomUUID(), 180);
  }, []);

  return children;
}
