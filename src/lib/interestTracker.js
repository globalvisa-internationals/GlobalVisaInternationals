export function getInterestLevel(seconds) {
    if (seconds >= 300) {
        return "high";
    } else if (seconds >= 60) {
        return "medium";
    } else {
        return "low";
    }
}

export function setInterestCookie(country, level) {
    if (!level) return;

    const value = `${country}:${level}`;
    const maxAge = 60 * 60 * 24 * 365; // 365 days in seconds

    document.cookie =
        `gvi_interest_${country}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax; Secure`;
}