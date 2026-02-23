# Layout & Grid

---

## Containers

Three container widths defined as variables:

| Token                 | Value   | Use Case            |
|-----------------------|---------|---------------------|
| `--container-sm`      | 1000px  | Narrow content, forms, articles |
| `--container-md`      | 1280px  | Default             |
| `--container-lg`      | 1440px  | Wide / full-bleed sections |
| `--container-padding-x` | 1rem  | Horizontal edge padding |

**Webflow class:** `container`, `container_small`, `container_large`

---

## Sections

```css
.section {
  padding-top:    var(--section-padding-y);
  padding-bottom: var(--section-padding-y);
  overflow: hidden;
  position: relative;
  /* background-color and color from Colors variables */
}
```

Responsive section padding:

| Breakpoint  | Value  |
|-------------|--------|
| Desktop     | 8rem   |
| Tablet      | 7rem   |
| Mobile (L)  | 5rem   |
| Mobile      | 4rem   |

---

## Grid System

Named grid utility classes (Webflow `grid_` styles):

| Class          | Columns                    |
|----------------|----------------------------|
| `grid_9-col`   | 9-column CSS grid          |
| `grid_[n]-col` | n-column variants          |

All grids use `display: grid` with `grid-template-columns` set inline or via class.

---

## Flexbox Utilities

| Class                  | Behavior              |
|------------------------|-----------------------|
| `flex-child_no-shrink` | `flex-shrink: 0`; `flex-grow: 0` |

---

## Spacing Utilities

Padding and margin utility classes follow a consistent naming convention:

```
padding-{side}_{size}
margin-{side}_{size}
```

**Sides:** top, right, bottom, left, horizontal, vertical  
**Sizes:** none, xsmall, small, medium, large, xlarge

Examples: `padding-horizontal_none`, `padding-left_medium`, `margin-right_xsmall`

---

## Min Height

| Class              | Value       |
|--------------------|-------------|
| `min-height_100dvh`| `100dvh`    |

---

## Image Ratios

| Class              | Aspect Ratio |
|--------------------|--------------|
| `image-ratio_3x2`  | 3/2          |

Uses `position: relative`, `overflow: hidden`, `aspect-ratio`.  
Border radius inherits `--image-radius` (= `--card-radius` = 1rem).

---

## Breakpoints

| Name       | Webflow mode | Max-width |
|------------|--------------|-----------|
| Desktop    | main         | —         |
| Tablet     | medium       | 991px     |
| Mobile (L) | small        | 767px     |
| Mobile     | tiny         | 478px     |

Also available (Webflow-only, not commonly overridden):
- `xl` → ≥ 1440px
- `xxl` → ≥ 1920px
- `large` → ≥ 1280px
