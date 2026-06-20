import { PageHero, SectionHeader, BentoCard, CTABox, Reveal, DatabaseCard, FAQSection, GuaranteeBar, MetricsBar, FeatureRow, CaseStudyBar } from '@/components/ui'
import { ECOMMERCE_STORES, GUARANTEES } from '@/lib/constants'

const FAQ = [
  { q: 'What e-commerce platforms do you cover?', a: 'We extract from 15+ platforms: Shopify, WooCommerce, Amazon, Etsy, BigCommerce, Magento, Squarespace, Wix, PrestaShop, Volusion, TikTok Shop, eBay, Faire, Gumroad, and Stripe Atlas.' },
  { q: 'What data do I get per store?', a: 'Store name, owner/founder name, verified email, phone, website, platform, estimated revenue, product count, traffic estimates, tech stack, and social profiles.' },
  { q: 'Can you filter by store size or niche?', a: 'Yes. Filter by estimated revenue, product count, industry niche, platform, geography, Alexa rank, tech stack (apps/plugins), and more.' },
  { q: 'How do you find decision-maker contacts?', a: 'We combine platform data with our waterfall enrichment across 30+ databases. We don\'t just find the store — we find the founder, CEO, or marketing director with verified contact details.' },
  { q: 'Is this useful for SaaS companies selling to e-commerce?', a: 'Absolutely. If you sell apps, tools, services, logistics, payments, or marketing to e-commerce brands, this is your ideal prospect list — store owners and decision-makers with verified contacts.' },
  { q: 'What about DTC brands not on marketplaces?', a: 'We cover those too. Our scrapers detect Shopify, WooCommerce, Magento, and other platforms on any website domain. If they run an online store, we can find them.' },
]

const CASE_STUDIES_ECOM = [
  { company: 'StoreLaunch', metric: '2,500+', label: 'Shopify leads', detail: 'Filtered by revenue >$1M, US-based stores', icon: '🟢' },
  { company: 'AppVendor', metric: '85%', label: 'Email accuracy', detail: 'Founder-level contacts for SaaS outreach', icon: '📧' },
  { company: 'FullfillPro', metric: '340', label: 'Meetings booked', detail: 'Amazon seller outreach campaign in 3 months', icon: '📅' },
  { company: 'AdScale', metric: '$180K', label: 'Pipeline created', detail: 'DTC brand decision-maker prospecting', icon: '💰' },
]

export default function EcommerceProspects() {
  return (
    <>
      <PageHero icon="🛒" label="Ecommerce Prospects"
        title={<>Decision-Maker Data From<br /><span className="gradient-text">15+ E-Commerce Platforms</span></>}
        subtitle="Shopify, Amazon, Etsy, WooCommerce & more — store owners and decision-makers with verified emails and enriched contacts." />

      <MetricsBar items={[
        { value: '15+', label: 'Platforms' },
        { value: '4M+', label: 'Stores Indexed' },
        { value: '<1%', label: 'Bounce Rate' },
        { value: 'DTC + B2B', label: 'Coverage' },
        { value: '48hr', label: 'Delivery' },
        { value: '30+', label: 'Data Points' },
      ]} />

      {/* 15 E-Commerce Store Cards */}
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="Platforms We Cover" title={<>15 E-Commerce <span className="gradient-text">Platforms</span></>} subtitle="Every major e-commerce platform. Store owners, founders & marketing leads — all with verified contact data." /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ECOMMERCE_STORES.map((s, i) => (
              <DatabaseCard key={s.name} {...s} delay={i * 0.03} />
            ))}
          </div>
        </div>
      </section>

      {/* What Data You Get */}
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="Data Points" title={<>30+ Data Points <span className="gradient-text">Per Store</span></>} subtitle="Not just store URLs. Full decision-maker profiles with verified contacts." /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BentoCard icon="👤" title="Owner & Founder Data" description="Full name, job title, LinkedIn profile, verified email, and direct phone number of the store owner or key decision-maker." />
            <BentoCard icon="🏪" title="Store Intelligence" description="Store name, URL, platform, estimated monthly revenue, product count, traffic rank, and store creation date." />
            <BentoCard icon="🔧" title="Tech Stack" description="Apps, plugins, payment processors, shipping providers, email marketing tools, and analytics platforms installed." />
            <BentoCard icon="📊" title="Revenue Estimates" description="Estimated monthly/annual revenue based on traffic, product pricing, review velocity, and marketplace rank signals." span2 />
            <BentoCard icon="🌍" title="Geography & Niche" description="Store location, target markets, product categories, and niche classification for precise ICP matching." />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <FeatureRow label="Use Case" title="Perfect For SaaS Selling to E-Commerce"
          subtitle="If you sell tools, apps, services, logistics, or marketing to online stores — this is your goldmine."
          checks={[
            'Shopify app developers targeting high-revenue stores',
            'Fulfillment & logistics companies prospecting sellers',
            'Marketing agencies targeting DTC brand founders',
            'Payment & fintech companies reaching store owners',
            'SaaS tools selling to e-commerce decision-makers',
          ]}
          visualIcon="🎯" visualText="E-Commerce ICP Matching" />
        <FeatureRow label="Filtering" title="Laser-Focused Filtering"
          subtitle="Don't just get a list of stores. Get the right stores with the right decision-makers."
          checks={[
            'Filter by estimated revenue ($100K+, $1M+, $10M+)',
            'Filter by product count, category & niche',
            'Filter by platform (Shopify, Amazon, Etsy, etc.)',
            'Filter by geography (US, EU, UK, global)',
            'Filter by tech stack (Klaviyo users, ReCharge, etc.)',
          ]}
          visualIcon="🔍" visualText="Advanced Filtering" reverse />
      </div></section>

      {/* Ecommerce Case Studies */}
      <CaseStudyBar studies={CASE_STUDIES_ECOM} />

      {/* How It Works */}
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="Process" title={<>How <span className="gradient-text">Ecommerce Prospecting</span> Works</>} /></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', t: 'Define Criteria', d: 'Platform, revenue range, niche, geography, tech stack — tell us your ICP.' },
              { n: '02', t: 'We Scrape & Enrich', d: 'Extract store data from 15+ platforms. Find decision-makers via waterfall enrichment.' },
              { n: '03', t: 'Verify Contacts', d: 'Catch-all verify every email. Add phone numbers, LinkedIn profiles & company data.' },
              { n: '04', t: 'Deliver & Scale', d: 'Clean, deduplicated list in CSV/Sheets/CRM. Scale up anytime with no limits.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="g-card text-center p-8 h-full">
                  <div className="font-display text-[2.2rem] font-extrabold gradient-text opacity-30 mb-3">{s.n}</div>
                  <h4 className="font-display text-[0.95rem] font-bold mb-2">{s.t}</h4>
                  <p className="text-[0.82rem] text-txt-secondary leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GuaranteeBar items={GUARANTEES} />
      <FAQSection items={FAQ} title={<>Ecommerce Prospects <span className="gradient-text">FAQ</span></>} />
      <CTABox title={<>Get <span className="gradient-text">Ecommerce Leads</span> Today</>} subtitle="15+ platforms. Decision-maker contacts. Verified emails. Pay per project." buttonText="Start on Slack →" />
    </>
  )
}
