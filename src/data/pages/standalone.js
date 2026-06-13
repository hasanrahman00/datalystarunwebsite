// Standalone data pages that live at the top level (not under a category prefix).
const standalone = [
  {
    slug: 'b2b-sales-leads',
    path: '/b2b-sales-leads',
    category: 'Sales Leads',
    title: 'B2B Sales Leads',
    seo: {
      title: 'B2B Sales Leads',
      description: 'Sales-ready B2B leads matched to your ICP with verified emails, direct dials and buying signals.',
    },
    hero: {
      headline: 'Sales-ready leads, matched to the accounts you want to win',
      subcopy: 'Skip the list cleanup. Get verified, ICP-matched contacts with direct dials and intent signals your reps can act on today.',
    },
    highlights: ['ICP-matched', 'Verified direct dials', 'Intent signals', 'CRM-ready'],
    stats: [
      { value: '210M+', label: 'Contacts to match' },
      { value: '95%', label: 'Email deliverability' },
      { value: '70+', label: 'Targeting filters' },
      { value: '<24h', label: 'Turnaround' },
    ],
    intro: {
      eyebrow: 'Overview',
      title: 'Pipeline starts with the right list',
      body: [
        'Most outbound underperforms because the list is wrong, not the message. We start from your ideal customer profile and build a lead set that actually maps to it.',
        'Every contact is verified for deliverability and enriched with the firmographic and intent context your reps need to personalize at scale.',
      ],
    },
    included: [
      'Full name & verified job title', 'Verified work email', 'Direct-dial phone (where available)',
      'LinkedIn profile URL', 'Company name & domain', 'Industry (SIC/NAICS)',
      'Company size & revenue band', 'HQ & contact location', 'Technographic signals',
      'Recent intent / buying signals', 'Seniority & department', 'Time-zone for outreach timing',
    ],
    features: [
      { icon: 'Target', title: 'ICP-matched', body: 'We build to your definition of a good account, not a generic template.' },
      { icon: 'ShieldCheck', title: 'Deliverability-checked', body: 'Bounce risk is filtered out before the list ever reaches your reps.' },
      { icon: 'Zap', title: 'Intent-aware', body: 'Prioritize accounts showing in-market signals so reps work the warmest leads first.' },
    ],
    useCases: [
      { icon: 'Phone', title: 'Outbound SDR teams', body: 'Feed cold-call and email cadences with clean, dialable contacts.' },
      { icon: 'Network', title: 'ABM programs', body: 'Build complete buying-committee coverage for target accounts.' },
      { icon: 'Rocket', title: 'New market entry', body: 'Stand up pipeline in a new segment or region without guesswork.' },
    ],
    faqs: [
      { q: 'How do you match leads to our ICP?', a: 'We translate your firmographic, technographic and role criteria into filters, then build and verify a list against them — and send a sample for sign-off first.' },
      { q: 'Are direct dials included?', a: 'Verified direct dials are included wherever available; coverage varies by region and seniority and is shown in your counts.' },
      { q: 'Can you push leads into our CRM?', a: 'Yes — we deliver CSV/XLSX or push directly into most major CRMs and sales-engagement platforms.' },
    ],
  },
  {
    slug: 'total-addressable-market',
    path: '/total-addressable-market',
    category: 'Market Intelligence',
    title: 'Total Addressable Market (TAM)',
    seo: {
      title: 'Total Addressable Market (TAM) Data',
      description: 'Size and map your total addressable market with account- and contact-level data across every segment you serve.',
    },
    hero: {
      headline: 'See your entire addressable market — then go take it',
      subcopy: 'Quantify every account and contact that fits your ICP, so you can size opportunity, set territories and plan coverage with real data.',
    },
    highlights: ['Account + contact level', 'Whitespace mapping', 'Territory planning'],
    stats: [
      { value: '64M+', label: 'Companies' },
      { value: '210M+', label: 'Contacts' },
      { value: '25+', label: 'Industries' },
      { value: '170+', label: 'Countries' },
    ],
    intro: {
      eyebrow: 'Overview',
      title: 'Plan against the whole market, not a sample',
      body: [
        'A defensible TAM model needs more than analyst estimates — it needs the actual accounts and contacts that make up your market.',
        'We map your addressable universe at account and contact level so leadership can size opportunity and ops can plan territories and quotas with confidence.',
      ],
    },
    included: [
      'Account universe by ICP filters', 'Contact counts per account', 'Industry & sub-industry coding',
      'Revenue & employee bands', 'Geographic distribution', 'Technographic install base',
      'Whitespace vs. current customers', 'Segment & tier breakdowns', 'Buying-committee sizing',
      'Exportable account lists', 'Coverage gap analysis', 'Refreshable on a schedule',
    ],
    features: [
      { icon: 'PieChart', title: 'Quantified opportunity', body: 'Replace guesswork with account-level market sizing leadership can trust.' },
      { icon: 'Boxes', title: 'Segment clarity', body: 'Break the market into tiers and segments to focus go-to-market effort.' },
      { icon: 'BarChart3', title: 'Coverage planning', body: 'Map whitespace and design territories that balance load and potential.' },
    ],
    useCases: [
      { icon: 'TrendingUp', title: 'Board & fundraising', body: 'Back up TAM/SAM/SOM slides with bottoms-up, sourceable data.' },
      { icon: 'Users', title: 'Sales capacity planning', body: 'Right-size headcount and territories to real account density.' },
      { icon: 'Target', title: 'Segment prioritization', body: 'Decide where to invest based on opportunity, not anecdote.' },
    ],
    faqs: [
      { q: 'What’s the difference between TAM data and a list?', a: 'A list is who you’ll contact next; TAM data is the full, structured universe of accounts and contacts that fit your ICP, used for sizing and planning.' },
      { q: 'Can you compare TAM to our current customers?', a: 'Yes — we can overlay your customer file to surface whitespace and penetration by segment.' },
      { q: 'How often can it be refreshed?', a: 'TAM models can be refreshed on a recurring schedule so planning always reflects current market data.' },
    ],
  },
  {
    slug: 'investors-email-list',
    path: '/investors-email-list',
    category: 'Specialty Lists',
    title: 'Investors Email List',
    seo: {
      title: 'Investors Email List',
      description: 'Reach accredited investors, VCs, angels, PE firms and family offices with verified, compliant contact data.',
    },
    hero: {
      headline: 'Reach investors who fund companies like yours',
      subcopy: 'Verified contact data for VCs, angels, PE firms and family offices — segmented by stage, sector focus and check size.',
    },
    highlights: ['VC, angel, PE & family office', 'By stage & sector', 'Compliant sourcing'],
    stats: [
      { value: '180K+', label: 'Investor contacts' },
      { value: '12K+', label: 'Firms' },
      { value: '95%', label: 'Deliverability SLA' },
      { value: 'Global', label: 'Coverage' },
    ],
    included: [
      'Investor name & title', 'Verified email', 'Firm name & website',
      'Investor type (VC/angel/PE/FO)', 'Stage focus', 'Sector / thesis focus',
      'Typical check size', 'AUM band (where available)', 'Location',
      'LinkedIn URL', 'Portfolio signals', 'Recent activity signals',
    ],
    features: [
      { icon: 'Target', title: 'Thesis-matched', body: 'Filter by stage and sector so you only reach investors who fund your space.' },
      { icon: 'ShieldCheck', title: 'Compliant', body: 'Sourced and maintained with applicable privacy and outreach rules in mind.' },
      { icon: 'Briefcase', title: 'Decision-makers', body: 'Reach partners and principals who actually write checks.' },
    ],
    useCases: [
      { icon: 'Rocket', title: 'Fundraising', body: 'Build a targeted outreach list for your raise without scraping LinkedIn.' },
      { icon: 'Network', title: 'Investor relations', body: 'Keep a clean, current contact base for ongoing investor updates.' },
      { icon: 'Megaphone', title: 'Deal sourcing', body: 'Help bankers and platforms reach the right capital partners.' },
    ],
    faqs: [
      { q: 'Is the investor data compliant to use?', a: 'Yes — data is sourced and handled in line with applicable privacy and anti-spam regulations for B2B outreach.' },
      { q: 'Can I filter by stage and sector?', a: 'Absolutely. Segment by investor type, stage focus, sector thesis and typical check size to reach the right partners.' },
      { q: 'How fresh are the contacts?', a: 'Records are re-verified on a rolling basis and again at delivery to maximize deliverability.' },
    ],
  },
]

export default standalone
