// Contextual blog thumbnails: maps each post slug to topic keywords and returns
// a keyword-matched image (LoremFlickr, stable via `lock`). Falls back to a
// seeded Picsum photo if the contextual source fails to load.
const KEYWORDS = {
  'build-an-icp-that-filters-your-data': 'target,strategy,whiteboard',
  'email-deliverability-2026-field-guide': 'email,inbox,mailbox',
  'intent-data-explained-without-the-hype': 'data,analytics,dashboard',
  'hidden-cost-of-stale-b2b-data': 'server,database,datacenter',
  'outbound-sequencing-that-books-meetings': 'meeting,handshake,sales',
  'tam-sam-som-sizing-your-market-with-real-data': 'chart,graph,growth',
  'account-based-marketing-on-a-startup-budget': 'marketing,office,team',
  'why-cold-emails-land-in-spam-and-how-to-fix-it': 'email,laptop,typing',
}

function hash(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h % 100
}

export function blogImage(slug) {
  const kw = KEYWORDS[slug] || 'business,data,technology'
  return `https://loremflickr.com/800/450/${kw}?lock=${hash(slug)}`
}

export function blogImageFallback(slug) {
  return `https://picsum.photos/seed/${slug}/800/450`
}

// Reusable onError handler that swaps to the fallback once (no infinite loop).
export function blogImgError(slug) {
  return (e) => {
    const el = e.currentTarget
    if (el.dataset.fb) return
    el.dataset.fb = '1'
    el.src = blogImageFallback(slug)
  }
}
