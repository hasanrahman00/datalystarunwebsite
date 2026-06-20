import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

// Counts up to a target when scrolled into view. Parses values like
// "210M+", "95%", "64M+", "170+" — animates the numeric part, keeps the suffix.
// Falls back to the literal value for non-numeric strings or reduced motion.
export default function Counter({ value, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()

  const match = String(value).match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : ''
  const decimals = match && match[1].includes('.') ? 1 : 0

  useEffect(() => {
    if (target === null || !ref.current) return
    if (!inView) return
    if (reduce) {
      ref.current.textContent = value
      return
    }
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.17, 0.55, 0.55, 1],
      onUpdate: (n) => {
        if (ref.current) ref.current.textContent = n.toFixed(decimals) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, reduce, target, suffix, decimals, value])

  // Non-numeric (e.g. a year label) — render as-is.
  if (target === null) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {reduce ? value : `0${suffix}`}
    </span>
  )
}
