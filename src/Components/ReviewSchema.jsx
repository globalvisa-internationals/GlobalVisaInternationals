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
    return now.toISOString().split("T")[0];
}

export function ReviewSchema() {
    const avgRating = (
        reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    ).toFixed(1);

    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Global Visa Internationals",
        "image": "https://globalvisainternationals.com/logo.png",
        "url": "https://globalvisainternationals.com",
        "telephone": "+91-7022213466",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "G-F9, Business Point, 137 Brigade Road",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560025",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9716,
            "longitude": 77.5946
        },
        "sameAs": [
            "https://www.facebook.com/globalvisainternationals",
            "https://www.instagram.com/globalvisainternationals",
            "https://www.linkedin.com/company/globalvisainternationals"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": Number(avgRating),
            "reviewCount": reviews.length
        },
        "review": reviews.map((r) => {
            const reviewData = {
                "@type": "Review",
                "author": { "@type": "Person", "name": r.name },
                "datePublished": parseRelativeTime(r.time),
                "reviewBody": r.text,
                "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
                "url": r.link || "https://globalvisainternationals.com/reviews"
            };

            // ✅ Add reply if it exists
            if (r.reply) {
                reviewData.reviewReply = {
                    "@type": "Comment",
                    "author": {
                        "@type": "Organization",
                        "name": "Global Visa Internationals"
                    },
                    "datePublished": new Date().toISOString().split("T")[0],
                    "text": r.reply
                };
            }

            return reviewData;
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
