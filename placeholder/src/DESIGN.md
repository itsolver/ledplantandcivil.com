```markdown
# Design System Document: Architectural Brutalism

## 1. Overview & Creative North Star

**Creative North Star: "The Industrial Monolith"**

This design system moves away from the generic "yellow-and-black" construction template, instead embracing an editorial, high-end aesthetic termed **Architectural Brutalism**. It treats the digital canvas like a construction site—raw, structural, and immense. We use high-contrast tonal shifts and massive typography to convey the sheer power of heavy machinery, balanced with sophisticated layering to signal professional precision.

The system breaks the "template" look through:
*   **Intentional Asymmetry:** Overlapping text and imagery to mimic the movement of an excavator arm.
*   **Tonal Depth:** Replacing 1px borders with subtle shifts in surface darkness.
*   **Scale Contrast:** Pairing "Display-LG" headers with "Label-SM" technical data to create an authoritative, document-style hierarchy.

---

## 2. Colors

The palette is anchored in a high-vis industrial environment, utilizing deep charcols and blacks to allow the primary "Construction Green" to command attention.

### Surface Hierarchy & The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Boundaries must be defined through background color shifts or the **"Ghost Border"** fallback.

*   **Primary Surface (`surface` #131313):** The base of the entire experience.
*   **The Layering Principle:** Depth is achieved by "stacking" container tiers.
    *   **Level 0 (Background):** `surface-container-lowest` (#0e0e0e) for deep sections like Footers.
    *   **Level 1 (Main Content):** `surface` (#131313).
    *   **Level 2 (Elevated Cards/Modules):** `surface-container-low` (#1C1B1B) or `surface-container` (#201F1F).
    *   **Level 3 (Interactive Elements):** `surface-container-high` (#2A2A2A) for hover states.

### Accent & Soul
*   **Primary (`primary` #bfe353):** Use for critical CTAs and high-importance highlights. 
*   **Signature Textures:** For Hero backgrounds or main CTAs, use a subtle linear gradient transitioning from `primary` (#bfe353) to `primary-container` (#a4c639) at a 135-degree angle. This prevents the "flat" look and adds a metallic, industrial sheen.
*   **Glassmorphism:** For navigation bars or floating image captions, use `surface-container` at 70% opacity with a `20px` backdrop-blur. This integrates the component into the environment rather than "pasting" it on top.

---

## 3. Typography

The typography strategy reflects engineering blueprints: bold, technical, and unmistakably clear.

*   **Display & Headlines (Space Grotesk):** This typeface is chosen for its geometric, technical "ink traps" that mirror industrial machinery. Use `display-lg` (3.5rem) for hero statements with a `tight` letter-spacing (-0.02em) to emphasize mass.
*   **Body & Titles (Inter):** A clinical, neutral sans-serif that ensures readability against dark backgrounds. 
*   **Labels (Inter):** Use `label-md` or `label-sm` in `all-caps` with increased tracking (+0.1em) for technical specs, project dates, and secondary metadata. This creates an "archival" feel that reinforces trust.

---

## 4. Elevation & Depth

In "Architectural Brutalism," depth is perceived through light and material density, not artificial drop shadows.

*   **Tonal Layering:** To lift a Project Card off the background, place a `surface-container-low` card onto a `surface` background.
*   **Ambient Shadows:** If a floating effect is required (e.g., a modal or a primary CTA), use a shadow with a 40px blur, 0px spread, and 6% opacity. The shadow color should be a tinted version of `on-surface` (#e5e2e1) to mimic natural light hitting a matte surface.
*   **The "Ghost Border":** For input fields or where accessibility requires a boundary, use the `outline-variant` token (#454937) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Background: `primary-container` (#a4c639); Text: `on-primary` (#283500). Square corners or `sm` (0.125rem) rounding only.
*   **Secondary:** Background: `surface-container-high`; Text: `on-surface`.
*   **States:** On hover, primary buttons should transition to `primary` (#bfe353) with a subtle `primary-fixed` inner-glow effect.

### Service Cards
*   **Design:** No borders. Use `surface-container-low` for the card body. 
*   **Spacing:** Use `spacing-8` (2rem) for internal padding.
*   **Imagery:** Use a "Machine-Crop"—full-bleed imagery at the top of the card with a subtle gradient overlay at the bottom to transition into the text area.

### Input Fields
*   **Visuals:** `surface-container-lowest` backgrounds. Instead of a 4-sided box, use a 2px bottom-border of `primary` only when the field is focused.
*   **Labels:** Use `label-sm` placed above the field in `on-surface-variant` color.

### Partner Strips (The "Infrastructure" Bar)
*   **Styling:** A wide, edge-to-edge container using `surface-container-lowest`. Logos should be rendered in `secondary-fixed-dim` at 50% opacity, returning to full color only on hover.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme vertical spacing (`spacing-20` or `spacing-24`) between major sections to let the design breathe.
*   **Do** lean into asymmetry. For example, left-align your headline but right-align your body text within a wide container.
*   **Do** use high-quality, high-contrast photography of machinery. Desaturate images slightly so the `primary` green accents pop.

### Don't
*   **Don't** use standard "drop shadows" (black, high-opacity). They look cheap and dated.
*   **Don't** use rounded corners above `0.25rem`. Civil construction is about hard edges and structural integrity; "bubbly" UI undermines the brand's authority.
*   **Don't** use divider lines. If you feel you need a line, use a `spacing` value instead. White space is your structural beam.
*   **Don't** use pure white (#FFFFFF) for body text. Use `on-surface` (#e5e2e1) to reduce eye strain in dark mode.

---

## 7. Signature Layout Pattern: The "Excavated" Hero
For the Hero section, use a wide container. The background should be a `surface-container-lowest` (#0e0e0e) block that takes up 80% of the width, offset to the left. The Hero image should overlap the right edge of this block, "breaking" the container. Place the `display-lg` headline so it straddles both the dark background and the edge of the image, using the `primary` color to ensure legibility across both surfaces. This creates a sense of physical construction and depth.```