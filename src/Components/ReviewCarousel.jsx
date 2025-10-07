// ✅ SERVER COMPONENT (no "use client")
// ✅ SERVER COMPONENT (no "use client")
import ReviewCarouselClient from "@/Components/ReviewCard";
import reviews from "@/data/reviews.json";

export default function ReviewCarousel() {
    return <ReviewCarouselClient reviews={reviews} />;
}
