// Datalyst service landing pages — Enrich group
export default [
  {
    slug: "data-enrichment",
    group: "enrich",
    title: "Data Enrichment",
    blurb: "Turn thin records into full profiles by layering firmographic, demographic, and intent signals onto every contact.",
    hero: {
      headline: "Give every record the context it's been missing.",
      subcopy: "Datalyst enriches your contacts and accounts with verified company, role, and technographic data so your teams can target with precision instead of guessing."
    },
    highlights: ["120+ appendable attributes", "Firmographic and technographic layers", "API or batch delivery"],
    stats: [
      { value: "3.2x", label: "Pipeline lift" },
      { value: "94%", label: "Match rate" },
      { value: "210M+", label: "Profiles in graph" },
      { value: "<24h", label: "Batch turnaround" }
    ],
    intro: {
      eyebrow: "Overview",
      title: "Records that actually tell you who you're selling to.",
      body: [
        "Most CRMs fill up with half-finished rows: a name here, an email there, no idea what the company does or whether the person can buy. Datalyst closes those gaps by matching each record against our identity graph and appending the attributes that drive routing, scoring, and personalization.",
        "You decide which fields matter, from headcount and revenue bands to job function and installed tech. We return clean, normalized values your systems can use immediately, with confidence scores on every appended field."
      ]
    },
    benefits: [
      { icon: "Layers", title: "Complete profiles", body: "Fill empty fields with verified firmographic, demographic, and technographic attributes so every record is ready to action." },
      { icon: "Target", title: "Sharper targeting", body: "Segment and route leads on real signals like industry, seniority, and tech stack instead of incomplete guesses." },
      { icon: "Gauge", title: "Higher conversion", body: "Personalized outreach built on accurate context lifts reply rates and shortens the path to a booked meeting." }
    ],
    process: [
      { title: "Connect your data", body: "Send records via CSV, CRM sync, or our API. We map your schema and flag what's missing." },
      { title: "Match to the graph", body: "Each record is resolved against our identity graph using multiple deterministic and probabilistic signals." },
      { title: "Append attributes", body: "We layer on the fields you selected, normalize values, and attach a confidence score to each one." },
      { title: "Deliver and sync", body: "Enriched records flow back into your CRM or warehouse, with optional ongoing refresh." }
    ],
    deliverables: [
      "Firmographic fields (industry, size, revenue)",
      "Contact role and seniority data",
      "Technographic and installed-tools data",
      "Normalized company hierarchy mapping",
      "Per-field confidence scoring",
      "Deduplicated, standardized output",
      "CRM and warehouse sync connectors",
      "Coverage and match-rate report"
    ],
    faqs: [
      { q: "What's the typical match rate?", a: "Most clients see 90 to 95 percent on company-level fields and slightly lower on individual contact attributes, depending on input quality." },
      { q: "Can I choose which fields to append?", a: "Yes. You pick from over 120 attributes, and we only return the ones you select so you aren't paying for noise." },
      { q: "How fresh is the data?", a: "Our graph is refreshed continuously, and you can schedule recurring enrichment to keep records current over time." }
    ],
    testimonial: {
      quote: "We went from blank CRM fields to fully scored accounts in a week. Routing finally makes sense and reps stopped wasting time on unqualified leads.",
      name: "Priya Nadkarni",
      role: "VP of Revenue Operations",
      company: "Northwind Analytics"
    }
  },
  {
    slug: "email-append",
    group: "enrich",
    title: "Email Append",
    blurb: "Match your existing records to verified, deliverable business emails so you can reach contacts you could only see by name before.",
    hero: {
      headline: "Reach the contacts you already have, by email.",
      subcopy: "Datalyst matches your names and companies to verified business email addresses, then validates each one before delivery so your campaigns land in the inbox."
    },
    highlights: ["Verified business emails", "Bounce-tested before delivery", "Permission-aware sourcing"],
    stats: [
      { value: "87%", label: "Append rate" },
      { value: "98.4%", label: "Inbox accuracy" },
      { value: "18,400", label: "Emails matched daily" },
      { value: "<0.7%", label: "Hard bounce rate" }
    ],
    intro: {
      eyebrow: "Overview",
      title: "A name and a company are enough to start a conversation.",
      body: [
        "You've collected leads at events, through forms, and from partners, but plenty of them arrived without an email address. Email Append matches those records to a verified, deliverable address so the contact becomes reachable instead of stranded.",
        "Every match is run through live verification before it reaches you, so you're not appending guesses. The result is a list you can mail with confidence, protecting your sender reputation while opening up channels you couldn't use before."
      ]
    },
    benefits: [
      { icon: "MailCheck", title: "Reachable contacts", body: "Convert name-only records into mailable contacts with verified, deliverable business addresses." },
      { icon: "ShieldCheck", title: "Protected reputation", body: "Live verification on every append keeps bounce rates low and your sending domain healthy." },
      { icon: "TrendingUp", title: "More pipeline", body: "Activate dormant records into outreach-ready leads and unlock revenue that was sitting idle." }
    ],
    process: [
      { title: "Submit your list", body: "Upload records with names and company details. We assess coverage and flag duplicates." },
      { title: "Match to addresses", body: "We resolve each contact to the most likely verified business email using our identity graph." },
      { title: "Verify deliverability", body: "Every candidate address is checked live for syntax, domain health, and mailbox validity." },
      { title: "Return clean output", body: "You receive matched, verified emails with status flags, ready to load into your sequencer." }
    ],
    deliverables: [
      "Verified business email per matched record",
      "Live deliverability status flag",
      "Catch-all and risky-address indicators",
      "Duplicate and conflict resolution",
      "Role-account detection (info, sales)",
      "Append confidence score",
      "Suppression of undeliverable matches",
      "Match summary and coverage report"
    ],
    faqs: [
      { q: "How do you keep bounce rates low?", a: "Every appended address passes live verification before delivery, and anything undeliverable is suppressed rather than sent to you." },
      { q: "What input do you need?", a: "A full name plus a company name or domain is enough. More fields improve match accuracy but aren't required." },
      { q: "Do you flag catch-all domains?", a: "Yes. Catch-all and risky mailboxes are labeled so you can decide how aggressively to mail them." }
    ],
    testimonial: {
      quote: "Half our event leads had no email. Datalyst recovered most of them and the list mailed cleaner than the addresses we'd collected ourselves.",
      name: "Marcus Feld",
      role: "Director of Demand Generation",
      company: "Cendral Software"
    }
  },
  {
    slug: "data-append",
    group: "enrich",
    title: "Data Append",
    blurb: "Add missing phone numbers, mailing addresses, social handles, and firmographics to records you already own.",
    hero: {
      headline: "Backfill the fields your records are missing.",
      subcopy: "Datalyst appends phone, postal, social, and company data to your existing contacts so every record carries the detail your teams need to act."
    },
    highlights: ["Phone, postal, and social fields", "Firmographic backfill", "Multi-channel coverage"],
    stats: [
      { value: "91%", label: "Fill rate" },
      { value: "60+", label: "Appendable fields" },
      { value: "240M", label: "Records in source pool" },
      { value: "<36h", label: "Standard turnaround" }
    ],
    intro: {
      eyebrow: "Overview",
      title: "One record, every channel you need to reach it.",
      body: [
        "Email isn't the only way you connect with prospects. Data Append rounds out your records with direct-dial and mobile numbers, verified mailing addresses, social profiles, and the firmographic detail that makes segmentation possible.",
        "We match conservatively, normalize formats, and tag the source and confidence of each appended value so your team knows exactly what they're working with. The outcome is a record that's ready for calling, mailing, and account-based targeting alike."
      ]
    },
    benefits: [
      { icon: "Phone", title: "Multi-channel reach", body: "Append direct dials, mobiles, and mailing addresses so reps can connect on the channel that converts." },
      { icon: "Filter", title: "Better segmentation", body: "Backfilled firmographics let you slice lists by size, industry, and geography with confidence." },
      { icon: "CheckCircle2", title: "Action-ready records", body: "Standardized, source-tagged fields drop straight into your workflows without manual cleanup." }
    ],
    process: [
      { title: "Audit coverage", body: "We profile your file to show which fields are missing and where append rates will be strongest." },
      { title: "Match records", body: "Each contact is resolved against our source pool using deterministic identity keys." },
      { title: "Append and normalize", body: "We add the requested fields, standardize formats, and tag source and confidence." },
      { title: "Deliver enriched file", body: "You get the completed records back in your format of choice, ready to load." }
    ],
    deliverables: [
      "Direct-dial and mobile phone numbers",
      "Verified postal and mailing addresses",
      "Linked social and professional profiles",
      "Firmographic company attributes",
      "Geographic and timezone fields",
      "Format normalization and standardization",
      "Source and confidence tagging",
      "Pre and post fill-rate report"
    ],
    faqs: [
      { q: "Which fields can you append?", a: "Over 60, spanning phone, postal, social, and firmographic data. You select the subset relevant to your use case." },
      { q: "How accurate are the phone numbers?", a: "Direct dials and mobiles are validated against recent activity signals and tagged with a confidence score so you can prioritize." },
      { q: "Can you append to international records?", a: "Yes. Coverage is strongest in North America and Europe, with growing depth across other regions." }
    ],
    testimonial: {
      quote: "Our SDRs needed direct dials, not just emails. Datalyst filled the gaps and connect rates jumped almost immediately.",
      name: "Elena Vasquez",
      role: "Head of Sales Development",
      company: "Brightlane Logistics"
    }
  },
  {
    slug: "data-verification",
    group: "enrich",
    title: "Data Verification",
    blurb: "Validate emails, phones, and company details in real time so you only act on records that are accurate and reachable.",
    hero: {
      headline: "Trust every record before you act on it.",
      subcopy: "Datalyst verifies emails, phone numbers, and company details against live signals so your teams stop wasting effort on dead and inaccurate data."
    },
    highlights: ["Real-time and batch checks", "Email, phone, and firmo validation", "API-first integration"],
    stats: [
      { value: "99.1%", label: "Verification accuracy" },
      { value: "<200ms", label: "API response time" },
      { value: "42M", label: "Checks run monthly" },
      { value: "31%", label: "Average bad-record cut" }
    ],
    intro: {
      eyebrow: "Overview",
      title: "Bad data is expensive, so we catch it before it costs you.",
      body: [
        "Inaccurate records inflate bounce rates, burn rep time, and skew every metric downstream. Data Verification validates each field against live sources, confirming that an email is deliverable, a phone connects, and a company still exists and matches the record.",
        "Run it as a real-time API check at the point of capture, or as a batch sweep across your whole database. Either way you get a clear status on every record so you can suppress, route, or trust it with confidence."
      ]
    },
    benefits: [
      { icon: "ShieldCheck", title: "Cleaner sending", body: "Catch undeliverable emails before they bounce and protect your sender reputation across every campaign." },
      { icon: "Zap", title: "Real-time gating", body: "Validate at the point of capture so bad data never enters your systems in the first place." },
      { icon: "PieChart", title: "Reliable reporting", body: "Decisions built on verified records produce metrics your leadership can actually trust." }
    ],
    process: [
      { title: "Choose your mode", body: "Pick real-time API checks, scheduled batch runs, or both depending on your workflow." },
      { title: "Run validation", body: "Each field is tested against live signals for syntax, reachability, and currency." },
      { title: "Score and label", body: "Records are tagged valid, risky, or invalid with the reason behind each verdict." },
      { title: "Act on results", body: "Suppress invalid records, route risky ones for review, and proceed with confidence on the rest." }
    ],
    deliverables: [
      "Email deliverability validation",
      "Phone line-type and reachability checks",
      "Company existence and match confirmation",
      "Valid, risky, and invalid status labels",
      "Reason codes for every verdict",
      "Real-time verification API",
      "Batch database sweep option",
      "Verification audit log and report"
    ],
    faqs: [
      { q: "Does verification send test emails?", a: "No. We validate deliverability through non-intrusive checks that never message the contact directly." },
      { q: "How fast is the API?", a: "Typical single-record responses return in under 200 milliseconds, suitable for inline form validation." },
      { q: "Can you sweep our whole database?", a: "Yes. Batch mode processes millions of records and returns a status on each, with a summary of what to suppress." }
    ],
    testimonial: {
      quote: "We plugged the API into our signup form and bad addresses simply stopped getting in. Our bounce rate dropped by a third the first month.",
      name: "Tomas Lindqvist",
      role: "Marketing Operations Lead",
      company: "Quanta Retail Group"
    }
  },
  {
    slug: "data-profiling",
    group: "enrich",
    title: "Data Profiling",
    blurb: "Analyze your database to expose duplicates, gaps, and inconsistencies, with a clear picture of overall data health.",
    hero: {
      headline: "See exactly what shape your data is in.",
      subcopy: "Datalyst profiles your entire database to surface duplicates, missing fields, and formatting issues, giving you a clear health score and a plan to fix it."
    },
    highlights: ["Full-database health scan", "Duplicate and gap detection", "Field-level quality scoring"],
    stats: [
      { value: "100%", label: "Records assessed" },
      { value: "27", label: "Quality dimensions" },
      { value: "<48h", label: "Report turnaround" },
      { value: "4.6M", label: "Largest scan to date" }
    ],
    intro: {
      eyebrow: "Overview",
      title: "You can't fix what you can't see.",
      body: [
        "Before you invest in cleansing or enrichment, you need to know where the problems actually are. Data Profiling scans your full database and measures it across dozens of quality dimensions, from completeness and uniqueness to format consistency and validity.",
        "The result is a clear, prioritized picture of your data health: how many duplicates exist, which fields are chronically empty, where formats drift, and what to tackle first. It's the diagnostic that makes every downstream investment smarter."
      ]
    },
    benefits: [
      { icon: "Search", title: "Total visibility", body: "Understand the true state of your data with a field-by-field breakdown of quality and coverage." },
      { icon: "BarChart3", title: "Prioritized action", body: "Get a ranked list of issues so you fix what costs you the most before anything else." },
      { icon: "Gauge", title: "A baseline to track", body: "Establish a health score you can measure against over time to prove improvement." }
    ],
    process: [
      { title: "Ingest your data", body: "We securely load your records from CRM, warehouse, or file export for analysis." },
      { title: "Assess quality", body: "Each field is scored across completeness, uniqueness, validity, and consistency dimensions." },
      { title: "Detect issues", body: "We flag duplicates, gaps, malformed values, and conflicting records across the set." },
      { title: "Deliver findings", body: "You receive a health report with scores, examples, and a prioritized remediation plan." }
    ],
    deliverables: [
      "Overall data health score",
      "Field-level completeness analysis",
      "Duplicate and near-duplicate detection",
      "Format and consistency assessment",
      "Validity and accuracy checks",
      "Outlier and anomaly flagging",
      "Prioritized remediation roadmap",
      "Executive summary dashboard"
    ],
    faqs: [
      { q: "Do you change our data during profiling?", a: "No. Profiling is read-only and purely diagnostic. Nothing in your source systems is modified." },
      { q: "How long does a scan take?", a: "Most databases are profiled within 48 hours, with larger or more complex sets taking slightly longer." },
      { q: "What do we get at the end?", a: "A health report with a quality score, concrete examples of each issue, and a ranked plan for what to fix first." }
    ],
    testimonial: {
      quote: "The profiling report told us things about our CRM we'd suspected for years but never proven. It made the case for cleanup in one slide.",
      name: "Rachel Okonkwo",
      role: "Director of Data Strategy",
      company: "Halcyon Health Partners"
    }
  },
  {
    slug: "data-management",
    group: "enrich",
    title: "Data Management",
    blurb: "Ongoing governance, deduplication, and sync to keep your customer data clean, consistent, and trustworthy over time.",
    hero: {
      headline: "Keep your data clean long after the first cleanup.",
      subcopy: "Datalyst runs continuous governance, deduplication, and synchronization across your systems so your data stays accurate instead of decaying again."
    },
    highlights: ["Continuous governance", "Cross-system sync", "Automated dedup rules"],
    stats: [
      { value: "99.5%", label: "Sync reliability" },
      { value: "5x", label: "Fewer duplicates" },
      { value: "24/7", label: "Monitoring coverage" },
      { value: "12+", label: "Systems integrated" }
    ],
    intro: {
      eyebrow: "Overview",
      title: "Clean data is a process, not a one-time project.",
      body: [
        "Data decays the moment you stop watching it. People change jobs, companies merge, and new records flow in messy. Data Management gives you the ongoing discipline to keep everything consistent: deduplication rules, governance policies, and synchronization that hold quality steady over time.",
        "We act as the connective tissue across your CRM, marketing platform, and warehouse, enforcing the standards you set and resolving conflicts automatically. Your teams work from one trustworthy version of the truth instead of arguing about whose export is right."
      ]
    },
    benefits: [
      { icon: "RefreshCw", title: "Lasting quality", body: "Automated rules and monitoring keep records clean continuously so quality doesn't erode between projects." },
      { icon: "Network", title: "One source of truth", body: "Synchronized systems mean every team works from the same consistent, conflict-free data." },
      { icon: "ShieldCheck", title: "Governed and compliant", body: "Defined policies and audit trails keep your data handling consistent and ready for review." }
    ],
    process: [
      { title: "Define standards", body: "We work with you to set field standards, dedup rules, and governance policies." },
      { title: "Connect systems", body: "Your CRM, marketing tools, and warehouse are integrated into a managed sync layer." },
      { title: "Enforce and monitor", body: "Rules run continuously, deduping records and flagging conflicts as data flows in." },
      { title: "Review and refine", body: "Regular health checks and reports let us tune rules as your business evolves." }
    ],
    deliverables: [
      "Custom deduplication rule sets",
      "Cross-system synchronization layer",
      "Data governance policy framework",
      "Automated conflict resolution",
      "Continuous quality monitoring",
      "Field-standardization enforcement",
      "Audit trail and change logging",
      "Scheduled health-check reporting"
    ],
    faqs: [
      { q: "Which systems can you connect?", a: "Most major CRMs, marketing automation platforms, and data warehouses, plus custom systems via API." },
      { q: "Do we lose control over our rules?", a: "No. You define the standards and policies. We operate and enforce them, and you can adjust them anytime." },
      { q: "How are conflicts resolved?", a: "Through rules you approve, such as source priority or recency, with edge cases routed for human review." }
    ],
    testimonial: {
      quote: "We used to clean the database every quarter and watch it rot again. Now it just stays clean, and the duplicate arguments between teams are gone.",
      name: "David Mwangi",
      role: "Chief Operating Officer",
      company: "Ardent Financial Group"
    }
  },
  {
    slug: "data-cleansing",
    group: "enrich",
    title: "Data Cleansing",
    blurb: "Remove duplicates, fix formatting, and correct errors across your records for a database you can finally rely on.",
    hero: {
      headline: "Scrub your database down to records you can trust.",
      subcopy: "Datalyst removes duplicates, standardizes formats, and corrects errors across your data so what's left is accurate, consistent, and ready to use."
    },
    highlights: ["Dedup and merge", "Format standardization", "Error correction"],
    stats: [
      { value: "38%", label: "Average size reduction" },
      { value: "99.2%", label: "Records standardized" },
      { value: "<72h", label: "Full cleanse turnaround" },
      { value: "2.1M", label: "Records cleaned weekly" }
    ],
    intro: {
      eyebrow: "Overview",
      title: "A smaller, cleaner database beats a big, messy one.",
      body: [
        "Years of imports, manual entry, and patchy integrations leave databases bloated with duplicates, inconsistent formats, and outright errors. Data Cleansing systematically works through your records to merge duplicates, fix formatting, and correct the mistakes that quietly undermine every campaign.",
        "We standardize names, addresses, and company values, resolve conflicting entries with rules you approve, and flag anything that needs a human eye. What you get back is a leaner, accurate dataset that your teams and tools can rely on."
      ]
    },
    benefits: [
      { icon: "Filter", title: "Fewer, better records", body: "Merge duplicates and drop dead entries so your team works a tight, accurate list instead of bloat." },
      { icon: "Sparkles", title: "Consistent formatting", body: "Standardized names, addresses, and fields make segmentation and reporting reliable across tools." },
      { icon: "CheckCircle2", title: "Corrected errors", body: "Typos, transpositions, and stale values are fixed so records reflect reality, not entry mistakes." }
    ],
    process: [
      { title: "Assess the file", body: "We profile your data to quantify duplicates, errors, and formatting issues before cleansing." },
      { title: "Standardize values", body: "Names, addresses, and company fields are normalized to a consistent format you define." },
      { title: "Dedup and correct", body: "Duplicates are merged on approved rules and detectable errors are corrected automatically." },
      { title: "Return clean data", body: "You receive the cleansed file with a change log detailing exactly what was modified." }
    ],
    deliverables: [
      "Duplicate detection and merging",
      "Name and address standardization",
      "Format and casing normalization",
      "Typo and transposition correction",
      "Stale and dead record removal",
      "Rule-based conflict resolution",
      "Full before-and-after change log",
      "Cleanse summary and metrics report"
    ],
    faqs: [
      { q: "Will cleansing delete records I want to keep?", a: "Merges and removals follow rules you approve first, and every change is logged so nothing happens silently." },
      { q: "How much smaller will my database get?", a: "It varies, but clients commonly see a 30 to 40 percent reduction once duplicates and dead records are removed." },
      { q: "Can you cleanse on a recurring schedule?", a: "Yes. Many clients run an initial deep cleanse, then schedule lighter recurring sweeps to keep data tidy." }
    ],
    testimonial: {
      quote: "Datalyst cut our list by nearly 40 percent and somehow our results got better. Turns out we were mailing the same people three times.",
      name: "Sofia Marchetti",
      role: "Senior CRM Manager",
      company: "Vireo Consumer Brands"
    }
  }
];
