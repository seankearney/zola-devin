# Copilot Instructions

## Project Overview

Zola Devin is a blog theme for the [Zola](https://www.getzola.org/) static site generator, built with Tailwind CSS and vanilla JavaScript.

## Critical: Compiled Tailwind CSS Must Be Committed

`static/tailwind.css` is the compiled Tailwind output and **must be checked into the repository**. This is a Zola theme — end users install it as a git submodule and run `zola build` without Node.js. The compiled CSS must ship with the theme.

Any PR that adds or changes Tailwind utility classes in templates or `static/input.css` must include a rebuilt `tailwind.css`:

```bash
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css
```

## Build Commands

```bash
npm install
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css
zola build
```

## Key Conventions

- Templates use Tera and extend `base.html`
- Dark mode uses `dark:` variant classes (class-based, not media query)
- Styles use Tailwind utility classes; custom components are in `static/input.css`
- Posts use colocated directories: `content/post/{date}-{slug}/index.md`
- Comments are YAML files colocated with posts
- Vanilla JS only — no frameworks beyond elasticlunr
