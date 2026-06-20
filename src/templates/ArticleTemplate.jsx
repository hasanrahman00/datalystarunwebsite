import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Quote } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import { Breadcrumbs, StatGrid, CTABand } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="mt-10 text-2xl font-bold text-ink">{block.text}</h2>
    case 'quote':
      return (
        <blockquote className="my-8 rounded-2xl border-l-4 border-brand-500 bg-surface-subtle p-6">
          <Quote className="h-6 w-6 text-brand-300" />
          <p className="mt-2 text-lg font-medium italic text-ink">{block.text}</p>
          {block.cite && <footer className="mt-2 text-sm text-ink-muted">— {block.cite}</footer>}
        </blockquote>
      )
    case 'list':
      return (
        <ul className="my-5 list-disc space-y-2 pl-5 text-ink/80">
          {block.items.map((it, i) => (
            <li key={i} className="leading-relaxed">{it}</li>
          ))}
        </ul>
      )
    case 'paragraph':
    default:
      return <p className="mt-4 leading-relaxed text-ink/80">{block.text}</p>
  }
}

// Blog post + case study detail page.
export default function ArticleTemplate({ page }) {
  useSeo(page.seo)
  const isCase = page.kind === 'case-study'
  const backTo = isCase ? '/case-studies' : '/blog'
  const backLabel = isCase ? 'All case studies' : 'All articles'

  return (
    <>
      <div className="relative overflow-hidden border-b border-surface-muted bg-surface-subtle">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="container-shell relative py-12 lg:py-16">
          <Breadcrumbs trail={[{ label: isCase ? 'Case Studies' : 'Blog', to: backTo }, { label: page.title }]} />
          <div className="mt-5 max-w-3xl">
            <span className="eyebrow">{page.category}</span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              {page.title}
            </h1>
            {page.excerpt && <p className="mt-4 text-lg text-ink-muted text-pretty">{page.excerpt}</p>}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              {page.author && <span className="font-medium text-ink">{page.author}</span>}
              {page.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> {page.date}
                </span>
              )}
              {page.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {page.readingTime}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Section className="!py-14">
        <div className="mx-auto max-w-3xl">
          {isCase && page.client && (
            <div className="mb-8 flex flex-wrap items-center gap-4 rounded-2xl border border-surface-muted bg-card p-5 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-night text-lg font-extrabold text-white">
                {page.client.name?.[0]}
              </div>
              <div>
                <div className="font-bold text-ink">{page.client.name}</div>
                <div className="text-sm text-ink-muted">{page.client.industry}</div>
              </div>
            </div>
          )}

          {isCase && page.results?.length > 0 && (
            <div className="mb-10">
              <StatGrid stats={page.results} />
            </div>
          )}

          <Reveal as="article" className="text-base">
            {(page.body || []).map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </Reveal>

          <div className="mt-12 border-t border-surface-muted pt-6">
            <Link to={backTo} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200">
              <ArrowLeft className="h-4 w-4" /> {backLabel}
            </Link>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title={isCase ? 'Want results like these?' : 'Turn this into pipeline'}
          body="Get a free data sample matched to your ideal customer profile and a plan to reach them."
          primary={{ label: 'Get a free sample', to: '/contact' }}
          secondary={{ label: 'Talk to sales', to: '/contact' }}
        />
      </Section>
    </>
  )
}
