# Component Styles

Core component styles extracted from Webflow. All values reference design tokens from the Sizes and Colors variable collections.

---

## Section

**Class:** `section`

```css
.section {
  position: relative;
  overflow: clip;
  padding-top: var(--section-padding-v);     /* 8rem desktop → 7rem tablet → 5rem mobile-l → 4rem mobile */
  padding-bottom: var(--section-padding-v);
  background-color: var(--surface);
  color: var(--text);
}
```

| Property          | Token                            | Desktop Value |
|-------------------|----------------------------------|---------------|
| Padding vertical  | Section/Section Padding Vertical | 8rem          |
| Background        | Surface color token              | —             |
| Text color        | Primary text token               | —             |

---

## Container

**Class:** `container`

```css
.container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: var(--container-width);          /* 1280px */
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--container-padding-h);  /* 1rem */
  padding-left: var(--container-padding-h);   /* 1rem */
}
```

| Variant           | Max Width |
|-------------------|-----------|
| Default container | 1280px    |
| SM container      | 1000px    |
| LG container      | 1440px    |

---

## Button

**Class:** `button`

```css
.button {
  display: inline-flex;
  padding: var(--button-padding-v) var(--button-padding-h);  /* 1em 1.5em */
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border: 0px solid var(--button-border-color);
  border-radius: var(--button-radius);        /* 0.75rem */
  background-color: var(--accent-primary);
  color: var(--on-accent-primary);
  font-family: var(--font-button);
  font-size: var(--font-size-base);
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 200ms ease,
              color 200ms ease,
              background-color 200ms cubic-bezier(0.165, 0.84, 0.44, 1),
              box-shadow 200ms ease;
}
```

**Sub-elements:**

| Class            | Description                            |
|-----------------|----------------------------------------|
| `button_label`  | Text wrapper; `white-space: pre`       |
| `button_icon`   | Icon wrapper; `1em × 1em`, inline-flex |

---

## Card

**Class:** `card`

```css
.card {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  flex-shrink: 1;
  border: 0px solid var(--card-border-color);
  border-radius: var(--card-radius);    /* 1rem */
  background-color: var(--card-bg);
  color: var(--text);
  list-style-type: none;
}
```

**Sub-elements:**

| Class             | Padding                  | Description                          |
|------------------|--------------------------|--------------------------------------|
| `card_body`       | Card/Card Padding (2rem) | Full padding, flex column, flex-grow |
| `card_body_small` | Card/Card Padding SM     | Smaller padding variant              |
| `card_header`     | Card/Card Padding (top + sides) | Header with space-between layout |

**Card Themes (combo classes):**

| Class              | Description                         |
|-------------------|-------------------------------------|
| `sg_card-invert`   | Dark bg + inverted text             |
| `sg_card-accent-primary` | Accent primary bg + accent text |
| `sg_card-secondary`| Border + secondary surface bg       |
| `sg_card-wrapper`  | Full padding card with radius (alt) |

---

## Navigation

**Class:** `nav`

```css
.nav {
  position: relative;
  z-index: 99;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  font-size: var(--font-size-base);
}
```

**Structure:**

```
.nav
└── .nav_wrapper
    └── .nav_container          (max-width 1280px, auto margins, padding 0.75rem vertical / 1rem h)
        ├── .nav_left           (flex-grow, gap: Gap/SM = 2rem)
        │   └── .nav_logo       (height 2.5rem, text-decoration none)
        │       └── .nav_logo-embed   (148px × 26px)
        ├── .nav_center         (justify-content: center, padding h: Gap/SM)
        │   └── .nav_menu       (display flex, align center)
        │       └── .nav_menu-list
        │           └── .nav_menu-list-item
        │               └── .nav_link         (0.5em / 0.75em padding, radius 0.75rem)
        │               └── nav dropdown      → .nav_dropdown-menu
        │                   └── .nav-menu_dropdown-list-wrapper
        │                       └── dropdown links
        └── .nav_right          (flex-grow, justify-content: flex-end, gap: Gap/SM)
            └── .button variants
```

**Nav Link:**
```css
.nav_link {
  display: flex;
  padding: 0.5em 0.75em;
  border-radius: 0.75rem;
  color: color-mix(in srgb, currentColor 75%, transparent);
  text-decoration: none;
  white-space: nowrap;
}
```

**Dropdown wrapper:**
```css
.nav-menu_dropdown-list-wrapper {
  border-radius: 1rem;
  background-color: var(--surface);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
```

**Nav background (scroll effect):**
```css
.nav_background {
  position: absolute;
  inset: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: var(--surface);
  transition: opacity 200ms ease-in-out;
}
```

**Mobile menu button:** `3rem × 3rem` centered, padding 0.5rem all sides.

**Fixed nav trigger:** `nav_trigger` — positioned at `top: 100vh` with height = Nav Height (4rem).

---

## Mega Nav

For pages using the mega navigation dropdown:

```css
.mega-nav_dropdown-list-wrapper {
  width: 100%;
  padding: 2rem;
  grid-template-columns: 1fr 1fr;
  border-radius: 1rem;
  background-color: var(--surface);
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.1);
}

.mega-nav_list {
  display: grid;
  grid-template-columns: 1fr;
  gap: Gap/SM (2rem);
}

.mega-nav_link-item {
  display: flex;
  padding-top/bottom: 0.5rem;
  gap: Gap/XXS (0.5rem);
  color: var(--text);
  text-decoration: none;
  transition: color 200ms ease;
}
```

---

## Footer

**Class:** `footer`

```css
.footer {
  padding-top: var(--spacing-4x);     /* 4rem */
  padding-bottom: var(--spacing-4x);  /* 4rem */
  background-color: var(--surface);
  color: var(--text);
}
```

**Sub-elements:**

| Class                   | Description                                               |
|------------------------|-----------------------------------------------------------|
| `footer_bottom`         | Flex row, space-between, gap: Gap/XS (1rem)              |
| `footer_bottom-3-col`   | 3-col grid (1fr max-content 1fr), top border divider     |
| `footer_link`           | Inline-flex, 60% opacity text, no underline              |
| `footer_icon-link`      | 2rem × 2rem box, 70% opacity, 0.35rem padding            |
| `footer_icon-group`     | Flex wrap, gap: Spacing/0.5x (0.5rem)                    |
| `footer_icon`           | 1.5rem × 1.5rem inline-flex icon container               |
| `footer_form_success-message` | Transparent bg, success color, 1.1rem font size  |

**Footer bottom border:**
```css
.footer_bottom-3-col {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  margin-top: 2rem;
}
```
