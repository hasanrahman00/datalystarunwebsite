import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Inline SVG mark + wordmark so the logo scales crisply and themes via currentColor.
export default function Logo({ className, mark = true, light = false }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-2.5', className)} aria-label={`${brand.name} home`}>
      {mark && (
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink shadow-soft">
          <svg viewBox="0 0 64 64" className="h-5 w-5" aria-hidden="true">
            <defs>
              <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7d85f6" />
                <stop offset="1" stopColor="#19d3c5" />
              </linearGradient>
            </defs>
            <path d="M14 42c0-10 8-18 18-18s18 8 18 18" fill="none" stroke="url(#logoG)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="18" cy="44" r="4.5" fill="#19d3c5" />
            <circle cx="32" cy="28" r="4.5" fill="#7d85f6" />
            <circle cx="46" cy="44" r="4.5" fill="#5d5cef" />
          </svg>
        </span>
      )}
      <span className={cn('font-display text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>
        {brand.name}
      </span>
    </Link>
  )
}
