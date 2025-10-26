import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function AboutContact() {
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const es = {};
    if (!form.name.trim()) es.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) es.email = 'Enter a valid email';
    if (form.message.trim().length < 10) es.message = 'Please include a few details (min 10 chars)';
    setErrors(es);
    return Object.keys(es).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      // Fake async to simulate submission
      await new Promise((r) => setTimeout(r, 700));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="relative">
      <section id="about" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-8">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-widest text-indigo-300"
          >
            Who I am
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            About
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-3 text-zinc-200"
          >
            I’m an AI Engineer & Creative Frontend Developer focused on building products that feel intuitive and cinematic without compromising performance. I work across the stack—from data and models to delightful front-ends—prioritizing clarity, accessibility, and craft.
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="md:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="mb-3 text-sm font-semibold text-white">Skills</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Next.js','TypeScript','Python','FastAPI','Postgres','OpenAI','Framer Motion','Tailwind','three.js','R3F'].map(s => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="mb-8">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-widest text-indigo-300"
          >
            Let’s build something people love
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Contact
          </motion.h2>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-zinc-300" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-indigo-400/0 transition focus:ring-2"
                placeholder="Your name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-err' : undefined}
              />
              {errors.name && <p id="name-err" className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-indigo-400/0 transition focus:ring-2"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-err' : undefined}
              />
              {errors.email && <p id="email-err" className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-300" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-indigo-400/0 transition focus:ring-2"
              placeholder="Tell me a bit about your project, goals, and timeline."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-err' : undefined}
            />
            {errors.message && <p id="message-err" className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 disabled:opacity-60"
            >
              {status === 'success' ? <Check size={16} /> : <Mail size={16} />}
              {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send message'}
              {status === 'idle' && <ArrowRight size={16} className="ml-1" />}
            </button>
            <a href="mailto:you@example.com" className="text-sm text-zinc-300 underline-offset-4 hover:underline">
              or email me directly → you@example.com
            </a>
          </div>
        </form>

        <footer className="mx-auto mt-10 flex max-w-6xl items-center justify-between px-1 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Your Name. Built with React, Tailwind, and Framer Motion.</p>
          <a href="#hero" className="text-zinc-300 underline-offset-4 hover:underline">Back to top</a>
        </footer>
      </section>
    </div>
  );
}
