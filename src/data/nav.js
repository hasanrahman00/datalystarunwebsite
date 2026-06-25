// Primary navigation model. Drives the header mega-menu and the footer.
// Leaf links point at routes registered in src/data/registry.js.

export const dataHubs = [
  { label: 'Technology Users', to: '/technology-email-lists', desc: 'Reach users of 40+ platforms & tech stacks' },
  { label: 'Professionals', to: '/professionals-email-lists', desc: 'Decision-makers by title & seniority' },
  { label: 'Industries', to: '/industry-email-lists', desc: 'Verticalized B2B audiences' },
  { label: 'Healthcare', to: '/healthcare-email-lists', desc: 'Clinicians, facilities & practices' },
  { label: 'Government', to: '/government-email-lists', desc: 'Public-sector decision-makers' },
  { label: 'Geo-Targeted', to: '/geo-targeted-lists', desc: 'Country & region-level coverage' },
]

export const dataFeatured = [
  { label: 'B2B Scraping', to: '/b2b-scraping' },
  { label: 'Email Lists', to: '/email-lists' },
  { label: 'Total Addressable Market', to: '/total-addressable-market' },
  { label: 'B2B Sales Leads', to: '/b2b-sales-leads' },
  { label: 'Investors Email List', to: '/investors-email-list' },
]

// Data Intelligence hub — verticalized databases, intent & enrichment.
export const dataIntelligence = [
  { label: 'Industry Databases', to: '/data-intelligence/industry-databases', desc: 'Verticalized B2B data across thousands of industries' },
  { label: 'Data by Geography', to: '/data-intelligence/geography', desc: 'Target by country, region, state & city' },
  { label: 'Healthcare Data', to: '/data-intelligence/healthcare-data', desc: 'Practitioners, facilities & NPI-level detail' },
  { label: 'Professional Contacts', to: '/data-intelligence/professional-contacts', desc: 'Verified executives by title & seniority' },
  { label: 'Tech Install Base', to: '/data-intelligence/tech-install-base', desc: 'Target by the software companies actually run' },
  { label: 'Custom B2B Data', to: '/data-intelligence/custom-data', desc: 'Build-to-spec datasets for your exact ICP' },
  { label: 'Data Enrichment', to: '/services/data-enrichment', desc: 'Cleanse, enrich & append your records' },
  { label: 'Data Licensing', to: '/data-intelligence/data-licensing', desc: 'License databases in bulk for your product' },
]

export const intelligenceFeatured = [
  { label: 'Industry Databases', to: '/data-intelligence/industry-databases' },
  { label: 'Healthcare Data', to: '/data-intelligence/healthcare-data' },
  { label: 'Tech Install Base', to: '/data-intelligence/tech-install-base' },
  { label: 'Custom B2B Data', to: '/data-intelligence/custom-data' },
]

export const enrichLinks = [
  { label: 'Data Enrichment', to: '/services/data-enrichment' },
  { label: 'Email Append', to: '/services/email-append' },
  { label: 'Data Append', to: '/services/data-append' },
  { label: 'Data Verification', to: '/services/data-verification' },
  { label: 'Data Profiling', to: '/services/data-profiling' },
  { label: 'Data Management', to: '/services/data-management' },
  { label: 'Data Cleansing', to: '/services/data-cleansing' },
]

export const engageLinks = [
  { label: 'Lead Nurturing', to: '/services/lead-nurturing' },
  { label: 'Lead Management', to: '/services/lead-management' },
  { label: 'Appointment Setting', to: '/services/appointment-setting' },
  { label: 'Marketing Automation', to: '/services/marketing-automation' },
  { label: 'Account-Based Marketing', to: '/services/account-based-marketing' },
]

export const marketingLinks = [
  { label: 'Data-Driven Marketing', to: '/services/data-driven-marketing' },
  { label: 'Lead Generation', to: '/services/lead-generation' },
  { label: 'Demand Generation', to: '/services/demand-generation' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
  { label: 'Email Marketing', to: '/services/email-marketing' },
  { label: 'Telemarketing', to: '/services/telemarketing' },
  { label: 'Market Research', to: '/services/market-research' },
  { label: 'Event Marketing', to: '/services/event-marketing' },
  { label: 'Custom List Building', to: '/services/custom-list-building' },
]

export const growthLinks = [
  { label: 'Inside Sales Teams', to: '/services/inside-sales-teams' },
  { label: 'Double Your Homecare', to: '/services/double-your-homecare' },
  { label: 'Double Your Practice', to: '/services/double-your-practice' },
  { label: 'Cross-Channel Marketing', to: '/services/cross-channel-marketing' },
]

export const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Why DataCentra', to: '/why-us' },
  { label: 'Newsroom', to: '/news' },
  { label: 'Delivery Partners', to: '/partners' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Guides', to: '/resources/guides' },
  { label: 'White Papers', to: '/resources/white-papers' },
  { label: 'Infographics', to: '/resources/infographics' },
  { label: 'Video Gallery', to: '/resources/videos' },
  { label: 'Free Marketing Tools', to: '/resources/tools' },
]

// Top-level menu used by the header.
export const primaryNav = [
  {
    label: 'Data Solutions',
    type: 'mega',
    panelLabel: 'Browse by audience',
    hubs: dataHubs,
    featured: dataFeatured,
    cta: { label: 'Explore all data', to: '/email-lists' },
  },
  {
    label: 'Data Intelligence',
    type: 'mega',
    to: '/data-intelligence',
    panelLabel: 'Explore by capability',
    hubs: dataIntelligence,
    featured: intelligenceFeatured,
    cta: { label: 'Explore Data Intelligence', to: '/data-intelligence' },
  },
  { label: 'Enrich', type: 'list', links: enrichLinks, to: '/services/data-enrichment' },
  { label: 'Engage', type: 'list', links: engageLinks, to: '/services/account-based-marketing' },
  { label: 'Marketing', type: 'list', links: marketingLinks, to: '/services/data-driven-marketing' },
  { label: 'Growth', type: 'list', links: growthLinks, to: '/services/inside-sales-teams' },
  { label: 'Resources', type: 'list', links: resourceLinks, to: '/blog' },
  { label: 'Company', type: 'list', links: companyLinks, to: '/about' },
]

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Data Policy', to: '/data-policy' },
  { label: 'Do Not Sell My Info', to: '/do-not-sell' },
  { label: 'Reseller Program', to: '/reseller-program' },
]
