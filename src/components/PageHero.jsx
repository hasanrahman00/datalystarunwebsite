import { ArrowRight } from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { Breadcrumbs } from './blocks.jsx'
import { cn } from '../lib/cn.js'

// Dark gradient hero used at the top of inner pages (data, service, hub).
export default function PageHero({
  eyebrow,
  headline,
  subcopy,
  trail = [],
  highlights = [],
  primary = { label: 'Get a free sample', to: '/contact' },
  secondary = { label: 'Talk to sales', to: '/contact' },
  side,
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] opacity-[0.07]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-shell relative grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          {trail.length > 0 && <Breadcrumbs trail={trail} light />}
          <Reveal className="mt-5">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-balance text-white sm:text-5xl">
              {headline}
            </h1>
            {subcopy && (
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70 text-pretty">{subcopy}</p>
            )}

            {highlights.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {primary && (
                <Button to={primary.to} variant="accent" size="lg">
                  {primary.label} <ArrowRight className="h-4 w-4" />
                </Button>
              )}
              {secondary && (
                <Button
                  to={secondary.to}
                  variant="outline"
                  size="lg"
                  className="border-white/25 bg-white/5 text-white hover:bg-white/15"
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          </Reveal>
        </div>

        {side && (
          <Reveal delay={0.1} className={cn('lg:justify-self-end lg:w-full lg:max-w-md')}>
            {side}
          </Reveal>
        )}
      </div>
    </section>
  )
}
