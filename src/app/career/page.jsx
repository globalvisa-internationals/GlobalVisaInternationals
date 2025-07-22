'use client';
import { useState } from 'react';
import styles from './JobForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function CareerPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    if (!executeRecaptcha) {
      alert("Oops! It seems the security check isn't ready yet. Please try again in a moment.");
      return;
    }

    const resumeFile = form.resume.files[0];
    if (resumeFile && resumeFile.size > 2 * 1024 * 1024) {
      alert("Please ensure your resume file is under 2MB.");
      return;
    }

    const token = await executeRecaptcha("job_posting");
    formData.append("recaptchaToken", token);

    setIsSubmitting(true);

    fetch("/api/job-posting", {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.success) {
          form.reset();
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 4000);
        } else {
          alert("Hmm, something went wrong while sending your application. Please try again.");
        }
      })
      .catch((err) => {
        alert("There was an issue submitting your application. Please double-check and try again.");
        console.error(err);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <head>
        <title>Visa Counselor Jobs in Bangalore | Careers at Global Visa Internationals</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Apply for Visa Counselor roles at Global Visa Internationals, Bangalore. Help clients with global visa processes and grow your career in immigration consulting."
        />
        <meta
          name="keywords"
          content="visa counselor job Bangalore, immigration jobs India, visa consultancy careers, Global Visa Internationals hiring, visa consultant openings, entry-level visa jobs"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/career" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Visa Counselor Jobs | Global Visa Internationals Careers in Bangalore" />
        <meta
          property="og:description"
          content="Join Global Visa Internationals as a Visa Counselor in Bangalore. Guide clients through Australia, Canada, UK visa applications. Start your immigration career now."
        />
        <meta property="og:url" content="https://www.globalvisainternationals.com/career" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.globalvisainternationals.com/public/hiring/gvi-hiring-banner.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join as a Visa Counselor | Careers at Global Visa Internationals, Bangalore" />
        <meta
          name="twitter:description"
          content="Exciting opportunity for freshers as Visa Counselors in Bangalore. Work at Global Visa Internationals and build a career in global immigration services."
        />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/public/hiring/gvi-hiring-banner.webp" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />

        {/* Structured Data for JobPosting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Visa Counselor – Immigration Services",
              "description":
                "Join Global Visa Internationals in Bengaluru as a Visa Counselor! You will interact with clients, provide accurate visa guidance, evaluate applications, and ensure a smooth immigration process for Canada, Australia, the UK, and other destinations. Ideal for freshers passionate about immigration services and client support.",
              "identifier": {
                "@type": "PropertyValue",
                "name": "Global Visa Internationals",
                "value": "GVIC-VC-2025"
              },
              "datePosted": "2025-07-22",
              "validThrough": "2025-09-30T23:59",
              "employmentType": "FULL_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Global Visa Internationals",
                "sameAs": "https://www.globalvisainternationals.com",
                "logo": "https://www.globalvisainternationals.com/gvilogo.png"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "GF-9, Business Point, Brigade Road",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560025",
                  "addressCountry": "IN"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": {
                  "@type": "QuantitativeValue",
                  "value": 180000,
                  "unitText": "YEAR"
                }
              },
              "industry": "Immigration and Visa Services",
              "qualifications":
                "Fresh graduates with strong communication skills are welcome. Basic knowledge of MS Office and customer service is preferred.",
              "responsibilities":
                "Engage with visa applicants, assess profiles, provide consultation, manage documentation, and support visa application procedures across various categories including tourist, student, and PR.",
              "skills":
                "Communication, MS Office, teamwork, attention to detail, basic sales, and a client-focused attitude.",
              "workHours": "Monday to Saturday, 10:00 AM to 6:00 PM",
              "incentiveCompensation": "Incentives available based on performance",
              "applicantLocationRequirements": {
                "@type": "Country",
                "name": "India"
              },
              "url": "https://www.globalvisainternationals.com/career"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does a Visa Counselor do at Global Visa Internationals?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Visa Counselor guides clients through the visa application process, provides accurate information, assists with documentation, and ensures a smooth and timely application experience for various countries like Canada, Australia, and the UK."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is prior experience required to apply for the Visa Counselor role?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, this position is open to freshers. Training will be provided. However, good communication skills, a basic understanding of customer service, and MS Office proficiency are expected."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the work location and timing for this role?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The position is based in Bangalore (Brigade Road). Work timings are Monday to Saturday, from 10:00 AM to 6:00 PM."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the salary range for the Visa Counselor position?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The monthly salary ranges between ₹15,000 to ₹20,000 depending on skills and experience. Additional incentives may be available based on performance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who can apply for this Visa Counselor job?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Female graduates from any stream with strong communication and interpersonal skills are encouraged to apply."
                  }
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.globalvisainternationals.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Careers",
                  "item": "https://www.globalvisainternationals.com/career"
                }
              ]
            })
          }}
        />

      </head>




      <div className={styles.JobSec}>
        <div className={styles.JobData}>

          <h2 className={styles.Title}>Job Title: Visa Counselor</h2>

          <p>
            <strong className={styles.subTitle}>Job Overview:</strong>
            Are you passionate about guiding individuals through their international journey? Join <strong className={styles.subTitle}>Global Visa Internationals</strong> in Bangalore as a <strong className={styles.subTitle}>Visa Counselor</strong>. In this client-facing role, you’ll assist applicants with visa procedures, documentation, and eligibility assessments. This position is perfect for candidates looking to build a career in <strong className={styles.subTitle}>visa consultancy in Bangalore</strong> or grow in the <strong className={styles.subTitle}>immigration services industry</strong>.
          </p>

          <h3 className={styles.subTitle}>Key Responsibilities:</h3>
          <ul>
            <li>Guide clients through visa requirements, processes, and documentation for various countries.</li>
            <li>Evaluate applicant profiles and suggest suitable visa options.</li>
            <li>Handle walk-in inquiries, telephonic leads, and email queries professionally.</li>
            <li>Coordinate with the documentation team to ensure timely application processing.</li>
            <li>Maintain and update client records.</li>
            <li>Provide end-to-end support to clients from consultation to visa approval.</li>
          </ul>

          <h3 className={styles.subTitle}>Qualifications & Skills:</h3>
          <ul>
            <li>Experience: Freshers are welcome (Training will be provided)</li>
            <li>Excellent English communication skills (verbal and written)</li>
            <li>Proficient in MS Office (Word, Excel, Outlook)</li>
            <li>Strong interpersonal and counseling skills</li>
            <li>Ability to build trust and rapport with clients</li>
            <li>Detail-oriented with good organizational skills</li>
            <li>Goal-driven and proactive approach to work</li>
            <li>Team player with a positive attitude</li>
            <li>Gender: Female candidates preferred</li>
            <li>Educational Qualification: Any degree (preferred in Business, Marketing, or Humanities)</li>
          </ul>

          <p><strong className={styles.subTitle}>Salary:</strong> ₹15,000 – ₹20,000 per month</p>

        </div>



        <div className={styles.formSection}>
          <h2 className={styles.subTitle}>Ready to Apply?</h2>

          <form id="inquiry-form" onSubmit={handleSubmit} encType="multipart/form-data">

            {/* Full Name & Phone */}
            <div className={styles.row}>
              <div className={styles.inputWrapper}>
                <label className={styles.floatingLabel} htmlFor="name">Your Full Name</label>
                <input
                  className={styles.input}

                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.floatingLabel} htmlFor="name">Enter Your Phone Number</label>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (10 digits)"
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit mobile number"
                  required
                />
              </div>
            </div>

            {/* Experience & DOB */}
            <div className={styles.row}>
              <div >
                <select className={styles.select} name="experience" required>
                  <option value="" disabled selected hidden>Select Your Experience Level</option>
                  <option value="0 years">Fresher (0 years)</option>
                  <option value="0-1 years">0–1 years</option>
                  <option value="1-3 years">1–3 years</option>
                  <option value="3-5 years">3–5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.floatingLabel} htmlFor="name">Gender</label>
                <select className={styles.select} name="Gender" required>
                  <option value="" disabled selected hidden>Select Your Gender</option>
                  <option value="Female">Female</option>

                </select>
              </div>
            </div>

            {/* Qualification & Email */}
            <div className={styles.row}>
              <div className={styles.inputWrapper}>
                <select className={styles.select} name="education" required>
                  <option value="" disabled selected hidden>Your Highest Qualification</option>
                  {["PUC", "Diploma", "Bachelor's", "Master's", "Other"].map((edu) => (
                    <option key={edu} value={edu}>{edu}</option>
                  ))}
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.floatingLabel} htmlFor="name">Enter Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>
            </div>

            {/* Resume Upload & Job Role */}
            <div className={styles.row}>
              <div className={styles.inputWrapper}>
                <label className={styles.floatingLabel} htmlFor="name">Select CV</label>
                <input
                  className={styles.input}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                />

              </div>
              <div className={styles.inputWrapper}>
                <select className={styles.select} name="jobTitle" required>
                  <option value="" disabled selected hidden>Applying For</option>
                  <option value="Sales Executive">Sales Executive</option>
                </select>
              </div>
            </div>

            <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
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

      </div >
    </>
  );
}