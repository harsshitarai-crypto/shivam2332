import { Music2, MapPin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-saffron-700/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-saffron-700/10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-full border border-saffron-400/50 flex items-center justify-center text-saffron-300">
                <Music2 className="w-4 h-4" />
              </span>
              <div className="font-serif text-lg text-cream-50">Shivam Rai</div>
            </div>
            <p className="text-sm text-cream-200/50 leading-relaxed max-w-xs">
              Indian Classical Tabla performer crafting soulful concert experiences from Sagar, Madhya Pradesh.
            </p>
          </div>

          <div className="space-y-3">
            <a href="https://instagram.com/shivam.rai.official.01" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-cream-200/60 hover:text-saffron-300 transition-colors">
              <Instagram className="w-4 h-4 text-saffron-400/70" /> @shivam.rai.official.01
            </a>
            <a href="mailto:shivamraimusic18@gmail.com" className="flex items-center gap-3 text-sm text-cream-200/60 hover:text-saffron-300 transition-colors">
              <Mail className="w-4 h-4 text-saffron-400/70" /> shivamraimusic18@gmail.com
            </a>
            <div className="flex items-center gap-3 text-sm text-cream-200/60">
              <MapPin className="w-4 h-4 text-saffron-400/70" /> Sagar, Madhya Pradesh, India
            </div>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-saffron-400/40 text-saffron-300 text-sm hover:bg-saffron-400/10 transition-colors"
            >
              Request availability
            </a>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-cream-200/40">
          Copyright © Shivam Rai
        </div>
      </div>
    </footer>
  );
}
