import { PageHero, BentoCard, CTABox, FAQSection, GuaranteeBar, Reveal, SectionHeader, FeatureRow, MetricsBar } from '@/components/ui'
import { GUARANTEES } from '@/lib/constants'
const FAQ = [
  { q: 'What data from Google Maps?', a: 'Business name, address, phone, website, email, rating, review count, hours, category, owner info & Google Maps URL.' },
  { q: 'Can you scrape specific regions?', a: 'Yes. Zip codes, cities, states, countries — you define the location and we extract every matching business.' },
  { q: 'Do you scrape e-commerce platforms?', a: 'Yes — see our dedicated Ecommerce Prospects page. Shopify, Amazon, Etsy & 12 more platforms.' },
  { q: 'How is data delivered?', a: 'CSV, Google Sheets, or direct CRM import. Deduplicated, formatted and verified.' },
]
export default function LocalLeads() {
  return (
    <>
      <PageHero icon="📍" label="Local Leads" title={<>Local Business <span className="gradient-text">Data Extraction</span><br />From Any Source</>} subtitle="Google Maps, Yelp, BBB, directories & more. Business data from anywhere." />
      <MetricsBar items={[{ value: '10+', label: 'Sources' },{ value: '1M+', label: 'Businesses' },{ value: '100%', label: 'Custom Filters' },{ value: 'Global', label: 'Coverage' }]} />
      <section className="py-24 relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Data Sources" title={<>Every Major <span className="gradient-text">Local Source</span></>} /></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard icon="🗺️" title="Google Maps Scraping" description="Businesses by location, category, rating, hours. Full contacts including phone, email, website." />
          <BentoCard icon="⭐" title="Yelp & Review Sites" description="Listings from Yelp, TripAdvisor, and industry platforms with owner contacts." />
          <BentoCard icon="🏢" title="BBB & Directories" description="BBB.org, Yellow Pages, Manta, and industry directories for verified data." />
          <BentoCard icon="🏥" title="Industry Directories" description="Niche directories for healthcare, legal, real estate, finance & more." />
          <BentoCard icon="🔧" title="Custom Source Scraping" description="Need data from a specific website? We build custom scrapers for any source." span2 />
        </div>
      </div></section>
      <section className="relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <FeatureRow label="How It Works" title="Tell Us What You Need" subtitle="Define criteria — we handle everything. Custom filters, any location, any niche." checks={['Scrape by city, zip code or region','Filter by industry & rating','Extract owner/decision-maker contacts','Deduplicated, clean, verified output']} visualIcon="📍" visualText="Location Extraction" />
      </div></section>
      <GuaranteeBar items={GUARANTEES} />
      <FAQSection items={FAQ} title={<>Local Leads <span className="gradient-text">FAQ</span></>} />
      <CTABox title={<>Get <span className="gradient-text">Local Leads</span> Today</>} subtitle="Any source, any location. Clean, verified, delivered." buttonText="Start on Slack →" />
    </>
  )
}
