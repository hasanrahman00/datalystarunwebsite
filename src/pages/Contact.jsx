import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import { Breadcrumbs } from '../components/blocks.jsx'
import LeadForm from '../components/LeadForm.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

export default function Contact() {
  useSeo({ title: 'Contact', description: `Talk to ${brand.name} about data, enrichment and demand generation.` })
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
        <div className="container-shell relative py-14 lg:py-16">
          <Breadcrumbs trail={[{ label: 'Contact' }]} light />
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
            Let’s build your next pipeline
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Tell us about your ideal customer and goals. We’ll come back with matched counts, a free sample and a plan.
          </p>
        </div>
      </section>

      <Section className="!py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="text-2xl font-bold text-ink">Talk to a data strategist</h2>
            <p className="mt-2 text-ink-muted">
              Prefer to reach us directly? Use the details below — we typically reply within one business day.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="text-sm font-semibold text-ink">Email</div>
                  <a href={`mailto:${brand.email}`} className="text-sm text-ink-muted hover:text-brand-600">{brand.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Phone className="h-5 w-5" /></span>
                <div>
                  <div className="text-sm font-semibold text-ink">Phone</div>
                  <a href={`tel:${brand.phone.replace(/[^+\d]/g, '')}`} className="text-sm text-ink-muted hover:text-brand-600">{brand.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Clock className="h-5 w-5" /></span>
                <div>
                  <div className="text-sm font-semibold text-ink">Hours</div>
                  <div className="text-sm text-ink-muted">Mon–Fri, 8am–7pm across US, UK & APAC time zones</div>
                </div>
              </li>
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {brand.offices.map((o) => (
                <div key={o.city} className="rounded-2xl border border-surface-muted bg-white p-4 shadow-soft">
                  <MapPin className="h-4 w-4 text-accent-deep" />
                  <div className="mt-2 text-sm font-bold text-ink">{o.label}</div>
                  <div className="text-xs text-ink-muted">{o.city}</div>
                  <div className="mt-1 text-xs leading-relaxed text-ink-muted">{o.lines.join(', ')}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <LeadForm
              title="Request counts, pricing & a sample"
              subtitle="Share your target audience — a strategist will respond within one business day."
              cta="Send my request"
            />
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-ink-muted">
              <MessageSquare className="h-4 w-4" /> Prefer to chat live? Mention it and we’ll set up a call.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
