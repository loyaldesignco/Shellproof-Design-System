# Component Inventory

Components are reusable Webflow elements. ShellProof Security has 2 global components.

---

## Navigation

**Component ID:** `699389e9dd3a6491156bb873`  
**Webflow Name:** Navigation

Used on all pages. Includes:
- Logo (left)
- Main nav menu with dropdowns / mega-nav (center)
- CTA buttons (right)
- Mobile menu (full-screen overlay)
- Scroll-triggered background visibility (IX2 interaction)

**Key Classes:** `nav`, `nav_wrapper`, `nav_container`, `nav_left`, `nav_center`, `nav_right`, `nav_menu`, `nav_menu-list`, `nav_link`, `nav_logo`, `nav_background`, `nav_trigger`, `nav_mobile-menu-button`

---

## Footer

**Component ID:** `699389e9dd3a6491156bb874`  
**Webflow Name:** Footer

Used on all pages. Includes:
- Logo + description (top)
- Navigation columns
- Social icon links
- Email/newsletter form
- Copyright + legal links (bottom 3-column layout)

**Key Classes:** `footer`, `footer_bottom`, `footer_bottom-3-col`, `footer_link`, `footer_icon`, `footer_icon-link`, `footer_icon-group`, `footer_form_success-message`

---

## Style Guide

While not a Webflow component, ShellProof uses a built-in style guide page using `sg_` prefixed classes for design system previewing:

| Class                 | Purpose                            |
|----------------------|------------------------------------|
| `sg_preview-lg`       | Large preview container (grid)    |
| `sg_preview-solid-accent` | Accent color swatch preview   |
| `sg_card-wrapper`     | Card preview wrapper              |
| `sg_card-invert`      | Inverted card preview             |
| `sg_card-accent-primary` | Accent primary card preview   |
| `sg_card-secondary`   | Secondary card preview            |
| `sg_grid-buttons`     | Button grid preview (4-col)       |
| `sg_gap-xxl`          | Gap spacer (XXL) for layout demos |
| `sg_align-bottom`     | Bottom-aligned layout helper      |

---

## CMS Collections

No CMS collections are currently active on this site.

---

## Pages

To be documented separately. Use the Webflow Data API:
```
GET /v2/sites/699389c9f53fe717976222f5/pages
```
