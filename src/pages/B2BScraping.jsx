import { PageHero, SectionHeader, BentoCard, CTABox, Reveal, DatabaseCard, CaseStudyBar, FAQSection, GuaranteeBar, MetricsBar } from '@/components/ui'
import { DATABASES, CASE_STUDIES, GUARANTEES } from '@/lib/constants'
const FAQ = [
  { q: 'Which databases can you scrape?', a: 'We extract from 30+ databases including Apollo, ZoomInfo, Lusha, Cognism, Seamless.ai, RocketReach, UpLead, and more.' },
  { q: 'How is this cheaper than subscriptions?', a: 'Apollo costs $49-119/mo, ZoomInfo starts at $14,995/year. With Data Centra you get data from ALL of them per project. Most clients save $10K-30K/year.' },
  { q: 'Are leads verified?', a: 'Yes. Every email is catch-all verified — <1% bounce guaranteed. If it exceeds that, we replace leads free.' },
  { q: 'What filters can I use?', a: 'Any filter the databases support: job title, industry, company size, location, revenue, tech stack, funding stage, employee count.' },
]
export default function B2BScraping() {
  return (
    <>
      <PageHero icon="🗄️" label="B2B Database Scraping" title={<>Unlimited Leads From<br /><span className="gradient-text">30+ Premium Databases</span></>} subtitle="Why pay $10K+/year for subscriptions? We scrape them all at a fraction of the cost." />
      <MetricsBar items={[{ value: '30+', label: 'Databases' },{ value: '2B+', label: 'Contacts' },{ value: '<1%', label: 'Bounce Rate' },{ value: '$10K+', label: 'Saved/Year' }]} />
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="Our Database Network" title={<>30+ Premium <span className="gradient-text">B2B Databases</span></>} subtitle="Every major database, scraped and delivered." /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{DATABASES.map((db, i) => <DatabaseCard key={db.name} {...db} delay={i * 0.03} />)}</div>
        </div>
      </section>
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="Cost Comparison" title={<>The Math Is <span className="gradient-text">Obvious</span></>} /></Reveal>
          <Reveal><div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="g-card p-8">
              <h4 className="font-display text-[1.05rem] font-bold mb-6 text-red-400">❌ Without Data Centra</h4>
              {[['Apollo.io Pro','$99/mo'],['ZoomInfo Sales','$1,250/mo'],['Lusha Pro','$79/mo'],['Clay Explorer','$349/mo'],['Cognism','$1,250/mo']].map(([n,p])=>(
                <div key={n} className="flex justify-between text-[0.88rem] mb-2"><span className="text-txt-secondary">{n}</span><span className="text-red-400 font-semibold">{p}</span></div>
              ))}
              <div className="pt-3 mt-3 border-t border-red-500/10 flex justify-between"><span className="font-bold">Total</span><span className="text-red-400 font-extrabold text-lg">$3,027/mo</span></div>
            </div>
            <div className="g-card p-8">
              <h4 className="font-display text-[1.05rem] font-bold mb-6 text-emerald-400">✅ With Data Centra</h4>
              {[['All 30+ databases','Included'],['Catch-all verification','Included'],['ICP analysis','Included'],['Icebreakers','Included'],['Slack support','Included']].map(([n,p])=>(
                <div key={n} className="flex justify-between text-[0.88rem] mb-2"><span className="text-txt-secondary">{n}</span><span className="text-emerald-400 font-semibold">{p}</span></div>
              ))}
              <div className="pt-3 mt-3 border-t border-emerald-500/10 flex justify-between"><span className="font-bold">Total</span><span className="text-emerald-400 font-extrabold text-lg">Pay per project</span></div>
            </div>
          </div></Reveal>
        </div>
      </section>
      <CaseStudyBar studies={CASE_STUDIES} />
      <GuaranteeBar items={GUARANTEES} />
      <FAQSection items={FAQ} title={<>B2B Scraping <span className="gradient-text">FAQ</span></>} />
      <CTABox title={<>Drop Your <span className="gradient-text">Subscriptions</span></>} subtitle="30+ databases, verified emails, pay per project." buttonText="Start on Slack →" />
    </>
  )
}
