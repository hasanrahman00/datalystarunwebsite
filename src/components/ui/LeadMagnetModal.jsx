import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LeadMagnetModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', icp: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // ── OPTION A: Replace with your actual form endpoint ──
    // e.g. Formspree, Notion API, Google Sheets webhook, etc.
    // For now, we simulate a successful submission:
    try {
      // Example: await fetch('https://formspree.io/f/YOUR_ID', {
      //   method: 'POST', headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form)
      // })
      await new Promise(r => setTimeout(r, 1200)) // simulated delay
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[520px] g-card p-0 overflow-hidden"
          >
            {/* Top glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-txt-muted hover:text-white transition-colors z-10"
            >
              ✕
            </button>

            {status === 'success' ? (
              /* ── Success State ── */
              <div className="p-10 text-center">
                <div className="text-[3rem] mb-4">🎉</div>
                <h3 className="font-display text-[1.4rem] font-extrabold mb-3">
                  You're In! Check Your Inbox
                </h3>
                <p className="text-[0.92rem] text-txt-secondary leading-relaxed mb-6">
                  We'll send your free ICP Audit + 500 sample leads within 24 hours. Keep an eye on <span className="text-purple-400 font-medium">{form.email}</span>
                </p>
                <button onClick={onClose} className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.95rem] font-semibold rounded-full">
                  Got It 👍
                </button>
              </div>
            ) : (
              /* ── Form State ── */
              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="mb-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/[0.1] border border-emerald-500/20 rounded-full text-[0.75rem] font-semibold text-emerald-400 uppercase tracking-[0.06em] mb-4">
                    🎁 Free — No Credit Card
                  </div>
                  <h3 className="font-display text-[1.35rem] font-extrabold tracking-tight mb-2">
                    Get Your Free ICP Audit + 500 Sample Leads
                  </h3>
                  <p className="text-[0.88rem] text-txt-secondary leading-relaxed">
                    Tell us about your ideal customer and we'll deliver a custom ICP analysis + 500 verified sample leads within 48 hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-txt-muted uppercase tracking-[0.06em] mb-1.5">Full Name *</label>
                    <input
                      type="text" required value={form.name} onChange={update('name')}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-purple-500/[0.15] rounded-xl text-[0.92rem] text-white placeholder:text-txt-muted/50 focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-txt-muted uppercase tracking-[0.06em] mb-1.5">Business Email *</label>
                    <input
                      type="email" required value={form.email} onChange={update('email')}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-purple-500/[0.15] rounded-xl text-[0.92rem] text-white placeholder:text-txt-muted/50 focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-txt-muted uppercase tracking-[0.06em] mb-1.5">Company Website or ICP Description *</label>
                    <textarea
                      required value={form.icp} onChange={update('icp')} rows={3}
                      placeholder="e.g. SaaS founders in the US with 10-50 employees, Series A+"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-purple-500/[0.15] rounded-xl text-[0.92rem] text-white placeholder:text-txt-muted/50 focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-[0.82rem]">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full flex items-center justify-center gap-2.5 px-8 py-3.5 text-[0.95rem] font-semibold rounded-full mt-1 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <>Get My Free ICP Audit + 500 Leads 🚀</>
                    )}
                  </button>

                  <p className="text-[0.72rem] text-txt-muted text-center mt-1">
                    🔒 No spam. No cold calls. Just your free audit.
                  </p>
                </form>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-4 mt-6 pt-5 border-t border-purple-500/[0.08]">
                  {[
                    { icon: '🛡️', text: 'GDPR Compliant' },
                    { icon: '⚡', text: '48hr Delivery' },
                    { icon: '✅', text: '<1% Bounce' },
                  ].map(t => (
                    <div key={t.text} className="flex items-center gap-1.5 text-[0.7rem] text-txt-muted">
                      <span>{t.icon}</span>{t.text}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
