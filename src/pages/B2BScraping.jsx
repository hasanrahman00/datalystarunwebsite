import { Check, X, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import CurvedBand from '../components/CurvedBand.jsx'
import Counter from '../components/Counter.jsx'
import { FeatureCards, FAQ, CTABand, Steps } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const features = [
  { icon: 'Database', title: '30+ premium sources', body: 'We pull from dozens of leading B2B databases in one project — so you get coverage no single subscription can match.' },
  { icon: 'ShieldCheck', title: 'Catch-all verified', body: 'Every email is multi-step verified — including risky catch-all domains — for a guaranteed sub-1% bounce rate.' },
  { icon: 'Target', title: 'ICP-scored', body: 'Records are scored against your ideal customer profile, so your team works the best-fit accounts first.' },
  { icon: 'Sparkles', title: 'Enriched & attributed', body: 'Title, company, firmographics, technographics, LinkedIn and direct dials — appended and ready to action.' },
  { icon: 'Boxes', title: 'Delivered your way', body: 'CSV, XLSX, Google Sheets, or pushed straight into your CRM and sales-engagement tools.' },
  { icon: 'RefreshCw', title: 'Replacement guarantee', body: 'If bounces exceed the SLA, we replace the affected records free — you only pay for data that lands.' },
]

const oldWay = [
  'A separate subscription for every data source',
  'Per-seat credit limits that throttle real campaigns',
  'Stale, unverified records and 5–8% bounce rates',
  'Hours of manual exports, dedupe and cleanup',
  '$2k–$3k / month in overlapping licenses',
]

const newWay = [
  '30+ premium sources combined in a single project',
  'No seats, no credit caps — scoped to your target list',
  'Catch-all verified to a guaranteed <1% bounce',
  'ICP-scored, enriched and CRM-ready on delivery',
  'Pay per project — and only for data that lands',
]

const steps = [
  { title: 'Share your ICP', body: 'Tell us the accounts, titles and signals that define a great fit. We translate them into precise filters.' },
  { title: 'We scrape & verify', body: 'We extract across 30+ sources, dedupe, and catch-all verify every email before it reaches you.' },
  { title: 'Enrich & score', body: 'Records are enriched with firmographics and intent, then scored against your ICP.' },
  { title: 'Deliver & refresh', body: 'You get a CRM-ready file in under 48 hours — with optional refresh cycles to keep it current.' },
]

const stats = [
  { value: '30+', label: 'Premium sources' },
  { value: '<1%', label: 'Bounce rate' },
  { value: '95%', label: 'Deliverability SLA' },
  { value: '<48h', label: 'Turnaround' },
]

const faqs = [
  { q: 'Which sources do you scrape from?', a: 'We aggregate from 30+ leading B2B databases and public sources, then reconcile and dedupe so you get one clean, comprehensive list instead of fragments from separate tools.' },
  { q: 'How is this cheaper than buying subscriptions?', a: 'Database subscriptions charge per seat and per credit, and you need several to get full coverage. With a per-project model you tap every source at once and only pay for the verified records you actually use.' },
  { q: 'What does “catch-all verified” mean?', a: 'Basic verification only checks that an address is well-formed. We also test catch-all domains that silently accept then bounce — which is why our lists land at under 1% bounce versus the 5–8% industry norm.' },
  { q: 'What fields are included?', a: 'Full name, verified work email, job title and seniority, company and domain, industry, location, LinkedIn URL, direct dial where available, plus an ICP score and intent signals.' },
  { q: 'How fast do I get the data?', a: 'Most projects are delivered within 48 hours. Larger or highly-specific builds are scoped up front with a clear timeline.' },
]

export default function B2BScraping() {
  useSeo({
    title: 'B2B Database Scraping',
    description: `${brand.name} scrapes 30+ premium B2B databases into one verified, ICP-scored, CRM-ready list — done for you, delivered in under 48 hours.`,
  })

  return (
    <>
      <PageHero
        eyebrow="Data Solutions"
        headline="B2B data scraping, done for you"
        subcopy="Stop stitching together half a dozen subscriptions. We scrape 30+ premium databases into one verified, ICP-scored, CRM-ready list — so your team books meetings instead of managing tools."
        trail={[{ label: 'Data Solutions', to: '/email-lists' }, { label: 'B2B Scraping' }]}
        highlights={['30+ sources', '<1% bounce', 'Done-for-you', '<48h delivery']}
        side={<LeadForm compact title="Get a free sample" cta="Request a sample" subtitle="Tell us your target audience — we’ll return matched counts and a free sample." />}
      />

      <Section tone="subtle" className="!py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="rounded-2xl border border-surface-muted bg-card p-5 text-center">
              <Counter value={s.value} className="block font-bebas text-5xl leading-none text-gradient" />
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Old way vs DataCentra */}
      <Section>
        <SectionHeading
          serif
          eyebrowStyle="rule"
          eyebrow="Why teams switch"
          title="The old way vs. DataCentra"
          description="One partner, every source, verified before it reaches you."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-surface-muted bg-card p-7">
              <h3 className="font-display text-lg font-bold text-ink">Stitching subscriptions together</h3>
              <ul className="mt-5 space-y-3">
                {oldWay.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-500/15 text-rose-400">
                      <X className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand-500/30 bg-card p-7">
              <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
              <h3 className="relative font-display text-lg font-bold text-gradient">With DataCentra</h3>
              <ul className="relative mt-5 space-y-3">
                {newWay.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-ink/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What's included */}
      <Section tone="subtle">
        <SectionHeading serif eyebrowStyle="rule" eyebrow="What's included" title="Everything in one project" />
        <div className="mt-12">
          <FeatureCards items={features} columns={3} />
        </div>
      </Section>

      {/* Process */}
      <CurvedBand>
        <Reveal className="text-center">
          <span className="inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            <span className="h-px w-8 bg-white/40" /> How it works <span className="h-px w-8 bg-white/40" />
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight text-white sm:text-[2.5rem]">
            From ICP to verified list in four steps
          </h2>
        </Reveal>
        <div className="mt-14">
          <Steps steps={steps} />
        </div>
      </CurvedBand>

      {/* FAQ */}
      <Section>
        <SectionHeading serif eyebrowStyle="rule" eyebrow="FAQ" title="Common questions" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Get a free sample of scraped, verified data"
          body="Share your ideal customer profile and we’ll return matched counts and a free sample within one business day."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Talk to sales', to: '/contact' }}
        />
      </Section>
    </>
  )
}
