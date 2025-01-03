# Zola Devin Theme

A modern, responsive theme for Zola static site generator featuring Tailwind CSS, dark mode support, and vanilla JavaScript. Perfect for blogs and personal websites.

## Features

- 🎨 Modern design with Tailwind CSS
- 🌓 Dark mode support with smooth transitions
- 🔍 Built-in search functionality
- 📱 Fully responsive layout
- 💬 Comment system support
- 🏷️ Tag and category support
- 📄 Pagination for blog posts
- 📊 Archive page with post grouping
- 🔗 Social media integration
- 📰 RSS feed support

## Installation

1. Create a new Zola site:
```bash
zola init mysite
cd mysite
```

2. Clone this repository into your themes directory:
```bash
git clone https://github.com/digitaldjpool/devin-uitest.git themes/zola-devin
```

3. Enable the theme in your `config.toml`:
```toml
theme = "zola-devin"
```

## Configuration

### Required Configuration

Update your `config.toml` with these settings:

```toml
base_url = "/"
title = "Your Site Title"
description = "Your site description"
default_language = "en"

# Theme-specific settings
theme = "zola-devin"

[markdown]
highlight_code = true
highlight_theme = "dracula"

[extra]
# Blog owner information
owner_name = "Your Name"
owner_bio = "A short bio about yourself"
owner_avatar = "/images/avatar.jpg"  # Place your avatar in the static/images directory

# Social media links
[extra.social]
github = { username = "username" }
twitter = { username = "username" }
linkedin = { username = "username" }
stackoverflow = { userid = "123456" }
```

### Theme Configuration (theme.toml)

The theme includes a `theme.toml` with default settings:

```toml
name = "zola-devin"
description = "A modern blog theme for Zola with Tailwind CSS"
license = "MIT"
homepage = "https://github.com/digitaldjpool/devin-uitest"
min_version = "0.17.0"

[author]
name = "Devin"
homepage = "https://devin.ai"
```

### Enabling Comments

Comments are supported through YAML files co-located with blog posts. To enable comments:

1. Create a comment file in your post directory:
```yaml
# content/post/my-post/comment-0001.yml
author: "John Doe"
date: "2024-01-01T12:00:00Z"
content: "Great post! Thanks for sharing."
```

2. Comments are automatically displayed at the bottom of blog posts when comment files are present.

## Content Structure

```
content/
├── _index.md              # Homepage content
├── about.md              # About page
├── archive.md           # Archive page
└── post/               # Blog posts directory
    ├── _index.md      # Blog listing page
    └── my-post/       # Individual post directory
        ├── index.md   # Post content
        └── comment-0001.yml  # Comments
```

### Post Front Matter

Use this front matter in your post's `index.md`:

```yaml
+++
title = "My Post Title"
date = 2024-01-01
description = "A brief description of the post"
[taxonomies]
tags = ["tag1", "tag2"]
+++
```

## Building and Deployment

1. Install dependencies and build assets:
```bash
# Install dependencies
npm install

# Build Tailwind CSS (in watch mode for development)
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css --watch

# Or build once for production
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css
```

2. Build and serve your site:
```bash
# Build for production
zola build

# Preview locally (available at http://127.0.0.1:1111)
zola serve
```

## Customization

### Tailwind CSS

The theme uses Tailwind CSS for styling. Customize the design by modifying:

- `static/input.css` - Base styles and components
- `tailwind.config.js` - Theme configuration and extensions

### Templates

Override any template by creating a matching file in your site's `templates` directory:

- `templates/base.html` - Main layout
- `templates/index.html` - Homepage
- `templates/post.html` - Blog post
- `templates/post-list.html` - Blog listing
- `templates/page.html` - Regular pages
- `templates/archive.html` - Archive page

## License

This theme is released under the MIT License. See the LICENSE file for details.
