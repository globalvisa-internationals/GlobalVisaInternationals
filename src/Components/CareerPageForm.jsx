'use client';
import { useState } from 'react';
import styles from '@/app/career/JobForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function CareerPageForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        if (!executeRecaptcha) {
            alert("Oops! Security check not ready. Please try again.");
            return;
        }

        const resumeFile = form.resume.files[0];
        if (resumeFile && resumeFile.size > 2 * 1024 * 1024) {
            alert("Resume file must be under 2MB.");
            return;
        }

        const token = await executeRecaptcha("job_posting");
        formData.append("recaptchaToken", token);

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/job-posting", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (data.success) {
                form.reset();
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 4000);
            } else {
                alert("Something went wrong. Try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formSection}>
            <h2 className={styles.subTitle}>Ready to Apply?</h2>

            <form id="inquiry-form" onSubmit={handleSubmit} encType="multipart/form-data" className={styles.form}>
                {/* Full Name */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Full Name</label>
                    <input className={styles.input} type="text" name="name" placeholder="Your Full Name" required />
                </div>

                {/* Phone */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        className={styles.input}
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (10 digits)"
                        pattern="[0-9]{10}"
                        required
                    />
                </div>

                {/* Experience */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Experience</label>
                    <select className={styles.select} name="experience" required>
                        <option value="" disabled hidden>Select Your Experience</option>
                        <option value="0 years">Fresher (0 years)</option>
                        <option value="0-1 years">0–1 years</option>
                        {/* Add more later */}
                    </select>
                </div>

                {/* Gender */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Gender</label>
                    <select className={styles.select} name="gender" required>
                        <option value="" >Select Your Gender</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Education */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Highest Qualification</label>
                    <select className={styles.select} name="education" required>
                        <option value="">Your Highest Qualification</option>
                        {["PUC", "Diploma", "Bachelor's", "Master's", "Other"].map((edu) => (
                            <option key={edu} value={edu}>{edu}</option>
                        ))}
                    </select>
                </div>

                {/* Email */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" name="email" placeholder="Your Email" required />
                </div>

                {/* Resume */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Upload Resume</label>
                    <input className={styles.input} type="file" name="resume" accept=".pdf,.doc,.docx" required />
                </div>

                {/* Job Title */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Applying For</label>
                    <select className={styles.select} name="jobTitle" required>
                        <option value="" disabled hidden>Choose Role</option>
                        <option value="Visa Counselor">Visa Counselor</option>
                        <option value="Visa Documentation Executive">Visa Documentation Executive</option>
                    </select>
                </div>

                {/* Submit */}
                <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
            </form>


            {showPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <p>✅ Your application has been submitted successfully! We'll be in touch soon.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
