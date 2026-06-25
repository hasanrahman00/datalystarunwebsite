// Vercel serverless function: receives website form submissions and emails
// them to the DataCentra inbox via Resend. The API key lives only in the
// RESEND_API_KEY environment variable — never in client code or the bundle.

const TO = process.env.CONTACT_TO || 'contact@datacentra.io'
// NOTE: the "from" domain must be verified in Resend. Until datacentra.io is
// verified you can set CONTACT_FROM=onboarding@resend.dev for testing.
const FROM = process.env.CONTACT_FROM || 'DataCentra Website <noreply@datacentra.io>'

const esc = (s) =>
  String(s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  // Vercel parses JSON bodies automatically; guard for string/empty bodies.
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  body = body || {}

  // Honeypot: real users never fill this hidden field. Silently accept bots.
  if (body.company_website) return res.status(200).json({ ok: true })

  const email = String(body.email || '').trim()
  const company = String(body.company || '').trim()
  const audience = String(body.audience || '').trim()
  const volume = String(body.volume || '').trim()
  const message = String(body.message || '').trim()
  const source = String(body.source || 'Website form').trim()
  const path = String(body.path || '').trim()

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid work email is required.' })
  }

  const row = (label, val) =>
    val
      ? `<tr><td style="padding:4px 14px 4px 0;color:#64748b;font:600 13px sans-serif;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0;color:#0f172a;font:13px sans-serif">${esc(val)}</td></tr>`
      : ''

  const html = `
    <div style="font-family:sans-serif;max-width:560px">
      <h2 style="margin:0 0 2px;color:#0f172a">New lead — ${esc(source)}</h2>
      <p style="color:#64748b;margin:0 0 16px;font-size:13px">DataCentra website${path ? ` · ${esc(path)}` : ''}</p>
      <table style="border-collapse:collapse">
        ${row('Email', email)}
        ${row('Company', company)}
        ${row('Target audience', audience)}
        ${row('Monthly volume', volume)}
      </table>
      ${message ? `<p style="margin:18px 0 4px;color:#64748b;font:600 13px sans-serif">Message</p><p style="white-space:pre-wrap;color:#0f172a;font:14px/1.5 sans-serif;margin:0">${esc(message)}</p>` : ''}
    </div>`

  const text = [
    `New lead — ${source}${path ? ` (${path})` : ''}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    audience && `Target audience: ${audience}`,
    volume && `Monthly volume: ${volume}`,
    message && `\nMessage:\n${message}`,
  ].filter(Boolean).join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New lead${company ? ` · ${company}` : ''} — ${source}`,
        html,
        text,
      }),
    })

    if (!r.ok) {
      const detail = await r.text().catch(() => '')
      console.error('Resend send failed', r.status, detail)
      return res.status(502).json({ error: 'Could not send your request right now. Please email us directly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact handler error', err)
    return res.status(500).json({ error: 'Unexpected error. Please try again.' })
  }
}
