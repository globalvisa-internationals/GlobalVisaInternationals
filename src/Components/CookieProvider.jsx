"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";
import { setCookie, getCookie } from "@/lib/cookies";

export default function CookieProvider({ children }) {
  useEffect(() => {

    if (process.env.NODE_ENV !== "production") return;

    initAnalytics();
    if (!getCookie("gvi_lang")) {
      setCookie("gvi_lang", "en", 365, {
        sameSite: "Lax",
      });
    }
    if (!getCookie("gvi_marketing_id")) {
      setCookie("gvi_marketing_id", crypto.randomUUID(), 180, {
        sameSite: "Lax",
        secure: true,
      });
    }

  }, []);

  return children;
}
