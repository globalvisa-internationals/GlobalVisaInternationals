import reviews from "@/data/reviews.json";

export function ReviewSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Global Visa Internationals",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": Number(
                (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
            ),
            "reviewCount": reviews.length
        },
        "review": reviews.map((r) => ({
            "@type": "Review",
            "author": r.name,
            "datePublished": r.time,
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
