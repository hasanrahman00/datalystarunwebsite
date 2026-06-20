import { PageHero, FeatureRow, CTABox, BentoCard, FAQSection, GuaranteeBar, Reveal, SectionHeader, MetricsBar, WaterfallVisual, SectionLabel } from '@/components/ui'
import { GUARANTEES, WATERFALL_SOURCES } from '@/lib/constants'
const FAQ = [
  { q: 'What is waterfall enrichment?', a: 'Instead of one database, we query multiple sources in sequence — cascading through 10+ providers until we find verified data. If Source A misses, we try B, C, D...' },
  { q: 'When to use waterfall vs. database scraping?', a: 'Database scraping for filter-based searches. Waterfall when you have a list of companies/URLs and need contacts — especially for new, small, or niche companies.' },
  { q: "What's the find rate?", a: 'Up to 99% by combining 30+ databases, AI web intelligence, and deep search. Single-source tools get 40-50%.' },
  { q: 'What can I submit?', a: 'LinkedIn URLs, domains, company names, or job titles at specific companies. We find the right contacts for each.' },
]
export default function WaterfallEnrichment() {
  return (
    <>
      <PageHero icon="💧" label="Waterfall Enrichment" title={<>Multi-Source <span className="gradient-text">Real-Time Enrichment</span><br />for Hard-to-Find Contacts</>} subtitle="We cascade through 30+ sources in real-time to find contacts nobody else can." />
      <MetricsBar items={[{ value: '30+', label: 'Sources' },{ value: '99%', label: 'Find Rate' },{ value: '<1%', label: 'Bounce Rate' },{ value: 'Real-time', label: 'Processing' }]} />
      <section className="py-24 relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div><Reveal>
            <SectionLabel>How It Works</SectionLabel>
            <h3 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-tight mb-5">Cascading Through <span className="gradient-text">30+ Sources</span></h3>
            <p className="text-[1.05rem] text-txt-secondary leading-relaxed">Single-source tools find 40-50%. Our waterfall cascades through every major database plus AI web intelligence to hit 99% discovery.</p>
          </Reveal></div>
          <WaterfallVisual sources={WATERFALL_SOURCES} />
        </div>
      </div></section>
      <section className="py-24 relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Output" title={<>From URL to <span className="gradient-text">Full Contact</span></>} /></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard icon="👤" title="Contact Details" description="Name, title, department, seniority — verified and current." />
          <BentoCard icon="📧" title="Verified Email" description="Catch-all verified with <1% bounce guarantee." />
          <BentoCard icon="📱" title="Phone Numbers" description="Direct dials and mobiles from multiple providers." />
          <BentoCard icon="🏢" title="Company Intelligence" description="Size, revenue, industry, tech stack, funding, HQ location." span2 />
          <BentoCard icon="🔗" title="Social Profiles" description="LinkedIn, Twitter/X and other linked profiles." />
        </div>
      </div></section>
      <section className="relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <FeatureRow label="Use Cases" title="Perfect for Hard-to-Find Contacts" subtitle="Waterfall enrichment shines where databases fail." checks={['Newly launched startups not in databases','Small businesses with limited presence','International contacts outside US/EU','Niche industries with specialized roles','Account-based marketing targets']} visualIcon="🌊" visualText="Waterfall Engine" />
      </div></section>
      <GuaranteeBar items={GUARANTEES} />
      <FAQSection items={FAQ} title={<>Waterfall <span className="gradient-text">FAQ</span></>} />
      <CTABox title={<>Find the <span className="gradient-text">Unfindable</span></>} subtitle="Up to 99% discovery. Multi-source, real-time, verified." buttonText="Start on Slack →" />
    </>
  )
}
