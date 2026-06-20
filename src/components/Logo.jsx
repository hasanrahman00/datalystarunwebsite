import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Modern wordmark logo: "Data" in white + "Centra" in the brand gradient.
// No icon mark — the wordmark is the logo.
export default function Logo({ className }) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center', className)}
      aria-label={`${brand.name} home`}
    >
      <span className="font-display text-xl font-extrabold tracking-tight text-white">
        Data<span className="text-gradient">Centra</span>
      </span>
    </Link>
  )
}
