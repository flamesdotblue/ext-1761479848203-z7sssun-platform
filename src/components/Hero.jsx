import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative isolate min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 pt-28 pb-24 md:pt-40">
        <motion.span
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
        >
          Available for new projects
        </motion.span>

        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          I build AI-powered products that feel effortless.
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-pretty text-base text-zinc-200 sm:text-lg"
        >
          Full-stack and machine learning engineering—shipping usable magic with clean code, thoughtful design, and premium motion.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            View My Work
            <ArrowRight className="transition group-hover:translate-x-0.5" size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
