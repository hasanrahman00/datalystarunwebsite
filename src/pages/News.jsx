import { Calendar, ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import { Breadcrumbs, CTABand } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const press = [
  { date: 'May 2026', tag: 'Product', title: `${brand.name} launches real-time intent scoring across all data plans`, excerpt: 'New scoring surfaces in-market accounts directly inside delivered segments, helping reps work the warmest leads first.' },
  { date: 'Mar 2026', tag: 'Company', title: `${brand.name} crosses 210 million verified B2B contacts`, excerpt: 'A milestone driven by expanded international coverage and a faster re-verification cycle.' },
  { date: 'Jan 2026', tag: 'Partnership', title: 'New native integrations with leading CRMs and sales-engagement platforms', excerpt: 'Customers can now push verified segments directly into their stack without manual exports.' },
  { date: 'Nov 2025', tag: 'Research', title: 'The State of B2B Data 2026 report is now available', excerpt: 'Survey of 600 revenue leaders reveals the true cost of data decay on pipeline efficiency.' },
  { date: 'Sep 2025', tag: 'Company', title: `${brand.name} opens APAC operations in Singapore`, excerpt: 'Regional team expands localized coverage and support across Asia-Pacific markets.' },
  { date: 'Jul 2025', tag: 'Product', title: 'TAM modeling moves out of beta', excerpt: 'Account-level market sizing is now generally available for account-based teams.' },
]

const tagColor = {
  Product: 'bg-brand-50 text-brand-700',
  Company: 'bg-accent/15 text-accent-deep',
  Partnership: 'bg-amber-50 text-amber-700',
  Research: 'bg-violet-50 text-violet-700',
}

export default function News() {
  useSeo({ title: 'Newsroom', description: `Latest news, announcements and press from ${brand.name}.` })
  return (
    <>
      <div className="relative overflow-hidden border-b border-surface-muted bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
        <div className="container-shell relative py-14 lg:py-16">
          <Breadcrumbs trail={[{ label: 'Company' }, { label: 'Newsroom' }]} light />
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-balance sm:text-5xl">Newsroom</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">Announcements, milestones and press from the {brand.name} team.</p>
        </div>
      </div>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {press.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tagColor[p.tag] || 'bg-surface-muted text-ink'}`}>{p.tag}</span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-muted"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-ink">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">Read more <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Press & media inquiries"
          body={`For interviews, assets or comment, reach our team at ${brand.email}.`}
          primary={{ label: 'Contact us', to: '/contact' }}
          tone="brand"
        />
      </Section>
    </>
  )
}
