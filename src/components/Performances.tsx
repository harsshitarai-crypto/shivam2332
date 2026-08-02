import { useReveal } from '../hooks/useReveal';
import { Music, Mic2, Sparkles, Landmark, Church, Heart, Briefcase, Globe2, Users } from 'lucide-react';

const repertoire = [
  { icon: Music, title: 'Classical Concerts', desc: 'Elegant tabla accompaniment and rhythmic storytelling for formal classical evenings.' },
  { icon: Mic2, title: 'Solo Tabla Recitals', desc: 'Intricate taal explorations, improvisation, and commanding stage presence.' },
  { icon: Sparkles, title: 'Fusion Performances', desc: 'Modern collaborations that blend classical rhythm with contemporary expression.' },
  { icon: Landmark, title: 'Cultural Festivals', desc: 'Prestigious programming for festivals, institutions, and cultural showcases.' },
  { icon: Church, title: 'Temple Programs', desc: 'Devotional rhythms shaped for spiritual gatherings and sacred settings.' },
  { icon: Heart, title: 'Wedding Performances', desc: 'Refined live music for ceremonies, receptions, and luxury celebrations.' },
  { icon: Briefcase, title: 'Corporate Events', desc: 'Sophisticated musical experiences for premium brand and business events.' },
  { icon: Globe2, title: 'International Shows', desc: 'Indian classical rhythm presented for global audiences and diaspora events.' },
  { icon: Users, title: 'Music Collaborations', desc: 'Creative sessions with vocalists, instrumentalists, dancers, and ensembles.' },
];

export default function Performances() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="performances" className="relative py-28 md:py-36 bg-ink-950">
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-saffron-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Performance repertoire</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
            From sacred recitals to grand cultural stages.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repertoire.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl border border-saffron-700/15 bg-gradient-to-b from-ink-800/40 to-ink-900/40 hover:border-saffron-400/40 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-saffron-400/10 border border-saffron-400/20 flex items-center justify-center mb-5 group-hover:bg-saffron-400/20 transition-colors">
                  <Icon className="w-5 h-5 text-saffron-300" />
                </div>
                <h3 className="font-serif text-xl text-cream-50 mb-2">{item.title}</h3>
                <p className="text-sm text-cream-200/60 leading-relaxed">{item.desc}</p>
                <span className="absolute top-7 right-7 text-saffron-700/30 font-serif text-2xl group-hover:text-saffron-400/50 transition-colors">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
