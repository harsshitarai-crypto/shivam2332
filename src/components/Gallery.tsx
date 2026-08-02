import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const categories = [
  'Live concerts',
  'Traditional attire',
];

const images = [
  'https://images.pexels.com/photos/16743021/pexels-photo-16743021.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/10744004/pexels-photo-10744004.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/13042108/pexels-photo-13042108.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/31616861/pexels-photo-31616861.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-ink-950">
      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-saffron-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">Gallery</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight text-balance">
              Moments of light, devotion, and stagecraft.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-xs transition-all ${
                  active === i
                    ? 'bg-saffron-400 text-ink-950'
                    : 'border border-saffron-700/30 text-cream-200/60 hover:border-saffron-400/50 hover:text-cream-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-xl border border-saffron-700/15 ${
                i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={categories[i % categories.length]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs uppercase tracking-[0.2em] text-saffron-300/80">{categories[i % categories.length]}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
        >
          <img src={images[lightbox]} alt="" className="max-w-full max-h-[85vh] rounded-xl border border-saffron-700/30" />
          <button className="absolute top-6 right-6 w-11 h-11 rounded-full border border-saffron-400/40 text-cream-100 hover:bg-saffron-400/10 text-2xl">×</button>
        </div>
      )}
    </section>
  );
}
