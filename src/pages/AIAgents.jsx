import { PageHero, CTABox, AgentCard, FAQSection, GuaranteeBar, Reveal, SectionHeader, MetricsBar, BentoCard } from '@/components/ui'
import { AI_AGENTS, GUARANTEES } from '@/lib/constants'
const FAQ = [
  { q: 'What is a custom AI agent?', a: 'Software that performs tasks autonomously — sending LinkedIn messages, personalizing emails, scoring leads, cleaning CRM — without human intervention, tailored to your workflows.' },
  { q: 'How long to build?', a: 'Simple agents (LinkedIn, email) take 1-2 weeks. Complex (multi-system, custom scoring) take 2-4 weeks. Scoped upfront via Slack.' },
  { q: 'Do I need technical knowledge?', a: 'No. We handle all implementation. You describe what you want automated, we build, deploy, and maintain it.' },
  { q: 'What tools do agents integrate with?', a: 'Salesforce, HubSpot, Pipedrive, Slack, Instantly, Smartlead, Lemlist, Google Sheets, and most APIs. Custom integrations built when needed.' },
  { q: 'What ROI can I expect?', a: 'LinkedIn agents: 15-20 meetings/week. Email personalization: 3-5x reply rates. CRM hygiene: 10+ hours/week saved. Most see ROI within 30 days.' },
]
export default function AIAgents() {
  return (
    <>
      <PageHero icon="🤖" label="Custom AI Agents" title={<>AI Agents That <span className="gradient-text">Replace Manual Work</span></>} subtitle="LinkedIn, Twitter/X, email personalization, lead scoring & CRM hygiene — custom-built for you." />
      <MetricsBar items={[{ value: '5', label: 'Agent Types' },{ value: '15-20', label: 'Meetings/Week' },{ value: '3-5x', label: 'Reply Lift' },{ value: '30 days', label: 'Time to ROI' }]} />
      <section className="py-24 relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Our Agents" title={<>5 AI Agents for <span className="gradient-text">B2B Prospecting</span></>} subtitle="Each custom-built for your workflow, integrations & goals." /></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_AGENTS.map((a, i) => <AgentCard key={a.title} agent={a} delay={i * 0.06} />)}
        </div>
      </div></section>
      <section className="py-24 relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Why AI" title={<>Replace a <span className="gradient-text">$6K/Month SDR</span> for $500-900</>} /></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard icon="💰" title="10x Cost Savings" description="Human SDR costs $4-8K/month. AI agents deliver comparable output for a fraction." span2 />
          <BentoCard icon="⏰" title="24/7 Operation" description="Agents work around the clock — messages, scoring, cleaning while you sleep." />
          <BentoCard icon="📊" title="Perfect Consistency" description="No bad days, no missed follow-ups, no data entry errors. Every prospect treated equally." />
          <BentoCard icon="🚀" title="Instant Scaling" description="10x output in days, not months. No hiring, training, or onboarding." span2 />
        </div>
      </div></section>
      <section className="py-24 relative z-[1]"><div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Process" title={<>How We Build <span className="gradient-text">Your Agent</span></>} /></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[{n:'01',t:'Scope',d:'Analyze your workflow, identify opportunities, define capabilities.'},{n:'02',t:'Build',d:'Build with your integrations, messaging style & business logic.'},{n:'03',t:'Test',d:'Run in test mode, validate results, fine-tune performance.'},{n:'04',t:'Deploy',d:'Go live. We monitor, optimize & provide ongoing support.'}].map((s,i)=>(
            <Reveal key={s.n} delay={i*0.08}><div className="g-card text-center p-8 h-full">
              <div className="font-display text-[2.2rem] font-extrabold gradient-text opacity-30 mb-3">{s.n}</div>
              <h4 className="font-display text-[0.95rem] font-bold mb-2">{s.t}</h4>
              <p className="text-[0.82rem] text-txt-secondary leading-relaxed">{s.d}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>
      <GuaranteeBar items={GUARANTEES} />
      <FAQSection items={FAQ} title={<>AI Agents <span className="gradient-text">FAQ</span></>} />
      <CTABox title={<>Build Your <span className="gradient-text">AI Agent</span></>} subtitle="Tell us what to automate. We build, deploy & maintain it." buttonText="Start on Slack →" />
    </>
  )
}
