import { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin } from 'lucide-react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header aria-label="Primary" className={`sticky top-0 z-50 transition-[height,background,backdrop-filter] ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 h-14' : 'backdrop-blur-none h-16'}`}>
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 shadow-inner" />
          <span className="font-semibold tracking-tight">Your Name</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-zinc-300 hover:text-white transition">Work</a>
          <a href="#about" className="text-sm text-zinc-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition">Contact</a>
          <div className="h-5 w-px bg-white/10" />
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
