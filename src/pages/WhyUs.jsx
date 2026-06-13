import { Check, X, ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import { FeatureCards, CTABand, FAQ } from '../components/blocks.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const differentiators = [
  { icon: 'ShieldCheck', title: 'Verification, not vibes', body: 'A multi-step pipeline validates every email, so deliverability is a guarantee, not a hope.' },
  { icon: 'Filter', title: 'Targeting that goes deep', body: '70+ filters across firmographics, technographics and intent — far past “industry + title”.' },
  { icon: 'RefreshCw', title: 'Freshness on a schedule', body: 'Rolling re-verification means you never campaign against a record that quietly went stale.' },
  { icon: 'Workflow', title: 'Data + activation', body: 'We don’t stop at the list — enrichment and demand-gen programs turn data into meetings.' },
  { icon: 'ShieldCheck', title: 'Compliance built in', body: 'GDPR, CCPA/CPRA and CAN-SPAM alignment with suppression and opt-out handling.' },
  { icon: 'HeartPulse', title: 'Support that tunes', body: 'Strategists actively tune your segments to lift connect and reply rates over time.' },
]

const compareRows = [
  ['Verified before delivery', true, false],
  ['70+ targeting filters', true, false],
  ['Free sample before purchase', true, false],
  ['Rolling re-verification', true, false],
  ['Enrichment + activation services', true, false],
  ['Deliverability SLA & replacements', true, false],
  ['Per-record sourcing transparency', true, false],
]

const faqs = [
  { q: 'How is Datalyst different from a typical list broker?', a: 'Most brokers resell static files. We verify every record before delivery, refresh continuously, and back deliverability with an SLA — plus we can activate the data through enrichment and demand-gen programs.' },
  { q: 'Will the data hurt my sender reputation?', a: 'The opposite is the goal. By filtering bounce risk before delivery and honoring suppression rules, we help protect your domain reputation.' },
  { q: 'Do I have to commit before seeing quality?', a: 'No. We send matched counts and a free sample first so you can validate fit and accuracy with zero commitment.' },
]

export default function WhyUs() {
  useSeo({ title: 'Why Datalyst', description: `Why revenue teams choose ${brand.name} over typical list vendors.` })
  return (
    <>
      <PageHero
        eyebrow="Why Datalyst"
        headline="The difference between a list and a pipeline"
        subcopy="Anyone can sell you rows. We sell reachable, relevant contacts — and the programs that turn them into revenue."
        trail={[{ label: 'Company' }, { label: 'Why Datalyst' }]}
        highlights={['95% deliverability SLA', 'Free sample first', 'Data + activation']}
      />

      <Section>
        <SectionHeading eyebrow="What sets us apart" title="Six reasons teams switch and stay" />
        <div className="mt-12">
          <FeatureCards items={differentiators} columns={3} />
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="Compare" title="Datalyst vs. a typical list vendor" />
        <Reveal className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-surface-muted bg-surface-subtle px-5 py-4 text-sm font-semibold text-ink">
            <span>Capability</span>
            <span className="w-24 text-center text-brand-700">{brand.name}</span>
            <span className="w-24 text-center text-ink-muted">Typical vendor</span>
          </div>
          {compareRows.map(([label, a, b], i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-surface-muted px-5 py-3.5 text-sm last:border-0">
              <span className="text-ink/80">{label}</span>
              <span className="grid w-24 place-items-center">
                {a ? <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent-deep"><Check className="h-4 w-4" strokeWidth={3} /></span>
                   : <span className="grid h-6 w-6 place-items-center rounded-full bg-surface-muted text-ink-muted"><X className="h-4 w-4" /></span>}
              </span>
              <span className="grid w-24 place-items-center">
                {b ? <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent-deep"><Check className="h-4 w-4" strokeWidth={3} /></span>
                   : <span className="grid h-6 w-6 place-items-center rounded-full bg-surface-muted text-ink-muted"><X className="h-4 w-4" /></span>}
              </span>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="See the quality before you commit"
          body="Request matched counts and a free sample built around your ideal customer profile."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'View case studies', to: '/case-studies' }}
        />
      </Section>
    </>
  )
}
