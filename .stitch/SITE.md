# LED Plant & Civil Site Structure Notes

## Overview
- Purpose: marketing site for LED Plant & Civil, focused on civil works, earthworks, underground services, and plant hire for developers and principal contractors across South East Queensland.
- Primary business/content source: `raw/LED-Plant-and-Civil-Website-Content-Request.md`.
- Supporting LED materials reviewed: `raw/Capability Statement.pdf` and `raw/Screenshot 2026-03-24 162141.png`.
- Reference IA/UI source inspected on 2026-04-10: `statewideroofing.net.au` home, services, projects, about-us, careers, contact.
- Existing Stitch context:
  - Stitch project: `projects/9514040008013092560`
  - Design system source of truth: `.stitch/DESIGN.md`
  - Current implementation source: `site/public/`
- Key adaptation rule: use State Wide Roofing for structure and UX patterns only. Do not reuse roofing-specific copy, sectors, imagery, or trust/logo treatments.

## Reference site page inventory
| Page | URL slug | Purpose | Visible H1 | Primary CTA labels | Approximate section order |
| --- | --- | --- | --- | --- | --- |
| Home | `/` | Brand overview and routing page | No visible H1 in main hero; hero strapline reads `First Choice in Roofing Solutions` | `View Projects`, `Contact Us`, `Read More` | Hero video + dual CTA -> intro CTA band -> sector feature bands (`Commercial`, `Government`, `Retail`) -> about preview -> services preview + 3 icon cards -> projects intro + slider -> partner logos |
| Services | `/services` | Service overview page | `Our Services` | No page-specific CTA in main; relies on header/footer CTAs | H1 + supporting intro -> short lead copy -> stacked service sections (`Commercial Roofing`, `Metal Wall Cadding`, `Goverment & Schools`, `Retail Roofing`, `Industrial Roofing`) |
| Projects | `/projects` | Simple project listing page | `Our Projects` | No page-specific CTA in main; relies on header/footer CTAs | H1 -> short value statement -> company intro copy -> project list/slider with named projects |
| About Us | `/about-us` | Company background and values page | `About Us` | No page-specific CTA in main; relies on header/footer CTAs | H1 + strapline -> company overview -> `Vision statement` list -> `Core values` list -> `Our Mission` block |
| Careers | `/careers` | Lightweight hiring page | `Join the Success` | `Apply Now` | H1 + short hiring intro -> single job card -> mailto apply CTA |
| Contact | `/contact` | Contact form page | `Contact Us` | `Submit` | H1 + short instruction copy -> simple form |

- Observed current inventory appears limited to six top-level marketing pages.
- No blog, no news section, no visible case study detail routes, and no dedicated accreditation page were surfaced in the inspected navigation.

## Reference site UI/design patterns
| Pattern | Reference observation | Keep for LED | Intentionally change for LED |
| --- | --- | --- | --- |
| Header / nav | Logo left, centered top-level nav, single utility CTA on the right (`Call Now!`), same nav across all pages | Keep the simple five-link primary nav and one clear right-side CTA | Use LED branding, not a roofing-style utility CTA. Prefer `Contact Us` and optional capability statement access over a generic `Call Now!` pattern unless a public phone number is confirmed. |
| Footer | Address, phone, email, socials, inquiry copy, `Contact Us` CTA, copyright, `Go Up` link | Keep the structured contact footer with direct action and service-area context | Do not publish address or phone until confirmed. Replace roofing office framing with LED service coverage and capability statement access. |
| Hero patterns | Home uses full-bleed video/image hero with two CTAs. Interior pages use a simpler banner/H1 pattern with short supporting copy. | Keep the clear split between a high-impact home hero and simpler internal-page heroes | Home hero should lead with civil/plant hire identity and project imagery/video from `/raw`, not sector badges or roofing slogans. |
| Cards / grids | Repeated use of simple cards/columns for service categories and project items | Keep card/grid-based summaries for services and projects | Replace roofing service icons with civil service blocks and project-photo cards. Avoid decorative trust-badge cards. |
| Testimonial / trust patterns | No true testimonial module observed. Trust is communicated through company story, service claims, partner logos, and footer contact details. | Keep the idea of using trust/proof blocks between major sections | Replace partner logos and roofing trust language with LED proof: leadership, project names, service area, equipment/capability cues, safety/quality commitments. |
| Project listing patterns | Projects page is lightweight: intro copy followed by named project items in a carousel/list format. Home also previews projects. | Keep a simple featured-projects preview on home and a dedicated projects listing page | Use image-led project cards with concise metadata. Do not invent case-study details that are not in the supplied materials. |
| CTA band patterns | Home includes a dark intro band with headline + short copy + one CTA. Footer repeats a contact CTA. | Keep short CTA bands that break up long pages and route users forward | Use LED-specific conversion paths such as `View Services`, `Our Projects`, `Contact Us`, and optionally `Download Capability Statement`. |
| Contact form patterns | Contact page uses a short intro and a minimal form with standard fields | Keep the short-intro + simple form pattern | Add service-area context and LED email. Do not include unsupported office/location details. |

## Proposed LED Plant & Civil sitemap
- `/` Home
  - Primary routing page for service capability, trust, featured projects, and contact CTA.
- `/services`
  - Detailed service page covering the four supported service detail blocks from David’s brief.
- `/projects`
  - Featured projects listing page using supplied project names and photos.
- `/about-us`
  - Company overview, leadership, mission, vision, values, and safety/quality systems.
- `/careers`
  - Keep as a lightweight page because David explicitly requested a careers section, but treat it as secondary until actual role copy exists.
- `/contact`
  - Contact page with form, email, and service-area coverage.

- Do not create a standalone `/accreditation` page at this stage.
- Fold accreditation/certification status into About because the available content is thin and the uploaded material supports commitment/progress, not completed ISO certification.
- Do not create individual service-detail or project-detail routes until more content exists.

## Global navigation
- Header nav: `Services`, `Projects`, `About Us`, `Contact`.
- Logo: links to home.
- Primary header CTA: `Contact Us`.
- Secondary utility item if space allows: `Capability Statement`.
- `Careers` should be linked in the footer by default.
- Move `Careers` into the primary nav only if active hiring becomes a regular priority.
- Footer should include:
  - contact email: `david@ledplantandcivil.com`
  - service area summary: South East QLD, including `Coolangatta to Harvey Bay` and `East Coast to Toowoomba`
  - capability statement download
  - careers link
  - social links only if confirmed

## Implementation status
- [x] Home implemented at `site/public/index.html`
- [x] Services implemented at `site/public/services.html`
- [x] Projects implemented at `site/public/projects.html`
- [x] About implemented at `site/public/about-us.html`
- [x] Careers implemented at `site/public/careers.html`
- [x] Contact implemented at `site/public/contact.html`
- [x] Shared assets, styling and navigation implemented under `site/public/assets/`

## Page outlines

### Home
- Hero
  - Strong civil/plant imagery or video from `/raw`
  - H1 should come from the business summary, not from the reference site structure
  - Supporting copy from the business summary
  - Primary CTAs: `View Services` and `Contact Us`
- What we do summary
  - Three summary blocks from David’s homepage content:
    - Civil works & earthworks
    - Underground services
    - Plant hire
- Who we are / leadership preview
  - Short company-intro paragraph
  - Leadership preview for Nick Murphy and John Finnegan
- Featured projects
  - Three project cards with supplied project names and homepage photos
- Why LED / proof band
  - Use supported proof themes: dependable delivery, experienced team, modern plant, safety/compliance, transparent operations
- Safety / quality / systems band
  - Use conservative wording around robust systems and certification pathway
- Final CTA band
  - Short prompt to contact LED for civil works, underground services, or plant hire

### Services
- Hero
  - H1: services overview
  - Short supporting copy from the business summary and `What we do`
- Services overview strip
  - Short summary of the three high-level service categories
- Detailed service sections
  - `Pipelaying`
  - `Detailed Excavation`
  - `Custom Drainage Solutions`
  - `Plant Hire - Wet & Dry`
- Each service section should use:
  - one heading
  - one concise description from David’s detailed service copy
  - one supporting image from `/raw`
- Close with a short CTA band to contact the team

### Projects
- Hero
  - H1 and one short intro sentence about infrastructure/project delivery
- Featured project listing
  - `Shadforth - Kinma Valley`
  - `JK Rowling - Logan Reserve`
  - `Winslow - Hayfield Ripley`
- Each project card should stay lightweight unless more detail is supplied:
  - project name
  - image
  - optional contractor/client label if already contained in the project name
- No individual project pages assumed
- Close with a CTA back to Services or Contact

### About
- Hero
  - H1 and short summary of LED Plant & Civil
- Company overview
  - Use the provided About Us narrative
- Leadership section
  - Nick Murphy
  - John Finnegan
- Mission
  - Use the provided mission text
- Vision
  - Use the provided vision text
- Core values / pillars
  - Quality Workmanship & Technical Excellence
  - Accountability and Trust - Through Complete Transparency
  - Safety Without Compromise
  - Continuous Improvement & Growth
- Safety / quality / environment systems
  - Mention robust systems and improvement pathway
  - If certification progress is shown, keep wording accurate: commitment/process underway, not accredited
- Capability statement block
  - Link to the uploaded capability statement

### Careers
- Justification
  - Keep this page because David requested a careers section and the reference site includes one, but keep it lightweight.
- Hero
  - H1 plus short hiring message grounded in safety, quality, and dependable delivery
- Working at LED block
  - Reuse approved themes from mission/values rather than inventing HR copy
- Opportunities block
  - Prefer either current roles or a simple expression-of-interest message until real role copy is supplied
- CTA
  - Apply via email/contact pathway until a dedicated recruitment workflow exists

### Contact
- Hero
  - H1 and short instruction copy
- Direct contact block
  - Email: `david@ledplantandcivil.com`
  - Service area coverage summary
- Contact form
  - Keep the reference site’s simple structure
  - Use a minimal field set such as first name, last name, email, subject/enquiry type, and message
- Service area / availability block
  - South East QLD
  - Coolangatta to Harvey Bay
  - East Coast to Toowoomba
- Optional closing block
  - Capability statement download or short reassurance copy

## Content mapping from David’s Markdown
| Source content | Recommended destination |
| --- | --- |
| Business summary | Home hero, About hero/supporting copy, footer/service-area summary |
| `What we do` list | Home service-summary blocks, Services overview strip |
| Homepage `Who we are` copy | Home leadership preview, About company overview |
| Homepage services summary | Home capability summary section |
| Homepage projects summary | Home featured projects, Projects listing |
| Services page detailed copy | Services page detail sections |
| About Us text | About company overview |
| Mission | About mission section |
| Vision | About vision section |
| Core values | About values/pillars section |
| `Include careers section? Yes` | Keep a lightweight Careers page, but do not overbuild without copy |
| Contact email | Contact page and footer |
| Service locations | Contact page service-area block and footer coverage summary |
| `Include contact form? Yes` | Contact page form |
| `Have ISO accreditation? No` | Avoid ISO-certified claims |
| Capability statement + certification screenshot | About safety/quality/systems block and capability statement download |

## Home page exclusions / constraints
- Do not include a Partner Logos section on the home page.
- Do not replicate roofing-sector blocks like `Commercial`, `Government`, `Retail`.
- Do not use roofing-specific claims, imagery, icons, or headlines.
- Do not use generic trust badges as a substitute for real LED proof points.
- Do not claim LED already holds ISO 9001, ISO 14001, or ISO 45001 certification.
- Do not invent project metrics, fleet counts, phone numbers, addresses, awards, or client logos.
- Keep the home page focused on civil capability, project imagery, leadership credibility, and contact conversion.

## Roadmap
- Build a branded `404.html` utility page that matches the current brutalist site language.
- Add favicon, open graph metadata and final browser polish once the content direction is approved.
- Decide whether the contact flow should stay mailto-based or move to a real form submission endpoint.
- Confirm whether careers stays as a footer-linked secondary page or becomes a primary-nav page later.

## Open questions / assumptions
- Confirm whether `/about-us` should stay as the route slug, or whether `/about` is preferred.
- Confirm whether `Careers` should stay footer-only until real role copy exists.
- Confirm whether the capability statement should be exposed as a global CTA or only on About/Contact.
- Confirm whether the certification-progress letter dated 10 March 2026 should appear publicly, and what exact wording is approved.
- Confirm the public phone number, if any. None was provided in the Markdown brief.
- Confirm whether a street or postal address should be shown publicly. The Markdown brief does not provide one.
- Confirm whether social links should appear in the footer.
- Confirm whether project cards need any extra metadata beyond the supplied project names and photos.
