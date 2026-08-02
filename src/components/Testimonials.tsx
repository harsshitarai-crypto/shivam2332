import { useReveal } from '../hooks/useReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Shivam's playing carries both precision and prayer. The hall became silent in the best possible way.",
    author: 'Concert organizer',
  },
  {
    quote: 'A rare blend of classical discipline and contemporary stage understanding.',
    author: 'Fusion collaborator',
  },
  {
    quote: 'Students feel the tradition, not just the technique. His workshops are patient and inspiring.',
    author: 'Workshop host',
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-28 md:py-36 bg-ink-950">
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-saffron-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
            Words from listeners, collaborators, and organizers.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative p-8 rounded-2xl border border-saffron-700/15 bg-gradient-to-b from-ink-800/40 to-ink-900/40 hover:border-saffron-400/30 transition-all"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-saffron-400/40 mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-cream-100/90 leading-snug italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-saffron-300/80 uppercase tracking-[0.2em]">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
