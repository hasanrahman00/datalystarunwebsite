import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Target } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import { StatGrid, CTABand } from '../components/blocks.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const values = [
  { icon: Compass, title: 'Outcomes over volume', body: 'We measure ourselves on your pipeline, not on how many records we can ship.' },
  { icon: ShieldCheck, title: 'Quality is non-negotiable', body: 'If a record won’t pass verification, it doesn’t reach your CRM. Full stop.' },
  { icon: HeartHandshake, title: 'Partner, not vendor', body: 'We win when you win, so we tune segments and strategy alongside your team.' },
  { icon: Target, title: 'Precision by default', body: 'Targeting is the lever that matters most — we make it ridiculously granular.' },
]

const timeline = [
  { year: '2014', text: `${brand.name} is founded to fix the “dirty list” problem plaguing B2B marketers.` },
  { year: '2017', text: 'Launches automated verification pipeline and crosses 50M verified contacts.' },
  { year: '2020', text: 'Adds enrichment and demand-generation services; opens EMEA operations.' },
  { year: '2023', text: 'Introduces intent signals and TAM modeling for account-based teams.' },
  { year: '2026', text: 'Serves revenue teams in 170+ countries with 210M+ verified contacts.' },
]

export default function About() {
  useSeo({ title: 'About Us', description: `${brand.name} turns verified B2B data into pipeline for revenue teams worldwide.` })
  return (
    <>
      <PageHero
        eyebrow="About us"
        headline="We turn messy markets into clean, reachable pipeline"
        subcopy={`Since ${brand.foundedYear}, ${brand.name} has helped revenue teams reach the right buyers with data they can actually trust.`}
        trail={[{ label: 'Company' }, { label: 'About Us' }]}
        highlights={['Founded ' + brand.foundedYear, '170+ countries', '210M+ contacts']}
        primary={{ label: 'Work with us', to: '/contact' }}
        secondary={{ label: 'See careers', to: '/careers' }}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
              Born from one frustration: bad data kills good campaigns
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="prose-muted space-y-4">
            <p>
              {brand.name} started when our founders — former marketers and data engineers — got tired of
              watching strong campaigns fail because the underlying list was stale, mistargeted or full of bounces.
            </p>
            <p>
              We built the verification and targeting engine we wished we’d had: one that treats every record as a
              promise to a sender’s reputation. Today that engine powers data, enrichment and demand-generation
              programs for teams of every size.
            </p>
            <p>
              We’re still obsessed with the same thing — making sure the next message you send reaches a real person
              who’s genuinely worth reaching.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading light eyebrow="Where we are today" title="A foundation built to scale with you" />
        <div className="mt-12">
          <StatGrid stats={brand.metrics} light />
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="What we value" title="The principles behind every record we ship" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-surface-muted bg-card p-6 shadow-soft">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Milestones" title="A decade of building trust in B2B data" />
        <div className="mx-auto mt-12 max-w-3xl">
          <ol className="relative border-l border-surface-muted">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.05} className="mb-8 ml-6">
                <span className="absolute -left-2.5 grid h-5 w-5 place-items-center rounded-full bg-brand-600 ring-4 ring-white" />
                <div className="text-sm font-extrabold text-brand-300">{t.year}</div>
                <p className="mt-1 text-ink/80">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Let’s build pipeline together"
          body="Get a free sample matched to your ideal customer profile and see the quality for yourself."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Why DataCentra', to: '/why-us' }}
        />
      </Section>
    </>
  )
}
