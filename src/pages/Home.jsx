import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Badge, Button, SectionHeader, Reveal, MetricsBar, CaseStudyBar, ComparisonTable, FAQSection, GuaranteeBar, ScrollingTestimonials, CalEmbed } from '@/components/ui'
import { SITE, SERVICES, STEPS, TESTIMONIALS, CASE_STUDIES, COMPARISON, FAQ_GENERAL, GUARANTEES, HERO_STATS } from '@/lib/constants'
import LeadMagnetModal from '@/components/ui/LeadMagnetModal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LeadMagnetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-glow relative min-h-screen flex items-center pt-[112px] pb-20 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/[0.12] -top-[100px] -right-[100px] blur-[80px] opacity-40 animate-float" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/10 -bottom-[50px] -left-[50px] blur-[80px] opacity-40 animate-float-d" />
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-[1]">
          <div className="text-center max-w-[820px] mx-auto">
            <Badge>Trusted by 5000+ Sales Teams Worldwide</Badge>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,6vw,4.2rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              Your $35K/yr Prospecting Stack —<br />Replaced for a <span className="gradient-text">Fraction of the Cost</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-[1.12rem] text-txt-secondary max-w-[640px] mx-auto mb-10 leading-relaxed">
              We scrape 30+ premium databases, verify every email to &lt;1% bounce, and deliver ICP-analyzed prospects with personalized icebreakers — so your team books more meetings, not more tools.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-4 flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.95rem] font-semibold rounded-full">
                🎁 Get Free ICP Audit + 500 Leads
              </button>
              <Button href={SITE.slackUrl} external variant="secondary">Connect on Slack →</Button>
            </motion.div>
            {/* Mini trust badges under CTA */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-5 mt-6 text-[0.72rem] text-txt-muted flex-wrap">
              {['🛡️ GDPR Compliant', '⚡ 48hr Delivery', '✅ <1% Bounce Rate', '🚫 No Contracts'].map(t => (
                <span key={t} className="flex items-center gap-1">{t}</span>
              ))}
            </motion.div>
          </div>
          {/* Hero Stats Grid */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-20 max-w-[1000px] mx-auto">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="g-card p-5 text-center">
                <div className="font-display text-[1.6rem] font-extrabold gradient-text leading-none mb-1">{s.value}</div>
                <div className="text-[0.68rem] text-txt-muted font-medium uppercase tracking-[0.06em]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TRUST LOGOS (colorful) ═══════════ */}
      <section className="py-14 border-y border-purple-500/[0.06] text-center relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-[0.75rem] text-txt-muted uppercase tracking-[0.12em] font-semibold mb-7">We Extract From 30+ Premium Databases</div>
          <div className="flex items-center justify-center gap-x-8 gap-y-3 flex-wrap">
            {[
              { name: 'Apollo.io', color: 'text-blue-400' },
              { name: 'ZoomInfo', color: 'text-emerald-400' },
              { name: 'Lusha', color: 'text-pink-400' },
              { name: 'Ocean Leads', color: 'text-cyan-400' },
              { name: 'Prospeo', color: 'text-amber-400' },
              { name: 'RocketReach', color: 'text-orange-400' },
              { name: 'Lead Court', color: 'text-violet-400' },
              { name: 'Seamless.ai', color: 'text-teal-400' },
              { name: 'Adapt', color: 'text-rose-400' },
              { name: 'UpLead', color: 'text-indigo-400' },
            ].map(db => (
              <span key={db.name} className={`font-display font-bold text-[1rem] tracking-tight ${db.color} opacity-70 hover:opacity-100 transition-opacity cursor-default`}>{db.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES (alternate bg) ═══════════ */}
      <section className="py-24 relative z-[1] section-alt" id="services">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="Our Services" title={<>Everything You Need to <span className="gradient-text">Fill Your Pipeline</span></>} subtitle="Seven services replacing your entire prospecting stack." /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.06} className={i === SERVICES.length - 1 ? 'md:col-start-1 lg:col-start-2' : ''}>
                <Link to={s.href} className="block h-full">
                  <div className={`service-card-${i} relative overflow-hidden rounded-[20px] border border-purple-500/[0.12] p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]`}
                    style={{ background: s.cardBg }}>
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ background: s.cardHover }} />
                    <div className="relative z-[1]">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[1.8rem] mb-5 ${s.iconBg}`}>{s.icon}</div>
                      <h3 className="font-display text-[1.1rem] font-bold tracking-tight mb-2">{s.title}</h3>
                      <p className="text-[0.88rem] text-txt-secondary leading-relaxed mb-4">{s.desc}</p>
                      <span className="text-[0.82rem] font-semibold text-purple-400">Learn more →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CASE STUDIES ═══════════ */}
      <CaseStudyBar studies={CASE_STUDIES} />

      {/* ═══════════ CLIENT LOGOS ═══════════ */}
      <section className="py-10 relative z-[1] border-y border-purple-500/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="text-[0.72rem] text-txt-muted uppercase tracking-[0.12em] font-semibold mb-5">Trusted By Leading Sales Teams</div>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {['SaaSGrowth', 'ScaleHQ', 'CloseFast.io', 'RevStack', 'OutboundLabs', 'LeadGenX'].map(name => (
              <span key={name} className="font-display font-bold text-[0.95rem] text-txt-muted/60 tracking-tight hover:text-purple-400 transition-colors cursor-default">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS (alternate bg) ═══════════ */}
      <section className="py-24 relative z-[1] section-alt" id="how-it-works">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal><SectionHeader label="How It Works" title={<>From Zero to <span className="gradient-text">Qualified Leads</span> in 4 Steps</>} /></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="g-card text-center p-8 h-full">
                  <div className="font-display text-[2.2rem] font-extrabold gradient-text opacity-30 mb-3">{s.num}</div>
                  <h4 className="font-display text-[0.95rem] font-bold mb-2">{s.title}</h4>
                  <p className="text-[0.82rem] text-txt-secondary leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <ComparisonTable data={COMPARISON} />

      {/* ═══════════ LEAD MAGNET CTA (after comparison) ═══════════ */}
      <section className="py-16 relative z-[1]">
        <div className="max-w-[800px] mx-auto px-6">
          <Reveal>
            <div className="cta-glow relative g-card py-12 px-8 sm:px-12 text-center overflow-hidden">
              <div className="relative z-[1]">
                <span className="text-[2.5rem] block mb-3">🎁</span>
                <h3 className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-extrabold tracking-tight mb-3">
                  See How We'd Build <span className="gradient-text">Your Prospect List</span>
                </h3>
                <p className="text-[0.95rem] text-txt-secondary max-w-[480px] mx-auto leading-relaxed mb-6">
                  Get a free ICP audit + 500 verified sample leads tailored to your business. No commitment, no credit card.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.95rem] font-semibold rounded-full">
                  Get My Free Audit + 500 Leads →
                </button>
                <div className="flex items-center justify-center gap-4 mt-5 text-[0.7rem] text-txt-muted">
                  <span>🛡️ GDPR</span>
                  <span>⚡ 48hr</span>
                  <span>✅ &lt;1% Bounce</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ScrollingTestimonials items={TESTIMONIALS} />
      <GuaranteeBar items={GUARANTEES} />
      <CalEmbed />
      <FAQSection items={FAQ_GENERAL} />

      {/* ═══════════ FINAL CTA (updated with lead magnet) ═══════════ */}
      <section className="py-24 relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="cta-glow relative g-card py-[72px] px-12 text-center overflow-hidden">
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 relative z-[1]">
                Ready to <span className="gradient-text">10x Your Pipeline</span>?
              </h2>
              <p className="text-[1.05rem] text-txt-secondary max-w-[500px] mx-auto leading-relaxed mb-9 relative z-[1]">
                Join 5000+ sales teams who trust VikiLeads. First prospects within 48 hours.
              </p>
              <div className="relative z-[1] flex items-center justify-center gap-4 flex-wrap">
                <button onClick={() => setModalOpen(true)} className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.95rem] font-semibold rounded-full">
                  🎁 Get Free ICP Audit + 500 Leads
                </button>
                <Button href={SITE.slackUrl} external variant="secondary">Join Slack Community</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
