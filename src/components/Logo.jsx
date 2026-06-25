import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Real PNG stacked-cube mark (rendered from /public/logo-mark.svg via
// scripts/gen-logo.mjs) + "Data Centra" wordmark and a small tagline.
export default function Logo({ className, tagline = true }) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label={`${brand.name} home`}
    >
      <img
        src="/logo-mark.png"
        alt=""
        width="48"
        height="48"
        className="h-12 w-12 shrink-0 drop-shadow-[0_0_14px_rgba(56,189,248,0.55)] transition-transform duration-500 group-hover:-translate-y-0.5"
      />

      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-extrabold tracking-tight text-white">
          Data <span className="text-gradient">Centra</span>
        </span>
        {tagline && (
          <span className="mt-1 hidden text-[0.5rem] font-bold uppercase tracking-[0.22em] text-ink-muted sm:block">
            Data. Connected. Growth.
          </span>
        )}
      </span>
    </Link>
  )
}
