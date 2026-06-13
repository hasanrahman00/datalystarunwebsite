// Category hub pages. Either `childCategory` (lists leaf pages of that category)
// or `categories` (a directory of sub-hubs) drives the card grid.

const hubs = [
  {
    slug: 'email-lists',
    path: '/email-lists',
    title: 'B2B Email Lists & Data',
    eyebrow: 'Data Solutions',
    seo: {
      title: 'B2B Email Lists & Marketing Data',
      description:
        'Targeted, verified B2B email lists by technology, job title, industry, healthcare specialty, geography and more. Get matched counts and a free sample.',
    },
    hero: {
      headline: 'Verified B2B data, segmented the way you actually sell',
      subcopy:
        'Build a list around your exact ideal customer profile — by stack, title, industry, region or intent — and reach inboxes that convert.',
    },
    highlights: ['210M+ contacts', '95% deliverability SLA', 'Human + AI verified', 'CAN-SPAM & GDPR aligned'],
    stats: [
      { value: '210M+', label: 'Verified contacts' },
      { value: '64M+', label: 'Companies' },
      { value: '70+', label: 'Selectable fields' },
      { value: '170+', label: 'Countries' },
    ],
    categories: [
      { title: 'Technology Users', blurb: 'Reach decision-makers by the software and platforms they run.', path: '/technology-email-lists' },
      { title: 'Professionals', blurb: 'Target by job title, function and seniority across the org chart.', path: '/professionals-email-lists' },
      { title: 'Industries', blurb: 'Verticalized audiences from automotive to telecom.', path: '/industry-email-lists' },
      { title: 'Healthcare', blurb: 'Clinicians, facilities and practices with NPI-level accuracy.', path: '/healthcare-email-lists' },
      { title: 'Government', blurb: 'Public-sector buyers across federal, state and local.', path: '/government-email-lists' },
      { title: 'Geo-Targeted', blurb: 'Country and region-level coverage across the globe.', path: '/geo-targeted-lists' },
    ],
    gridEyebrow: 'Browse',
    gridTitle: 'Find your audience',
    gridDesc: 'Start with a category — each one drills into ready-to-deploy segments.',
    features: [
      { icon: 'ShieldCheck', title: 'Verified before delivery', body: 'Every record passes multi-step validation so your sender reputation stays intact.' },
      { icon: 'Filter', title: 'Granular targeting', body: 'Layer 70+ firmographic, technographic and demographic filters to pinpoint buyers.' },
      { icon: 'RefreshCw', title: 'Always refreshed', body: 'Continuous re-verification keeps records current as people change roles.' },
    ],
    faqs: [
      { q: 'How current is the data?', a: 'Records are re-verified on a rolling cycle and again at delivery, so you receive the freshest available data for your segment.' },
      { q: 'Can I get a sample before buying?', a: 'Yes. Share your target criteria and we’ll return matched counts plus a free sample so you can evaluate fit and quality.' },
      { q: 'What formats do you deliver in?', a: 'CSV and XLSX by default, with direct push to most major CRMs and marketing platforms on request.' },
    ],
  },
  {
    slug: 'technology-email-lists',
    path: '/technology-email-lists',
    title: 'Technology Users Email Lists',
    childCategory: 'Technology Users',
    eyebrow: 'Data Solutions',
    seo: {
      title: 'Technology Users Email Lists',
      description: 'Reach users of CRM, ERP, cloud and 40+ platforms with verified, install-based technology email lists.',
    },
    hero: {
      headline: 'Sell to the stack — reach users of the platforms you integrate with',
      subcopy: 'Technographic lists built from verified install data, so your outreach lands with teams already using the tools you complement or replace.',
    },
    highlights: ['Install-based targeting', '40+ platforms', 'Verified contacts'],
    stats: [
      { value: '40+', label: 'Platforms tracked' },
      { value: '18M+', label: 'Tech contacts' },
      { value: '95%', label: 'Deliverability SLA' },
      { value: 'Daily', label: 'Refresh cycle' },
    ],
    gridTitle: 'Technology user lists',
    gridDesc: 'Pick a platform — every list is built from verified install signals.',
    features: [
      { icon: 'Cpu', title: 'Technographic precision', body: 'Target by confirmed software installs, not guesses, to reach genuine users.' },
      { icon: 'Layers', title: 'Stack context', body: 'Understand the surrounding tools each account runs to sharpen your pitch.' },
      { icon: 'Target', title: 'Buyer-ready segments', body: 'Filter by company size, region and role on top of the technology signal.' },
    ],
  },
  {
    slug: 'professionals-email-lists',
    path: '/professionals-email-lists',
    title: 'Professionals Email Lists',
    childCategory: 'Professionals',
    eyebrow: 'Data Solutions',
    seo: {
      title: 'Professionals & Job Title Email Lists',
      description: 'Reach decision-makers by job title, function and seniority — from C-suite to specialists — with verified contact data.',
    },
    hero: {
      headline: 'Reach the right title, in the right seat, at the right account',
      subcopy: 'Role-based lists mapped to the org chart so your message reaches the people who own the budget and the problem.',
    },
    highlights: ['By title & seniority', 'C-suite to specialist', 'Direct-dial available'],
    stats: [
      { value: '40M+', label: 'Decision-makers' },
      { value: '900+', label: 'Job functions' },
      { value: '95%', label: 'Deliverability SLA' },
      { value: '170+', label: 'Countries' },
    ],
    gridTitle: 'Professional & title lists',
    features: [
      { icon: 'Users', title: 'Org-chart mapping', body: 'Target by exact title, function and seniority to reach true decision-makers.' },
      { icon: 'Briefcase', title: 'Verified roles', body: 'Titles and tenure are validated so you reach people still in the seat.' },
      { icon: 'Phone', title: 'Multi-channel', body: 'Add verified direct dials and LinkedIn URLs for true multi-touch outreach.' },
    ],
  },
  {
    slug: 'industry-email-lists',
    path: '/industry-email-lists',
    title: 'Industry-Wise Email Lists',
    childCategory: 'Industries',
    eyebrow: 'Data Solutions',
    seo: {
      title: 'Industry-Wise B2B Email Lists',
      description: 'Verticalized B2B email lists across automotive, finance, manufacturing, real estate, retail and more.',
    },
    hero: {
      headline: 'Speak your buyer’s language with verticalized audiences',
      subcopy: 'Industry-specific lists segmented by SIC/NAICS, revenue and headcount so your campaigns resonate with sector context.',
    },
    highlights: ['SIC / NAICS coded', 'Revenue & size filters', 'Sector-verified'],
    stats: [
      { value: '25+', label: 'Industries' },
      { value: '64M+', label: 'Companies' },
      { value: '95%', label: 'Deliverability SLA' },
      { value: 'Daily', label: 'Refresh cycle' },
    ],
    gridTitle: 'Industry lists',
    features: [
      { icon: 'Building2', title: 'Vertical depth', body: 'Sector-coded records let you tailor messaging to each industry’s pains.' },
      { icon: 'BarChart3', title: 'Firmographic filters', body: 'Layer revenue, headcount and growth signals on top of the vertical.' },
      { icon: 'Globe', title: 'Global coverage', body: 'Reach sector buyers across 170+ countries from one source.' },
    ],
  },
  {
    slug: 'healthcare-email-lists',
    path: '/healthcare-email-lists',
    title: 'Healthcare Email Lists',
    childCategory: 'Healthcare',
    eyebrow: 'Data Solutions',
    seo: {
      title: 'Healthcare Email Lists',
      description: 'Reach physicians, nurses, dentists, hospitals and healthcare facilities with NPI-verified, compliant data.',
    },
    hero: {
      headline: 'Reach clinicians and facilities with NPI-level accuracy',
      subcopy: 'Compliant healthcare audiences — from specialists to hospital decision-makers — verified against authoritative provider records.',
    },
    highlights: ['NPI-verified', 'Specialty filters', 'HIPAA-aware sourcing'],
    stats: [
      { value: '11M+', label: 'Provider records' },
      { value: '200+', label: 'Specialties' },
      { value: '95%', label: 'Deliverability SLA' },
      { value: 'NPI', label: 'Verified' },
    ],
    gridTitle: 'Healthcare lists',
    features: [
      { icon: 'Stethoscope', title: 'Specialty targeting', body: 'Filter by specialty, license and facility type to reach the right clinicians.' },
      { icon: 'ShieldCheck', title: 'Compliant sourcing', body: 'Data is sourced and handled with healthcare privacy obligations in mind.' },
      { icon: 'HeartPulse', title: 'Facility decision-makers', body: 'Reach administrators and purchasing leads, not just practitioners.' },
    ],
  },
  {
    slug: 'government-email-lists',
    path: '/government-email-lists',
    title: 'Government Sector Email Lists',
    childCategory: 'Government',
    eyebrow: 'Data Solutions',
    seo: {
      title: 'Government Sector Email Lists',
      description: 'Reach public-sector decision-makers across federal, state, local and education with verified contact data.',
    },
    hero: {
      headline: 'Reach public-sector buyers across every level of government',
      subcopy: 'Verified contacts for federal, state, local and education agencies — mapped to procurement and program roles.',
    },
    highlights: ['Federal to local', 'Procurement roles', 'Education sector'],
    stats: [
      { value: '3M+', label: 'Gov contacts' },
      { value: '4', label: 'Gov levels' },
      { value: '95%', label: 'Deliverability SLA' },
      { value: '50', label: 'US states' },
    ],
    gridTitle: 'Government lists',
    features: [
      { icon: 'Landmark', title: 'Every level', body: 'Federal, state, local and education buyers in a single, structured source.' },
      { icon: 'Target', title: 'Role-mapped', body: 'Reach procurement, IT and program owners who shape public spend.' },
      { icon: 'ShieldCheck', title: 'Compliant', body: 'Sourced and maintained in line with public-records best practices.' },
    ],
  },
  {
    slug: 'geo-targeted-lists',
    path: '/geo-targeted-lists',
    title: 'Geo-Targeted Email Lists',
    childCategory: 'Geo-Targeted',
    eyebrow: 'Data Solutions',
    seo: {
      title: 'Geo-Targeted B2B Email Lists',
      description: 'Country and region-level B2B email lists across the USA, Canada, UK, Australia, Europe and APAC.',
    },
    hero: {
      headline: 'Go to market region by region with localized data',
      subcopy: 'Country and city-level lists that respect local data rules, so you can expand into new markets with confidence.',
    },
    highlights: ['Country & city level', 'Locale-aware', 'Global coverage'],
    stats: [
      { value: '170+', label: 'Countries' },
      { value: '210M+', label: 'Global contacts' },
      { value: '95%', label: 'Deliverability SLA' },
      { value: 'GDPR', label: 'Aligned' },
    ],
    gridTitle: 'Geo-targeted lists',
    features: [
      { icon: 'Globe', title: 'Local coverage', body: 'Drill from country to city while keeping firmographic precision.' },
      { icon: 'ShieldCheck', title: 'Region-aware compliance', body: 'Data is handled to the privacy standard of each target region.' },
      { icon: 'TrendingUp', title: 'Market expansion', body: 'Test and scale into new geographies without sourcing local vendors.' },
    ],
  },
]

export default hubs
