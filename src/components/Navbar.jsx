import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight, Database, Sparkles } from 'lucide-react'
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
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:text-ink"
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
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white lg:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-surface-muted px-5">
            <Logo />
            <button onClick={onClose} aria-label="Close menu" className="rounded-lg p-2 hover:bg-surface-subtle">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto px-5 py-4">
            {primaryNav.map((item) => (
              <details key={item.label} className="group border-b border-surface-muted py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-semibold text-ink">
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-3">
                  {(item.type === 'mega' ? [...item.hubs, ...item.featured] : item.links).map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-surface-subtle hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Button to="/contact" variant="outline" onClick={onClose}>
                Talk to sales
              </Button>
              <Button to="/contact" variant="accent" onClick={onClose}>
                Get a free sample <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
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
