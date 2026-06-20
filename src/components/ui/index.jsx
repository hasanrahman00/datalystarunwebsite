import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

/* ══ BUTTON ══ */
export function Button({ children, href, variant = 'primary', external, className = '', onClick }) {
  const base = 'inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.95rem] font-semibold rounded-full transition-all duration-300 whitespace-nowrap'
  const v = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const cls = `${base} ${v} ${className}`
  if (onClick) return <button onClick={onClick} className={cls}>{children}</button>
  if (href && external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  if (href) return <Link to={href} className={cls}>{children}</Link>
  return <button className={cls}>{children}</button>
}

/* ══ BADGE ══ */
export function Badge({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 pl-2 bg-purple-500/[0.08] border border-purple-500/[0.15] rounded-full text-[0.82rem] font-medium text-purple-300 mb-7">
      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-dot" />{children}
    </motion.div>
  )
}

/* ══ SECTION LABEL ══ */
export function SectionLabel({ children }) {
  return <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-purple-400 mb-4"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />{children}</div>
}

/* ══ SECTION HEADER ══ */
export function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-[1.05rem] text-txt-secondary max-w-[600px] mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  )
}

/* ══ REVEAL ══ */
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

/* ══ GRADIENT CARD ══ */
export function GCard({ children, className = '', href }) {
  const card = <div className={`g-card p-7 ${className}`}>{children}</div>
  if (href) return <Link to={href}>{card}</Link>
  return card
}

/* ══ FEATURE CHECK ══ */
export function FeatureCheck({ children }) {
  return (
    <li className="flex items-start gap-3 text-[0.92rem] text-txt-secondary leading-relaxed">
      <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-purple-500/[0.15] text-purple-400 flex items-center justify-center text-[0.7rem] mt-0.5">✓</span>
      {children}
    </li>
  )
}

/* ══ PAGE HERO ══ */
export function PageHero({ icon, label, title, subtitle }) {
  return (
    <section className="hero-glow relative z-[1] pt-[152px] pb-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-[3.5rem] block mb-5">{icon}</motion.span>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex justify-center"><SectionLabel>{label}</SectionLabel></motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-tight mb-4">{title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[1.05rem] text-txt-secondary max-w-[640px] mx-auto leading-relaxed mb-9">{subtitle}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <Button href="https://join.slack.com/t/vikileadsworkspace/shared_invite/zt-3pg9ypdae-wpriXr5uGhgoZHF9BmnEwg" external>Get Started on Slack →</Button>
        </motion.div>
      </div>
    </section>
  )
}

/* ══ FEATURE ROW ══ */
export function FeatureRow({ label, title, subtitle, checks, visualIcon, visualText, reverse }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 ${reverse ? 'lg:[direction:rtl]' : ''}`}>
      <div className={reverse ? 'lg:[direction:ltr]' : ''}>
        <SectionLabel>{label}</SectionLabel>
        <h3 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-tight mb-5">{title}</h3>
        <p className="text-[1.05rem] text-txt-secondary max-w-[560px] leading-relaxed">{subtitle}</p>
        <ul className="mt-7 flex flex-col gap-3.5">{checks.map((c, i) => <FeatureCheck key={i}>{c}</FeatureCheck>)}</ul>
      </div>
      <div className={`g-card p-10 aspect-[4/3] flex items-center justify-center relative overflow-hidden ${reverse ? 'lg:[direction:ltr]' : ''}`}>
        <div className="hero-glow absolute inset-0 opacity-50" />
        <div className="relative z-[1] text-center">
          <span className="text-[4rem] block mb-4">{visualIcon}</span>
          <span className="font-display font-bold text-[1.1rem] text-txt-secondary">{visualText}</span>
        </div>
      </div>
    </div>
  )
}

/* ══ BENTO CARD ══ */
export function BentoCard({ icon, title, description, span2 }) {
  return (
    <Reveal className={span2 ? 'md:col-span-2' : ''}>
      <div className="g-card p-8 h-full">
        <span className="text-[2rem] block mb-4">{icon}</span>
        <h3 className="font-display text-[1.05rem] font-bold mb-2">{title}</h3>
        <p className="text-[0.88rem] text-txt-secondary leading-relaxed">{description}</p>
      </div>
    </Reveal>
  )
}

/* ══ DATABASE / STORE CARD (big) ══ */
export function DatabaseCard({ name, desc, icon, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="g-card p-5 h-full flex items-start gap-4">
        <span className="text-[2.2rem] flex-shrink-0">{icon}</span>
        <div>
          <h4 className="font-display font-bold text-[1rem] mb-0.5">{name}</h4>
          <p className="text-[0.82rem] text-txt-secondary leading-relaxed">{desc}</p>
        </div>
      </div>
    </Reveal>
  )
}

/* ══ METRICS BAR ══ */
export function MetricsBar({ items }) {
  return (
    <section className="py-14 border-y border-purple-500/[0.08] relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between gap-8 flex-wrap">
          {items.map(m => (
            <div key={m.label} className="text-center flex-1 min-w-[100px]">
              <div className="font-display text-[1.8rem] font-extrabold gradient-text">{m.value}</div>
              <div className="text-[0.72rem] text-txt-muted mt-1 font-medium uppercase tracking-[0.06em]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══ CASE STUDY BAR ══ */
export function CaseStudyBar({ studies }) {
  return (
    <section className="py-20 relative z-[1]" id="results">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Results" title={<>Real Results From <span className="gradient-text">Real Clients</span></>} /></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {studies.map((s, i) => (
            <Reveal key={s.company} delay={i * 0.08}>
              <div className="g-card p-7 text-center h-full">
                <span className="text-[1.5rem] block mb-3">{s.icon}</span>
                <div className="font-display text-[2.5rem] font-extrabold gradient-text leading-none mb-1">{s.metric}</div>
                <div className="text-[0.85rem] font-semibold mb-1">{s.label}</div>
                <div className="text-[0.75rem] text-txt-muted">{s.company}</div>
                <div className="text-[0.72rem] text-txt-secondary mt-2 pt-2 border-t border-purple-500/[0.06]">{s.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══ SCROLLING TESTIMONIALS (horizontal loop) ══ */
export function ScrollingTestimonials({ items }) {
  const doubled = [...items, ...items]
  return (
    <section className="py-20 relative z-[1] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <Reveal><SectionHeader label="Testimonials" title={<>Loved by <span className="gradient-text">Sales Teams</span> Everywhere</>} /></Reveal>
      </div>
      <div className="relative">
        <div className="flex gap-5 scroll-strip" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => (
            <div key={i} className="g-card p-6 w-[380px] flex-shrink-0">
              <div className="text-amber-400 text-[0.85rem] mb-3 tracking-[2px]">★★★★★</div>
              <p className="text-[0.88rem] text-txt-secondary leading-relaxed mb-4 italic line-clamp-3">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-[0.8rem] text-white">{t.initials}</div>
                <div>
                  <div className="font-semibold text-[0.85rem]">{t.name}</div>
                  <div className="text-[0.72rem] text-txt-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══ COMPARISON TABLE (with green check / red cross icons) ══ */
function ComparisonIcon({ cell }) {
  // Replace emoji text with styled icons
  if (typeof cell !== 'string') return cell
  const trimmed = cell.trim()
  // Full positive
  if (trimmed.startsWith('✅')) return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
      </span>
      <span className="text-emerald-400 font-semibold">{trimmed.replace('✅ ', '').replace('✅', '')}</span>
    </span>
  )
  // Partial / warning
  if (trimmed.startsWith('⚠️')) return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
      </span>
      <span className="text-amber-400">{trimmed.replace('⚠️ ', '').replace('⚠️', '')}</span>
    </span>
  )
  // Negative
  if (trimmed.startsWith('❌')) return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
      </span>
      <span className="text-red-400">{trimmed.replace('❌ ', '').replace('❌', '')}</span>
    </span>
  )
  return cell
}

export function ComparisonTable({ data }) {
  return (
    <section className="py-24 relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Compare" title={<>Why Teams Choose <span className="gradient-text">Data Centra</span></>} /></Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-purple-500/[0.1]">
            <table className="w-full text-left min-w-[700px]">
              <thead><tr className="bg-purple-500/[0.04]">
                {data.headers.map((h, i) => <th key={h} className={`px-6 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.06em] ${i === 1 ? 'text-purple-400 bg-purple-500/[0.06]' : 'text-txt-muted'}`}>{h}</th>)}
              </tr></thead>
              <tbody>{data.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-purple-500/[0.05] hover:bg-purple-500/[0.02]">
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-6 py-3.5 text-[0.88rem] ${ci === 0 ? 'font-medium' : ci === 1 ? 'bg-purple-500/[0.03]' : 'text-txt-secondary'}`}>
                      {ci === 0 ? cell : <ComparisonIcon cell={cell} />}
                    </td>
                  ))}
                </tr>
              ))}</tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ══ FAQ ══ */
export function FAQSection({ items, title }) {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-24 relative z-[1]" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        <Reveal><SectionHeader label="FAQ" title={title || <>Frequently Asked <span className="gradient-text">Questions</span></>} /></Reveal>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="g-card overflow-hidden cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex items-center justify-between p-5">
                  <h4 className="font-display text-[0.92rem] font-semibold pr-4">{item.q}</h4>
                  <span className={`text-purple-400 text-xl transition-transform duration-300 flex-shrink-0 ${open === i ? 'rotate-45' : ''}`}>+</span>
                </div>
                <motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="px-5 pb-5 text-[0.85rem] text-txt-secondary leading-relaxed">{item.a}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══ GUARANTEE BAR (with enhanced trust badge styling) ══ */
export function GuaranteeBar({ items }) {
  return (
    <section className="py-20 relative z-[1] section-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Guarantees" title={<>Our Commitment to <span className="gradient-text">Your Success</span></>} /></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}><div className="g-card p-7 text-center h-full relative overflow-hidden">
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <span className="text-[2rem] block mb-3">{g.icon}</span>
              <h4 className="font-display text-[0.92rem] font-bold mb-2">{g.title}</h4>
              <p className="text-[0.78rem] text-txt-secondary leading-relaxed">{g.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══ AI AGENT CARD ══ */
export function AgentCard({ agent, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="g-card p-8 h-full relative overflow-hidden">
        {agent.tag && <span className="absolute top-4 right-4 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] bg-purple-500/[0.12] border border-purple-500/20 text-purple-300 rounded-full">{agent.tag}</span>}
        <span className="text-[2.5rem] block mb-4">{agent.icon}</span>
        <h3 className="font-display text-[1.2rem] font-bold tracking-tight mb-2">{agent.title}</h3>
        <p className="text-[0.88rem] text-txt-secondary leading-relaxed mb-5">{agent.desc}</p>
        <ul className="flex flex-col gap-2 mb-6">{agent.features.map((f, i) => <li key={i} className="flex items-center gap-2 text-[0.8rem] text-txt-secondary"><span className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />{f}</li>)}</ul>
        <div className="pt-4 border-t border-purple-500/[0.08] flex items-center gap-2">
          <span className="font-display text-[1.4rem] font-extrabold gradient-text">{agent.metric}</span>
          <span className="text-[0.75rem] text-txt-muted">avg. result</span>
        </div>
      </div>
    </Reveal>
  )
}

/* ══ WATERFALL VISUAL ══ */
export function WaterfallVisual({ sources }) {
  let t = 0
  return (
    <div className="flex flex-col gap-4">
      {sources.map((s, i) => {
        const p = t; t = i === 0 ? 70 : i === 1 ? 88 : i === 2 ? 96 : 99
        return (
          <Reveal key={s.name} delay={i * 0.12}>
            <div className="g-card p-5">
              <div className="flex items-center justify-between mb-2">
                <div><span className="font-display text-[0.88rem] font-bold">{s.name}</span><span className="text-[0.75rem] text-txt-muted ml-2">{s.desc}</span></div>
                <span className="font-display font-bold text-purple-400 text-[0.88rem]">{s.coverage}</span>
              </div>
              <div className="h-2 bg-bg-primary rounded-full overflow-hidden">
                <motion.div initial={{ width: `${p}%` }} whileInView={{ width: `${t}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              </div>
            </div>
          </Reveal>
        )
      })}
      <div className="text-center mt-4">
        <span className="font-display text-[2rem] font-extrabold gradient-text">Up to 99%</span>
        <span className="text-[0.85rem] text-txt-secondary block">contact discovery rate</span>
      </div>
    </div>
  )
}

/* ══ CTA BOX ══ */
export function CTABox({ title, subtitle, buttonText = 'Join Our Slack Now' }) {
  return (
    <section className="py-24 relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="cta-glow relative g-card py-[72px] px-12 text-center overflow-hidden">
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold tracking-tight mb-4 relative z-[1]">{title}</h2>
            <p className="text-[1.05rem] text-txt-secondary max-w-[500px] mx-auto leading-relaxed mb-9 relative z-[1]">{subtitle}</p>
            <div className="relative z-[1]"><Button href="https://join.slack.com/t/vikileadsworkspace/shared_invite/zt-3pg9ypdae-wpriXr5uGhgoZHF9BmnEwg" external>{buttonText}</Button></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ══ CAL EMBED ══ */
export function CalEmbed() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    ;(function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar) }
      let d = C.document
      C.Cal = C.Cal || function () {
        let cal = C.Cal
        let ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments) }
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ['initNamespace', namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')
    window.Cal('init', '15min', { origin: 'https://app.cal.com' })
    window.Cal.ns['15min']('inline', {
      elementOrSelector: '#my-cal-inline-15min',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: 'vikileads/15min',
    })
    window.Cal.ns['15min']('ui', { hideEventTypeDetails: false, layout: 'month_view' })
  }, [])
  return (
    <section className="py-24 relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal><SectionHeader label="Book a Call" title={<>Schedule a <span className="gradient-text">15-Min Discovery Call</span></>} subtitle="Talk to our team about your prospecting needs." /></Reveal>
        <Reveal>
          <div className="g-card p-2 overflow-hidden" style={{ minHeight: 600 }}>
            <div id="my-cal-inline-15min" ref={ref} style={{ width: '100%', height: '100%', minHeight: 580, overflow: 'scroll' }} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
