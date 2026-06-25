import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  Building2, Globe, Stethoscope, Users, Cpu, Boxes, Sparkles, FileCheck2,
  HeartPulse, GraduationCap, Wrench, Fuel, Factory, Banknote, ShoppingCart,
  Truck, Wifi, Home,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import CurvedBand from '../components/CurvedBand.jsx'
import Counter from '../components/Counter.jsx'
import { FAQ, CTABand, Steps, CheckList } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const capabilities = [
  { Icon: Building2, title: 'Industry Databases', to: '/data-intelligence/industry-databases', body: 'Verticalized contact & company data across thousands of industries, with SIC/NAICS targeting and per-vertical intent.' },
  { Icon: Globe, title: 'Data by Geography', to: '/data-intelligence/geography', body: 'Target buyers by country, region, state or city — localized firmographics and timezone-aware records across 170+ countries.' },
  { Icon: Stethoscope, title: 'Healthcare Data', to: '/data-intelligence/healthcare-data', body: 'Physicians, nurses, specialists and facilities down to NPI, specialty and credential — with HIPAA-aware sourcing.' },
  { Icon: Users, title: 'Professional Contacts', to: '/data-intelligence/professional-contacts', body: 'Verified executives and decision-makers by title, seniority and function — direct dials, work emails and LinkedIn URLs.' },
  { Icon: Cpu, title: 'Tech Install Base', to: '/data-intelligence/tech-install-base', body: 'See the software and hardware accounts actually run, then time outreach to install, uninstall and renewal signals.' },
  { Icon: Boxes, title: 'Custom B2B Data', to: '/data-intelligence/custom-data', body: 'Build-to-spec datasets researched and verified to your exact ICP when off-the-shelf databases fall short.' },
  { Icon: Sparkles, title: 'Data Enrichment', to: '/services/data-enrichment', body: 'Cleanse, append and verify your records — fill gaps, cut bounces and score every contact against your ICP.' },
  { Icon: FileCheck2, title: 'Data Licensing', to: '/data-intelligence/data-licensing', body: 'License our databases in bulk to embed in your product, platform or warehouse — API or bulk file, with refresh feeds.' },
]

const industries = [
  { Icon: HeartPulse, label: 'Healthcare' },
  { Icon: Cpu, label: 'Technology' },
  { Icon: GraduationCap, label: 'Education' },
  { Icon: Wrench, label: 'Automotive' },
  { Icon: Fuel, label: 'Oil & Gas' },
  { Icon: Factory, label: 'Manufacturing' },
  { Icon: Stethoscope, label: 'Pharmaceutical' },
  { Icon: Banknote, label: 'Financial Services' },
  { Icon: ShoppingCart, label: 'Retail & eCommerce' },
  { Icon: Truck, label: 'Logistics & Transport' },
  { Icon: Wifi, label: 'Telecom' },
  { Icon: Home, label: 'Real Estate' },
]

const stats = [
  { value: '210M+', label: 'Verified contacts' },
  { value: '64M+', label: 'Companies profiled' },
  { value: '18K+', label: 'Intent topics' },
  { value: '170+', label: 'Countries covered' },
]

const signals = [
  'Firmographics — industry, size, revenue, location',
  'Technographics — installed software & hardware',
  'Buyer-intent topics & surge scoring',
  'Funding, hiring & growth signals',
  'NPI, specialty & credential (healthcare)',
  'Seniority, department & function',
  'Direct dials, mobiles & verified emails',
  'Account hierarchy & parent-child mapping',
]

const steps = [
  { title: 'Define the target', body: 'Tell us the industries, geographies, roles or tech stack that define a great-fit account.' },
  { title: 'We assemble the data', body: 'We pull matching records across our graph, resolve them to real people, and layer the signals you asked for.' },
  { title: 'Verify & score', body: 'Every email and phone is validated, records are deduplicated, and accounts are scored against your ICP.' },
  { title: 'Deliver to your stack', body: 'Receive a clean file or live API/CRM sync — with scheduled refreshes so the data never goes stale.' },
]

const faqs = [
  { q: 'What is the difference between Data Solutions and Data Intelligence?', a: 'Data Solutions gets you targeted lists and email audiences. Data Intelligence is the layer underneath — the verticalized databases, technographics, intent signals and enrichment that let you target by who an account is, what they run, and what they are about to buy.' },
  { q: 'Can I combine signals across these capabilities?', a: 'Yes. The capabilities share one identity graph, so you can stack industry, geography, role, and technographic filters in a single segment — for example, IT directors at mid-market manufacturers in the DACH region running a specific ERP.' },
  { q: 'How fresh and accurate is the data?', a: 'Records are re-verified on a rolling schedule and emails are validated before delivery, with deliverability typically in the mid-90s. You can also schedule recurring refreshes so role changes and new accounts are caught automatically.' },
  { q: 'How do I receive the data?', a: 'However your team works: a deduplicated CSV or XLSX, a direct CRM sync, or a dedicated API. Licensing customers can take bulk exports with ongoing refresh feeds.' },
]

export default function DataIntelligence() {
  useSeo({
    title: 'Data Intelligence',
    description: `${brand.name} Data Intelligence — verticalized B2B databases, technographics, buyer intent and enrichment that target the right buyer by who they are and what they run.`,
  })

  return (
    <>
      <PageHero
        eyebrow="Data Intelligence"
        headline="Data intelligence that targets the right buyer"
        subcopy="Go beyond a flat contact list. DataCentra layers verticalized databases, technographics, buyer-intent and enrichment so you reach accounts by who they are, what they run, and what they're about to buy."
        trail={[{ label: 'Data Intelligence' }]}
        highlights={['210M+ contacts', '18K+ intent topics', '9,000+ technologies', '170+ countries']}
        side={<LeadForm compact title="Get a free sample" cta="Request a sample" subtitle="Tell us your target audience — we’ll return matched counts and a free sample." />}
      />

      {/* Stats band */}
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

      {/* Capabilities */}
      <Section>
        <SectionHeading
          serif
          eyebrowStyle="rule"
          eyebrow="Explore by capability"
          title="One intelligence layer, eight ways in"
          description="Start from the angle that fits your motion — industry, geography, role, or the tech a company runs."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, body, to }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.05}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lift"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Browse by industry */}
      <Section tone="subtle">
        <SectionHeading
          serif
          eyebrowStyle="rule"
          eyebrow="Browse by industry"
          title="Verticalized data for every market you sell into"
          description="Each industry carries its own firmographics, SIC/NAICS coverage and intent topics — not a one-size-fits-all list."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ Icon, label }, i) => (
            <Reveal key={label} delay={(i % 4) * 0.05}>
              <Link
                to="/data-intelligence/industry-databases"
                className="group flex items-center gap-3 rounded-2xl border border-surface-muted bg-card p-4 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-lift"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/data-intelligence/industry-databases" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200">
            See all industry databases <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      {/* Signals */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              serif
              align="left"
              eyebrowStyle="rule"
              eyebrow="Signals on every record"
              title="From raw records to buying signals"
              description="We don't just hand you a name and an email. Every record can carry the context your team needs to segment, prioritize and personalize."
            />
            <div className="mt-8">
              <CheckList items={signals} columns={2} />
            </div>
          </div>
          <Reveal delay={0.1}>
            <LeadForm title="See your matched counts" />
          </Reveal>
        </div>
      </Section>

      {/* How it works */}
      <CurvedBand>
        <Reveal className="text-center">
          <span className="inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            <span className="h-px w-8 bg-white/40" /> How it works <span className="h-px w-8 bg-white/40" />
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight text-white sm:text-[2.5rem]">
            From target to verified data in four steps
          </h2>
        </Reveal>
        <div className="mt-14">
          <Steps steps={steps} />
        </div>
      </CurvedBand>

      {/* FAQ */}
      <Section>
        <SectionHeading serif eyebrowStyle="rule" eyebrow="FAQ" title="Data Intelligence questions" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Put the right data behind your pipeline"
          body="Tell us your ideal customer profile and we’ll return matched counts and a free sample within one business day."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Talk to sales', to: '/contact' }}
        />
      </Section>
    </>
  )
}
