// Central content index. Imports every data file, normalizes it into a uniform
// page shape (adding category / path / template), and exposes selectors used by
// the route registry and the hub template. No component imports here → no cycles.

import hubs from './pages/hubs.js'
import technology from './pages/technology.js'
import professionals from './pages/professionals.js'
import industry from './pages/industry.js'
import healthcare from './pages/healthcare.js'
import government from './pages/government.js'
import geo from './pages/geo.js'
import standalone from './pages/standalone.js'
import servicesEnrich from './pages/services-enrich.js'
import servicesEngage from './pages/services-engage.js'
import servicesMarketing from './pages/services-marketing.js'
import servicesGrowth from './pages/services-growth.js'
import blog from './pages/blog.js'

const services = [
  ...servicesEnrich,
  ...servicesEngage,
  ...servicesMarketing,
  ...servicesGrowth,
]
import caseStudies from './pages/caseStudies.js'
import legal from './pages/legal.js'

// Leaf data-list categories: file → routing metadata.
const CATEGORY_CONFIG = {
  technology: { source: technology, category: 'Technology Users', hubPath: '/technology-email-lists', prefix: '/technology' },
  professionals: { source: professionals, category: 'Professionals', hubPath: '/professionals-email-lists', prefix: '/professionals' },
  industry: { source: industry, category: 'Industries', hubPath: '/industry-email-lists', prefix: '/industry' },
  healthcare: { source: healthcare, category: 'Healthcare', hubPath: '/healthcare-email-lists', prefix: '/healthcare' },
  government: { source: government, category: 'Government', hubPath: '/government-email-lists', prefix: '/government' },
  geo: { source: geo, category: 'Geo-Targeted', hubPath: '/geo-targeted-lists', prefix: '/geo' },
}

function blurbOf(p) {
  return p.blurb || p.hero?.subcopy || p.seo?.description || ''
}

// Normalize leaf data pages from each category file.
const leafDataPages = Object.values(CATEGORY_CONFIG).flatMap(({ source, category, hubPath, prefix }) =>
  (source || []).map((p) => ({
    ...p,
    template: 'data',
    category,
    hubPath,
    path: p.path || `${prefix}/${p.slug}`,
    blurb: blurbOf(p),
  })),
)

// Standalone data pages carry their own path / category / hubPath.
const standaloneDataPages = (standalone || []).map((p) => ({
  ...p,
  template: 'data',
  hubPath: p.hubPath || '/email-lists',
  path: p.path || `/${p.slug}`,
  blurb: blurbOf(p),
}))

export const allDataPages = [...leafDataPages, ...standaloneDataPages]

export const hubPages = (hubs || []).map((p) => ({ ...p, template: 'hub' }))

export const servicePages = (services || []).map((p) => ({
  ...p,
  template: 'service',
  path: p.path || `/services/${p.slug}`,
}))

export const blogPosts = (blog || []).map((p) => ({
  ...p,
  template: 'article',
  kind: 'blog',
  category: p.category || 'Article',
  path: p.path || `/blog/${p.slug}`,
}))

export const caseStudyPosts = (caseStudies || []).map((p) => ({
  ...p,
  template: 'article',
  kind: 'case-study',
  category: p.category || 'Case Study',
  path: p.path || `/case-studies/${p.slug}`,
}))

export const legalPages = (legal || []).map((p) => ({
  ...p,
  template: 'legal',
  path: p.path || `/${p.slug}`,
}))

// Selector used by HubTemplate to render the child grid of a category.
export function pagesByCategory(category) {
  return allDataPages
    .filter((p) => p.category === category)
    .map((p) => ({ title: p.title, path: p.path, blurb: p.blurb }))
}

// Every data-driven page that should become a route.
export const routablePages = [
  ...hubPages,
  ...allDataPages,
  ...servicePages,
  ...blogPosts,
  ...caseStudyPosts,
  ...legalPages,
]
