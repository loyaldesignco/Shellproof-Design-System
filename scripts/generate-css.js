/**
 * generate-css.js
 *
 * Reads the synced Webflow variable data and writes tokens/variables.css.
 * Supports two data sources (in order of preference):
 *   1. tokens/variables-raw.json  — raw Webflow API v2 response (after sync)
 *   2. tokens/variables.json      — structured/existing token data
 *
 * Run:
 *   npm run generate:css
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const ROOT = resolve(process.cwd())

// ---------------------------------------------------------------------------
// Webflow variable name → CSS custom property name
// ---------------------------------------------------------------------------

/**
 * Converts a Webflow displayName to a CSS custom property name.
 * Examples:
 *   "Radius SM"       → "--radius-sm"
 *   "Space 1x"        → "--space-1"
 *   "Gap xxs"         → "--gap-xxs"
 *   "Container SM"    → "--container-sm"
 *   "Section Padding Y" → "--section-padding-y"
 *   "Nav Height"      → "--nav-height"
 *   "Card Radius"     → "--card-radius"
 *   "Btn Padding Y"   → "--btn-padding-y"
 *   "IX Hero Slide Up" → "--ix-hero-slide-up"
 *   "Slider 5 Slides" → "--slider-5-slides"
 */
function toCssVar(displayName) {
  return '--' + displayName
    .trim()
    .toLowerCase()
    // "1x" → "1", "2x" → "2" for spacing scale
    .replace(/\b(\d+\.?\d*)x\b/g, '$1')
    // "0.25" → "025" style normalization
    .replace(/\b0\.(\d+)\b/g, '0$1')
    // spaces → hyphens
    .replace(/\s+/g, '-')
    // collapse multiple hyphens
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Format a Webflow variable value as a CSS value string.
 * Numbers from Webflow are raw pixel values unless they're 0 or fractional (em/%).
 */
function formatValue(variable) {
  const { type, value, resolvedValue } = variable
  const val = resolvedValue ?? value

  if (val === null || val === undefined) return null

  if (type === 'Color') {
    // Webflow returns colors as {r,g,b,a} objects
    if (typeof val === 'object' && 'r' in val) {
      const { r, g, b, a } = val
      if (a !== undefined && a < 1) {
        return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`
      }
      return `rgb(${r}, ${g}, ${b})`
    }
    return String(val)
  }

  if (type === 'Number') {
    const num = Number(val)
    // Treat small fractional values as is (likely ratios/counts)
    if (!Number.isInteger(num)) return String(num)
    // 0 stays 0px
    if (num === 0) return '0px'
    // Convert px → rem for sizes > 1 (Webflow stores px)
    if (num >= 1) return `${(num / 16).toFixed(4).replace(/\.?0+$/, '')}rem`
    return String(num)
  }

  // String / dimension — use as-is
  return String(val)
}

// ---------------------------------------------------------------------------
// Breakpoint mode name mapping
// ---------------------------------------------------------------------------
const BREAKPOINT_ORDER = ['tablet', 'mobile-l', 'mobile', 'medium', 'small', 'tiny']
const BREAKPOINT_MEDIA = {
  tablet:   '@media (max-width: 991px)',
  medium:   '@media (max-width: 991px)',
  'mobile-l': '@media (max-width: 767px)',
  small:    '@media (max-width: 767px)',
  mobile:   '@media (max-width: 478px)',
  tiny:     '@media (max-width: 478px)',
}
const BREAKPOINT_COMMENTS = {
  'tablet':   '/* Tablet — ≤ 991px */',
  'medium':   '/* Tablet — ≤ 991px */',
  'mobile-l': '/* Mobile L — ≤ 767px */',
  'small':    '/* Mobile L — ≤ 767px */',
  'mobile':   '/* Mobile — ≤ 478px */',
  'tiny':     '/* Mobile — ≤ 478px */',
}

function normalizeModeName(name = '') {
  return name.trim().toLowerCase().replace(/\s+/g, '-')
}

// ---------------------------------------------------------------------------
// Generate CSS from raw Webflow API data
// ---------------------------------------------------------------------------
function generateFromRaw(raw) {
  const collections = raw.variableCollections ?? raw.collections ?? []
  const variables   = raw.variables ?? []

  // Build mode lookup: modeId → { modeName, breakpoint }
  const modeLookup = {}
  for (const coll of collections) {
    for (const mode of (coll.modes ?? [])) {
      const mname = normalizeModeName(mode.name ?? mode.displayName ?? '')
      modeLookup[mode.id] = mname
    }
  }

  // Find the "default" mode ID for each collection
  const defaultModePerColl = {}
  for (const coll of collections) {
    const modes = coll.modes ?? []
    // Default mode is usually first, or named "default"/"main"/"desktop"
    const def = modes.find(m => {
      const n = normalizeModeName(m.name ?? m.displayName ?? '')
      return n === 'default' || n === 'main' || n === 'desktop'
    }) ?? modes[0]
    if (def) defaultModePerColl[coll.id] = def.id
  }

  // Root variables (default/desktop values)
  const rootVars = []
  // Responsive overrides: breakpointKey → array of {prop, value}
  const responsiveVars = {}

  for (const v of variables) {
    const propName = toCssVar(v.displayName ?? v.name ?? v.id)
    const defaultModeId = defaultModePerColl[v.collectionId]

    // Get default value
    let defaultVal = null
    if (v.value !== undefined && v.value !== null) {
      defaultVal = formatValue(v)
    } else if (v.modeValues && defaultModeId) {
      defaultVal = formatValue({ ...v, value: v.modeValues[defaultModeId] })
    }

    if (defaultVal !== null) {
      rootVars.push({ prop: propName, value: defaultVal })
    }

    // Responsive overrides
    const modeValues = v.modeValues ?? {}
    for (const [modeId, modeVal] of Object.entries(modeValues)) {
      if (modeId === defaultModeId) continue
      const modeName = modeLookup[modeId]
      if (!modeName) continue

      const cssVal = formatValue({ ...v, value: modeVal })
      if (!cssVal) continue

      if (!responsiveVars[modeName]) responsiveVars[modeName] = []
      responsiveVars[modeName].push({ prop: propName, value: cssVal })
    }
  }

  return { rootVars, responsiveVars }
}

// ---------------------------------------------------------------------------
// Generate CSS from our structured variables.json format
// ---------------------------------------------------------------------------
function generateFromStructured(structured) {
  const rootVars = []
  const responsiveVars = {}

  function walk(obj, path = []) {
    if (typeof obj !== 'object' || obj === null) return

    // Skip meta and non-token keys
    if (path.length === 0) {
      for (const [k, v] of Object.entries(obj)) {
        if (k !== 'meta' && k !== 'rawCollections') walk(v, [k])
      }
      return
    }

    // Leaf with a value
    if ('value' in obj && typeof obj.value === 'string') {
      const prop = '--' + path.join('-')
      rootVars.push({ prop, value: obj.value })
      return
    }

    // Responsive leaf: { desktop, tablet, mobile-l, mobile }
    if ('desktop' in obj || 'tablet' in obj) {
      const prop = '--' + path.join('-')
      if (obj.desktop?.value) rootVars.push({ prop, value: obj.desktop.value })
      for (const bp of ['tablet', 'mobile-l', 'mobile']) {
        if (obj[bp]?.value) {
          if (!responsiveVars[bp]) responsiveVars[bp] = []
          responsiveVars[bp].push({ prop, value: obj[bp].value })
        }
      }
      return
    }

    // Recurse
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'description' || k === 'ref' || k === 'px') continue
      walk(v, [...path, k])
    }
  }

  walk(structured.collections ?? structured)
  return { rootVars, responsiveVars }
}

// ---------------------------------------------------------------------------
// Build the final CSS string
// ---------------------------------------------------------------------------
function buildCss(rootVars, responsiveVars, source) {
  const date = new Date().toISOString().slice(0, 10)
  const lines = []

  lines.push(`/**`)
  lines.push(` * ShellProof Security — Design Tokens`)
  lines.push(` * Auto-generated from ${source} on ${date}`)
  lines.push(` * DO NOT EDIT — run \`npm run generate:css\` to rebuild`)
  lines.push(` */`)
  lines.push('')
  lines.push(':root {')

  for (const { prop, value } of rootVars) {
    lines.push(`  ${prop}: ${value};`)
  }

  lines.push('}')
  lines.push('')

  // Responsive overrides
  const orderedBps = BREAKPOINT_ORDER.filter(bp => responsiveVars[bp]?.length)
  if (orderedBps.length) {
    lines.push(`/* ─────────────────────────────────────────────`)
    lines.push(`   Responsive Overrides`)
    lines.push(`   Matches Webflow Variable Modes`)
    lines.push(`───────────────────────────────────────────── */`)
    lines.push('')

    const seen = new Set()
    for (const bp of orderedBps) {
      const media = BREAKPOINT_MEDIA[bp]
      if (!media || seen.has(media)) continue
      seen.add(media)

      // Merge all breakpoints that share the same media query
      const vars = BREAKPOINT_ORDER
        .filter(b => BREAKPOINT_MEDIA[b] === media && responsiveVars[b]?.length)
        .flatMap(b => responsiveVars[b])

      lines.push(BREAKPOINT_COMMENTS[bp] ?? `/* ${bp} */`)
      lines.push(`${media} {`)
      lines.push('  :root {')
      for (const { prop, value } of vars) {
        lines.push(`    ${prop}: ${value};`)
      }
      lines.push('  }')
      lines.push('}')
      lines.push('')
    }
  }

  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  const rawPath        = resolve(ROOT, 'tokens/variables-raw.json')
  const structuredPath = resolve(ROOT, 'tokens/variables.json')
  const outPath        = resolve(ROOT, 'tokens/variables.css')

  let rootVars, responsiveVars, source

  if (existsSync(rawPath)) {
    console.log('Reading tokens/variables-raw.json (Webflow API response)...')
    const raw = JSON.parse(readFileSync(rawPath, 'utf8'))
    ;({ rootVars, responsiveVars } = generateFromRaw(raw))
    source = 'Webflow Variables API v2'
  } else if (existsSync(structuredPath)) {
    console.log('Reading tokens/variables.json (structured data)...')
    const structured = JSON.parse(readFileSync(structuredPath, 'utf8'))
    ;({ rootVars, responsiveVars } = generateFromStructured(structured))
    source = 'tokens/variables.json'
  } else {
    console.error('No token data found. Run `npm run sync` first.')
    process.exit(1)
  }

  const css = buildCss(rootVars, responsiveVars, source)
  writeFileSync(outPath, css, 'utf8')
  console.log(`✓ Written tokens/variables.css  (${rootVars.length} root vars)`)
}

main()
