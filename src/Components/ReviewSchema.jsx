import reviews from "@/data/reviews.json";

function parseRelativeTime(relative) {
    const now = new Date();
    if (relative.includes("year")) {
        const years = parseInt(relative) || 1;
        now.setFullYear(now.getFullYear() - years);
    } else if (relative.includes("month")) {
        const months = parseInt(relative) || 1;
        now.setMonth(now.getMonth() - months);
    } else if (relative.includes("week")) {
        const weeks = parseInt(relative) || 1;
        now.setDate(now.getDate() - weeks * 7);
    } else if (relative.includes("day")) {
        const days = parseInt(relative) || 1;
        now.setDate(now.getDate() - days);
    }
    return now.toISOString().split("T")[0]; // YYYY-MM-DD format
}

export function ReviewSchema() {
    const avgRating = (
        reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    ).toFixed(1);

    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Global Visa Internationals",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": Number(avgRating),
            "reviewCount": reviews.length
        },
        "review": reviews.map((r) => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "datePublished": parseRelativeTime(r.time),
            "reviewBody": r.text,
            "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
            "url": r.link || "https://globalvisainternational.com/reviews"
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
