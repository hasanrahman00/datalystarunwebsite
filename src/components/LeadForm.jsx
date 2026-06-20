import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '../lib/cn.js'

// Client-side lead-capture form. No backend wired — simulates submission and
// shows a success state. Swap handleSubmit for a real endpoint when ready.
export default function LeadForm({
  title = 'Request counts & pricing',
  subtitle = 'Tell us your target audience — we’ll send matched counts and a sample within one business day.',
  cta = 'Get my free sample',
  compact = false,
  className,
}) {
  const [status, setStatus] = useState('idle') // idle | loading | done

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulated async submit. Replace with fetch('/api/leads', ...).
    setTimeout(() => setStatus('done'), 900)
  }

  if (status === 'done') {
    return (
      <div className={cn('rounded-2xl border border-surface-muted bg-card p-7 text-center shadow-lift', className)}>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent-deep">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-ink">Request received</h3>
        <p className="mt-1.5 text-sm text-ink-muted">
          Thanks — a data strategist will reach out shortly with your matched counts and sample.
        </p>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-surface-muted bg-surface-subtle px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition focus:border-brand-400 focus:bg-card focus:ring-2 focus:ring-brand-100'

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('rounded-2xl border border-surface-muted bg-card p-6 shadow-lift', className)}
    >
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>
      <div className="mt-5 grid gap-3">
        <div className={cn('grid gap-3', !compact && 'sm:grid-cols-2')}>
          <input className={field} placeholder="Work email" type="email" required aria-label="Work email" />
          <input className={field} placeholder="Company" type="text" aria-label="Company" />
        </div>
        <input className={field} placeholder="Target audience (e.g. CTOs in SaaS, US)" type="text" aria-label="Target audience" />
        {!compact && (
          <textarea className={cn(field, 'min-h-[84px] resize-none')} placeholder="Anything else we should know?" aria-label="Message" />
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              {cta} <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        <p className="text-center text-2xs text-ink-muted">
          No spam. By submitting you agree to our privacy policy.
        </p>
      </div>
    </form>
  )
}
