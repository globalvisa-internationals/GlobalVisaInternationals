// app/reviews/page.jsx
import reviews from "@/data/reviews.json";

export const metadata = {
    title: "Client Reviews & Success Stories | Global Visa Internationals",
    description: "Read genuine success stories from clients who achieved their visa goals with Global Visa Internationals.",
};

export default function ReviewsPage() {
    return (
        <main className="reviews-page">
            <h1>Client Reviews & Success Stories</h1>
            {reviews.map((r, i) => (
                <article key={i} className="review-block">
                    <h2>{r.name} ({r.rating}⭐)</h2>
                    <p>{r.text}</p>
                    {r.reply && <blockquote><b>Owner Reply:</b> {r.reply}</blockquote>}
                    <hr />
                </article>
            ))}
        </main>
    );
}
