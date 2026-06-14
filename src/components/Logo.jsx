import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Inline SVG mark + wordmark so the logo scales crisply and themes via currentColor.
export default function Logo({ className, mark = true, light = false }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-2.5', className)} aria-label={`${brand.name} home`}>
      {mark && (
        <span className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-xl shadow-soft">
          <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5d5cef" />
                <stop offset="1" stopColor="#19d3c5" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="url(#logoG)" />
            <text
              x="32"
              y="33"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="'Plus Jakarta Sans', ui-sans-serif, sans-serif"
              fontWeight="800"
              fontSize="30"
              letterSpacing="-1.5"
              fill="#0b1020"
            >
              DC
            </text>
          </svg>
        </span>
      )}
      <span className={cn('font-display text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>
        {brand.name}
      </span>
    </Link>
  )
}
