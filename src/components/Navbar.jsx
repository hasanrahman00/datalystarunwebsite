import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, ChevronLeft, Menu, X, ArrowRight, Database, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { cn } from '../lib/cn.js'
import { primaryNav } from '../data/nav.js'

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

function MegaPanel({ item }) {
  return (
    <div className="grid w-[680px] grid-cols-[1.4fr_1fr] gap-6 p-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Browse by audience
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {item.hubs.map((h) => (
            <Link
              key={h.to}
              to={h.to}
              className="group flex flex-col rounded-xl px-3 py-2.5 transition hover:bg-surface-subtle"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Database className="h-3.5 w-3.5 text-brand-500" />
                {h.label}
              </span>
              <span className="mt-0.5 text-xs leading-snug text-ink-muted">{h.desc}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-surface-subtle p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Popular
        </p>
        <ul className="space-y-1">
          {item.featured.map((f) => (
            <li key={f.to}>
              <Link
                to={f.to}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-white hover:shadow-soft"
              >
                {f.label}
                <ArrowRight className="h-3.5 w-3.5 text-ink-muted" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={item.cta.to}
          className="mt-3 flex items-center gap-1.5 px-3 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          {item.cta.label} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

function ListPanel({ item }) {
  return (
    <div className="w-64 p-3">
      <ul className="space-y-0.5">
        {item.links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-surface-subtle hover:text-brand-700"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const enter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        to={item.to}
        className="flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:text-ink"
      >
        {item.label}
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')} />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16 }}
            className={cn(
              'absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 overflow-hidden rounded-2xl border border-surface-muted bg-white shadow-lift',
            )}
          >
            {item.type === 'mega' ? <MegaPanel item={item} /> : <ListPanel item={item} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileMenu({ open, onClose }) {
  // Two-level drill-in menu: tapping a parent slides to its sub-panel.
  const [panel, setPanel] = useState(null)
  const lastPanel = useRef(null)

  useEffect(() => {
    if (!open) setPanel(null)
  }, [open])

  if (panel) lastPanel.current = panel
  const shown = panel || lastPanel.current
  const subLinks = shown
    ? shown.type === 'mega'
      ? [...shown.hubs, ...shown.featured]
      : shown.links || []
    : []

  const row =
    'flex w-full items-center justify-between border-b border-brand-500/40 py-5 text-left text-lg font-semibold text-white transition-colors'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-ink text-white lg:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
            <Logo light />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative h-[calc(100dvh-4rem)] overflow-hidden">
            {/* Root level */}
            <motion.nav
              animate={{ x: panel ? '-25%' : '0%', opacity: panel ? 0 : 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden={!!panel}
              className="absolute inset-0 overflow-y-auto px-5 pb-8"
            >
              {primaryNav.map((item) =>
                item.type === 'link' ? (
                  <Link key={item.label} to={item.to} onClick={onClose} className={row}>
                    {item.label}
                  </Link>
                ) : (
                  <button key={item.label} onClick={() => setPanel(item)} className={row}>
                    {item.label}
                    <ChevronRight className="h-5 w-5 text-white/50" />
                  </button>
                ),
              )}
              <div className="mt-8 flex flex-col gap-3">
                <Button to="/contact" variant="accent" size="lg" onClick={onClose}>
                  Get a free sample <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  onClick={onClose}
                  className="border-white/25 bg-white/5 text-white hover:bg-white/15"
                >
                  Talk to sales
                </Button>
              </div>
            </motion.nav>

            {/* Sub level */}
            <motion.nav
              animate={{ x: panel ? '0%' : '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden={!panel}
              className="absolute inset-0 overflow-y-auto px-5 pb-8"
            >
              <button
                onClick={() => setPanel(null)}
                className="flex w-full items-center gap-2 border-b border-white/10 py-5 text-left text-sm font-semibold uppercase tracking-[0.14em] text-white/60 transition hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
              <p className="px-1 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
                {shown?.label}
              </p>
              <div className="mt-1">
                {subLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={onClose}
                    className="flex items-center justify-between border-b border-white/5 py-4 text-base font-medium text-white/85 transition hover:text-white"
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-white/25" />
                  </Link>
                ))}
              </div>
            </motion.nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-surface-muted bg-white/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-white/0',
      )}
    >
      <div className="container-shell flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/contact" variant="ghost" size="sm">
            Talk to sales
          </Button>
          <Button to="/contact" variant="accent" size="sm">
            <Sparkles className="h-4 w-4" /> Get a free sample
          </Button>
        </div>

        <button
          className="rounded-lg p-2 hover:bg-surface-subtle lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
