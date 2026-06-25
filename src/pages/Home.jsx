import { Link } from 'react-router-dom'
import {
  ArrowRight, Database, Sparkles, Workflow, Megaphone,
} from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import Hero from '../components/Hero.jsx'
import Counter from '../components/Counter.jsx'
import CurvedBand from '../components/CurvedBand.jsx'
import ComplianceBadges from '../components/ComplianceBadges.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { FeatureCards, Steps, TestimonialCard, CheckList } from '../components/blocks.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'
import testimonials from '../data/pages/testimonials.js'
import { caseStudyPosts } from '../data/collections.js'

const solutions = [
  { icon: 'Database', title: 'Data Solutions', body: 'Verified B2B lists by tech, title, industry, healthcare and geography.', to: '/email-lists' },
  { icon: 'Sparkles', title: 'Enrich', body: 'Append, verify and cleanse your records to fill gaps and cut bounces.', to: '/services/data-enrichment' },
  { icon: 'Workflow', title: 'Engage', body: 'Nurture, ABM and appointment setting that turn data into meetings.', to: '/services/account-based-marketing' },
  { icon: 'Megaphone', title: 'Marketing', body: 'Demand gen, email, telemarketing and digital programs that scale.', to: '/services/data-driven-marketing' },
]

const valueProps = [
  { icon: 'ShieldCheck', title: 'Verified before delivery', body: 'Every record clears a multi-step validation pipeline, so deliverability stays high and your sender reputation stays clean.' },
  { icon: 'Filter', title: '70+ targeting filters', body: 'Layer firmographic, technographic and demographic signals to pinpoint exactly who you want to reach.' },
  { icon: 'RefreshCw', title: 'Always fresh', body: 'Continuous re-verification keeps records current as people switch roles and companies change.' },
  { icon: 'Target', title: 'Built around your ICP', body: 'We build to your definition of a great account — not a generic, one-size-fits-all template.' },
]

const intelFields = [
  'Full name & verified title', 'Verified work email', 'Direct-dial phone', 'LinkedIn URL',
  'Company & domain', 'Industry (SIC/NAICS)', 'Revenue & headcount band', 'Technographic stack',
  'Seniority & department', 'HQ & contact location', 'Intent / buying signals', 'Funding & growth signals',
]

const steps = [
  { title: 'Define your ICP', body: 'Share the accounts and roles you want. We translate them into precise filters.' },
  { title: 'Get counts & a sample', body: 'See matched volume and a free sample to validate fit and quality first.' },
  { title: 'Verify & deliver', body: 'We re-verify the segment and deliver as CSV/XLSX or straight into your CRM.' },
  { title: 'Launch & scale', body: 'Run campaigns with confidence — and refresh the segment on a schedule.' },
]

const marquee = [
  'Verified B2B data', '210M+ contacts', '95% deliverability SLA', 'GDPR & CAN-SPAM aligned',
  '64M+ companies', '170+ countries', 'Human + AI verified', 'Always refreshed',
]

export default function Home() {
  useSeo()
  const cases = caseStudyPosts.slice(0, 3)

  return (
    <div className="bg-cream">
      {/* Animated hero (with built-in trusted-by logo cloud) */}
      <Hero />

      {/* Value props */}
      <Section tone="cream">
        <SectionHeading
          serif
          eyebrowStyle="rule"
          eyebrow={`Why ${brand.name}`}
          title="Data your team can actually campaign on"
          description="Quality, targeting and freshness are the difference between pipeline and a spam folder. We obsess over all three."
        />
        <div className="mt-12">
          <FeatureCards items={valueProps} columns={4} />
        </div>
      </Section>

      {/* Solutions */}
      <Section tone="cream-soft">
        <SectionHeading
          serif
          eyebrowStyle="rule"
          eyebrow="What we do"
          title="One partner for the whole data-to-pipeline journey"
          description="From the list to the meeting — pick a single service or run the full motion with us."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link
                to={s.to}
                className="group flex h-full flex-col rounded-2xl border border-cream-deep bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-terracotta/10 text-terracotta transition group-hover:bg-terracotta group-hover:text-white">
                  {(() => { const I = { Database, Sparkles, Workflow, Megaphone }[s.icon]; return <I className="h-5 w-5" /> })()}
                </span>
                <h3 className="mt-4 text-lg font-bold text-coal">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-coal/65">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Curved stats band with count-up */}
      <CurvedBand id="proof">
        <Reveal className="text-center">
          <span className="inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            <span className="h-px w-8 bg-white/40" />
            The numbers
            <span className="h-px w-8 bg-white/40" />
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight text-white sm:text-[2.75rem]">
            Scale without sacrificing quality
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-y-12 sm:grid-cols-4">
          {brand.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className="text-center">
              <Counter value={m.value} className="block font-bebas text-6xl leading-none text-white sm:text-7xl" />
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">{m.label}</div>
            </Reveal>
          ))}
        </div>

        <div className="mask-fade-x mt-16 overflow-hidden">
          <div className="flex w-max animate-marquee items-center">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="flex items-center text-sm font-bold uppercase tracking-[0.18em] text-white/55">
                <span className="px-6">{t}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              </span>
            ))}
          </div>
        </div>
      </CurvedBand>

      {/* Intelligence fields */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              serif
              align="left"
              eyebrowStyle="rule"
              eyebrow="70+ intelligence fields"
              title="Every record, fully attributed"
              description="Each contact arrives with the context your team needs to segment, personalize and prioritize."
            />
            <div className="mt-8">
              <CheckList items={intelFields} columns={2} />
            </div>
            <div className="mt-8">
              <Button to="/email-lists" variant="coal">
                Explore all data <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Reveal delay={0.1}>
            <LeadForm title="See your matched counts" />
          </Reveal>
        </div>
      </Section>

      {/* Process */}
      <Section tone="cream-soft">
        <SectionHeading serif eyebrowStyle="rule" eyebrow="How it works" title="From ICP to pipeline in four steps" />
        <div className="mt-12">
          <Steps steps={steps} />
        </div>
      </Section>

      {/* Case studies */}
      {cases.length > 0 && (
        <Section tone="cream">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading serif align="left" eyebrowStyle="rule" eyebrow="Proof" title="Results, not promises" className="!mx-0" />
            <Button to="/case-studies" variant="ghost" className="text-coal hover:bg-cream-deep">All case studies <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.path} delay={i * 0.06}>
                <Link to={c.path} className="group flex h-full flex-col justify-between rounded-2xl border border-cream-deep bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div>
                    <span className="rounded-full bg-terracotta/10 px-2.5 py-1 text-xs font-semibold text-terracotta">{c.category}</span>
                    <h3 className="mt-4 text-lg font-bold text-coal">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-coal/65 line-clamp-3">{c.excerpt}</p>
                  </div>
                  {c.headline && (
                    <div className="mt-5 border-t border-cream-deep pt-4">
                      <span className="font-bebas text-3xl text-terracotta">{c.headline.value}</span>
                      <span className="ml-1.5 text-sm text-coal/60">{c.headline.label}</span>
                    </div>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Testimonials — auto-scrolling loop */}
      <Section tone="cream-soft">
        <SectionHeading serif eyebrowStyle="rule" eyebrow="Testimonials" title="Teams that switched, stayed" />
        <div className="group mask-fade-x relative mt-12 overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[320px] shrink-0 sm:w-[360px]" aria-hidden={i >= testimonials.length}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Compliance trust band */}
      <ComplianceBadges tone="cream" />

    </div>
  )
}
