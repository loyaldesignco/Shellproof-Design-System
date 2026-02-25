# ShellProof Security — Design System

Live-synced from the Webflow API. Design tokens, component styles, and layout conventions for the ShellProof Security website.

---

## Quick Start — Webflow API Sync

### 1. Set your API key

```bash
cp .env.example .env
# Edit .env and paste your Webflow API access token
```

Generate a token at **Webflow Dashboard → Account → Integrations → API access**.

### 2. Pull the latest tokens

```bash
npm run sync         # Fetch variables + styles from Webflow API
npm run generate:css # Rebuild tokens/variables.css from fetched data
npm run update       # Both steps in one command
```

| Script | What it does |
|--------|-------------|
| `npm run sync` | Pulls variables and styles from the Webflow v2 API, writes `tokens/variables-raw.json` and `styles/styles-raw.json` |
| `npm run generate:css` | Converts the raw token data into `tokens/variables.css` |
| `npm run update` | Runs sync then generate in sequence |

### Files written by `npm run sync`

| File | Description |
|------|-------------|
| `tokens/variables-raw.json` | Raw Webflow API response (all variable collections + modes) |
| `tokens/variables.json` | Structured token data organized by collection |
| `styles/styles-raw.json` | Raw styles API response |
| `styles/styles.json` | Normalized styles list |

> **Note:** `.env` is git-ignored. Never commit your API key.

---

## Structure

```
design-system/
├── README.md                  ← You are here
├── tokens/
│   ├── spacing.md             ← Spacing scale, gaps, radius, layout sizes
│   ├── colors.md              ← Color token structure & semantic roles
│   └── typography.md          ← Type scale, font families, heading styles
├── styles/
│   ├── components.md          ← Button, Card, Section, Container, Nav, Footer
│   └── ui-elements.md         ← Icons, Tags, Dividers, Shadows
└── components/
    └── overview.md            ← Webflow component inventory
```

---

## Variable Collections

| Collection      | Description                                      |
|----------------|--------------------------------------------------|
| Base collection | Core primitive values                            |
| Colors          | Semantic color tokens                            |
| Typography      | Font sizes, line heights, weights — responsive   |
| Sizes           | Spacing scale, radii, gaps, component dimensions |
| Interactions    | Animation/interaction variables (IX2)            |
| Slider          | Responsive slide count + gap overrides           |

The **Typography** and **Sizes** collections have responsive modes: Default (Desktop), Tablet (≤991px), Mobile L (≤767px), Mobile (≤478px).

---

## Breakpoints

| Name   | Applies to        |
|--------|-------------------|
| Main   | All (base)        |
| Medium | ≤ 991px (Tablet)  |
| Small  | ≤ 767px (Mobile L)|
| Tiny   | ≤ 478px (Mobile)  |

---

## Webflow Components

| Component  | ID                               |
|------------|----------------------------------|
| Navigation | `699389e9dd3a6491156bb873`       |
| Footer     | `699389e9dd3a6491156bb874`       |
