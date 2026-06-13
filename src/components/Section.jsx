import { cn } from '../lib/cn.js'
import Reveal from './Reveal.jsx'

// Vertical rhythm wrapper. `tone` flips the palette for alternating bands.
export function Section({ children, className, tone = 'default', id }) {
  const tones = {
    default: 'bg-surface',
    subtle: 'bg-surface-subtle',
    muted: 'bg-surface-muted',
    ink: 'bg-ink text-white',
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
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2
          className={cn(
            'mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl',
            light ? 'text-white' : 'text-ink',
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
