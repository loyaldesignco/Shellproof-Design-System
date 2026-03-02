# Shellproof Design System

The Shellproof Design System is the single source of truth for UI styling.

This repository is structured to be:
- AI-friendly
- Developer-friendly
- Theme-aware (Light + Dark)
- Fully token-driven

---

# Fonts

Load Adobe Typekit BEFORE loading tokens:

```html
<link rel="stylesheet" href="https://use.typekit.net/wya7jfy.css">
```

### Heading Font
- obviously-wide
- Allowed weights:
  - 400 (Regular)
  - 500 (Medium)

### Body Font
- roboto-mono

No other heading weights are allowed.

---

# Themes

The system supports:

- Light (default)
- Dark

Dark mode is activated using:

```html
<html data-theme="dark">
```

If no theme is specified, Light is assumed.

---

# Repository Structure

```
Shellproof-Design-System
│
├── new_tokens/        (Edit tokens here)
│   ├── primitives/
│   ├── semantic/
│   └── themes/
│
├── dist/              (Generated output – do not edit manually)
│   └── css/
│
├── schemas/
├── scripts/
├── DESIGN_WITH_AI.md
└── README.md
```

---

# How To Use (No Build Required)

Teammates do NOT need Node or npm.

Include tokens in your project like this:

```html
<link rel="stylesheet" href="https://use.typekit.net/wya7jfy.css">
<link rel="stylesheet" href="/path/to/dist/css/tokens.css">
```

Then use CSS variables:

```css
.button {
  background: var(--sp-button_button-primary-bg);
  color: var(--sp-button_button-primary-text);
  padding: var(--sp-spacing_1x);
  border-radius: var(--sp-radius_md-radius);
}
```

---

# Editing Rules

- Do NOT edit files inside `dist/`
- Edit tokens inside `new_tokens/`
- Commit both source and generated output

---

For AI usage instructions, see:

→ DESIGN_WITH_AI.md