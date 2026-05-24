'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X, CheckCircle, Star, Users, BarChart2, Trophy, Mail, Shield } from 'lucide-react';

const ORGS = [
  { name: 'HYHA', url: 'https://hyha.puckwhiz.com' },
  { name: 'Hopkins Park Nordics', url: 'https://hopkinspark.puckwhiz.com' },
];

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  const [orgOpen, setOrgOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: '', type: 'association', associationName: '', email: '', topic: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const orgRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!form.topic) { setFormError('Please select a topic.'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Something went wrong. Please try again.');
      }
    } catch {
      setFormError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image src="/puckwhiz-transparent.png" alt="PuckWhiz" width={140} height={40} style={{ height: '36px', width: 'auto' }} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#26419C] transition-colors">{l.label}</a>
            ))}

            {/* Association Links dropdown */}
            <div className="relative" ref={orgRef}>
              <button
                onClick={() => setOrgOpen(!orgOpen)}
                className="flex items-center gap-1.5 bg-[#26419C] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1e337a] transition-colors"
              >
                Association Links
                <ChevronDown className={`w-4 h-4 transition-transform ${orgOpen ? 'rotate-180' : ''}`} />
              </button>
              {orgOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg py-2 w-56 z-50">
                  <p className="text-xs text-gray-400 px-4 py-1 font-medium uppercase tracking-wide">Select your organization</p>
                  {ORGS.map((org) => (
                    <a
                      key={org.url}
                      href={org.url}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#26419C] font-medium transition-colors"
                    >
                      {org.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-600">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-2">{l.label}</a>
            ))}
            <div className="border-t border-gray-100 pt-3">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-2">Association Links</p>
              {ORGS.map((org) => (
                <a key={org.url} href={org.url} className="block text-sm font-semibold text-[#26419C] py-2">{org.name} →</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="pt-16 min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #26419C 0%, #1a2d6e 60%, #0f1a42 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <Image src="/puckwhiz-transparent.png" alt="PuckWhiz" width={400} height={120} style={{ height: '120px', width: 'auto' }} />
            <div className="text-left">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-4">
                Great players are made<br />in driveways.
              </h1>
              <p className="text-xl sm:text-2xl text-blue-200 font-medium">
                You are just one summer away from being a PuckWhiz.
              </p>
            </div>
          </div>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto mb-10">
            Track your stickhandling and shooting reps all summer long — in your driveway, basement, or garage. Play baseball, enjoy summer, and still show up to fall tryouts with quicker hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="bg-white text-[#26419C] font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Learn More 🏒
            </a>
            <a href="#contact" className="border-2 border-white/50 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors">
              Get In Touch
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16">
            {[
              { val: '10,000', label: 'Touches Goal' },
              { val: '6,000', label: 'Shots Goal' },
              { val: '3 mo.', label: 'June – August' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-white">{s.val}</p>
                <p className="text-blue-300 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#26419C] font-semibold text-sm uppercase tracking-widest">About PuckWhiz</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Summer is when good players become great ones.</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              PuckWhiz isn&apos;t about sacrificing your summer — it&apos;s about making the most of it. 15 focused minutes a day in the driveway or basement is all it takes to come back sharper in the fall.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                emoji: '🏒',
                title: 'Built for Real Life',
                body: 'Play baseball, go on vacation, enjoy your summer. PuckWhiz fits into your schedule — not the other way around. Log reps whenever you get them.',
              },
              {
                emoji: '🎯',
                title: 'Skill That Sticks',
                body: 'USA Hockey\'s ADM recommends three quality practice reps for every game. PuckWhiz gives players a fun, structured way to build those reps all summer.',
              },
              {
                emoji: '🏆',
                title: 'Better for Your Team',
                body: 'This isn\'t about outworking anyone. It\'s about showing up in September with the confidence that comes from thousands of quality touches — ready to compete.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────── */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#26419C] font-semibold text-sm uppercase tracking-widest">Features</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Everything your association needs.</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: BarChart2, title: 'Activity Tracking', body: 'Players log stickhandling touches by drill type and shots by zone — forehand and backhand. Progress bars show how close they are to their goals.' },
              { icon: Users, title: 'Age Group Leaderboards', body: 'Live leaderboards by age group keep the energy going all summer. Players and parents can see where they stand within their team.' },
              { icon: Trophy, title: 'Achievement Badges', body: 'Hit milestones and unlock Silky Mitts, Dirty Dangles, Biscuit Beauty and more. Players can even submit a celebration selfie when they earn one!' },
              { icon: Shield, title: 'Parent Approval', body: 'Every log entry requires a parent to approve it via email — keeping activity honest and parents engaged in their player\'s development.' },
              { icon: Star, title: 'Association Branded', body: 'Each organization gets their own branded app with custom colors, logo, and age groups. Your players see your identity, not a generic app.' },
              { icon: Mail, title: 'Admin Dashboard', body: 'Coaches and admins can view all player activity, manage rosters, post announcements, and adjust settings — all in one place.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-200 flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#26419C]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-[#26419C] font-semibold text-sm uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Simple, association-based pricing.</h2>
          <p className="text-gray-500 text-lg mb-12">One flat rate per association per summer. No per-player fees. No hidden costs.</p>

          <div className="bg-gradient-to-br from-[#26419C] to-[#1a2d6e] rounded-3xl p-10 text-white shadow-2xl">
            <div className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              🚀 Coming Soon
            </div>
            <h3 className="text-3xl font-extrabold mb-2">Association Plan</h3>
            <p className="text-blue-200 mb-8">Full-season access for your entire association — all teams, all age groups.</p>
            <ul className="space-y-3 text-left max-w-xs mx-auto mb-8">
              {[
                'Unlimited players',
                'Custom association branding',
                'All age group leaderboards',
                'Parent approval system',
                'Admin dashboard',
                'Achievement badges & selfies',
                'Announcement board',
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block bg-white text-[#26419C] font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Get Notified When Available
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#26419C] font-semibold text-sm uppercase tracking-widest">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Get in touch.</h2>
            <p className="text-gray-500 mt-3">Interested in PuckWhiz for your association? Have a question? We&apos;d love to hear from you.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
              <p className="text-gray-500">Thanks for reaching out. We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#26419C]"
                />
              </div>

              {/* Association or Individual */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">I am a... *</label>
                <div className="flex gap-4">
                  {[{ val: 'association', label: 'Hockey Association' }, { val: 'individual', label: 'Individual / Parent' }].map((opt) => (
                    <label key={opt.val} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value={opt.val}
                        checked={form.type === opt.val}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="accent-[#26419C]"
                      />
                      <span className="text-sm text-gray-700">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Association name (conditional) */}
              {form.type === 'association' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Association Name</label>
                  <input
                    type="text"
                    value={form.associationName}
                    onChange={(e) => setForm({ ...form, associationName: e.target.value })}
                    placeholder="e.g. Edina Hockey Association"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#26419C]"
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#26419C]"
                />
              </div>

              {/* Topic */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Topic *</label>
                <select
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#26419C] bg-white"
                >
                  <option value="">Select a topic...</option>
                  <option value="notify">Notify me when it is available for purchase</option>
                  <option value="support">Current user support</option>
                  <option value="general">General question</option>
                </select>
              </div>

              {formError && <p className="text-red-600 text-sm">{formError}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#26419C] text-white font-bold py-3 rounded-xl text-sm hover:bg-[#1e337a] transition-colors disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Message 🏒'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#0f1a42] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/puckwhiz-transparent.png" alt="PuckWhiz" width={120} height={36} style={{ height: '32px', width: 'auto' }} />
          <p className="text-blue-300 text-sm">© 2026 PuckWhiz. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-blue-300">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
