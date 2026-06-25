import { Section, SectionHeading } from './Section.jsx'
import Reveal from './Reveal.jsx'

// Compliance trust band. Original, on-brand seal marks (not official
// regulator logos) so it stays trademark-safe and matches the dark theme.
const badges = [
  { acr: 'GDPR', name: 'General Data Protection Regulation' },
  { acr: 'CCPA', name: 'California Consumer Privacy Act' },
  { acr: 'CASL', name: "Canada's Anti-Spam Legislation" },
  { acr: 'ACMA', name: 'Australian Comms & Media Authority' },
  { acr: 'EDPB', name: 'European Data Protection Board' },
  { acr: 'CAN-SPAM', name: 'US CAN-SPAM Act' },
]

function Seal() {
  return (
    <svg viewBox="0 0 64 74" className="h-16 w-16 drop-shadow-[0_0_10px_rgba(56,189,248,0.35)]" aria-hidden="true">
      {/* outer shield */}
      <path
        d="M32 4 L57 14 V36 C57 52 46 64 32 70 C18 64 7 52 7 36 V14 Z"
        fill="url(#complianceSeal)"
        stroke="#bae6fd"
        strokeOpacity="0.4"
      />
      {/* inner ring */}
      <path
        d="M32 11 L51 18.6 V36 C51 49.2 42 59 32 63.6 C22 59 13 49.2 13 36 V18.6 Z"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="1"
      />
      {/* check */}
      <path
        d="M24 36 l6 6 l11 -13"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ComplianceBadges({ tone = 'cream' }) {
  return (
    <Section tone={tone}>
      {/* shared gradient, referenced by every seal */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="complianceSeal" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="0.55" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>

      <SectionHeading
        serif
        eyebrowStyle="rule"
        eyebrow="Trust & compliance"
        title="Our compliance"
        description="We operate within the privacy and anti-spam regulations that matter to B2B teams worldwide, so the data you receive is sourced, stored and delivered to a standard you can defend."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {badges.map((b, i) => (
          <Reveal key={b.acr} delay={(i % 6) * 0.05}>
            <div className="group flex h-full flex-col items-center rounded-2xl border border-cream-deep bg-card p-5 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <Seal />
              <div className="mt-3 text-sm font-extrabold tracking-tight text-coal">{b.acr}</div>
              <div className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-terracotta">Compliant</div>
              <div className="mt-2 text-[0.7rem] leading-snug text-coal/60">{b.name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
