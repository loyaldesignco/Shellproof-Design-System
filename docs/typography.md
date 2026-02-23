# Typography

ShellProof Security uses two font families driven by Webflow Typography variables:

- **Display / Heading font** — referenced via `variable-ea082e97` in the Typography collection
- **Body font** — referenced via `variable-e54b61d3` in the Typography collection

> Font family names are resolved in the Webflow Designer under **Variables → Typography**.
> All size, weight, line-height, and letter-spacing values are also variable-driven and responsive.

---

## Heading Scale

| Style            | Usage                               | Notes                              |
|------------------|-------------------------------------|------------------------------------|
| `heading_hero`   | Primary hero headline               | Largest, lightest weight           |
| `heading_primary`| H1 — section hero titles            | Bold                               |
| `heading_secondary` | H2 — section titles             | Semi-bold                          |
| `heading_tertiary` | H3 — sub-section titles          | Medium weight                      |
| `heading_small`  | H4 — card titles, feature headings  |                                    |
| `heading_xsmall` | H5 — list headings, labels          |                                    |
| `heading_xxsmall`| H6 — micro headings                 |                                    |

### Responsive Heading
| Style                      | Value                         |
|----------------------------|-------------------------------|
| `heading-responsive`       | `clamp(2rem, 7cqw, 4rem)` / lh: 1 |
| `heading-responsive_large` | `10cqw`                       |
| `heading-responsive_xlarge`| `clamp(2rem, 8cqw, 10rem)` / lh: 1.1em |

---

## Paragraph Scale

| Style               | Usage                          |
|---------------------|--------------------------------|
| `paragraph_xxlarge` | Pull quotes, hero body copy    |
| `paragraph_xlarge`  | Large intro text               |
| `paragraph_large`   | Section intro paragraphs       |
| `paragraph`         | Default body text              |
| `paragraph_small`   | Footnotes, disclaimers         |

---

## UI Text

| Style        | Usage                            | Notes                          |
|--------------|----------------------------------|--------------------------------|
| `body`       | Global body default              | Set on `<body>`                |
| `label`      | Form labels, UI labels           | Same scale as `paragraph_small`|
| `subheading` | Card/section subheadings         | Same scale as `paragraph_large`|
| `eyebrow`    | Pre-titles, category labels      | Accent color                   |
| `input_label`| Form field labels                | 0.75rem / 400wt / 1.4lh / 0.04em ls |
| `text_bold`  | Inline bold emphasis             | Variable font weight           |
| `text-link`  | Inline hyperlinks                | 400 weight                     |
| `text-button`| Standalone text CTA              | Accent color, semi-bold        |
| `text_all-caps` | Uppercase label treatment     | `text-transform: uppercase`    |

---

## Tab & Dropdown

| Style                          | Font Size    | Line Height |
|--------------------------------|--------------|-------------|
| `tab_menu-link`                | 0.9375rem    | 1.3         |
| `tab_menu-link_transparent-bottom` | 0.9375rem | 1.3        |
| `tab-link_vertical`            | 0.9375rem    | 1.3         |
| `dropdown_link`                | 1rem (var)   | —           |
| `footer_link`                  | —            | 400 weight  |

---

## Notes

- All heading styles use `margin-top: 0` by default to prevent Webflow's default heading margins
- Letter-spacing on headings is tightly controlled via variables — do not override without updating the variable
- The `eyebrow` class uses an accent color variable — check the Colors collection for the resolved value
