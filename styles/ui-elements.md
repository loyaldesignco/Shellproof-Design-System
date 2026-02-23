# UI Element Styles

---

## Icons

Icons use a consistent square flex container with a color token.

| Class         | Size        | Color Token      |
|--------------|-------------|-----------------|
| `icon_xsmall` | 1rem × 1rem  | Icon color var  |
| `icon_small`  | 1.25rem × 1.25rem | Icon color var |
| `icon`        | 2rem × 2rem  | Icon color var  |
| `icon_large`  | 3rem × 3rem  | Icon color var  |
| `icon_xlarge` | 5rem × 5rem  | Icon color var  |

All icons use `display: flex; justify-content: center; align-items: center; flex-shrink: 0;`

**Icon group:**
```css
.icon_group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: Gap/XS (1rem);
}
```

---

## Tags

**Class:** `tag`

```css
.tag {
  display: inline-flex;
  padding: 0.15em 0.75em;
  align-items: center;
  justify-content: center;
  gap: var(--tag-padding-h);  /* 0.5rem */
  border: 1px solid transparent;
  border-radius: var(--tag-radius);     /* 0.75rem */
  background-color: color-mix(in srgb, currentColor 10%, transparent);
  font-family: var(--font-body);
  font-size: var(--font-size-tag);
  letter-spacing: 0.035em;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  transition: border-color 200ms ease,
              color 200ms ease,
              background-color 200ms ease;
}
```

**Tag group:**
```css
.tag_group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
```

---

## Dividers

**Horizontal:**
```css
.divider {
  align-self: stretch;
  border-bottom: 1px solid color-mix(in srgb, currentColor 15%, transparent);
}
```

**Vertical:**
```css
.divider-vertical {
  align-self: stretch;
  border-right: 1px solid color-mix(in srgb, currentColor 30%, transparent);
}
```

---

## Shadows

| Class           | Value                                         |
|----------------|-----------------------------------------------|
| `shadow_xxsmall`| `0 1px 2px 0 hsla(0, 0%, 0%, 0.10)`          |
| `shadow_xsmall` | `0 2px 4px 0 hsla(0, 0%, 0%, 0.10)`          |
| `shadow_small`  | `0 2px 6px 0 hsla(0, 0%, 0%, 0.10)`          |
| `shadow_medium` | `0 4px 8px 0 hsla(0, 0%, 0%, 0.10)`          |
| `shadow_large`  | `0 4px 16px 0 hsla(0, 0%, 0%, 0.10)`         |
| `shadow_xlarge` | `0 8px 24px -4px hsla(0, 0%, 0%, 0.15)`      |
| `shadow_xxlarge`| `0 6px 32px 0 hsla(0, 0%, 0%, 0.10)`         |

---

## Layout Utility Classes

### Flex

| Class              | Description                             |
|-------------------|-----------------------------------------|
| `flex`             | `display: flex`                        |
| `flex-child`       | Flex child sizing utilities             |
| `flex-align`       | Alignment combo classes                 |
| `is-x-center`      | `justify-content: center`              |
| `is-x-left`        | `justify-content: flex-start`          |
| `is-x-right`       | `justify-content: flex-end`            |
| `is-y-center`      | `align-items: center`                  |
| `is-y-top`         | `align-items: flex-start`              |
| `is-y-bottom`      | `align-items: flex-end`                |
| `is-y-baseline`    | `align-items: baseline`                |
| `is-space-between` | `justify-content: space-between`       |
| `is-wrap`          | `flex-wrap: wrap`                      |
| `is-vertical`      | `flex-direction: column`               |

### Gaps

| Class         | Value  |
|--------------|--------|
| `gap-xxsmall` | XXS Gap (0.5rem) |
| `gap-xsmall`  | XS Gap (1rem)    |
| `gap-small`   | SM Gap (2rem)    |
| `gap-medium`  | MD Gap (3rem)    |
| `gap-large`   | LG Gap (4rem)    |
| `gap-xlarge`  | XL Gap (5rem)    |
| `gap-xxlarge` | XXL Gap (6rem)   |
| `gap-none`    | 0                |
| `gap-x-none`  | column-gap: 0    |

### Display / Visibility

| Class            | Description                              |
|-----------------|------------------------------------------|
| `hide`           | `display: none`                          |
| `is-desktop-only`| Hide on mobile/tablet                   |

### Position Utilities

| Class           | Description              |
|----------------|--------------------------|
| `is-sticky`     | `position: sticky`       |
| `is-top`        | `top: 0`                 |
| `is-expand`     | Full width/height        |
| `is-full-screen`| Full screen overlay      |
| `position`      | Position utility classes |

---

## Interaction Variables (IX2)

Used in Webflow Interactions animations:

| Variable                      | Type       | Value   | Usage                        |
|-------------------------------|-----------|---------|------------------------------|
| IX/IX Hero Intro Slide Up 100vh | Size     | 0px     | Slide-up animation origin    |
| IX/IX Hero Intro Clipping Mask 1/2/3 | Size | 0px  | Clip mask reveals            |
| IX/IX Card Spacing            | Size      | 2rem    | Card gap in IX transitions   |
| IX/IX Follow Cursor           | Percentage | 0%    | Cursor follow effect         |
| IX/IX Card Change Width       | Percentage | 50%   | Card expand width animation  |
| IX/IX Nav Width               | Size      | 0px     | Nav opening animation        |
