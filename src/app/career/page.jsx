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
        <title>Careers at Global Visa Internationals | Join Our Immigration Team in Bangalore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Kickstart your immigration career with Global Visa Internationals in Bangalore. Join our expert team and guide clients through global visa and immigration processes."
        />
        <meta
          name="keywords"
          content="visa consultant job Bangalore, immigration jobs India, visa careers Bengaluru, Global Visa Internationals jobs, immigration consultant careers, visa company openings, full-time visa consultant job"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/career" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Careers at Global Visa Internationals | Visa Consultant Jobs in Bangalore" />
        <meta
          property="og:description"
          content="Join Global Visa Internationals as a Visa Consultant in Bangalore. Help clients with Australia, Canada, UK immigration. Apply now for a meaningful career in immigration services."
        />
        <meta property="og:url" content="https://www.globalvisainternationals.com/career" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.globalvisainternationals.com/public/hiring/gvi-hiring-banner.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our Immigration Consulting Team | Global Visa Internationals Careers" />
        <meta
          name="twitter:description"
          content="Exciting visa consultant roles in Bangalore. Work at Global Visa Internationals and help people navigate their international immigration journeys."
        />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/public/hiring/gvi-hiring-banner.webp" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Visa Consultant – Immigration Services",
              "description":
                "Are you passionate about helping people achieve their global dreams? Join Global Visa Internationals in Bengaluru as a Visa Consultant! You'll guide clients through the immigration process for Canada, Australia, the UK, and more. This is a fantastic opportunity for individuals eager to make a real difference in people's lives.",
              "identifier": {
                "@type": "PropertyValue",
                "name": "Global Visa Internationals",
                "value": "GVIC-VC-2025"
              },
              "datePosted": "2025-04-25",
              "validThrough": "2025-06-30T23:59",
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
                  "value": 300000,
                  "unitText": "YEAR"
                }
              },
              "industry": "Immigration and Visa Services",
              "qualifications":
                "We're looking for graduates in any stream. Prior experience in visa or immigration consulting will be a plus!",
              "responsibilities":
                "As a Visa Consultant, you'll be consulting with clients, meticulously reviewing their documentation, expertly handling visa applications, and providing crucial post-approval support.",
              "skills":
                "Excellent communication skills, a keen eye for detail, a strong understanding of visa processes, and any sales experience will be highly valued.",
              "workHours": "Our standard work hours are Monday to Saturday, from 10:00 AM to 6:00 PM.",
              "incentiveCompensation": "Yes, we offer incentive compensation!",
              "applicantLocationRequirements": {
                "@type": "Country",
                "name": "India"
              },
              "url": "https://www.globalvisainternationals.com/career"
            })
          }}
        />
      </head>
      


        <div className={styles.JobSec}>
          <div className={styles.JobData}>
            <h2 className={styles.Title}>Job Title: Documentation Executive</h2>
            <p>
              <strong className={styles.subTitle}>Job Overview:</strong>
              Are you meticulous and detail-oriented? Join our growing team at Global Visa Internationals in Bangalore! As a <strong className={styles.subTitle}>Documentation Executive</strong>, you’ll play a vital role in helping clients complete the required documents for their visa applications. This is a great opportunity if you're looking to start your journey in <strong className={styles.subTitle}>immigration consultancy careers in India</strong>.
            </p>

            <h3 className={styles.subTitle}>What You'll Do:</h3>
            <ul>
              <li>Guide clients through organizing and preparing visa documentation.</li>
              <li>Provide clear support to answer documentation-related questions.</li>
              <li>Ensure forms and documents meet visa requirements and quality standards.</li>
              <li>Coordinate with internal teams to validate documentation where needed.</li>
              <li>Update clients on missing documents and the status of their application files.</li>
            </ul>

            <h3 className={styles.subTitle}>What We're Looking For:</h3>
            <ul>
              <li>Experience: Fresher</li>
              <li>Skills: Strong communication, basic computer knowledge, and attention to detail.</li>
              <li>Qualities: Organized, patient, and willing to grow along with our company.</li>
            </ul>

            <p><strong className={styles.subTitle}>Salary:</strong> Up to ₹15,000 per month</p>

            <hr className={styles.Divider} />

            <h2 className={styles.Title}>Job Title: Sales Executive</h2>
            <p>
              <strong className={styles.subTitle}>Job Overview:</strong>
              Are you a people person who enjoys building connections and hitting goals? As a <strong className={styles.subTitle}>Sales Executive</strong> at Global Visa Internationals in Bangalore, you’ll interact directly with prospective clients, convert leads, and help people take the first step in their global journey. This is an ideal role for someone exploring <strong className={styles.subTitle}>visa consultant jobs in Bangalore</strong> or looking to grow within <strong className={styles.subTitle}>immigration services careers</strong>.
            </p>

            <h3 className={styles.subTitle}>Your Responsibilities:</h3>
            <ul>
              <li>Engage with clients who inquire about visa services and provide accurate guidance.</li>
              <li>Convert inquiries into successful applications through clear communication and follow-up.</li>
              <li>Maintain accurate client records in the CRM system and track progress.</li>
              <li>Collaborate with documentation and support teams to ensure smooth processing.</li>
            </ul>

            <h3 className={styles.subTitle}>What You Bring:</h3>
            <ul>
              
              <li>Experience:Freshers,</li>
              <li>Skills: Great communication and persuasion, and ability to manage time well.</li>
            </ul>

            <p><strong className={styles.subTitle}>Salary:</strong> Up to ₹15,000 per month</p>
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
                <label className={styles.floatingLabel} htmlFor="name">Date Of Birth</label>
                <input
                  className={styles.input}
                  type="date"
                  name="dob"
                  required
                  max={new Date().toISOString().split("T")[0]}
                  title="Please select your date of birth"
                />
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
                  <option value="Documentation Executive">Documentation Executive</option>
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