import { useReveal } from '../hooks/useReveal';
import { BookOpen, Layers, Monitor, Users2, Sparkles } from 'lucide-react';

const workshops = [
  { icon: BookOpen, title: 'Beginner Tabla Classes', desc: 'Foundations, hand technique, and taal introduction.' },
  { icon: Layers, title: 'Advanced Training', desc: 'Layakari, compositions, and performance control.' },
  { icon: Monitor, title: 'Online Lessons', desc: 'Flexible guided practice for remote students.' },
  { icon: Users2, title: 'Offline Workshops', desc: 'In-person sessions for schools, institutes, and groups.' },
  { icon: Sparkles, title: 'Masterclasses', desc: 'Focused sessions on artistry, repertoire, and stagecraft.' },
];

export default function Workshops() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="workshops" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(ellipse 50% 40% at 80% 30%, rgba(200,85,61,0.12), transparent)' }}
      />
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-saffron-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Workshops</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
            Learn Tabla with structure, patience, and musical sensitivity.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workshops.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="group p-7 rounded-2xl border border-saffron-700/15 bg-ink-800/40 hover:bg-ink-800/70 hover:border-saffron-400/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-saffron-400/10 border border-saffron-400/20 flex items-center justify-center mb-5 group-hover:bg-saffron-400/20 transition-colors">
                  <Icon className="w-5 h-5 text-saffron-300" />
                </div>
                <h3 className="font-serif text-xl text-cream-50 mb-2">{w.title}</h3>
                <p className="text-sm text-cream-200/60 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
          <a
            href="#contact"
            className="group flex flex-col justify-center items-center p-7 rounded-2xl border border-dashed border-saffron-400/30 text-center hover:bg-saffron-400/5 transition-all"
          >
            <span className="font-serif text-xl text-saffron-300 mb-2">Enquire about lessons</span>
            <span className="text-sm text-cream-200/50 group-hover:text-cream-200/80 transition-colors">Reach out to begin your journey →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
