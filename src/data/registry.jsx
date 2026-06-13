// Maps every data-driven page to its template component and produces the
// <Route> list consumed by App. Standalone (bespoke) pages are routed in App.
import DataPageTemplate from '../templates/DataPageTemplate.jsx'
import ServicePageTemplate from '../templates/ServicePageTemplate.jsx'
import HubTemplate from '../templates/HubTemplate.jsx'
import ArticleTemplate from '../templates/ArticleTemplate.jsx'
import ListingTemplate from '../templates/ListingTemplate.jsx'
import LegalTemplate from '../templates/LegalTemplate.jsx'
import { routablePages } from './collections.js'

export const templateMap = {
  data: DataPageTemplate,
  service: ServicePageTemplate,
  hub: HubTemplate,
  article: ArticleTemplate,
  listing: ListingTemplate,
  legal: LegalTemplate,
}

// Returns [{ path, Component, page }] for all content-driven routes.
export function getContentRoutes() {
  return routablePages
    .filter((p) => p.path && templateMap[p.template])
    .map((p) => ({ path: p.path, Component: templateMap[p.template], page: p }))
}

export { routablePages }
