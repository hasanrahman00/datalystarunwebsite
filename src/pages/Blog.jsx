import ListingTemplate from '../templates/ListingTemplate.jsx'
import { blogPosts } from '../data/collections.js'

export default function Blog() {
  return (
    <ListingTemplate
      page={{
        title: 'The DataCentra Blog',
        subcopy: 'Playbooks, benchmarks and field notes on B2B data, demand generation and pipeline.',
        variant: 'articles',
        items: blogPosts,
        seo: { title: 'Blog', description: 'Playbooks and benchmarks on B2B data and demand generation.' },
      }}
    />
  )
}
