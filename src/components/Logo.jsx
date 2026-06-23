import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Stacked-cube mark (3 isometric slabs, blue→cyan) + "Data Centra" wordmark
// and a small tagline — matches the Datacentra brand look.
const LAYERS = [
  { cy: 32, sideL: '#1e3a8a', sideR: '#1d4ed8' }, // bottom
  { cy: 23, sideL: '#1d4ed8', sideR: '#2563eb' }, // middle
  { cy: 14, sideL: '#2563eb', sideR: '#3b82f6' }, // top
]

export default function Logo({ className, tagline = true }) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label={`${brand.name} home`}
    >
      <svg
        viewBox="0 0 48 52"
        className="h-9 w-9 shrink-0 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform duration-500 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cubeTop" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="0.55" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        {LAYERS.map(({ cy, sideL, sideR }) => (
          <g key={cy}>
            <path d={`M9,${cy} L24,${cy + 7} L24,${cy + 11} L9,${cy + 4} Z`} fill={sideL} />
            <path d={`M24,${cy + 7} L39,${cy} L39,${cy + 4} L24,${cy + 11} Z`} fill={sideR} />
            <path d={`M24,${cy - 7} L39,${cy} L24,${cy + 7} L9,${cy} Z`} fill="url(#cubeTop)" />
          </g>
        ))}
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-white">
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
