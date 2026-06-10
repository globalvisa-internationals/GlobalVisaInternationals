import reviews from "@/data/reviews.json";
import ReviewCarouselClient from "./ReviewCarouselClient";

export default function ReviewCarousel() {
    return <ReviewCarouselClient reviews={reviews} />;
}