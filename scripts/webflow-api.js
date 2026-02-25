/**
 * Webflow API v2 client
 * Reads WEBFLOW_API_KEY and WEBFLOW_SITE_ID from environment.
 *
 * Usage:
 *   import { webflowGet, SITE_ID } from './webflow-api.js'
 *   const data = await webflowGet('/variables')
 */

import { readFileSync } from 'fs'
import { resolve } from 'path'

// ---------------------------------------------------------------------------
// Load .env (manual parse — no extra deps required)
// ---------------------------------------------------------------------------
function loadEnv() {
  const envPath = resolve(process.cwd(), '.env')
  try {
    const lines = readFileSync(envPath, 'utf8').split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx === -1) continue
      const key = trimmed.slice(0, eqIdx).trim()
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
      if (!process.env[key]) process.env[key] = val
    }
  } catch {
    // .env not present — rely on environment being pre-set
  }
}

loadEnv()

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
export const API_KEY = process.env.WEBFLOW_API_KEY
export const SITE_ID = process.env.WEBFLOW_SITE_ID || '699389c9f53fe717976222f5'
const BASE_URL = 'https://api.webflow.com/v2'

if (!API_KEY) {
  console.error('\n  Missing WEBFLOW_API_KEY.\n')
  console.error('  1. Copy .env.example → .env')
  console.error('  2. Paste your Webflow API key into .env\n')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

/**
 * GET /v2/sites/{siteId}{path}
 * Handles Webflow's offset-based pagination automatically.
 *
 * @param {string} path  — e.g. '/variables', '/styles'
 * @param {object} query — additional query params
 * @returns {Promise<object>} merged response
 */
export async function webflowGet(path, query = {}) {
  const url = new URL(`${BASE_URL}/sites/${SITE_ID}${path}`)
  for (const [k, v] of Object.entries(query)) {
    url.searchParams.set(k, v)
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'accept-version': '1.0.0',
    },
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Webflow API ${res.status} on ${path}: ${body}`)
  }

  return res.json()
}

/**
 * Paginate through all pages of a collection endpoint.
 * Webflow uses `offset` + `limit` with a `pagination.total` field.
 *
 * @param {string} path        — endpoint path
 * @param {string} key         — the array key in the response (e.g. 'variables')
 * @param {number} [limit=100] — items per page
 * @returns {Promise<Array>}
 */
export async function webflowGetAll(path, key, limit = 100) {
  let offset = 0
  let total = null
  const results = []

  while (total === null || offset < total) {
    const data = await webflowGet(path, { limit, offset })
    const items = data[key] ?? []
    results.push(...items)

    total = data.pagination?.total ?? items.length
    offset += items.length

    // No more pages
    if (items.length < limit) break
  }

  return results
}
