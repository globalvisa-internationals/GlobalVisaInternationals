"use client";
import { useEffect } from "react";

export default function GclidTracker() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get("gclid");

        if (gclid) {
            document.cookie = `gclid=${gclid}; path=/; max-age=${90 * 24 * 60 * 60}`;
        }
    }, []);

    return null;
}
