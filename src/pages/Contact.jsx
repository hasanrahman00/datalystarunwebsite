import { useState } from 'react'
import { Mail, Phone, Clock, MapPin, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Breadcrumbs } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const fieldCls =
  'w-full rounded-xl border border-coal/20 bg-cream px-3.5 py-3 text-sm text-coal placeholder:text-coal/40 outline-none transition focus:border-terracotta focus:bg-card focus:ring-4 focus:ring-terracotta/15'
const labelCls = 'mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-coal/70'

const tel = brand.phone.replace(/[^+\d]/g, '')

const infoCards = [
  { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
  { icon: Phone, label: 'Phone', value: brand.phone, href: `tel:${tel}` },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri · 8am–7pm across US, UK & APAC' },
]

export default function Contact() {
  useSeo({ title: 'Contact', description: `Talk to ${brand.name} about data, enrichment and demand generation.` })
  const [status, setStatus] = useState('idle')

  const submit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('done'), 900) // swap for a real endpoint
  }

  return (
    <div className="bg-cream">
      <div className="container-shell pt-10">
        <Breadcrumbs trail={[{ label: 'Contact' }]} />
      </div>

      <section className="container-shell grid items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        {/* Left — intro + info cards */}
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">// Get in touch</span>
          <h1 className="mt-4 font-bebas text-6xl leading-[0.92] text-coal sm:text-7xl">
            Let’s build<br />your pipeline.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-coal/70">
            Tell us your ideal customer profile and goals. We’ll come back with matched counts, a free
            sample and a plan — within one business day.
          </p>

          <div className="mt-8 space-y-3">
            {infoCards.map((c) => {
              const Icon = c.icon
              const body = (
                <div className="flex items-center gap-3.5 rounded-2xl border border-coal/15 bg-cream-soft px-4 py-3.5 transition hover:border-coal/30 hover:shadow-soft">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="text-xs font-bold uppercase tracking-wide text-coal/50">{c.label}</span>
                    <span className="block text-sm font-semibold text-coal">{c.value}</span>
                  </span>
                </div>
              )
              return c.href ? (
                <a key={c.label} href={c.href} className="block">{body}</a>
              ) : (
                <div key={c.label}>{body}</div>
              )
            })}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {brand.offices.map((o) => (
              <div key={o.city} className="rounded-2xl border border-coal/15 bg-cream-soft p-4">
                <MapPin className="h-4 w-4 text-terracotta" />
                <div className="mt-2 text-sm font-bold text-coal">{o.label}</div>
                <div className="text-xs text-coal/60">{o.city}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right — offset-bordered form card */}
        <Reveal delay={0.1} className="relative">
          <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-3xl bg-night" aria-hidden="true" />
          <div className="relative rounded-3xl border-2 border-coal bg-cream p-6 sm:p-8">
            {status === 'done' ? (
              <div className="py-12 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-bebas text-4xl leading-none text-coal">Request received.</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-coal/65">
                  Thanks — a data strategist will reach out within one business day with your matched
                  counts and a free sample.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">
                  Data request · Step 1 of 1
                </span>
                <h2 className="mt-2 font-bebas text-4xl leading-none text-coal">Tell us what you need.</h2>
                <div className="my-5 h-px bg-night/15" />

                <div className="space-y-4">
                  <div>
                    <label className={labelCls}>Work email <span className="text-terracotta">*</span></label>
                    <input className={fieldCls} type="email" required placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className={labelCls}>Company</label>
                    <input className={fieldCls} type="text" placeholder="Acme Inc." />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelCls}>Target audience <span className="text-terracotta">*</span></label>
                      <input className={fieldCls} type="text" required placeholder="e.g. CTOs in US SaaS" />
                    </div>
                    <div>
                      <label className={labelCls}>Monthly volume</label>
                      <select className={fieldCls} defaultValue="">
                        <option value="" disabled>Select…</option>
                        <option>Not sure yet</option>
                        <option>Under 10k</option>
                        <option>10k – 50k</option>
                        <option>50k – 250k</option>
                        <option>250k+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>
                      What are you looking for?{' '}
                      <span className="font-medium normal-case tracking-normal text-coal/40">(optional)</span>
                    </label>
                    <textarea
                      className={`${fieldCls} min-h-[110px] resize-none`}
                      placeholder="Tell us about your goals, target accounts and timeline…"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-terracotta-deep hover:shadow-lift disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Send my request <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="mt-4 text-xs text-coal/55">
                  No spam, no signup. A data strategist replies within one business day.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
