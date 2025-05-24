"use client";
import styles from './Canada.module.css';
import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Canada() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com/visa/tourist-visa/canada",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Unlock Your Canada Adventure! Global Visa Internationals provides expert guidance for your Canada tourist visa application. Simplify the process and explore Canada's wonders. Contact us today!",
    "founder": {
      "@type": "Organization",
      "name": "Naveen Kumar J"
    },
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560025",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7022213466",
      "contactType": "Customer Support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada", "Tamil"]
    },
    "areaServed": ["IN", "Canada", "EU"],
    "sameAs": [
      "https://www.facebook.com/GlobalVisaInternationals",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/globalvisainternationals"
      // Add more links if you have Twitter, YouTube, etc.
    ]

  };
  //review

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      alert("❌ Unexpected form submission target.");
      return;
    }

    const formData = new FormData(form);


    if (!executeRecaptcha) {
      alert("❌ reCAPTCHA not ready");
      return;
    }

    const token = await executeRecaptcha("inquiry_form");

    if (!token) {
      alert("❌ Please verify you're not a robot");
      return;
    }

    const payload = {
      ...Object.fromEntries(formData.entries()),
      recaptchaToken: token,
    };

    // Optimistic UX
    setShowPopup(true);
    form.reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);



    // Send email in background
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      const data = await res.json();
      if (!data.success) {
        alert("❌ Email sending failed. Please try again.");
      }
    }).catch((err) => {
      alert("❌ Something went wrong while submitting the form.");
      console.error(err);
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0a66c2" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="referrer" content="origin-when-cross-origin" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="preload" as="image" href="https://www.globalvisainternationals.com/images/canada-pr-visa-banner.jpg" />


  <title>Canada PR Visa from India | Requirements, Cost & Application Process | Global Visa Internationals</title>
  <meta name="description" content="Dreaming of a new life in Canada? Global Visa Internationals offers expert guidance on Canada Permanent Residency (PR) visa requirements, application process, cost, and pathways for skilled workers and families from India." />
  <meta name="keywords" content="Canada PR visa, Canada permanent residency, apply for Canada PR from India, Canada PR cost, Canada immigration consultants, Canada PR process, Canada PR requirements, Express Entry Canada, PNP Canada, skilled migration Canada" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Global Visa Internationals" />
  <link rel="canonical" href="https://www.globalvisainternationals.com/visa/permanent-residency/canada" />


  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Canada PR Visa: Requirements, Cost & Application | Global Visa Internationals" />
  <meta property="og:description" content="Plan your move to Canada. Global Visa Internationals provides expert assistance for Canada Permanent Residency (PR) visa applications, including Express Entry and PNP pathways. Get detailed guidance on requirements and costs." />
  <meta property="og:url" content="https://www.globalvisainternationals.com/visa/permanent-residency/canada" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.globalvisainternationals.com/images/canada-pr-visa-banner.jpg" /> {/* Ensure this image exists and is optimized */}
  <meta property="og:locale" content="en_IN" />
  <meta property="og:locale:alternate" content="en_US" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Canada PR Visa from India | Your Guide to Permanent Residency" />
  <meta name="twitter:description" content="Migrate to Canada with confidence! Global Visa Internationals offers comprehensive support for Canada PR visas, covering application steps, required documents, and eligibility criteria." />
  <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/canada-pr-visa-banner.jpg" /> {/* Ensure this image exists and is optimized */}
  <meta name="twitter:url" content="https://www.globalvisainternationals.com/visa/permanent-residency/canada" />

  {/* Geo-related meta tags */}
  <meta name="geo.region" content="CA" />
  <meta name="geo.placename" content="Ottawa" />
  <meta name="geo.region" content="IN-KA" />
  <meta name="geo.placename" content="Bengaluru" />
  <meta name="ICBM" content="12.9716,77.5946" />

  {/* Structured Data - LocalBusiness Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Global Visa Internationals",
      "url": "https://www.globalvisainternationals.com",
      "logo": "https://www.globalvisainternationals.com/logo.png",
      "description": "Trusted visa consultants helping Indian skilled workers and families achieve Canada Permanent Residency (PR) with expert application and documentation support.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "MG Road",
        "addressLocality": "Bengaluru",
        "addressRegion": "KA",
        "postalCode": "560025",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7022213466",
        "contactType": "Customer Support"
      },
      "sameAs": [
        "https://www.facebook.com/GlobalVisaInternationals",
        "https://www.linkedin.com/company/globalvisainternationals",
        "https://twitter.com/GlobalVisaIntl"
      ]
    })
  }} />

  {/* Structured Data - BreadcrumbList Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.globalvisainternationals.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Permanent Residency Visa",
          "item": "https://www.globalvisainternationals.com/visa/permanent-residency"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Canada PR"
        }
      ]
    })
  }} />

  {/* Structured Data - FAQPage Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a Canada PR visa cost from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of a Canada PR visa from India includes various fees such as the application fee (currently CAD 850 for principal applicant), Right of Permanent Residence Fee (CAD 515), biometric fees, educational credential assessment (ECA), and language test fees (IELTS/CELPIP). Total costs can range significantly depending on family size and additional requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for Canada PR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key documents for Canada PR include a valid passport, educational credential assessment (ECA) report, language test results (IELTS/CELPIP/TEF), proof of skilled work experience, police clearance certificates, medical examination results, and proof of funds. Additional documents may be required based on the specific immigration program."
          }
        },
        {
          "@type": "Question",
          "name": "What is the processing time for Canada PR from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Canada PR visa processing times vary depending on the immigration program (e.g., Express Entry, PNP), the completeness of your application, and IRCC's current workload. It can range from 6 months for Express Entry to over a year for other programs. Official IRCC website provides the most up-to-date processing times."
          }
        },
        {
          "@type": "Question",
          "name": "What is Express Entry for Canada PR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Express Entry is an online system used by Immigration, Refugees and Citizenship Canada (IRCC) to manage applications for permanent residence under federal economic immigration programs like the Federal Skilled Worker Program, Federal Skilled Trades Program, and Canadian Experience Class. Candidates are ranked based on a Comprehensive Ranking System (CRS) score."
          }
        }
      ]
    })
  }} />

  {/* Structured Data - Service Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Canada Permanent Residency Visa Application Assistance",
      "provider": {
        "@type": "Organization",
        "name": "Global Visa Internationals",
        "url": "https://www.globalvisainternationals.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Permanent Residency Visa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Canada Express Entry Visa Assistance (FSWP, FSTP, CEC)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Canada Provincial Nominee Program (PNP) Assistance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Canada Family Sponsorship Visa Assistance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Quebec Skilled Worker Program (QSWP) Assistance"
            }
          }
        ]
      }
    })
  }} />

</head>
      <div className={styles.imageContainer}>
        <img src="/images/Canada1.png" alt="Canada Image" className={styles.CanadaImage} />
      </div>

          <div className={styles.CanadaSec}>
    
    
      <div className={styles.CanadaData}>
        <h1 classNam={styles.CanadaGuide}>Your Comprehensive Guide to Canada PR | Global Visa Internationals</h1>
        <p>Dreaming of a new beginning? Canada, a land of breathtaking landscapes, a vibrant multicultural society, and endless opportunities, is calling! Securing Permanent Residency (PR) in Canada opens doors to an exceptional quality of life, access to world-class healthcare, top-tier education, and a thriving job market. It's more than just a visa; it's a chance to build a brighter future for you and your family.</p>
        <p></p>
        <h3 className={styles.subTitle}>Why Choose Canada for Permanent Residency? What Makes It So Special?</h3>
        <p>Canada isn't just another country; it's a promise of a better life. Here's what makes it a premier destination for Canadian immigration:</p>
    
        <ul>
          <li><strong>High Quality of Life:</strong> Canada consistently ranks among the top countries globally for its high quality of life. You'll find a safe, stable environment with abundant amenities, making it ideal for families and individuals alike.</li>
          <li><strong>Excellent Healthcare System:</strong> Say goodbye to healthcare worries! Canada boasts a universal healthcare system, ensuring comprehensive medical services are available to all its citizens and permanent residents.</li>
          <li><strong>World-Class Education:</strong> Invest in your future and your children's future with Canada's highly-regarded public education system, from elementary schools to prestigious universities. Canada PR provides access to unparalleled learning opportunities.</li>
          <li><strong>Strong Economy and Job Opportunities:</strong> Canada's robust and diverse economy means there's a constant demand for skilled professionals across various sectors. Whether you're in tech, healthcare, or trades, there's likely a place for you.</li>
          <li><strong>Multicultural and Inclusive Society:</strong> Canada is celebrated for its welcoming spirit, embracing people from every corner of the globe. You'll feel at home in this truly diverse and inclusive nation.</li>
          <li><strong>Stunning Natural Beauty:</strong> Imagine living surrounded by majestic mountains, pristine coastlines, and vast, untouched forests. Canada offers incredible natural beauty and endless opportunities for outdoor adventures.</li>
          <li><strong>Path to Citizenship:</strong> Your Canada PR is just the first step! After meeting residency requirements, you can apply for Canadian citizenship, gaining full rights and privileges in your new home.</li>
        </ul>
        <h3 className={styles.subTitle}>Key Canadian Cities and Regions for PR Seekers</h3>
        <p>While opportunities for immigrating to Canada exist nationwide, some cities and provinces are particularly popular for newcomers due to their thriving job markets and strong community support. Consider these top destinations for your Canada PR journey:</p>
        <ol>
          <li><strong>Toronto, Ontario:</strong> As Canada's largest city and economic powerhouse, Toronto offers unparalleled job opportunities in finance, technology, healthcare, and the arts. It's a true global city.</li>
          <br />
          <li><strong>Vancouver, British Columbia:</strong> Known for its stunning natural beauty and a booming tech industry, Vancouver is perfect for those seeking opportunities in film, tourism, and innovation.</li>
          <br />
          <li><strong>Montreal, Quebec:</strong> This vibrant cultural hub boasts strong aerospace, IT, and pharmaceutical industries. If you have French language proficiency, Montreal could be your ideal gateway to Canada PR.</li>
          <br />
          <li><strong>Calgary, Alberta:</strong> While a major center for the energy sector, Calgary is rapidly diversifying into technology and logistics. Plus, you're just a stone's throw from the majestic Rocky Mountains!</li>
          <li><strong>Edmonton, Alberta:</strong> Another key economic hub in Alberta, Edmonton offers strong sectors in energy, healthcare, and education. It's a growing city with a welcoming community.</li>
          <li><strong>Ottawa, Ontario:</strong> The nation's capital, Ottawa provides stable employment opportunities in government, technology, and research. It's a clean, green city with a high quality of life.</li>
          <li><strong>Halifax, Nova Scotia:</strong> This charming coastal city is seeing a growing economy in ocean technology, healthcare, and tourism. Enjoy a relaxed pace of life with stunning ocean views.</li>
          <li><strong>Winnipeg, Manitoba:</strong> Known for its affordability, Winnipeg offers a growing economy in manufacturing, aerospace, and agribusiness, making it an attractive option for Canada immigration.</li>
          <li><strong>Saskatoon, Saskatchewan:</strong> A thriving city in the prairies, Saskatoon presents opportunities in agriculture, mining, and technology, with a strong sense of community.</li>
    
        </ol>
    
        <div className={styles.formSection1}>
          <h4>Contact Global Visa Internationals for Visa Documentation Assistance:</h4>
          <h1 className={styles.subTitle}>Visa And Immigration Inquiry Form</h1>
          <form id="inquiry-form" onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div>
                <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div>
                <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
              </div>
            </div>
    
            <div className={styles.row}>
              <div>
                <select className={styles.select} name="country" required>
                  <option value="">Select Country</option>
                  {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <select className={styles.select} name="immigration_type" required>
                  <option value="">Select Immigration Type</option>
                  {["Work Visa", "Student Visa", "Visitor/Tourist Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
    
            <div className={styles.row}>
              <div>
                <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
              </div>
              <div>
                <select className={styles.select} name="age" required>
                  <option value="">Select Age</option>
                  <option value="18-45">18-45</option>
                  <option value="45+">45+</option>
                </select>
              </div>
            </div>
    
            <div className={styles.row}>
              <div>
                <select className={styles.select} name="education" required>
                  <option value="">Select Qualification</option>
                  {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                    <option key={edu} value={edu}>{edu}</option>
                  ))}
                </select>
              </div>
              <div>
                <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>
    
    
            <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
    
          </form>
          {showPopup && (
            <div className={styles.popupOverlay}>
              <div className={styles.popupContent}>
                <p>✅ Your form has been submitted successfully!</p>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
        ---
        <h2 className={styles.subTitle}>Tailor Your Canadian PR Pathway: Find Your Best Fit!</h2>
        <p>Feeling overwhelmed by the options for Canada PR? Don't worry! We can help you navigate the various Canadian immigration programs. Take our quick quiz to discover your ideal Canadian immigration route – it's designed to point you in the right direction!</p>
    
        ---
        <h2 className={styles.subTitle}>Understanding the Cost of Canadian Permanent Residency</h2>
        <p>Investing in your future in Canada is worth every penny, but it's good to know what to expect. The total cost of applying for Canadian Permanent Residency can vary based on the specific program, your family size, and other associated expenses. Here's a general breakdown of potential costs for immigrating to Canada:</p>
        <ul>
          <li><strong>Application Fees:</strong> These are the official fees paid to Immigration, Refugees and Citizenship Canada (IRCC).
            <ul>
              <li>Principal applicant: CAD 850 (approximately INR 52,000)</li>
              <li>Spouse/Common-law partner: CAD 850 (approximately INR 52,000)</li>
              <li>Dependent child: CAD 230 per child (approximately INR 14,000)</li>
              <li>Right of Permanent Residence Fee (RPRF): CAD 515 per adult (approximately INR 31,500) - this crucial fee is paid after your application is approved, right before your Canada PR is confirmed.</li>
            </ul>
          </li>
          <br />
          <li><strong>Educational Credential Assessment (ECA):</strong> If your academic qualifications are from outside Canada, you'll need an ECA to verify their equivalency. The cost varies by organization (e.g., WES, IQAS), typically ranging from CAD 200-250 (approximately INR 12,200 - INR 15,300).</li>
          <br />
          <li><strong>Language Proficiency Tests (IELTS/PTE/CELPIP):</strong> These tests are mandatory to prove your English or French language skills. The cost is typically around INR 17,000-20,000 per test. Strong scores here can significantly boost your CRS score for Express Entry!</li>
          <br />
          <li><strong>Medical Examination:</strong> A medical exam is required for all applicants and their dependents to ensure you meet health requirements for Canada immigration. The cost varies by clinic and location, generally INR 5,000-8,000 per person.</li>
          <br />
          <li><strong>Police Certificates:</strong> You'll need police certificates from every country you've lived in for six months or more since turning 18. Costs vary depending on the issuing authority in each country.</li>
          <br />
          <li><strong>Proof of Funds:</strong> This is a vital requirement for many Canada PR programs (especially Express Entry). You'll need to demonstrate you have sufficient funds to support yourself and your family upon arrival in Canada. The amount varies based on family size; for example, a single applicant might need to show approximately CAD 14,000 (approximately INR 8.5 Lakhs), while a family of four might need CAD 26,000 (approximately INR 16 Lakhs). These funds must be readily available and unencumbered.</li>
          <br />
          <li><strong>Translation Fees:</strong> If any of your supporting documents are not in English or French, you'll need certified translations. Costs for these services will vary.</li>
          <br />
          <li><strong>Consultancy Fees (if applicable):</strong> If you choose to leverage the expertise of an immigration consultant like Global Visa Internationals, their professional fees will be an additional cost. These fees vary based on the comprehensive services provided to guide you through your Canada PR journey.</li>
        </ul>
        <h2 className={styles.subTitle}>Example Estimated Total Out-of-Pocket Costs (for a single applicant, excluding consultancy fees and proof of funds):</h2>
        <ul>
          <li>Application Fees: CAD 850 (PR Fee) + CAD 515 (RPRF) = CAD 1365</li>
          <li>ECA: CAD 250</li>
          <li>IELTS/PTE/CELPIP: INR 18,000 (approximately CAD 300)</li>
          <li>Medical Exam: INR 7,000 (approximately CAD 115)</li>
          <li>Police Certificates: Variable</li>
          <li>Total Estimated Out-of-Pocket Costs: Approximately CAD 2,000 - CAD 2,500 (approximately INR 1.2 Lakhs - INR 1.5 Lakhs) + Proof of Funds.</li>
        </ul>
        <p>Please remember, these are rough estimates, and actual costs can vary. It's always essential to check the official IRCC website for the most up-to-date fees and requirements. For a personalized cost breakdown, reach out to Global Visa Internationals!</p>
        ---
        <h2 className={styles.subTitle}>Tips for a Successful Canadian PR Application: Your Pathway to Success</h2>
    
        <ol>
          <li><strong>Research Thoroughly:</strong> Before you begin your Canadian immigration journey, take the time to understand the different Canada PR programs and their specific eligibility criteria. Finding the right fit for your profile is the first crucial step.</li>
          <li><strong>Improve Your CRS Score (for Express Entry):</strong> If Express Entry is your path, focus on enhancing your Comprehensive Ranking System (CRS) score. Strong language test results, higher education, and extensive work experience are key factors.</li>
          <li><strong>Gather Documents Early:</strong> The Canada PR application requires a significant amount of documentation. Start collecting all required documents well in advance to avoid last-minute stress and delays.</li>
          <li><strong>Maintain a Clean Record:</strong> A clean criminal record is essential for Canada immigration. Ensure you have no issues that could affect your eligibility.</li>
          <li><strong>Be Financially Prepared:</strong> The proof of funds requirement is non-negotiable for many PR programs. Make sure you have the necessary funds readily available and accessible.</li>
          <li><strong>Seek Professional Guidance:</strong> The Canada PR process can be complex. Consider consulting with experienced immigration professionals like Global Visa Internationals to navigate the intricacies and maximize your chances of success.</li>
        </ol>
        ---
        <h2 className={styles.subTitle}>Top Considerations for Canadian PR: Beyond the Application</h2>
    
        <ul>
          <li><strong>Provincial Nominee Programs (PNPs):</strong>
            <ul>
              <li>Beyond federal programs, explore provincial nominee programs that align with your skills and offer potentially faster pathways to Canada PR. Many PNPs target specific occupations or have lower CRS score requirements.</li>
              <li>Understanding PNPs can significantly enhance your chances of successful Canadian immigration.</li>
            </ul>
          </li>
          <li><strong>Language Proficiency:</strong>
            <ul>
              <li>"Bonjour" or "Hello"! Strong English or French language skills are not just a requirement; they are crucial for thriving in Canada. Aim for the highest possible scores in your language tests to significantly boost your Canada PR application and future prospects.</li>
            </ul>
          </li>
          <li><strong>Settlement Plan:</strong>
            <ul>
              <li>Think beyond the application. Develop a clear plan for how you will integrate into Canadian society, including your job search strategy, housing arrangements, and how you'll engage with your new community.</li>
              <li>Research local resources and support services specifically for newcomers – Canada has many!</li>
            </ul>
          </li>
          <li><strong>Job Market Research:</strong>
            <ul>
              <li>Before making the move, research the job market in your target Canadian cities or provinces. This will help you assess the demand for your specific profession and tailor your job search efforts.</li>
              <li>Networking and early job search efforts, even before landing your Canada PR, can be incredibly beneficial.</li>
            </ul>
          </li>
          <li><strong>Climate and Lifestyle:</strong>
            <ul>
              <li>Canada experiences diverse climates, so be prepared for cold winters in many regions, especially if you're coming from a warmer climate.</li>
              <li>Embrace the unique Canadian lifestyle, which often includes a love for outdoor activities and a strong sense of community.</li>
            </ul>
          </li>
        </ul>
        ---
        <h2 className={styles.subTitle}>Additional Tips for Your Canadian Journey: Making the Most of Your PR</h2>
        <ol>
          <li><strong>Stay Updated:</strong> Canadian immigration policies can change. Regularly check the official IRCC website for the latest information and updates to ensure your application remains compliant.</li>
          <li><strong>Network:</strong> Connect with other immigrants and Canadians. Building a strong network can provide invaluable insights, support, and opportunities in your new home.</li>
          <li><strong>Be Patient:</strong> The Canada PR application process can take time. Patience, persistence, and a positive outlook are key throughout your journey.</li>
          <li><strong>Prepare for Interview (if applicable):</strong> Some PR streams may require an interview. Be prepared to discuss your application in detail and articulate your intentions for moving to Canada.</li>
          <li><strong>Maintain Valid Documents:</strong> Ensure your passport and all other required documents remain valid throughout the entire application process and beyond.</li>
          <li><strong>Embrace the Adventure:</strong> Moving to a new country is a significant step, full of challenges and incredible opportunities. Embrace the journey, learn from new experiences, and enjoy building your new life in Canada!</li>
        </ol>
    
    
    
        <div className={styles.formSection1}>
          <h4>Ready to start your journey to Canada? Contact Global Visa Internationals today for expert visa and documentation assistance!</h4>
          <h1 className={styles.subTitle}>Visa And Immigration Inquiry Form</h1>
          <form id="inquiry-form" onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div>
                <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div>
                <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
              </div>
            </div>
    
            <div className={styles.row}>
              <div>
                <select className={styles.select} name="country" required>
                  <option value="">Select Country</option>
                  {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <select className={styles.select} name="immigration_type" required>
                  <option value="">Select Immigration Type</option>
                  {["Work Visa", "Student Visa", "Visitor/Tourist Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
    
            <div className={styles.row}>
              <div>
                <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
              </div>
              <div>
                <select className={styles.select} name="age" required>
                  <option value="">Select Age</option>
                  <option value="18-45">18-45</option>
                  <option value="45+">45+</option>
                </select>
              </div>
            </div>
    
            <div className={styles.row}>
              <div>
                <select className={styles.select} name="education" required>
                  <option value="">Select Qualification</option>
                  {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                    <option key={edu} value={edu}>{edu}</option>
                  ))}
                </select>
              </div>
              <div>
                <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>
    
    
            <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
    
          </form>
          {showPopup && (
            <div className={styles.popupOverlay}>
              <div className={styles.popupContent}>
                <p>✅ Your form has been submitted successfully!</p>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
        ---
        <h2 className={styles.subTitle}>Applying for Canadian Permanent Residency: Your Pathways to Canada</h2>
        <p>Navigating the various routes to Canadian Permanent Residency can seem daunting, but we're here to simplify it. The most common programs for skilled workers seeking Canada PR include:</p>
        <ul>
          <li><strong>Express Entry:</strong> This is Canada's flagship online system, used by Immigration, Refugees and Citizenship Canada (IRCC) to manage applications for permanent residence under several key economic immigration programs. If you're a skilled worker, this is likely your primary route:
            <ul>
              <li><strong>Federal Skilled Worker Program (FSWP):</strong> For skilled workers with foreign work experience who want to immigrate to Canada permanently.</li>
              <li><strong>Federal Skilled Trades Program (FSTP):</strong> For skilled workers qualified in a skilled trade who want to become permanent residents in Canada.</li>
              <li><strong>Canadian Experience Class (CEC):</strong> For skilled workers who have Canadian work experience and want to become permanent residents.</li>
            </ul>
            Candidates create an online profile and receive a Comprehensive Ranking System (CRS) score based on factors like age, education, language proficiency (English and/or French), and work experience. The highest-ranking candidates receive an Invitation to Apply (ITA) for Canada PR.
          </li>
          <li><strong>Provincial Nominee Programs (PNPs):</strong> Each Canadian province and territory has its own Provincial Nominee Program. These programs allow provinces to nominate individuals who want to immigrate to Canada and are interested in settling in that particular province. Many PNPs are aligned with Express Entry, meaning a provincial nomination can significantly boost your CRS score, while others are base programs directly managed by the provinces. PNPs are an excellent way to secure Canada PR.</li>
          <li><strong>Family Sponsorship:</strong> If you have eligible family members who are Canadian citizens or permanent residents, they may be able to sponsor you to come to Canada as a permanent resident.</li>
          <li><strong>Quebec Skilled Worker Program (QSWP):</strong> Quebec has its own distinct immigration programs, separate from federal programs. Applicants wishing to reside in Quebec must apply through the QSWP.</li>
        </ul>
        <p><strong>Key Requirements (General for Skilled Worker Programs):</strong></p>
        <ul>
          <li><strong>Age:</strong> Generally, younger applicants score more points under the CRS.</li>
          <li><strong>Education:</strong> Higher education qualifications earn more points. An Educational Credential Assessment (ECA) is often required to prove your foreign credentials are valid in Canada.</li>
          <li><strong>Language Proficiency:</strong> Strong scores in an approved English (IELTS, CELPIP) or French (TEF Canada, TCF Canada) language test are absolutely crucial for your Canada PR application.</li>
          <li><strong>Skilled Work Experience:</strong> You'll need relevant work experience in a skilled occupation, categorized under Canada's National Occupational Classification (NOC) system (NOC 0, A, or B).</li>
          <li><strong>Adaptability Factors:</strong> These factors can earn you additional points, and include things like previous Canadian work experience, Canadian education, having relatives in Canada, and your spouse's qualifications.</li>
          <li><strong>Proof of Funds:</strong> Demonstrating sufficient funds to support yourself and your family upon arrival in Canada is a non-negotiable requirement for many programs (unless you have a valid job offer in Canada).</li>
        </ul>
        <p>Providing accurate information and all necessary documents is paramount to avoid delays or even rejection of your Canada PR application. That's where expert guidance comes in handy!</p>
    
        ---
        <h2 className={styles.subTitle}>Why Choose Global Visa Internationals? Your Trusted Partner for Canada PR</h2>
        <p>At Global Visa Internationals, we understand that the Canada PR application process can feel complex and overwhelming. That's why we're dedicated to making your journey to Canadian immigration smooth and stress-free. We offer comprehensive support, making us the preferred choice for aspiring permanent residents:</p>
        <ul>
          <li><strong>Personalized Guidance:</strong> Our team of experienced Canada PR consultants provides tailored support throughout your entire application journey, from your initial eligibility assessment to the final submission of your documents.</li>
          <li><strong>Expert Knowledge:</strong> The world of Canadian immigration is constantly evolving. We stay rigorously up-to-date with the latest visa regulations and program changes to ensure your application is always accurate, compliant, and complete.</li>
          <li><strong>Hassle-Free Process:</strong> Say goodbye to paperwork headaches! We handle the intricacies, guide you through each step, and assist with meticulous document preparation, saving you invaluable time and stress.</li>
          <li><strong>High Success Rate:</strong> Your success is our priority. We are committed to maximizing your chances of a successful Canada PR outcome with our meticulous approach and deep understanding of the immigration landscape.</li>
          <li><strong>Additional Services:</strong> Beyond core application support, we offer valuable services like strategies for CRS score improvement, practical job search assistance, and essential settlement advice to help you thrive in Canada.</li>
        </ul>
        <p>We at Global Visa Internationals are proud to be India's finest visa consultants. We're dedicated to turning your dreams of Canada PR into reality. With over 11+ years of experience as leading visa consultants in Bangalore, we have successfully processed over 55,000+ visas and offered over 75,000 expert visa advice sessions to date. You can confidently rely on our vast experience in Canada immigration consulting in India.</p>
        <p>Don't let the complexities of the Canada PR process hold you back! Let Global Visa Internationals be your trusted partner in navigating the application and planning your exciting new life in Canada. Contact us today for a free consultation and take the first step towards your Canadian dream!</p>
    
    
      </div>
    
      <div className={styles.formSection}>
    
        <h1 className={styles.subTitle}>Visa Inquiry Form</h1>
        <form id="inquiry-form" onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div>
              <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
            </div>
            <div>
              <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
            </div>
          </div>
    
          <div className={styles.row}>
            <div>
              <select className={styles.select} name="country" required>
                <option value="">Select Country</option>
                {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <select className={styles.select} name="immigration_type" required>
                <option value="">Select Immigration Type</option>
                {["Work Visa", "Student Visa", "Visitor/Tourist Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
    
          <div className={styles.row}>
            <div>
              <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
            </div>
            <div>
              <select className={styles.select} name="age" required>
                <option value="">Select Age</option>
                <option value="18-45">18-45</option>
                <option value="45+">45+</option>
              </select>
            </div>
          </div>
    
          <div className={styles.row}>
            <div>
              <select className={styles.select} name="education" required>
                <option value="">Select Qualification</option>
                {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                  <option key={edu} value={edu}>{edu}</option>
                ))}
              </select>
            </div>
            <div>
              <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
            </div>
          </div>
    
    
          <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
    
        </form>
        {showPopup && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <p>✅ Your form has been submitted successfully!</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
      <section id='Client Reviews'>
            
            <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
          </section>
    </>
  );
}