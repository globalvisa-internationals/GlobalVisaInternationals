import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, country, immigration_type, recaptchaToken } = body;

        // 1. Verify reCAPTCHA token (optional but recommended)
        // You can use the token to call Google's verify endpoint

        // 2. Store or forward the lead (e.g., to Google Sheets, email, CRM)
        console.log('Lead received:', { name, email, phone, country, immigration_type });

        // 3. Return success
        return NextResponse.json({ success: true, message: 'Lead saved' });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}