import { cn } from '../lib/cn.js'
import Reveal from './Reveal.jsx'

// Vertical rhythm wrapper. `tone` flips the palette for alternating bands.
export function Section({ children, className, tone = 'default', id }) {
  const tones = {
    default: 'bg-surface',
    subtle: 'bg-surface-subtle',
    muted: 'bg-surface-muted',
    ink: 'bg-ink text-white',
    cream: 'bg-cream text-coal',
    'cream-soft': 'bg-cream-soft text-coal',
    coal: 'bg-coal text-white',
  }
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)}>
      <div className="container-shell">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  serif = true,
  eyebrowStyle = 'rule',
  className,
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        className,
      )}
    >
      {eyebrow &&
        (eyebrowStyle === 'rule' ? (
          <span
            className={cn(
              'inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-terracotta',
              align === 'center' && 'justify-center',
            )}
          >
            <span className="h-px w-8 bg-terracotta/40" />
            {eyebrow}
            <span className="h-px w-8 bg-terracotta/40" />
          </span>
        ) : (
          <span className="eyebrow">{eyebrow}</span>
        ))}
      {title && (
        <h2
          className={cn(
            'mt-4 leading-tight text-balance',
            serif
              ? 'font-serif text-4xl font-bold sm:text-[2.75rem]'
              : 'text-3xl font-extrabold sm:text-4xl',
            light ? 'text-white' : serif ? 'text-coal' : 'text-ink',
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed text-pretty',
            light ? 'text-white/70' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default Section
