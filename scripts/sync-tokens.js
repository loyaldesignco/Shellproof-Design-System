/**
 * sync-tokens.js
 *
 * Pulls the latest design tokens from the Webflow API and writes:
 *   tokens/variables.json   ← structured token data
 *   tokens/variables-raw.json ← raw Webflow API response (for debugging)
 *   styles/styles-raw.json  ← raw styles API response (for debugging)
 *   styles/styles.json      ← normalized styles
 *
 * Run:
 *   npm run sync
 */

import { writeFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'
import { webflowGet, webflowGetAll, SITE_ID } from './webflow-api.js'

const ROOT = resolve(process.cwd())

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function save(relPath, data) {
  const absPath = resolve(ROOT, relPath)
  writeFileSync(absPath, JSON.stringify(data, null, 2) + '\n', 'utf8')
  console.log(`  ✓ saved ${relPath}`)
}

function pxToRem(px) {
  return `${px / 16}rem`
}

// ---------------------------------------------------------------------------
// Fetch variables
// ---------------------------------------------------------------------------
async function fetchVariables() {
  console.log('\n── Variables ─────────────────────────────')

  let raw
  try {
    raw = await webflowGet('/variables')
  } catch (err) {
    console.error(`  ✗ Failed to fetch variables: ${err.message}`)
    return null
  }

  save('tokens/variables-raw.json', raw)

  // Normalize into our structured format
  const collections = raw.variableCollections ?? raw.collections ?? []
  const variables   = raw.variables ?? []

  // Build a lookup: collectionId → collection name
  const collMap = {}
  for (const c of collections) {
    collMap[c.id] = c.displayName ?? c.name ?? c.id
  }

  // Group variables by collection
  const grouped = {}
  for (const v of variables) {
    const collName = collMap[v.collectionId] ?? 'Unknown'
    if (!grouped[collName]) grouped[collName] = []
    grouped[collName].push(v)
  }

  // Build a structured tokens object compatible with existing variables.json
  const structured = {
    meta: {
      site: 'ShellProof Security',
      siteId: SITE_ID,
      extractedAt: new Date().toISOString().slice(0, 10),
      source: 'Webflow Variables API v2',
    },
    rawCollections: collections,
    collections: {},
  }

  for (const [collName, vars] of Object.entries(grouped)) {
    const key = collName.toLowerCase().replace(/\s+/g, '-')
    structured.collections[key] = {
      description: `${collName} collection`,
      variables: vars.map(v => ({
        id: v.id,
        name: v.displayName ?? v.name,
        type: v.type,
        value: v.value ?? null,
        modes: v.modes ?? null,
      })),
    }
  }

  save('tokens/variables.json', structured)
  console.log(`  → ${variables.length} variables across ${collections.length} collections`)
  return structured
}

// ---------------------------------------------------------------------------
// Fetch styles
// ---------------------------------------------------------------------------
async function fetchStyles() {
  console.log('\n── Styles ────────────────────────────────')

  let styles
  try {
    styles = await webflowGetAll('/styles', 'styles')
  } catch (err) {
    // Styles API may require Designer API access — log and skip
    console.warn(`  ⚠ Could not fetch styles (may require Designer API access): ${err.message}`)
    return null
  }

  const payload = {
    meta: {
      site: 'ShellProof Security',
      siteId: SITE_ID,
      extractedAt: new Date().toISOString().slice(0, 10),
      total: styles.length,
    },
    styles,
  }

  save('styles/styles-raw.json', payload)
  save('styles/styles.json', payload)
  console.log(`  → ${styles.length} styles fetched`)
  return payload
}

// ---------------------------------------------------------------------------
// Fetch site info (sanity check)
// ---------------------------------------------------------------------------
async function verifySite() {
  console.log('\n── Connecting to Webflow ─────────────────')
  try {
    const site = await webflowGet('')
      .catch(() => webflowGet('/..').catch(() => null))

    // Alternatively fetch the site directly
    const siteRes = await fetch(`https://api.webflow.com/v2/sites/${SITE_ID}`, {
      headers: { Authorization: `Bearer ${process.env.WEBFLOW_API_KEY}` },
    })

    if (siteRes.ok) {
      const s = await siteRes.json()
      console.log(`  ✓ Connected to site: ${s.displayName ?? s.name ?? SITE_ID}`)
    } else {
      const body = await siteRes.text()
      throw new Error(`${siteRes.status} ${body}`)
    }
  } catch (err) {
    console.error(`  ✗ Could not verify site: ${err.message}`)
    throw err
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log('Syncing design tokens from Webflow...')

  await verifySite()

  const [vars, styles] = await Promise.all([
    fetchVariables(),
    fetchStyles(),
  ])

  console.log('\n── Summary ───────────────────────────────')
  if (vars) {
    const totalVars = Object.values(vars.collections)
      .reduce((n, c) => n + c.variables.length, 0)
    console.log(`  Variables: ${totalVars}`)
  }
  if (styles) {
    console.log(`  Styles:    ${styles.meta.total}`)
  }
  console.log('\n  Run `npm run generate:css` to rebuild tokens/variables.css\n')
}

main().catch(err => {
  console.error('\n  Error:', err.message)
  process.exit(1)
})
