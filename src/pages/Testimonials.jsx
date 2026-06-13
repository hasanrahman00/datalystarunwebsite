import ListingTemplate from '../templates/ListingTemplate.jsx'
import testimonials from '../data/pages/testimonials.js'

export default function Testimonials() {
  return (
    <ListingTemplate
      page={{
        title: 'What customers say',
        subcopy: 'Revenue, marketing and growth leaders on what changed after switching to Datalyst.',
        variant: 'testimonials',
        items: testimonials,
        seo: { title: 'Testimonials', description: 'Customer testimonials about Datalyst data and demand generation.' },
      }}
    />
  )
}
