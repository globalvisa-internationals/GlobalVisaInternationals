/**
 * analytics.js
 *
 * Handles performance & usage analytics.
 * Runs ONLY in production.
 * Sets analytics cookies and sends page view data
 * to the backend for monitoring.
 */

import { setCookie } from "./cookies";

export function initAnalytics() {
    // Extra safety: do nothing outside production
    if (process.env.NODE_ENV !== "production") return;

    /**
     * Analytics cookie
     * - Used to mark analytics as enabled
     * - No personal data
     * - 1 year expiry
     */
    setCookie("gvi_analytics", "true", 365, {
        secure: true,
        sameSite: "Lax",
    });

    /**
     * Send analytics event after page load
     */
    window.addEventListener("load", () => {
        fetch("/api/analytics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                path: window.location.pathname,
                timestamp: Date.now(),
                referrer: document.referrer || null,
                screen: `${window.innerWidth}x${window.innerHeight}`,
            }),
        });
    });
}
