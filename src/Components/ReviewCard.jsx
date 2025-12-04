"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./ReviewCard.module.css";
import { FaStar, FaCheckCircle, FaTimes } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";

export default function ReviewCarouselClient({ reviews = [] }) {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedReview, setSelectedReview] = useState(null);
    const [visibleCount, setVisibleCount] = useState(5);
    const intervalRef = useRef(null);
    const autoSlideInterval = 4000;

    const avgRating = 4.6;

    // Update visibleCount based on screen size
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 480) setVisibleCount(1);
            else if (width < 768) setVisibleCount(1);
            else if (width < 1024) setVisibleCount(2);
            else if (width < 1200) setVisibleCount(3);
            else setVisibleCount(5);
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    // Auto-slide logic
    const startAutoSlide = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % reviews.length);
        }, autoSlideInterval);
    };

    useEffect(() => {
        if (reviews.length === 0) return;
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [reviews.length]);

    // Manual slide buttons
    const moveGallerySlide = (direction) => {
        clearInterval(intervalRef.current); // stop auto-slide temporarily
        setStartIndex((prev) => (prev + direction + reviews.length) % reviews.length);
        startAutoSlide(); // restart auto-slide
    };

    if (!reviews || reviews.length === 0) {
        return <div className={styles.noReviews}>No reviews yet</div>;
    }

    const visibleReviews = Array.from({ length: visibleCount }).map(
        (_, i) => reviews[(startIndex + i) % reviews.length]
    );

    return (
        <>
            {/* <h2 className={styles.reviewtitle} style={{ textAlign: "center", marginTop: "2rem" }}>
                What Our Clients Say
            </h2> */}
            <div className={styles.googleReviewSection}>
                {/* Header */}

                <div className={styles.headerRow}>
                    <div className={styles.googleTitle}>
                        <span className={styles.googleLogo1}>
                            <span className={styles.blue}>G</span>
                            <span className={styles.red}>o</span>
                            <span className={styles.yellow}>o</span>
                            <span className={styles.blue}>g</span>
                            <span className={styles.green}>l</span>
                            <span className={styles.red}>e</span>
                            <span></span>
                        </span>
                        {" "} Reviews
                    </div>

                    <div className={styles.ratingSummary}>
                        <span className={styles.ratingNumber}>{avgRating}</span>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`${styles.star} ${i < Math.round(avgRating) ? styles.filledStar : ""}`}
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
                <div className={styles.carouselWrapper} style={{ position: "relative" }}>
                    <button
                        className={clsx(styles.galleryNavBtn, styles.galleryPrevBtn)}
                        onClick={() => moveGallerySlide(-1)}
                    >
                        &#10094;
                    </button>
                    <button
                        className={clsx(styles.galleryNavBtn, styles.galleryNextBtn)}
                        onClick={() => moveGallerySlide(1)}
                    >
                        &#10095;
                    </button>

                    <div className={styles.reviewRow}>
                        {visibleReviews.map((r, i) => (
                            <div className={styles.card} key={`${r.name}-${i}`}>
                                <div className={styles.header}>
                                    <Image src={r.avatar} alt={r.name} width={48} height={48} className={styles.avatar} />
                                    <div className={styles.info}>
                                        <div className={styles.nameRow}>
                                            <span className={styles.name}>{r.name}</span>
                                            <FaCheckCircle className={styles.verified} />
                                        </div>
                                        <span className={styles.time}>
                                            {r.time} ago on <b className={styles.googleLogo}><span className={styles.blue}>G</span>
                                                <span className={styles.red}>o</span>
                                                <span className={styles.yellow}>o</span>
                                                <span className={styles.blue}>g</span>
                                                <span className={styles.green}>l</span>
                                                <span className={styles.red}>e</span>
                                                <span> </span> </b>
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

                                <button className={styles.readMore} onClick={() => setSelectedReview(r)}>
                                    Read more
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedReview && (
                    <div className={styles.modalOverlay} onClick={() => setSelectedReview(null)}>
                        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeBtn} onClick={() => setSelectedReview(null)}>
                                <FaTimes />
                            </button>

                            <div className={styles.modalHeader}>
                                <Image src={selectedReview.avatar} alt={selectedReview.name} width={60} height={60} className={styles.avatarLarge} />
                                <div>
                                    <h3>{selectedReview.name}</h3>
                                    <p>
                                        {selectedReview.time} ago on <b className={styles.googleLogo}><span className={styles.blue}>G</span>
                                            <span className={styles.red}>o</span>
                                            <span className={styles.yellow}>o</span>
                                            <span className={styles.blue}>g</span>
                                            <span className={styles.green}>l</span>
                                            <span className={styles.red}>e</span>
                                            <span>{" "} </span></b>
                                    </p>
                                    <div className={styles.stars}>
                                        {[...Array(selectedReview.rating)].map((_, j) => (
                                            <FaStar key={j} className={styles.star} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modalBody}>

                                {/* === Review Text === */}
                                <div className={styles.reviewText}>
                                    {selectedReview.text &&
                                        selectedReview.text.split("\n\n").map((block, idx) => (
                                            <p key={idx}>
                                                {block.split("\n").map((line, lineIdx) => (
                                                    <React.Fragment key={lineIdx}>
                                                        {line}
                                                        {lineIdx < block.split("\n").length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        ))
                                    }
                                </div>

                                {/* === Owner Reply === */}
                                {selectedReview.reply && (
                                    <div className={styles.replyBox}>
                                        <div className={styles.replyHeader}>
                                            <div className={styles.ownerLogoCircle}>
                                                <Image
                                                    src="https://www.globalvisainternationals.com/globalvisainternationals.webp"
                                                    alt="Global Visa Internationals"
                                                    width={60}
                                                    height={60}
                                                    className={styles.ownerLogo}
                                                />
                                            </div>

                                            <div className={styles.replyContent}>
                                                <h4>
                                                    Global Visa Internationals{" "}
                                                    <span className={styles.ownerTag}>(Owner Reply)</span>
                                                </h4>

                                                <p>
                                                    {selectedReview.reply.split("\n\n").map((block, idx) => (
                                                        <React.Fragment key={idx}>
                                                            {block.split("\n").map((line, lineIdx) => (
                                                                <React.Fragment key={lineIdx}>
                                                                    {line}
                                                                    {lineIdx < block.split("\n").length - 1 && <br />}
                                                                </React.Fragment>
                                                            ))}

                                                            {/* Double line break between blocks */}
                                                            {idx < selectedReview.reply.split("\n\n").length - 1 && <><br /><br /></>}
                                                        </React.Fragment>
                                                    ))}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* === Google Link === */}
                                {selectedReview.link && (
                                    <a
                                        href={selectedReview.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.reviewLink}
                                    >
                                        View on <span className={styles.googleLogo}>
                                            <span className={styles.blue}>G</span>
                                            <span className={styles.red}>o</span>
                                            <span className={styles.yellow}>o</span>
                                            <span className={styles.blue}>g</span>
                                            <span className={styles.green}>l</span>
                                            <span className={styles.red}>e</span>
                                        </span>
                                    </a>
                                )}

                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
