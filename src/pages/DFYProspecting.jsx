import { PageHero, FeatureRow, CTABox, CaseStudyBar, ComparisonTable, FAQSection, GuaranteeBar, Reveal, SectionHeader, BentoCard } from '@/components/ui'
import { CASE_STUDIES, COMPARISON, GUARANTEES } from '@/lib/constants'

const FAQ = [
  { q: 'What is a 3-layer ICP analysis?', a: 'Layer 1: Industry, company size & revenue matching. Layer 2: Tech stack, growth signals & hiring trends. Layer 3: Decision-maker identification with role-specific personalization.' },
  { q: 'How do you generate icebreakers?', a: 'We track 25+ signal types — funding, press mentions, job postings, LinkedIn activity, tech stack changes — and reference specific recent events in each icebreaker.' },
  { q: 'How does this replace Clay.com?', a: 'Clay requires 10-40 hours of DIY setup. VikiLeads delivers the same output — enriched, personalized prospect lists — fully done for you. Same result, zero setup.' },
  { q: 'What format is the data delivered in?', a: 'CSV, Google Sheets, or direct CRM import. Includes name, title, company, verified email, phone, LinkedIn URL, ICP score, and 2-3 icebreakers per prospect.' },
]

export default function DFYProspecting() {
  return (
    <>
      <PageHero icon="🎯" label="DFY Prospecting" title={<>Done-For-You Prospecting<br />That <span className="gradient-text">Replaces Clay.com</span></>} subtitle="ICP-based, 3-layer analysis with personalized icebreakers — delivered to your inbox." />
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="What You Get" title={<>Every Prospect Comes <span className="gradient-text">Fully Loaded</span></>} /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BentoCard icon="🔬" title="3-Layer ICP Analysis" description="Industry fit, company signals, and decision-maker matching. Auto-discard non-matches." />
            <BentoCard icon="🧊" title="Personalized Icebreakers" description="2-3 custom icebreakers per prospect based on news, funding, hiring & social activity." />
            <BentoCard icon="✅" title="Catch-All Verified Emails" description="Every email tested beyond standard verification. <1% bounce rate guaranteed." />
            <BentoCard icon="📊" title="ICP Fit Score" description="Each prospect scored 1-100 on ICP match so you focus on highest-fit contacts first." span2 />
            <BentoCard icon="📖" title="Free ICP Playbook" description="Don't have an ICP yet? We build one for you free — profiles, personas & criteria." />
          </div>
        </div>
      </section>
      <section className="relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <FeatureRow label="ICP Analysis" title="3-Layer ICP Matching" subtitle="Every prospect goes through triple-layered analysis. Non-matches are auto-discarded." checks={["Free ICP playbook if you haven't built one","Company extraction with 3-tier fit scoring","Auto-discard non-matching prospects","Industry, size, revenue & tech stack matching"]} visualIcon="🔬" visualText="3-Layer Analysis Engine" />
        <FeatureRow label="Personalization" title="AI-Powered Icebreakers" subtitle="Every prospect comes with personalized icebreakers from recent activity." checks={['Recent news & press mentions','Funding rounds & investments','Hiring signals & job postings','Tech stack & tool adoption']} visualIcon="🧊" visualText="Personalized Icebreakers" reverse />
      </div></section>
      <CaseStudyBar studies={CASE_STUDIES} />
      <ComparisonTable data={COMPARISON} />
      <GuaranteeBar items={GUARANTEES} />
      <FAQSection items={FAQ} title={<>DFY Prospecting <span className="gradient-text">FAQ</span></>} />
      <CTABox title={<>Replace Clay.com <span className="gradient-text">Today</span></>} subtitle="ICP-analyzed, personalized prospects with verified emails. No subscriptions." buttonText="Start on Slack →" />
    </>
  )
}
