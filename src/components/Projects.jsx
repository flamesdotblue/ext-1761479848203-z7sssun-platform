import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Astra Assist',
    tagline: 'Conversational AI for support',
    role: 'Full-stack + Model Integration',
    stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Postgres', 'OpenAI'],
    impact: '+38% task completion, 120K MAU',
  },
  {
    title: 'VisionFlow',
    tagline: 'Real-time visual QA',
    role: 'ML Engineer',
    stack: ['PyTorch', 'ONNX', 'CUDA', 'Next.js'],
    impact: '95% precision, 40ms latency',
  },
  {
    title: 'Prompt Studio',
    tagline: 'Rapid LLM experimentation',
    role: 'Frontend + DX',
    stack: ['Vite', 'Zustand', 'Tailwind', 'Vercel'],
    impact: '2x faster iteration',
  },
  {
    title: 'SenseBoard',
    tagline: 'Streaming analytics',
    role: 'Data + Backend',
    stack: ['Kafka', 'ClickHouse', 'Go', 'Next.js'],
    impact: '10x throughput',
  },
  {
    title: 'StudioXR',
    tagline: '3D web editor',
    role: 'WebGL + R3F',
    stack: ['three.js', 'react-three-fiber', 'Zustand'],
    impact: '60fps on mid-tier GPUs',
  },
  {
    title: 'TinyTranslate',
    tagline: 'Edge translation',
    role: 'Edge + WASM',
    stack: ['WASM', 'Rust', 'Cloudflare'],
    impact: 'Sub-100ms TTFB',
  },
];

function ProjectCard({ p, index }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: 0.06 * index }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
        <div className="absolute -inset-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent blur-2xl" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="text-sm text-zinc-300">{p.tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          <a aria-label="Live" href="#" className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
            <ExternalLink size={16} />
          </a>
          <a aria-label="Repository" href="#" className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
            <Github size={16} />
          </a>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        {p.stack.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-zinc-400">Role: <span className="text-zinc-200">{p.role}</span></p>
        <p className="text-sm text-emerald-400">{p.impact}</p>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-8">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-widest text-indigo-300"
        >
          Selected work
        </motion.p>
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Projects
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard p={p} index={i} key={p.title} />
        ))}
      </div>
    </section>
  );
}
