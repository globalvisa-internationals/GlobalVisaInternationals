// src/components/InterestTracker.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { setCookie, getCookie } from "@/lib/cookies";

/**
 * ADVANCED INTEREST TRACKER WITH BUSINESS INTEGRATIONS
 * 
 * Capabilities:
 * 1. Update homepage hero based on interest
 * 2. Reorder services dynamically
 * 3. Trigger WhatsApp CTA at right moment
 * 4. Activate remarketing pixels
 * 5. Feed Meta/Google custom audiences
 * 6. Personalize email follow-ups
 * 7. Detect application-ready users
 */
export default function InterestTracker({
    country,
    pageType = "generic",
    serviceCategory = null,
    userIntent = null,
    campaignId = null
}) {
    const startTime = useRef(null);
    const engagementEvents = useRef([]);
    const scrollDepth = useRef(0);
    const interactionCount = useRef(0);
    const [interestTriggers, setInterestTriggers] = useState({
        whatsappTriggered: false,
        remarketingActivated: false,
        customAudienceFed: false,
        emailTriggered: false,
        applyDetected: false
    });

    // Business configuration
    const businessConfig = {
        // WhatsApp trigger thresholds
        whatsapp: {
            highInterest: 180, // seconds
            mediumInterest: 90,
            scrollThreshold: 75, // percentage
            productViews: 3
        },

        // Remarketing pixel rules
        remarketing: {
            minTime: 60, // seconds
            minEngagement: 3 // events
        },

        // Custom audience rules (Meta/Google)
        customAudience: {
            qualificationTime: 120, // seconds
            qualificationScore: 60 // engagement score
        },

        // Application detection
        applicationReady: {
            timeThreshold: 300, // 5 minutes
            engagementThreshold: 10,
            completionActions: ['form_submit', 'pricing_view', 'demo_request']
        },

        // Email personalization triggers
        emailTriggers: {
            timeSpent: 180,
            pagesViewed: 3,
            interestLevel: 'medium'
        }
    };

    // Initialize tracking
    useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
            console.log(`[BusinessTracker] Active for ${country}, Page: ${pageType}`);
            return;
        }

        startTime.current = Date.now();

        // Initialize business tracking
        initializeBusinessTracking();

        // Setup comprehensive event listeners
        const cleanup = setupBusinessEventListeners();

        return () => {
            cleanup();
            finalizeBusinessTracking(country);
        };
    }, [country, pageType]);

    // Initialize business tracking systems
    const initializeBusinessTracking = () => {
        // Set initial business context cookie
        setCookie(`gvi_business_${country}_context`, JSON.stringify({
            startTime: new Date().toISOString(),
            pageType,
            serviceCategory,
            userIntent,
            campaignId,
            sessionId: generateSessionId()
        }), 1); // Session cookie

        // Check for existing interest to personalize immediately
        const existingInterest = getCookie(`gvi_interest_${country}`);
        if (existingInterest) {
            personalizeExperienceImmediately(existingInterest);
        }

        // Initialize remarketing pixels
        initializeRemarketingPixels();
    };

    // Setup event listeners for business intelligence
    const setupBusinessEventListeners = () => {
        // Scroll tracking
        const handleScroll = throttle(() => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            scrollDepth.current = Math.max(scrollDepth.current, (scrolled / scrollable) * 100);

            // Trigger hero update on scroll milestones
            if (scrollDepth.current > 30 && !engagementEvents.current.includes('scroll_30')) {
                engagementEvents.current.push('scroll_30');
                triggerHeroUpdate('scrolled_30');
            }

            if (scrollDepth.current > 50 && !engagementEvents.current.includes('scroll_50')) {
                engagementEvents.current.push('scroll_50');
                reorderServicesBasedOnInterest();
            }

            if (scrollDepth.current > 75 && !engagementEvents.current.includes('scroll_75')) {
                engagementEvents.current.push('scroll_75');
                if (!interestTriggers.whatsappTriggered) {
                    triggerWhatsAppCTA('scroll_engagement');
                }
            }
        }, 100);

        // Click tracking for business insights
        const handleClick = (event) => {
            interactionCount.current += 1;

            // Track specific business-relevant clicks
            const element = event.target;
            const clickType = detectClickType(element);

            engagementEvents.current.push(`click_${clickType}`);

            // Detect application-ready behavior
            if (isApplicationSignal(clickType)) {
                detectApplicationReadyUser(clickType);
            }

            // Reorder services based on clicked service
            if (clickType === 'service_click') {
                const serviceId = element.closest('[data-service-id]')?.dataset.serviceId;
                if (serviceId) {
                    updateServicePreference(serviceId);
                }
            }
        };

        // Form interactions
        const handleFormInteraction = (event) => {
            if (event.target.matches('input, textarea, select')) {
                engagementEvents.current.push('form_interaction');

                // Trigger email personalization on form interaction
                if (!interestTriggers.emailTriggered) {
                    preparePersonalizedEmail();
                }
            }
        };

        // Time-based triggers
        const timeInterval = setInterval(() => {
            const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);

            // Check business triggers based on time
            checkTimeBasedTriggers(timeSpent);

        }, 5000); // Check every 5 seconds

        // Add listeners
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClick);
        document.addEventListener('input', handleFormInteraction);
        document.addEventListener('change', handleFormInteraction);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('input', handleFormInteraction);
            document.removeEventListener('change', handleFormInteraction);
            clearInterval(timeInterval);
        };
    };

    // === BUSINESS INTEGRATION FUNCTIONS ===

    // 1. UPDATE HOMEPAGE HERO
    const triggerHeroUpdate = (triggerReason) => {
        const interestLevel = calculateCurrentInterest();
        const userProfile = getUserProfile();

        // Determine which hero variant to show
        const heroVariant = determineHeroVariant(interestLevel, userProfile);

        // Update hero via cookie that CSS/JS can read
        setCookie('gvi_hero_variant', heroVariant, 1, {
            secure: true,
            sameSite: 'Lax'
        });

        // Trigger DOM update (if using React state)
        if (window.updateHeroVariant) {
            window.updateHeroVariant(heroVariant);
        }

        // Log for analytics
        logBusinessEvent('hero_updated', {
            variant: heroVariant,
            reason: triggerReason,
            interestLevel,
            scrollDepth: scrollDepth.current
        });
    };

    const determineHeroVariant = (interestLevel, userProfile) => {
        // Business logic for hero personalization
        if (interestLevel === 'high') {
            return userProfile.country === 'IN' ? 'indian_enterprise' : 'enterprise';
        }

        if (engagementEvents.current.includes('service_click')) {
            const service = getMostClickedService();
            return `service_${service}_focused`;
        }

        if (scrollDepth.current > 50) {
            return 'detailed_engagement';
        }

        return 'default';
    };

    // 2. REORDER SERVICES
    const reorderServicesBasedOnInterest = () => {
        const interestData = getAggregatedInterestData();
        const preferredServices = calculateServicePreference(interestData);

        // Set cookie for service order
        setCookie('gvi_service_order', JSON.stringify(preferredServices), 7, {
            secure: true,
            sameSite: 'Lax'
        });

        // Update localStorage for immediate frontend use
        localStorage.setItem('preferredServices', JSON.stringify(preferredServices));

        // Dispatch event for components to react
        window.dispatchEvent(new CustomEvent('servicesReordered', {
            detail: { services: preferredServices }
        }));

        logBusinessEvent('services_reordered', { services: preferredServices });
    };

    const updateServicePreference = (serviceId) => {
        const serviceKey = `gvi_service_${serviceId}_interest`;
        const currentWeight = parseInt(getCookie(serviceKey) || '0');

        // Increase weight for this service
        setCookie(serviceKey, (currentWeight + 10).toString(), 30, {
            secure: true,
            sameSite: 'Lax'
        });

        // Immediately update service display
        highlightService(serviceId);
    };

    // 3. TRIGGER WHATSAPP CTA
    const triggerWhatsAppCTA = (triggerSource) => {
        if (interestTriggers.whatsappTriggered) return;

        const userData = getUserProfile();
        const interestLevel = calculateCurrentInterest();

        // Determine WhatsApp message based on user interest
        const messageTemplate = getWhatsAppTemplate(interestLevel, userData);

        // Show WhatsApp CTA
        showWhatsAppWidget(messageTemplate);

        // Mark as triggered
        setInterestTriggers(prev => ({ ...prev, whatsappTriggered: true }));

        // Set cookie to prevent repeated triggers
        setCookie('gvi_whatsapp_triggered', 'true', 24, { // 24 hours
            secure: true,
            sameSite: 'Lax'
        });

        logBusinessEvent('whatsapp_cta_triggered', {
            source: triggerSource,
            interestLevel,
            template: messageTemplate
        });
    };

    const showWhatsAppWidget = (message) => {
        // Implementation depends on your WhatsApp widget
        if (window.showWhatsAppCTA) {
            window.showWhatsAppCTA(message);
        } else {
            // Fallback: update a data attribute for CSS to show
            document.body.setAttribute('data-whatsapp-cta', 'active');
            document.body.setAttribute('data-whatsapp-message', encodeURIComponent(message));
        }
    };

    // 4. ACTIVATE REMARKETING PIXELS
    const activateRemarketingPixels = () => {
        if (interestTriggers.remarketingActivated) return;

        const pixelData = {
            page_view: window.location.pathname,
            time_spent: Math.floor((Date.now() - startTime.current) / 1000),
            engagement_score: calculateEngagementScore(),
            interest_level: calculateCurrentInterest(),
            country,
            service_interests: getServiceInterests()
        };

        // Meta Pixel
        if (window.fbq) {
            window.fbq('track', 'ViewContent', pixelData);
            window.fbq('track', 'Lead', pixelData);
        }

        // Google Ads
        if (window.gtag) {
            window.gtag('event', 'remarketing_qualify', pixelData);
        }

        // LinkedIn Insight Tag
        if (window.lintrk) {
            window.lintrk('track', { conversion_id: 'YOUR_CONVERSION_ID' });
        }

        // Twitter Pixel
        if (window.twq) {
            window.twq('event', 'tw-odz8r-od0lo', pixelData);
        }

        setInterestTriggers(prev => ({ ...prev, remarketingActivated: true }));

        logBusinessEvent('remarketing_activated', pixelData);
    };

    // 5. FEED META & GOOGLE CUSTOM AUDIENCES
    const feedCustomAudiences = () => {
        if (interestTriggers.customAudienceFed) return;

        const userHash = generateUserHash();
        const audienceData = {
            email_hash: userHash.email,
            phone_hash: userHash.phone,
            country,
            interests: getAudienceInterests(),
            engagement_tier: calculateEngagementTier(),
            service_affinity: getTopServices(3)
        };

        // Feed Meta Custom Audience
        if (window.fbq) {
            window.fbq('trackCustom', 'CustomAudience', audienceData);
        }

        // Feed Google Ads Customer Match
        fetch('/api/audience-feed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                platform: 'google',
                audience_type: 'engagement_audience',
                data: audienceData
            })
        });

        // Feed LinkedIn Matched Audiences
        fetch('/api/audience-feed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                platform: 'linkedin',
                audience_type: 'website_engagement',
                data: audienceData
            })
        });

        setInterestTriggers(prev => ({ ...prev, customAudienceFed: true }));
    };

    // 6. PERSONALIZE EMAIL FOLLOW-UPS
    const preparePersonalizedEmail = () => {
        if (interestTriggers.emailTriggered) return;

        const emailData = {
            user_id: getUserId(),
            session_data: getSessionData(),
            interests: getEmailInterests(),
            trigger_points: engagementEvents.current,
            personalization_hooks: generateEmailPersonalization()
        };

        // Send to email automation system
        fetch('/api/email-automation/trigger', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emailData)
        });

        setInterestTriggers(prev => ({ ...prev, emailTriggered: true }));

        logBusinessEvent('email_triggered', { data: emailData });
    };

    // 7. DETECT APPLICATION-READY USERS
    const detectApplicationReadyUser = (signalType) => {
        if (interestTriggers.applyDetected) return;

        const readinessScore = calculateReadinessScore();

        if (readinessScore >= 80) {
            // User is likely ready to apply
            const applicationData = {
                user_profile: getUserProfile(),
                readiness_score: readinessScore,
                trigger_signals: getApplicationSignals(),
                recommended_products: getRecommendedProducts(),
                optimal_contact_time: calculateOptimalContactTime()
            };

            // Flag user for sales team
            setCookie('gvi_application_ready', 'true', 7, {
                secure: true,
                sameSite: 'Lax'
            });

            // Send to CRM
            fetch('/api/crm/qualified-lead', {
                method: 'POST',
                body: JSON.stringify(applicationData)
            });

            // Trigger immediate follow-up sequence
            triggerImmediateFollowUp(applicationData);

            setInterestTriggers(prev => ({ ...prev, applyDetected: true }));

            logBusinessEvent('application_ready_detected', applicationData);
        }
    };

    // Time-based trigger checks
    const checkTimeBasedTriggers = (timeSpent) => {
        const engagementScore = calculateEngagementScore();

        // WhatsApp CTA based on time
        if (!interestTriggers.whatsappTriggered &&
            timeSpent >= businessConfig.whatsapp.mediumInterest) {
            triggerWhatsAppCTA('time_engaged');
        }

        // Remarketing pixels
        if (!interestTriggers.remarketingActivated &&
            timeSpent >= businessConfig.remarketing.minTime &&
            engagementEvents.current.length >= businessConfig.remarketing.minEngagement) {
            activateRemarketingPixels();
        }

        // Custom audiences
        if (!interestTriggers.customAudienceFed &&
            timeSpent >= businessConfig.customAudience.qualificationTime &&
            engagementScore >= businessConfig.customAudience.qualificationScore) {
            feedCustomAudiences();
        }

        // Application detection
        if (!interestTriggers.applyDetected &&
            timeSpent >= businessConfig.applicationReady.timeThreshold &&
            engagementEvents.current.length >= businessConfig.applicationReady.engagementThreshold) {
            detectApplicationReadyUser('time_engagement');
        }
    };

    // Finalize tracking
    const finalizeBusinessTracking = (countryCode) => {
        if (!startTime.current) return;

        const totalTime = Math.floor((Date.now() - startTime.current) / 1000);
        const interestLevel = calculateCurrentInterest();
        const engagementScore = calculateEngagementScore();

        // Set comprehensive interest cookie
        setComprehensiveInterestCookie(countryCode, interestLevel, {
            timeSpent: totalTime,
            engagementScore,
            scrollDepth: scrollDepth.current,
            interactions: interactionCount.current,
            businessTriggers: interestTriggers,
            events: engagementEvents.current,
            finalInterest: interestLevel
        });

        // Send final analytics
        sendBusinessAnalytics({
            country: countryCode,
            totalTime,
            interestLevel,
            engagementScore,
            triggersActivated: interestTriggers,
            exitIntent: detectExitIntent(),
            conversionProbability: calculateConversionProbability()
        });

        // Update business intelligence
        updateBusinessIntelligence(countryCode, interestLevel, totalTime, engagementScore);
    };

    // === HELPER FUNCTIONS ===

    const calculateEngagementScore = () => {
        let score = 0;
        score += Math.min(scrollDepth.current / 2, 30); // Max 30
        score += Math.min(interactionCount.current * 3, 30); // Max 30
        score += Math.min(engagementEvents.current.length * 2, 20); // Max 20
        score += Math.min((Date.now() - startTime.current) / 1000 / 10, 20); // Max 20
        return Math.min(score, 100);
    };

    const calculateCurrentInterest = () => {
        const engagementScore = calculateEngagementScore();
        const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);

        if (engagementScore >= 70 || timeSpent >= 180) return 'high';
        if (engagementScore >= 40 || timeSpent >= 60) return 'medium';
        if (timeSpent >= 15) return 'low';
        return 'none';
    };

    const calculateReadinessScore = () => {
        let score = 0;

        // Time spent
        const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
        score += Math.min(timeSpent / 5, 20); // Max 20

        // Engagement
        score += Math.min(engagementEvents.current.length * 3, 30); // Max 30

        // Scroll depth
        score += Math.min(scrollDepth.current / 3, 20); // Max 20

        // Specific application signals
        const appSignals = engagementEvents.current.filter(e =>
            e.includes('pricing') ||
            e.includes('demo') ||
            e.includes('contact') ||
            e.includes('apply')
        ).length;
        score += appSignals * 10; // Max 30

        return Math.min(score, 100);
    };

    const getServiceInterests = () => {
        const cookies = document.cookie.split(';');
        const serviceInterests = {};

        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name.startsWith('gvi_service_') && name.endsWith('_interest')) {
                const serviceId = name.replace('gvi_service_', '').replace('_interest', '');
                serviceInterests[serviceId] = parseInt(value) || 0;
            }
        });

        return serviceInterests;
    };

    const generateUserHash = () => {
        // Generate hashed identifiers for privacy
        const email = getCookie('user_email') || '';
        const phone = getCookie('user_phone') || '';

        return {
            email: email ? btoa(email).slice(0, 32) : null,
            phone: phone ? btoa(phone).slice(0, 32) : null
        };
    };

    const setComprehensiveInterestCookie = (countryCode, level, metadata) => {
        const cookieName = `gvi_interest_${countryCode}`;
        const cookieValue = `${level}:${Date.now()}`;

        setCookie(cookieName, cookieValue, 90, {
            secure: true,
            sameSite: "Lax"
        });

        // Set metadata for business use
        setCookie(`${cookieName}_business`, JSON.stringify(metadata), 7, {
            secure: true,
            sameSite: "Lax"
        });
    };

    const logBusinessEvent = (eventName, data) => {
        fetch('/api/business-events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event: eventName,
                timestamp: Date.now(),
                country,
                pageType,
                ...data
            })
        }).catch(() => {/* Silent fail */ });
    };

    // Throttle function for performance
    const throttle = (func, limit) => {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // Generate session ID
    const generateSessionId = () => {
        return 'sesh_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    };

    // Return minimal component (invisible tracker)
    return null;
}

// Additional business utility functions
export const businessUtils = {
    // Get user's interest-based service recommendations
    getRecommendedServices: () => {
        const serviceInterests = getServiceInterests();
        return Object.entries(serviceInterests)
            .sort(([, a], [, b]) => b - a)
            .map(([service]) => service)
            .slice(0, 5);
    },

    // Check if user qualifies for WhatsApp outreach
    shouldTriggerWhatsApp: () => {
        const interestCookie = getCookie('gvi_interest_IN');
        if (!interestCookie) return false;

        const [level, timestamp] = interestCookie.split(':');
        const age = Date.now() - parseInt(timestamp);

        return (level === 'high' && age < 86400000) || // High interest in last 24h
            (level === 'medium' && age < 3600000); // Medium interest in last hour
    },

    // Get user's business profile for personalization
    getBusinessProfile: () => {
        const profile = JSON.parse(getCookie('gvi_business_profile') || '{}');
        return {
            industry: profile.industry || 'unknown',
            companySize: profile.companySize || 'unknown',
            interestLevel: profile.interestLevel || 'low',
            lastEngagement: profile.lastEngagement || null,
            preferredServices: JSON.parse(getCookie('gvi_service_order') || '[]')
        };
    }
};

// Hook for accessing interest data in components
export function useBusinessInterest(country) {
    const [businessData, setBusinessData] = useState(null);

    useEffect(() => {
        if (!country) return;

        const interestCookie = getCookie(`gvi_interest_${country}`);
        const businessCookie = getCookie(`gvi_interest_${country}_business`);

        if (interestCookie && businessCookie) {
            const [level, timestamp] = interestCookie.split(':');
            const metadata = JSON.parse(businessCookie);

            setBusinessData({
                level,
                timestamp: parseInt(timestamp),
                metadata,
                shouldShowWhatsApp: businessUtils.shouldTriggerWhatsApp(),
                recommendedServices: businessUtils.getRecommendedServices(),
                businessProfile: businessUtils.getBusinessProfile()
            });
        }
    }, [country]);

    return businessData;
}

// Configuration for different pages
export const interestConfig = {
    homepage: {
        heroUpdates: true,
        serviceReordering: true,
        whatsappDelay: 90, // seconds
        remarketingDelay: 60
    },
    servicePage: {
        detailedTracking: true,
        competitorComparison: true,
        pricingInterest: true,
        demoRequests: true
    },
    pricingPage: {
        applicationDetection: true,
        immediateWhatsApp: true,
        emailFollowUp: true,
        salesAlert: true
    },
    blog: {
        contentAffinity: true,
        newsletterTriggers: true,
        topicInterest: true
    }
};