## AllegiantVETS Website Redesign

This repository contains a static website redesign for AllegiantVETS. It focuses on clarity, accessibility, and easy content discovery for veterans seeking mentorship, certifications, and community.

### Tech stack
- **Architecture**: Static HTML, CSS, minimal vanilla JS
- **Styling**: Single stylesheet `style.css`
- **Scripts**: `js/script.js` (mobile menu)
- **Assets**: `assets/images/`, `assets/logos/`

### How it’s structured
- `nav.html`: Shared navigation, dynamically injected into pages via `fetch('nav.html')` from each page.
- `index.html`: Home with hero, features, CTA, and extended footer.
- Content pages: `about.html`, `community.html`, `resources.html`, `survey.html`, `contact.html`, `faq.html`, `events.html`, `who.html`, `what.html`, `join.html`, `howtojoin.html`, `partners.html`, `sitemap.html`, `404.html`.
- `style.css`: Global styles incl. navbar, hero, cards, CTA, extended footer, forms, responsive rules.
- `js/script.js`: Toggles the mobile navigation.

### Local development
Because pages load `nav.html` via `fetch`, you must serve the site over HTTP (opening HTML files directly from the filesystem will block `fetch`).

Quick start:

```bash
cd /workspace
python3 -m http.server 8080
# Visit http://localhost:8080
```

### Design overview
- **Brand palette** (from CSS):
  - Navy `#003366` (primary), Hover `#004477`
  - Deep blue `#002f5a` (extended footer)
  - Accent red `#e30613` (CTAs), Hover `#ba0510`
  - Light blue `#aad4ff` (accents)
- **Typography**: Pages currently load Google Font Roboto, while CSS specifies `Segoe UI`. Choose one primary family and apply consistently.
- **Layout**:
  - Responsive navbar with dropdown and hamburger menu
  - Hero with image overlay (`assets/images/home-banner.jpg`)
  - Feature cards with subtle elevation on hover
  - Prominent CTA section
  - Extended footer with Connect, About, Contact and “Powered By” logo

### Key components
- **Navbar** (`nav.html`): Logo, primary links, Tools & Support dropdown, mobile hamburger (`toggleMenu()` in `js/script.js`).
- **Hero** (`index.html` + `style.css`): Background image with semi-transparent overlay for contrast.
- **Cards**: Reusable `.card` pattern for features/highlights.
- **CTA**: Dark section with accent button.
- **Extended Footer**: Grid layout with social links, quick links, and contact details.

---

## Modernization recommendations

The list below is prioritized to improve polish, accessibility, brand consistency, and public credibility.

### 1) Immediate fixes (functional + quick wins)
- Correct script path in pages that include the navbar:
  - `index.html` references `script.js` at repo root; the file is actually in `js/script.js`.
- Replace placeholder social links (`#`) in the extended footer with real URLs.
- Avoid spaces in asset filenames (e.g., `assets/logos/AllegiantVets Logo.jpeg`) to prevent URL encoding bugs; prefer `AllegiantVets-Logo.jpeg` or SVG.
- Consolidate duplicate CSS blocks for `.extended-footer` and `.footer-grid` (currently declared twice) to a single, canonical definition.

### 2) Branding and UI polish
- Choose a single primary font stack (e.g., Inter, Roboto, or Segoe UI) and apply site-wide. If using Google Fonts, add `preconnect` and `font-display: swap`.
- Introduce CSS variables for colors, spacing, and radii for consistent theming and easier future changes.
- Upgrade the hero: add subtle gradient overlay, larger typographic scale, and improved button contrast.
- Make the navbar sticky, add active/hover/aria states, and refine dropdown animations.
- Use SVG logos where possible for crisp rendering; provide `height`/`width` attributes for layout stability.

Example design tokens:

```css
:root {
  --color-navy: #003366;
  --color-navy-600: #004477;
  --color-deep-blue: #002f5a;
  --color-accent: #e30613;
  --color-accent-600: #ba0510;
  --color-text: #333333;
  --color-surface: #f8f9fa;
  --radius-sm: 4px;
  --radius-md: 8px;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
}
```

### 3) Accessibility
- Use semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`) and landmark roles where appropriate.
- Ensure color contrast meets WCAG AA (navy on white is good; check links on dark backgrounds).
- Add `aria-expanded` to the hamburger button, and make the dropdown menu keyboard-accessible.
- Provide descriptive `alt` text for images and logos.
- Add `:focus-visible` styles for links, buttons, and interactive elements.

### 4) SEO + social sharing
- Add `meta name="description"` to each page with page-specific summaries.
- Add Open Graph and Twitter Card tags on key pages (title, description, social image).
- Include a `robots.txt` and ensure `sitemap.html` is paired with an XML sitemap if search indexing is desired.
- Use canonical URLs where relevant.

Example social meta (in `<head>`):

```html
<meta name="description" content="Veterans empowering veterans through mentorship, certifications, and community.">
<meta property="og:title" content="AllegiantVETS" />
<meta property="og:description" content="Veterans empowering veterans through mentorship, certifications, and community." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/assets/images/social-card.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

### 5) Performance
- Convert hero/backgrounds and large images to modern formats (WebP/AVIF) and set explicit dimensions.
- Lazy load non-critical images (`loading="lazy"`).
- Preconnect to Google Fonts and preloading the chosen font weights; serve a minimal subset.
- Minify and combine CSS/JS for production; add cache headers if hosted behind a CDN.

### 6) Completeness for a public face
- Add a favicon and touch icons.
- Add an “Our Impact” or “Success Stories” section with quotes and partner logos.
- Add “Press/Media” resources and brand guidelines PDF.
- Add a “Donate” or “Get Involved” CTA if appropriate.
- Include a clear Contact form flow (front-end validation, success/failure states, and a backend endpoint if available).
- Add a “Code of Conduct” and “Community Guidelines” page if Discord/community is central.

### 7) Optional enhancements
- Dark mode with `prefers-color-scheme` and a toggle.
- Subtle, tasteful animations (e.g., fade/slide on card reveal, reduced motion support).
- Container queries to improve layout at intermediate widths.
- Analytics (e.g., privacy-friendly Plausible/GA4) with consent banner if required.

---

## Known issues and to‑do checklist
- [ ] Fix script path: `index.html` should load `js/script.js` (not `script.js`).
- [ ] Replace placeholder social links in the extended footer with real URLs.
- [ ] Unify font stack and remove unused Google Font or update CSS to use it consistently.
- [ ] Rename logo file to remove spaces; consider converting to SVG.
- [ ] Consolidate duplicate `.extended-footer` and `.footer-grid` CSS declarations.
- [ ] Add meta description, Open Graph/Twitter tags, and favicon.
- [ ] Add `robots.txt` and XML sitemap if search indexing is desired.
- [ ] Improve accessibility: keyboard-nav dropdown, focus styles, aria attributes.
- [ ] Optimize images (WebP/AVIF), add `loading="lazy"`.

---

## Deployment
Any static hosting provider works (GitHub Pages, Netlify, Vercel, S3+CloudFront). Ensure:
- Correct base paths for assets and links
- Caching headers for images/CSS/JS
- Redirects for 404 handling (use `404.html`)

---

## Maintainers’ notes
- Keep navigation in `nav.html` and fetch it at runtime to avoid duplication. Alternatively, consider a static site generator (11ty, Astro) to render partials at build time for better SEO and performance.
- Centralize design tokens in `:root` and refactor color literals to variables as time allows.

