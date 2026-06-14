import { Plug, Handshake, Boxes, ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section.jsx'
import { FeatureCards, CTABand } from '../components/blocks.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

const integrations = [
  'Salesforce', 'HubSpot', 'Outreach', 'Salesloft', 'Marketo', 'Pardot',
  'Apollo', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics', 'Snowflake', 'Segment',
]

const partnerTypes = [
  { icon: 'Handshake', title: 'Agencies', body: 'White-label our data and demand-gen so you can deliver pipeline programs to clients.' },
  { icon: 'Boxes', title: 'Technology platforms', body: 'Embed verified B2B data into your product via flexible delivery and APIs.' },
  { icon: 'Network', title: 'Resellers', body: 'Earn wholesale pricing and dedicated support reselling DataCentra services.' },
]

export default function Partners() {
  useSeo({ title: 'Delivery Partners', description: `Integrations and partner programs that extend ${brand.name} across your stack.` })
  return (
    <>
      <PageHero
        eyebrow="Delivery partners"
        headline="DataCentra data, delivered into the tools you already use"
        subcopy="Push verified segments straight into your CRM and sales-engagement stack, or partner with us to resell and embed our data."
        trail={[{ label: 'Company' }, { label: 'Delivery Partners' }]}
        highlights={['Native CRM delivery', 'White-label options', 'Flexible APIs']}
        primary={{ label: 'Become a partner', to: '/reseller-program' }}
        secondary={{ label: 'Talk to sales', to: '/contact' }}
      />

      <Section>
        <SectionHeading eyebrow="Integrations" title="Works with your stack" description="Deliver data where your team already works — no manual exports required." />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((name, i) => (
            <Reveal key={name} delay={(i % 6) * 0.04}>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-surface-muted bg-white px-4 py-6 text-sm font-bold text-ink/70 shadow-soft transition hover:text-ink">
                <Plug className="h-4 w-4 text-brand-500" /> {name}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="Partner with us" title="Three ways to grow with DataCentra" />
        <div className="mt-12">
          <FeatureCards items={partnerTypes} columns={3} />
        </div>
      </Section>

      <Section className="!pt-0">
        <CTABand
          title="Let’s build something together"
          body="Tell us about your business and we’ll find the right partnership model."
          primary={{ label: 'Explore the reseller program', to: '/reseller-program' }}
          secondary={{ label: 'Contact us', to: '/contact' }}
        />
      </Section>
    </>
  )
}
