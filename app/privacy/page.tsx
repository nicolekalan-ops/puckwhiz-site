import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — PuckWhiz',
  description: 'How PuckWhiz collects, uses, and protects player and parent information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="PuckWhiz" className="h-8 w-8" />
            <span className="font-bold text-lg">PuckWhiz</span>
          </Link>
          <Link href="/" className="text-sm text-[#C8102E] hover:underline">← Back to site</Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: June 19, 2026</p>

        <Section title="1. About This Policy">
          <p>
            PuckWhiz (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates youth hockey challenge platforms for hockey associations.
            This Privacy Policy explains how we collect, use, and protect information about players and their parents or guardians.
          </p>
          <Callout>
            <strong>We take children&apos;s privacy seriously.</strong> Our platform is designed for youth athletes, including children under 13.
            We comply with the Children&apos;s Online Privacy Protection Act (COPPA) and applicable state privacy laws.
          </Callout>
        </Section>

        <Section title="2. Who We Are">
          <p>
            PuckWhiz is a product of <strong>Nsquared Insights, LLC</strong>. We provide a web-based platform that hockey associations license
            to run skill-development challenges for their players.
          </p>
          <p className="mt-3">
            The hockey association that invited your child to participate (e.g., HYHA, Hopkins Park) is a separate organization.
            They administer player accounts and are responsible for ensuring appropriate parental consent has been obtained.
          </p>
          <p className="mt-3">Contact us at: <a href="mailto:puckwhiz@gmail.com" className="text-[#C8102E] hover:underline">puckwhiz@gmail.com</a></p>
        </Section>

        <Section title="3. Information We Collect">
          <SubHeading>From players:</SubHeading>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Username (assigned by the association administrator)</li>
            <li>Display name (first name or nickname)</li>
            <li>Age group / division</li>
            <li>Activity data: skill drill completions, touch counts, shot locations, timestamps</li>
            <li>Optional: selfie photos submitted with drill completions</li>
          </ul>

          <SubHeading>From parents/guardians:</SubHeading>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Email address — used solely for activity approval notifications</li>
          </ul>

          <SubHeading>Automatically collected:</SubHeading>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Session tokens (stored as secure HTTP-only cookies, expire after 30 days)</li>
            <li>Standard server access logs (retained up to 90 days)</li>
          </ul>

          <SubHeading>We do <em>not</em> collect:</SubHeading>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Full legal names (unless a parent provides one as a display name)</li>
            <li>Phone numbers, physical addresses, or payment information</li>
            <li>Government IDs or Social Security numbers</li>
            <li>Precise geolocation</li>
          </ul>
        </Section>

        <Section title="4. Children Under 13 (COPPA)">
          <p>Our platform is used by children under 13. We take the following steps to protect their privacy:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-700">
            <li><strong>Accounts are created by association administrators</strong>, not by children themselves. Administrators are responsible for obtaining verifiable parental consent before creating an account.</li>
            <li><strong>We collect the minimum data necessary</strong> to operate the skill challenge.</li>
            <li><strong>Parent email addresses</strong> are used only to send activity approval notifications. Parents may contact us at <a href="mailto:puckwhiz@gmail.com" className="text-[#C8102E] hover:underline">puckwhiz@gmail.com</a> to review, correct, or delete their child&apos;s data, or to opt out of further data collection.</li>
            <li><strong>We do not allow children to post publicly identifiable information.</strong> Display names are first names or nicknames only.</li>
            <li><strong>Selfie photos are optional</strong> and stored securely. Parents may request deletion at any time.</li>
            <li><strong>We do not share children&apos;s information</strong> with third parties for marketing or advertising purposes.</li>
          </ul>
        </Section>

        <Section title="5. How We Use Information">
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Information</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Username, display name, age group', 'Authenticate and identify players within the platform'],
                ['Activity logs (touches, shots)', 'Display progress, calculate leaderboard rankings, generate achievement badges'],
                ['Parent email', 'Send approval request emails for drill submissions; send achievement notifications'],
                ['Selfie photos', 'Display on player achievement screen; optionally shared with association admin'],
                ['Session tokens', 'Maintain secure login sessions'],
              ].map(([info, purpose]) => (
                <tr key={info} className="border-b border-gray-100">
                  <td className="p-3 border border-gray-200 text-gray-700">{info}</td>
                  <td className="p-3 border border-gray-200 text-gray-700">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-gray-700">We do not use player data for advertising, profiling, or sale to third parties.</p>
        </Section>

        <Section title="6. How We Share Information">
          <SubHeading>Within the platform:</SubHeading>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Association administrators can view all player activity data for players in their organization.</li>
            <li>Leaderboard pages may display player display names and achievement counts publicly. No last names or contact information are shown.</li>
          </ul>

          <SubHeading>Third-party service providers:</SubHeading>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Provider</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Purpose</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Data shared</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Supabase (supabase.com)', 'Database and file storage', 'All platform data, stored in US data centers'],
                ['Vercel (vercel.com)', 'Web hosting', 'Server logs, request metadata'],
                ['Resend (resend.com)', 'Transactional email', 'Parent email address, player display name, approval link'],
              ].map(([provider, purpose, data]) => (
                <tr key={provider} className="border-b border-gray-100">
                  <td className="p-3 border border-gray-200 text-gray-700">{provider}</td>
                  <td className="p-3 border border-gray-200 text-gray-700">{purpose}</td>
                  <td className="p-3 border border-gray-200 text-gray-700">{data}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-gray-700">These providers are contractually bound to protect data and may not use it for their own purposes.</p>
          <p className="mt-2 text-gray-700"><strong>We do not sell personal information.</strong> We do not share data with advertisers, data brokers, or analytics companies.</p>
          <p className="mt-2 text-gray-700"><strong>Legal requirements:</strong> We may disclose information if required by law or to protect the safety of users.</p>
        </Section>

        <Section title="7. Data Retention">
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Data type</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Retention period</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Player accounts and activity data', '3 years after the player\'s last active season, then permanently deleted'],
                ['Parent email addresses', 'Until the associated player account is deleted'],
                ['Selfie photos', 'Until deleted by the player, parent, or administrator'],
                ['Session tokens', '30 days (automatic expiry)'],
                ['Server logs', '90 days'],
              ].map(([type, period]) => (
                <tr key={type} className="border-b border-gray-100">
                  <td className="p-3 border border-gray-200 text-gray-700">{type}</td>
                  <td className="p-3 border border-gray-200 text-gray-700">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-gray-700">
            Our platform operates on a per-season license (e.g., summer, fall, spring). Retaining data across seasons allows returning players to see their progress history. Associations may request full data deletion at any time by contacting us.
          </p>
        </Section>

        <Section title="8. Security">
          <p>We implement reasonable technical safeguards including:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3 text-gray-700">
            <li>Passwords hashed using PBKDF2 with SHA-256 (100,000 iterations) — plain-text passwords are never stored</li>
            <li>Session tokens are random values stored in HTTP-only, Secure cookies</li>
            <li>All data transmitted over HTTPS/TLS</li>
            <li>Database access protected by Row Level Security policies</li>
            <li>Admin database credentials never exposed to browsers</li>
          </ul>
          <p className="mt-3 text-gray-700">
            No system is perfectly secure. If you believe your account has been compromised, contact us immediately at{' '}
            <a href="mailto:puckwhiz@gmail.com" className="text-[#C8102E] hover:underline">puckwhiz@gmail.com</a>.
          </p>
        </Section>

        <Section title="9. Your Rights">
          <p>Parents and guardians of players under 13 have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-700">
            <li><strong>Access</strong> — request a copy of data we hold about your child</li>
            <li><strong>Deletion</strong> — request deletion of your child&apos;s account and all associated data</li>
            <li><strong>Correction</strong> — request correction of inaccurate data</li>
            <li><strong>Opt-out</strong> — refuse further data collection (requires account deactivation)</li>
          </ul>
          <p className="mt-3 text-gray-700">
            To exercise these rights, email{' '}
            <a href="mailto:puckwhiz@gmail.com" className="text-[#C8102E] hover:underline">puckwhiz@gmail.com</a>{' '}
            with your child&apos;s username and the name of their hockey association. We will respond within 10 business days.
          </p>
          <p className="mt-2 text-gray-700">Players 13 and older may exercise these rights directly.</p>
        </Section>

        <Section title="10. Cookies">
          <p>We use a single session cookie (<code className="bg-gray-100 px-1 rounded text-sm">hyha_session</code>) to keep players logged in. This cookie:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3 text-gray-700">
            <li>Is HTTP-only (not accessible to JavaScript)</li>
            <li>Is Secure (only sent over HTTPS in production)</li>
            <li>Expires after 30 days</li>
            <li>Contains only a random token — no personal data</li>
          </ul>
          <p className="mt-3 text-gray-700">We do not use advertising cookies, tracking pixels, or third-party analytics cookies.</p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this policy as the platform evolves. If we make material changes affecting how we handle children&apos;s data,
            we will notify association administrators by email at least 30 days before the change takes effect.
          </p>
        </Section>

        <Section title="12. Contact">
          <p className="text-gray-700">For privacy questions, data requests, or concerns:</p>
          <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-semibold">Nsquared Insights, LLC — PuckWhiz</p>
            <p className="text-gray-700 mt-1">Email: <a href="mailto:puckwhiz@gmail.com" className="text-[#C8102E] hover:underline">puckwhiz@gmail.com</a></p>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            For COPPA concerns, you may also contact the Federal Trade Commission:{' '}
            <a href="https://www.ftc.gov/tips-advice/business-center/guidance/complying-coppa-frequently-asked-questions" className="text-[#C8102E] hover:underline" target="_blank" rel="noopener noreferrer">
              ftc.gov/coppa
            </a>
          </p>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 px-6 mt-8">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Nsquared Insights, LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-gray-900 mt-4 mb-2">{children}</h3>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 p-4 bg-red-50 border-l-4 border-[#C8102E] rounded-r-lg text-gray-700">
      {children}
    </div>
  );
}
