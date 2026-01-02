"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";
import { setCookie, getCookie } from "@/lib/cookies";

/**
 * CookieProvider
 *
 * - Client-only execution
 * - Production-only cookie initialization
 * - Central place for ALL non-essential cookies
 */
export default function CookieProvider({ children }) {
  useEffect(() => {
    // 🚫 Never run cookies in dev or staging
    if (process.env.NODE_ENV !== "production") return;

    /**
     * =========================
     * Analytics Cookies
     * =========================
     */
    initAnalytics();

    /**
     * =========================
     * Functional Cookies
     * (User preferences)
     * =========================
     */
    if (!getCookie("gvi_lang")) {
      setCookie("gvi_lang", "en", 365, {
        sameSite: "Lax",
      });
    }

    /**
     * =========================
     * Marketing Cookies
     * (Attribution / campaigns)
     * =========================
     */
    if (!getCookie("gvi_marketing_id")) {
      setCookie("gvi_marketing_id", crypto.randomUUID(), 180, {
        sameSite: "Lax",
        secure: true,
      });
    }

  }, []);

  return children;
}
