# Spacing Tokens

All spacing values live in the **Sizes** variable collection. Values are the same across all breakpoints unless noted.

---

## Base Spacing Scale

| Token Name       | Variable ID (short)    | Value    |
|-----------------|------------------------|----------|
| Spacing/0.25x   | `Spacing/0.25x`        | 0.25rem  |
| Spacing/0.5x    | `Spacing/0.5x`         | 0.5rem   |
| Spacing/0.75x   | `Spacing/0.75x`        | 0.75rem  |
| Spacing/1x      | `Spacing/1x`           | 1rem     |
| Spacing/1.25x   | `Spacing/1.25x`        | 1.25rem  |
| Spacing/1.5x    | `Spacing/1.5x`         | 1.5rem   |
| Spacing/1.75x   | `Spacing/1.75x`        | 1.75rem  |
| Spacing/2x      | `Spacing/2x`           | 2rem     |
| Spacing/3x      | `Spacing/3x`           | 3rem     |
| Spacing/4x      | `Spacing/4x`           | 4rem     |
| Spacing/5x      | `Spacing/5x`           | 5rem     |
| Spacing/6x      | `Spacing/6x`           | 6rem     |
| Spacing/7x      | `Spacing/7x`           | 7rem     |
| Spacing/8x      | `Spacing/8x`           | 8rem     |

---

## Border Radius

| Token Name      | Value     | Notes                     |
|----------------|-----------|---------------------------|
| Radius/SM      | 0.25rem   |                           |
| Radius/MD      | 0.5rem    |                           |
| Radius/LG      | 0.75rem   |                           |
| Radius/XL      | 1rem      |                           |
| Radius/Round   | 100rem    | Fully rounded / pill shape |

---

## Gap Scale

Gaps reference Spacing tokens:

| Token Name  | Resolves To    | Value  |
|------------|----------------|--------|
| Gap/XXS    | Spacing/0.5x   | 0.5rem |
| Gap/XS     | Spacing/1x     | 1rem   |
| Gap/SM     | Spacing/2x     | 2rem   |
| Gap/MD     | Spacing/3x     | 3rem   |
| Gap/LG     | Spacing/4x     | 4rem   |
| Gap/XL     | Spacing/5x     | 5rem   |
| Gap/XXL    | Spacing/6x     | 6rem   |

---

## Layout / Container Sizes

| Token Name                       | Value    |
|----------------------------------|----------|
| Container/Container Width        | 1280px   |
| Container/Container SM Width     | 1000px   |
| Container/Container LG Width     | 1440px   |
| Container/Container Padding H    | 1rem (Spacing/1x) |

---

## Component Sizes

| Token Name                         | Value               | Notes                          |
|------------------------------------|---------------------|-------------------------------|
| Nav/Nav Height                     | 4rem                |                               |
| Section/Section Padding Vertical   | 8rem (desktop)      | 7rem tablet, 5rem mobile-l, 4rem mobile |
| Card/Card Radius                   | 1rem (Radius/XL)    |                               |
| Card/Card Padding                  | 2rem (Spacing/2x)   | Responsive — 1.5rem tablet, 1rem mobile |
| Card/Card Padding SM               | 1.5rem              | Responsive — 1.25rem tablet, 1rem mobile |
| Button/Button Radius               | 0.75rem             |                               |
| Button/Button Padding Vertical     | 1em                 |                               |
| Button/Button Padding Horizontal   | 1.5em               |                               |
| Input/Input Radius                 | 0.75rem             |                               |
| Input/Input Padding Vertical       | 1rem (Spacing/1x)   |                               |
| Input/Input Padding Horizontal     | 1rem (Spacing/1x)   |                               |
| Tag/Tag Radius                     | 0.75rem             |                               |
| Tag/Tag Padding Vertical           | 0.25rem             |                               |
| Tag/Tag Padding Horizontal         | 0.5rem              |                               |

---

## Width Scale

| Token Name  | Value  |
|------------|--------|
| Width/XXS  | 12rem  |
| Width/XS   | 25rem  |
| Width/SM   | 35rem  |
| Width/MD   | 40rem  |
| Width/LG   | 50rem  |
| Width/XL   | 60rem  |

---

## Slider Variables

Slide counts respond to breakpoints:

| Token           | Desktop | Tablet | Mobile L | Mobile |
|----------------|---------|--------|----------|--------|
| 5 slides       | 5       | 3      | 2        | 1      |
| 4 slides       | 4       | 3      | 2        | 4      |
| 3 slides       | 3       | 2      | 2        | 1      |
| 2 slides       | 2       | 2      | 1        | 1      |
| 1.5 slides     | 1.5     | 1.5    | 1.5      | 1      |
| Spacing SM     | 1rem    | 1rem   | 1rem     | 1rem   |
| Navigation     | 0.75rem | 0.75rem| 0.75rem  | 0.75rem|

**Slider/Gap Small mode:** adds `Spacing` = 1rem gap override.
