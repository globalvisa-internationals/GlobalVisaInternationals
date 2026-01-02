import { cookies } from "next/headers";

/**
 * Creates a secure session cookie.
 * - HTTP only
 * - Not accessible from JS
 * - Required for core functionality
 */
export async function GET() {
    cookies().set({
        name: "gvi_session",
        value: crypto.randomUUID(),
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        path: "/",
        maxAge: 86400, // 1 day
    });

    return new Response(
        JSON.stringify({ session: "created" }),
        { status: 200 }
    );
}
