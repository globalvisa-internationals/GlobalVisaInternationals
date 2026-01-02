/**
 * Receives analytics events from the client.
 * Can be extended to:
 * - Store in DB
 * - Send to BigQuery
 * - Push to analytics services
 */
export async function POST(req) {
    const data = await req.json();

    console.log("Analytics Event:", data);

    return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
    );
}
