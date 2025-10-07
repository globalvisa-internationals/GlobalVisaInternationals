// ✅ SERVER COMPONENT (no "use client")
import ReviewCarouselClient from "@/Components/ReviewCard";
import reviews from "@/data/reviews.json"; // <-- import static JSON (server-side)

export default function ReviewCarousel() {
    return <ReviewCarouselClient reviews={reviews} />;
}
