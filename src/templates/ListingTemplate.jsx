import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, Play, FileText, Download, Wrench } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import { Breadcrumbs, TestimonialCard, CTABand } from '../components/blocks.jsx'
import { getIcon } from '../lib/icons.js'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'

function ArticleCard({ item }) {
  return (
    <Link
      to={item.path}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-600 to-accent">
        <div className="absolute inset-0 bg-grid-faint [background-size:28px_28px] opacity-20" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-ink group-hover:text-brand-700">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">{item.excerpt}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-muted">
          <Calendar className="h-3.5 w-3.5" /> {item.date}
          {item.readingTime && <span>· {item.readingTime}</span>}
        </div>
      </div>
    </Link>
  )
}

function CaseCard({ item }) {
  return (
    <Link
      to={item.path}
      className="group flex h-full flex-col justify-between rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{item.category}</span>
          <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-brand-600" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">{item.excerpt}</p>
      </div>
      {item.headline && (
        <div className="mt-5 border-t border-surface-muted pt-4">
          <span className="text-2xl font-extrabold text-brand-600">{item.headline.value}</span>
          <span className="ml-1.5 text-sm text-ink-muted">{item.headline.label}</span>
        </div>
      )}
    </Link>
  )
}

function ResourceCard({ item }) {
  const typeIcon = { Guide: FileText, 'White Paper': Download, Infographic: FileText }
  const Icon = typeIcon[item.category] || FileText
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">{item.category}</span>
      <h3 className="mt-1 text-base font-bold text-ink">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{item.excerpt}</p>
      <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
        <Download className="h-4 w-4" /> Download
      </Link>
    </div>
  )
}

function VideoCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="relative grid h-44 place-items-center bg-ink">
        <div className="absolute inset-0 bg-brand-radial opacity-60" />
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white/90 text-ink shadow-lift transition group-hover:scale-110">
          <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
        </span>
        {item.duration && (
          <span className="absolute bottom-3 right-3 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">{item.duration}</span>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{item.category}</span>
        <h3 className="mt-1 text-base font-bold text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-2">{item.excerpt}</p>
      </div>
    </div>
  )
}

function ToolCard({ item }) {
  const Icon = getIcon(item.icon || 'Wrench')
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-deep">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-bold text-ink">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{item.excerpt}</p>
      <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
        Try it free <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

const cardByVariant = {
  articles: ArticleCard,
  cases: CaseCard,
  resources: ResourceCard,
  videos: VideoCard,
  tools: ToolCard,
}

// Generic resource index: hero + responsive grid of variant-specific cards.
export default function ListingTemplate({ page }) {
  useSeo(page.seo)
  const Card = cardByVariant[page.variant]

  return (
    <>
      <div className="relative overflow-hidden border-b border-surface-muted bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial" />
        <div className="container-shell relative py-14 lg:py-16">
          <Breadcrumbs trail={[{ label: 'Resources' }, { label: page.title }]} light />
          <div className="mt-5 max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-balance sm:text-5xl">{page.title}</h1>
            {page.subcopy && <p className="mt-4 text-lg text-white/70 text-pretty">{page.subcopy}</p>}
          </div>
        </div>
      </div>

      <Section>
        {page.variant === 'testimonials' ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.items.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.items.map((item, i) => (
              <Reveal key={item.slug || i} delay={(i % 3) * 0.05}>
                {Card && <Card item={item} />}
              </Reveal>
            ))}
          </div>
        )}
        {(!page.items || page.items.length === 0) && (
          <p className="text-center text-ink-muted">New content is on the way.</p>
        )}
      </Section>

      <Section className="!pt-0">
        <CTABand
          title={page.ctaTitle || 'Put these ideas into action'}
          body="Get a free data sample and a plan tailored to your go-to-market."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Talk to sales', to: '/contact' }}
        />
      </Section>
    </>
  )
}
