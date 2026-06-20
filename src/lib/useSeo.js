import { useEffect } from 'react'
import brand from '../site/brand.js'

function setMeta(attr, key, value) {
  if (!value) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

// Lightweight SEO head manager (no extra deps). Updates title + meta on mount.
export function useSeo({ title, description } = {}) {
  useEffect(() => {
    const full = title ? `${title} | ${brand.name}` : `${brand.name} — ${brand.tagline}`
    document.title = full
    const desc = description || brand.description
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:card', 'summary_large_image')
  }, [title, description])
}

export default useSeo
