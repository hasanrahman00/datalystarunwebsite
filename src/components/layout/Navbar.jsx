import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/lib/constants'

const SERVICE_PAGES = [
  { label: 'DFY Prospecting', href: '/dfy-prospecting' },
  { label: 'B2B Database Scraping', href: '/b2b-scraping' },
  { label: 'Sales Nav Scraping', href: '/sales-nav' },
  { label: 'Local Leads', href: '/local-leads' },
  { label: 'Ecommerce Prospects', href: '/ecommerce-prospects' },
  { label: 'Waterfall Enrichment', href: '/waterfall-enrichment' },
  { label: 'Custom AI Agents', href: '/ai-agents' },
]

const DIRECT_LINKS = [
  { label: 'DFY Prospecting', href: '/dfy-prospecting' },
  { label: 'B2B Scraping', href: '/b2b-scraping' },
  { label: 'Sales Nav Scraper', href: '/sales-nav' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false); setServicesOpen(false) }, [pathname])

  // Close dropdown on click outside
  useEffect(() => {
    const fn = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 h-[72px] z-[1000] backdrop-blur-xl transition-all duration-300 border-b ${scrolled ? 'bg-[#09090f]/95 shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-purple-500/[0.08]' : 'bg-[#09090f]/80 border-purple-500/[0.05]'}`}>
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-full max-w-[1200px] mx-auto px-6">

          {/* ── Logo (VL icon only) ── */}
          <Link to="/" className="flex items-center">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-[10px] flex items-center justify-center text-[0.82rem] font-extrabold text-white relative overflow-hidden">VL</div>
          </Link>

          {/* ── Desktop Nav (centered) ── */}
          <ul className="hidden xl:flex items-center justify-center gap-1">

            {/* Services Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[0.85rem] font-medium rounded-md transition-all ${servicesOpen ? 'text-white bg-purple-500/[0.1]' : 'text-txt-secondary hover:text-white hover:bg-purple-500/[0.06]'}`}
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-[260px] py-2 rounded-xl border border-purple-500/[0.12] bg-[#0f0f1a]/[0.98] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                  >
                    {SERVICE_PAGES.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className={`block px-4 py-2.5 text-[0.85rem] font-medium transition-all ${pathname === s.href ? 'text-purple-400 bg-purple-500/[0.08]' : 'text-txt-secondary hover:text-white hover:bg-purple-500/[0.06]'}`}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Divider */}
            <li className="w-px h-5 bg-purple-500/[0.12] mx-2" />

            {/* Direct Links */}
            {DIRECT_LINKS.map(l => (
              <li key={l.href}>
                <Link to={l.href} className={`px-3 py-2 text-[0.85rem] font-medium rounded-md transition-all ${pathname === l.href ? 'text-white bg-purple-500/[0.1]' : 'text-txt-secondary hover:text-white hover:bg-purple-500/[0.06]'}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA Buttons (right) ── */}
          <div className="hidden xl:flex items-center gap-2">
            <a href="https://cal.com/vikileads/15min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] border border-purple-500/20 text-white font-semibold text-[0.82rem] rounded-full hover:bg-white/[0.1] hover:border-purple-500/30 transition-all">
              📞 Book a Call
            </a>
            <a href={SITE.slackUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-[0.82rem] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all">
              Join Slack
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button className="xl:hidden flex flex-col gap-[5px] p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : {}} className="w-[22px] h-[2px] bg-white rounded-full block" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : {}} className="w-[22px] h-[2px] bg-white rounded-full block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : {}} className="w-[22px] h-[2px] bg-white rounded-full block" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 right-0 bottom-0 bg-[#09090f]/[0.98] backdrop-blur-xl z-[999] p-6 flex flex-col gap-1 overflow-y-auto xl:hidden">

            {/* Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full px-4 py-3.5 text-[1.05rem] font-medium text-txt-secondary hover:text-white rounded-xl transition-all"
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 pb-2 flex flex-col gap-0.5">
                    {SERVICE_PAGES.map((s) => (
                      <Link key={s.href} to={s.href}
                        className={`block px-4 py-2.5 text-[0.95rem] font-medium rounded-lg transition-all ${pathname === s.href ? 'text-purple-400 bg-purple-500/[0.08]' : 'text-txt-muted hover:text-white'}`}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Divider */}
            <div className="h-px bg-purple-500/[0.08] mx-4 my-2" />

            {/* Direct Links */}
            {DIRECT_LINKS.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <Link to={l.href} className={`block px-4 py-3.5 text-[1.05rem] font-medium rounded-xl transition-all ${pathname === l.href ? 'text-white bg-purple-500/[0.1]' : 'text-txt-secondary hover:text-white'}`}>
                  {l.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-purple-500/[0.08]">
              <a href="https://cal.com/vikileads/15min" target="_blank" rel="noopener noreferrer"
                className="block text-center px-4 py-3.5 bg-white/[0.06] border border-purple-500/20 text-white font-semibold text-[1rem] rounded-full">
                📞 Book a Call
              </a>
              <a href={SITE.slackUrl} target="_blank" rel="noopener noreferrer"
                className="block text-center px-4 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-[1rem] rounded-full">
                ⚡ Join Slack Community
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
