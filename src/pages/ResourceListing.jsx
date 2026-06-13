import ListingTemplate from '../templates/ListingTemplate.jsx'
import resources from '../data/pages/resources.js'

const config = {
  guide: { title: 'Guides', subcopy: 'Practical, step-by-step playbooks for building pipeline with better data.', variant: 'resources' },
  'white-paper': { title: 'White Papers', subcopy: 'Original research and data-backed reports for revenue leaders.', variant: 'resources' },
  infographic: { title: 'Infographics', subcopy: 'The numbers behind great data, at a glance.', variant: 'resources' },
  video: { title: 'Video Gallery', subcopy: 'Product walkthroughs, webinars and customer stories.', variant: 'videos' },
  tool: { title: 'Free Marketing Tools', subcopy: 'Free tools to verify data, size your market and sharpen outreach.', variant: 'tools' },
}

export default function ResourceListing({ type }) {
  const meta = config[type]
  const items = resources.filter((r) => r.type === type)
  return (
    <ListingTemplate
      page={{
        title: meta.title,
        subcopy: meta.subcopy,
        variant: meta.variant,
        items,
        seo: { title: meta.title, description: meta.subcopy },
      }}
    />
  )
}
