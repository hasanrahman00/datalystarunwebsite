import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import {
  StatGrid, FeatureCards, CheckList, FAQ, TestimonialCard, CTABand, Steps,
} from '../components/blocks.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'

const groupLabels = {
  enrich: 'Enrich',
  engage: 'Engage',
  marketing: 'Data-Driven Marketing',
  growth: 'Growth Solutions',
}

// Renders a service landing page (enrich / engage / marketing / growth).
export default function ServicePageTemplate({ page }) {
  useSeo(page.seo)
  const trail = [
    { label: groupLabels[page.group] || 'Services' },
    { label: page.title },
  ]

  return (
    <>
      <PageHero
        eyebrow={groupLabels[page.group] || 'Services'}
        headline={page.hero?.headline || page.title}
        subcopy={page.hero?.subcopy}
        trail={trail}
        highlights={page.highlights}
        side={<LeadForm compact title="Book a strategy call" cta="Request a callback" subtitle="Tell us about your goals — we’ll map a program in one call." />}
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

      {page.benefits?.length > 0 && (
        <Section tone={page.intro ? 'subtle' : 'default'}>
          <SectionHeading
            eyebrow="What you get"
            title={page.benefitsTitle || 'Outcomes we deliver'}
            description={page.benefitsDesc}
          />
          <div className="mt-10">
            <FeatureCards items={page.benefits} columns={3} />
          </div>
        </Section>
      )}

      {page.process?.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="How it works"
            title={page.processTitle || 'A clear, accountable process'}
          />
          <div className="mt-12">
            <Steps steps={page.process} />
          </div>
        </Section>
      )}

      {page.deliverables?.length > 0 && (
        <Section tone="subtle">
          <SectionHeading
            eyebrow="Included"
            title={page.deliverablesTitle || 'What’s included'}
          />
          <div className="mt-10 rounded-4xl border border-surface-muted bg-card p-7 shadow-soft sm:p-10">
            <CheckList items={page.deliverables} columns={2} />
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
          title={page.ctaTitle || `Let’s scope your ${page.title.toLowerCase()} program`}
          body="Book a 30-minute strategy call and walk away with a clear plan and projected outcomes."
          primary={{ label: 'Book a strategy call', to: '/contact' }}
          secondary={{ label: 'See case studies', to: '/case-studies' }}
        />
      </Section>
    </>
  )
}
