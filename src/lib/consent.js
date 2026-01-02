import { setCookie } from "./cookies";

/**
 * Initializes analytics tracking.
 * - Sets an analytics cookie
 * - Sends page view data to backend
 */
export function initAnalytics() {
    // Marks analytics as enabled for this browser
    setCookie("gvi_analytics", "true", 365, {
        secure: true,
        sameSite: "Lax",
    });

    // Send page analytics after page load
    window.addEventListener("load", () => {
        fetch("/api/analytics", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                path: window.location.pathname,
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
            }),
        });
    });
}
