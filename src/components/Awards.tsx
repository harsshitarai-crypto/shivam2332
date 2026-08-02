import { useReveal } from '../hooks/useReveal';
import { Award, Star, GraduationCap } from 'lucide-react';

const awards = [
  {
    icon: Award,
    title: 'Regional Classical Music Recognition',
    desc: 'Honored for expressive Tabla accompaniment and solo presentation.',
  },
  {
    icon: Star,
    title: 'Notable Festival Performances',
    desc: 'Featured across cultural stages, devotional gatherings, and public arts programs.',
  },
  {
    icon: GraduationCap,
    title: 'Teaching & Cultural Preservation',
    desc: 'Guiding students through foundational taal, practice discipline, and performance etiquette.',
  },
];

export default function Awards() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-28 md:py-36 bg-ink-950">
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-saffron-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Awards & recognition</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
            Milestones shaped by discipline and devotion.
          </h2>
          <p className="mt-6 text-cream-200/60 text-lg leading-relaxed">
            Recognition is treated as a responsibility: to deepen practice, honor the guru-shishya tradition, and carry Indian classical rhythm into meaningful spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="group p-8 rounded-2xl border border-saffron-700/15 bg-gradient-to-b from-ink-800/40 to-ink-900/40 hover:border-saffron-400/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-saffron-400/10 border border-saffron-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-saffron-300" />
                </div>
                <h3 className="font-serif text-xl text-cream-50 mb-3">{a.title}</h3>
                <p className="text-sm text-cream-200/60 leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
