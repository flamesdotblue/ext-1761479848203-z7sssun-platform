import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#FFD166');
    root.style.setProperty('--primary', '#6C5CE7');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-white">
      <NavBar />
      <main id="skip" className="flex flex-col">
        <Hero />
        <Projects />
        <AboutContact />
      </main>
    </div>
  );
}
