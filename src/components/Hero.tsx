import { Music4, Play, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-950" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(192,137,90,0.25), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(200,85,61,0.15), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 grain opacity-[0.07] pointer-events-none" />

      {/* Floating notes */}
      <span className="absolute top-[22%] left-[12%] text-saffron-300/30 text-4xl animate-float" style={{ animationDelay: '0s' }}>♪</span>
      <span className="absolute top-[60%] left-[8%] text-saffron-300/20 text-6xl animate-float" style={{ animationDelay: '1.5s' }}>♬</span>
      <span className="absolute top-[30%] right-[14%] text-maroon-400/25 text-5xl animate-float" style={{ animationDelay: '0.8s' }}>♪</span>
      <span className="absolute bottom-[20%] right-[10%] text-saffron-300/20 text-3xl animate-float" style={{ animationDelay: '2.2s' }}>♬</span>

      {/* Tabla image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[80%] hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-saffron-400/10 blur-3xl" />
          <img
            src="https://images.pexels.com/photos/16743021/pexels-photo-16743021.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Tabla drums"
            className="relative w-full h-full object-cover rounded-[2rem] border border-saffron-700/20 shadow-2xl shadow-ink-950/50 animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          />
          <div className="absolute -inset-4 rounded-[2.5rem] border border-saffron-700/15 animate-spin-slow pointer-events-none" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <span className="w-10 h-px bg-saffron-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-saffron-300/80">
              Indian Classical Tabla · Sagar, India
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-[1.05] text-balance animate-fade-up">
            Rhythm Beyond
            <br />
            <span className="italic text-saffron-300">Time.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-cream-200/70 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            Experience the soulful journey of Indian Classical Tabla through mesmerizing performances, cultural heritage, and unforgettable musical experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-saffron-400 text-ink-950 font-medium hover:bg-saffron-300 transition-all hover:shadow-[0_0_40px_-8px_rgba(212,165,116,0.6)]"
            >
              <Calendar className="w-4 h-4" />
              Book a Performance
            </a>
            <a
              href="#concerts"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-saffron-400/40 text-cream-100 hover:bg-saffron-400/10 hover:border-saffron-400/70 transition-all"
            >
              <span className="w-7 h-7 rounded-full bg-saffron-400/20 flex items-center justify-center group-hover:bg-saffron-400/30 transition-colors">
                <Play className="w-3 h-3 text-saffron-300 fill-saffron-300" />
              </span>
              View Performances
            </a>
          </div>

          <div className="mt-16 flex items-center gap-4 text-cream-200/40 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Music4 className="w-5 h-5 text-saffron-300/50" />
            <span className="font-serif italic text-lg">Shivam Rai · Tabla Artist</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-saffron-300/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-saffron-300/50 to-transparent animate-pulse-soft" />
      </div>
    </section>
  );
}
