import { Section } from '../components/Section.jsx'
import { Breadcrumbs } from '../components/blocks.jsx'
import useSeo from '../lib/useSeo.js'
import brand from '../site/brand.js'

// Long-form policy / legal page rendered from structured sections.
export default function LegalTemplate({ page }) {
  useSeo(page.seo)
  return (
    <>
      <div className="border-b border-surface-muted bg-surface-subtle">
        <div className="container-shell py-12">
          <Breadcrumbs trail={[{ label: 'Legal' }, { label: page.title }]} />
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{page.title}</h1>
          <p className="mt-2 text-sm text-ink-muted">
            Last updated {page.updated || 'June 2026'} · {brand.legalName}
          </p>
        </div>
      </div>

      <Section className="!py-14">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-semibold text-ink">On this page</p>
              {(page.sections || []).map((s, i) => (
                <a
                  key={i}
                  href={`#sec-${i}`}
                  className="block rounded-md px-2 py-1.5 text-ink-muted transition hover:bg-surface-subtle hover:text-brand-700"
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          <article className="max-w-3xl">
            {page.intro && <p className="mb-8 text-lg leading-relaxed text-ink-muted">{page.intro}</p>}
            {(page.sections || []).map((s, i) => (
              <section key={i} id={`sec-${i}`} className="mb-9 scroll-mt-24">
                <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
                {(s.body || []).map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-ink/80">{p}</p>
                ))}
                {s.bullets?.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink/80">
                    {s.bullets.map((b, k) => (
                      <li key={k} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </Section>
    </>
  )
}
