/**
 * Sets a browser cookie.
 * Used for analytics, functional, and marketing cookies.
 * NOT used for sensitive or session cookies.
 */
export function setCookie(name, value, days, options = {}) {
    let cookie = `${name}=${encodeURIComponent(value)}`;

    if (days) cookie += `; Max-Age=${days * 86400}`;
    cookie += `; Path=/`;
    cookie += `; SameSite=${options.sameSite || "Lax"}`;

    if (options.secure) cookie += `; Secure`;

    document.cookie = cookie;
}

/**
 * Reads a browser cookie by name.
 */
export function getCookie(name) {
    return document.cookie
        .split("; ")
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1];
}
