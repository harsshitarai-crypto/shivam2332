import { useReveal } from '../hooks/useReveal';
import { MapPin, Ticket } from 'lucide-react';

const concerts = [
  { date: '18 Aug 2026', title: 'Classical Evening · Ravindra Bhavan', city: 'Bhopal' },
  { date: '07 Sep 2026', title: 'Temple Rhythm Offering · Shri Mandir Sabha', city: 'Sagar' },
  { date: '22 Oct 2026', title: 'Heritage Arts Festival · Open Air Theatre', city: 'Indore' },
];

export default function Concerts() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="concerts" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-saffron-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Upcoming concerts</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
            A living calendar of rhythm and gathering.
          </h2>
        </div>

        <div className="space-y-4">
          {concerts.map((c, i) => (
            <div
              key={c.title}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 rounded-2xl border border-saffron-700/15 bg-ink-800/30 hover:bg-ink-800/60 hover:border-saffron-400/30 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="md:w-40 shrink-0">
                <div className="font-serif text-2xl text-saffron-300">{c.date}</div>
              </div>
              <div className="flex-1">
                <div className="font-serif text-xl md:text-2xl text-cream-50">{c.title}</div>
                <div className="flex items-center gap-1.5 mt-2 text-cream-200/60 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-saffron-400/70" />
                  {c.city}
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-saffron-400/40 text-saffron-300 text-sm hover:bg-saffron-400/10 transition-colors self-start md:self-center"
              >
                <Ticket className="w-4 h-4" />
                Book Tickets
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
