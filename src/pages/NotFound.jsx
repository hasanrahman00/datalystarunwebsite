import { Section } from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import useSeo from '../lib/useSeo.js'

export default function NotFound() {
  useSeo({ title: 'Page not found' })
  return (
    <Section className="!py-28">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-7xl font-extrabold tracking-tight text-brand-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">We couldn’t find that page</h1>
        <p className="mt-3 text-ink-muted">
          The link may be broken or the page may have moved. Let’s get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" variant="accent">Back to home</Button>
          <Button to="/email-lists" variant="outline">Explore data</Button>
        </div>
      </div>
    </Section>
  )
}
