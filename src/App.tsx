import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Performances from './components/Performances';
import Concerts from './components/Concerts';
import Awards from './components/Awards';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Performances />
        <Concerts />
        <Awards />
        <Workshops />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
