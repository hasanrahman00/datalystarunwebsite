import { Link } from 'react-router-dom'
import { ChevronRight, Check, ArrowRight, Quote, Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { getIcon } from '../lib/icons.js'
import { cn } from '../lib/cn.js'

/* ---------- Breadcrumbs ---------- */
export function Breadcrumbs({ trail = [], light = false }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex flex-wrap items-center gap-1.5 text-sm', light ? 'text-white/60' : 'text-ink-muted')}>
      <Link to="/" className="transition hover:text-brand-500">Home</Link>
      {trail.map((t, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          {t.to && i < trail.length - 1 ? (
            <Link to={t.to} className="transition hover:text-brand-500">{t.label}</Link>
          ) : (
            <span className={light ? 'text-white' : 'text-ink'}>{t.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

/* ---------- Stat grid ---------- */
export function StatGrid({ stats = [], light = false, className }) {
  if (!stats.length) return null
  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06}>
          <div
            className={cn(
              'rounded-2xl border p-5',
              light ? 'border-white/10 bg-white/5' : 'border-surface-muted bg-card shadow-soft',
            )}
          >
            <div className={cn('text-3xl font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>
              {s.value}
            </div>
            <div className={cn('mt-1 text-sm', light ? 'text-white/60' : 'text-ink-muted')}>{s.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- Feature cards ---------- */
export function FeatureCards({ items = [], columns = 3 }) {
  const cols = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }
  return (
    <div className={cn('grid gap-5', cols[columns])}>
      {items.map((f, i) => {
        const Icon = getIcon(f.icon)
        return (
          <Reveal key={f.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-surface-muted bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300 transition group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.body}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ---------- Bullet list (two-column check list) ---------- */
export function CheckList({ items = [], columns = 2, className }) {
  return (
    <ul className={cn('grid gap-x-8 gap-y-3', columns === 2 && 'sm:grid-cols-2', className)}>
      {items.map((b, i) => (
        <Reveal as="li" key={i} delay={i * 0.03} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-sm leading-relaxed text-ink/80">{b}</span>
        </Reveal>
      ))}
    </ul>
  )
}

/* ---------- Process / steps ---------- */
export function Steps({ steps = [] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 0.06} className="relative">
          <div className="font-bebas text-6xl leading-none text-gradient opacity-60">{String(i + 1).padStart(2, '0')}</div>
          <h3 className="mt-2 text-base font-bold text-ink">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{s.body}</p>
        </Reveal>
      ))}
    </ol>
  )
}

/* ---------- FAQ accordion ---------- */
export function FAQ({ items = [] }) {
  const [open, setOpen] = useState(0)
  if (!items.length) return null
  return (
    <div className="mx-auto max-w-3xl divide-y divide-surface-muted rounded-2xl border border-surface-muted bg-card">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink">{f.q}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-surface-subtle text-ink">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ---------- Testimonial card ---------- */
export function TestimonialCard({ quote, name, role, company }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-surface-muted bg-card p-6 shadow-soft">
      <Quote className="h-7 w-7 text-brand-200" />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/85">“{quote}”</blockquote>
      <figcaption className="mt-5 border-t border-surface-muted pt-4">
        <div className="text-sm font-bold text-ink">{name}</div>
        <div className="text-xs text-ink-muted">{role}{company ? `, ${company}` : ''}</div>
      </figcaption>
    </figure>
  )
}

/* ---------- Inline CTA band ---------- */
export function CTABand({ title, body, primary, secondary, tone = 'ink' }) {
  const gradient = tone !== 'ink'
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-4xl border border-white/10 px-6 py-12 text-white sm:px-12',
        gradient ? 'bg-lake-gradient' : 'bg-night',
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
      <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">{title}</h2>
          {body && <p className="mt-2 text-white/75">{body}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {primary && (
            <Button to={primary.to} variant={gradient ? 'light' : 'accent'} size="lg">
              {primary.label} <ArrowRight className="h-4 w-4" />
            </Button>
          )}
          {secondary && (
            <Button
              to={secondary.to}
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
