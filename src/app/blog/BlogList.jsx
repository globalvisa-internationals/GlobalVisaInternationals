//src\app\blog\BlogList.jsx
'use client';
import styles from './blog.module.css';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All", "Study Abroad", "Work & PR", "Tourism & Travel", "Visa Information", "Culture & Lifestyle", "Immigration News & Updates"
];
const POSTS_PER_PAGE = 9;

export default function BlogList({ posts }) {
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleCategoryFilter = (category) => {
    setFilteredCategory(category);
    setCurrentPage(1);
  };

  const filteredPosts = filteredCategory === "All"
    ? posts
    : posts.filter((post) => post.category === filteredCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );






  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.success) {
      alert("✅ Subscribed successfully!");
    } else {
      alert("❌ Failed to subscribe.");
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        <div className={styles.blogGrid}>
          {paginatedPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className={styles.imageCard}>
                <Image
                  src={post.image}
                  alt={post.title}
                  className={styles.image}
                  fill
                  sizes="(max-width: 300px) 100vw, 33vw"
                  unoptimized
                />
              </Link>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <div className={styles.cardMeta}>
                  <span>👤 <strong>{post.author}</strong></span>
                  <span>
                    📅 {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className={styles.readMoreWrapper}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.readMore}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <aside className={styles.sidebar}>
          <h2>Popular Categories</h2>
          <ul className={styles.categoryList} role="list">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`${filteredCategory === cat ? styles.activeCategory : ''}`}
                onClick={() => handleCategoryFilter(cat)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCategoryFilter(cat)}
                aria-current={filteredCategory === cat ? "true" : "false"}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            ← Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? styles.activePage : ''}
              onClick={() => setCurrentPage(i + 1)}
              aria-current={currentPage === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            Next →
          </button>
        </div>
      )}


      {/* Subscribe Box */}
      <div className={styles.subscribeBox}>
        <h3>Subscribe to Our Blog</h3>
        <p>Get the latest visa updates, tips, and news directly in your inbox.</p>

        <form
          className={styles.subscribeForm}
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;

            try {
              const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });

              const data = await res.json();
              if (data.success) {
                setPopup({ show: true, message: "✅ Subscribed successfully!", type: "success" });
                e.target.reset();
              } else {
                setPopup({ show: true, message: "❌ " + data.error, type: "error" });
              }
            } catch (err) {
              setPopup({ show: true, message: "❌ Something went wrong.", type: "error" });
            }

            // Auto-close popup after 3 sec
            setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={styles.subscribeInput}
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>

        {/* ✅ Custom Popup */}
        {popup.show && (
          <div
            className={`${styles.popup} ${popup.type === "success" ? styles.success : styles.error}`}
          >
            {popup.message}
          </div>
        )}
      </div>

    </div>

  );
}
