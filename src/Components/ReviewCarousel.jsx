import ReviewCarouselClient from "@/Components/ReviewCard";
import reviews from "@/data/reviews.json";

export default function ReviewCarousel() {
    return <ReviewCarouselClient reviews={reviews} />;
}
