# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zola Devin is a blog theme for the [Zola](https://www.getzola.org/) static site generator, built with Tailwind CSS and vanilla JavaScript. It features dark/light mode, full-text search (elasticlunr), tags, pagination, comments (YAML-based), and responsive design.

## Build & Development Commands

```bash
# Install Tailwind CSS dependencies
npm install

# Local development - run these in separate terminals:
zola serve                                                          # Serves at http://127.0.0.1:1111
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css --watch  # Recompiles CSS on change

# Production build
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css
zola build                                                          # Output goes to public/
```

There are no tests or linting commands configured.

## Architecture

- **Templates** (`templates/`): Tera templates. `base.html` is the main layout; all others extend it. `post.html` renders individual posts with comments, `post-list.html` handles paginated blog listing.
- **Static assets** (`static/`): `input.css` is the Tailwind source; `tailwind.css` is the compiled output (checked in). JS files are vanilla: `theme.js` (dark/light toggle with localStorage), `search.js` (elasticlunr full-text search with debounce), `mobile-menu.js`.
- **Content** (`content/post/`): Posts use colocated directories (`content/post/{date}-{slug}/index.md`) containing the markdown, optional `promo-image.png`, and comment files (`comment-0001.yml`, etc.).
- **Config** (`config.toml`): Site settings, blog owner info (name, bio, avatar, social links), and taxonomy (tags) configuration.
- **Styling**: Tailwind with `@tailwindcss/typography` plugin. Dark mode is class-based. Custom component classes (`.btn-primary`, `.card`, `.nav-link`) are defined in `static/input.css`. Theme colors use the Slate palette with Blue accents.

## Key Conventions

- **`static/tailwind.css` must be committed.** This is a Zola theme — end users install it as a git submodule and run `zola build` without Node.js. The compiled Tailwind CSS must be checked in so it ships with the theme. Any PR that adds or changes Tailwind utility classes in templates or `input.css` must include a rebuilt `tailwind.css` (`npx tailwindcss -i ./static/input.css -o ./static/tailwind.css`).
- Post front matter uses TOML with `[extra]` and `[taxonomies]` sections
- Comments are stored as YAML files colocated with the post, not in a database
- Dark mode is the default; toggled via class on `<html>` element
- Deployment is automated via GitHub Actions (`shalzz/zola-deploy-action`) to GitHub Pages on push to main
- Minimum Zola version: 0.22.1
