# Shellproof Design System — AI Usage Guide

This document defines how AI tools must use the Shellproof Design System.

Follow these rules strictly.

---

# Non-Negotiable Rules

1. Use design tokens only.
2. Prefer semantic tokens over primitives.
3. Do not hardcode hex colors.
4. Do not invent spacing values.
5. Headings use obviously-wide only.
6. Body text uses roboto-mono.
7. Heading weights allowed: 400 and 500 only.

---

# Token Priority Order

When styling:

1) Semantic tokens  
2) Theme tokens  
3) Primitive tokens  

Never jump directly to hex values unless a token does not exist.

---

# Correct Usage Examples

Background:
```
var(--sp-background-color_bg-primary)
```

Text:
```
var(--sp-text-color_text-primary)
```

Button:
```
var(--sp-button_button-primary-bg)
```

Spacing:
```
var(--sp-spacing_1x)
```

Incorrect:
```
#ffffff
#1b6afe
padding: 12px;
```

---

# Light / Dark Mode

Theme switching uses:

```html
<html data-theme="dark">
```

Generated UI must not break when theme changes.

---

# AI Prompt Template — Build UI

You are designing UI using the Shellproof Design System.

Use:
- roboto-mono for body text
- obviously-wide for headings (weights 400 and 500 only)

Use only design tokens.
Prefer semantic tokens.
Do not hardcode colors, spacing, or radius.
Support light and dark mode.

Return production-ready HTML + CSS.

---

# AI Prompt Template — Create Component

Create a [Button/Input/Card/etc].

Use only Shellproof design tokens.
No hardcoded values.
Return the component and list which tokens were used.