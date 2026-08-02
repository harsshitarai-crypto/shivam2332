import { useReveal } from '../hooks/useReveal';
import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Solo Tabla Recital',
    desc: 'A focused live performance exploring taal, tone, and improvisation.',
    img: 'https://images.pexels.com/photos/16743021/pexels-photo-16743021.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Fusion Collaboration',
    desc: 'Classical rhythmic vocabulary woven into a modern collaborative stage.',
    img: 'https://images.pexels.com/photos/10744004/pexels-photo-10744004.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Devotional Rhythm',
    desc: 'Tabla in a spiritual setting with subtle dynamics and meditative pacing.',
    img: 'https://images.pexels.com/photos/13042108/pexels-photo-13042108.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function Videos() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="videos" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-saffron-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Videos</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
            Featured performances and rhythmic journeys.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div
              key={v.title}
              className="group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-saffron-700/15">
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-950/40 group-hover:bg-ink-950/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-saffron-400/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-saffron-300 transition-all">
                    <Play className="w-6 h-6 text-ink-950 fill-ink-950 ml-1" />
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-cream-50 mt-5">{v.title}</h3>
              <p className="text-sm text-cream-200/60 mt-2 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
