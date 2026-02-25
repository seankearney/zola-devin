# Code Review Checklist — Zola Devin Theme

## Structure & Architecture
- Files in correct directories: `templates/`, `static/`, `content/post/`
- Posts use colocated directories: `content/post/{date}-{slug}/index.md`
- Comments stored as colocated YAML files (`comment-0001.yml`)
- Templates extend `base.html`; new pages follow the existing Tera inheritance pattern
- Config changes in `config.toml` use `[extra]` section for custom values

## Tailwind CSS & Styling
- Styles use Tailwind utility classes, not inline styles or raw CSS
- Custom component classes (`.btn-primary`, `.card`, `.nav-link`) defined in `static/input.css`
- Dark mode uses `dark:` variant classes (class-based, not media query)
- Color palette stays within Slate + Blue accent scheme
- Responsive breakpoints used where needed (`sm:`, `md:`, `lg:`)
- `static/tailwind.css` is the compiled output — changes should go through `input.css`

## Dark / Light Mode
- Both themes render correctly for any UI change
- Sufficient contrast in both modes
- Theme toggle persists via `localStorage`
- No flash of wrong theme on page load (inline script in `<head>` handles this)

## JavaScript
- Vanilla JS only — no frameworks or libraries beyond elasticlunr
- No `console.log` or debug statements left in
- Search input is sanitized before use in `RegExp`
- `innerHTML` usage escapes user/index content to prevent XSS
- Scripts use `defer` to avoid render-blocking

## Templates (Tera)
- TOML front matter with `[extra]` and `[taxonomies]` sections
- No duplicated markup blocks — extract into macros or partials if repeated
- Pagination and non-paginated paths both handled
- `get_url()` used for asset paths instead of relative paths

## Performance
- No universal `*` selectors adding transitions or styles to every element
- Scripts and large assets loaded with `defer` or `async`
- Images use reasonable sizes; promo images are optional via front matter
- No O(n²) template loops where linear alternatives exist

## Accessibility
- Interactive elements have `aria-` attributes (`aria-expanded`, `aria-label`)
- Semantic HTML (`<nav>`, `<article>`, `<header>`, `<footer>`)
- Mobile menu closes on link click and outside click
- Color contrast meets WCAG AA in both themes

## SEO & Meta
- Pages include `<meta name="description">` where applicable
- Open Graph tags (`og:title`, `og:description`, `og:image`) present
- `<title>` is descriptive and unique per page

## Build Verification
- `npm install` succeeds
- `npx tailwindcss -i ./static/input.css -o ./static/tailwind.css` compiles without errors
- `zola check` passes (no broken links or config issues)
- `zola build` completes without template errors
