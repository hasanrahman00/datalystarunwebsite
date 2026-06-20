import {
  motion, useReducedMotion, useMotionValue, useSpring, useTransform,
} from 'framer-motion'
import { ArrowRight, BadgeCheck, Database, ChevronDown, Play, Sparkles } from 'lucide-react'
import Button from './Button.jsx'
import brand from '../site/brand.js'

const EASE = [0.4, 0, 0.2, 1]

const headlineWords = [
  { t: 'Turn' }, { t: 'verified' }, { t: 'data' }, { t: 'into' },
  { t: 'predictable', accent: true }, { t: 'pipeline', accent: true },
]

const trustAvatars = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
]

const RIBBONS = [
  { d: 'M700,-60 C540,200 980,440 720,960', g: 'rb1', w: 1.6, delay: '0s' },
  { d: 'M940,-60 C1200,240 840,580 1140,960', g: 'rb2', w: 1.6, delay: '-3s' },
  { d: 'M1180,-60 C1440,300 1060,640 1360,960', g: 'rb3', w: 1.4, delay: '-6s' },
  { d: 'M560,-60 C660,320 460,560 600,960', g: 'rb1', w: 1, delay: '-1.5s' },
]

function HeroRibbons() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="rb1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="rb2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" /><stop offset="1" stopColor="#e64bd0" />
        </linearGradient>
        <linearGradient id="rb3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e64bd0" /><stop offset="1" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      <g className="hero-ribbons">
        <g style={{ filter: 'blur(14px)' }} opacity="0.45">
          {RIBBONS.map((r, i) => (
            <path key={i} d={r.d} stroke={`url(#${r.g})`} strokeWidth={r.w * 2.4} fill="none" strokeLinecap="round" />
          ))}
        </g>
        {RIBBONS.map((r, i) => (
          <path key={i} d={r.d} stroke={`url(#${r.g})`} strokeWidth={r.w} fill="none" strokeLinecap="round" className="ribbon-line" style={{ animationDelay: r.delay }} />
        ))}
      </g>
    </svg>
  )
}

function HeroVisual({ reduce }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => { mx.set(0); my.set(0) }

  const rows = [
    { n: 'A. Chen', r: 'VP Engineering', c: 'Northwind', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { n: 'M. Okafor', r: 'CMO', c: 'Brightloom', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { n: 'S. Patel', r: 'Head of RevOps', c: 'Cadence', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  ]

  const rowsWrap = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.85 } } }
  const rowItem = {
    hidden: { opacity: 0, x: reduce ? 0 : 18 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      className="relative [transform-style:preserve-3d]"
    >
      <div className="absolute -inset-6 rounded-[2.4rem] bg-lake-gradient opacity-30 blur-3xl" />
      <div className="relative rounded-3xl border border-white/10 bg-card/90 p-5 text-left shadow-lift backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-ink">
            <Database className="h-4 w-4 text-brand-400" /> Segment preview
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-semibold text-brand-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            14,208 matches
          </span>
        </div>
        <motion.div variants={rowsWrap} initial="hidden" animate="show" className="mt-3 space-y-2">
          {rows.map((row) => (
            <motion.div key={row.n} variants={rowItem} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
              <div className="flex items-center gap-3">
                <img src={row.img} alt={row.n} loading="lazy" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/15" />
                <div>
                  <div className="text-sm font-semibold text-ink">{row.n}</div>
                  <div className="text-xs text-ink-muted">{row.r} · {row.c}</div>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-brand-300">
                <BadgeCheck className="h-4 w-4" /> Verified
              </span>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[['95%', 'Deliverable'], ['70+', 'Fields'], ['<24h', 'Turnaround']].map(([v, l]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/5 py-2">
              <div className="font-bebas text-2xl leading-none text-gradient">{v}</div>
              <div className="text-2xs uppercase tracking-wide text-ink-muted">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const appear = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reduce ? 0 : delay, ease: EASE },
  })

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-night py-28 lg:py-20">
      <HeroRibbons />
      <div aria-hidden className="aurora opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-data-grid opacity-50 [mask-image:radial-gradient(120%_110%_at_50%_35%,#000_25%,transparent_72%)]"
      />

      <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-10">
        <div>
          <motion.span
            {...appear(0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-200 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" /> New · Buyer-intent signals are live
          </motion.span>

          <motion.h1
            {...appear(0.2)}
            className="mt-5 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] text-balance text-white"
          >
            {headlineWords.map((w, i) => (
              <span key={i} className={'mr-[0.22em] inline-block ' + (w.accent ? 'text-gradient' : '')}>
                {w.t}
              </span>
            ))}
          </motion.h1>

          <motion.p {...appear(0.35)} className="mt-6 max-w-[500px] text-lg leading-relaxed text-ink-muted text-pretty">
            {brand.name} gives revenue teams targeted contact data, enrichment and demand-generation
            programs — so your message reaches buyers who are ready to act.
          </motion.p>

          <motion.div {...appear(0.5)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/contact" variant="accent" size="lg" className="cta-glow group">
              Get a free sample <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Button>
            <Button to="/why-us" variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-white/20 bg-white/5">
                <Play className="h-3 w-3 translate-x-px" fill="currentColor" />
              </span>
              Watch demo
            </Button>
          </motion.div>

          <motion.div {...appear(0.65)} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {trustAvatars.map((a, i) => (
                <img key={i} src={a} alt="" loading="lazy" className="h-9 w-9 rounded-full border-2 border-night object-cover" />
              ))}
            </div>
            <p className="text-sm text-ink-muted">
              Trusted by <span className="font-semibold text-white">8,000+</span> GTM teams
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.5, type: 'spring', stiffness: 90, damping: 16 }}
        >
          <motion.div animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <HeroVisual reduce={reduce} />
          </motion.div>
        </motion.div>
      </div>

      <a href="#proof" aria-label="Scroll to content" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/40 hover:text-white">
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
        >
          Scroll
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  )
}
