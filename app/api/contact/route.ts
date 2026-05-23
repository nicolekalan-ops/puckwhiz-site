import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? 're_placeholder');
}

const FROM = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(request: NextRequest) {
  try {
    const { name, type, associationName, email, topic } = await request.json();

    if (!name || !email || !topic) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const topicLabels: Record<string, string> = {
      notify: 'Notify me when available for purchase',
      support: 'Current user support',
      general: 'General question',
    };

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f4f4;padding:32px;">
        <div style="background:#26419C;padding:24px;border-radius:8px 8px 0 0;text-align:center;">
          <h1 style="color:white;margin:0;font-size:22px;">PuckWhiz — New Contact Form Submission</h1>
        </div>
        <div style="background:white;padding:32px;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;font-size:14px;width:160px;">Name</td><td style="padding:8px 0;font-weight:bold;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:14px;">Type</td><td style="padding:8px 0;font-weight:bold;">${type === 'association' ? 'Association' : 'Individual'}</td></tr>
            ${type === 'association' ? `<tr><td style="padding:8px 0;color:#666;font-size:14px;">Association</td><td style="padding:8px 0;font-weight:bold;">${associationName ?? '—'}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#666;font-size:14px;">Email</td><td style="padding:8px 0;font-weight:bold;"><a href="mailto:${email}" style="color:#26419C;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;font-size:14px;">Topic</td><td style="padding:8px 0;font-weight:bold;">${topicLabels[topic] ?? topic}</td></tr>
          </table>
        </div>
        <p style="text-align:center;color:#999;font-size:12px;margin-top:16px;">Sent from puckwhiz.com contact form</p>
      </div>
    `;

    await getResend().emails.send({
      from: FROM,
      to: 'puckwhiz@gmail.com',
      replyTo: email,
      subject: `PuckWhiz Contact: ${topicLabels[topic] ?? topic} — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
