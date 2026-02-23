# Components

All token values reference CSS custom properties defined in `tokens/variables.css`.

---

## Button

```css
.button {
  border-radius:    var(--btn-radius);     /* 0.75rem */
  padding-top:      var(--btn-padding-y);  /* 1em */
  padding-bottom:   var(--btn-padding-y);
  padding-left:     var(--btn-padding-x);  /* 1.5em */
  padding-right:    var(--btn-padding-x);
  font-size:        var(--btn-font-size);  /* 1rem */
}
```

**Webflow classes:** `button`, `button_primary`, `button_secondary`, `button_ghost`,
`button_icon-left`, `button_icon-right`, `button_icon-only`

---

## Card

```css
.card {
  border-radius:  var(--card-radius);   /* 1rem */
  padding:        var(--card-padding);  /* 2rem desktop → 1rem mobile */
}

.card.is-small {
  padding: var(--card-padding-sm); /* 1.5rem desktop → 1rem mobile */
}
```

---

## Input / Form Fields

```css
.input {
  border-radius:    var(--input-radius);     /* 0.75rem */
  padding-top:      var(--input-padding-y);  /* 1rem */
  padding-bottom:   var(--input-padding-y);
  padding-left:     var(--input-padding-x);  /* 1rem */
  padding-right:    var(--input-padding-x);
}
```

**Webflow classes:** `input`, `input_text-area`, `input_label`, `input_wrapper`, `form_field-wrapper`

---

## Tag / Badge

```css
.tag {
  border-radius:    var(--tag-radius);     /* 0.75rem */
  padding-top:      var(--tag-padding-y);  /* 0.25rem */
  padding-bottom:   var(--tag-padding-y);
  padding-left:     var(--tag-padding-x);  /* 0.5rem */
  padding-right:    var(--tag-padding-x);
}
```

---

## Navigation

| Token             | Value   |
|-------------------|---------|
| `--nav-height`    | 4rem    |

**Webflow classes:** `nav`, `nav_link`, `nav_dropdown-link`, `dropdown`, `dropdown_toggle`,
`dropdown_link`, `mega-nav_dropdown-list-wrapper`

Nav background defaults to `hsla(0, 0%, 100%, 0)` (transparent) — scrolled state handled via IX2.

---

## Tooltip

```css
.tooltip_text {
  font-size:   variable (Typography collection);
  line-height: 1.2em;
  /* border & background colors from Colors collection variables */
}
```

---

## Divider

```css
.divider {
  border-bottom-color: color-mix(in srgb, currentColor 15%, transparent);
}
```

---

## Slider

Slide count is responsive via number variables:

| Variable         | Desktop | Tablet | Mobile (L) | Mobile |
|------------------|---------|--------|------------|--------|
| `5 slides`       | 5       | 3      | 2          | 1      |
| `4 slides`       | 4       | 3      | 2          | 4      |
| `3 slides`       | 3       | 2      | 2          | 1      |
| `2 slides`       | 2       | 2      | 1          | 1      |
| `1.5 slides`     | 1.5     | 1.5    | 1.5        | 1      |

**Gap Small mode** (Slider collection, mode: `Gap Small`): reduces `--slider-spacing-sm` to 1rem

---

## Overlay

| Class                   | Background                          |
|-------------------------|-------------------------------------|
| `overlay_opacity-middle`| Colors variable (semi-transparent)  |
| `hero-overlay`          | Color variable                      |

---

## Pricing

`pricing_tab-button` — background: transparent (active state handled via combo class or JS)

---

## Icon Sizes

| Class        | Usage              |
|--------------|--------------------|
| `icon_small` | Inline / compact   |
| `icon_large` | Feature / hero icons |

Both use a color variable from the Colors collection.
