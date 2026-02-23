# Typography Tokens

Typography values are stored in the **Typography** variable collection with responsive modes (Default/Tablet/Mobile L/Mobile).

---

## Font Families

Two font family variables are used across the system:

| Role                   | Usage                                      |
|------------------------|--------------------------------------------|
| **Display / Heading**  | H1, H2, H3, H4, H5, H6, Quote             |
| **Body / UI**          | Body, Paragraphs, Button, Eyebrow, Label, Tag |
| **Button (alt)**       | Button label (separate font family var)    |

---

## Heading Styles

| Element | Font Family    | Font Size      | Line Height   | Font Weight | Letter Spacing | Margin Bottom       |
|---------|---------------|----------------|---------------|-------------|----------------|---------------------|
| H1      | Display font  | Typography var | Typography var | Typography var | Typography var | Typography var      |
| H2      | Display font  | Typography var | Typography var | Typography var | Typography var | Typography var      |
| H3      | Display font  | Typography var | Typography var | Typography var | Typography var | Typography var      |
| H4      | Display font  | Typography var | Typography var | Typography var | Typography var | Typography var      |
| H5      | Display font  | Typography var | Typography var | Typography var | Typography var | Typography var      |
| H6      | Display font  | Typography var | Typography var | Typography var | Typography var | Typography var      |

> All heading font properties are driven by Typography variables that scale responsively. Values are set in the Typography variable collection.

---

## Body & Paragraph Styles

| Style              | Font Family | Font Size      | Line Height   | Letter Spacing  |
|--------------------|-------------|----------------|---------------|-----------------|
| `body`             | Body font   | Base size var  | Base LH var   | Base LS var     |
| `paragraph`        | Body font   | Base size var  | —             | —               |
| `paragraph_small`  | Body font   | SM size var    | SM LH var     | SM LS var       |
| `paragraph_large`  | Body font   | LG size var    | LG LH var     | LG LS var       |
| `paragraph_xlarge` | Body font   | XL size var    | XL LH var     | XL LS var       |
| `paragraph_xxlarge`| Body font   | XXL size var   | XXL LH var    | XXL LS var      |

All paragraphs share a common `margin-bottom` typography variable.

---

## Special Text Styles

| Style        | Font Family  | Transform   | Weight      | Notes                                    |
|--------------|-------------|-------------|-------------|------------------------------------------|
| `eyebrow`    | Body font   | `uppercase` | Bold        | Displayed inline-block; margin-bottom 1.25rem |
| `subheading` | Body font   | —           | —           | Max-width 1000px; muted color; text-wrap balance |
| `label`      | Body font   | —           | —           | 60% opacity; margin-bottom 0.3em         |
| `quote`      | Display font | —          | Bold        | Uses display font family                 |
| `blockquote` | —           | —           | —           | Margin top/bottom: 2rem (Spacing/2x)     |

---

## Button Typography

| Style          | Font Family   | Font Size    | Weight | Line Height |
|---------------|--------------|--------------|--------|-------------|
| `button`      | Button font  | Base size var | 400    | 1.2         |

---

## Tag Typography

| Style | Font Family | Letter Spacing | Transform   |
|-------|-------------|----------------|-------------|
| `tag` | Body font   | 0.035em        | `uppercase` |

---

## Typography Responsive Behaviour

All heading and body font sizes are controlled via the Typography variable collection with 3 responsive modes. This means type scales down automatically at tablet and mobile breakpoints without manual CSS overrides — it's handled entirely through variable mode switching.
