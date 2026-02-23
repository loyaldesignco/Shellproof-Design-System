# Color Tokens

Colors live in the **Colors** variable collection in Webflow. The actual hex/hsl values are stored as Webflow variables and resolved at render time. The semantic roles below are derived from how they are used in component styles.

---

## Semantic Color Roles

These are the color variable IDs as referenced across component styles, with their inferred semantic roles:

| Semantic Role            | Usage                                              |
|--------------------------|----------------------------------------------------|
| **Background / Surface** | Body, Section, Card, Nav, Footer background        |
| **Text / Foreground**    | Body copy, heading, nav link colors                |
| **Accent Primary**       | Primary button bg, active states, CTA              |
| **Accent Secondary**     | Secondary accent, alternate highlight              |
| **Accent Tertiary**      | Tertiary accent                                    |
| **Border / Divider**     | Card borders, footer top border, input borders     |
| **Inverse**              | Text on dark/inverted backgrounds                  |
| **Muted / Disabled**     | Footer links, nav links at reduced opacity         |
| **Success**              | Form success message color                         |

---

## Key Variable References

| Variable ID (suffix)              | Inferred Role                      |
|-----------------------------------|------------------------------------|
| `...6a4dfa56-ac6d-370d-d7f4`     | Body background / surface          |
| `...44540912-a4b3-8017-7370`     | Primary text color                 |
| `...bd659a49-bea4-9461-70e3`     | Accent Primary background          |
| `...ad01a28d-062c-862e-36e7`     | Text on Accent Primary             |
| `...6f464b66-0e9b-bb31-cc8a`     | Text on Accent Primary (alt)       |
| `...f7a92626-0637-f0a6-d3dc`     | Card background (secondary)        |
| `...f9a07f33-59ee-db0e-b867`     | Card background (inverted)         |
| `...210b131f-2c7c-18a2-e87e`     | Text on Inverted card              |
| `...44540912-a4b3-8017-7370`     | On Secondary / On Tertiary color   |
| `...c6990245-1074-e464-96c9`     | Icon default color                 |
| `...7b286cfa-65e0-17f4-89c7`     | Card border color                  |
| `...3bbd2f58-040c-f30b-7601`     | Card secondary border color        |
| `...4ea2ece8-caa4-fca0-8ab0`     | Footer top border                  |
| `...12c0dbba-d717-1ca3-5037`     | Subheading / muted text            |
| `...6fceb0b9-52dc-2ef6-ab2d`     | Eyebrow text color                 |
| `...1cc25291-2484-fb02-af59`     | Nav dropdown link color            |
| `...824e2ae8-2374-6e74-dec2`     | Form success text                  |
| `...1beab2f2-4b83-058b-b927`     | Button default background          |
| `...6491bf6c-be64-5710-7125`     | Button border color                |
| `...788e5cec-8089-ae10-0dba`     | On Inverse text                    |

---

## Color Utility Classes

The following combo classes are used to apply color themes to sections and cards:

| Class Name              | Effect                                  |
|-------------------------|-----------------------------------------|
| `is-accent`             | Accent primary background + text        |
| `is-accent-primary`     | Accent primary theme                    |
| `is-accent-secondary`   | Accent secondary theme                  |
| `is-accent-tertiary`    | Accent tertiary theme                   |
| `is-inverse`            | Inverted (dark) background + text       |
| `is-secondary`          | Secondary surface                       |
| `on-accent-primary`     | Overrides text/bg for accent primary bg |
| `on-accent-secondary`   | Overrides text/bg for accent secondary  |
| `on-accent-tertiary`    | Overrides text/bg for accent tertiary   |
| `on-inverse`            | Overrides text for inverse bg           |

---

## Transparency Conventions

Several colors use `color-mix()` for contextual opacity:

| Usage                | Convention                                   |
|----------------------|----------------------------------------------|
| Nav links            | `color-mix(in srgb, currentColor 75%, transparent)` |
| Footer links         | `color-mix(in srgb, currentColor 60%, transparent)` |
| Footer icon links    | `color-mix(in srgb, currentColor 70%, transparent)` |
| Divider color        | `color-mix(in srgb, currentColor 15%, transparent)` |
| Divider (vertical)   | `color-mix(in srgb, currentColor 30%, transparent)` |
| Form labels          | `color-mix(in srgb, currentColor 60%, transparent)` |
| Tag background       | `color-mix(in srgb, currentColor 10%, transparent)` |
