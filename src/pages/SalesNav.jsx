import { PageHero, FeatureRow, CTABox, BentoCard, CaseStudyBar, FAQSection, GuaranteeBar, Reveal, SectionHeader, MetricsBar } from '@/components/ui'
import { CASE_STUDIES, GUARANTEES } from '@/lib/constants'
const FAQ = [
  { q: 'Do I need a Sales Navigator subscription?', a: 'No. We handle extraction. Share your search criteria and we deliver results with verified emails.' },
  { q: 'How many leads can you extract?', a: 'Unlimited. No daily caps or credit limits. 500 or 50,000 — we extract every match.' },
  { q: 'Do you support Boolean search?', a: 'Yes. Complex Boolean strings fully supported. We can also build optimized searches for you.' },
  { q: 'What data do I get per lead?', a: 'Full name, title, company, verified email, phone (when available), LinkedIn URL, company size, industry, location.' },
]
export default function SalesNav() {
  return (
    <>
      <PageHero icon="🔗" label="Sales Nav Scraping" title={<>Extract <span className="gradient-text">Unlimited Leads</span><br />From Sales Navigator</>} subtitle="LinkedIn Sales Navigator is the world's best B2B database. We extract and verify every email in real-time." />
      <MetricsBar items={[{ value: '∞', label: 'No Limits' },{ value: '<1%', label: 'Bounce Rate' },{ value: '100%', label: 'Boolean Support' },{ value: '48hr', label: 'Delivery' }]} />
      <section className="py-24 relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Capabilities" title={<>Everything From <span className="gradient-text">Sales Navigator</span></>} /></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard icon="🔍" title="Unlimited Extraction" description="No daily caps or credit limits. Extract every matching lead from your searches." />
          <BentoCard icon="🎭" title="Competitor Audiences" description="Scrape competitors' followers, connections & engaged audiences for outreach." />
          <BentoCard icon="🧮" title="Boolean Search" description="Complex Boolean strings fully supported. We can build optimized searches for you." />
          <BentoCard icon="📧" title="Catch-All Verified Emails" description="Every lead gets catch-all verified emails — <1% bounce guaranteed." span2 />
          <BentoCard icon="📱" title="Direct Phone Numbers" description="Direct dials and mobiles from multiple enrichment providers when available." />
        </div>
      </div></section>
      <section className="relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <FeatureRow label="Extraction" title="From Search to Spreadsheet" subtitle="Share your criteria. We extract every matching lead with full contact details." checks={['No daily limits or credit restrictions','Full profile data extraction','Competitor audience scraping','Account-based list building']} visualIcon="🔍" visualText="Sales Nav Extraction" />
        <FeatureRow label="Enrichment" title="Verified Emails & Enrichment" subtitle="Every lead enriched with verified contacts using our waterfall engine." checks={['Catch-all verified emails (<1% bounce)','Direct phone numbers when available','Company data enrichment','LinkedIn URL to full contact conversion']} visualIcon="📧" visualText="Verification Engine" reverse />
      </div></section>
      <CaseStudyBar studies={CASE_STUDIES} />
      <GuaranteeBar items={GUARANTEES} />
      <FAQSection items={FAQ} title={<>Sales Nav <span className="gradient-text">FAQ</span></>} />
      <CTABox title={<>Unlock <span className="gradient-text">Sales Navigator</span></>} subtitle="Unlimited leads with verified emails. Your filters, our tech." buttonText="Start on Slack →" />
    </>
  )
}
