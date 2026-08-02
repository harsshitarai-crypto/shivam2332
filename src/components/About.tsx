import { useReveal } from '../hooks/useReveal';

const pillars = [
  { title: 'Classical', sub: 'Rooted in tradition' },
  { title: 'Live', sub: 'Concert-ready energy' },
  { title: 'Guru', sub: 'Workshops & lessons' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(192,137,90,0.12), transparent)' }}
      />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image / visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-saffron-700/20 group">
              <img
                src="/src/components/image copy copy.png"
                alt="Shivam Rai bowing to the tabla"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-[0.3em] text-saffron-300/80 mb-1">About the artist</div>
                <div className="font-serif text-2xl text-cream-50">Shivam Rai</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-saffron-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">About the artist</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
              A devotion to rhythm, heritage, and the living soul of Indian Classical Music.
            </h2>

            <div className="mt-8 space-y-5 text-cream-200/70 leading-relaxed text-lg">
              <p>
                Based in Sagar, Madhya Pradesh, Shivam Rai brings a refined command of Tabla to classical concerts, cultural festivals, devotional programs, collaborations, and contemporary stages. His work is rooted in discipline, spiritual depth, and a commitment to preserving India's musical heritage while presenting it with modern elegance.
              </p>
              <p>
                Every performance is crafted as a journey — from delicate bols and intricate layakari to powerful rhythmic crescendos that connect audiences with the timeless beauty of Indian classical tradition.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="p-5 rounded-xl border border-saffron-700/20 bg-ink-800/40 hover:border-saffron-400/40 hover:bg-ink-800/70 transition-all"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-serif text-2xl text-saffron-300">{p.title}</div>
                  <div className="text-sm text-cream-200/60 mt-1">{p.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
