import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { MapPin, Mail, Instagram, Send, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const eventTypes = [
  'Classical Concert',
  'Solo Tabla Recital',
  'Fusion Performance',
  'Cultural Festival',
  'Temple Program',
  'Wedding Performance',
  'Corporate Event',
  'Workshop / Lesson',
  'Collaboration',
  'Other',
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    location: '',
    event_date: '',
    message: '',
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');
    const { error } = await supabase.from('bookings').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      event_type: form.event_type || null,
      location: form.location || null,
      event_date: form.event_date || null,
      message: form.message || null,
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', event_type: '', location: '', event_date: '', message: '' });
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(192,137,90,0.15), transparent)' }}
      />
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-saffron-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Bookings & collaborations</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
              Invite a timeless classical experience to your stage.
            </h2>
            <p className="mt-6 text-cream-200/60 text-lg leading-relaxed max-w-md">
              For concerts, cultural festivals, temple programs, weddings, workshops, and collaborations, share your event details and Shivam's team will respond with availability.
            </p>

            <a
              href="https://wa.me/917389878009"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Quick Contact
            </a>

            <div className="mt-12 space-y-5">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-saffron-400/10 border border-saffron-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-saffron-300" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-saffron-300/70 mb-1">Location</div>
                  <div className="text-cream-100">Sagar, Madhya Pradesh, India</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-saffron-400/10 border border-saffron-400/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-saffron-300" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-saffron-300/70 mb-1">Email</div>
                  <a href="mailto:shivamraimusic18@gmail.com" className="text-cream-100 hover:text-saffron-300 transition-colors">shivamraimusic18@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-saffron-400/10 border border-saffron-400/20 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4 text-saffron-300" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-saffron-300/70 mb-1">Instagram</div>
                  <a href="https://instagram.com/shivam.rai.official.01" target="_blank" rel="noreferrer" className="text-cream-100 hover:text-saffron-300 transition-colors">@shivam.rai.official.01</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 md:p-10 rounded-2xl border border-saffron-700/20 bg-ink-800/40 backdrop-blur-sm">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-saffron-300 mb-6" />
                <h3 className="font-serif text-2xl text-cream-50 mb-3">Booking request sent</h3>
                <p className="text-cream-200/60 max-w-sm">Thank you. Shivam's team will review your request and respond shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm text-saffron-300 hover:text-saffron-200 underline underline-offset-4"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" required>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="form-input"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="form-input"
                      placeholder="you@email.com"
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="form-input"
                      placeholder="+91 ..."
                    />
                  </Field>
                  <Field label="Event Type">
                    <select
                      value={form.event_type}
                      onChange={(e) => update('event_type', e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Location">
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => update('location', e.target.value)}
                      className="form-input"
                      placeholder="City / venue"
                    />
                  </Field>
                  <Field label="Date">
                    <input
                      type="date"
                      value={form.event_date}
                      onChange={(e) => update('event_date', e.target.value)}
                      className="form-input"
                    />
                  </Field>
                </div>
                <Field label="Message">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="form-input resize-none"
                    placeholder="Tell us about your event..."
                  />
                </Field>

                {status === 'error' && (
                  <p className="text-sm text-maroon-400">Something went wrong. Please try again or email directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-saffron-400 text-ink-950 font-medium hover:bg-saffron-300 transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Booking Request</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-saffron-300/70 mb-2">
        {label}{required && <span className="text-maroon-400"> *</span>}
      </span>
      {children}
    </label>
  );
}
