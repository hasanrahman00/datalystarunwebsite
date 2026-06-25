// Single source of truth for brand identity. Swap these values to rebrand.
export const brand = {
  name: 'DataCentra',
  legalName: 'DataCentra',
  tagline: 'Intent-driven B2B data & demand generation',
  domain: 'datacentra.io',
  email: 'contact@datacentra.io',
  salesEmail: 'contact@datacentra.io',
  phone: '+1 (888) 555-0142',
  foundedYear: 2014,
  description:
    'DataCentra turns verified B2B data into pipeline — targeted contact data, enrichment, and demand-generation programs that put your message in front of buyers ready to act.',
  offices: [
    {
      label: 'Headquarters',
      city: 'Austin, TX',
      lines: ['600 Congress Ave, Suite 1400', 'Austin, TX 78701, USA'],
    },
    {
      label: 'EMEA',
      city: 'London, UK',
      lines: ['1 Finsbury Avenue', 'London EC2M 2PF, United Kingdom'],
    },
    {
      label: 'APAC',
      city: 'Singapore',
      lines: ['80 Robinson Road, #10-01', 'Singapore 068898'],
    },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'Linkedin' },
    { label: 'X', href: 'https://x.com', icon: 'Twitter' },
    { label: 'YouTube', href: 'https://www.youtube.com', icon: 'Youtube' },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: 'Facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: 'Instagram' },
  ],
  // Headline metrics reused across hero / about / stats.
  metrics: [
    { value: '210M+', label: 'Verified B2B contacts' },
    { value: '64M+', label: 'Companies profiled' },
    { value: '95%', label: 'Email deliverability SLA' },
    { value: '170+', label: 'Countries covered' },
  ],
}

export default brand
