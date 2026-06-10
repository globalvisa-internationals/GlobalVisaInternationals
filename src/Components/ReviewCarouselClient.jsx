"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaCheckCircle, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ReviewCarouselClient({ reviews = [] }) {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedReview, setSelectedReview] = useState(null);
    const [visibleCount, setVisibleCount] = useState(5);
    const intervalRef = useRef(null);
    const autoSlideInterval = 5000;
    const avgRating = 4.6; // optionally compute from reviews

    // Update visible cards based on screen width
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 640) setVisibleCount(1);
            else if (width < 768) setVisibleCount(1);
            else if (width < 1024) setVisibleCount(2);
            else if (width < 1280) setVisibleCount(3);
            else setVisibleCount(5);
        };
        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    // Auto-slide logic
    const startAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % reviews.length);
        }, autoSlideInterval);
    };

    useEffect(() => {
        if (reviews.length === 0) return;
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [reviews.length]);

    const moveSlide = (direction) => {
        clearInterval(intervalRef.current);
        setStartIndex((prev) => (prev + direction + reviews.length) % reviews.length);
        startAutoSlide();
    };

    if (!reviews.length) {
        return <div className="text-center py-10 text-gray-500">No reviews yet</div>;
    }

    const visibleReviews = Array.from({ length: visibleCount }).map(
        (_, i) => reviews[(startIndex + i) % reviews.length]
    );

    return (
        <>
            {/* Main Container */}
            <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-6">
                {/* Header row */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-4 border-b border-[#DCE7F2]">
                    <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold tracking-tight">
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FBBC05]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34A853]">l</span>
                            <span className="text-[#EA4335]">e</span>
                        </div>
                        <span className="text-xl font-semibold text-gray-800">Reviews</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-[#023E74]">{avgRating}</span>
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`text-lg ${i < Math.round(avgRating) ? "text-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/search?q=Global+Visa+Internationals+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A9612] hover:bg-[#15800e] text-white font-semibold px-5 py-2 rounded-full transition-all shadow-sm hover:shadow-md"
                    >
                        Review us on Google
                    </a>
                </div>

                {/* Carousel with navigation */}
                <div className="relative">
                    {/* Previous button */}
                    <button
                        onClick={() => moveSlide(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 focus:outline-none"
                        aria-label="Previous"
                    >
                        <svg className="w-5 h-5 text-[#023E74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next button */}
                    <button
                        onClick={() => moveSlide(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 focus:outline-none"
                        aria-label="Next"
                    >
                        <svg className="w-5 h-5 text-[#023E74]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Cards wrapper */}
                    <div className="overflow-hidden px-2 md:px-6">
                        <div className="flex gap-4 md:gap-5 transition-all duration-500 ease-out">
                            {visibleReviews.map((review, idx) => (
                                <div
                                    key={`${review.name}-${idx}`}
                                    className="flex-shrink-0 w-full sm:w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(20%-1rem)] bg-[#F5F8FC] rounded-xl border border-[#DCE7F2] p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-3 mb-3">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full border-2 border-[#0383C9] object-cover"
                                        />
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <span className="font-semibold text-gray-800">{review.name}</span>
                                                <FaCheckCircle className="text-[#1A9612] text-sm" />
                                            </div>
                                            <span className="text-xs text-gray-500">
                                                {review.time} ago on Google
                                            </span>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex items-center gap-0.5 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`text-sm ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Review snippet */}
                                    <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                                        {review.text.length > 120 ? review.text.slice(0, 120) + "…" : review.text}
                                    </p>

                                    <button
                                        onClick={() => setSelectedReview(review)}
                                        className="text-[#0383C9] hover:text-[#0261A1] text-sm font-medium transition"
                                    >
                                        Read full review →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal (full review) */}
            {selectedReview && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto"
                    onClick={() => setSelectedReview(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedReview(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                            aria-label="Close"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div className="p-6 md:p-8">
                            {/* Modal header */}
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={selectedReview.avatar}
                                    alt={selectedReview.name}
                                    width={56}
                                    height={56}
                                    className="rounded-full border-2 border-[#0383C9]"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{selectedReview.name}</h3>
                                    <p className="text-sm text-gray-500">{selectedReview.time} ago on Google</p>
                                    <div className="flex items-center gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`text-sm ${i < selectedReview.rating ? "text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Full review text */}
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                                {selectedReview.text}
                            </div>

                            {/* Owner reply (if exists) */}
                            {selectedReview.reply && (
                                <div className="bg-[#F5F8FC] border-l-4 border-[#1A9612] p-4 rounded-r-lg mt-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-gray-200">
                                            <Image
                                                src="https://www.globalvisainternationals.com/gvilogo.png"
                                                alt="Global Visa Internationals"
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#023E74]">Global Visa Internationals</p>
                                            <p className="text-xs text-gray-500">Owner response</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm whitespace-pre-line">{selectedReview.reply}</p>
                                </div>
                            )}

                            {/* Link to Google review */}
                            {selectedReview.link && (
                                <a
                                    href={selectedReview.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-6 text-[#0383C9] hover:text-[#0261A1] text-sm font-medium transition"
                                >
                                    View original review on Google →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}