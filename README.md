# BUNA — Next-Generation Café Website

A premium, QR-first digital menu & brand experience. Pure HTML/CSS/JS — no build step.
Deploy to Vercel by dragging this folder into a new project (framework: **Other**).

## Structure
- `index.html` — the whole page (semantic, SEO meta + JSON-LD included)
- `css/style.css` — design system (edit CSS variables at the top to re-skin the brand)
- `js/main.js` — menu data + interactions (edit the `MENU` array to change items/prices)
- `assets/img/final/` — optimized photography (progressive JPEG, ~2.4 MB total)

## Customize
1. **Menu items / prices** → `MENU` array in `js/main.js`
2. **Brand colors / fonts** → `:root` variables in `css/style.css`
3. **Café story, address, hours** → About section & footer in `index.html`
4. **Replace photos** → drop your own shots into `assets/img/final/` using the same filenames
   (shoot warm, natural light, ceramic cups, wooden tables to match the aesthetic)

## Features
- Cinematic preloaded hero (optimized for mobile data)
- Sticky category navigation with automatic scroll-spy highlighting
- Signature item cards, favorites carousel, editorial banners
- Item detail modal with size / milk / add-on options
- Full-text search overlay
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Lazy-loading below the fold, tap targets ≥ 40 px, mobile bottom bar
