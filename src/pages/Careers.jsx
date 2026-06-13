import { MapPin, ArrowUpRight, Heart, Globe, GraduationCap, Coffee } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import { CTABand } from '../components/blocks.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const openings = [
  { role: 'Senior Data Engineer', team: 'Data Platform', location: 'Austin, TX / Remote', type: 'Full-time' },
  { role: 'Demand Generation Manager', team: 'Marketing', location: 'Remote (US)', type: 'Full-time' },
  { role: 'Account Executive', team: 'Sales', location: 'Austin, TX', type: 'Full-time' },
  { role: 'Data Quality Analyst', team: 'Operations', location: 'London, UK', type: 'Full-time' },
  { role: 'Customer Success Manager', team: 'Customer', location: 'Remote (US/EU)', type: 'Full-time' },
  { role: 'Product Designer', team: 'Product', location: 'Remote', type: 'Contract' },
]

const perks = [
  { icon: Globe, title: 'Remote-first', body: 'Work from anywhere across our US, UK and APAC time zones.' },
  { icon: Heart, title: 'Full health coverage', body: 'Medical, dental and vision for you and your dependents.' },
  { icon: GraduationCap, title: 'Learning budget', body: 'Annual stipend for courses, books and conferences.' },
  { icon: Coffee, title: 'Real time off', body: 'Generous, genuinely-encouraged paid time off and parental leave.' },
]

export default function Careers() {
  useSeo({ title: 'Careers', description: `Join ${brand.name} and help revenue teams reach the right buyers with data they trust.` })
  return (
    <>
      <PageHero
        eyebrow="Careers"
        headline="Build the data layer behind great go-to-market"
        subcopy={`Join a remote-first team obsessed with quality, precision and helping customers win. We’re hiring across data, marketing, sales and product.`}
        trail={[{ label: 'Company' }, { label: 'Careers' }]}
        highlights={['Remote-first', 'Health coverage', 'Learning budget']}
        primary={{ label: 'See open roles', to: '/careers' }}
        secondary={{ label: 'About us', to: '/about' }}
      />

      <Section>
        <SectionHeading eyebrow="Open roles" title="Come build with us" description="Don’t see your role? We’re always glad to meet great people — reach out anyway." />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-surface-muted overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft">
          {openings.map((o, i) => (
            <Reveal key={o.role} delay={i * 0.04}>
              <a href="/contact" className="group flex flex-col gap-2 px-6 py-5 transition hover:bg-surface-subtle sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-base font-bold text-ink group-hover:text-brand-700">{o.role}</div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
                    <span>{o.team}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {o.location}</span>
                    <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs">{o.type}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">Apply <ArrowUpRight className="h-4 w-4" /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="Life at Datalyst" title="Perks that respect your life" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-surface-muted bg-white p-6 shadow-soft">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600"><p.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Ready to make an impact?"
          body="Send us a note and tell us how you’d like to contribute."
          primary={{ label: 'Get in touch', to: '/contact' }}
        />
      </Section>
    </>
  )
}
