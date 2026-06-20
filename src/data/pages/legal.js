// Policy / legal pages. Original boilerplate — review with counsel before launch.
import brand from '../../site/brand.js'

const legal = [
  {
    slug: 'privacy',
    path: '/privacy',
    title: 'Privacy Policy',
    updated: 'June 2026',
    seo: { title: 'Privacy Policy', description: `How ${brand.name} collects, uses and protects personal information.` },
    intro: `This Privacy Policy explains how ${brand.legalName} (“${brand.name}”, “we”, “us”) collects, uses, shares and protects information in connection with our website and data services.`,
    sections: [
      {
        heading: 'Information we collect',
        body: ['We collect information you provide directly — such as your name, work email, company and message when you submit a form — and information collected automatically, such as device, browser and usage data via cookies and similar technologies.'],
      },
      {
        heading: 'How we use information',
        body: ['We use the information we collect to:'],
        bullets: ['Respond to inquiries and provide requested data samples or services', 'Operate, maintain and improve our website and offerings', 'Send service and marketing communications you can opt out of at any time', 'Comply with legal obligations and enforce our terms'],
      },
      {
        heading: 'B2B data we process',
        body: ['Our services involve business contact data sourced from public and licensed sources. We process this data on a legitimate-interest basis for B2B marketing and provide mechanisms for individuals to opt out or request removal.'],
      },
      {
        heading: 'Sharing & disclosure',
        body: ['We do not sell personal information about visitors to our website. We share data only with service providers who help us operate, and as required by law.'],
      },
      {
        heading: 'Your rights',
        body: ['Depending on your location, you may have rights to access, correct, delete or restrict use of your personal information. Contact us to exercise these rights.'],
        bullets: ['Access a copy of your data', 'Request correction or deletion', 'Object to or restrict processing', 'Withdraw consent where applicable'],
      },
      {
        heading: 'Data retention & security',
        body: ['We retain information only as long as necessary for the purposes described here and apply administrative, technical and physical safeguards designed to protect it.'],
      },
      {
        heading: 'Contact us',
        body: [`Questions about this policy can be sent to ${brand.email}.`],
      },
    ],
  },
  {
    slug: 'terms',
    path: '/terms',
    title: 'Terms of Service',
    updated: 'June 2026',
    seo: { title: 'Terms of Service', description: `The terms governing use of ${brand.name}’s website and services.` },
    intro: `These Terms of Service govern your access to and use of ${brand.legalName}’s website and services. By using our site or services, you agree to these terms.`,
    sections: [
      { heading: 'Use of services', body: ['You may use our services only in compliance with these terms and all applicable laws, including anti-spam and data-protection regulations relevant to your campaigns.'] },
      { heading: 'Acceptable use', body: ['You agree not to misuse the data or services.'], bullets: ['No unlawful, deceptive or harassing communications', 'No reselling or redistribution unless expressly authorized', 'No attempts to reverse-engineer or scrape our platform', 'Comply with consent and suppression requirements in your jurisdiction'] },
      { heading: 'Data licensing', body: ['Data provided is licensed, not sold, for your internal marketing use under the scope agreed in your order, unless otherwise stated in writing.'] },
      { heading: 'Payment', body: ['Fees, billing cycles and usage terms are set out in your order or invoice. Late or failed payments may result in suspension of service.'] },
      { heading: 'Disclaimers & liability', body: ['Services are provided “as is.” To the maximum extent permitted by law, our liability is limited to the fees paid for the service giving rise to the claim.'] },
      { heading: 'Changes', body: ['We may update these terms from time to time. Continued use after changes constitutes acceptance of the revised terms.'] },
    ],
  },
  {
    slug: 'refund-policy',
    path: '/refund-policy',
    title: 'Refund Policy',
    updated: 'June 2026',
    seo: { title: 'Refund Policy', description: `${brand.name}’s policy on refunds and data-quality guarantees.` },
    intro: 'We stand behind the quality of our data. This policy explains how refunds and replacements work.',
    sections: [
      { heading: 'Data accuracy guarantee', body: ['If verified email deliverability falls below the SLA stated in your order, we will replace the affected records or credit the corresponding portion of your fee.'] },
      { heading: 'How to request a replacement', body: ['Submit bounce reports within 30 days of delivery. We review the report and issue replacement records for any addresses confirmed invalid beyond the SLA threshold.'] },
      { heading: 'Non-refundable items', body: ['Custom research projects and services already performed are generally non-refundable once delivered, except where they fail the agreed acceptance criteria.'] },
      { heading: 'Contact', body: [`To start a request, email ${brand.salesEmail} with your order reference.`] },
    ],
  },
  {
    slug: 'data-policy',
    path: '/data-policy',
    title: 'Data Policy',
    updated: 'June 2026',
    seo: { title: 'Data Policy', description: `${brand.name}’s approach to sourcing, verifying and governing data.` },
    intro: 'This Data Policy describes how we source, verify, govern and retire the business data we provide.',
    sections: [
      { heading: 'Sourcing', body: ['We aggregate data from public records, licensed partners, opt-in directories and proprietary research. We do not knowingly source data from breaches or prohibited channels.'] },
      { heading: 'Verification', body: ['Records pass automated and human verification for deliverability and accuracy, and are re-validated on a rolling cycle.'] },
      { heading: 'Compliance', body: ['We support compliance with GDPR, CCPA/CPRA, CAN-SPAM and similar frameworks, and honor opt-out and suppression requests.'] },
      { heading: 'Removal requests', body: [`Individuals can request removal of their information by contacting ${brand.email}; we process verified requests promptly.`] },
    ],
  },
  {
    slug: 'do-not-sell',
    path: '/do-not-sell',
    title: 'Do Not Sell or Share My Information',
    updated: 'June 2026',
    seo: { title: 'Do Not Sell My Information', description: 'Exercise your right to opt out of the sale or sharing of your personal information.' },
    intro: 'Under certain privacy laws, you have the right to opt out of the “sale” or “sharing” of your personal information. This page explains how.',
    sections: [
      { heading: 'Your right to opt out', body: ['California and certain other residents may request that we not sell or share their personal information. We honor verified requests across our systems.'] },
      { heading: 'How to opt out', body: [`Email ${brand.email} with the subject “Do Not Sell” and include the personal information you want suppressed so we can locate and remove it.`] },
      { heading: 'Authorized agents', body: ['You may use an authorized agent to submit a request on your behalf; we may ask for proof of authorization.'] },
    ],
  },
  {
    slug: 'reseller-program',
    path: '/reseller-program',
    title: 'Reseller Program',
    updated: 'June 2026',
    seo: { title: 'Reseller & Partner Program', description: `Partner with ${brand.name} to resell data and demand-generation services.` },
    intro: `Agencies, consultancies and data providers can resell ${brand.name} services under our partner program. Here’s how it works.`,
    sections: [
      { heading: 'Who it’s for', body: ['Marketing agencies, sales consultancies, data brokers and platforms that want to offer verified B2B data and demand generation to their clients.'] },
      { heading: 'What partners get', body: ['Partners receive wholesale pricing, white-label delivery options and dedicated support.'], bullets: ['Tiered wholesale pricing', 'White-label data delivery', 'Co-branded sales materials', 'Dedicated partner manager'] },
      { heading: 'How to apply', body: [`Email ${brand.salesEmail} with “Reseller Program” and a short description of your business to get started.`] },
    ],
  },
]

export default legal
