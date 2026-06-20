import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import { StatGrid, FAQ, FeatureCards, CTABand } from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import { pagesByCategory } from '../data/collections.js'

// Category landing page: hero + grid of every child list/service in the category.
export default function HubTemplate({ page }) {
  useSeo(page.seo)
  // A hub either lists leaf pages of a category, or is a directory of sub-hubs.
  const children = page.categories
    ? page.categories
    : pagesByCategory(page.childCategory)

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow || 'Data Solutions'}
        headline={page.hero?.headline || page.title}
        subcopy={page.hero?.subcopy}
        trail={[{ label: 'Data Solutions', to: '/email-lists' }, { label: page.title }]}
        highlights={page.highlights}
      />

      {page.stats?.length > 0 && (
        <Section tone="subtle" className="!py-12">
          <StatGrid stats={page.stats} />
        </Section>
      )}

      <Section>
        <SectionHeading
          eyebrow={page.gridEyebrow || 'Browse'}
          title={page.gridTitle || `Explore ${page.title}`}
          description={page.gridDesc}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {children.map((c, i) => (
            <Reveal key={c.path} delay={(i % 3) * 0.05}>
              <Link
                to={c.path}
                className="group flex h-full flex-col justify-between rounded-2xl border border-surface-muted bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <div>
                  <h3 className="flex items-start justify-between gap-3 text-base font-bold text-ink">
                    {c.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition group-hover:text-brand-600" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">
                    {c.blurb}
                  </p>
                </div>
                <span className="mt-4 text-sm font-semibold text-brand-600">
                  View list →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        {children.length === 0 && (
          <p className="mt-8 text-center text-ink-muted">More lists in this category are coming soon.</p>
        )}
      </Section>

      {page.features?.length > 0 && (
        <Section tone="subtle">
          <SectionHeading eyebrow="Why DataCentra" title={page.featuresTitle || 'Data you can campaign on with confidence'} />
          <div className="mt-10">
            <FeatureCards items={page.features} columns={3} />
          </div>
        </Section>
      )}

      {page.faqs?.length > 0 && (
        <Section>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10">
            <FAQ items={page.faqs} />
          </div>
        </Section>
      )}

      <Section className="!pt-0">
        <CTABand
          title={page.ctaTitle || 'Not sure which list fits your campaign?'}
          body="Tell us your ideal customer profile and we’ll recommend the right segments with counts and a sample."
          primary={{ label: 'Get a recommendation', to: '/contact' }}
          secondary={{ label: 'Talk to sales', to: '/contact' }}
        />
      </Section>
    </>
  )
}
