import { useEffect, useState } from 'react';
import { Menu, X, Music2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Performances', href: '#performances' },
  { label: 'Concerts', href: '#concerts' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-saffron-700/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-full border border-saffron-400/50 flex items-center justify-center text-saffron-300 group-hover:bg-saffron-400/10 transition-colors">
            <Music2 className="w-4 h-4" />
          </span>
          <div className="leading-tight">
            <div className="font-serif text-lg text-cream-50 tracking-wide">Shivam Rai</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-saffron-300/70">Tabla Artist</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-cream-200/70 hover:text-saffron-300 transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-px after:bg-saffron-400 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-saffron-400 text-ink-950 text-sm font-medium hover:bg-saffron-300 transition-colors"
        >
          Book
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream-100 p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-8 bg-ink-900/95 backdrop-blur-xl border-t border-saffron-700/20">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-cream-200/80 hover:text-saffron-300 border-b border-saffron-700/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-saffron-400 text-ink-950 text-sm font-medium"
              >
                Book a Performance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
