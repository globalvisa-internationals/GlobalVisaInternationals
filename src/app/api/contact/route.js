// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration from environment variables
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@globalvisainternationals.com';
const TO_EMAIL = process.env.TO_EMAIL || process.env.EMAIL_TO || 'info@globalvisainternationals.com';

/**
 * Verify reCAPTCHA token with Google
 */
async function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.warn('RECAPTCHA_SECRET_KEY not set, skipping verification');
        return true; // Allow submission in development if key missing (optional)
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`,
    });
    const data = await response.json();
    return data.success === true;
}

/**
 * Send email using Resend
 */
async function sendLeadEmail(leadData) {
    const { name, email, phone, country, immigration_type } = leadData;

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Visa Consultation Lead</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; }
        h2 { color: #0383C9; margin-top: 0; }
        .field { margin-bottom: 16px; }
        .label { font-weight: bold; width: 140px; display: inline-block; color: #4a5568; }
        .value { display: inline-block; }
        hr { margin: 20px 0; border: none; border-top: 1px solid #e2e8f0; }
        .footer { font-size: 12px; color: #718096; text-align: center; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>📋 New Visa Consultation Request</h2>
        <div class="field"><span class="label">Name:</span> <span class="value">${escapeHtml(name)}</span></div>
        <div class="field"><span class="label">Email:</span> <span class="value">${escapeHtml(email)}</span></div>
        <div class="field"><span class="label">Phone:</span> <span class="value">${escapeHtml(phone)}</span></div>
        <div class="field"><span class="label">Destination:</span> <span class="value">${escapeHtml(country)}</span></div>
        <div class="field"><span class="label">Visa Type:</span> <span class="value">${escapeHtml(immigration_type)}</span></div>
        <hr />
        <p>Reply to this lead directly via email or phone.</p>
        <div class="footer">Sent from Global Visa Internationals website</div>
      </div>
    </body>
    </html>
  `;

    const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `New Visa Lead: ${name} - ${immigration_type}`,
        html: htmlContent,
        replyTo: email,
    });

    if (error) {
        console.error('Resend error:', error);
        throw new Error('Failed to send email');
    }
    return data;
}

// Simple XSS protection
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, country, immigration_type, recaptchaToken } = body;

        // Basic validation
        if (!name || !email || !phone || !country || !immigration_type) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Verify reCAPTCHA
        const isHuman = await verifyRecaptcha(recaptchaToken);
        if (!isHuman) {
            return NextResponse.json(
                { success: false, error: 'reCAPTCHA verification failed' },
                { status: 400 }
            );
        }

        // Send email via Resend
        await sendLeadEmail({ name, email, phone, country, immigration_type });

        // Optional: store lead in database (e.g., Prisma, MongoDB)
        // await prisma.lead.create({ data: { name, email, phone, country, visaType: immigration_type, createdAt: new Date() } });

        return NextResponse.json({ success: true, message: 'Lead submitted successfully' });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}