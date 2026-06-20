import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import {
  StatGrid, FeatureCards, CheckList, FAQ, TestimonialCard, CTABand,
} from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'

// Renders a "Data / list" landing page from a content object.
// Sections render only when their data is present, so partial content is fine.
export default function DataPageTemplate({ page }) {
  useSeo(page.seo)
  const trail = [
    { label: page.category, to: page.hubPath },
    { label: page.title },
  ]

  return (
    <>
      <PageHero
        eyebrow={page.category}
        headline={page.hero?.headline || page.title}
        subcopy={page.hero?.subcopy}
        trail={trail}
        highlights={page.highlights}
        side={<LeadForm compact title="Get counts & a free sample" />}
      />

      {page.stats?.length > 0 && (
        <Section tone="subtle" className="!py-12">
          <StatGrid stats={page.stats} />
        </Section>
      )}

      {page.intro && (
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <span className="eyebrow">{page.intro.eyebrow || 'Overview'}</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
                {page.intro.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="prose-muted space-y-4 text-base">
              {(page.intro.body || []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </Section>
      )}

      {page.included?.length > 0 && (
        <Section tone="subtle">
          <SectionHeading
            eyebrow="Data fields"
            title={page.includedTitle || 'Every record, fully attributed'}
            description={page.includedDesc || 'Selectable fields you can segment and target on — verified before delivery.'}
          />
          <div className="mt-10 rounded-4xl border border-surface-muted bg-white p-7 shadow-soft sm:p-10">
            <CheckList items={page.included} columns={2} />
          </div>
        </Section>
      )}

      {page.features?.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Why this list"
            title={page.featuresTitle || 'Built for campaigns that convert'}
            description={page.featuresDesc}
          />
          <div className="mt-10">
            <FeatureCards items={page.features} columns={3} />
          </div>
        </Section>
      )}

      {page.useCases?.length > 0 && (
        <Section tone="subtle">
          <SectionHeading
            eyebrow={page.useCasesEyebrow || 'Use cases'}
            title={page.useCasesTitle || 'How teams put this data to work'}
          />
          <div className="mt-10">
            <FeatureCards items={page.useCases} columns={3} />
          </div>
        </Section>
      )}

      {page.testimonial && (
        <Section>
          <div className="mx-auto max-w-3xl">
            <TestimonialCard {...page.testimonial} />
          </div>
        </Section>
      )}

      {page.faqs?.length > 0 && (
        <Section tone="subtle">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10">
            <FAQ items={page.faqs} />
          </div>
        </Section>
      )}

      <Section className="!pt-0">
        <CTABand
          title={page.ctaTitle || `Get your ${page.title} sample`}
          body="Share your ideal customer profile and we’ll return matched counts, fields, and a free sample."
          primary={{ label: 'Request a sample', to: '/contact' }}
          secondary={{ label: 'Explore all data', to: '/email-lists' }}
        />
      </Section>
    </>
  )
}
