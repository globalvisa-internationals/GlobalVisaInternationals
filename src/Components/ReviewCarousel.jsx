import reviews from "@/data/reviews.json";
import ReviewCarouselClient from "@/Components/ReviewCard";

export default function ReviewCarousel() {
    return (
        <>
            {/* ✅ Static visible review HTML for SEO (server-rendered) */}
            <section className="all-reviews-section">
                {reviews.slice(0, 10).map((r, i) => (
                    <article key={i} className="review-item">
                        <h3>{r.name}</h3>
                        <p>
                            {r.text.length > 300 ? r.text.slice(0, 300) + "..." : r.text}
                        </p>
                        <p><b>Rating:</b> {r.rating} ⭐</p>
                        <p><i>{r.time} ago</i></p>
                        {r.reply && (
                            <blockquote className="owner-reply">
                                <b>Owner Reply:</b> {r.reply}
                            </blockquote>
                        )}
                    </article>
                ))}
            </section>

            {/* ✅ Interactive carousel for UX */}
            <ReviewCarouselClient reviews={reviews} />
        </>
    );
}
