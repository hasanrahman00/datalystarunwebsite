import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Circular "DC" monogram seal — a refined, professional brand mark.
// Adapts to light/dark backgrounds (dark coal seal on light pages, cream seal
// on the dark footer) with a thin terracotta accent ring. The wordmark is
// hidden by default (icon-only mark); pass `wordmark` to show the name.
export default function Logo({ className, mark = true, light = false, wordmark = false }) {
  const disc = light ? '#fbf1e5' : '#1a1a1a'
  const letters = light ? '#1a1a1a' : '#fbf1e5'
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label={`${brand.name} home`}
    >
      {mark && (
        <span className="inline-flex h-9 w-9 shrink-0">
          <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
            <circle cx="32" cy="32" r="31" fill={disc} />
            <circle cx="32" cy="32" r="26.5" fill="none" stroke="#c8553d" strokeWidth="1.5" />
            <text
              x="32"
              y="34.5"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
              fontWeight="700"
              fontSize="25"
              letterSpacing="-0.5"
              fill={letters}
            >
              DC
            </text>
          </svg>
        </span>
      )}
      {wordmark && (
        <span
          className={cn(
            'font-display text-lg font-extrabold tracking-tight',
            light ? 'text-white' : 'text-ink',
          )}
        >
          {brand.name}
        </span>
      )}
    </Link>
  )
}
