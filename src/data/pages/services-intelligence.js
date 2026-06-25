// DataCentra service landing pages — Data Intelligence group.
// Routed at /data-intelligence/<slug> (explicit path on each object).
export default [
  {
    slug: "industry-databases",
    path: "/data-intelligence/industry-databases",
    group: "intelligence",
    title: "Industry Databases",
    blurb: "Verticalized B2B contact and company databases built around the firmographics, codes, and intent signals each industry actually buys on.",
    hero: {
      headline: "Data built around your industry",
      subcopy: "DataCentra organizes contacts and companies by vertical, so you target the right accounts with industry-specific firmographics, SIC/NAICS codes, and buyer-intent signals instead of a generic master list."
    },
    highlights: ["Thousands of industries", "18,000+ intent topics", "SIC/NAICS targeting"],
    stats: [
      { value: "12K+", label: "Industry segments" },
      { value: "18K+", label: "Intent topics tracked" },
      { value: "210M+", label: "Contacts on file" },
      { value: "93%", label: "Email deliverability" }
    ],
    intro: {
      eyebrow: "Data Intelligence",
      title: "Stop forcing every industry into one list",
      body: [
        "A generic database treats a hospital procurement lead and a factory plant manager the same way: a name, a title, maybe an email. But the fields that decide whether they convert are different. One cares about bed count and care setting; the other cares about production lines and equipment spend. A flat list flattens those differences out.",
        "DataCentra keeps them separate. Each vertical carries its own firmographics, its own SIC and NAICS coverage, and its own intent topics, so a campaign for Medical Device buyers is scoped on the attributes that matter to Medical Device buyers, not the lowest common denominator across every industry at once."
      ]
    },
    benefits: [
      { icon: "Filter", title: "Target by the right attributes", body: "Filter inside a vertical on the firmographics that actually predict fit, then layer SIC/NAICS codes to widen or tighten reach without leaving the segment." },
      { icon: "Target", title: "Reach buyers showing intent", body: "Each industry is mapped to its own set of intent topics, so you can prioritize accounts researching your category right now instead of spraying the whole list." },
      { icon: "Layers", title: "Coverage across every vertical", body: "From Healthcare and Pharmaceutical to Oil and Gas, Manufacturing, SaaS, Logistics, and Finance, one platform spans the industries your pipeline touches." }
    ],
    process: [
      { title: "Pick your vertical", body: "Start from an industry view such as Healthcare, Technology, Automotive, or Finance instead of a single undifferentiated master list." },
      { title: "Scope the segment", body: "Narrow with industry-specific firmographics and SIC/NAICS codes until the account set matches your ideal customer profile." },
      { title: "Layer intent signals", body: "Add the buyer-intent topics relevant to that vertical to surface accounts actively researching your category." },
      { title: "Export verified records", body: "Pull clean, deduplicated contacts and companies into your CRM, sequencer, or ad platform ready to work." }
    ],
    deliverables: [
      "Industry-segmented contact lists",
      "Company firmographic profiles",
      "SIC and NAICS code targeting",
      "Per-vertical buyer-intent topics",
      "Verified business email addresses",
      "Direct dial and mobile numbers",
      "CRM-ready CSV and API export",
      "Deduplication and field mapping"
    ],
    faqs: [
      { q: "How are industries organized in the database?", a: "Every record is tagged to a vertical and to standard SIC and NAICS codes. You can browse top-level industries like Healthcare, Manufacturing, or SaaS, then drill into narrower sub-segments to match your ICP." },
      { q: "What are buyer-intent topics and how do they work per industry?", a: "Intent topics are subjects accounts are actively researching online. We track 18,000+ of them and map each to the relevant verticals, so a Medical Device segment surfaces different signals than a Logistics one." },
      { q: "Can I target multiple industries at once?", a: "Yes. You can build a list that spans several verticals, or keep them separate so each campaign uses the firmographics and intent topics specific to that industry." },
      { q: "How current and accurate is the data?", a: "Records are refreshed continuously and emails are re-verified before delivery, with deliverability typically around 93 percent. You receive deduplicated, field-mapped files ready to import." }
    ],
    testimonial: {
      quote: "We used to buy one big list and waste half of it on the wrong industries. With DataCentra we work inside the verticals that fit us and lead by intent signal, and our reply rate roughly doubled in a quarter.",
      name: "Marcus Vidale",
      role: "VP of Demand Generation",
      company: "Northbridge Medical Systems"
    }
  },
  {
    slug: "geography",
    path: "/data-intelligence/geography",
    group: "intelligence",
    title: "Data by Geography",
    blurb: "Target buyers by country, region, state, or city with localized firmographics and intent signals across 170+ countries.",
    hero: {
      headline: "Reach the right buyers, anywhere",
      subcopy: "DataCentra maps B2B contacts and intent signals to the exact geographies you sell into, so a campaign in Munich reads as native as one in Manchester."
    },
    highlights: ["170+ countries", "City-level targeting", "Timezone-aware records"],
    stats: [
      { value: "170+", label: "Countries covered" },
      { value: "240M+", label: "Geo-tagged contacts" },
      { value: "94%", label: "Location field accuracy" },
      { value: "<24h", label: "Regional list turnaround" }
    ],
    intro: {
      eyebrow: "Data by Geography",
      title: "Sell into a region like you live there",
      body: [
        "Most lists treat the whole world as one bucket: a job title, an email, and a country code if you're lucky. That's fine until you're routing a sales team across nine timezones or running a campaign that has to land differently in Tokyo than it does in Toronto.",
        "DataCentra structures every record around where the buyer actually is. You filter down to country, region, state, or city, then layer on firmographics and intent so your outreach reaches the right people at the right hour, in language that fits the market."
      ]
    },
    benefits: [
      { icon: "Globe", title: "Coverage that holds up abroad", body: "Build segments across 170+ countries without stitching together regional vendors. EMEA, APAC, LATAM, and North America all come from one consistent schema." },
      { icon: "CalendarClock", title: "Outreach timed to the buyer", body: "Every contact carries a timezone and local working-hours field, so your sequences and dialer hit inboxes and phones during the prospect's day, not yours." },
      { icon: "ShieldCheck", title: "Sourcing that respects local law", body: "Records are gathered with GDPR and CCPA in mind, with consent and jurisdiction flags so your team knows what's safe to send where." }
    ],
    process: [
      { title: "Define the map", body: "Tell us the countries, regions, states, or cities you sell into, plus any radius or metro-area rules you want applied." },
      { title: "Layer the filters", body: "Add firmographics, job titles, and intent signals so each geography returns the accounts that actually fit your motion." },
      { title: "Localize the fields", body: "We attach timezone, primary language, and region-specific firmographics like local entity names and currency." },
      { title: "Deliver and refresh", body: "Receive the segment as CSV, XLSX, or a CRM sync, then schedule refreshes to keep moves and new openings current." }
    ],
    deliverables: [
      "Country and region filters",
      "State, city, and metro targeting",
      "Timezone and local-hours fields",
      "Primary language per contact",
      "Localized firmographic fields",
      "GDPR/CCPA consent flags",
      "Geo-tagged intent signals",
      "CSV, XLSX, or CRM export"
    ],
    faqs: [
      { q: "How granular can the targeting get?", a: "Down to the city and metro level. You can filter by country, region, state, city, or a radius around a location, and combine several of those in one segment." },
      { q: "Is the data compliant for European outreach?", a: "Records are sourced with GDPR and CCPA in mind and carry consent and jurisdiction flags. You see what's permissible to contact in each market before you send, so legal stays comfortable." },
      { q: "Do you cover emerging markets, or just the US and Western Europe?", a: "Both. Coverage spans 170+ countries including APAC, LATAM, the Middle East, and Africa, all built on one schema so fields stay consistent wherever you expand." },
      { q: "How current is the location data?", a: "Contacts are re-verified on a rolling basis, and you can schedule refreshes so role changes and relocations get caught instead of quietly aging out of your CRM." }
    ],
    testimonial: {
      quote: "We expanded into four new markets last year and DataCentra was the reason it didn't turn into a data mess. The timezone and language fields alone made our SDR routing twice as efficient.",
      name: "Daniel Brandt",
      role: "VP of Global Demand Generation",
      company: "Helios Cloud"
    }
  },
  {
    slug: "healthcare-data",
    path: "/data-intelligence/healthcare-data",
    group: "intelligence",
    title: "Healthcare Data",
    blurb: "Verified data on physicians, nurses, specialists, and facilities, with NPI, license, and credential detail for compliant outreach.",
    hero: {
      headline: "Reach the right clinicians, not just any list",
      subcopy: "DataCentra maps practitioners and facilities down to NPI and specialty, so your med-device, pharma, and healthcare campaigns land with the people who can actually say yes."
    },
    highlights: ["NPI-level detail", "Specialty filters", "HIPAA-aware sourcing"],
    stats: [
      { value: "9.4M+", label: "Practitioner records" },
      { value: "330K+", label: "Facilities mapped" },
      { value: "97%", label: "NPI match rate" },
      { value: "<48h", label: "Custom list turnaround" }
    ],
    intro: {
      eyebrow: "Data Intelligence",
      title: "Healthcare data that knows who does what",
      body: [
        "Generic B2B lists treat a cardiologist, a hospital purchasing lead, and a nurse practitioner as the same record. They are not. The wrong title gets your message ignored, and in healthcare, the wrong send can cost you more than a bounce.",
        "DataCentra structures healthcare around the people and places that decide. Every record carries NPI, specialty, credentials, and the facility behind it, so you can build segments by what a contact actually practices, prescribes, or buys, not by a job title someone typed into a form."
      ]
    },
    benefits: [
      { icon: "Stethoscope", title: "Target by real specialty", body: "Filter to the exact practitioners you sell to, oncologists, orthopedic surgeons, ICU nurses, by NPI taxonomy and credential, not a vague title string." },
      { icon: "ShieldCheck", title: "Source you can defend", body: "Records are built from public registries and compliant channels with HIPAA-aware handling, so your compliance team signs off instead of slowing you down." },
      { icon: "Building2", title: "See the facility behind the name", body: "Connect each clinician to their hospital, clinic, or group practice with size and location, so you know the size of the account before you reach out." }
    ],
    process: [
      { title: "Define the segment", body: "Tell us the specialties, credentials, facility types, and regions you sell into, and we translate them into precise NPI and taxonomy filters." },
      { title: "Match and verify", body: "We resolve each contact against registries and our verification layer to confirm identity, license status, and reachable contact details." },
      { title: "Enrich with facility context", body: "Every practitioner is tied to their organization with facility size, type, and location so accounts are scored before you spend a rep's time." },
      { title: "Deliver and refresh", body: "You get a clean, deduplicated file in your tools, and we re-verify on a schedule so the list does not rot in your CRM." }
    ],
    deliverables: [
      "NPI and taxonomy codes",
      "Specialty and sub-specialty fields",
      "License and credential status",
      "Verified work email addresses",
      "Direct and facility phone numbers",
      "Hospital, clinic, group affiliation",
      "Facility size and type",
      "Scheduled re-verification updates"
    ],
    faqs: [
      { q: "Where does the healthcare data come from?", a: "We build records from public sources like the NPI registry and state licensing boards, combined with compliant commercial channels. Everything is handled with HIPAA-aware processes, and we can walk your compliance team through sourcing on request." },
      { q: "Can I filter by a specific specialty or sub-specialty?", a: "Yes. Because every record carries NPI taxonomy codes and credential fields, you can target down to a precise specialty, such as interventional cardiology or pediatric oncology, instead of relying on free-text titles." },
      { q: "How current are the records?", a: "License status and contact details are re-verified on a recurring schedule, and we timestamp every field. For active campaigns we can refresh a segment before delivery so you are not working from stale data." },
      { q: "Do you cover facilities as well as individual practitioners?", a: "Both. We map hospitals, clinics, and group practices with size, type, and location, and we connect each practitioner to the organization they work in so you can target by account or by individual." }
    ],
    testimonial: {
      quote: "We stopped buying broad medical lists and started buying segments that match our device line. DataCentra got us to the exact surgical specialties we needed, with the facility detail to prioritize the big accounts first.",
      name: "Karen Osei",
      role: "VP of Marketing",
      company: "Meridian MedTech"
    }
  },
  {
    slug: "professional-contacts",
    path: "/data-intelligence/professional-contacts",
    group: "intelligence",
    title: "Professional Contacts",
    blurb: "Verified executive and decision-maker contacts with direct dials, work emails, and LinkedIn URLs, filtered by title, seniority, and function.",
    hero: {
      headline: "Reach the buyer, not the inbox",
      subcopy: "DataCentra gives outbound and ABM teams verified contacts for the exact people who sign off on the deal. Filter by job title, seniority, department, and function, then export direct dials, work emails, and LinkedIn URLs."
    },
    highlights: ["170+ countries", "Verified work emails", "Direct-dial phones"],
    stats: [
      { value: "210M+", label: "Professional contacts" },
      { value: "94%", label: "Email deliverability" },
      { value: "180+", label: "Job functions covered" },
      { value: "<24h", label: "Turnaround on a list" }
    ],
    intro: {
      eyebrow: "Data Intelligence",
      title: "Find the person who actually owns the decision",
      body: [
        "Most prospecting lists are a pile of generic addresses: info@, a switchboard number, a contact who left two years ago. You spend the first half of every campaign figuring out who to talk to instead of talking to them. DataCentra starts the other way around, from the person and the role that controls the budget.",
        "Search by job title, seniority, department, and function, then pull the contact details that get a reply: a verified work email, a direct-dial phone, and a LinkedIn URL. Every record is checked before it reaches you, so your reps spend their time selling instead of cleaning rows."
      ]
    },
    benefits: [
      { icon: "Target", title: "Target by role, not by guess", body: "Filter on title, seniority, department, and function so your list is the people who can say yes, not whoever happened to share an email address." },
      { icon: "Phone", title: "Channels that get a response", body: "Direct-dial phones, verified work emails, and LinkedIn URLs on every record, so reps can reach a buyer the way that buyer actually answers." },
      { icon: "ShieldCheck", title: "Verified before you send", body: "Each email and phone is validated and re-checked on a schedule, so bounce rates stay low and your sending domain keeps its reputation." }
    ],
    process: [
      { title: "Define the buyer", body: "Tell us the titles, seniority levels, departments, functions, and regions that map to your ideal customer." },
      { title: "We match contacts", body: "We pull matching decision-makers from our global database and resolve each one to a real person at a real company." },
      { title: "Verify and enrich", body: "Every email and phone is validated, and each record is enriched with company, role, and LinkedIn detail." },
      { title: "Deliver your list", body: "You get a clean, deduplicated file ready for your CRM or sequencer, usually within a day." }
    ],
    deliverables: [
      "Verified work email address",
      "Direct-dial phone number",
      "Full name and job title",
      "Seniority and department tags",
      "LinkedIn profile URL",
      "Company name and website",
      "Location and time zone",
      "CRM-ready CSV or XLSX export"
    ],
    faqs: [
      { q: "How do you verify the emails and phone numbers?", a: "Every email runs through SMTP and syntax validation before delivery, and direct dials are checked against current sources. We re-verify records on a rolling schedule so the data stays accurate, not just accurate the day it was collected." },
      { q: "Can I target very specific roles or industries?", a: "Yes. You can filter by exact job titles, seniority bands, departments, functions, company size, industry, and region, and combine those filters to match a narrow ICP rather than a broad category." },
      { q: "What format do I get the contacts in?", a: "A deduplicated CSV or XLSX with one row per contact and clearly labeled fields, ready to import into Salesforce, HubSpot, or your outreach tool. We can also align the schema to your CRM on request." },
      { q: "How fresh is the data?", a: "Lists are matched and verified at the time you order, not pulled from a stale cache. Most lists are delivered within 24 hours, and contacts are re-checked on an ongoing cycle." }
    ],
    testimonial: {
      quote: "We stopped buying generic lists and started ordering by exact title and seniority. Connect rates on our outbound calls roughly doubled because we were finally reaching the person who owns the budget.",
      name: "Tom Becker",
      role: "VP of Sales Development",
      company: "Cobalt Systems"
    }
  },
  {
    slug: "tech-install-base",
    path: "/data-intelligence/tech-install-base",
    group: "intelligence",
    title: "Tech Install Base Data",
    blurb: "See the exact software and hardware companies run, then time your outreach to install, uninstall, and renewal signals.",
    hero: {
      headline: "Target accounts by the tech they run",
      subcopy: "DataCentra maps the real software and hardware stack behind every account, so you reach buyers when their tools are up for renewal or ready to be replaced."
    },
    highlights: ["9,000+ technologies", "Renewal signals", "Weekly refresh"],
    stats: [
      { value: "9,000+", label: "Technologies tracked" },
      { value: "180M+", label: "Mapped accounts" },
      { value: "94%", label: "Detection accuracy" },
      { value: "7-day", label: "Refresh cadence" }
    ],
    intro: {
      eyebrow: "Technographic targeting",
      title: "Know the stack before you pitch",
      body: [
        "Firmographics tell you a company exists. They don't tell you it runs Salesforce on AWS, pays for a marketing suite you displace, or has a security tool coming up for renewal next quarter. That gap is where most outbound wastes its budget, pitching the wrong angle to accounts that already solved the problem.",
        "DataCentra detects the CRM, cloud, marketing, security, ERP, and database technologies an account actually uses, then tracks when those tools get added or dropped. You build lists around fit and timing instead of guesswork, and your reps walk into every conversation already knowing what's installed."
      ]
    },
    benefits: [
      { icon: "Target", title: "Pitch the right angle", body: "Lead with displacement when an account runs a competitor, and lead with integration when they run a complementary tool. Every message matches the stack already in place." },
      { icon: "CalendarClock", title: "Time the renewal window", body: "Catch install and uninstall events and surface contracts approaching renewal, so reps reach buyers while budget and intent are both live instead of months too late." },
      { icon: "Filter", title: "Build sharper segments", body: "Slice your market by any combination of technologies, then layer firmographics on top to isolate the accounts where your product genuinely fits." }
    ],
    process: [
      { title: "Define your stack", body: "Tell us the technologies that signal a fit, a displacement play, or a complementary opportunity for your product." },
      { title: "We detect and map", body: "We scan public signals and verified sources to confirm which tools each account runs and at what scale." },
      { title: "Track the signals", body: "We monitor installs, uninstalls, and renewal windows, flagging accounts the moment their stack shifts." },
      { title: "Deliver to your workflow", body: "Receive matched, refreshed records as a file or pushed straight into your CRM and outreach tools." }
    ],
    deliverables: [
      "Detected technology stack per account",
      "CRM, cloud, and ERP signals",
      "Marketing and security tooling",
      "Install and uninstall events",
      "Renewal-window timing flags",
      "Firmographic and contact match",
      "CSV, XLSX, or API delivery",
      "Weekly data refresh"
    ],
    faqs: [
      { q: "How do you detect what technology an account runs?", a: "We combine public web and DNS signals, job-posting mentions, and verified third-party sources, then cross-check them so each technology tag reflects real usage rather than a single weak hint." },
      { q: "Can I target accounts running a specific competitor?", a: "Yes. Pick any technology in our catalog and we'll build a list of accounts that run it, which is the foundation of most displacement campaigns." },
      { q: "How fresh is the data, and do you track changes?", a: "We refresh weekly and track install and uninstall events, so you see not just the current stack but when it changes and which renewal windows are opening." },
      { q: "How do I get the data into my tools?", a: "Choose a flat file export in CSV or XLSX, or connect via API to sync matched, refreshed records directly into your CRM and outreach platform." }
    ],
    testimonial: {
      quote: "We stopped spraying our whole TAM and started targeting accounts on the legacy platform we replace. Knowing the stack and the renewal timing before the first call roughly doubled our reply rate.",
      name: "Sofia Klein",
      role: "VP of Demand Generation",
      company: "Tellburst Software"
    }
  },
  {
    slug: "custom-data",
    path: "/data-intelligence/custom-data",
    group: "intelligence",
    title: "Custom B2B Data",
    blurb: "When stock databases fall short, DataCentra builds research-grade datasets to your exact ICP, attributes, and use case.",
    hero: {
      headline: "Data built to your exact spec",
      subcopy: "Off-the-shelf lists rarely match a sharp ICP. DataCentra builds custom datasets to your criteria, with the attributes and verified records you actually need."
    },
    highlights: ["Build-to-spec datasets", "Bespoke attributes", "Human-verified records"],
    stats: [
      { value: "97%", label: "Field accuracy on delivery" },
      { value: "50+", label: "Custom attributes per record" },
      { value: "<10 days", label: "Typical build turnaround" },
      { value: "100%", label: "Records matched to your ICP" }
    ],
    intro: {
      eyebrow: "Data Intelligence",
      title: "When a generic database can't answer your question",
      body: [
        "Standard providers index the easy companies and the obvious titles. The moment your ICP gets specific, a niche vertical, a buying signal, a job function that no filter captures, the coverage thins out and the rows go stale. You end up paying for a million contacts to find the four thousand that fit.",
        "DataCentra works the other way around. You define the segment and the fields that matter, and we build the list from research up: sourcing the right accounts, finding the right people, and capturing the attributes off-the-shelf tools don't carry. Every record is checked before it reaches you, so the file you import is the file you can act on."
      ]
    },
    benefits: [
      { icon: "Target", title: "Matched to a precise ICP", body: "Hand us the firmographics, technographics, and titles that define a fit. We build only against that spec, so the dataset is filtered to your buyers before it ever lands in your CRM." },
      { icon: "Layers", title: "Attributes you can't buy elsewhere", body: "Need headcount by department, funding stage, tooling in use, or a custom flag specific to your motion? We capture the fields that drive your scoring, not just name and email." },
      { icon: "ShieldCheck", title: "Verified before you ever send", body: "Each record passes email validation and human review against source material. You start with clean, current data instead of cleaning it yourself after the bounces roll in." }
    ],
    process: [
      { title: "Scope the spec", body: "We map your ICP, target attributes, volume, and use case into a clear build brief you sign off on before any work starts." },
      { title: "Source and research", body: "Our team assembles the account and contact universe from primary sources, capturing every field your brief calls for." },
      { title: "Verify and enrich", body: "Records are validated, deduplicated, and human-checked, then enriched with the bespoke attributes you requested." },
      { title: "Deliver and refine", body: "You receive the dataset in your format of choice, with a sample-based QA pass and revisions if anything misses spec." }
    ],
    deliverables: [
      "Build brief with agreed ICP",
      "Account list matched to spec",
      "Verified contact-level records",
      "Bespoke custom attribute fields",
      "Validated business email addresses",
      "Deduplicated, normalized data file",
      "QA sample with accuracy report",
      "Delivery in CSV, XLSX, or API"
    ],
    faqs: [
      { q: "How is this different from buying a list?", a: "A purchased list is whatever the vendor already had. A custom build starts from your ICP and is researched and verified specifically for it, including attributes no stock database carries." },
      { q: "What if my segment is very niche or hard to find?", a: "That is the case we are built for. When filters and databases run out, our researchers source accounts and contacts directly, so coverage depends on what exists, not on what a tool happens to index." },
      { q: "How accurate is the data, and what is verified?", a: "Emails are validated and key fields are human-checked against source material before delivery. We share a QA sample and accuracy figures, and we re-work records that miss the agreed spec." },
      { q: "How long does a custom build take?", a: "Most projects deliver within about ten days, depending on volume and how rare the segment is. We confirm a firm timeline once the build brief is locked." }
    ],
    testimonial: {
      quote: "We needed compliance leads at mid-market fintechs using a specific vendor, something no database could filter for. DataCentra built the list from scratch and over 90 percent of it matched on the first pass.",
      name: "Aaron Liu",
      role: "Head of Growth",
      company: "Northfield Compliance"
    }
  },
  {
    slug: "data-licensing",
    path: "/data-intelligence/data-licensing",
    group: "intelligence",
    title: "Data Licensing",
    blurb: "License DataCentra's B2B databases in bulk to embed inside your products, platforms, and internal systems.",
    hero: {
      headline: "License the data behind your product",
      subcopy: "DataCentra licenses its B2B contact and company databases in bulk, so your product, platform, or internal system runs on data you control instead of records you rent one query at a time."
    },
    highlights: ["210M+ contacts", "API or bulk file", "Quarterly refresh feeds"],
    stats: [
      { value: "210M+", label: "Licensable contact records" },
      { value: "94%", label: "Email deliverability on delivery" },
      { value: "<24h", label: "From signed terms to first feed" },
      { value: "180+", label: "Countries covered" }
    ],
    intro: {
      eyebrow: "Data Licensing",
      title: "Own the dataset, not just the query",
      body: [
        "Buying records one search at a time works until your product needs the whole picture. A scoring model, an enrichment feature, or an internal data warehouse can't run on rate-limited lookups, and per-record pricing breaks the moment you scale. DataCentra licenses the underlying database instead, so the data sits where your engineers can actually use it.",
        "You pick the slice that matters: a region, an industry, a set of firmographic and contact fields, or the full file. We deliver it by API or bulk export, keep it current with scheduled refresh feeds, and put your usage rights in writing, including the right to resell or embed where your terms allow."
      ]
    },
    benefits: [
      { icon: "Database", title: "Data that lives in your stack", body: "Load licensed records straight into your warehouse, app, or model. No per-call limits, no waiting on a vendor's API to power your own features." },
      { icon: "RefreshCw", title: "Records that stay current", body: "Scheduled refresh feeds replace stale rows and add new ones, so the dataset you licensed keeps pace with job changes, new companies, and verified emails." },
      { icon: "ShieldCheck", title: "Usage rights in writing", body: "Clear commercial terms spell out what you can build, resell, and redistribute, so legal signs off once and your product team ships without second-guessing." }
    ],
    process: [
      { title: "Scope the dataset", body: "We map the segments, fields, and volume you need against what's available and agree on coverage before anything moves." },
      { title: "Agree on terms", body: "We set commercial and usage rights together, covering embedding, resale, refresh cadence, and term length in a single contract." },
      { title: "Deliver the data", body: "You receive an initial bulk file or API endpoint, scoped to exactly the records and attributes you licensed." },
      { title: "Keep it fresh", body: "Refresh feeds run on your chosen schedule, updating changed records and appending new ones for the life of the agreement." }
    ],
    deliverables: [
      "Licensed bulk export file",
      "Dedicated data API endpoint",
      "Custom field and segment scoping",
      "Scheduled refresh feeds",
      "Written commercial usage rights",
      "Resale and embedding permissions",
      "Field-level schema documentation",
      "Dedicated onboarding contact"
    ],
    faqs: [
      { q: "Can we resell or embed the licensed data in our own product?", a: "Yes, where your agreement allows it. We write resale and embedding rights into the contract up front, so you know exactly what you can ship to customers before you build on it." },
      { q: "How is the data delivered?", a: "Either as a bulk file in your preferred format or through a dedicated API, depending on how your team works. Many customers take an initial bulk export and then layer API refresh feeds on top." },
      { q: "How often is the data refreshed?", a: "You choose the cadence. Most licenses run on a quarterly refresh feed, but we support monthly or higher frequencies for teams whose products depend on fresher records." },
      { q: "Can we license just one industry or region?", a: "Yes. Licenses are scoped to the segments, geographies, and fields you actually need, so you're not paying for records that don't fit your use case." }
    ],
    testimonial: {
      quote: "We were burning budget on per-record lookups to power our enrichment feature. Licensing the dataset from DataCentra put the data inside our own pipeline, and the quarterly feeds mean it never goes stale. Our margins and our refresh rate both improved.",
      name: "Maya Castellano",
      role: "VP of Product",
      company: "Cleargrid Analytics"
    }
  }
];
