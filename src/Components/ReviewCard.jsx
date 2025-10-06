"use client";

import React, { useState, useEffect } from "react";
import styles from "./ReviewCard.module.css";
import { FaStar, FaCheckCircle, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ReviewCarouselClient({ reviews }) {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedReview, setSelectedReview] = useState(null);
    const visibleCount = 5;
    const interval = 4000;

    // const avgRating = (
    //     reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    // ).toFixed(2);
    const avgRating = 4.6;
    useEffect(() => {
        const timer = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % reviews.length);
        }, interval);
        return () => clearInterval(timer);
    }, [reviews.length]);

    const visibleReviews = Array.from({ length: visibleCount }).map(
        (_, i) => reviews[(startIndex + i) % reviews.length]
    );

    return (
        <div className={styles.googleReviewSection}>
            {/* Header */}
            <div className={styles.headerRow}>
                <div className={styles.googleTitle}>
                    <span className={styles.googleLogo}>Google</span> Reviews
                </div>
                <div className={styles.ratingSummary}>
                    <span className={styles.ratingNumber}>{avgRating}</span>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`${styles.star} ${i < Math.round(avgRating) ? styles.filledStar : ""
                                    }`}
                            />
                        ))}
                    </div>
                </div>
                <a
                    href="https://www.google.com/search?q=Global+Visa+Internationals+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.googleBtn}
                >
                    Review us on Google
                </a>
            </div>

            {/* Carousel */}
            <div className={styles.carouselWrapper}>
                <div className={styles.reviewRow}>
                    {visibleReviews.map((r, i) => (
                        <div className={styles.card} key={`${r.name}-${i}`}>
                            <div className={styles.header}>
                                <Image
                                    src={r.avatar}
                                    alt={r.name}
                                    width={48}
                                    height={48}
                                    className={styles.avatar}
                                />
                                <div className={styles.info}>
                                    <div className={styles.nameRow}>
                                        <span className={styles.name}>{r.name}</span>
                                        <FaCheckCircle className={styles.verified} />
                                    </div>
                                    <span className={styles.time}>
                                        {r.time} ago on{" "}
                                        <b className={styles.googleLogoSmall}>Google</b>
                                    </span>
                                </div>
                            </div>

                            <div className={styles.stars}>
                                {[...Array(r.rating)].map((_, j) => (
                                    <FaStar key={j} className={styles.star} />
                                ))}
                            </div>

                            <p className={styles.text}>
                                {r.text.length > 100 ? r.text.slice(0, 100) + "..." : r.text}
                            </p>

                            <button
                                className={styles.readMore}
                                onClick={() => setSelectedReview(r)}
                            >
                                Read more
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedReview && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setSelectedReview(null)}
                >
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeBtn}
                            onClick={() => setSelectedReview(null)}
                        >
                            <FaTimes />
                        </button>
                        <div className={styles.modalHeader}>
                            <Image
                                src={selectedReview.avatar}
                                alt={selectedReview.name}
                                width={60}
                                height={60}
                                className={styles.avatarLarge}
                            />
                            <div>
                                <h3>{selectedReview.name}</h3>
                                <p>
                                    {selectedReview.time} ago on{" "}
                                    <b className={styles.googleLogoSmall}>Google</b>
                                </p>
                                <div className={styles.stars}>
                                    {[...Array(selectedReview.rating)].map((_, j) => (
                                        <FaStar key={j} className={styles.star} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.modalBody}>
                            <div className={styles.reviewText}>
                                {selectedReview.text.split("\n").map((para, idx) =>
                                    para.trim() ? <p key={idx}>{para.trim()}</p> : null
                                )}
                            </div>
                            {selectedReview.reply && (
                                <div className={styles.replyBox}>
                                    <h4>Global Visa Internationals (Owner Reply)</h4>
                                    <p>{selectedReview.reply}</p>
                                </div>
                            )}
                            {selectedReview.link && (
                                <a
                                    href={selectedReview.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.reviewLink}
                                >
                                    View on Google
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
