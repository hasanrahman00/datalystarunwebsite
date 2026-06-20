import { Link } from 'react-router-dom'
import brand from '../site/brand.js'
import { cn } from '../lib/cn.js'

// Modern wordmark logo: a gradient "sparkle" mark + "Data Centra", with an
// animated gradient pan on "Centra". No boxed icon — eye-catching but clean.
export default function Logo({ className }) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex items-center gap-2', className)}
      aria-label={`${brand.name} home`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[1.15rem] w-[1.15rem] shrink-0 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-transform duration-500 group-hover:rotate-[18deg]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dcSpark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset="0.5" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#e64bd0" />
          </linearGradient>
        </defs>
        <path
          fill="url(#dcSpark)"
          d="M12 2 C13 9 15 11 22 12 C15 13 13 15 12 22 C11 15 9 13 2 12 C9 11 11 9 12 2 Z"
        />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight text-white">
        Data <span className="text-gradient animate-gradient-pan">Centra</span>
      </span>
    </Link>
  )
}
