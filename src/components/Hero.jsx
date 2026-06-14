import {
  motion, useReducedMotion, useMotionValue, useSpring, useTransform,
} from 'framer-motion'
import { ArrowRight, BadgeCheck, Database, ChevronDown } from 'lucide-react'
import Button from './Button.jsx'
import brand from '../site/brand.js'

const headlineWords = [
  { t: 'Turn' }, { t: 'verified' }, { t: 'data' }, { t: 'into' },
  { t: 'predictable', accent: true }, { t: 'pipeline', accent: true },
]

function HeroVisual({ reduce }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  const rows = [
    { n: 'A. Chen', r: 'VP Engineering', c: 'Northwind', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { n: 'M. Okafor', r: 'CMO', c: 'Brightloom', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { n: 'S. Patel', r: 'Head of RevOps', c: 'Cadence', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { n: 'L. Romano', r: 'Director, IT', c: 'Kestrel', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
  ]

  const rowsWrap = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.7 } },
  }
  const rowItem = {
    hidden: { opacity: 0, x: reduce ? 0 : 18 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      className="relative [transform-style:preserve-3d]"
    >
      <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-terracotta/20 to-gold/20 blur-2xl" />
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-coal/10" />
      <div className="relative rounded-3xl border border-coal/10 bg-white p-5 shadow-lift">
        <div className="flex items-center justify-between border-b border-cream-deep pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-coal">
            <Database className="h-4 w-4 text-terracotta" /> Segment preview
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-terracotta/10 px-2.5 py-1 text-xs font-semibold text-terracotta">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-terracotta" />
            </span>
            14,208 matches
          </span>
        </div>
        <motion.div variants={rowsWrap} initial="hidden" animate="show" className="mt-3 space-y-2">
          {rows.map((row) => (
            <motion.div
              key={row.n}
              variants={rowItem}
              className="flex items-center justify-between rounded-xl bg-cream px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={row.img}
                  alt={row.n}
                  loading="lazy"
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                />
                <div>
                  <div className="text-sm font-semibold text-coal">{row.n}</div>
                  <div className="text-xs text-coal/55">{row.r} · {row.c}</div>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-terracotta">
                <BadgeCheck className="h-4 w-4" /> Verified
              </span>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[['95%', 'Deliverable'], ['70+', 'Fields'], ['<24h', 'Turnaround']].map(([v, l]) => (
            <div key={l} className="rounded-xl border border-cream-deep py-2">
              <div className="font-bebas text-2xl leading-none text-coal">{v}</div>
              <div className="text-2xs uppercase tracking-wide text-coal/55">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.1 } },
  }
  const word = {
    hidden: { y: reduce ? 0 : 26, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 130, damping: 18, mass: 0.6 } },
  }
  const fade = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-cream to-cream-soft">
      <div aria-hidden className="aurora" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-data-grid opacity-70 [mask-image:radial-gradient(120%_110%_at_50%_35%,#000_25%,transparent_72%)]"
      />

      <div className="container-shell relative z-10 grid items-center gap-12 py-28 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-6">
          <motion.span
            variants={fade}
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-terracotta"
          >
            <span className="h-px w-8 bg-terracotta/40" /> Intent-driven B2B data
          </motion.span>

          <h1
            aria-label="Turn verified data into predictable pipeline"
            className="mt-5 font-serif text-5xl font-bold leading-[1.04] text-coal sm:text-6xl lg:text-7xl"
          >
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={'mr-[0.22em] inline-block ' + (w.accent ? 'italic text-terracotta' : '')}
              >
                {w.t}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={fade} className="mt-6 max-w-xl text-lg leading-relaxed text-coal/70 text-pretty">
            {brand.name} gives revenue teams targeted contact data, enrichment and demand-generation
            programs — so your message reaches buyers who are ready to act.
          </motion.p>

          <motion.div variants={fade} className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/contact" variant="terracotta" size="lg" className="group">
              Get a free sample <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Button>
            <Button
              to="/email-lists"
              variant="ghost"
              size="lg"
              className="text-coal hover:bg-cream-deep"
            >
              Explore data solutions
            </Button>
          </motion.div>

          <motion.p variants={fade} className="mt-4 text-sm text-coal/55">
            No credit card · Free matched sample · GDPR &amp; CAN-SPAM aligned
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.5, type: 'spring', stiffness: 90, damping: 16 }}
          className="lg:col-span-6 lg:justify-self-end lg:pl-6"
        >
          <motion.div animate={reduce ? {} : { y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <HeroVisual reduce={reduce} />
          </motion.div>
        </motion.div>
      </div>

      <a href="#proof" aria-label="Scroll to content" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-coal/45 hover:text-terracotta">
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
