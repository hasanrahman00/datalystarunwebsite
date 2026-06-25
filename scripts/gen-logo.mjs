// Renders public/logo-mark.svg into the PNG logo + favicon set.
// Run once after editing the SVG:  node scripts/gen-logo.mjs
import sharp from 'sharp'
import { readFileSync } from 'node:fs'

const svg = readFileSync('public/logo-mark.svg')

const targets = [
  ['public/logo-mark.png', 256],     // nav logo (retina)
  ['public/favicon-16x16.png', 16],
  ['public/favicon-32x32.png', 32],
  ['public/favicon-48x48.png', 48],
  ['public/apple-touch-icon.png', 180],
  ['public/icon-192.png', 192],
  ['public/icon-512.png', 512],
]

for (const [file, size] of targets) {
  await sharp(svg, { density: 512 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(file)
  console.log('wrote', file)
}
