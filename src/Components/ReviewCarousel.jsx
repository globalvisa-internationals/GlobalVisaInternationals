import reviews from "@/data/reviews.json";
import ReviewCarouselClient from "@/Components/ReviewCard";

export default function ReviewCarousel() {
    return (
        <>


            {/* ✅ Interactive carousel for UX */}
            <ReviewCarouselClient reviews={reviews} />
        </>
    );
}
