// Resource library items (guides, white papers, infographics, videos, tools).
// Filtered by `type` on each /resources/* route.
const resources = [
  // Guides
  { type: 'guide', category: 'Guide', slug: 'icp-playbook', title: 'The ICP Playbook: Define a Target That Converts', excerpt: 'A step-by-step framework for turning a fuzzy “ideal customer” into a filterable, buildable data profile.' },
  { type: 'guide', category: 'Guide', slug: 'cold-email-deliverability', title: 'Cold Email Deliverability: A Practical Guide', excerpt: 'Warm-up, list hygiene and sending practices that keep you in the inbox and out of spam.' },
  { type: 'guide', category: 'Guide', slug: 'abm-data-foundations', title: 'ABM Data Foundations', excerpt: 'How to build complete buying-committee coverage for your target account list.' },
  { type: 'guide', category: 'Guide', slug: 'outbound-sequencing', title: 'Multi-Touch Outbound Sequencing', excerpt: 'Cadence design across email, phone and social that respects the buyer and books meetings.' },

  // White Papers
  { type: 'white-paper', category: 'White Paper', slug: 'state-of-b2b-data-2026', title: 'The State of B2B Data 2026', excerpt: 'What 600 revenue leaders told us about data decay, intent and pipeline efficiency.' },
  { type: 'white-paper', category: 'White Paper', slug: 'data-decay-report', title: 'The Real Cost of Data Decay', excerpt: 'Quantifying how stale records erode deliverability, rep productivity and pipeline.' },
  { type: 'white-paper', category: 'White Paper', slug: 'intent-signals-explained', title: 'Intent Signals, Explained', excerpt: 'A vendor-neutral look at intent data: what it is, where it comes from, and how to use it.' },

  // Infographics
  { type: 'infographic', category: 'Infographic', slug: 'anatomy-of-a-verified-record', title: 'Anatomy of a Verified Record', excerpt: 'The 12 checks every contact passes before it reaches your CRM.' },
  { type: 'infographic', category: 'Infographic', slug: 'pipeline-math', title: 'Pipeline Math: From List to Closed-Won', excerpt: 'The conversion benchmarks that turn list size into revenue projections.' },

  // Videos
  { type: 'video', category: 'Product', slug: 'how-datalyst-verifies-data', title: 'How Datalyst Verifies Every Record', excerpt: 'A 3-minute walkthrough of our multi-step verification pipeline.', duration: '3:12' },
  { type: 'video', category: 'Webinar', slug: 'building-a-tam-model', title: 'Webinar: Building a Defensible TAM Model', excerpt: 'Live session on sizing your market with account-level data.', duration: '28:40' },
  { type: 'video', category: 'Customer', slug: 'brightloom-story', title: 'Customer Story: Brightloom', excerpt: 'How Brightloom rebuilt outbound on clean data and doubled reply rates.', duration: '4:55' },

  // Tools
  { type: 'tool', category: 'Tool', slug: 'email-verifier', title: 'Free Email Verifier', excerpt: 'Check the deliverability of any business email address in seconds.', icon: 'MailCheck' },
  { type: 'tool', category: 'Tool', slug: 'tam-calculator', title: 'TAM Calculator', excerpt: 'Estimate your total addressable market from a few ICP inputs.', icon: 'PieChart' },
  { type: 'tool', category: 'Tool', slug: 'list-count-estimator', title: 'List Count Estimator', excerpt: 'See how many contacts match your filters before you request a quote.', icon: 'Filter' },
  { type: 'tool', category: 'Tool', slug: 'subject-line-grader', title: 'Subject Line Grader', excerpt: 'Score your cold-email subject lines for open-rate and spam risk.', icon: 'Megaphone' },
]

export default resources
