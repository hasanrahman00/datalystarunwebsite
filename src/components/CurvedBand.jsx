import { cn } from '../lib/cn.js'

// A warm-black band with curved top & bottom edges that "scoop" into the cream
// page — the editorial look from cricket-club.daddy-leads.com. The SVG fills are
// cream so the band reads as a rounded lens sitting on the page.
export default function CurvedBand({ children, className, curveColor = '#fbf1e5' }) {
  return (
    <section className="relative bg-coal text-white">
      {/* top scoop */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-8 w-full sm:h-12 lg:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill={curveColor} d="M0,0 H1440 V44 C1080,2 360,2 0,44 Z" />
      </svg>
      {/* bottom scoop */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 w-full sm:h-12 lg:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill={curveColor} d="M0,80 H1440 V36 C1080,78 360,78 0,36 Z" />
      </svg>
      <div className={cn('container-shell relative py-24 sm:py-28 lg:py-32', className)}>
        {children}
      </div>
    </section>
  )
}
