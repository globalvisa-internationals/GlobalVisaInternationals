import { NextResponse } from "next/server";

/**
 * Runs before every request.
 * Sets lightweight cookies such as geo or A/B flags.
 */
export function middleware(req) {
    const res = NextResponse.next();

    if (!req.cookies.get("gvi_geo")) {
        res.cookies.set("gvi_geo", "IN", {
            maxAge: 86400,
            path: "/",
        });
    }

    return res;
}
