// Generates the compliance badge images (public/compliance/*.png) from code.
// Original artwork — distinct color + emblem per standard, plus a verified
// seal. Not the official/trademarked regulator logos. Run:
//   node scripts/gen-compliance.mjs
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

mkdirSync('public/compliance', { recursive: true })

// Shield silhouette, viewBox 0 0 120 148
const SHIELD = 'M60 8 L110 26 V70 C110 106 87 132 60 140 C33 132 10 106 10 70 V26 Z'

function starPoints(cx, cy, R, r = R * 0.4, rot = -90) {
  const pts = []
  for (let i = 0; i < 5; i++) {
    const ao = ((rot + i * 72) * Math.PI) / 180
    pts.push([cx + R * Math.cos(ao), cy + R * Math.sin(ao)])
    const ai = ((rot + 36 + i * 72) * Math.PI) / 180
    pts.push([cx + r * Math.cos(ai), cy + r * Math.sin(ai)])
  }
  return pts.map((p) => p.map((n) => n.toFixed(1)).join(',')).join(' ')
}

// Each emblem is white; `d` = the badge's dark color for knockouts.
const emblems = {
  lock: (d) => `
    <path d="M48 59 V51 a12 12 0 0 1 24 0 V59" fill="none" stroke="#fff" stroke-width="7"/>
    <rect x="41" y="59" width="38" height="33" rx="6" fill="#fff"/>
    <circle cx="60" cy="73" r="4.5" fill="${d}"/>
    <rect x="57.7" y="72.5" width="4.6" height="12" rx="2" fill="${d}"/>`,
  star: () => `<polygon points="${starPoints(60, 66, 26)}" fill="#fff"/>`,
  leaf: () =>
    `<polygon points="60,18 63,42 77,37 72,53 95,50 82,65 105,75 80,76 88,96 66,88 67,92 63,92 63,114 60,114 57,114 57,92 53,92 54,88 32,96 40,76 15,75 38,65 25,50 48,53 43,37 57,42" fill="#fff"/>`,
  stars: () => `
    <polygon points="${starPoints(60, 40, 9)}" fill="#fff"/>
    <polygon points="${starPoints(80, 60, 7)}" fill="#fff"/>
    <polygon points="${starPoints(46, 62, 6)}" fill="#fff"/>
    <polygon points="${starPoints(68, 84, 8)}" fill="#fff"/>
    <polygon points="${starPoints(40, 82, 5)}" fill="#fff"/>`,
  key: () => `
    <circle cx="60" cy="46" r="12" fill="none" stroke="#fff" stroke-width="7"/>
    <rect x="56" y="55" width="8" height="37" rx="2" fill="#fff"/>
    <rect x="64" y="74" width="10" height="7" fill="#fff"/>
    <rect x="64" y="85" width="7" height="7" fill="#fff"/>`,
  envelope: (d) => `
    <rect x="33" y="49" width="54" height="38" rx="5" fill="#fff"/>
    <path d="M37 53 L60 71 L83 53" fill="none" stroke="${d}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`,
}

const seal = `
  <circle cx="93" cy="106" r="15" fill="#10b981" stroke="#fff" stroke-width="3"/>
  <path d="M85.5 106 l5 5 l10 -12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`

const badges = [
  { key: 'gdpr', c1: '#60a5fa', c2: '#1e40af', emblem: 'lock' },
  { key: 'ccpa', c1: '#fbbf24', c2: '#b45309', emblem: 'star' },
  { key: 'casl', c1: '#f87171', c2: '#991b1b', emblem: 'leaf' },
  { key: 'acma', c1: '#34d399', c2: '#065f46', emblem: 'stars' },
  { key: 'edpb', c1: '#a78bfa', c2: '#5b21b6', emblem: 'key' },
  { key: 'canspam', c1: '#38bdf8', c2: '#1e3a8a', emblem: 'envelope' },
]

function svg(b) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 148">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0.35" y2="1">
        <stop offset="0" stop-color="${b.c1}"/>
        <stop offset="1" stop-color="${b.c2}"/>
      </linearGradient>
    </defs>
    <path d="${SHIELD}" fill="url(#g)" stroke="#fff" stroke-opacity="0.4" stroke-width="2.5"/>
    <ellipse cx="60" cy="34" rx="33" ry="15" fill="#fff" opacity="0.12"/>
    <path d="${SHIELD}" fill="none" stroke="#fff" stroke-opacity="0.22" stroke-width="1.5" transform="translate(6 7.4) scale(0.9)"/>
    <g>${emblems[b.emblem](b.c2)}</g>
    ${seal}
  </svg>`
}

for (const b of badges) {
  await sharp(Buffer.from(svg(b))).resize({ width: 240 }).png().toFile(`public/compliance/${b.key}.png`)
  console.log('wrote public/compliance/' + b.key + '.png')
}
