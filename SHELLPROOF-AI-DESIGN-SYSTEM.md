# Shellproof Design System for AI Assistants

> **Purpose**: This document provides complete brand guidelines for AI assistants (Claude, ChatGPT, Gemini, etc.) to create on-brand documents, presentations, and web components for Shellproof.
>
> **How to use**: Copy this entire document into your AI conversation when requesting branded deliverables. The AI will follow these specifications exactly.

---

## Brand Identity

**Company**: Shellproof  
**Industry**: Cybersecurity / vCISO Services  
**Brand Personality**: Professional, trustworthy, modern, technically sophisticated  
**Tone of Voice**: Confident but approachable, authoritative without being intimidating, clear and direct

---

## Color Palette

### Primary Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Brand Primary** | `#1B6AFE` | rgb(27, 106, 254) | Primary buttons, headings accents, links, key UI elements |
| **Brand Secondary** | `#669BFE` | rgb(102, 155, 254) | Secondary elements, hover states, supporting graphics |
| **Brand Tertiary** | `#1B6AFE99` | rgba(27, 106, 254, 0.6) | Borders, dividers, subtle accents |

### Neutral Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Black** | `#000000` | rgb(0, 0, 0) | Primary text, headings |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Backgrounds, inverse text |
| **Neutral Lightest** | `#F4F5F7` | rgb(244, 245, 247) | Light backgrounds, cards, sections |
| **Neutral Dark** | `#0000001A` | rgba(0, 0, 0, 0.1) | Subtle shadows, overlays |

### Semantic Color Usage

- **Text Primary**: `#669BFE` (Brand Secondary) — NOT black for primary text in branded contexts
- **Text Inverse**: `#FFFFFF` — Text on dark/colored backgrounds
- **Background Primary**: `#FFFFFF` — Main page background
- **Background Inverse**: `#000000` — Dark sections, footers
- **Accent Primary**: `#1B6AFE` — CTAs, buttons, highlights
- **Border Default**: `#1B6AFE99` — Card borders, dividers

---

## Typography

### Font Families

| Purpose | Font Family | Fallback | Weight |
|---------|-------------|----------|--------|
| **Headings** | Obviously Wide | Arial Black, sans-serif | 500 (Medium) |
| **Body Text** | Roboto | Arial, sans-serif | 400 (Regular) |
| **Monospace/Code** | Roboto Mono | Consolas, monospace | 400 |
| **Condensed** | Roboto Condensed | Arial Narrow, sans-serif | 400 |
| **Narrow Headlines** | Obviously Narrow | Arial, sans-serif | 500 |

### Font Embedding

For web/HTML: Import Adobe Fonts via Typekit:
```css
@import url("https://use.typekit.net/wya7jfy.css");
```

For documents/PDFs where Adobe Fonts aren't available:
- Headings fallback: **Arial Black** or **Montserrat Bold** (Google Font)
- Body fallback: **Roboto** (Google Font) or **Arial**

### Type Scale (rem values, base 16px)

| Token | Size | Line Height | Weight | Letter Spacing | Usage |
|-------|------|-------------|--------|----------------|-------|
| **H1** | 3.05rem (48.8px) | 1.04 | 500 | -0.01em | Page titles |
| **H2** | 1.95rem (31.2px) | 1.04 | 400 | -0.01em | Section headings |
| **H3** | 1.56rem (25px) | 1.04 | 400 | -0.01em | Subsection headings |
| **H4** | 1.25rem (20px) | 1.3 | 400 | -0.01em | Card titles |
| **H5** | 1rem (16px) | 1.3 | 400 | 0 | Small headings |
| **H6** | 0.8rem (12.8px) | 1.3 | 400 | 0.1em | Labels, captions |
| **Body** | 1rem (16px) | 1.6 | 400 | 0 | Paragraphs |
| **Small** | 0.88rem (14px) | 1.6 | 400 | 0 | Secondary text |
| **XS** | 0.8rem (12.8px) | 1.6 | 400 | 0 | Fine print |

---

## Spacing Scale

All spacing values in pixels. Use consistently for padding, margins, and gaps.

| Token | Value | Common Usage |
|-------|-------|--------------|
| `space.0` | 0px | No spacing |
| `space.1` | 4px | Tight spacing, icon gaps |
| `space.2` | 8px | Button padding (sm), inline spacing |
| `space.3` | 12px | Button padding (md), list gaps |
| `space.4` | 16px | Card internal padding, paragraph gaps |
| `space.5` | 24px | Section internal padding |
| `space.6` | 32px | Component gaps |
| `space.7` | 48px | Section padding (sm), card padding |
| `space.8` | 64px | Page padding |
| `space.9` | 80px | Section padding (md) |
| `space.10` | 112px | Section padding (lg), hero spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius.sm` | 4px | Small elements, tags |
| `radius.md` | 8px | Inputs, small buttons |
| `radius.lg` | 12px | Buttons, inputs |
| `radius.xl` | 16px | Cards, containers |
| `radius.round` | 1000px | Pills, circular elements |

### Component-Specific Radius
- **Buttons**: 12px
- **Cards**: 16px
- **Inputs**: 12px

---

## Component Specifications

### Buttons

```
Primary Button:
- Background: #1B6AFE (Brand Primary)
- Text: #FFFFFF (White)
- Font: Roboto, 500 weight
- Padding: 12px horizontal, 8px vertical (md)
- Border Radius: 12px
- No border

Secondary Button:
- Background: transparent
- Text: #1B6AFE (Brand Primary)
- Border: 1px solid #1B6AFE99
- Border Radius: 12px
```

### Cards

```
- Background: #FFFFFF
- Border: 1px solid #1B6AFE99
- Border Radius: 16px
- Padding: 48px
- Shadow: subtle, using #0000001A
```

### Inputs

```
- Background: #FFFFFF
- Border: 1px solid #1B6AFE99
- Border Radius: 12px
- Padding: 8px
- Text: #669BFE
```

---

## Layout Guidelines

### Container Widths

| Size | Max Width | Usage |
|------|-----------|-------|
| Large | 1280px | Full-width layouts |
| Medium | 1024px | Standard content |
| Small | 768px | Narrow content, mobile |

### Content Widths

| Size | Max Width | Usage |
|------|-----------|-------|
| XXL | 1280px | Hero sections |
| XL | 1024px | Wide content |
| LG | 768px | Article content |
| MD | 560px | Focused content |
| SM | 480px | Narrow columns |

### Page Structure

- **Page Padding**: 64px
- **Section Padding Large**: 112px top/bottom
- **Section Padding Medium**: 80px top/bottom
- **Section Padding Small**: 48px top/bottom

---

## Logo Usage

The Shellproof logo consists of:
1. **Logomark**: A geometric shield-like symbol
2. **Logotype**: "SHELLPROOF" in uppercase

### Logo Variants Available
- **Full Color**: Blue logomark (#1B6AFE) with black wordmark
- **One Color**: Single color version (use brand primary or black)
- **Grayscale**: Gray version (#636363)
- **Inverse**: White version for dark backgrounds

### Logo Clear Space
Maintain clear space equal to the height of the "S" in SHELLPROOF on all sides.

### Minimum Sizes
- Digital: 120px wide minimum
- Print: 1 inch wide minimum

---

## Document Guidelines

### Word Documents / Reports

**Page Setup:**
- Size: US Letter (8.5" × 11")
- Margins: 1 inch all sides
- Header: Logo left-aligned, page number right
- Footer: Company info, document date

**Heading Styles:**
- H1: Obviously Wide, 24pt, #000000, bold
- H2: Obviously Wide, 18pt, #1B6AFE
- H3: Obviously Wide, 14pt, #000000
- Body: Roboto, 11pt, #000000, 1.5 line spacing

**Tables:**
- Header row: #1B6AFE background, white text
- Alternating rows: White / #F4F5F7
- Border: 1px #1B6AFE99

### PDF Documents

Follow same specifications as Word documents. When Adobe Fonts unavailable:
- Replace Obviously Wide with **Montserrat Bold** or **Arial Black**
- Replace Roboto with **Roboto** (Google Font) or **Arial**

### Presentations (PowerPoint)

**Slide Size:** 16:9 widescreen (1920×1080)

**Title Slide:**
- Background: #FFFFFF or #000000
- Logo: Centered or top-left
- Title: Obviously Wide, 48pt, #1B6AFE (on white) or #FFFFFF (on black)

**Content Slides:**
- Background: #FFFFFF
- Title: Obviously Wide, 36pt, #000000
- Body: Roboto, 18-24pt, #000000
- Accent elements: #1B6AFE

**Section Dividers:**
- Background: #1B6AFE
- Text: #FFFFFF
- Font: Obviously Wide

---

## Web/HTML Components

### CSS Variables (Copy into stylesheets)

```css
:root {
  /* Colors */
  --sp-color-primary: #1B6AFE;
  --sp-color-secondary: #669BFE;
  --sp-color-tertiary: #1B6AFE99;
  --sp-color-black: #000000;
  --sp-color-white: #FFFFFF;
  --sp-color-neutral-light: #F4F5F7;
  
  /* Typography */
  --sp-font-heading: "obviously-wide", "Arial Black", sans-serif;
  --sp-font-body: "roboto", Arial, sans-serif;
  --sp-font-mono: "roboto-mono", Consolas, monospace;
  
  /* Spacing */
  --sp-space-1: 4px;
  --sp-space-2: 8px;
  --sp-space-3: 12px;
  --sp-space-4: 16px;
  --sp-space-5: 24px;
  --sp-space-6: 32px;
  --sp-space-7: 48px;
  --sp-space-8: 64px;
  
  /* Radius */
  --sp-radius-sm: 4px;
  --sp-radius-md: 8px;
  --sp-radius-lg: 12px;
  --sp-radius-xl: 16px;
}
```

### React/Tailwind Guidelines

When using Tailwind, map to these custom values or use closest equivalents:
- Primary blue: `bg-blue-600` / `text-blue-600` (closest to #1B6AFE)
- Neutral light: `bg-gray-100` (closest to #F4F5F7)
- Border radius large: `rounded-xl` (16px)
- Border radius medium: `rounded-lg` (12px)

---

## Do's and Don'ts

### DO ✓
- Use Obviously Wide for ALL headings
- Maintain consistent spacing using the scale
- Use #1B6AFE as the primary accent color
- Keep body text in Roboto for readability
- Use white backgrounds with blue accents
- Maintain generous white space

### DON'T ✗
- Don't use colors outside the defined palette
- Don't mix other fonts with Obviously Wide
- Don't use border radius values outside the scale
- Don't crowd content — respect spacing tokens
- Don't use gradients (brand uses flat colors)
- Don't stretch or distort the logo

---

## Quick Reference Card

```
SHELLPROOF BRAND AT A GLANCE

Primary Blue:     #1B6AFE
Secondary Blue:   #669BFE  
Black:            #000000
Light Gray:       #F4F5F7

Heading Font:     Obviously Wide (500)
Body Font:        Roboto (400)

Button Radius:    12px
Card Radius:      16px
Card Padding:     48px
Section Padding:  80px (standard)

Adobe Fonts Kit:  https://use.typekit.net/wya7jfy.css
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 2026 | Initial AI-ready design system |

---

*This design system is maintained in the GitHub repository: `loyaldesignco/Shellproof-Design-System`*
