'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import clsx from 'clsx';
import {
    FaCheckCircle,
    FaStar,
    FaMapMarkerAlt,
    FaArrowRight,
    FaPlayCircle,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import ReviewCarousel from "./ReviewCarousel";
import VisaForm from './VisaForm';

// ================= ANIMATION ON SCROLL COMPONENT =================
const AnimatedOnScroll = ({ children, direction = 'up', delay = 0, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, triggerOnce: true }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const directionClasses = {
        up: 'translate-y-10',
        down: '-translate-y-10',
        left: 'translate-x-10',
        right: '-translate-x-10',
        none: '',
    };

    return (
        <div
            ref={ref}
            className={clsx(
                'transition-all duration-700 ease-out',
                directionClasses[direction],
                isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0',
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// ================= GALLERY CAROUSEL COMPONENT =================
const GalleryCarousel = ({ slides = [], autoSlide = true, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = useCallback(() => {
        if (!autoSlide || slides.length === 0) return;
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, interval);
    }, [autoSlide, slides.length, interval]);

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [startAutoSlide]);

    const moveSlide = (direction) => {
        clearInterval(intervalRef.current);
        setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
        startAutoSlide();
    };

    const goToSlide = (index) => {
        clearInterval(intervalRef.current);
        setCurrentIndex(index);
        startAutoSlide();
    };

    if (slides.length === 0) return null;

    return (
        <div className="relative w-full overflow-hidden py-8">
            {/* Carousel Container */}
            <div className="relative flex justify-center items-center h-64 md:h-[450px]">
                {slides.map((src, index) => {
                    let positionClass = '';
                    let zIndex = '';
                    let transformClass = '';
                    let opacityClass = 'opacity-0';
                    let scaleClass = '';

                    if (index === currentIndex) {
                        positionClass = 'block';
                        zIndex = 'z-20';
                        transformClass = 'translate-x-0';
                        opacityClass = 'opacity-100';
                        scaleClass = 'scale-100';
                    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                        positionClass = 'block';
                        zIndex = 'z-10';
                        transformClass = '-translate-x-2/3 md:-translate-x-[60%]';
                        opacityClass = 'opacity-60';
                        scaleClass = 'scale-90 md:scale-85';
                    } else if (index === (currentIndex + 1) % slides.length) {
                        positionClass = 'block';
                        zIndex = 'z-10';
                        transformClass = 'translate-x-2/3 md:translate-x-[60%]';
                        opacityClass = 'opacity-60';
                        scaleClass = 'scale-90 md:scale-85';
                    } else {
                        positionClass = 'hidden';
                    }

                    return (
                        <div
                            key={index}
                            className={clsx(
                                'absolute transition-all duration-500 ease-in-out cursor-pointer',
                                'w-64 md:w-[450px] lg:w-[550px] h-48 md:h-[350px] lg:h-[400px]',
                                positionClass,
                                zIndex,
                                opacityClass,
                                transformClass,
                                scaleClass
                            )}
                        >
                            <img
                                src={src}
                                loading="lazy"
                                alt={`Gallery slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white/50"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => moveSlide(-1)}
                aria-label="Previous slide"
            >
                <FaChevronLeft className="text-gray-700 text-lg" />
            </button>
            <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => moveSlide(1)}
                aria-label="Next slide"
            >
                <FaChevronRight className="text-gray-700 text-lg" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={clsx(
                            'w-2.5 h-2.5 rounded-full transition-all duration-300',
                            index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// ================= MAIN HOME ABOUT COMPONENT =================
export default function HomeAbout() {
    // Gallery images - Replace with your actual image URLs
    const gallerySlides = [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
        // "https://images.unsplash.com/photo-1557425955-df376b88d5cb?w=800&h=500&fit=crop",
        // "https://images.unsplash.com/photo-1589578228447-e1a4e481c6b2?w=800&h=500&fit=crop",
        "/gallery/Travel-Poster.jpg",
        "/gallery/Germany-tourist-visa.jpg",
        "/gallery/UK-Travel.jpg",
        "/gallery/UK-Visa-Banner.jpg",
        "/gallery/5.jpg",
        "/gallery/6.jpg",
        "/gallery/7.jpg",
        "/gallery/8.jpg",
        "/gallery/9.jpg",
    ];


    // Inside your HomeAbout component, before the return statement
    const cards = [
        {
            title: 'Our Mission as Visa Consultants',
            description: 'Our mission is to provide clear and ethical visa and immigration guidance by assisting applicants with documentation, eligibility assessment, and application support. We focus on helping students, professionals, and families navigate international visa processes with accuracy and clarity.',
            iconSrc: '/gviVMV/mission-icon.png',
            iconAlt: 'Mission of Global Visa Internationals',
        },
        {
            title: 'Our Vision for Global Visa Services',
            description: 'Our vision is to be a reliable visa consultancy recognized for transparent processes, compliance with immigration regulations, and consistent client support across multiple countries and visa categories.',
            iconSrc: '/gviVMV/vision-icon.png',
            iconAlt: 'Vision of Global Visa Internationals',
        },
        {
            title: 'Our Core Values in Visa Consultancy',
            description: 'Transparency, accountability, empathy, and a client-first approach guide our work. We prioritize accuracy, ethical advisory practices, and respect for the regulations set by immigration authorities.',
            iconSrc: '/gviVMV/values-icon.png',
            iconAlt: 'Core values of Global Visa Internationals',
        },
    ];


    const faqs = [
        {
            question: "My visa was refused. Can I reapply?",
            answer: "Yes—just address the reasons for the refusal and reapply with the necessary documentation.",
        },
        {
            question: "How can I qualify for the Canada PR Visa Program?",
            answer: "Firstly, the candidate should have an eligible occupation under the NOC 0, A, and B for Canada PR Visa...",
        },
        {
            question: "Can my spouse work on a dependent visa?",
            answer: "It varies by country; some grant work rights automatically, while others require a separate permit.",
        },
        {
            question: "Can I work on a student visa?",
            answer: "Yes, often up to 20 hours per week during term time (and sometimes full-time during breaks).",
        },
        {
            question: "How long is the Portugal Job Seeker Visa valid for?",
            answer: "The visa is initially valid for 120 days. If you do not find a job within this period, it can be extended for an additional 60 days.",
        },
        {
            question: "Who is eligible for an Austrian job seeker visa?",
            answer: "To apply for an Austrian job seeker visa, you must be a Non-EU citizen, have a recognized higher education degree...",
        },
    ];

    const FAQAccordion = ({ faqs = [] }) => {
        const [activeIndex, setActiveIndex] = useState(null);

        useEffect(() => {
            if (faqs.length > 0) {
                const randomIndex = Math.floor(Math.random() * faqs.length);
                setActiveIndex(randomIndex);
            }
        }, [faqs]);

        const handleToggle = (index) => {
            if (activeIndex === index) return;
            setActiveIndex(index);
        };
    }
    return (
        <>
            {/* ================= CUSTOM STYLES FOR ANIMATIONS ================= */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>

            {/* ================= HERO SECTION ================= */}
            <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 min-h-[90vh] overflow-hidden py-8 px-4 md:px-8">
                {/* Background elements */}
                <div className="absolute inset-0 pointer-events-none opacity-15">
                    <img
                        src="https://www.globalvisainternationals.com/svg/World-Map.gif"
                        alt="World Map"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] text-3xl md:text-4xl animate-float">🇺🇸</div>
                    <div className="absolute top-[30%] right-[15%] text-3xl md:text-4xl animate-float animation-delay-1000">🇨🇦</div>
                    <div className="absolute top-[60%] left-[15%] text-3xl md:text-4xl animate-float animation-delay-2000">🇬🇧</div>
                    <div className="absolute top-[40%] right-[8%] text-3xl md:text-4xl animate-float animation-delay-3000">🇦🇺</div>
                    <div className="absolute top-[70%] right-[20%] text-3xl md:text-4xl animate-float animation-delay-4000">🇪🇺</div>
                </div>

                <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[70vh]">
                    {/* Left content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <FaStar className="text-yellow-400" />
                            <span>Trusted Visa Experts Since 2016</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                            Your Global Journey
                            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Starts Here</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-700 mt-4 font-semibold">
                            Premier Visa Consultancy in Bangalore for
                            <span className="text-blue-900 font-bold mx-1">USA</span>,
                            <span className="text-blue-900 font-bold mx-1">UK</span>,
                            <span className="text-blue-900 font-bold mx-1">Canada</span>,
                            <span className="text-blue-900 font-bold mx-1">Schengen</span>,
                            <span className="text-blue-900 font-bold mx-1">Australia</span>,
                            <span className="text-blue-900 font-bold mx-1">New Zealand</span> &
                            <span className="text-blue-900 font-bold mx-1">Japan</span> Visas
                        </h2>
                        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto lg:mx-0">
                            With 11+ years of expertise, we've successfully guided over 75,000 clients through complex visa processes.
                            Your passport to global opportunities begins with our certified immigration consultants.
                        </p>

                        {/* Stats bar */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 bg-white p-5 rounded-xl shadow-md mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900">11+</div>
                                <div className="text-sm text-gray-500">Years Experience</div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900">75K+</div>
                                <div className="text-sm text-gray-500">Successful Visas</div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900">98%</div>
                                <div className="text-sm text-gray-500">Success Rate</div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900">24/7</div>
                                <div className="text-sm text-gray-500">Support</div>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                            <a href="#consultation" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                                Get Free Consultation <FaArrowRight className="text-sm" />
                            </a>
                            <a href="#testimonials" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200">
                                <FaPlayCircle /> Watch Success Stories
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                            <div className="flex items-center gap-2 text-gray-700 text-sm">
                                <FaCheckCircle className="text-green-600" /> Licensed Consultants
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 text-sm">
                                <FaCheckCircle className="text-green-600" /> Transparent Pricing
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 text-sm">
                                <FaCheckCircle className="text-green-600" /> Personalized Support
                            </div>
                        </div>
                    </div>

                    {/* Right logo card */}
                    <VisaForm />
                </div>

                {/* Scrolling countries banner */}
                <div className="relative mt-12 bg-gradient-to-r from-blue-900 to-blue-700 py-3 overflow-hidden">
                    <div className="flex items-center gap-8 whitespace-nowrap animate-scroll">
                        <span className="text-white font-semibold">We Specialize In:</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">USA Visa 🇺🇸</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Canada Visa 🇨🇦</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">UK Visa 🇬🇧</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Australia Visa 🇦🇺</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Germany Visa 🇩🇪</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">France Visa 🇫🇷</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Italy Visa 🇮🇹</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Spain Visa 🇪🇸</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Singapore Visa 🇸🇬</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Dubai Visa 🇦🇪</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">New Zealand Visa 🇳🇿</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Japan Visa 🇯🇵</span>
                        {/* Duplicate for seamless loop */}
                        <span className="text-white font-semibold ml-8">We Specialize In:</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">USA Visa 🇺🇸</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Canada Visa 🇨🇦</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">UK Visa 🇬🇧</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Australia Visa 🇦🇺</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Germany Visa 🇩🇪</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">France Visa 🇫🇷</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Italy Visa 🇮🇹</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Spain Visa 🇪🇸</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Singapore Visa 🇸🇬</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Dubai Visa 🇦🇪</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">New Zealand Visa 🇳🇿</span>
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">Japan Visa 🇯🇵</span>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-4">
                            About Us
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Trusted Visa Consultants in Bangalore Since 2016
                        </h2>
                        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
                            Expert visa consultancy services for USA, Canada, UK, Schengen, Australia & New Zealand
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                                <img
                                    src="https://www.globalvisainternationals.com/images/story.webp"
                                    alt="Global Visa Internationals team"
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
                                    <div className="flex justify-between items-end text-white">
                                        <div>
                                            <div className="text-3xl font-bold">11+</div>
                                            <div className="text-sm">Years Experience</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">✓</div>
                                    <span className="text-sm font-medium text-gray-700">Verified Consultants</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                    <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">★</div>
                                    <span className="text-sm font-medium text-gray-700">98% Success Rate</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-2xl">🎓</span>
                                        <h4 className="font-semibold text-gray-800">Study Visa Experts</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">University admissions, scholarship guidance, and student visa processing</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-2xl">✈️</span>
                                        <h4 className="font-semibold text-gray-800">Tourist & Visitor Visa Experts</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">Tourist and visitor visa assistance for sightseeing, family visits, and short-term travel</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Global Visa Internationals:<br />
                                Best Visa Consultants in Bangalore
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Global Visa Internationals is a trusted visa consultancy in Bangalore, established in 2016 on Brigade Road.
                                We help Indian applicants successfully apply for tourist, student and business visas with expert guidance,
                                high success rates, and end-to-end documentation support.
                            </p>
                            <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-600 mb-6">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                                        <path d="M8 12L11 15L16 9" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">
                                    Our expertise includes <strong>USA B1/B2 visitor visas</strong>, <strong>Canada tourist visas</strong>,
                                    <strong> UK student visas</strong>, <strong>Schengen visas for Indians</strong>,
                                    <strong> Australia & New Zealand visitor visas</strong>.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="#consultation" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                                    Book Free Consultation <FaArrowRight />
                                </a>
                                <a href="#testimonials" className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200">
                                    View Success Stories
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY WE ARE THE BEST SECTION ================= */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-gradient-to-br from-blue-900/5 to-blue-600/5 rounded-full pointer-events-none" />
                <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why We Are One of the Best Visa Consultants in Bangalore
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                With over 11+ years of experience as trusted visa consultants in Bangalore,
                                Global Visa Internationals has helped thousands of Indian applicants successfully
                                secure visas for top global destinations with a proven, transparent process.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                From first-time travellers to international students and business visitors,
                                we provide end-to-end visa guidance, accurate documentation support,
                                and expert interview preparation to minimise rejection risks.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 pb-5 border-b border-gray-100 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Complete Visa Services Under One Roof</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Student Visa Documentation & University Application Support",
                                    "Tourist & Visitor Visa Processing for Indians",
                                    "Business Visa Assistance for International Travel",
                                    "Permanent Residency Guidance (Canada, Australia, UK)",
                                    "Family & Dependent Visa Applications",
                                    "Visa Refusal Review & Reapplication Strategy",
                                    "Profile Evaluation & Country Eligibility Check"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <span className="text-gray-700">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-4 pb-5 border-b border-gray-100 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M12 2C15.31 2 18 4.69 18 8C18 12.5 12 21 12 21C12 21 6 12.5 6 8C6 4.69 8.69 2 12 2Z" />
                                        <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Top Visa Destinations We Specialise In</h3>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    { flag: "🇨🇦", text: "<strong>Canada</strong> - Tourist, Student & PR Visa Consultants" },
                                    { flag: "🇦🇺", text: "<strong>Australia</strong> - Visitor & Permanent Residency Services" },
                                    { flag: "🇬🇧", text: "<strong>United Kingdom</strong> - UK Student & Tourist Visa Experts" },
                                    { flag: "🇺🇸", text: "<strong>United States</strong> - USA B1/B2 Visitor Visa Assistance" },
                                    { flag: "🇪🇺", text: "<strong>Europe</strong> - Schengen Visa for Indian Citizens" },
                                    { flag: "🇯🇵", text: "<strong>Japan</strong> - Tourist & Short-Term Visa Processing" },
                                    { flag: "🇨🇳", text: "<strong>China</strong> - Business & Visitor Visa Services" },
                                    { flag: "🇸🇬", text: "<strong>Singapore</strong> - Short-Term Visit Pass Support" },
                                    { flag: "🌍", text: "<strong>Global</strong> - Visa Services for 45+ Countries" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 py-1">
                                        <span className="text-xl flex-shrink-0">{item.flag}</span>
                                        <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.text }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Proven Results as Leading Visa Consultants in Bangalore
                        </h3>
                        <p className="text-gray-600">Quantifying our commitment to successful immigration outcomes</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {[
                            { icon: "👥", value: "30+ Years", desc: "Combined professional expertise in immigration consultancy" },
                            { icon: "🌎", value: "45+ Countries", desc: "Visa assistance across major global destinations" },
                            { icon: "📋", value: "20+ Categories", desc: "Specialized visa type expertise and processing" },
                            { icon: "✈️", value: "75,000+", desc: "Successful visa applications and consultations" },
                            { icon: "📅", value: "Since 2016", desc: "Trusted service excellence across India" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-5 text-center shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-3xl">
                                    {stat.icon}
                                </div>
                                <div className="text-xl font-bold text-blue-800 mb-1">{stat.value}</div>
                                <p className="text-sm text-gray-600">{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">🏆</span>
                            </div>
                            <p className="text-gray-700">
                                <strong>Certified Immigration Consultancy</strong> – Awarded for Excellence in Visa Processing
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= GALLERY SECTION ================= */}
            <AnimatedOnScroll direction="up" delay={100}>
                <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Success Gallery
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Real moments from our visa success stories and client celebrations
                            </p>
                        </div>
                        <GalleryCarousel
                            slides={gallerySlides}
                            autoSlide={true}
                            interval={4000}
                        />
                    </div>
                </section>
            </AnimatedOnScroll>



            {/* ================= MISSION, VISION & VALUES SECTION ================= */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-4">
                            Our Guiding Principles
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Mission, Vision & Core Values
                        </h2>
                        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
                            The driving force behind our commitment to excellence in visa consultancy
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="group flex-1 bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="w-20 h-20 mx-auto mb-5 relative">
                                    <img
                                        src={card.iconSrc}
                                        alt={card.iconAlt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ReviewCarousel />
            </section>

            {/* ================= VISA SERVICES FLIP CARDS ================= */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Visa Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            End-to-end visa assistance for every travel purpose
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Tourist Visa */}
                        <div className="group w-[250px] h-[350px] perspective-1000 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                                {/* Front */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <img src="/svg/Tourist-Visa.webp" alt="Tourist Visa" className="w-[110px] h-[110px] object-contain" />
                                        <h3 className="text-xl font-semibold text-teal-700">Tourist Visa</h3>
                                        <p className="text-sm text-gray-600">Quick & hassle-free tourist visa assistance.</p>
                                    </div>
                                </div>
                                {/* Back */}
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Tourist Visa</h3>
                                    <ul className="w-full max-w-[200px] space-y-2">
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/canada" className="text-teal-700 hover:text-white">CANADA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/australia" className="text-teal-700 hover:text-white">AUSTRALIA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/usa" className="text-teal-700 hover:text-white">USA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/united-kingdom" className="text-teal-700 hover:text-white">UK</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/europe" className="text-teal-700 hover:text-white">EUROPE</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/japan" className="text-teal-700 hover:text-white">JAPAN</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/dubai" className="text-teal-700 hover:text-white">DUBAI</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/tourist-visa/singapore" className="text-teal-700 hover:text-white">SINGAPORE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Business Visa */}
                        <div className="group w-[250px] h-[350px] perspective-1000 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <img src="/svg/business-visa.webp" alt="Business Visa" className="w-[110px] h-[110px] object-contain" />
                                        <h3 className="text-xl font-semibold text-teal-700">Business Visa</h3>
                                        <p className="text-sm text-gray-600">Professional support for business visas.</p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Business Visa</h3>
                                    <ul className="w-full max-w-[200px] space-y-2">
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/business-visa/canada" className="text-teal-700 hover:text-white">CANADA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/business-visa/australia" className="text-teal-700 hover:text-white">AUSTRALIA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/business-visa/uk" className="text-teal-700 hover:text-white">UK</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/business-visa/europe" className="text-teal-700 hover:text-white">EUROPE</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/business-visa/new-zealand" className="text-teal-700 hover:text-white">NEW ZEALAND</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* PR Visa */}
                        <div className="group w-[250px] h-[350px] perspective-1000 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <img src="/svg/PR-Visa.webp" alt="PR Visa" className="w-[110px] h-[110px] object-contain" />
                                        <h3 className="text-xl font-semibold text-teal-700">PR Visa</h3>
                                        <p className="text-sm text-gray-600">Guidance for permanent residency visas.</p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-3">PR Visa</h3>
                                    <ul className="w-full max-w-[200px] space-y-2">
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/permanent-residency-visa/canada-pr-visa" className="text-teal-700 hover:text-white">CANADA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/permanent-residency-visa/australia-pr-visa" className="text-teal-700 hover:text-white">AUSTRALIA</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Student Visa */}
                        <div className="group w-[250px] h-[350px] perspective-1000 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <img src="/svg/student-visa.webp" alt="Student Visa" className="w-[110px] h-[110px] object-contain" />
                                        <h3 className="text-xl font-semibold text-teal-700">Student Visa</h3>
                                        <p className="text-sm text-gray-600">Study abroad made simple and fast.</p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Student Visa</h3>
                                    <ul className="w-full max-w-[200px] space-y-2">
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/student-visa/canada" className="text-teal-700 hover:text-white">CANADA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/student-visa/australia" className="text-teal-700 hover:text-white">AUSTRALIA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/student-visa/usa" className="text-teal-700 hover:text-white">USA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/student-visa/uk" className="text-teal-700 hover:text-white">UK</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/student-visa/europe" className="text-teal-700 hover:text-white">EUROPE</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/student-visa/new-zealand" className="text-teal-700 hover:text-white">NEW ZEALAND</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Dependent Visa */}
                        <div className="group w-[250px] h-[350px] perspective-1000 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <img src="/svg/Dependent Visa.webp" alt="Dependent Visa" className="w-[110px] h-[110px] object-contain" />
                                        <h3 className="text-xl font-semibold text-teal-700">Dependent Visa</h3>
                                        <p className="text-sm text-gray-600">Bring your family to live with you abroad.</p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Dependent Visa</h3>
                                    <ul className="w-full max-w-[200px] space-y-2">
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/Dependent/canada" className="text-teal-700 hover:text-white">CANADA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/Dependent/australia" className="text-teal-700 hover:text-white">AUSTRALIA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/Dependent/uk" className="text-teal-700 hover:text-white">UK</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/Dependent/europe" className="text-teal-700 hover:text-white">EUROPE</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/Dependent/new-zealand" className="text-teal-700 hover:text-white">NEW ZEALAND</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Refusal Visa */}
                        <div className="group w-[250px] h-[350px] perspective-1000 hover:-translate-y-1 transition-transform duration-300">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <img src="/svg/refusal visa.webp" alt="Refusal Visa" className="w-[110px] h-[110px] object-contain" />
                                        <h3 className="text-xl font-semibold text-teal-700">Refusal Visa</h3>
                                        <p className="text-sm text-gray-600">Get expert help to overcome visa refusals.</p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl border-2 border-teal-600 bg-white p-4 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Refusal Visa</h3>
                                    <ul className="w-full max-w-[200px] space-y-2">
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/canada" className="text-teal-700 hover:text-white">CANADA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/australia" className="text-teal-700 hover:text-white">AUSTRALIA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/usa" className="text-teal-700 hover:text-white">USA</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/uk" className="text-teal-700 hover:text-white">UK</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/europe" className="text-teal-700 hover:text-white">EUROPE</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/japan" className="text-teal-700 hover:text-white">JAPAN</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/dubai" className="text-teal-700 hover:text-white">DUBAI</a></li>
                                        <li className="border-b border-dotted border-gray-400 py-1 hover:bg-teal-600 hover:rounded transition"><a href="/Visa/refusal-visa/singapore" className="text-teal-700 hover:text-white">SINGAPORE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ + Map Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-start">
                {/* Left: FAQ Accordion */}
                <div className="bg-white rounded-2xl shadow-lg">
                    <FAQAccordion faqs={faqs} />
                </div>

                {/* Right: Google Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px]">
                    <iframe
                        className="w-full h-full min-h-[500px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.00853848403034!2d77.60577367689068!3d12.967480835531479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5613d9a4b%3A0xea0b2fbdf4f08876!2sGlobal%20Visa%20Internationals!5e0!3m2!1sen!2sin!4v1741000774951!5m2!1sen!2sin"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Global Visa Internationals Office Map"
                    ></iframe>
                </div>
            </section>

        </>
    );
}