import ListingTemplate from '../templates/ListingTemplate.jsx'
import { caseStudyPosts } from '../data/collections.js'

export default function CaseStudies() {
  return (
    <ListingTemplate
      page={{
        title: 'Case Studies',
        subcopy: 'How revenue teams use DataCentra data and programs to build cleaner, faster pipeline.',
        variant: 'cases',
        items: caseStudyPosts,
        seo: { title: 'Case Studies', description: 'Customer results with DataCentra data and demand-generation programs.' },
      }}
    />
  )
}
