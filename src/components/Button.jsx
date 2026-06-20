import { Link } from 'react-router-dom'
import { cn } from '../lib/cn.js'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-night text-white hover:bg-night-soft shadow-soft hover:shadow-lift hover:-translate-y-0.5',
  accent:
    'bg-gradient-to-r from-brand-600 to-accent text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lift',
  outline:
    'border border-ink/15 bg-card text-ink hover:border-ink/30 hover:bg-surface-subtle',
  ghost: 'text-ink hover:bg-surface-muted',
  light:
    'bg-card text-ink hover:bg-white/90 shadow-soft hover:-translate-y-0.5',
  terracotta:
    'bg-terracotta text-white hover:bg-terracotta-deep shadow-soft hover:shadow-lift hover:-translate-y-0.5',
  coal:
    'bg-night text-white hover:bg-night-soft shadow-soft hover:shadow-lift hover:-translate-y-0.5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  const Tag = as || 'button'
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
