import { Check } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import CurvedBand from '../components/CurvedBand.jsx'
import Counter from '../components/Counter.jsx'
import { FAQ, CTABand, Steps } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

/* ---------- Data ---------- */
const stats = [
  { value: '30+', label: 'Databases' },
  { value: '2B+', label: 'Contacts' },
  { value: '<1%', label: 'Bounce rate' },
  { value: '$10K+', label: 'Saved / year' },
]

const databases = [
  { name: 'Apollo.io', desc: '275M+ contacts with verified emails & buyer intent', icon: '🚀' },
  { name: 'ZoomInfo', desc: '600M+ profiles with direct dials & org charts', icon: '🔎' },
  { name: 'Lusha', desc: '98% email deliverability with premium contacts', icon: '📧' },
  { name: 'Ocean Leads', desc: 'Deep company intelligence & decision-maker data', icon: '🌊' },
  { name: 'Prospeo', desc: 'Email finder with LinkedIn scraping & domain search', icon: '📬' },
  { name: 'RocketReach', desc: '700M+ profiles with personal & work emails', icon: '🎯' },
  { name: 'Lead Court', desc: 'AI-powered leads with real-time enrichment', icon: '⚖️' },
  { name: 'Seamless.ai', desc: 'Real-time verified B2B contacts via AI search', icon: '🤖' },
  { name: 'Adapt', desc: 'Industry-specific contacts with direct dials', icon: '🔄' },
  { name: 'UpLead', desc: '155M+ contacts with 95% accuracy guarantee', icon: '📈' },
  { name: 'Cognism', desc: 'Diamond-verified phones with GDPR compliance', icon: '💎' },
  { name: 'AeroLeads', desc: 'LinkedIn scraping with CRM integration', icon: '✈️' },
  { name: 'ListKit', desc: 'Triple-verified email lead lists', icon: '📋' },
  { name: 'Clutch', desc: 'B2B provider data with reviews & project info', icon: '🏆' },
]

const withoutCost = [
  ['Apollo.io Pro', '$99/mo'],
  ['ZoomInfo Sales', '$1,250/mo'],
  ['Lusha Pro', '$79/mo'],
  ['Clay Explorer', '$349/mo'],
  ['Cognism', '$1,250/mo'],
]
const withDataCentra = [
  ['All 30+ databases', 'Included'],
  ['Catch-all verification', 'Included'],
  ['ICP analysis', 'Included'],
  ['Personalized icebreakers', 'Included'],
  ['Priority support', 'Included'],
]

const caseStudies = [
  { company: 'SaaSGrowth', metric: '3x', label: 'Pipeline increase', detail: 'Replaced Clay.com with done-for-you prospecting', icon: '📈' },
  { company: 'ScaleHQ', metric: '$29K', label: 'Saved per year', detail: 'Dropped ZoomInfo + Apollo + Clay subscriptions', icon: '💰' },
  { company: 'CloseFast.io', metric: '15–20', label: 'Meetings / week', detail: 'Outbound running on autopilot from fresh data', icon: '📅' },
  { company: 'RevStack', metric: '<1%', label: 'Bounce rate', detail: 'Catch-all verification across 30+ databases', icon: '✅' },
]

const guarantees = [
  { icon: '🛡️', title: 'Data accuracy guarantee', desc: 'If bounce rate exceeds 1%, we replace the leads free.' },
  { icon: '⏱️', title: '48-hour delivery', desc: 'First list delivered within 48 hours of your ICP share.' },
  { icon: '🔒', title: 'GDPR & privacy compliant', desc: 'All data follows GDPR, CCPA & global privacy laws.' },
  { icon: '💸', title: 'No lock-in contracts', desc: 'Pay per project. No monthly fees. Keep all your data.' },
]

const steps = [
  { title: 'Share your ICP', body: 'Tell us the accounts, titles and signals that define a great fit. We translate them into precise filters.' },
  { title: 'We scrape & verify', body: 'We extract across 30+ databases, dedupe, and catch-all verify every email before it reaches you.' },
  { title: 'Enrich & score', body: 'Records are enriched with firmographics and intent, then scored against your ideal customer profile.' },
  { title: 'Deliver & refresh', body: 'You get a CRM-ready file in under 48 hours — with optional refresh cycles to keep it current.' },
]

const faqs = [
  { q: 'Which databases can you scrape?', a: 'We extract from 30+ databases including Apollo, ZoomInfo, Lusha, Cognism, Seamless.ai, RocketReach, UpLead and more — reconciled and deduped into one clean list.' },
  { q: 'How is this cheaper than subscriptions?', a: 'Apollo runs $49–119/mo and ZoomInfo starts around $15,000/year. With DataCentra you get data from all of them per project — most clients save $10K–30K a year.' },
  { q: 'Are the leads verified?', a: 'Yes. Every email is catch-all verified for a guaranteed sub-1% bounce rate. If a list exceeds that, we replace the affected records free.' },
  { q: 'What filters can I use?', a: 'Any filter the databases support: job title, industry, company size, location, revenue, tech stack, funding stage and employee count.' },
]

/* ---------- Sub-components ---------- */
function DatabaseCard({ name, desc, icon, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full items-start gap-4 rounded-2xl border border-surface-muted bg-card p-5 transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lift">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-2xl">{icon}</span>
        <div>
          <h3 className="font-display text-base font-bold text-ink">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{desc}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function B2BScraping() {
  useSeo({
    title: 'B2B Database Scraping',
    description: `${brand.name} scrapes 30+ premium B2B databases into one verified, ICP-scored, CRM-ready list — done for you at a fraction of subscription cost.`,
  })

  return (
    <>
      <PageHero
        eyebrow="Data Solutions"
        headline={<>Unlimited leads from 30+ premium databases</>}
        subcopy="Why pay $10K+/year for data subscriptions? We scrape them all — verified — and deliver one clean, ICP-scored list at a fraction of the cost."
        trail={[{ label: 'Data Solutions', to: '/email-lists' }, { label: 'B2B Scraping' }]}
        highlights={['30+ databases', '2B+ contacts', '<1% bounce', '$10K+ saved/yr']}
        side={<LeadForm compact title="Get a free sample" cta="Request a sample" subtitle="Tell us your target audience — we’ll return matched counts and a free sample." />}
      />

      {/* Metrics bar */}
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

      {/* Database network */}
      <Section>
        <SectionHeading
          serif
          eyebrowStyle="rule"
          eyebrow="Our database network"
          title="30+ premium B2B databases"
          description="Every major database, scraped, reconciled and delivered as one verified list."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {databases.map((db, i) => (
            <DatabaseCard key={db.name} {...db} delay={(i % 3) * 0.05} />
          ))}
        </div>
      </Section>

      {/* Cost comparison */}
      <Section tone="subtle">
        <SectionHeading
          serif
          eyebrowStyle="rule"
          eyebrow="Cost comparison"
          title="The math is obvious"
          description="Stacking subscriptions to get full coverage adds up fast. One project gets you all of it."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Without */}
          <Reveal>
            <div className="h-full rounded-2xl border border-surface-muted bg-card p-7 sm:p-8">
              <h3 className="font-display text-lg font-bold text-rose-400">Without DataCentra</h3>
              <ul className="mt-6 space-y-2.5">
                {withoutCost.map(([n, p]) => (
                  <li key={n} className="flex items-center justify-between text-sm">
                    <span className="text-ink-muted">{n}</span>
                    <span className="font-semibold text-rose-400">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t border-rose-500/15 pt-4">
                <span className="font-bold text-ink">Total</span>
                <span className="font-bebas text-3xl leading-none text-rose-400">$3,027<span className="text-base">/mo</span></span>
              </div>
            </div>
          </Reveal>
          {/* With */}
          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand-500/30 bg-card p-7 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
              <h3 className="relative font-display text-lg font-bold text-gradient">With DataCentra</h3>
              <ul className="relative mt-6 space-y-2.5">
                {withDataCentra.map(([n, p]) => (
                  <li key={n} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-ink/85">
                      <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} /> {n}
                    </span>
                    <span className="font-semibold text-accent">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-4 flex items-center justify-between border-t border-accent/20 pt-4">
                <span className="font-bold text-ink">Total</span>
                <span className="font-bebas text-3xl leading-none text-accent">Pay per project</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Case studies */}
      <Section>
        <SectionHeading serif eyebrowStyle="rule" eyebrow="Proof" title="Results, not promises" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((c, i) => (
            <Reveal key={c.company} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-surface-muted bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-lift">
                <span className="mx-auto text-3xl">{c.icon}</span>
                <span className="mt-3 block font-bebas text-5xl leading-none text-gradient">{c.metric}</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{c.label}</span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">{c.detail}</p>
                <span className="mt-4 text-sm font-bold text-ink">{c.company}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
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

      {/* Guarantees */}
      <Section tone="subtle">
        <SectionHeading serif eyebrowStyle="rule" eyebrow="Our guarantee" title="Backed in writing" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-surface-muted bg-card p-6">
                <span className="text-3xl">{g.icon}</span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading serif eyebrowStyle="rule" eyebrow="FAQ" title="B2B scraping questions" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Drop your subscriptions"
          body="30+ databases, verified emails, pay per project. Share your ideal customer profile and we’ll return matched counts and a free sample within one business day."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Talk to sales', to: '/contact' }}
        />
      </Section>
    </>
  )
}
