import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Lock, TrendingUp } from 'lucide-react'
import Button from './Button.jsx'
import brand from '../site/brand.js'

const EASE = [0.4, 0, 0.2, 1]

const features = [
  { Icon: ShieldCheck, title: 'High Quality Data', sub: 'Accurate. Verified. Reliable.' },
  { Icon: Lock, title: 'Secure & Compliant', sub: 'Your data is always protected.' },
  { Icon: TrendingUp, title: 'Drive Real Growth', sub: 'Insights that convert.' },
]

const logos = [
  'Microsoft', 'AWS', 'Google', 'HubSpot', 'Oracle', 'SAP', 'Salesforce',
  'Adobe', 'Stripe', 'Slack', 'Shopify', 'Zoom', 'IBM', 'Atlassian', 'Snowflake',
]

/* ---------- Isometric stacked-cube ---------- */
const SLABS = [
  { cy: 176, sideL: '#1e3a8a', sideR: '#1d4ed8' }, // bottom
  { cy: 118, sideL: '#1d4ed8', sideR: '#2563eb' }, // middle
  { cy: 60, sideL: '#2563eb', sideR: '#3b82f6' }, // top
]
function StackCube() {
  return (
    <svg viewBox="0 0 260 240" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="slabTop" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#a5f3fc" />
          <stop offset="0.5" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {SLABS.map(({ cy, sideL, sideR }) => (
        <g key={cy}>
          <path d={`M58,${cy} L130,${cy + 30} L130,${cy + 44} L58,${cy + 14} Z`} fill={sideL} />
          <path d={`M130,${cy + 30} L202,${cy} L202,${cy + 14} L130,${cy + 44} Z`} fill={sideR} />
          <path
            d={`M130,${cy - 30} L202,${cy} L130,${cy + 30} L58,${cy} Z`}
            fill="url(#slabTop)"
            stroke="#bae6fd"
            strokeOpacity="0.4"
          />
        </g>
      ))}
    </svg>
  )
}

/* ---------- Floating mini data cards ---------- */
function MiniCard({ children, className, delay = 0, dur = 5, reduce }) {
  return (
    <motion.div
      animate={reduce ? {} : { y: [0, -10, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
      className={
        'absolute rounded-xl border border-white/10 bg-card/85 p-3 shadow-lift backdrop-blur ' + className
      }
    >
      {children}
    </motion.div>
  )
}

function DataViz({ reduce }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-brand-500/25 blur-3xl" />

      {/* orbit rings */}
      <div className={'absolute inset-[6%] rounded-full border border-brand-500/15 ' + (reduce ? '' : 'animate-spin-slow')}>
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
        <span className="absolute bottom-[14%] right-0 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-brand-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.7)]" />
        <span className="absolute bottom-[8%] left-[10%] h-1.5 w-1.5 rounded-full bg-accent/80" />
      </div>
      <div className="absolute inset-[20%] rounded-full border border-white/5" />

      {/* central stacked cube */}
      <motion.div
        animate={reduce ? {} : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[14%] grid place-items-center"
      >
        <StackCube />
      </motion.div>

      {/* floating data cards */}
      <MiniCard reduce={reduce} delay={0} dur={5} className="left-[-2%] top-[10%] w-28">
        <div className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-wide text-ink-muted">Revenue</div>
        <div className="flex items-end gap-1">
          {[10, 16, 12, 22, 18, 26].map((h, i) => (
            <span key={i} className="w-2.5 rounded-sm bg-gradient-to-t from-brand-600 to-accent" style={{ height: h }} />
          ))}
        </div>
      </MiniCard>

      <MiniCard reduce={reduce} delay={1.2} dur={5.5} className="right-[-3%] top-[3%] w-24">
        <div className="mb-1 text-[0.6rem] font-semibold uppercase tracking-wide text-ink-muted">Segments</div>
        <svg viewBox="0 0 36 36" className="mx-auto h-12 w-12">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="5" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#22d3ee" strokeWidth="5" strokeDasharray="60 88" strokeLinecap="round" transform="rotate(-90 18 18)" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="28 120" strokeDashoffset="-60" strokeLinecap="round" transform="rotate(-90 18 18)" />
        </svg>
      </MiniCard>

      <MiniCard reduce={reduce} delay={0.6} dur={6} className="left-[-6%] top-[48%] w-36">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/20 text-[0.6rem] font-bold text-brand-300">AC</span>
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-full rounded bg-white/15" />
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      </MiniCard>

      <MiniCard reduce={reduce} delay={1.8} dur={5.2} className="bottom-[8%] right-[-2%] w-32">
        <div className="mb-1 flex items-center justify-between text-[0.6rem] font-semibold uppercase tracking-wide text-ink-muted">
          <span>Growth</span><span className="text-accent">+24%</span>
        </div>
        <svg viewBox="0 0 100 36" className="h-10 w-full">
          <polyline points="2,30 20,24 38,26 56,14 74,18 98,4" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </MiniCard>
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const appear = (delay) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reduce ? 0 : delay, ease: EASE },
  })

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-night via-surface to-night">
      <div aria-hidden className="aurora opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-data-grid opacity-40 [mask-image:radial-gradient(120%_100%_at_50%_30%,#000_25%,transparent_75%)]"
      />

      <div className="container-shell relative z-10 grid items-center gap-12 pt-16 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-24 lg:pb-16">
        {/* Left — copy */}
        <div>
          <motion.span
            {...appear(0.05)}
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200 backdrop-blur"
          >
            Trusted data partner for growing businesses
          </motion.span>

          <motion.h1
            {...appear(0.15)}
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.4rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Powering Smarter<br />Data <span className="text-gradient animate-gradient-pan">Decisions</span>
          </motion.h1>

          <motion.p {...appear(0.3)} className="mt-6 max-w-[520px] text-lg leading-relaxed text-ink-muted">
            {brand.name} connects you to high-quality, accurate and actionable data that drives growth
            and performance.
          </motion.p>

          <motion.div {...appear(0.42)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button to="/email-lists" variant="accent" size="lg" className="group">
              Explore Solutions <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="border-white/20 bg-white/[0.04] text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </motion.div>

          <motion.div {...appear(0.55)} className="mt-10 grid gap-5 sm:grid-cols-3">
            {features.map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-bold text-white">{title}</div>
                  <div className="text-xs text-ink-muted">{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — animated data illustration */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 0.3, ease: EASE }}
        >
          <DataViz reduce={reduce} />
        </motion.div>
      </div>

      {/* Trusted-by logo cloud */}
      <div className="container-shell relative z-10 border-t border-white/8 py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted/70">
          Trusted by 500+ businesses worldwide
        </p>
        <div className="group mask-fade-x relative mt-6 overflow-hidden">
          <div className="flex w-max items-center gap-x-12 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-x-16">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                aria-hidden={i >= logos.length}
                className="shrink-0 text-lg font-extrabold tracking-tight text-white/35 transition hover:text-white/60 sm:text-xl"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
