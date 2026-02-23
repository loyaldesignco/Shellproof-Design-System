# ShellProof Security — Design System

Extracted from Webflow (site: `shellproof-sec`) on 2026-02-23.

This design system documents all design tokens, component styles, and layout conventions used across the ShellProof Security website.

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
